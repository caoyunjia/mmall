package com.mmall.service.impl;

import com.mmall.common.Const;
import com.mmall.common.ServerResponse;
import com.mmall.common.TokenCache;
import com.mmall.dao.UserMapper;
import com.mmall.pojo.User;
import com.mmall.service.IUserService;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

/**
 * Created by A on 2017/8/21.
 */
@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public ServerResponse<User> login(String username, String password) {
        int resultCount = userMapper.checkUsername(username);
        if (resultCount == 0) {
            return ServerResponse.createByErrorMessage("用户名不存在");
        }
        //TODO  进行密码校验
        User user = userMapper.selectLogin(username, DigestUtils.md5Hex(password));
        if (user == null) {
            return ServerResponse.createByErrorMessage("登录密码错误");
        }
        user.setPassword(null);

        return ServerResponse.createBySuccess("登录成功", user);
    }

    @Override
    public ServerResponse<String> register(User user) {
        //检查用户名是否存在
        ServerResponse<String> checkUsername = checkValid(Const.USERNAME, user.getUsername());
        if(!checkUsername.isSuccess()){
            return checkUsername;
        }
        ServerResponse<String> checkEmail = checkValid(Const.EMAIL, user.getEmail());
        if(!checkEmail.isSuccess()){
            return checkEmail;
        }
        //用户名和邮箱都校验通过唯一,默认注册是普通用户
        user.setRole(Const.Role.ROLE_CUSTOMER);
        user.setPassword(DigestUtils.md5Hex(user.getPassword()));
        int registResult = userMapper.insert(user);
        if (registResult == 1) {
            return ServerResponse.createBySuccessMessage("注册成功");
        }
        return ServerResponse.createByErrorMessage("注册失败");
    }

    @Override
    public ServerResponse<String> checkValid(String str, String type) {
        if (StringUtils.isNotBlank(type)) {
            if (Const.USERNAME.equals(type)) {
                int resultUsername = userMapper.checkUsername(str);
                if (resultUsername > 0) {
                    return ServerResponse.createByErrorMessage("用户名已存在");
                }
            }
            if (Const.EMAIL.equals(type)) {
                //执行校验
                int resultEmail = userMapper.checkEmail(str);
                if (resultEmail > 0) {
                    return ServerResponse.createByErrorMessage("用户邮箱已存在");
                }
            }
        }else{
            return ServerResponse.createByErrorMessage("参数有误");
        }
        return ServerResponse.createBySuccessMessage("校验成功");
    }

    @Override
    public ServerResponse<String> selectQuestion(String username) {
        //首先检查用户是否存在
        ServerResponse<String> checkValid = checkValid(Const.USERNAME, username);
        if(checkValid.isSuccess()){
            //如果成功,证明没有改用户
            return ServerResponse.createByErrorMessage("用户不存在");
        }
        //用户存在,通过用户名在数据库里查找问题
        String question=userMapper.selectQuestionByUsername(username);
        if(StringUtils.isNotBlank(question)){
            return ServerResponse.createBySuccessMessage(question);
        }
        return ServerResponse.createByErrorMessage("用户问题为空");
    }

    @Override
    public ServerResponse<String> checkAnswer(String username, String question, String answer) {
        int resultCount=userMapper.checkAnswer(username,question,answer);
        if(resultCount>0){
            //证明问题正确,可以进行修改
            String forgetToken= UUID.randomUUID().toString();
            TokenCache.setKey(TokenCache.TOKEN_PREFIX+username,forgetToken);
            return ServerResponse.createBySuccessMessage(forgetToken);
        }
        return ServerResponse.createByErrorMessage("问题答案有误");
    }

    @Override
    public ServerResponse<String> forgetResetPassword(String username, String passwordNew, String token) {
        if(StringUtils.isBlank(token)){
            return ServerResponse.createByErrorMessage("参数错误");
        }
        //校验用户名是否存在
        ServerResponse<String> checkUsername = checkValid(Const.USERNAME, username);
        if (checkUsername.isSuccess()){
            return ServerResponse.createByErrorMessage("用户名不存在");
        }
        //验证token是否与本地保存的一致
        String forgetToken = TokenCache.getKey(TokenCache.TOKEN_PREFIX + username);
        if(StringUtils.isBlank(forgetToken)) {
            //如果获取不到token,证明token过期了
            return ServerResponse.createByErrorMessage("token无效或过期");
        }

            //如果token与本地的token一致,执行修改密码操作
            if(StringUtils.equals(forgetToken,token)){
                User user = new User();
                user.setUsername(username);
                user.setPassword(DigestUtils.md5Hex(passwordNew));
                int result = userMapper.updateByPrimaryKey(user);
                if(result>0){
                    //修改成功
                    return ServerResponse.createBySuccessMessage("修改密码成功");
                }
            }else{
                //token与本地不一致
                return ServerResponse.createByErrorMessage("token错误,请重新获取修改密码的token");
            }
        return ServerResponse.createByErrorMessage("修改密码失败");
    }

    @Override
    public ServerResponse<String> resetPassword(String passwordOld, String passwordNew, User user) {
        Integer userId = user.getId();
        User userDb = userMapper.selectByPrimaryKey(user.getId());
        if(!StringUtils.equals(userDb.getPassword(),DigestUtils.md5Hex(passwordOld))){
            //如果密码和数据库密码不一致
            return ServerResponse.createByErrorMessage("旧密码错误,请重新输入");
        }
        //老密码与新密码一直,执行修改密码操作
        User newUser = new User();
        newUser.setPassword(DigestUtils.md5Hex(passwordNew));
        newUser.setId(user.getId());
        int result = userMapper.updateByPrimaryKeySelective(newUser);
        if(result>0){
            return ServerResponse.createBySuccessMessage("密码修改成功");
        }
        return ServerResponse.createByErrorMessage("密码修改失败");
    }

    @Override
    public ServerResponse<User> updateInformation(User user) {
        //校验更新,不更新username
        user.setUsername(null);
        //校验email
        int resultCount=userMapper.checkEmailByUserId(user.getEmail(),user.getId());
        //如果其他用户已经有该邮箱,提示
        if(resultCount>0){
            return ServerResponse.createByErrorMessage("邮箱已经被使用");
        }
        //执行更新操作
        User updateUser = new User();
        updateUser.setId(user.getId());
        updateUser.setEmail(user.getEmail());
        updateUser.setQuestion(user.getQuestion());
        updateUser.setAnswer(user.getAnswer());
        int updateCount = userMapper.updateByPrimaryKeySelective(updateUser);
        if (updateCount > 0) {
            return ServerResponse.createBySuccess("更新用户信息成功", user);
        }
        return ServerResponse.createByErrorMessage("更新用户信息失败");
    }

    @Override
    public ServerResponse<User> getInformation(Integer id) {
        User user = userMapper.selectByPrimaryKey(id);
        if (user == null) {
            return ServerResponse.createByErrorMessage("查询的用户不存在");
        }
        user.setPassword(StringUtils.EMPTY);
        return ServerResponse.createBySuccess(user);
    }


}
