const modalOverlay = document.querySelector('.modal-overlay')
const cards =document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click",function(){

        // const imgId = card.getAttribute("id");
        const inf = card.querySelector('.informacion').innerHTML;
        const img = card.querySelector('.container-img').innerHTML;
        modalOverlay.classList.add('active');
        // modalOverlay.querySelector("img").src=`/layouts/assets/${imgId}`;
        modalOverlay.querySelector(".modal-informacion").innerHTML=inf;

        modalOverlay.querySelector(".modal-img").innerHTML=img;

    })
}

document.querySelector(".close-modal").addEventListener("click",function(){
    modalOverlay.classList.remove('active')
})
