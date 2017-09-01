/**
 * Created by lhr on 16/11/28.
 */
jQuery.validator.addMethod("isZipCode", function(value, element) {
    var tel = /^[0-9]{6}$/;
    return this.optional(element) || (tel.test(value));
}, "邮政编码为6位数字");

jQuery.validator.addMethod("isMobile", function(value, element) {
    var tel = /^[1]([0-9]{10})$/;
    return this.optional(element) || (tel.test(value));
}, "请输入合法的11位手机号码");

jQuery.validator.addMethod("cellPhone", function(value, element) {
    var phone = /^((0\d{2,3}-\d{6,8})|(1[0-9]\d{9}))$/;
    return this.optional(element) || (phone.test(value));
}, "请输入合法的电话号码");

jQuery.validator.addMethod("isIdCardNo", function(value, element) {
	var idCard = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
	return this.optional(element) || (idCard.test(value));
	}, "请输入正确的身份证号码");

jQuery.validator.addMethod("isDate", function(value, element){
    //var reg = /^([2-9]\d{3}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)|(([2-9]\d)(0[48]|[2468][048]|[13579][26])|(([2468][048]|[3579][26])00))0229)$/;
    //return this.optional(element) || (reg.test(value));
	return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
}, "日期格式为yyyy-MM-dd");

jQuery.validator.addMethod("isBankCard",function (value, element) {
   var isBankCard = /^(\d{16}|\d{19})$/;
    var v = value.replace(/\s+/g,"");//银行卡四位数字后面加了一个空格
   return  (isBankCard.test(v));
},"请输入正确的银行卡号");
jQuery.validator.addMethod("isPassword", function(val, element) {
	if (val < 6) {
		return false;
	}
	var lv = 0;
	if (val.match(/[a-z]/g)) {
		lv++;
	}
	if (val.match(/[A-Z]/g)) {
		lv++;
	}
	if (val.match(/[0-9]/g)) {
		lv++;
	}
	if (val.match(/(.[^a-zA-Z0-9])/g)) {
		lv++;
	}
	return lv > 1;
	// 最少6位，包含至少1个特殊字符，2个数字，2个大写字母和一些小写字母。
	//(?=^.{6,16}$)(?=(?:.*?\d))(?=.*[a-z])(?=(?:.*?[A-Z]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%*()_+^&]*$
    //var reg = /(?=^.{6,16}$)/;
   // return (reg.test(value));
}, "密码长度最少6位");
jQuery.validator.addMethod("compareDate", function(value, element) {
    var assigntime = $(".startTime").val();
    var deadlinetime = $(".endTime").val();
    var reg = new RegExp('-','g');
    assigntime = assigntime.replace(reg,'/');//正则替换
    deadlinetime = deadlinetime.replace(reg,'/');
    assigntime = new Date(parseInt(Date.parse(assigntime),10));
    deadlinetime = new Date(parseInt(Date.parse(deadlinetime),10));
    if(assigntime>deadlinetime){
        return false;
    }else{
        return true;
    }
},"结束日期必须大于开始日期");
jQuery.validator.addMethod("compareDate2", function(value, element) {
    var assigntime = $(".startTime2").val();
    var deadlinetime = $(".endTime2").val();
    var reg = new RegExp('-','g');
    assigntime = assigntime.replace(reg,'/');//正则替换
    deadlinetime = deadlinetime.replace(reg,'/');
    assigntime = new Date(parseInt(Date.parse(assigntime),10));
    deadlinetime = new Date(parseInt(Date.parse(deadlinetime),10));
    if(assigntime>deadlinetime){
        return false;
    }else{
        return true;
    }
},"结束日期必须大于开始日期");
jQuery.validator.addMethod("compareDate3", function(value, element) {
    var assigntime = $(".startTime3").val();
    var deadlinetime = $(".endTime3").val();
    var reg = new RegExp('-','g');
    assigntime = assigntime.replace(reg,'/');//正则替换
    deadlinetime = deadlinetime.replace(reg,'/');
    assigntime = new Date(parseInt(Date.parse(assigntime),10));
    deadlinetime = new Date(parseInt(Date.parse(deadlinetime),10));
    if(assigntime>deadlinetime){
        return false;
    }else{
        return true;
    }
},"结束日期必须大于开始日期");
jQuery.validator.addMethod("rzjeYszk", function(value, element) {
    var rzje = $(".rzje").val();
    var yszk = $(".yszk").val();
    var rzbl = $(".rzbl").val();
    var rzjeNum = parseFloat(rzje);
    var yszkNum = parseFloat(yszk);
    var rzblNum = parseFloat(rzbl);
    if(!rzblNum){
    	rzblNum = 0;
    }
    if(!rzjeNum){
    	rzjeNum = 0;
    }
    if(!yszkNum){
    	yszkNum = 0;
    }
    if(rzje > yszkNum * rzbl/100){
        return false;
    }else{
        return true;
    }
},"融资金额不能大于应收账款转让净额*融资比例");
jQuery.validator.addMethod("capital", function(value, element) {
    var bjje = $(".bjje").val();
    var lxje = $(".lxje").val();
    var bjlx = $(".bjlx").val();
    if(bjje == "" || lxje == "" || bjlx ==""){
    	return true;
    }
    var bjjeNum = parseFloat(bjje);
    var lxjeNum = parseFloat(lxje);
    var bjlxNum = parseFloat(bjlx);
    if(!bjjeNum){
    	bjjeNum = 0;
    }
    if(!lxjeNum){
    	lxjeNum = 0;
    }
    if(!bjlxNum){
    	bjlxNum = 0;
    }
    if(bjlxNum != (bjjeNum + lxjeNum)){
        return false;
    }else{
        return true;
    }
},"还款金额必须等于本次还款归还本金金额与本次还款归还利息金额之和");

jQuery.extend(jQuery.validator.messages, {
    required: "必选字段",
    remote: "请修正该字段",
    email: "请输入正确格式的电子邮件",
    url: "请输入合法的网址",
    date: "请输入合法的日期",
    dateISO: "请输入合法的日期 (ISO).",
    number: "请输入合法的数字",
    digits: "只能输入整数",
    creditcard: "请输入合法的信用卡号",
    equalTo: "请再次输入相同的值",
    accept: "请输入拥有合法后缀名的字符串",
    maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"),
    minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"),
    rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
    range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
    max: jQuery.validator.format("请输入一个最大为 {0} 的值"),
    min: jQuery.validator.format("请输入一个最小为 {0} 的值")
});
