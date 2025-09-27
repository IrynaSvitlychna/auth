const users = [];

form.onsubmit = handleSubmit;

function handleSubmit() {
  const user = Object.fromEntries(new FormData(form));
  
  register();
  saveUsers();
}


function register(user) {
  users.push(user);
}

function saveUsers() {
  const json = JSON.stringify(users);
  localStorage.users = json;
}