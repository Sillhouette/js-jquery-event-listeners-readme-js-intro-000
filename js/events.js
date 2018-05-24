//define functions here
function getIt() {
  $('p').on("alert", function(){
    alert('Hey!');
  })
}

$(document).ready(function(){

// call functions here
  getIt()
});
