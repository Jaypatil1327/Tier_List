let file = document.querySelector("input");
let form = document.querySelector("form");
let imgcnt = document.querySelector(".image-container");
let temp = null ; 

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let img = document.createElement("img");

 
    if (file.files && file.files[0]) {
        let reader = new FileReader();

        reader.onload = () => {
            img.src = reader.result; 
            img.classList.add("img") ; 
            img.draggable = true ;
            console.log(img) ;  

            img.addEventListener("dragstart", (event) => {
                temp = event.target; 
                console.log("Dragging started:", temp);
            });

            imgcnt.appendChild(img); 
        };

        reader.readAsDataURL(file.files[0]); 
    } else {
        console.error("No file selected");
    }
});



const targets = document.querySelectorAll(".dropZone");


for (let ele of targets) {
    ele.addEventListener("dragover", (event) => {
        event.preventDefault(); 
    });
}


for (let ele of targets) {
    ele.addEventListener("drop", (event) => {
        event.preventDefault();
        
        if (temp) {
            ele.appendChild(temp);
            temp = null; 
            console.log("Dropped successfully!");
        }
    });
}