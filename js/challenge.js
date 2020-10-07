let paused = false;

function runningCounter(){
    if (!paused) {
        changeCounter(1);
        setTimeout(runningCounter, 1000);
    }
}

function changeCounter(amount) {
    let counter = document.getElementById("counter");
    counter.innerText = parseInt(counter.innerText) + amount;
}


function pauseButtons(){
    buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id != "pause"){
            buttons[i].disabled = !buttons[i].disabled;
        }
    }
}

function like(){
    let currentNumber = parseInt(document.getElementById("counter").innerText);
    let likesList = document.querySelector("ul.likes");
    let previouslyLiked = likesList.children;
    previouslyLiked = [...previouslyLiked].map(el => parseInt(el.dataset.num))
    if (previouslyLiked.includes(currentNumber)){
        let likeCount = document.querySelector(`li[data-num="${currentNumber}"] > span`)
        likeCount.innerText = parseInt(likeCount.innerText) + 1;
        if (likeCount.parentElement.innerHTML.split('').slice(-1) != "s"){
            likeCount.parentElement.innerHTML = likeCount.parentElement.innerHTML + "s";
        }
    } else {
        let newLike = document.createElement("li")
        newLike.dataset.num = currentNumber;
        newLike.innerHTML = `${currentNumber} has been liked <span>1</span> time`;
        likesList.appendChild(newLike);
    }
}

document.getElementById("comment-form").addEventListener("submit",function(e){
    e.preventDefault();
    let commentDiv = document.getElementById("list");
    let newComment = document.createElement("p");
    newComment.innerText = e.target[0].value;
    commentDiv.appendChild(newComment);
})

document.getElementById("minus").addEventListener("click",function(){
    changeCounter(-1);
});

document.getElementById("plus").addEventListener("click",function(){
    changeCounter(1);
});
document.getElementById("heart").addEventListener("click",function(){
    like();
});

document.getElementById("pause").addEventListener("click",function(e){
    if (e.target.innerText == "pause") {
        e.target.innerText = "resume";
        paused = true;
        pauseButtons();
    } else {
        e.target.innerText = "pause";
        paused = false;
        pauseButtons();
        setTimeout(runningCounter, 1000);
    }
});

setTimeout(runningCounter, 1000);