const hidden = document.querySelector(".hidden");
const other = document.querySelector("#other");
const men = document.querySelector("#men");
const women = document.querySelector("#women");

other.addEventListener("change", () => {
    if (other.checked) 
        hidden.style.display = "block";
});

men.addEventListener("change", ()=>{
    hidden.style.display='none'
})
women.addEventListener('change', ()=>{
    hidden.style.display="none"
})
