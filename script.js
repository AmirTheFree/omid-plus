// In the name of Allah

function nav(){
	var navbar = document.getElementById('nav');
	(navbar.className === 'main-menu')? navbar.setAttribute('class','main-menu responsive') : navbar.setAttribute('class','main-menu');
}