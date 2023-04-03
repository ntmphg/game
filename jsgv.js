let text=document.getElementById('text');
let leaf=document.getElementById('leaf');
// let plant=document.getElementById('plant');
// let tree=document.getElementById('tree');
let hill1=document.getElementById('hill1');
// let hill2=document.getElementById('hill2');
// let hill3=document.getElementById('hill3');
let hill4=document.getElementById('hill4');
let hill5=document.getElementById('hill5');

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    leaf.style.top = value*-1.5 + 'px';
    leaf.style.left = value*1.5 + 'px';
    hill5.style.left = value*1.5 + 'px';
    hill4.style.left = value*-1.5 + 'px';
})

function Redirect(){
    window.location = "https://ntmphg.github.io/minesweeper/?fbclid=IwAR1s-w5EWTM-gzVMhmbKRbXWU_KFq2AsryL8hpfggOR9-duawISch18RGDo"
}