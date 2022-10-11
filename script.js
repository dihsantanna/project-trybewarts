const DEFAULT_USER = {
  id: 1,
  email: 'tryber@teste.com',
  password: '123456',
};

const setEvent = (element, event, callback) => {
  element.addEventListener(event, callback);
};

const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');

const login = {
  email: '',
  password: '',
};

const clearLogin = () => {
  loginInput.value = '';
  passwordInput.value = '';
  login.email = '';
  login.password = '';
};

const handleChange = ({ target }) => {
  const { name, value } = target;
  login[name] = value;
};

const emailValidate = (email) => {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  return regex.test(email);
};

const passValidate = (password) => password.length < 6;

const handleSubmit = (event) => {
  event.preventDefault();

  const { email, password } = login;

  if (emailValidate(email) || passValidate(password)) {
    alert('Login ou senha inválidos.');
  } else if (email === DEFAULT_USER.email && password === DEFAULT_USER.password) {
    alert('Olá, Tryber!');
    clearLogin();
  } else {
    alert('Login ou senha inválidos.');
  }
};

window.onload = () => {
  setEvent(loginInput, 'keyup', handleChange);
  setEvent(passwordInput, 'keyup', handleChange);
  setEvent(loginButton, 'click', handleSubmit);
};
