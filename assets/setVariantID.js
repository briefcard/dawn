
  
function setVariantID(x,y,z) {

console.log(x);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const variant = urlParams.get('variant') 

console.log(variant);
  console.log(y);
console.log(z)

var input = document.getElementById(x);

  if ( variant == undefined) {
	 input.value = y;
  } else if( z < 2 )  {
  	 input.value = y;
  }
  else {
  input.value = variant;
  }
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
