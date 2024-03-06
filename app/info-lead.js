
const btnItem = document.querySelectorAll('.item')
const openLead = document.querySelector('.popup-lead')
const closeleads = document.querySelector('.close-popup')
const Bubble = document.querySelector('.content-popup-lead')

function ShowLead (){
        openLead.classList.add('open-lead');
}
function closeLead(){
        openLead.classList.remove('open-lead');
        closeleads.classList.remove('open-lead');
}
for( const btnItems of btnItem){
    btnItems.addEventListener('click',ShowLead);
    
}
Bubble.addEventListener('click', function(event){
    event.stopPropagation();
  });

openLead.addEventListener('click', closeLead);
closeleads.addEventListener('click',closeLead);