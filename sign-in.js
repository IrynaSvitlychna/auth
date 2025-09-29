let users = [];
const user = getQueryparams();

loadUsers();
fillform(user);

form.onsubmit = handleSubmit;

function loadUsers() {
  const json = localStorage.users;

  users = JSON.parse(json);
}

function handleSubmit() {
  const user = Object.fromEntries(new FormData(form));
  const accessGranted = check(user);

  if (!accessGranted) {
    alert('incorrect login or password');
  } else {
    localStorage.login = user.login;
  }

  return accessGranted;
}

function check({login, password}) {
  for (let i = 0; i < users.length; i++) {
    if (user[i].login == login  && user[i].password == password)  {
      return true;
    }
  }
}

function getQueryparams() {
  const params = location.search.slice(1).split('&');
  const obj = {};
  
  for (let i = 0; i < params.length; i++) {
    const [key, value] = params[i].split('=');
    obj[key] = value;
  }
  return obj;
}

function fillform(data) {
  form.login.value = data.login ?? '';
  form.password.value = data.password ?? '';
}