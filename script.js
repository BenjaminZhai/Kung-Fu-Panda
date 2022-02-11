// Kung Fu Panda Character Search


//Variables for HTML Elements
let charImgEl = document.getElementById("char");
let charNameEl = document.getElementById("charname")
let charQuoteEl = document.getElementById("quote")

//Add event listener to button
document.getElementById("search").addEventListener("click", characterSearch)

//Event Function
function characterSearch(){

    // Get Input
    let name = document.getElementById("name").value;

    // Check name
    if (name === "Tigress") {
        charImgEl.src = "images/tigress.png";
        charNameEl.innerHTML = "Tigress"
        charQuoteEl.innerHTML = "That was pretty hardcore!"
    } else if (name === "Viper"){
        charImgEl.src = "images/viper.png";
        charNameEl.innerHTML = "Viper"
        charQuoteEl.innerHTML = "I don't need to bite to fight!"
    }else if (name === "Po"){
        charImgEl.src = "images/po.png";
        charNameEl.innerHTML = "Po"
        charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!"
    }else if (name === "Mantis"){
        charImgEl.src = "images/mantis.png";
        charNameEl.innerHTML = "Mantis"
        charQuoteEl.innerHTML = "Fear the bug!"
    }else if (name === "Monkey"){
        charImgEl.src = "images/monkey.png";
        charNameEl.innerHTML = "Monkey"
        charQuoteEl.innerHTML = "We should hang out!"
    }else if (name === "Crane"){
        charImgEl.src = "images/crane.png";
        charNameEl.innerHTML = "Crane"
        charQuoteEl.innerHTML = "You can chain my body, but you will never chain my warrior spirit!"

}
        else {
            charImgEl.src = "images/question-mark.png";
        charNameEl.innerHTML = "--------"
        charQuoteEl.innerHTML = "Character Not Found"
}
}
