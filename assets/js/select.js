var selected = document.querySelector('.select-selected');
var items = document.querySelector('.select-items');
var options = items.querySelectorAll('div');

selected.addEventListener('click', function () {
	items.classList.toggle('select-hide');
	selected.classList.toggle('select-arrow-active');
});

options.forEach(function (option) {
	option.addEventListener('click', function () {
		selected.innerHTML = this.innerHTML;
		items.classList.add('select-hide');
		selected.classList.remove('select-arrow-active');
	});
});

document.addEventListener('DOMContentLoaded', function () {
	var input = document.querySelector('.hero-input');
	var items = document.querySelector('.hero-items');
	var options = items.querySelectorAll('.hero-input-item');
	console.log(options);

	input.addEventListener('click', function () {
		items.classList.remove('hero-hide');
	});

	document.addEventListener('click', function (event) {
		if (!event.target.closest('.hero-input__wrapper')) {
			items.classList.add('hero-hide');
		}
	});

	options.forEach(function (option) {
		option.addEventListener('click', function () {
			input.value = this.innerText;
		});
	});

	input.addEventListener('input', function () {
		var filter = input.value.toLowerCase();
		options.forEach(function (option) {
			if (option.innerHTML.toLowerCase().indexOf(filter) > -1) {
				option.style.display = '';
			} else {
				option.style.display = 'none';
			}
		});
	});
});
