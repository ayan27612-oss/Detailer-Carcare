const header=document.querySelector('.header');
const menu=document.querySelector('.menu');

menu?.addEventListener('click',()=>{
  const open=header.classList.toggle('menu-open');
  menu.setAttribute('aria-expanded',String(open));
});

document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{
  header.classList.remove('menu-open');
  menu?.setAttribute('aria-expanded','false');
}));

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();

/* Always open the site at the top when loaded directly. */
if('scrollRestoration' in history){
  history.scrollRestoration='manual';
}
window.addEventListener('pageshow',()=>{
  window.scrollTo(0,0);
});
window.addEventListener('load',()=>{
  window.scrollTo(0,0);
});
