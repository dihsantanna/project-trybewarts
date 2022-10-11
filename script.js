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

const handleLoginChange = ({ target }) => {
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

// Formulário de Avaliação

const FORMS_INFO = {
  name: '',
  lastname: '',
  email: '',
  house: '',
  family: '',
  subjects: {
    HoFs: false,
    Jest: false,
    Promises: false,
    React: false,
    SQL: false,
    Python: false,
  },
  rate: '',
  comment: '',
  agreement: false,
};

const evaluationForms = document.querySelector('#evaluation-form');
const nameInput = document.querySelector('#input-name');
const lastnameInput = document.querySelector('#input-lastname');
const emailInput = document.querySelector('#input-email');
const houses = document.querySelector('#house');
const families = document.querySelector('#family-container');
const subjects = document.querySelector('#subjects');
const rate = document.querySelector('#rate-radios');
const textarea = document.querySelector('#textarea');
const agreement = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
const counter = document.querySelector('#counter');

const createHouses = () => {
  const housesArray = ['Escolha uma casa', 'Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
  for (let index = 0; index < housesArray.length; index += 1) {
    const option = document.createElement('option');
    option.innerText = housesArray[index];
    option.value = housesArray[index];
    option.id = `${housesArray[index] === 'Gitnória'
      ? 'gitnoria'
      : housesArray[index].toLowerCase()}-house`;
    if (index === 0) {
      option.selected = true;
      option.disabled = true;
    }
    houses.appendChild(option);
  }
};

const handlerRegisterChange = ({ target }) => {
  const { name, value } = target;
  FORMS_INFO[name] = target.type === 'checkbox' ? target.checked : value;
  console.log(FORMS_INFO);
};

const handleSelectHouses = (event) => {
  const { value } = event.target;
  const image = document.querySelector('#trybewarts-forms-logo');
  image.src = `images/trybewarts-${value === 'Gitnória' ? 'gitnoria' : value.toLowerCase()}.svg`;
  handlerRegisterChange(event);
};

const createFamilies = () => {
  const familiesArray = ['Frontend', 'Backend', 'FullStack'];
  for (let index = 0; index < familiesArray.length; index += 1) {
    const label = document.createElement('label');
    label.htmlFor = familiesArray[index].toLowerCase();
    label.className = 'family';
    label.innerText = familiesArray[index];
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'family';
    input.value = familiesArray[index];
    input.id = familiesArray[index].toLowerCase();
    if (index === 0) input.checked = true;
    setEvent(input, 'change', handlerRegisterChange);
    label.appendChild(input);
    families.appendChild(label);
  }
};

const handleSubjects = (event) => {
  const { value, checked } = event.target;
  FORMS_INFO.subjects[value] = checked;
};

const createSubjects = () => {
  const subjectsArray = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
  for (let index = 0; index < subjectsArray.length; index += 1) {
    const label = document.createElement('label');
    label.htmlFor = subjectsArray[index].toLowerCase();
    label.className = 'subject-label';
    label.innerText = subjectsArray[index];
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'subject';
    input.value = subjectsArray[index];
    input.id = subjectsArray[index].toLowerCase();
    setEvent(input, 'change', handleSubjects);
    label.appendChild(input);
    subjects.appendChild(label);
  }
};

const createRateRadios = () => {
  for (let index = 1; index <= 10; index += 1) {
    const label = document.createElement('label');
    label.htmlFor = `rate-${index}`;
    label.innerText = index;
    label.className = 'rate';
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'rate';
    input.value = index;
    input.id = `rate-${index}`;
    if (index === 8) input.checked = true;
    setEvent(input, 'change', handlerRegisterChange);
    label.appendChild(input);
    rate.appendChild(label);
  }
};

const handleTextArea = (event) => {
  const { value } = event.target;
  counter.innerText = event.target.maxLength - value.length;
  handlerRegisterChange(event);
};

const handleAgreement = (event) => {
  const { checked } = event.target;
  submitButton.disabled = !checked;
  handlerRegisterChange(event);
};

const createSpanToSubmint = (text) => {
  const span = document.createElement('span');
  span.innerText = text;
  return span;
};

const insertElementsInForm = (elementArr) => {
  evaluationForms.innerHTML = '';
  evaluationForms.classList.add('evaluation-saved');

  const div = document.createElement('div');
  div.className = 'evaluation-saved-container';

  elementArr.forEach((element) => div.appendChild(element));
  evaluationForms.appendChild(div);
};

const createSubmitElements = ({
  name, lastname, email, house, family, subjects: matter, rate: evaluation, comment,
}) => {
  const fullName = createSpanToSubmint(`Nome: ${name} ${lastname}`);
  const emailSpan = createSpanToSubmint(`Email: ${email}`);
  const houseSpan = createSpanToSubmint(`Casa: ${house}`);
  const familySpan = createSpanToSubmint(`Família: ${family}`);
  const subjectsSpan = createSpanToSubmint(
    `Matérias: ${Object.keys(matter)
      .filter((subject) => matter[subject])
      .join(', ')}`.replace(/[, ]$/, ''),
  );
  const rateSpan = createSpanToSubmint(`Avaliação: ${evaluation}`);
  const textareaSpan = createSpanToSubmint(`Observações: ${comment}`);

  insertElementsInForm([
    fullName, emailSpan, houseSpan, familySpan, subjectsSpan, rateSpan, textareaSpan,
  ]);
};

const handleSubmitRegister = (event) => {
  event.preventDefault();
  createSubmitElements(FORMS_INFO);
};

window.onload = () => {
  setEvent(loginInput, 'keyup', handleLoginChange);
  setEvent(passwordInput, 'keyup', handleLoginChange);
  setEvent(loginButton, 'click', handleSubmit);
  createHouses();
  setEvent(nameInput, 'keyup', handlerRegisterChange);
  setEvent(lastnameInput, 'keyup', handlerRegisterChange);
  setEvent(emailInput, 'keyup', handlerRegisterChange);
  setEvent(houses, 'change', handleSelectHouses);
  createFamilies();
  createSubjects();
  createRateRadios();
  setEvent(textarea, 'keyup', handleTextArea);
  setEvent(agreement, 'change', handleAgreement);
  setEvent(submitButton, 'click', handleSubmitRegister);
};
