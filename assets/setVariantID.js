


function setVariantID(inputField,selectedVariant,variantSize,count) {




const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const variant = urlParams.get('variant') 

// console.log('this is the url param: ' + variant);
//   console.log('this is the liquid variant selected:' + selectedVariant);
//   console.log('this is the array size of this variant: ' + variantSize);
//  console.log('this is the counter: ' + count);

var  x;
var newCount = document.getElementById('counter');
var input = document.getElementById(inputField);

  
console.log('newCount Vs. Count = ' + newCount.value + '...expected this:' + count);

  if ( variant == undefined) {
	 input.value = selectedVariant;
     newCount.value = count;
     x = 1;
    console.log('undefined parameter New Count: ' + newCount.value);

  } else if( variantSize < 2 )  {
  	 input.value = selectedVariant;
     newCount.value = count;
    console.log('Single Variant Product New Count: ' + newCount.value);
     x = 1;
    
  } else if (newCount.value !== count && x == 1 ) {
    console.log(selectedVariant);
    input.value = selectedVariant;
  	newCount.value = count;
    x = 1;
    console.log('testing count');
    
    
  } else {
  input.value = variant;
  newCount.value = count;
     x = 1;
    console.log('new flavor');
  }
  

//   var selectedInput = document.getElementById(input);

//   console.log()
  
//   for ( let x = 0; x < product.variants.length; x++) {
//     if ( product.variants[x].title = selectedOption) {
//     	selectedInput = product.variants[x].id;
//         console.log(product.variants[x].id);
//     }
//   }
}
