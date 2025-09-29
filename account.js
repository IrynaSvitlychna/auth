const login = getName();
const signOutBtn = document.querySelector('button');

fillName(login);

signOutBtn.onclick = signOut;

function signOut() {
  delete localStorage.login;
  location.href = '.';
}

function getName() {
  const prefix = 'login=';
  const start = location.search.indexOf(prefix) + prefix.length;
  const end = location.search.indexOf('&', start);

  return location.search.slice(start, end != -1 ? end : Infinity);
}

function fillName(name) {
  const output = document.querySelector('output');
  output.value = name;
 }