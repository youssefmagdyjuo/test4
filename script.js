const nav = document.querySelector('nav');
addEventListener('scroll',()=>{
nav.classList.toggle('scroll_nav',scrollY > 0)
})
//========================== NAVBAR OPEN|CLOSE============================
const btn_open_nav=document.getElementById('btn_open_nav');
const btn_close_nav=document.getElementById('btn_close_nav');
const nav_links_list=document.getElementById('nav_links_list');
btn_open_nav.addEventListener('click',()=>{
    nav_links_list.style.scale='1'
    btn_open_nav.style.display='none'
    btn_close_nav.style.display='inline-block'
})
btn_close_nav.addEventListener('click',()=>{
    nav_links_list.style.scale='0'
    btn_open_nav.style.display='inline-block'
    btn_close_nav.style.display='none'
})
//====================== active page ==================================
const pc_view=window.matchMedia('(min-width:1024px)');
const link = document.querySelectorAll('.link');
const window_active=window.location.pathname;
link.forEach(activePage =>{
if(activePage.href.includes(window_active)&& pc_view.matches){
    activePage.classList.add('page_active')
}
})