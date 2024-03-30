
function CheckLogin() {
  var login = "admin";
  var reg = new RegExp("^" + login + "$");
  if (reg.test(document.authorization.login.value)) {
    // document.location.href = "index.html";
    var pass = "groza1";
    var reg = new RegExp("^" + pass + "$");
    if (reg.test(document.authorization.password.value)) 
    {
      document.location.href = "home_page/index.html";
    } 
    else 
    {
      alert('Неверный логин или пароль');
    }
    return false;
} 
  else
  {
    alert('Неверный логин или пароль');
  }
  return false;
}


