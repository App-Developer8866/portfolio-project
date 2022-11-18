/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const humburgerBtn = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menue');
const Portfolio = document.querySelectorAll('.card');
const Modal = document.querySelector('.modal-container');
const form = document.querySelector('#contactme');
const userName = document.getElementById('name');
const Email = document.getElementById('email');
const Msg = document.getElementById('message');

humburgerBtn.addEventListener('click', () => {
  humburgerBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menue > a').forEach((n) => n.addEventListener('click', () => {
  humburgerBtn.classList.remove('active');
  navMenu.classList.remove('active');
}));

const arrWork = [
  {
    id: 1,
    title: 'Tonic',
    company: 'canopy',
    role: 'Back End Dev',
    year: 2015,
    closeImg: 'images/close.jpg',
    img: 'images/web-img1.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is 
    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
    scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting 
    industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn 
    printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text 
    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
    ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the 
    relea`,
    linkToLive: 'https://app-developer8866.github.io/',
    linkToSource: 'https://github.com/App-Developer8866/portfolio-project',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: 2015,
    closeImg: 'images/close.jpg',
    img: 'images/portfolio-img4.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is 
    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
    scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting 
    industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn 
    printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text 
    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
    ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the 
    relea`,
    linkToLive: 'https://app-developer8866.github.io/',
    linkToSource: 'https://github.com/App-Developer8866/portfolio-project',
  },
  {
    id: 3,
    title: 'Facebook 360',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: 2015,
    closeImg: 'images/close.jpg',
    img: 'images/portfolio-img.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is 
    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
    scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting 
    industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn 
    printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text 
    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
    ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the 
    relea`,
    linkToLive: 'https://app-developer8866.github.io/',
    linkToSource: 'https://github.com/App-Developer8866/portfolio-project',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    company: 'Uber',
    role: 'Lead Developer',
    year: 2018,
    closeImg: 'images/close.jpg',
    img: 'images/portfolio-img2.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is 
    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
    scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting 
    industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn 
    printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text 
    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
    ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the 
    relea`,
    linkToLive: 'https://app-developer8866.github.io/',
    linkToSource: 'https://github.com/App-Developer8866/portfolio-project',
  },
];

const openPop = (id) => {
  const getDetail = arrWork.filter((i) => i?.id === id);
  let modaltechnology = '';
  getDetail[0].technologies.forEach((language) => {
    modaltechnology += `
        <li>${language}</li>
      `;
  });
  Modal.innerHTML = `
  <div class="modalbox">
    <div class="pop-top">
      <div class="top-title">
        <h3 class="modaltitle">${getDetail[0].title}</h3>
        <img onclick="CloseModal()" class="close-modal" src="images/close.jpg" alt="closebutton">
    </div>
    <div class="project_info">
        <p class="pop-company">${getDetail[0].company}</p>
      <ul class="ul">
        <li class="pop-role">${getDetail[0].role}</li>
        <li class="pop-year">${getDetail[0].year}</li>
    </ul>
    </div>
  </div>
    <img class="popup-image" src='${getDetail[0].img}' alt="Project Popup Image">
    <div class="below-box">
    <p class="pop-up-description">${getDetail[0].desc}</p>
    <div class="sec-box">
      <ul class="language_used_modal">${modaltechnology}</ul>
    <div class="modal-button-div">  
  <a href='${getDetail[0].linkToLive}' class="seelive"><button type="button">See live <img class="button-image" src="images/export.svg" alt="live"> </button></a>    
  <a href='${getDetail[0].linkToSource}' class="seesource"><button type="button">See source  <img class="button-image" src="images/github.png" alt="github"></button></a>  
    </div>
    </div>
  </div>
  </div>
  `;
  Modal.style.display = 'block';
};

const CloseModal = () => {
  Modal.style.display = 'none';
  document.querySelector('main').style.display = 'block';
  document.querySelector('header').style.display = 'flex';
};

for (let i = 0; i < arrWork.length; i++) {
  let languages = '';
  arrWork[i].technologies.forEach((language) => {
    languages += `
        <li id='lang'>${language}</li>
      `;
    Portfolio[i].innerHTML = `
        <a href="#">
            <img class="img-container" src=${arrWork[i].img} alt="project-image1" />
          </a>
        <div class="content">
          <div class="project_name">
            <h3 id="title">${arrWork[i].title}</h3>
          </div>
          <div class="project_info">
            <div class="company">
              <p>${arrWork[i].company}</p>
            </div>
            <ul class="ul">
              <li class="role">${arrWork[i].role}</li>
              <li class="year">${arrWork[i].year}</li>
          </ul>
          </div>
          <div class="description">
            <p>
              ${arrWork[i].desc}
            </p>
          </div>
          <ul class="languages">
            ${languages}
          </ul>
          <button type="button" class="button-container" onclick='openPop(${arrWork[i]?.id})'>
            See Project
          </button>
        </div>
      `;
  });
}

function validate() {
  const emailVal = document.getElementById('email').value;
  const regx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  // eslint-disable-next-line func-names
  document.forms[0].onsubmit = function (e) {
    if (regx.test(emailVal)) {
      document.querySelector('small').innerHTML = 'Valid';
      document.querySelector('small').style.color = 'green';
    } else {
      document.querySelector('small').innerHTML = 'Invalid! Please enter the email in lower case';
      document.querySelector('small').style.color = 'red';
      e.preventDefault();
    }
  };
}

form.addEventListener('input', () => {
  const contactData = {
    username: userName.value,
    email: Email.value,
    message: Msg.value,
  };
  localStorage.setItem('contact', JSON.stringify(contactData));
});

const getLocalStorageData = JSON.parse(localStorage.getItem('contact'));
userName.value = getLocalStorageData.username;
Email.value = getLocalStorageData.email;
Msg.value = getLocalStorageData.message;