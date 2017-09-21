package com.mmall.controller.portal;

import com.mmall.common.Const;
import com.mmall.common.ResponseCode;
import com.mmall.common.ServerResponse;
import com.mmall.pojo.User;
import com.mmall.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

/**
 * Created by A on 2017/8/21.
 */
@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private IUserService iUserService;

    /**
     * 登录接口
     *
     * @param username 用户名
     * @param password 密码
     * @param session
     * @return 返回响应信息
     */
    @RequestMapping(value = "login", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<User> login(String username, String password, HttpSession session) {
        //登录方法

        ServerResponse<User> response = iUserService.login(username, password);
        if (response.isSuccess()) {
            session.setAttribute(Const.CURRENT_USER,response.getData());
        }
        return response;
    }

    /**
     * 注销
     *
     * @param session
     * @return 返回响应信息
     */
    @RequestMapping(value = "logout", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<User> logout(HttpSession session) {
        //将当前的session移除
        session.removeAttribute(Const.CURRENT_USER);
        return ServerResponse.createBySuccess();
    }

    /**
     * 注册功能
     *
     * @param user
     * @return
     */
    @RequestMapping(value = "register", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> register(User user) {
        //检查用户名是否存在
        return iUserService.register(user);
    }

    /**
     * 校验用户名或邮箱
     * @param type 校验类型,USERNAME表示用户名,EMAIL表示邮箱
     * @param str str表示要校验的数据
     * @return
     */
    @RequestMapping(value = "checkValid", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> checkValid(String str,String type){
        return iUserService.checkValid(str, type);
    }

    /**
     * 获取用户登录后的信息
     * @param session
     * @return
     */
    @RequestMapping(value = "getUserInfo", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<User> getUserInfo(HttpSession session){

        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            return ServerResponse.createBySuccess(user);
        }
        return ServerResponse.createByErrorMessage("无法获取用户信息,用户尚未登录");
    }

    /**
     * 根据用户名获取用户的问题
     * @param username
     * @return
     */
    @RequestMapping(value = "forgetGetQuestion", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> forgetGetQuestion(String username){
            return iUserService.selectQuestion(username);
    }

    /**
     * 根据用户名,用户问题,用户答案验证,如果验证成功的话,会保存一个token,同时将token返回给用户
     * @param username
     * @param question
     * @param answer
     * @return
     */
    @RequestMapping(value = "forgetCheckAnswer", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> forgetCheckAnswer(String username,String question,String answer){
        return iUserService.checkAnswer(username,question,answer);
    }

    /**
     * 通过用户的提示问题进行重置密码
     * @param username
     * @param passwordNew
     * @param token
     * @return
     */
    @RequestMapping(value = "forgetResetPassword", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> forgetResetPassword(String username,String passwordNew,String token){
        return iUserService.forgetResetPassword(username,passwordNew,token);
    }

    /**
     * 登录状态的重置密码
     * @param passwordOld
     * @param passwordNew
     * @param session
     * @return
     */
    @RequestMapping(value = "resetPassword", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> resetPassword(String passwordOld,String passwordNew,HttpSession session){
        User user = (User)session.getAttribute(Const.CURRENT_USER);
        if(user==null){
            return ServerResponse.createByErrorMessage("用户未登录");
        }
        return   iUserService.resetPassword(passwordOld,passwordNew,user);
    }

    /**
     * 登录状态下进行更新
     * @param user
     * @return
     */
    @RequestMapping(value = "updateInformation", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<User> updateInformation(User user,HttpSession session){
        User loginUser = (User)session.getAttribute(Const.CURRENT_USER);
        if(loginUser==null){
            return ServerResponse.createByErrorMessage("用户未登录");
        }
            user.setId(loginUser.getId());
        ServerResponse<User> response = iUserService.updateInformation(user);
        if (response.isSuccess()) {
            session.setAttribute(Const.CURRENT_USER,response.getData());
        }
        return response;
    }

    /**
     *
     * @param session
     * @return
     */
    @RequestMapping(value = "getInformation", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<User> getInformation(HttpSession session){
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user == null) {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.NEED_LOGIN.getCode(),"用户未登录,需要强制登录status=10");
        }
        return iUserService.getInformation(user.getId());

    }

}
