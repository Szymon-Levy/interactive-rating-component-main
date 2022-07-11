const rateNumbers = document.querySelectorAll("#rate-numbers span");
const submitButton = document.getElementById("submit");
const givenRate = document.getElementById("rate-place");
const rateBox = document.getElementById("rate-box");

rateNumbers.forEach(item =>{
    item.addEventListener("click", ()=>{
        rateNumbers.forEach(items =>{
            items.classList.remove("active");
        });
        item.classList.add("active");
        submitButton.style.cursor = "pointer";
        givenRate.innerHTML = item.innerHTML;
    });
});


submitButton.addEventListener("click", ()=>{
    rateNumbers.forEach(item =>{
        if(item.classList.contains("active")){
            rateBox.style.left = "0%";
        }
    });
});