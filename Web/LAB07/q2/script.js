
function avg(){

    var final=0;
    for(i=1;i<6;i++){
        var answer = parseInt(prompt("Enter value "+i));
        final=final+answer;
    }
    document.getElementById("total").innerHTML=final;
    final=final/5;
    document.getElementById("avg").innerHTML=final;
}

function myFunction(){

    var avg=document.getElementById("avg").innerText;
    avg=parseInt(avg);
    if(avg>=30){
        alert("Congratulations ! You are passed");
    }else{
        alert("Better luck next time !");
    }
}