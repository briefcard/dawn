
  
function setVariantID() {
	
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const variant = urlParams.get('variants') 
  
console.log(variant);
  
//   var selectedInput = document.getElementById(input);

//   console.log()
  
//   for ( let x = 0; x < product.variants.length; x++) {
//     if ( product.variants[x].title = selectedOption) {
//     	selectedInput = product.variants[x].id;
//         console.log(product.variants[x].id);
//     }
//   }
}
