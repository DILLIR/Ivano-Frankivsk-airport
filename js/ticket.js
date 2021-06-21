/*TICKET*/


let minus1 = document.getElementsByClassName("mark")[0];
let minus2 = document.getElementsByClassName("mark")[2];
let plus1 = document.getElementsByClassName("mark")[1];
let plus2 = document.getElementsByClassName("mark")[3];

let quantity1 = document.getElementsByClassName("central-option")[0];
let quantity2 = document.getElementsByClassName("central-option")[1];

let new_quantity1 = Number(quantity1.value);
let new_quantity2 = Number(quantity2.value);

minus1.addEventListener("click", quantityRemove1);
minus2.addEventListener("click", quantityRemove2);
plus1.addEventListener("click", quantityAdd1);
plus2.addEventListener("click", quantityAdd2);

function quantityRemove1 () {
	new_quantity1 = new_quantity1 - 1;
	if (new_quantity1 < 1) {
		quantity1.value = 1;
	} else {
		quantity1.value = new_quantity1;
	}
}

function quantityAdd1 () {
	new_quantity1 = new_quantity1 + 1;
	if (new_quantity1 > 50) {
		quantity1.value = 50;
	} else {
		quantity1.value = new_quantity1;
	}
}


function quantityRemove2 () {
	new_quantity2 = new_quantity2 - 1;
	if (new_quantity2 < 0) {
		quantity2.value = 0;
	} else {
		quantity2.value = new_quantity2;
	}
}

function quantityAdd2 () {
	new_quantity2 = new_quantity2 + 1;
	if (new_quantity2 > 50) {
		quantity2.value = 50;
	} else {
		quantity2.value = new_quantity2;
	}
}