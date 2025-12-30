let clicked=false;
document.querySelector(".hamburger").addEventListener("click",()=>{
    if(!clicked){
        document.querySelector(".sidemenu").classList.add("sidemenuanime");
        document.querySelector(".hamburger").style.gap="0px";
        document.querySelector(".hamburger span").classList.add("hamanime");
        document.getElementById("stroke_second").style.display="none";
        document.getElementById("stroke_first").classList.add("stroke_firstanime");
        document.getElementById("stroke_third").classList.add("stroke_thirdanime");
    }
    else {
        document.querySelector(".sidemenu").classList.remove("sidemenuanime");
        document.querySelector(".hamburger").style.gap="5px";
        document.querySelector(".hamburger span").classList.remove("hamanime");
        document.getElementById("stroke_second").style.display="flex";
        document.getElementById("stroke_first").classList.remove("stroke_firstanime");
        document.getElementById("stroke_third").classList.remove("stroke_thirdanime");
    }
    clicked=!clicked;
})