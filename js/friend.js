const addBtns =document.querySelectorAll(".add-button")
const removeBtns =document.querySelectorAll('.remove-button')
const texts = document.querySelectorAll('.text')
const shows =document.querySelectorAll('.show')

addBtns.forEach((addBtn, index)=>{
    addBtn.addEventListener('click', ()=>{
        console.log(shows[index])
        shows[index].style.display='none'
        texts[index].innerHTML="Đã gửi lời mời"
    })
})
removeBtns.forEach((removeBtn, index)=>{
    removeBtn.addEventListener('click', ()=>{
        shows[index].style.display='none'
        texts[index].innerHTML="Đã hủy lời mời"
    })
})