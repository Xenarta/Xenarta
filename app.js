window.addEventListener('click', checkClick);
window.addEventListener('click', closeInfo);
// window.addEventListener('click', checkArtistBio);

function checkClick() {
	let evTarget = event.target;
	let overlay = document.getElementById('overlay');
	let mobileMenu = document.getElementById('mobile-menu');
	
	if(evTarget == overlay) {
		showMobilieMenu();
	}
}

function checkArtistBio() {
	let evTarget = event.target;
	let info = document.getElementsByClassName("artist-info-content");
	
	for(let a=0; a <= info.length; a++) {
		if(!info[a].classList.contains("hide")) {
			info[a].classList.add('hide');
		}
	}
	
}

function showEvTarget() {
	let evTarget = event.target;
	console.log(evTarget);
	console.log(evTarget.parentNode);
}

function createMap() {
	let btn = document.getElementById("location-btn");
	let locContainter = document.getElementById("location-container");
	let newMap = document.createElement('iframe');
	
	newMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d675.0309585282495!2d25.616537291693966!3d42.43825317528771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a869c75fcba4f1%3A0x3ca8029b00b3f157!2z0JHQsNC00LzQuNC90YLQvtC9INC_0LvQvtGJ0LDQtNC60LA!5e0!3m2!1sbg!2sbg!4v1692020149511!5m2!1sbg!2sbg';
	newMap.loading = 'lazy';
	newMap.referrerpolicy = 'no-referrer-when-downgrade';
	newMap.allowfullscreen = "";
	
	
	btn.classList.add('hide');
	
	locContainter.appendChild(newMap);
	
	// <iframe src="" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		
}


function closeInfo() {
	let evTarget = event.target;
	
	if(evTarget.classList.contains('artist-info-content') && evTarget.style.width == '100%') {
		evTarget.style.width = '0';
		evTarget.style.height = '0';
		evTarget.style.visibility = 'hidden';
		evTarget.classList.remove('glass-white');
		
		// evTarget.classList.add('hide');
		
	} else if(evTarget.parentNode.classList.contains('artist-info-content') && evTarget.parentNode.style.width == '100%'){
		evTarget.parentNode.style.width = '0';
		evTarget.parentNode.style.height = '0';
		evTarget.parentNode.style.visibility = 'hidden';
		evTarget.parentNode.classList.remove('glass-white');
		
		// evTarget.parentNode.classList.add('hide');
		
	}
	
	
}

function showArtistInfo() {
	let evTarget = event.target;
	
	
	
	console.log(evTarget)
	console.log(evTarget.classList)
		
	if(evTarget.classList.contains("gif-img")) {
		evTarget.nextSibling.nextSibling.nextSibling.nextSibling.style.width = '100%';
		evTarget.nextSibling.nextSibling.nextSibling.nextSibling.style.height = '100%';
		evTarget.nextSibling.nextSibling.nextSibling.nextSibling.style.visibility = 'visible';
		evTarget.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('glass-white');
		
		// evTarget.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove('hide');
	}
	
	if(evTarget.classList.contains("artist-img")) {
		evTarget.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.width = '100%';
		evTarget.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.height = '100%';
		evTarget.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.visibility = 'visible';
		evTarget.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('glass-white');
		
		// evTarget.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove('hide');
	}
	
	if(evTarget.classList.contains("artist-info")) {
		
		evTarget.nextSibling.nextSibling.style.width = '100%';
		evTarget.nextSibling.nextSibling.style.height = '100%';
		evTarget.nextSibling.nextSibling.style.visibility = 'visible';
		evTarget.nextSibling.nextSibling.classList.add('glass-white');
		
		// evTarget.nextSibling.nextSibling.classList.remove('hide');
	}
	
	if(evTarget.classList.contains("artist-card")) {
		
		evTarget.childNodes[7].style.width = '100%';
		evTarget.childNodes[7].style.height = '100%';
		evTarget.childNodes[7].style.visibility = 'visible';
		evTarget.childNodes[7].classList.add('glass-white');
		
		// evTarget.childNodes[5].classList.remove('hide');
	}
}


function changeColor(change) {
	
	let items = document.getElementsByClassName('nav-item');
	let itemsMobile = document.getElementsByClassName('nav-item-mobile');
	
	for(let a=0; a<items.length; a++) {
		console.log(items[a].style.border);
		if(items[a].style.color == 'rgb(246, 174, 45)') {
			items[a].style.color = 'rgba(255,255,255)';
		}
	}
	change.style.color = "rgb(246, 174, 45)";
	// change.style.border = 'solid 1px white';
	// change.style.boxShadow = '1px 1px 1px 1px rgba(255, 255, 255, 0.75)';
}

function showMobilieMenu() {
	
	var lines = document.getElementsByClassName("lines");
	var linesClosed = document.getElementsByClassName("lines-closed");
	let overlay = document.getElementById('overlay');
	let mobileMenu = document.getElementById('mobile-menu');
	
	
	if(overlay.classList.contains('hide')) {
		overlay.classList.remove('hide');
		mobileMenu.style.width = '250px';
		mobileMenu.style.opacity = '1';
		mobileMenu.style.zIndex = '10';
		
		for(let a=0; a<lines.length; a++) {
			lines[a].classList.add("hide");
		}
		
		for(let a=0; a<linesClosed.length; a++) {
			linesClosed[a].classList.remove("hide");
			linesClosed[a].classList.add("show");
		}
		
	} else {
		overlay.classList.add('hide');
		mobileMenu.style.width = '';
		mobileMenu.style.opacity = '';
		mobileMenu.style.zIndex = '';
		
		for(let a=0; a<lines.length; a++) {
			lines[a].classList.remove("hide");
		}
		
		for(let a=0; a<linesClosed.length; a++) {
			linesClosed[a].classList.add("hide");
			linesClosed[a].classList.remove("show");
		}
	}
}

function changeColorMobile(change) {
	
	let items = document.getElementsByClassName('nav-item');
	let itemsMobile = document.getElementsByClassName('nav-item-mobile');
	
	
	
	for(let a=0; a<items.length; a++) {
		if(items[a].style.color == 'rgb(255, 255, 255)') {
			items[a].style.color = '';
			items[a].style.textShadow = '';
		}
	}
	
	for(let a=0; a<itemsMobile.length; a++) {
		if(itemsMobile[a].style.color == 'rgb(255, 255, 255)') {
			itemsMobile[a].style.color = '';
		}
	}
	
	change.style.color = 'rgb(255, 255, 255)';
	change.style.textShadow = '-1px -1px 0 #000,0 -1px 0 #000,1px -1px 0 #000,1px 0 0 #000,1px 1px 0 #000,0 1px 0 #000,-1px 1px 0 #000,-1px 0 0 #000,0 1.5px 0 #00000090';
}
