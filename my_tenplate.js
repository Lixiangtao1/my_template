/* 模板引擎 封装 */
function my_template(id,data){
    //拿到字符串
    var str=document.querySelector('#template').innerHTML;
    //使用正则拿到{{}}字符串
    var reg=/{{(\w+)}}/;
    var result=reg.exec(str);
    //使用while循环拿到
    while(result!=null){
        str=str.replace(result[0],data[result[1]]);
        //再次检索
        result=reg.exec(str);
    }
    return str;
}