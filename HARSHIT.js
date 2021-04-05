
    $(document).ready(function () {
        
        $("#btnAdd").click(function () {
        var a = parseInt($("#number1").val());
                      var b= parseInt($("#number2").val());
            $("#result").val(a + b);
        });
            $("#btnSub").click(function () {
                var a = parseInt($("#number1").val());
                var b = parseInt($("#number2").val());
                $("#result").val(a- b);
            });
        $("#btntxt1").click(function () {
                var a= ($("#text1").val());
                var b=a.toLowerCase();
                $("#result1").val(b);
              
            });
         $("#btntxt2").click(function () {
                var a = ($("#text2").val());
                var b = ($("#text3").val());
                $("#res2").html("</br>Result is:"+a+" "+b+"");
            });
        $("#btnTab").click(function () {
            var result="";
                var a = parseInt($("#number3").val());
                for(var i=1;i<=10;i++){
                  result=result+"</br>"+a+"*"+i+"="+a*i+"";  
                }
                $("#res").html(result);
              
            });
    });