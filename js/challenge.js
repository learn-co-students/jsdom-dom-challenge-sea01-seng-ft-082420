let pause = document.getElementById('pause')
pause.data= false
pause.onclick = function() {
    if (pause.data === true) { 
    pause.data = !pause.data
    pause.innerText = "pause"
    document.getElementById('plus').disabled = false;
    document.getElementById('minus').disabled = false;
    document.getElementById('heart').disabled = false;
    } else {
        pause.data = !pause.data
        pause.innerText = "resume"
        // document.getElementById('counter').disabled = true;
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('heart').disabled = true;

    }
}
let timer = 0
let counter = document.getElementById('counter')
timec = function() {
return setInterval( function () { timer+= 1;
document.getElementById('counter').innerText = timer;
}, 1e3)};
document.getElementById('plus').onclick = function() {
    timer+=1;
    document.getElementById('counter').innerText = timer
    // event.preventDefault()
}
document.getElementById('minus').onclick = function() {
    timer-=1;
    document.getElementById('counter').innerText = timer
    // event.preventDefault()
}

document.getElementById('heart').onclick = function() {
    if (document.getElementById(timer) === null){
        let li = document.createElement('li')
        li.id = timer
        li.data = 1
        li.innerHTML = timer + " has been liked " + li.data + " times"
        let ul = document.getElementsByClassName('likes')[0]
        ul.appendChild(li)
    } else {
        let li = document.getElementById(timer)
        li.data += 1
        li.innerHTML = timer + " has been liked " + li.data + " times"
        // let ul = document.getElementsByClassName('likes')[0]
        // ul.appendChild(li)
    }
}

// document.getElementById("submit").onclick = function(event) {
//     //First things first, we need our text:
//     let text = document.getElementById("new-task-description").value; //.value gets input values
//     //Now construct a quick list element
//     let li = document.createElement("li");
//     let but = document.createElement("button")
//     // but.id = text
//     but.innerText = "X"
//     but.onclick = function(){
//       document.getElementById(text).remove()
//     }

//     li.innerText = text
//     li.appendChild(but)
//     li.id = text
//     //Now use appendChild and add it to the list!
//     let ul = document.getElementById("tasks")
//     // document.getElementById("tasks").appendChild(li);
//     ul.appendChild(li);
//     event.preventDefault()
//   }

//   <div>
//     <h3>Comments</h3>
//     <div id='list' class='comments'></div>

//     <h3>Leave a comment</h3>

//     <form id="comment-form" action="">
//       <input type='text' name="comment" id="comment-input" cols="30" rows="10">
//       </br>
//       <button id='submit'>submit</button>
//     </form>