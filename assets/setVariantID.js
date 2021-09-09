


function setVariantID(inputField,selectedVariant,variantSize,count) {

console.log(x);


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const variant = urlParams.get('variant') 


console.log(variant);
console.log(y);
console.log(z)

var newCount = document.getElementById('counter');

var input = document.getElementById(inputField);

  if ( variant == undefined) {
	 input.value = selectedVariant;
     newCount.value = count;
  } else if( variantSize < 2 )  {
  	 input.value = selectedVariant;
     newCount.value = count;
  } else if (count !== newCount ) {
    input.value = selectedVariant;
  	newCount.value = count;
  } else {
  input.value = variant;
  newCount = count;
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
