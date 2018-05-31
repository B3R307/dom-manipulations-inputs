document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1
   var pushEl = document.querySelector('button') //selecciono el elemento
    var pushElDom = pushEl.value

   var userInputDomEl = document.querySelector('input') //selecciono el elemento
   // console.log(userInputDomEl);
   var inputEl = userInputDomEl.value  //userInputDomEl recibira la informacion , agregamos la propiedad .value para devolver el valor del atributo que en este caso es lo que escribe el usuario, esto se guarda en una nueva variable
   // console.log(inputEl);
   inputEl.innerHTML = pushElDom

   userInputDomEl.value = ''

})

document.querySelector("#validate-field button").addEventListener('click',function changeMessager(someEvt){
  // TASK #2
var pushButt = document.querySelector('button')
var pussButtEl =pushButt.value
// console.log(pushButt);
var inputBoxText = document.querySelector('input')
var boxTextEl = someEvt.target
// console.log(someEvt.target);
var inputVal = boxTextEl.value
// console.log(inputVal);
var validFlash = document.querySelector('.flash-message')
// console.log(validFlash);
var messValidFlash = validFlash.value

console.log(inputVal.length);
inputBoxText.innerHTML = inputVal.length

// if(inputVal.length < 6){
//   messValidFlash.className.add('p.flash-message.invalid')
// }
// if(boxTextEl.length > 6){
//   messValidFlash.className.remove('p.flash-message.invalid')
//   messValidFlash.className.add('p.flash-message.valid')
// }


})


document.querySelector("#calculate-items button").addEventListener('click',function(){
  // TASK #3

})


document.querySelector("#select-to-show-more button").addEventListener('click',function(){
  // TASK #4

})
