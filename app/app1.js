



$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
	$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

const btnChat = document.querySelector('.desktop')
const btnOpenChat = document.querySelector('.chat-box')
const closeBtnchat = document.querySelector('.widget-header-button')


function ShowChatBox(){
    btnOpenChat.classList.add('openChat');
    btnChat.classList.add('closeBtn');
}
function closeChatBox(){
        btnOpenChat.classList.remove('openChat')
        btnChat.classList.remove('closeBtn')
}   

btnChat.addEventListener('click', ShowChatBox)
closeBtnchat.addEventListener('click', closeChatBox)




