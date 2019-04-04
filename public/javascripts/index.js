console.log('hello world !');

window.addEventListener('DOMContentLoaded', function($event){
  var chapterList = document.querySelector('#chapter-list');
  var input = document.querySelector('#search');
  input.addEventListener('input', function($event){
    var value = $event.target.value;
    axios.get('/chapters/search?str=' + value )
         .then( function(response) {
           chapterList.innerHTML = response.data;
         })
         .catch( function(err) {
           console.log(err);
         })
  })

})