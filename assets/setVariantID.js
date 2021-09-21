

function setVariantID (variantID, inputID, selectedVariant, variantSize, count) {

  console.log(inputID, variantID, selectedVariant, variantSize, count)
  
var x = 0;
var Count = document.getElementById('counter');
var newCount = parseInt(Count);
var input = document.getElementById(inputID);

var priceDiv = document.getElementById('price--' + count);
 
//var lastInput = document.getElementById();

console.log(variantID);

  if ( variantID == undefined) {
	 input.value = selectedVariant;
     Count.value = count;

    console.log('undefined parameter New Count: ' + newCount.value);

  } else if( variantSize < 2 )  {
  	 input.value = selectedVariant;
     Count.value = count;
    console.log('Single Variant Product New Count: ' + newCount.value);

    
  } else if ( count !== newCount && x == 1) {
    
    console.log(selectedVariant);
    input.value = selectedVariant;
  	Count.value = count;

    console.log('testing count');
    
    
  } else {
    
  input.value = variantID;
  Count.value = count;
  
    console.log('new flavor');
  }
  
//   console.log('this is x: '+ x);
//   var selectedInput = document.getElementById(input);

//   console.log()
  
//   for ( let x = 0; x < product.variants.length; x++) {
//     if ( product.variants[x].title = selectedOption) {
//     	selectedInput = product.variants[x].id;
//         console.log(product.variants[x].id);
//     }
//   }
  
}


function setVariantImage (imgInput, thisVariant){
  
  var imageInput = document.getElementById(imgInput);
console.log(thisVariant);
  console.log(imageInput.src);

  
  imageInput.srcset = 'https://cdn.shopify.com/s/files/1/0594/0897/4011/' + thisVariant;
  imageInput.src = 'https://cdn.shopify.com/s/files/1/0594/0897/4011/' + thisVariant;
 
  
}





// function setVariantID(inputField,selectedVariant,variantSize,count) {



// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const variant = urlParams.get('variant'); 

// // console.log('this is the url param: ' + variant);
// // console.log('this is the liquid variant selected:' + selectedVariant);
// // console.log('this is the array size of this variant: ' + variantSize);
// // console.log('this is the counter: ' + count);

//   var x = 0;
// var Count = document.getElementById('counter');
// var newCount = parseInt(Count)
// var input = document.getElementById(inputField);
// //var lastInput = document.getElementById();

// console.log(typeof count);
  
// console.log(typeof newCount.value);
  
// console.log('newCount Vs. Count = ' + newCount.value + '...expected this:' + count);

//   if ( variant == undefined) {
// 	 input.value = selectedVariant;
//      Count.value = count;

//     console.log('undefined parameter New Count: ' + newCount.value);

//   } else if( variantSize < 2 )  {
//   	 input.value = selectedVariant;
//      Count.value = count;
//     console.log('Single Variant Product New Count: ' + newCount.value);

    
//   } else if ( count !== newCount && x == 1) {
    
//     console.log(selectedVariant);
//     input.value = selectedVariant;
//   	Count.value = count;

//     console.log('testing count');
    
    
//   } else {
//   input.value = variant;
//   Count.value = count;

//     console.log('new flavor');
//   }
  
// //   console.log('this is x: '+ x);
// //   var selectedInput = document.getElementById(input);

// //   console.log()
  
// //   for ( let x = 0; x < product.variants.length; x++) {
// //     if ( product.variants[x].title = selectedOption) {
// //     	selectedInput = product.variants[x].id;
// //         console.log(product.variants[x].id);
// //     }
// //   }
  
// }
