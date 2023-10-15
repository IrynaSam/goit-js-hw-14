const list = document.getElementById("categories");
const listChildren = list.children;
console.log("Number of categories:", listChildren.length);
[...listChildren].forEach((item) => {
	console.log("Category:", item.firstElementChild.innerHTML);
	console.log("Elements:", item.lastElementChild.children.length);
});
