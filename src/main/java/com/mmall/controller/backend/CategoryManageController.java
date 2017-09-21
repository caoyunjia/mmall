package com.mmall.controller.backend;

import com.mmall.common.Const;
import com.mmall.common.ResponseCode;
import com.mmall.common.ServerResponse;
import com.mmall.pojo.User;
import com.mmall.service.ICategoryService;
import com.mmall.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

/**
 * Created by A on 2017/9/21.
 */
@Controller
@RequestMapping("/manage/category")
public class CategoryManageController {
    @Autowired
    private IUserService iUserService;
    @Autowired
    private ICategoryService iCategoryService;

    @RequestMapping(value = "getCategory",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<Object> getCategory(){

        return null;
    }

    /**
     * 添加分类
     * @param categoryName
     * @param parentId  如果没有输入,默认为0
     * @param session
     * @return
     */
    @RequestMapping(value = "addCategory",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse addCategory(String categoryName,@RequestParam(defaultValue = "0") Integer parentId, HttpSession session){
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user == null) {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.NEED_LOGIN.getCode(),"用户未登录,请登录操作");
        }
        //只有管理员才能添加分类
        ServerResponse response = iUserService.checkIsAdminRole(user);
        if (!response.isSuccess()) {
            return ServerResponse.createByErrorMessage("您不是管理员,没有权限添加");
        }
        //执行添加分类的方法
        return iCategoryService.addCategory(categoryName, parentId);
    }

}
