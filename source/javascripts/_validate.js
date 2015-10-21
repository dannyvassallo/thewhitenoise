function validateForm() {
    var eMail = document.forms["ss-form"]["entry.1384809857"].value;

    //For Email Validation
    var atpos = eMail.indexOf("@");
    var dotpos = eMail.lastIndexOf(".");

//Email
    if ( $('#entry_1887851980').val() == "" || $('#entry_1887851980').val().length < 3 ){
        alert("Please Enter Your Full Name");
        $('#entry_1887851980').addClass('error');
        return false;
    }
    else if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=eMail.length) {
        alert("Please Enter a Valid Email Address.");
        $('#entry_1384809857').addClass('error');
        return false;
    }
    else{
        window.submitted=true;
        detection();
    }
}

//Error Red Glow OFF
$(function(){
    $('#entry_1384809857').keyup(function(){
        $(this).removeClass('error');
    });
    $('#entry_1887851980').keyup(function(){
        $(this).removeClass('error');
    });
});
