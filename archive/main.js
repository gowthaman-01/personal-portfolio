import Typed from 'typed.js';
const updateList = () => {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();

window.addEventListener('scroll', () => {
    updateList();
});

const options = {
	strings: ["Websites", "Applications", "Software", "Code", "Programmes"], 
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
};

let typed = new Typed(".options", options);