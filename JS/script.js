const immagini = document.getElementsByClassName("item");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let activeItem = 0;

next.addEventListener("click", 
    
    function(){

        if(activeItem < immagini.length -1){

            immagini[activeItem].classList.remove("active");

            activeItem++;

            immagini[activeItem].classList.add("active");

            if (activeItem === immagini.length -1){
            next.classList.add("hidden");
            }

        }
    }
);

prev.addEventListener("click",

    function(){

        if(activeItem < immagini.length -1){

            immagini[activeItem].classList.remove("active");

            activeItem--;

            immagini[activeItem].classList.add("active");

            if (activeItem === immagini[]){
                prev.classList.add("hidden");
            }

        }
    }
)