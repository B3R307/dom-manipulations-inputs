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

document.querySelector("#validate-field button").addEventListener('click',function(){
  // TASK #2
  var pushButt = document.querySelector('#validate-field button')

  var inputBoxText = document.querySelector('#validate-field input')
  var inputBoxEl = inputBoxText.value
  var inputEl = inputBoxEl.length
  // console.log(inputEl);
  var flashOutputEl = document.querySelector('#validate-field .flash-message')
// console.log(validFlash);
// inputBoxText.innerHTML = inputEl.length

    if(inputEl < 6){
      flashOutputEl.classList.remove('valid');
      flashOutputEl.classList.add('invalid');
      flashOutputEl.textContent = "Input not long enough"
    } else {
       flashOutputEl.classList.remove('invalid');
       flashOutputEl.classList.add('valid');
       flashOutputEl.textContent = "Field valid"
    }
})


document.querySelector("#calculate-items button").addEventListener('click',function(){
  // TASK #3

    var elements = [...document.querySelectorAll('#calculate-items input')]
    // console.log(elements);

    var totalCount = document.querySelector('.sum-total')
    // console.log(totalCount);

    var total = 0

    for(var i = 0; i < elements.length; i++){
      var currentElement = elements[i]
      // console.log(currentElement);
      // console.log(currentElement.checked);
      //
      if(currentElement.checked === true){
      total = total + parseInt(currentElement.value)

      }
    }
    // console.log(total);
    totalCount.innerHTML = total
})


document.querySelector("#select-to-show-more select").addEventListener('change',function(evt){
  // TASK #4

    var carsElementDom = document.querySelector('.selection')
      // console.log(carsElementDom.value)
      var index = carsElementDom.selectedIndex

     var imgInfo = document.querySelector('.img-box')
     var modelInfo = document.querySelector('.model');
     var msrpInfo = document.querySelector('.msrp');
     var mpgInfo = document.querySelector('.mpg');
     var edmunds = document.querySelector('.edmunds')

     var selectedIndex = evt.target.options.selectedIndex
     var indexEl = evt.target.options[selectedIndex]


      imgInfo.innerHTML  = `<img src="./images/${indexEl.dataset.img}">`
      modelInfo.innerHTML = carsElementDom.value
      msrpInfo.innerHTML =  indexEl.dataset.msrp
      mpgInfo.innerHTML = indexEl.dataset.mpg
      edmunds.innerHTML =   indexEl.dataset.edmunds


      // console.log(evt.target.value)
//         console.log(evt.target.options)


})
