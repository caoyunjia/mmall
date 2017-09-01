// requestObj请求相关
var requestObj = {
	port : "http://localhost:8080/jsyServer/",
	timeoutTime : 60000,
	address : {
		findSxyJcxx : "jsyKhJcxx/jsyKhJcxxVOById.do", // 获得上下游基础资料信息
		modifySxyJcxx : "jsyKhJcxx/update.do", // 修改上下游客户信息
		findSxyFrCw : "jsyKhFrcwxx/jsyKhFrcwxxVOByLx.do", // 获得上下游法人法人材料
		modifySxyFrCw : "jsyKhFrcwxx/update.do", // 修改上下游法人材料
		cwbbXx : "jsyKhCwbb/query.do", // 财务报表列表
		vcode : "common/vcode.do",// 验证码
		ddic : "common/datadic.do",// 数据字典
		home : "common/home.do",// 主页数据加载
		productDetail : "common/productDetail.do",// 产品推荐详情
		selectCustom : "common/selectCustom.do",// 自定义下拉-客户
		login : "common/login.do",// 登录
		logout : "common/logout.do", // 注销
		uploadfile : "common/upload.do", // 文件上传
		removefile : "common/removefile.do", // 删除文件，根据id
		queryMenu:"jsyMenu/query.do",//个人中心菜单
		changePassword : "jsyKhZhgl/changePassword.do",// 修改密码
		changeAcceptAgreement : "jsyKhCyfgl/changeAcceptAgreement.do",// 接受协议
		getAcceptAgreementById : "jsyKhCyfgl/getAcceptAgreementById.do",// 接受协议
		xtgg : "jsyGlXtgg/getJsyGlXtgg.do",// 系统公告查询
		xtggxq : "jsyGlXtgg/getJsyGlXtggVOById.do",// 系统公告查询
		cjwt : "jsyGlCjwt/getJsyGlCjwt.do",// 常见问题查询
		cjwtxq : "jsyGlCjwt/getJsyGlCjwtVOById.do",// 系统公告查询
		checkUser : "common/check.do", // 检查用户是否登录
		jsyKhDdxxQuery : "jsyKhDdxx/query.do",// 获取对应上下游所有订单信息
		jsyKhDdxxSave : "jsyKhDdxx/save.do",// 新增订单信息
		jsyKhDdxxDelete : "jsyKhDdxx/delete.do",// 删除指定订单信息
		jsyKhDdxxUpdate : "jsyKhDdxx/update.do",// 修改指定订单信息
		jsyKhDdxxSearchone : "jsyKhDdxx/jsyKhDdxxVOById.do",// 查找指定订单信息
		jsyKhYszkquery : "jsyKhYszk/query.do",// 获取对应上下游所有订单信息
		jsyKhYszksave : "jsyKhYszk/cwbbSave.do",// 新增应收账款信息
		jsyKhYszkdelete : "jsyKhYszk/delete.do",// 删除指定订单信息
		jsyKhYszkupdate : "jsyKhYszk/updatefileupload.do",// 修改指定应收账款信息(包括上传文件)
		jsyKhYszkupdate1 : "jsyKhYszk/update.do",// 修改指定应收账款信息
		jsyKhyszkSearchone : "jsyKhYszk/getJsyKhYszkVOById.do",// 查找指定应收账款信信息
		cwbbUpload : "jsyKhCwbb/cwbbSave.do", // 保存报表及上传文件
		deleteBb : "jsyKhCwbb/delete.do", // 删除报表
		findCwbbAndWj : "jsyKhCwbb/findCwbbAndWj.do", // 查看财务报表和文件
		findKhmc : "jsyKhCwbb/findKh.do", // 获得用户的名称
		getCpxxDetail : "jsyCpwh/getJsyCpwhVOById.do",// 获取所有订单信息
		jsyKhRzgl : "jsySqRzsq/query.do",// 融资管理页面
		sendSmsForRegist : "dubbo/sendSmsForRegist.do",// 注册时短信验证
		sendSmsForResetPwd : "dubbo/sendSmsForResetPwd.do",//重置密码是获取短信验证码
		sendSmsForUpdateMobile : "dubbo/sendSmsForUpdateMobile.do",//修改手机号获取短信验证码
        registMobileVerify : "dubbo/registMobileVerify.do",//注册用
        mobileVerify : "dubbo/mobileVerify.do",//
		register : "register/save.do",// 注册
		registerJsy : "register/saveUserInfo.do",// 初始登录信息更新到及时雨
		resetPwdWithoutRealName : "register/resetPwdWithoutRealName.do",//重置密码
		jsyAdditionalRegist : "register/jsyAdditionalRegist.do",//及时雨补充注册信息
		queryQy : "jsyKhCyfgl/query.do",// 注册时查询是否重复
		jsyKhEdxx : "jsyKhEdxx/getJsyKhEdxxVOById.do",// 查询登录客户的额度信息
		jsyKhedxxquery : "jsyKhEdxx/getjsyedxxByedlx.do",// 根据承保额度类型查询
		jsyKhEdxxFind : "jsyKhEdxx/getJsyKhEdxxVOByKhh.do",// 查询首頁上下游客戶的额度信息
		jsykhedxxById : "jsyKhEdxx/getJsyKhEdxxVOById.do",// 查询首頁上下游客戶的额度信息
		jsyKhEdls : "jsyLsEdxxls/getJsyKhEdlsById.do",// 查询首頁上下游客戶的额度流水信息
		jsyRzFind : "jsySqRzsq/rZsQlist.do",// 首页展示融资申请信息列表
		jsyFkFind : "jsyKhFkxx/fkList.do",// 查询首頁上下游放款信息列表
		syfkxxck : "jsyKhFkxx/getJsyKhFkxxVOById.do",// 查询首頁上下游放款信息查看
		jsyKhhkls : "jsyKhHkxx/hkList.do",// 查询首頁上下游还款信息
		jsyGlYwyj : "jsyGlYwyjb/findAllYwyjInfo.do",// 查询首頁上下游业务预警信息
		jsySqZrsqList : "jsySqZrsq/zrsqFind.do", // 获得首頁增信机构融資申请准入信息
		jsySqrzsqList : "jsySqRzsq/rZsQlist.do",// 获得首页增信机构融资申请列表
		jrjgsyRzFind : "jsySqRzsq/rZsQlist.do",// 获得首页金融机构融资处理列表
		jrjgedzrdz : "jsySqZrsq/zrsqFind.do", // 获得首頁金融机构融資申请准入信息
		jsyKhedxxquery1 : "jsyKhEdxx/getjsyedxxByedlx1.do",// 根据授信额度类型查询
		jsyKhBdxx : "jsyKhBdxx/getJsyKhBdxxVOById.do",// 查询登录客户的表单信息
		jsyKhDdxx : "jsyKhDdxx/jsyKhDdxxVOById.do",// 查询登录客户的订单信息
		modifySxyZl : "jsyKhGlxx/update.do", // 核心企业上下游资料修改
		jcxxSave : "jsyKhJcxx/save.do", // 保存基本信息
		jcxxFrSave : "jsyKhFrcwxx/save.do",// 保存法人信息
		jsyKhZhQuery : "jsyKhZhgl/query.do",// 查询客户账户信息
		jsyKhZhUpd : "jsyKhZhgl/update.do",// 更新客户账户信息
		jsyWjsc : "jsyWjsc/queryOne.do", // 查询所有征信报告
		wjscQuery : "jsyWjsc/query.do", // 获得补充信息文件
		deletewj :  "jsyWjsc/delete.do", // 删除补充信息文件
		jsyMmcz : "jsyKhZhgl/updPwd.do",// 密码重置
		jsyMmxg : "jsyKhZhgl/modPwd.do",// 密码修改
		modDlzh : "jsyKhZhgl/modDlzh.do",// 密码修改
		zxjgedzrdz : "jsySqZrsq/query.do", // 获得申请信息
		zrsqxg : "jsySqZrsq/updateAll.do", // 准入申请信息修改 审核通过/未通过
		jsyqueryLx : "jsyKhZhgl/queryLx.do",// 查询账户类型
		jsyzrsqFind : "jsySqZrsq/zrsqFind.do",// 上下游首页展示融资申请信息列表
		queryExpWsx : "jsyKhZhgl/queryExpWsx.do",
		getHxqy : "jsyKhGlxx/queryByGlkhh.do",// 查询该客户向上关联企业
		getHxqyf : "jsyKhGlxx/queryByGlkhhf.do",// 查询该客户向下关联企业
		getRzcp : "jsyKhCyfgl/queryByKhh.do",// 获取融资产品
		findzrxx : "jsySqZrsq/jsySqZrsqVOById.do", // 得到一条准入信息
		jsyRzsqGetSqbh : "jsySqRzsq/getRzsqbh.do",// 获取融资申请编号
		sxyrzsq : "jsySqRzsq/save.do",// 保存融资申请信息
		jsyRzsqDdQuery : "jsyKhDdxx/queryBykhh.do",// 获取该客户所有订单信息
		jsyRzsqYszkQuery : "jsyKhYszk/queryMyYszk.do",// 获取该客户应收账款信息
		jsyRzsqTjsp : "jsySqRzsq/tjsp.do",// 提交融资申请至及时雨审批
		findRzsq : "jsySqRzsq/getRzsq.do",// 获取融资申请信息
		findRzsqDdxx : "jsySqRzsqDdxx/query.do",// 获取融资申请订单信息
		findRzsqYszkxx : "jsySqRzsqYszkxx/query.do",// 获取融资申请应收账款信息
		zxjgRzspPass : "jsySqRzsq/zxPass.do",// 增信机构融资申请审批通过
		zxjgRzspRefuse : "jsySqRzsq/zxRefuse.do",// 增信机构融资申请审批拒绝
		zxjgRzspSubmit : "jsySqRzsq/zxSubmit.do",// 增信机构提交融资审批至金融机构
		jrjgRzspPass : "jsySqRzsq/bankPass.do",// 金融机构审批通过
		jrjgRzspRefuse : "jsySqRzsq/bankRefuse.do",// 金融机构审批不通过
		jrjgRzfhPass:"jsySqRzsq/bankFhPass.do",//金融机构复核通过
		jrjgRzfhRefuse:"jsySqRzsq/bankFhRefuse",//金融机构复核不通过
		jsyKhDdxxQuerysxy : "jsyKhDdxx/query1.do",// 核心企业查询上下游客户订单信息
		jsyKhYszkquerysxy : "jsyKhYszk/query1.do",// 核心企业查询上下游客户应收账款信息
		jsyhxqyquerysxy : "jsyKhJcxx/querySxyhxqy.do",// 核心企业查询上下游客户信息
		jsyQrySxed : "jsyKhEdxx/querySxed.do",// 授信额度查询
		jsySxedSave : "jsyKhEdxx/update.do",// 授信额度调整
		jsyCbedSave : "jsyKhEdxx/updateCb.do",// 承保额度调整
		jrjgrzsqcx : "jsySqRzsq/queryAll.do",
		jsyQryQyxx : "jsyKhCyfgl/getJsyKhCyfJcxxVOById.do",// 核心企业授信额度查看-查看企业详情
		jsyZxjgRzsq : "jsySqRzsq/queryRzsq.do",// 增信机构融资申请查询
		jsySqRzsqVOById : "jsySqRzsq/getJsySqRzsqVOById.do", // 由id 获得融资申请信息
		jsySqRzsqfk : "jsySqRzsq/jsySqRzsqfk.do", // 金融机构放款
		jrjghkjgqr : "jsyKhHkxx/query.do", // 还款结果查看
		jrjghkjgxx : "jsyKhHkxx/findhkxx.do", // 得到一条信息
		jsySqRzsqYszkxx : "jsySqRzsqYszkxx/queryYszk.do",// 增信机构融资申请应收账款查询
		jrjghkjgqrUpdate : "jsyKhHkxx/update.do", // 确认还款动作
		jsyhxqyqueryname : "jsyKhJcxx/getJsyKhJcxxVOqymcByKhh.do", // 获取当前客户号的企业名称
		jsySqRzsqYszkxxDown : "jsySqRzsqYszkxx/queryYszk.do",// 增信机构融资申请应收账款查询下部
		jsySqRzsqYszkxxOn : "jsySqRzsq/findRzshYszk.do",// 增信机构融资申请应收账款查询上部
		jsyRzglBdxx : "jsyKhBdxx/findRzglBdxx.do",// 增信机构融资申请保单查看
		jsyKhgkxxgl : "jsySqRzsq/jsyKhgkxxgl.do", // 查询待还款记录
		sxykhhk : "jsySqRzsq/sxykhhk.do", // 得到一条放款信息
		sxykhhkxx : "jsyKhHkxx/save.do", // 上下游客户还款信息
		rzsqddxq : "jsySqRzsqDdxx/getJsySqRzsqDdxxVOById.do", // 金融机构融资申请订单信息
		jsyWjscJrjgXz : "jsyWjsc/queryTwo.do",// 金融机构上下游增信查看/下载
		jsyKhBdxxUpdate : "jsySqRzsq/jsySqDzbdh.do",// 补充电子保单号
		rzsqyszkxq : "jsySqRzsqYszkxx/getJsySqRzsqYszkxxVOById.do", // 金融机构应收账款信息
		edxxyz : "jsyKhCyfgl/edxxyz.do", // 核心企业与上下游额度验证
		findHxqyxx : "jsyKhCyfgl/getJsyKhCyfJcxxVOById.do", // 获得一个核心企业的信息
		modifyHxqyxx : "jsyKhCyfgl/update.do", // 修改核心企业信息
		bbxxuploadfile : "jsyKhCwbb/bbxxuploadfile.do", // 上传财务报表
		savecwbb : "jsyKhCwbb/savecwbb.do", // 保存财务报表
		getJsyKhZhglVOByDlzh:"jsyKhZhgl/getJsyKhZhglVOByDlzh.do",//校验手机号是否已经被注册
		getJsyKhZhglVOBySession:"jsyKhZhgl/getJsyKhZhglVOBySession.do",//session中获取dlzh
		cwbbmbxz : "jsyWjsc/cwbbmbxz.do" ,// 下载财务报表模板
		savebcxx : "jsyKhBcxx/save.do", // 保存补充信息
		saveHtfj : "jsyKhBcxx/saveHtfj.do", // 保存补充信息
		wjscBcxx : "jsyWjsc/queryBcxx.do", // 显示补充信息列表
		wjscList : "jsyWjsc/query.do", // 显示补充信息列表
		jsyjrjgquerysxy : "jsyKhJcxx/jrjgquerySxyhxqy.do",//金融机构查询上下游客户信息
		blhtSave : "jsyXyglBlht/save.do", // 添加保理合同
		getXydm : "jsyXyglBlht/getXydm.do", // 生成协议代码
		findOneblht : "jsyXyglBlht/getJsyXyglBlhtVOById.do" , // 获得一个保理合同
		blhtUpdate : "jsyXyglBlht/update.do", //修改保理合同
		findBlhtList : "jsyXyglBlht/query.do", // 获得保理合同列表
		deleteBlht : "jsyXyglBlht/delete.do", // 删除保理合同
		findGlxxVo : "jsyKhCyfgl/findGlxxVo.do",  // 关联信息
		scbcxx : "jsyWjsc/bcxxSave.do",  //
		jsyjrjgquerysxy : "jsyKhJcxx/jrjgquerySxyhxqy.do",//金融机构查询上下游客户信息
		jsysxyquerysxy : "jsyKhSxy/querySxysxy.do",// 金融机构查询上下游客户信息
    	wjscZj : "jsyWjsc/queryZj.do", // 获得各种证件   文件    
        findRzslcxList : "jsySlRzsl/querySl.do",//金融机构融资受理查询
        findRzslcxDetails : "",//金融机构融资受理查询查看
	},
	searchObj : {
		totalPage : 1,// 总页码
		recordsTotal : 1,// 总记录数目
		postData : {
			pageIndex : 1,// 当前页
			pageSize : 10
		// 每页数目
		}
	},
	packRequest : function(str) {
		var arr = str.split("&");
		var postObj = {};

		for (var i = 0; i < arr.length; i++) {
			postObj[arr[i].split("=")[0]] = arr[i].split("=")[1];
		}
		return postObj;
	},
	ajaxServer : function(ajaxRrl, postData, successFun, failFun) {
		$.ajax({
			url : requestObj.port + ajaxRrl,
			timeout : this.timeoutTime,
			type : "POST",
			dataType : "json",
			data : JSON.stringify(postData),
			contentType : "application/json",
			headers : {
				tk : window.$TOKEN
			},
			beforeSend : function() {
				pluginObj.showLoading();
			},
			success : function(data) {
				if (data.head["_rd"] == "000000") {
					// 请求成功处理逻辑
					// todo
					// alert(successFun);
					successFun && successFun(data, postData);
					renderTableByDataDic();
					renderTableDivByDataDic();
				} else if (data.head["_rd"] == "000001") {
					// 需要登录
					pluginObj.alert("", data.head._rm);
					window.setTimeout(function(){top.location.href="index.html"},3000);
				} else if (data.head["_rd"] == "000003") {
					pluginObj.alert("", data.head._rm);
					window.setTimeout(function(){top.location.href="registForJsy.html"},3000);
				}else {
					// 请求失败提示
					failFun && failFun(data);
					pluginObj.alert(data.head["_rd"], data.head["_rm"]);
				}
			},
			error : function(data, error) {
				//pluginObj.alert("ERROR: " + data.status + " ", data.statusText);
			},
			complete : function(req, status) {
				var tk = req.getResponseHeader("tk");
				if (tk) {
					window.$TOKEN = tk;
				}
				pluginObj.hideLoading();
				autoHeight();
			}
		});
	},
	initPager : function(url, successFun, pagerid) {
		// 初始化分页
		kkpager.generPageHtml({
			pagerid : pagerid || "kkpager",
			isShowFirstPageBtn : false,
			isShowLastPageBtn : false,
			isGoPage : false,
			pno : requestObj.searchObj.postData.pageIndex,
			mode : 'click', // 设置为click模式
			// 总页码
			total : requestObj.searchObj.totalPage,
			// 总数据条数
			totalRecords : requestObj.searchObj.recordsTotal,
			// 点击页码、页码输入框跳转、以及首页、下一页等按钮都会调用click
			click : function(n) {
				// 处理完后可以手动条用selectPage进行页码选中切换
				requestObj.searchObj.postData.pageIndex = n;
				requestObj.ajaxServer(url, requestObj.searchObj.postData, successFun);
			}
		}, true);

	},
	searchServer : function(url, formName, successFun) {
		var params = $("#" + formName).getData(this.searchObj.postData);
		this.ajaxServer(url, params, successFun);
	}
};
var pwdEncrypt = function(password){
	var pwd = password;//修改的密码
	var pin = new UnionPin();
    var pinType = '1';//0：交易密码；1：登录密码
    var securityType = '0';//0：RSA；1：SM2
    var filledMode = '3';//1：交易密码的rsa固定填充；2：登录密码和交易密码的sm2固定填充；3：登录密码的rsa固定填充
    var pk = '30818902818100C51635F896F094D69B0A6AE143DDD1ABDE36491B86FF0C6571C698B4E850D6FC83CD2597303F1E64DA6B2B99C6D4B9F133B979169822B52A8C331A718BD5A2D080922ED2671DCF2F2BC8B46963FB573C556A27B3A5D8142FEA3707BEE675CAB23F2046E38826D10C82DFC3869E185766FF3F06CB91238C02BE1172EA075F7AFB0203010001';
    //var pk = 'D3F025A7C787BA8BEBFFBA1BDD47D700ED9DC5F69A5AF7C5C180B709E281ABF5746E41EDBE5E94FE06356840B759390D91FC0BCADF7343B2442D9930411E8A6E';
    return pin.encryptPin(pwd, pinType, pk, securityType, filledMode).toUpperCase();
}
// location相关方法
var locationObj = {
	// 获得url里边的参数
	getParams : function() {
		var hrefStr = window.location.href;
		var paramObj = {};
		if (hrefStr.indexOf("?") > -1) {
			var paramArr = hrefStr.split("?")[1].split("&");
			for (var i = 0; i < paramArr.length; i++) {
				paramObj[paramArr[i].split("=")[0]] = paramArr[i].split("=")[1];
			}
		}
		return paramObj;
	}
};
// 金额转大写
var moneyToUpperCase = function(num) {
	var strOutput = "";
	var strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
	num += "00";
	var intPos = num.indexOf('.');
	if (intPos >= 0)
		num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
	strUnit = strUnit.substr(strUnit.length - num.length);
	for (var i = 0; i < num.length; i++)
		strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1);
	return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元");
};

var formatDateStr = function(value) {
	value = value || '';
	if (value.length == 8) {
		value = value.substring(0, 4) + "-" + value.substring(4, 6) + "-" + value.substring(6, 8);
	} else if (value.length == 14) {
		value = value.substring(0, 4) + "-" + value.substring(4, 6) + "-" + value.substring(6, 8) + " " + value.substring(8, 10) + ":" + value.substring(10, 12) + ":" + value.substring(12, 14);
	}
	return value;
}
// 日期插件
var dataPiker = function(options) {
	$('.form_date').datetimepicker($.extend({
		format : 'yyyy-mm-dd',
		linkFormat : 'yyyymmdd',
		language : 'zh-CN',
		weekStart : 1,
		todayBtn : 1,
		autoclose : 1,
		todayHighlight : 1,
		startView : 2,
		minView : 2,
		forceParse : 0
	},options));
};
// 插件
var pluginObj = {
	// alert插件，传入错误码，错误信息
	alert: function(titleText,alertText, timeout){
//		$("body").append(
//			"<div class='alert alert-info alert-dismissible' role='alert'>"+
//			"<button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>"+
//
//			alertText + "</div>"
//		);
//		setTimeout(function(){
//			$(".alert.alert-info.alert-dismissible").fadeOut();
//		},timeout||2500)
//
		var gAlertModal = top.$("#gAlertModal");
		if (!gAlertModal[0]) {
			gAlertModal = top.$('<div class="modal fade" id="gAlertModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
				  <div class="modal-dialog modal-sm" style="margin-top:100px;">\
				    <div class="modal-content">\
				      <div class="modal-header">\
				        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
				        <h4 class="modal-title">提示信息</h4>\
				      </div>\
				      <div class="modal-body">\
				        '+alertText+'\
				      </div>\
				      <div class="modal-footer">\
				        <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">确定</button>\
				      </div>\
				    </div>\
				  </div>\
				</div>').appendTo("body");
		}
		gAlertModal.find(".modal-body").html(alertText);
		gAlertModal.modal && gAlertModal.modal("show");

	},
	// 确认框插件
	comfire : function(comfireText, okFun, cancelFn) {
		var gConfirmModal = top.$("#gConfirmModal");
		if (!gConfirmModal[0]) {
			gConfirmModal = top.$('<div class="modal fade" id="gConfirmModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
				  <div class="modal-dialog modal-sm" style="margin-top:100px;">\
				    <div class="modal-content">\
				      <div class="modal-header">\
				        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
				        <h4 class="modal-title">确认信息</h4>\
				      </div>\
				      <div class="modal-body"></div>\
				      <div class="modal-footer">\
						<button type="button" class="cancel btn btn-info btn-sm" data-dismiss="modal">取消</button>\
				        <button type="button" class="ok btn btn-danger btn-sm" data-dismiss="modal">确定</button>\
				      </div>\
				    </div>\
				  </div>\
				</div>').appendTo("body");
		}
		gConfirmModal.find(".modal-body").html(comfireText);
		gConfirmModal.off(".jsy").on("click.jsy", ".btn", function(e) {
			if($(this).hasClass("ok")) {
				okFun && okFun();
			} else {
				cancelFn && cancelFn();
			}
		})
		gConfirmModal.modal && gConfirmModal.modal("show");
	},
	// 显示loading
	showLoading : function() {
		var imgSrc = "images/jsyloading.gif";
		if (location.pathname.search("/myCenter/") >= 0) {
			// 是在个人中心
			imgSrc = "../images/jsyloading.gif"
		}
		if ($(".modal_container .loading").length > 0) {
			$(".modal_container").show();
		} else {
			$("body").append("<div class='modal_container loading-bg'><div class='loading'><img class='loading-img' src=" + imgSrc + " alt='加载动画'/></div></div>");
		}
	},
	// 隐藏loading
	hideLoading : function() {
		$(".modal_container").hide();
	},
	// 下拉框遍历

	initSeclect : function(secId, arr, optvalue, optname) {
		// 更新市的数据，清除下拉框数据
		$("#" + secId).empty();
		$("#" + secId).append("<option value=''></option>");
		for (var i = 0; i < arr.length; i++) {
			$("#" + secId).append("<option value='" + arr[i][optvalue] + "'>" + arr[i][optname] + "</option>")
		}
	},
	// 页面赋值
	setFormValue : function(obj) {
		for (val in obj) {
			if ($("#" + val)) {
				$("#" + val).html(obj[val]);
			}
		}
	},
	
	// 通过name选择，给input赋值
	setFormValueByName : function(obj) {
		for (val in obj) {
			if ($("[name="+ val +"]")) {
				$("[name="+ val +"]").val(obj[val]);
			}
		}
	}

};

(function() {

	/* 验证用户是否存在，并设置TOKEN */
	function checkUser(successFun, failFun) {
		$.ajax({
			async : false,
			url : requestObj.port + requestObj.address.checkUser,
			type : "POST",
			dataType : "json",
			data : JSON.stringify({}),
			contentType : "application/json",
			beforeSend : function() {
			},
			success : function(data) {
				if (data.head["_rd"] == "000000") {
					// 请求成功处理逻辑
					successFun && successFun(data.body);
				} else {
					// 请求失败提示
					failFun && failFun();
				}
			},
			error : function(data) {
				failFun && failFun();
			},
			complete : function(req, status) {
				var tk = req.getResponseHeader("tk");
				if (tk) {
					window.$TOKEN = tk;
				}
			}
		})
	}

	function showForceChangePassword(user, onFinish) {
		if ($.fn.modal) {
			var div = $("#forceChangepwdDiv");
			if (!div[0]) {
				div = $("<div id='forceChangepwdDiv'><div class='modal-content'></div></div>"), div.appendTo(document.body);
				div.on("loaded.bs.modal", function() {
					div.find("#fp_c_name").html(user.custName);
					var form = div.find("#scxgmm_form");
					form.validate({
						submitHandler : function(form) {
							requestObj.ajaxServer(requestObj.address.changePassword, $(form).getData(), function() {
								div.modal("hide");
								onFinish && onFinish(user);
							}, function() {
							})
						},
						errorPlacement : function(error, element) {
							element.after(error);
						},
						onkeyup : false,
						rules : {
							password1 : {
								isPassword : true,
								required : true
							},
							password2 : {
								required : true,
								equalTo : "#password1"
							}
						},
						messages : {
							password1 : {
								required : "请输入新密码"
							},
							password2 : {
								required : "请输入确认密码",
								equalTo : "两次密码输入不一致"
							}
						}
					});
				});
				div.modal({
					backdrop : 'static',
					keyboard : false,
					remote : "forceChangePassowrd.html"
				});
			} else {
				div.modal("show");
			}
		} else {
			alert("need jquery.bootstrap.js")
		}
	}

	function showAcceptAgreement(user) {
		var div = $("#acceptAgreementDiv");
		if (!div[0]) {
			div = $("<div id='acceptAgreementDiv'><div class='modal-content'></div></div>"), div.appendTo(document.body);
			div.on("loaded.bs.modal", function() {
				var form = div.find("#fp_qrxy_form");
				requestObj.ajaxServer(requestObj.address.getAcceptAgreementById, {}, function(result) {
					form.fillData(result.body);
				})
				form.validate({
					submitHandler : function(form) {
						if (fp_qrxy_form.acceptAgreement.checked) {
							requestObj.ajaxServer(requestObj.address.changeAcceptAgreement, $(form).getData({acceptAgreement:true}), function() {
								div.modal("hide");
							})
						} else {
							pluginObj.alert("", "请您务必阅读并同意《相关协议》！");
						}
					},
					errorPlacement : function(error, element) {
						element.after(error);
					},
					onkeyup : false,
					rules : {
						email : {
							required : true,
							email : true
						}
					},
					messages : {
						email : {
							required : "请输入邮箱",
							email : "请输入正确的邮箱格式"
						}
					}
				});
			});
			div.modal({
				backdrop : 'static',
				keyboard : false,
				remote : "acceptAgreement.html"
			});
		} else {
			div.modal("show");
		}
	}

	checkUser(function(user) {
		setTimeout(function() {
			$(".user-center").show();
			// showForceChangePassword(user);
			$("[data-custname]").text(user.custName);
			window.onUserCheck && window.onUserCheck(true, user);
		}, 400);
	}, function(user) {
		setTimeout(function() {
			$(".user-center").hide();
			$("[data-custname]").text("未登录");
			window.onUserCheck && window.onUserCheck(false, user);
		}, 400);
	});

	var ddicMap = {};
	var ddicArray = {};
	var DDIC_KEY = "dic-type", DDIC_DEF_KEY = "dic-selected", DDIC_EVENT_READY = "dic-ready", DDIC_PLACEHODER_KEY = "dic-blank";

	function renderSelect() {
		$("select[" + DDIC_KEY + "]").each(function() {
			var selectUI = $(this);
			selectUI.empty();
			var dt = selectUI.attr(DDIC_KEY);
			var data = ddicArray[dt] || [];
			var optionHTML = [];
			var placeHlr = selectUI.attr(DDIC_PLACEHODER_KEY);
			if (placeHlr) {
				optionHTML.push("<option value=''>" + placeHlr + "</option>");
			}
			for (var i = 0; i < data.length; i++) {
				optionHTML.push("<option value='" + data[i].code + "' " + (selectUI.attr(DDIC_DEF_KEY) == data[i].code ? "selected" : "") + ">" + data[i].name + "</option>");
			}
			selectUI.append(optionHTML.join(''));
			selectUI.removeAttr(DDIC_KEY);
		});
	}
	function renderSelectDiv() {
		$("div[" + DDIC_KEY + "]").each(function(i) {
			var t = $(this);
			var dt = t.attr(DDIC_KEY);
			var $data = $._data(this);
			if ($data.events && $data.events[DDIC_EVENT_READY]) {
				var data = ddicArray[dt];
				t.trigger(DDIC_EVENT_READY, [ t, dt, data ]);
			}
		});
	}

	function renderTable() {
		var tables = $("table");
		tables.each(function(){
			if ($(this).find("th[" + DDIC_KEY + "]").length>0) {
				var table = $(this);
				table.find("th").each(function(i) {
					var th = $(this);
					var dt = th.attr(DDIC_KEY);
					if (dt && ddicMap[dt]) {
						table.find("td:nth-child(" + (i + 1) + ")").each(function() {
							var val = this.innerText.trim();
							var text = ddicMap[dt][val] || val;
							this.innerText = text;
						});
					}
				});
			}

		})

	}

	function renderTableDiv() {
		$("div[" + DDIC_KEY + "]").each(function(i) {
			var t = $(this);
			var dt = t.attr(DDIC_KEY);
			var $data = $._data(this);
			if ($data.events && $data.events[DDIC_EVENT_READY]) {

			} else if (dt && ddicMap[dt]) {
				var val = t.text().trim();
				var text = ddicMap[dt][val] || val;
				t.text(text);
			}
		});
	}

	/* 渲染指定的UI，加载数据字典 */
	function renderUIByDataDic() {
		var dictype = [];
		$("[" + DDIC_KEY + "]").each(function() {
			var $this = $(this);
			var dt = $this.attr(DDIC_KEY);
			if (!ddicArray[dt]) {
				dictype.push(dt);
				// ddicMap[dt] = {};
				// ddicArray[dt] = [];
			}
		});
		if (dictype.length > 0) {
			loadDataDic(dictype, function() {
				renderSelect();
				renderSelectDiv();
				renderTable();
				renderTableDiv();
			});
		}
	}

	function loadDataDic(dicType, fn) {
		$.ajax({
			async : false,
			url : requestObj.port + requestObj.address.ddic,
			type : "POST",
			dataType : "json",
			data : JSON.stringify(dicType),
			contentType : "application/json",
			success : function(result) {
				if (result.head["_rd"] == "000000") {
					var list = result.body;
					for (var i = 0; i < list.length; i++) {
						var data = list[i];
						var dM = ddicMap[data.type] || (ddicMap[data.type] = {});
						dM[data.code] = data.name;
						var dA = ddicArray[data.type] || (ddicArray[data.type] = []);
						dA.push(data);
					}
					// 请求成功处理逻辑
					setTimeout(function() {
						fn && fn(result.body);
					}, 1);
				}
			}
		})
	}
	$(renderUIByDataDic);

	window.renderTableByDataDic = renderTable;
	window.renderTableDivByDataDic = renderTableDiv;
	window.showForceChangePassword = showForceChangePassword;
	window.showAcceptAgreement = showAcceptAgreement;
})();

(function($) {

	$.fn.extend({
		"select" : function(options, param) {
			if ($.fn.select2) {
				var defaults = {
					language : 'zh-CN',
					// minimumInputLength : 1,
					allowClear : true,
					placeholder : "请选择..."
				}
				var options = $.extend(defaults, options);

				var url = requestObj.port + options.url;
				var select2 = this.select2({
					allowClear : options.allowClear,
					placeholder : options.placeholder,
					ajax : {
						method : 'post',
						url : url,
						dataType : 'json',
						delay : 250,
						contentType : "application/json",
						data : function(params) {
							var p = $.extend({}, requestObj.searchObj.postData, {
								q : params.term, // search term
								pageIndex : params.page
							}, param || {})
							return JSON.stringify(p);
						},
						processResults : function(result, params) {
							params.page = params.page || 1;
							var data = result.body ? result.body.data : [];
							var totalCount = result.body ? result.body.totalCount : 0;

							return {
								results : data,
								pagination : {
									more : (params.page * 10) < result.body.totalCount
								}
							};
						},
						cache : true
					}
				});
			} else {
				throw "require select2.js";
			}
		}
	})

	var SELECT_ORG_KEY = "select-org";

	function initOrgSelect() {
		$("[" + SELECT_ORG_KEY + "]").each(function() {
			var t = $(this);
			t.select({
				url : requestObj.address.selectCustom
			}, {
				type : t.attr(SELECT_ORG_KEY)
			});
		})
	}
	$(initOrgSelect);
})(jQuery);

(function($) {
	var inited = false;
	var cityMap = {}, cityName = {};

	var CITY_KEY = "city-cascade", CITY_BLANK = "city-blank", CITY_SELECTED = "city-selected", CITY_ROOT = "100";

	function transCityName(key) {
		if (!inited) {
			loadCityData();
		}
		return cityName[key] || key;
	}

	function loadCityData(fn) {
		$.ajax({
			async : false,
			url : requestObj.port + requestObj.address.queryCityForSelect,
			type : "POST",
			dataType : "json",
			data : {},
			contentType : "application/json",
			success : function(result) {
				if (result.head["_rd"] == "000000") {
					inited = true;
					var list = result.body;
					for (var i = 0; i < list.length; i++) {
						var item = list[i];
						var cm = cityMap[item.sjbh] || (cityMap[item.sjbh] = []);
						cm.push(item);
						cityName[item.xqbh] = item.xqmc;
					}
					// 请求成功处理逻辑
					setTimeout(function() {
						fn && fn(list);
					}, 1);
				}
			}
		})
	}

	function initSelectData(jq, data) {
		jq.empty();
		var optionHTML = [];
		var placeHlr = jq.attr(CITY_BLANK);
		if (placeHlr) {
			optionHTML.push("<option value=''>" + placeHlr + "</option>");
		}
		for (var i = 0; i < data.length; i++) {
			optionHTML.push("<option value='" + data[i].xqbh + "'>" + data[i].xqmc + "</option>");
		}
		jq.append(optionHTML.join(''));
	}

	function renderUIByCityData() {
		$("[" + CITY_KEY + "]").each(function() {
			var selectUI = $(this);
			if (this.tagName == "SELECT") {
				var data = cityMap[CITY_ROOT];
				initSelectData(selectUI, data);
				selectUI.unbind("change").bind("change", function() {
					var _t = $(this);
					var val = this.value;
					var next = _t.attr(CITY_KEY);
					initSelectData($(next), cityMap[val]);
				}).trigger("change");
			} else {

			}
		})
	}
	function init() {
		if ($("[" + CITY_KEY + "]").length == 0) {
			return;
		}
		loadCityData(renderUIByCityData);
	}
	// $(init);

	window.transCityName = transCityName;
})(jQuery);

(function($) {

	var Tools = {
		// formatTpl : function(tpl, data) {
		// for ( var d in data) {
		// tpl = tpl.replace(new RegExp('\\$\\{' + d + '\\}', 'g'), data[d]);
		// }
		// return tpl;
		// },
		formatTpl : function(tpl, list) {
			var html = [];
			for (var i=0;i<list.length;i++) {
				var data = list[i];
				var tplhtml = tpl;
				for ( var d in data) {
					tplhtml = tplhtml.replace(new RegExp('\\$\\{' + d + '\\}', 'g'), data[d] || '');
				}
				html.push(tplhtml);
			}
			return html.join("");
		},
		formatData : function(data, type, format) {
			var rt = data || '';
			switch (type) {
			case 'string':
				rt = '' + data;
				break;
			case 'boolean':
				break;
			case 'date':
				var value = rt;
				if (value.length == 8) {
					value = value.substring(0, 4) + "-" + value.substring(4, 6) + "-" + value.substring(6, 8);
				} else if (value.length == 14) {
					value = value.substring(0, 4) + "-" + value.substring(4, 6) + "-" + value.substring(6, 8) + " " + value.substring(8, 10) + ":" + value.substring(10, 12) + ":" + value.substring(12, 14);
				}
				rt = value;
				break;
			default:
				break;
			}
			return rt;
		},
		// formatTr : function(data, props) {
		// var html = [];
		// $.each(data, function() {
		// html.push('<tr>');
		// var item = this;
		// $.each(props, function() {
		// var prop = this, type;
		// if (this.indexOf("|") > -1) {
		// prop = this.split("|")[0];
		// type = this.split("|")[1];
		// }
		// var value = item[prop];
		// if (value === null || value === undefined) {
		// value = '';
		// }
		// if (type == "date") {
		// if (value.length == 8) {
		// value = value.substring(0, 4) + "-" + value.substring(4, 6) + "-" +
		// value.substring(6, 8);
		// } else if (value.length == 14) {
		// value = value.substring(0, 4) + "-" + value.substring(4, 6) + "-" +
		// value.substring(6, 8) + " " + value.substring(8, 10) + ":" +
		// value.substring(10, 12) + ":" + value.substring(12, 14);
		// }
		// }
		// html.push('<td>' + value + '</td>');
		// });
		// html.push('</tr>');
		// });
		// return html.join("");
		// },
		formatNumber : function(number, scale, group, thousand) {
			scale = scale || 0;
			group = group || 3;
			thousand = thousand || ",";
			var negative = number < 0 ? "-" : "", i = parseInt(number = Math.abs(+number || 0).toFixed(scale), 10) + "", j = (j = i.length) > group ? j % group : 0;
			return negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(new RegExp("(\\d{" + group + "})(?=\\d)", "g"), "$1" + thousand) + (scale ? "." + Math.abs(number - i).toFixed(scale).slice(2) : "");
		}
	};

	var uploading = {};
	$.fn.uploadFile = function(url, successs, failed) {
		this.each(function() {
			var $this = $(this);
			var frameId = "form-upload-ifr" + $this.attr("id");
			if (uploading[frameId]) {
				// return;
			}
			$this.attr("action", requestObj.port + url).attr("enctype", "multipart/form-data").attr("target", frameId).attr("method", "post");
			var ifr = $("#" + frameId);
			if (!ifr[0]) {
				ifr = $("<iframe id='" + frameId + "' style='display:none'></iframe>").attr("name", frameId).appendTo(document.body);
				ifr.on("load", function() {
					var io = document.getElementById(frameId);
					var rs = 0;
					try {
						if (io.contentWindow) {
							rs = io.contentWindow.document.body ? io.contentWindow.document.body.innerText : null;
						} else if (io.contentDocument) {
							rs = io.contentDocument.document.body ? io.contentDocument.document.body.innerText : null;
						}
					} catch (e) {

					}
					uploading[frameId] = false;
					if (rs == "1") {
						successs && successs();
					} else {
						failed && failed(rs);
					}
				});
			}
			uploading[frameId] = true;
			$this.submit();
		});

	}

	$.fn.getData = function(param) {
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push) {
					o[this.name] = [ o[this.name] ];
				}
				o[this.name].push(decodeURIComponent(this.value));
			} else {
				o[this.name] = decodeURIComponent(this.value);
			}
		});
		return $.extend(o, param);
	};

	function getVertifyCode(el,mobile) {
		if (window.getVertifyCodeTimeout) {
			clearTimeout(window.getVertifyCodeTimeout);
		}
		window.getVertifyCodeTimeout = setTimeout(function() {
			el.attr("src", requestObj.port + requestObj.address.vcode + "?t=" + new Date().getTime()+"&m="+mobile);
		}, 500);
	}

	$.fn.fillData = function(json) {
		var elements = this;
		initElements(elements.get(0), json);
	}
	// 对元素的解析回填
	function initElements(element, json) {
		var dom = $(element);
		var key = dom.attr('name') || dom.attr('id');
		if (key && element.tagName != "FORM") {
			setElementValue(element, json, key);
			return;
		}
		for (var i = 0; i < element.children.length; i++) {
			initElements(element.children[i], json);
		}
	}
	// 赋值操作
	function setElementValue(element, json, key) {
		var type = element.type;
		// var key;
		// if (type == 'radio') {
		// key = element.name;
		// } else if (type == 'checkbox') {
		// key = element.name;
		// } else {
		// key = element.id;
		// }
		var o = json;
		// for (var i = 0; i < keys.length; i++) {
		// if (keys[i]) {
		// o = o[keys[i]];
		// }
		// }
		if (!(typeof (o[key]) == 'undefined')) {
			switch (element.tagName) {
			case 'INPUT':
				switch (element.type) {
				case 'radio':
					element.checked = false;
					if (element.value == o[key]) {
						element.checked = true;
					}
					break;
				case 'checkbox':
					element.checked = false;
					for (var i = 0; i < o[key].length; i++) {
						if (element.value == o[key][i]) {
							element.checked = true;
							break;
						}
					}
					break;
				}
				// element.value = o[key];
				$(element).val(o[key]);
				break;
			case 'SELECT':
				if ($(element).attr("multiple")) {
					// 多选
					if (toString.apply(o[key]) == '[object Array]') {
						var options = element.children;
						var os = o[key];
						for (var i = 0; i < options.length; i++) {
							// 重置每个选项状态
							options[i].selected = false;
							for (var j = 0; j < os.length; j++) {
								if (options[i].value == os[j]) {
									options[i].selected = true;
									break;
								}
							}
						}
					}
				} else {
					// 单选
					var options = element.children;
					for (var i = 0; i < options.length; i++) {
						if (options[i].value == o[key]) {
							options[i].selected = true;
						}
					}
				}
				break;
			case "TEXTAREA":
			case "DIV":
			case "SPAN":
			case "TABLE":
			default:
				element.innerHTML = o[key];
			}
		}
	}

	window.Tools = Tools;
	window.getVertifyCode = getVertifyCode;
})(jQuery);

(function($) {
	Date.prototype.format = function(format) {
		var o = {
			"M+" : this.getMonth() + 1, // month
			"d+" : this.getDate(), // day
			"H+" : this.getHours(), // hour
			"m+" : this.getMinutes(), // minute
			"s+" : this.getSeconds(), // second
			"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
			"S" : this.getMilliseconds()
		// millisecond
		};
		if (/(y+)/.test(format))
			format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for ( var k in o)
			if (new RegExp("(" + k + ")").test(format))
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		return format;
	};

	var EXTEND_TYPE_KEY = "data-type";

	function numberToCurrency(number) {
		var scale = 2;
		var group = 3;
		var thousand = ",";
		var negative = number < 0 ? "-" : "", i = parseInt(number = Math.abs(+number || 0).toFixed(scale), 10) + "", j = (j = i.length) > group ? j % group : 0;
		return negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(new RegExp("(\\d{" + group + "})(?=\\d)", "g"), "$1" + thousand) + (scale ? "." + Math.abs(number - i).toFixed(scale).slice(2) : "");

	}

	function str2type(value, type) {
		switch (type) {
		case 'currency':
			return value.replace(/[^\d.]/g, '');
		case 'date':
			return value.replace(/[^\d]/g, '');
		default:
			return value;
		}

	}
	function type2str(value, type) {
		switch (type) {
		case 'currency':
			value = (value + "").replace(/[^\d.]/g, '');
			var intVal = parseFloat(value) || 0;
			return numberToCurrency(intVal);
		case 'date':
			return value.replace(/(\d{4})[/-]?(\d{2})[/-]?(\d{2})/g, "$1-$2-$3");
		default:
			return value;
		}
	}
	$.valHooks.text = {
		get : function(elem) {
			return str2type(elem.value, elem.getAttribute(EXTEND_TYPE_KEY));
		},
		set : function(elem, value) {
			elem.value = type2str(value, elem.getAttribute(EXTEND_TYPE_KEY));
		}
	};
	$("[" + EXTEND_TYPE_KEY + "]").each(function() {
		var t = $(this);
		t.unbind('.c').bind('focusin.c', function() {
			this.value = str2type(this.value, this.getAttribute(EXTEND_TYPE_KEY));
		}).bind('focusout.c', function() {
			this.value = type2str(this.value, this.getAttribute(EXTEND_TYPE_KEY));
		});
	});

	window.numberToCurrency = numberToCurrency;
})(jQuery);

(function($) {

	function removefile(inst, id) {
		var input = $(inst + "-queue #" + id).find(".dbid");
		requestObj.ajaxServer(requestObj.address.removefile, {
			id : input.val()
		}, function() {
			$(inst).uploadify('cancel', id);
		})
	}

	/**
	 * fileId 指定file选择器id，如#file type 指定文件业务类型,4位码 onSuccess 回调
	 */
	function initFileUpload($file, url, data, onSuccess, onFailed) {
		return $file.uploadify({
			formData : {},
			buttonText : '选择文件',
			multi : !!$file.attr("multiple"),
			swf : 'js/plugin/uploadify/uploadify.swf',
			uploader : requestObj.port + (url || requestObj.address.uploadfile),
			fileObjName : $file.attr("name") || 'file',
			fileTypeExts : $file.attr("file-exts") || '*.*',
			removeCompleted : false,
			onUploadStart : function(file) {
				var d = $.extend({wjlx:$file.attr("file-type")}, data);
				$file.uploadify('settings', 'formData', d);
			},
			onUploadSuccess : function(file, result, response) {
				var data = {head:{_rd:"999999",_rm:"未知异常"}};
				try {
					data = eval("(" + result + ")");
				} catch (e) {
				}
				if (data.head._rd=='000000') {
					var input = $('#' + this.settings.queueID + " #" + file.id).find(".dbid");
					input.val(data.body);
					onSuccess && onSuccess.call($file, file, data.body);
				} else {
					// Call the default event handler
					$('#' + this.settings.queueID + " #" + file.id).find('.data').html(' - 上传失败');
					onFailed && onFailed.call($file, file, data.head._rm);
				}
			}
		});
	}

	$.fn.upload = function(url, data, onSuccess, onFailed) {
		return this.each(function() {
			return initFileUpload($(this), url, data, onSuccess, onFailed);
		});
	}
	window.removefile = removefile;
	window.initFileUpload = initFileUpload;
})(jQuery)

var _int_autoHeight;
function _autoHeight() {
	var ifr = top.document.getElementById('mainFrame');
	if (ifr) {
		ifr.height = $(ifr.contentWindow.document.body).height()+140;//140是margin出来的值
	}
    _int_autoHeight=null;
}
function autoHeight(){
	if (this==top) {
		return;
	}
	if (_int_autoHeight) {
		clearTimeout(_int_autoHeight);
	}
	_int_autoHeight = setTimeout(_autoHeight, 50);
}
if (this!=top) {
	this.onresize=autoHeight;
}