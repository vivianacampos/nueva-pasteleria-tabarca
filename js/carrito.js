// JavaScript Document
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach(addToCartButton => {
	addToCartButton.addEventListener('click', () => addToCartClicked);
})

function addToCartClicked(event){
	cont button = event.target;
	console.log(':addToCartClicked -> button', button);
}
