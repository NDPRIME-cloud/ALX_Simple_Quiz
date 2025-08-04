function checkAnswer(){
    let correctAnswer = "4";
    const feed = document.getElementById("feedback")

    const selected = document.querySelector("input[name='quiz']:checked")
const userAnswer = selected.value;
if(userAnswer === correctAnswer){
    feed.textContent =  "Correct! Well done.";
    return;


}else{
    feed.textContent = "That's incorrect. Try again!";
    return
}
}
const submit = document.getElementById("submit-answer");
submit.addEventListener("click", checkAnswer)


