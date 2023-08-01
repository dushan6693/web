function getDate(){
    var num=parseInt(prompt("Enter a number between 1-7 "));

    switch(num){
        case 1:
            out("Monday");
            break;
        case 2:
            out("Tuesday");
            break;
        case 3:
            out("Wendsday");
            break;
        case 4:
            out("Thurday");
            break;
        case 5:
            out("Friday");
            break;
        case 6:
            out("Saturday");
            break;
        case 7:
            out("Sunday");
            break;
        default :
            out("Not a suitable value");
           
    }
}
function out(message){
alert(message);
}