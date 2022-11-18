// Burger menu

const iconMenu = document.querySelector('.menu__icon');

if (iconMenu) {
	const bodyMenu = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle("_active");
		bodyMenu.classList.toggle("_active");
		document.body.classList.toggle("_lock");
	});
}

// Вырезать элемент и вставить в другое место

const parent = document.querySelector('.bottom-header__left');
const child = document.querySelector('.bottom-header__list');
const newParent = document.querySelector('.menu__body');
const beforeChild = document.querySelector('.menu__phone');

function replaceElement() {
	if (document.documentElement.clientWidth < 1024) {
		if (parent.contains(child)) {
			const oldChild = parent.removeChild(child);
			
			newParent.insertBefore(oldChild, beforeChild);
		}
	} else if (document.documentElement.clientWidth > 1024) {
		if (newParent.contains(child)) {
			const oldChild = newParent.removeChild(child);
			
			parent.appendChild(oldChild);
		}
	}
}

window.addEventListener(`resize`, event => {
	replaceElement();
}, false);

replaceElement();

// Text slider

const buttonLeft = document.querySelector('.slider__button-left');
const buttonRight = document.querySelector('.slider__button-right');
const textBlock1 = document.querySelector('.slider__text-block-1');
const textBlock2 = document.querySelector('.slider__text-block-2');
const textBlock3 = document.querySelector('.slider__text-block-3');

let count = 1;

function textBlockToggle() {
	if (count === 1) {
		textBlock1.classList.add("_text-active");
		textBlock2.classList.remove("_text-active");
		textBlock3.classList.remove("_text-active");
	} else if (count === 2) {
		textBlock2.classList.add("_text-active");
		textBlock1.classList.remove("_text-active");
		textBlock3.classList.remove("_text-active");
	} else if (count === 3) {
		textBlock3.classList.add("_text-active");
		textBlock1.classList.remove("_text-active");
		textBlock2.classList.remove("_text-active");
	}
}

buttonRight.addEventListener("click", () => {
	if (count < 3) {
		count++;
	} else {
		count = 1;
	}
	textBlockToggle();
});

buttonLeft.addEventListener("click", () => {
	if (count > 1) {
		count--;
	} else {
		count = 3;
	}
	textBlockToggle();
});