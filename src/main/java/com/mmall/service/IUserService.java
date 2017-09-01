package com.mmall.service;

import com.mmall.common.ServerResponse;
import com.mmall.pojo.User;

/**
 * Created by A on 2017/8/21.
 */
public interface IUserService {
    ServerResponse<User> login(String username, String password);
}
