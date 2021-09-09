
  
function setVariantID(select, product) {
	
  console.log(select);
  console.log(product);
  console.log(product.variants[0]);
  var selectedOption = document.getElementById(select).value;
  var selectedInput = document.getElementById('chosenVariant--' + product.title);	
  console.log(selectedOption);

  
  for ( let x = 0; x < product.variants.length; x++) {
    if ( product.variants[x].title = selectedOption) {
    	selectedInput = product.variants[x].id;
        console.log(product.variants[x].id);
    }
  }
}
