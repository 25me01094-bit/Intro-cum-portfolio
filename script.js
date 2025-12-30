let pressed=false;
document.querySelector(".butt").addEventListener("click",()=>{
    if(!pressed){
    document.querySelector(".intro").classList.add("animation");
    document.querySelector(".about").classList.add("animation");
    document.querySelector(".butt").innerHTML="&#8592 Back ";
    }
    else{
    document.querySelector(".intro").classList.remove("animation");
    document.querySelector(".about").classList.remove("animation");
    document.querySelector(".butt").innerHTML="About &#x2192 ";
    }
    pressed=!pressed;
})
document.querySelector(".mobbutt").addEventListener("click",()=>{
    if(!pressed){
    document.querySelector(".about").classList.add("animation");
    document.querySelector(".mobbutt").innerHTML=" Back &#x2191";
    document.querySelector(".intro h1").scrollIntoView();
    }
    else{
    document.querySelector(".about").classList.remove("animation");
    document.querySelector(".mobbutt").innerHTML="About &#x2193 ";
    document.querySelector(".intro").scrollIntoView();
    }
    pressed=!pressed;
})
