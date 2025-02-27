var btn=document.querySelector(".btn");
var menu=document.querySelector(".menu");           
Tabnine|Edit|Test|Explain|Document
btn.addEventListener("click",function(){
    menu.classList.toggle("active");
});
var navLink=document.querySelectorAll("ul li a");
for(var i=0;i<navLink.length;i++){
    Tabnine|Edit|Test|Explain|Document
    navLink[i].addEventListener("click",function(){
        menu.classList.remove("active");
    });
}