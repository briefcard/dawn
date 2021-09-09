
  
function setVariantID(x) {

console.log(x);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const variant = urlParams.get('variant') 

console.log('variant');
  
var input = document.getElementById(x);
  
input.value = variant;
  
  console.log(input.value);
//   var selectedInput = document.getElementById(input);

//   console.log()
  
//   for ( let x = 0; x < product.variants.length; x++) {
//     if ( product.variants[x].title = selectedOption) {
//     	selectedInput = product.variants[x].id;
//         console.log(product.variants[x].id);
//     }
//   }
}
