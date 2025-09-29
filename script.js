const login = getCurrentUser();

if (login) redirect('account.html?login=' + login);

function getCurrentUser() {
  return localStorage.login;
}

function redirect(url) {
  location.href = url;
}