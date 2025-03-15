function grater(){
    var num1=Number(document.getElementById("num1").value)
    var num2=Number(document.getElementById("num2").value)
    var num3=Number(document.getElementById("num3").value)
    var result=document.getElementById("result")
    
   if (num1>num2){
    if(num1>num3){
        result.value=num1
    }
    else{
        result.value=num3
    }
   }
   else if (num1==num2 && num1==num3 && num2==num3){
    result.value="all are equal"
   }
   else{
    if(num2>num3){
        result.value=num2
    }
    else{
        result.value=num3
    }
   }
}
