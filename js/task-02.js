const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];
const list = document.getElementById("ingredients");
const ulItems = ingredients.map((item) => {
	const liItem = document.createElement("li");
	liItem.innerText = item;
	liItem.classList.add("item");
	return liItem;
});
list.append(...ulItems);
