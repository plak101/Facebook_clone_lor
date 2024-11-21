const showProfile=document.querySelector('#showProfile')
const cardWrap=document.querySelector('#cardWrap')
const cardMess=document.querySelector("#cardMess")
const cardNotice= document.querySelector('#cardNotice')

cardMess.style.display='none'
cardNotice.style.display='none'
cardWrap.style.display="none"

showProfile.addEventListener('click', function(){
    cardMess.style.display='none'
    cardNotice.style.display='none'
    if (cardWrap.style.display==='none'){
        cardWrap.style.display='flex'
    }
    else{
        cardWrap.style.display="none"
    }
})

// mess
const showMess =document.querySelector("#showMess")
showMess.addEventListener("click",function(){
    cardWrap.style.display='none'
    cardNotice.style.display='none'
    if (cardMess.style.display ==="none"){
        cardMess.style.display ="flex"
    }
    else {
        cardMess.style.display ="none"
    }
})

//notice
const showNotice= document.querySelector('#notice')
showNotice.addEventListener('click', function(){
    cardWrap.style.display='none'
    cardMess.style.display='none'
    if (cardNotice.style.display === 'none'){
        cardNotice.style.display='flex'
    }
    else{
        cardNotice.style.display='none'
    }
})

// create status
const showStatus = document.querySelector('.status-input')
showStatus.addEventListener('click', function(){
    document.querySelector('.create-status-wrap').style.display= 'flex'
})
 const hideStatus =document.querySelector('.hide-status')

 hideStatus.addEventListener('click', function(){
    document.querySelector('.create-status-wrap').style.display= 'none'
 })

//LikeChange
const iconLikeWraps =document.querySelectorAll('.icon-like-wrap')
const hideTexts= document.querySelectorAll('.hide-text')
iconLikeWraps.forEach(function(iconLikeWrap,index) {
    iconLikeWrap.addEventListener("click", function(){
        const like1=iconLikeWrap.querySelector('.like1')
        const like2=iconLikeWrap.querySelector('.like2')
        const hideText= hideTexts[index]

        if (like1.style.display==='none'){
            like1.style.display='flex'
            like2.style.display='none'
            hideText.style.display='none'
        }
        else {
            like2.style.display='flex'
            like1.style.display='none'
            hideText.style.display='inline'
        }
    })
});

//hidden imp links
const hiddenImpLinks = document.querySelector('#hidden-imp-links');
const showMore = document.querySelector('#showMore-imp-links')
const showLess = document.querySelector('#showLess-imp-links')

showMore.addEventListener('click', function(){
    hiddenImpLinks.style.display='block'
    showMore.style.display='none'
})
showLess.addEventListener('click', function(){
    hiddenImpLinks.style.display='none'
    showMore.style.display='flex'
})

//close chat
const closeChat = document.querySelector('#close-chat');

closeChat.addEventListener('click', function(){
    const chatBubble= document.querySelector('#chatBubble')
    chatBubble.style.display='none'
})

//close post

const posts =document.querySelectorAll(".post")
posts.forEach(function(post){
    const closePost= post.querySelector('.close-post')

    closePost.addEventListener('click', function(){
        post.classList.add('hidden')
    })
})

//create status
const statusInput = document.getElementById("status-input")
const postBtn = document.querySelector('.post-btn')
const postsWrap = document.querySelector('.posts-wrap')


postBtn.addEventListener('click', ()=>{
    if (statusInput.value!==""){
        const post=document.createElement('div')
        post.classList.add('post')
        post.innerHTML='<div class="post-top"> <div class="post-top-left"><img src="/img/avata.jpg" alt=""><div class="name-time"><p class="name">Khoa Phạm</p><div class="time"><p>Vừa xong</p> <span><i id="size2px" class="fa-solid fa-circle fa-2xs"></i><i class="fa-solid fa-earth-americas"></i></span></div></div></div><div class="post-top-right"><div class="background-icon"><i class="fa-solid fa-ellipsis"></i></div><div class="background-icon close-post"><i class="fa-solid fa-xmark"></i></div></div></div> <div class="post-mid"><p>'+statusInput.value+'</p> <img src="" alt=""></div><div class="post-bottom"><div style="display:none" class="number-like"><div class="number-left"><img id="icon1" src="" alt=""><img id="icon2" src="" alt=""><span class="hide-text">Bạn </span><span></span></div><div class="number-right"><span></span><img src="" alt=""></div></div><hr style="color:gray"><div class="post-icon"><div class="icon-wrap icon-like-wrap"><div class="like-wrap" ><img class="like1" src="/img/like.png" alt=""><img class="like2" src="/img/like2.png" alt=""></div><span class="like-text">Thích</span><div class="hidden-icon"><img src="/img/icon-like.png" alt=""><img src="/img/icon-love.png" alt=""><img src="/img/icon-care.png" alt=""><img src="/img/icon-haha.png" alt=""><img src="/img/icon-sad.png" alt=""><img src="/img/icon-wow.png" alt=""><img src="/img/icon-angry.png" alt=""></div></div><div class="icon-wrap"><img src="/img/chat.png" alt=""><span>Bình luận</span></div><div class="icon-wrap"><img src="/img/share.png" alt=""><span>Chia sẻ</span></div></div><div class="comment"></div></div>';
        postsWrap.prepend(post)
        statusInput.value=""
        document.querySelector('.create-status-wrap').style.display= 'none'
    }
})

//add bubble chat
const onlineLists = document.querySelectorAll(".online-list")
const chatBubbleWrap = document.querySelector(".chat-bubble-wrap")

onlineLists.forEach((onlineList)=>{
    onlineList.addEventListener('click', ()=>{
        var onlineImg =onlineList.querySelector('img').src
        var onlineName = onlineList.querySelector('p').textContent
        const chatBubble= document.createElement('div')
        chatBubble.classList.add('chat-bubble')
        chatBubble.innerHTML='<div class="online"><img src="'+onlineImg+'" alt=""><img class="close-btn" src="/img/close.png" id="close-chat"><div class="title"><p>'+onlineName+'</p><p></p></div></div>';
        chatBubbleWrap.append(chatBubble)
        //close
        const closeChatBtn = chatBubble.querySelector("#close-chat");
        closeChatBtn.addEventListener("click", () => {
            chatBubbleWrap.removeChild(chatBubble);
        });
    })
})
