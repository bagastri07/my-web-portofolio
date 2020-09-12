//tombol menu
       
var iconMenu = document.getElementById("menuIcon")
var iconClose = document.getElementById("closeIcon")
iconMenu.addEventListener("click", function(){
    document.getElementById("list-menu").classList.toggle("showing");
    iconMenu.style.display = "none";    
    iconClose.style.display = "block";                        
});       

iconClose.addEventListener("click", function(){
    document.getElementById("list-menu").classList.toggle("showing");
    iconClose.style.display = "none";
    iconMenu.style.display = "block";                        
});        

//change background when scroll



window.onscroll = function(){
    cek()
};
function cek(){            
    if (document.body.scrollTop || document.documentElement.scrollTop) {
        document.getElementById("scrl").classList.add("grey");
    }else {
        document.getElementById("scrl").classList.remove("grey");
    }
    
}