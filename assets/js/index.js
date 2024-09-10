document.addEventListener('DOMContentLoaded', function () {
	const switcherItems = document.querySelectorAll('.result-switcher_item');

	function updateContent(id) {
		switcherItems.forEach(i => i.classList.remove('active'));

		const activeItem = document.querySelector(
			`.result-switcher_item[data-id="${id}"]`
		);
		activeItem.classList.add('active');
	}

	switcherItems.forEach(item => {
		item.addEventListener('click', function () {
			const id = this.getAttribute('data-id');
			updateContent(id);
		});
	});

	function initPagination() {
		const pickerItems = document.querySelectorAll('.picker-item');

		pickerItems.forEach(item => {
			const numberElement = item.querySelector('.number');
			const label = item.querySelector('.label').textContent;
			let value = parseInt(numberElement.textContent);

			const leftArrow = item.querySelector('.arrow-btn.left');
			const rightArrow = item.querySelector('.arrow-btn.right');

			leftArrow.addEventListener('click', function () {
				value = decrementValue(label, value);
				numberElement.textContent = formatValue(label, value);
			});

			rightArrow.addEventListener('click', function () {
				value = incrementValue(label, value);
				numberElement.textContent = formatValue(label, value);
			});
		});
	}

	function incrementValue(label, value) {
		switch (label) {
			case 'Year':
				return value + 1;
			case 'Month':
				return value < 12 ? value + 1 : 1;
			case 'Day':
				return value < 31 ? value + 1 : 1;
			case 'Hour (24)':
				return value < 23 ? value + 1 : 0;
			case 'Minutes':
			case 'Seconds':
				return value < 59 ? value + 1 : 0;
			default:
				return value;
		}
	}

	function decrementValue(label, value) {
		switch (label) {
			case 'Year':
				return value - 1;
			case 'Month':
				return value > 1 ? value - 1 : 12;
			case 'Day':
				return value > 1 ? value - 1 : 31;
			case 'Hour (24)':
				return value > 0 ? value - 1 : 23;
			case 'Minutes':
			case 'Seconds':
				return value > 0 ? value - 1 : 59;
			default:
				return value;
		}
	}

	function formatValue(label, value) {
		// Для дней, месяцев и прочего добавляем ведущий ноль при необходимости
		if (['Month', 'Day', 'Hour (24)', 'Minutes', 'Seconds'].includes(label)) {
			return value.toString().padStart(2, '0');
		}
		return value;
	}

	initPagination();
});
