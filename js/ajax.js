/**
 * Created by Administrator on 2018/10/10.
 */

function ajax(url,fnSucc,fnFaild)
{
//        1、创建ajax实例
    try{
        var xml=new XMLHttpRequest();
    }catch (e){    //e一般代表error
        xml=new ActiveXObject("Microsoft.XMLHTTP");
    }
//        2、连接服务器
    xml.open('GET',url,true);   //异步
//        3、发送
    xml.send();
//        4、接收
    xml.onreadystatechange=function(){
        if(xml.readyState==4){          //请求成功
            if(xml.status==200){        //服务器返回数据成功
                //alert('成功了':+oAjax.responseText);
                fnSucc(xml.responseText);
            }
            else {
                console.log(xml.status);
                //alert('失败了')
                if(fnFaild){         //如果传入了参数fnFaild，就执行
                    fnFaild();
                }
            }
        }
    }
}
