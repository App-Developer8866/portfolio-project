const body = document.querySelector('.works');
const humburgerBtn = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menue');
const section = document.createElement('section');
const Modal = document.querySelector('.modal-container');
const ModalTitle = document.querySelector('.modaltitle');
const ModalTechnology = document.querySelector('.language_used_modal');
const ModalImage = document.querySelector('.popup-image');
const ModalDescription = document.querySelector('.pop-up-description');
const ModalSeeLive = document.querySelector('.seelive');
const ModalSeeSource = document.querySelector('.seesource');
const Company = document.querySelector('.pop-company');
const Role = document.querySelector('.pop-role');
const Year = document.querySelector('.pop-year');


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
  ModalTitle.innerHTML = getDetail[0].title;
  Company.innerHTML = getDetail[0].company;
  Role.innerHTML = getDetail[0].role;
  Year.innerHTML = getDetail[0].year;
  ModalImage.src = getDetail[0].img;
  ModalTechnology.innerHTML = modaltechnology;
  ModalDescription.innerHTML = getDetail[0].desc;
  ModalSeeLive.setAttribute('href', getDetail[0].linkToLive);
  ModalSeeSource.setAttribute('href', getDetail[0].linkToSource);
  Modal.style.display = 'block';
};