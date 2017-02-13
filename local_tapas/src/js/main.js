let getData;
let data = getData || [
	{
		"checked" : true,
		"title"   : 'Pizza Fra Diavolo'
	},
	{
		"checked" : false,
		"title"   : 'Pizza Toscana'
	},
	{
		"checked" : false,
		"title"   : 'Pizza Al Pesto'
	},
	{
		"checked" : true,
		"title"   : 'Turkish Pizza'
	},
	{
		"checked" : false,
		"title"   : 'Apple & Gorgonzola'
	},
];

const menuContainer = document.querySelector('.menu');
const form = document.querySelector('.add-item');


// feel in menu container;
for (var i = 0, count = data.length; i < count; i++) {

	let menuItem = menuElement(data[i]);
	if (menuItem) {
		menuContainer.appendChild(menuItem);
	}

};

function menuElement(item) {
	if ( !item.title ) return;

	let menuItem = document.createElement('li')
	menuItem.className = 'menuItem menu-item';

	if (item.checked) {
		menuItem.classList.add('checked');
	};
	menuItem.innerHTML = `<span>${item.title}</span>`;

	return menuItem;
};

function addItem(e){
	e.preventDefault();
	const title = this.elements['title'].value;
	if (title.length < 2) return;
	item = {
		"checked" : false,
		"title" : title
	};

	let menuItem = menuElement(item);
	if (menuItem) {
		menuContainer.appendChild(menuItem);
		this.reset();
	}
	data.push(item);
};


// events
form.addEventListener('submit', addItem);
