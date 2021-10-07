const humberg = document.querySelector('.navigation');
const navList = document.querySelector('.nav-list');
const times = document.querySelector('.times');
const navLink = document.querySelectorAll('.nav-link');
const modal = document.querySelector('.modal');
const btn = document.querySelectorAll('.btn-project');

const data = [
  {
    title: 'Keep track of hundreds of components',
    description:
    '  0 Lorem ipsum dolor sit amet consectetur, adipisicing elit In architecto aliquam accusantium magnam, amet accusamus maxime sit voluptatum laboriosam, nulla optio, repellendus nobis a esse sunt. Commodi amet in corporis!',
    image: 'images/project-image.png',
    techinologies: ['Ruby on Rails', 'Css', 'Javascript'],
    liveVersion: 'https://github.com/ishimwezachee/Portfolio',
    sourceUrl: 'https://github.com/ishimwezachee',
  },
  {
    title: 'Keep track of hundreds of components',
    description:
      ' 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit In architecto aliquam accusantium magnam, amet accusamus maxime sit voluptatum laboriosam, nulla optio, repellendus nobis a esse sunt. Commodi amet in corporis!',
    image: 'images/project-image.png',
    techinologies: ['Ruby on Rails', 'Css', 'Javascript'],
    liveVersion: 'https://github.com/ishimwezachee/Portfolio',
    sourceUrl: 'https://github.com/ishimwezachee',
  },
  {
    title: 'Keep track of hundreds of components',
    description:
      '2 Lorem ipsum dolor sit amet consectetur, adipisicing elit In architecto aliquam accusantium magnam, amet accusamus maxime sit voluptatum laboriosam, nulla optio, repellendus nobis a esse sunt. Commodi amet in corporis!',
    image: 'images/project-image.png',
    techinologies: ['Ruby on Rails', 'Css', 'Javascript'],
    liveVersion: 'https://github.com/ishimwezachee/Portfolio',
    sourceUrl: 'https://github.com/ishimwezachee',
  },
  {
    title: 'Keep track of hundreds of components',
    description:
      ' 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit In architecto aliquam accusantium magnam, amet accusamus maxime sit voluptatum laboriosam, nulla optio, repellendus nobis a esse sunt. Commodi amet in corporis!',
    image: 'images/project-image.png',
    techinologies: ['Ruby on Rails', 'Css', 'Javascript'],
    liveVersion: 'https://github.com/ishimwezachee/Portfolio',
    sourceUrl: 'https://github.com/ishimwezachee',
  },
  {
    title: 'Keep track of hundreds of components',
    description:
      ' 4 Lorem ipsum dolor sit amet consectetur, adipisicing elit In architecto aliquam accusantium magnam, amet accusamus maxime sit voluptatum laboriosam, nulla optio, repellendus nobis a esse sunt. Commodi amet in corporis!',
    image: 'images/project-image.png',
    techinologies: ['Ruby on Rails', 'Css', 'Javascript'],
    liveVersion: 'https://github.com/ishimwezachee/Portfolio',
    sourceUrl: 'https://github.com/ishimwezachee',
  },
  {
    title: 'Keep track of hundreds of components',
    description:
      '  5 Lorem ipsum dolor sit amet consectetur, adipisicing elit In architecto aliquam accusantium magnam, amet accusamus maxime sit voluptatum laboriosam, nulla optio, repellendus nobis a esse sunt. Commodi amet in corporis!',
    image: 'images/project-image.png',
    techinologies: ['Ruby on Rails', 'Css', 'Javascript'],
    liveVersion: 'https://github.com/ishimwezachee/Portfolio',
    sourceUrl: 'https://github.com/ishimwezachee',
  },
];

function closeNavItems() {
  navList.classList.replace('column', 'nav-list');
  navList.style.display = '';
}
humberg.addEventListener('click', () => {
  navList.classList.replace('nav-list', 'column');
  times.classList.add('fa-times');
  navList.style.display = 'block';
});

times.addEventListener('click', () => {
  closeNavItems();
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 600) {
      closeNavItems();
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  btn.forEach((button, index) => {
    button.addEventListener('click', () => {
      modal.style.display = 'block';
      for (let i = 0; i < data.length; i += 1) {
        const modalData = data[index];
        let project = `
    <div class='modal-content'>
      <span class='close'>&times;</span>
      <div class='modal-container'>
        <div class='pop-card'>
            <img class='card-image' src=${modalData.image} alt='img-modal' />
          <div class='text-btns'>
            <p class='track'>${modalData.title}</p>
            <div class='check2'>
            <button class='check-detail'><a href=${modalData.liveVersion} class='social-link'>
            See Live <span><i class='far fa-arrow-alt-circle-up'></i></span>
          </a></button>
          <button class='check-detail'>
            <a href=${modalData.sourceUrl} class='social-link'>
              See source <span<i class='fab fa-github'></i></i></span>
            </a>
          </button>
            </div>
          </div>
          <ul class='list-btns'>
          `;

        modalData.techinologies.forEach((language) => {
          project += `<li class='list-btn'>${language}</li>`;
        });

        project += `
            </ul>
            <p class='text-describtion'>${modalData.description}</p>
            <div class='check'>
            <button class='check-detail'><a href=${modalData.liveVersion} class='social-link'>
            See Live <span><i class='far fa-arrow-alt-circle-up'></i></span>
          </a></button>
          <button class='check-detail'>
            <a href=${modalData.sourceUrl} class='social-link'>
              See source <span<i class='fab fa-github'></i></i></span>
            </a>
          </button>
            </div>
          </div>
      </div>
    </div>
      `;
        modal.innerHTML = project;

        const span = document.querySelector('.close');
        span.addEventListener('click', () => {
          modal.style.display = 'none';
        });
      }
    });
  });
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
