let users = [
  {id: 1, img: '/img/Max.png', name: 'Maximillian', position: 'Leading specialist of the Control Department', email: 'controldepartment@gmail', phone: '+380 50 678 03 24'},
  {id: 2, img: '/img/Adolph.png', name: 'Adolph Blaine Charles David Earl Matthew Matthew', position: 'Contextual advertising specialist', email: 'adolph.blainecharles@...', phone: '+380 50 678 03 24'},
  {id: 3, img: '/img/Eliz.png', name: 'Elizabeth', position: 'Frontend developer', email: 'elizabet.front@gmail.com', phone: '+380 50 678 03 24'},
  {id: 4, img: '/img/AlexJ.png', name: 'Alexander Jayden', position: 'Backend developer', email: 'alexander.back@gmail.com', phone: '+380 50 678 03 24'},
  {id: 5, img: '/img/Noah.png', name: 'Noah', position: 'QA', email: 'noah1998@gmail.com', phone: '+380 50 678 03 24'},
  {id: 6, img: '/img/SmithW.png', name: 'Liamgrievescasey Smith Wiam', position: 'Lead designer', email: 'liamgrievescasey.smith@...', phone: '+380 50 678 03 24'}
];

const toHTML = user => `
<div class="users__user">
  <img src="${user.img}">
  <h3>${user.name}</h3>
  <p>${user.position}</p>
  <p title="${user.email}">${user.email}</p>
  <p title="${user.phone}">${user.phone}</p>
</div>
`

function render() {
  const html = users.map(toHTML).join('');
  document.querySelector('#users').innerHTML = html;
}
render()



