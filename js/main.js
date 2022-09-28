
window.onscroll = function(){scrollMenu()}

function scrollMenu(){
    let topMenu = document.getElementById("topMenu");

    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        topMenu.style.position = "sticky";
    } else {
        topMenu.style.position = "relative";
    }
}
