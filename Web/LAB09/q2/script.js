function go(){

    var selection=window.confirm("Are you sure redirect to Google.com ? ");
    if(selection){
        window.location.href="https://www.google.co.uk/";
    }else{
        alert("You decided to stay here")
    }


}
function out(message){
alert(message);
}