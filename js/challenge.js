document.addEventListener("DOMContentLoaded", function(){
const counter = document.getElementById('counter');
let myCounter = setInterval(myTimer, 1000);

function myTimer(){
  counter.innerHTML ++
}

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');

plus.addEventListener('click', function(){
  counter.innerHTML ++
})

minus.addEventListener('click', function(){
  counter.innerHTML --
})

const heart = document.getElementById('heart');
const likes = document.getElementsByClassName('likes')[0];


heart.addEventListener('click', function(){
  let li = document.createElement('li');
  let likesCount = document.createTextNode(`${counter.innerHTML} has 1 like`)
  li.appendChild(likesCount)
  likes.appendChild(li)
})

const pause = document.getElementById('pause');
const submit = document.getElementById('submit');
const commentForm = document.getElementsByTagName('input')[0]
const keepGoing = true;

//fix pause event!

// pause.addEventListener('click', function(event){
//   if (keepGoing === true){
//     keepGoing = false;
//   pause.innerHTML = 'resume';
//   like.disabled = true;
//   minus.disabled = true;
//   plus.disabled = true;
//   submit.disabled = true;
//   commentForm.disabled = true;
//   }
//   else {
//     keepGoing = true;
//   pause.innerHTML = 'pause';
//   like.disabled = false;
//   minus.disabled = false;
//   plus.disabled = false;
//   submit.disabled = false;
//   commentForm.disabled = false;
//   };
// })

const comments = document.getElementById('list')

submit.addEventListener('click', function(event){
  event.preventDefault();
  let userComment = document.createElement('p');
  let input = document.createTextNode(`${commentForm.value}`);
  userComment.appendChild(input);
  comments.appendChild(userComment);
  commentForm.value ='';
})
})