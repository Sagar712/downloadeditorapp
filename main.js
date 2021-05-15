if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(
        registration => {
            console.log("SW registered");
            console.log(registration);
        }
    ).catch(error => {
        console.log("SW failed");
    })
}

let num1 = 0;
function popupmenu() {
    let rotater = document.querySelector(".menubtn-bar");
    let cross = document.querySelector(".bar");
    let menu = document.querySelector(".menuitems");
    let overlay = document.querySelector(".nextoverlay");
    let icon = document.getElementById('changeclas');

    cross.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    rotater.classList.toggle("active");
    if(num1==0){
        icon.className='fas fa-times';
        num1=1;
    }
    else if(num1==1){
        icon.className='fas fa-ellipsis-v';
        num1=0;
    }  
}

// heaader till this. Add code next to this.


const allbtns = document.querySelectorAll('.btn');
/*
allbtns.forEach(butn => {
    butn.addEventListener('click', () => {
        let command = butn.dataset['element'];
        if(command == 'foreColor'){
            document.execCommand(command, false, 'red');
        }
        else if(command == 'fontSize'){
            document.execCommand(command, false, 3);
        }
        else
            document.execCommand(command, false, null);
    });
});
*/
let size = 0;
let color = 0;

allbtns.forEach(butn => {
    butn.addEventListener('click', () => {
        butn.classList.toggle('active');

        let command = butn.dataset['element'];
        if(command == 'foreColor'){
            if(color == 0){
                document.execCommand(command, false, 'rgb(253, 255, 112)');
                color = 1;
            }
            else{
                document.execCommand(command, false, 'white');
                color = 0;
            }
            
        }
        else if(command == 'fontSize'){
            
            if(size == 0){
                document.execCommand(command, false, 5);
                size = 1;
            }
            else{
                document.execCommand(command, false, 4);
                size = 0;
            }
        }
        else
            document.execCommand(command, false, null);
    });
});

function savedata() {
    const source = document.querySelector('.content').innerHTML;
    //console.log(source);
    localStorage.setItem('textData', source);
    alert("Changes saved !");
    let str = "Sagr <!------> vishal ksjjks <!------> Akash";
    let splits = [];
    splits = str.split('<!------>');
    
}

function renderer() {
    document.querySelector('.content').innerHTML = localStorage.getItem('textData');
}

renderer();