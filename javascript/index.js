var signup = () => {
  document.querySelector(".signup_block").style.display = 'block';
  document.querySelector(".homePage_login_form").style.top = '0px'
  document.querySelector(".login").style.display = 'none';
  }

var forgetPassword = () => {
  document.querySelector(".Forgetpassword_block").style.display = 'block';
  document.querySelector(".login").style.display = 'none';
  document.querySelector(".homePage_forget").style.display = 'none';
  document.querySelector(".signup_block").style.display = 'none';
  
}
var login = () => {
  var  username = document.getElementById("userName").value;
  var password = document.getElementById("passWord").value;
  if(username=="formget"&&password=="formget#123"){
    // alert("login sucessfull");
    window.location="homePage.html";
    //redirecting to other page.
    return false;
  }
  else{
  //Decrementing by one.
  alert("you have "+attempt+"attempt");
  //Disabling fields after 3 attempts.
  if(attempt==0){
    document.getElementById("username").disabled=true;
    document.getElementById("login").disabled=true;
    return false;
  }
  }
}