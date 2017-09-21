package com.mmall.service;

import com.mmall.common.ServerResponse;

/**
 * Created by A on 2017/9/21.
 */
public interface ICategoryService {

     ServerResponse addCategory(String categoryName,Integer parentId);
}
