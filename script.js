
const games=[
{name:'Wolf Run',icon:'🐺',cat:'Acción',url:'games/wolf-run/index.html'},
{name:'Neon Racer',icon:'🏎️',cat:'Carreras'},
{name:'Dark Escape',icon:'👻',cat:'Terror'},
{name:'Memory Rush',icon:'🧠',cat:'Puzzle'},
{name:'Reflex X',icon:'⚡',cat:'Arcade'},
];
while(games.length<24){games.push({name:'Próximamente',icon:'🎮',cat:'Arcade'});}
const grid=document.getElementById('grid');
function render(list){grid.innerHTML='';list.forEach(g=>{const a=document.createElement(g.url?'a':'div');if(g.url)a.href=g.url;a.className='card';a.innerHTML=`<div class="thumb">${g.icon}</div><h3>${g.name}</h3><p>${g.cat}</p>`;grid.appendChild(a);});}
render(games);
search.oninput=e=>render(games.filter(g=>g.name.toLowerCase().includes(e.target.value.toLowerCase())));
