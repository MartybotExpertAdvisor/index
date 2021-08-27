//vvvvvvv   PRE LOADER to COMPLETE WEB PAGE contents    vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv 
var loader = document.querySelector(".loader")
window.addEventListener("load", vanish);
function vanish() {
    loader.classList.add("disappearloader");
}
//^^^^^^   PRE LOADER to COMPLETE WEB PAGE contents    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// vvvvvvv  DISABLE RIGHT CLICK, CTRL, F12 to explore the contents of WEB PAGE  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv 
// Disable the rightclick and ctrl and f12 keys to find the source file
// take body to change the content
const body = document.getElementsByTagName('body');
// stop keyboard shortcuts
window.addEventListener("keydown", (event) => {
    if(event.ctrlKey && (event.key === "S" || event.key === "s")) {
        event.preventDefault();
        alert("Sorry, you can't do this 💔");
    }

    if(event.ctrlKey && (event.key === "C")) {
        event.preventDefault();
        alert("Sorry, you can't do this 💔");
    }
    if(event.ctrlKey && (event.key === "E" || event.key === "e")) {
        event.preventDefault();
        alert("Sorry, you can't do this 💔");
    }
    if(event.ctrlKey && (event.key === "I" || event.key === "i")) {
        event.preventDefault();
        alert("Sorry, you can't do this 💔");
    }
    if(event.ctrlKey && (event.key === "K" || event.key === "k")) {
        event.preventDefault();
        alert("Sorry, you can't do this 💔");
    }
    if(event.ctrlKey && (event.key === "U" || event.key === "u")) {
        event.preventDefault();
        alert("Sorry, you can't do this 💔");
    }
});

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
    alert("Sorry, you can't do this 💔");
    e.preventDefault();
    }, false);
}
else {
    document.attachEvent('oncontextmenu', function() {
    alert("Sorry, you can't do this 💔");
    window.event.returnValue = false;
    });
}

//disable F12 keys
document.onkeydown = function (event)
{
event = (event || window.event);
    if (event.keyCode == 123 || event.keyCode == 18)
    {
        alert("Sorry, you can't do this 💔");
        return false;
    }
}

//^^^^^^   DISABLE RIGHT CLICK, CTRL, F12 to explore the contents of WEB PAGE   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//^^^^^^Start of Tawk.to Script ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/612890ba649e0a0a5cd33124/1fe37an4q';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
    })();

//^^^^^^End of Tawk.to Script ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
