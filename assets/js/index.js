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
});
