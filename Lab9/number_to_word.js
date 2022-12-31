// ****** number to word ******

let convertBtn = document.getElementById("convert");


convertBtn.addEventListener("click", function(){
    let number = document.getElementById("Number").value;
    let words = document.getElementById("words");

    if(String(number).length == 1){
        if(number == 0){
            words.placeholder = "ZERO";
        }
    }
});