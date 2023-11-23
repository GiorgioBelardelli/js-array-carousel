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

                immagini[activeItem].classList.remove("active");
                    
                activeItem = 0;

                immagini[activeItem].classList.add("active");
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

            if (activeItem === immagini[0]){
                prev.classList.add("hidden");
            }

        }
    }
)