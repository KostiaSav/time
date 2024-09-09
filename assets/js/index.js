document.addEventListener('DOMContentLoaded', function () {
	const switcherItems = document.querySelectorAll('.result-switcher_item');
	const resultContent = document.querySelector('.result_info__content');

	const contentMap = {
		1: `
        <h3 class="result_info__content-title">Format</h3>
        <table class="table-standard">
            <tr>
				<td>
                Time Stomp 
                <img
					src="assets/img/prompt.png"
					class="prompt hero-prompt"
					alt="prompt"
					width="12px"
					height="12px"
					id="time-stomp-prompt"
				/>
                </td>

				<td>17936785</td>
			</tr>
			<tr>
				<td>
                ISO  8601
                <img
					src="assets/img/prompt.png"
					class="prompt hero-prompt"
					alt="prompt"
					width="12px"
					height="12px"
					id="time-stomp-prompt"
				/>
                </td>
				<td>2024-12-31 T 23:59:59</td>
			</tr>
            <tr>
				<td>
                Time Stomp
                <img
					src="assets/img/prompt.png"
					class="prompt hero-prompt"
					alt="prompt"
					width="12px"
					height="12px"
					id="time-stomp-prompt"
				/>
                </td>
				<td>17936785</td>
			</tr>
			<tr>
				<td>
                ISO  8601
                <img
					src="assets/img/prompt.png"
					class="prompt hero-prompt"
					alt="prompt"
					width="12px"
					height="12px"
					id="time-stomp-prompt"
				/>
                </td>
				<td>2024-12-31 T 23:59:59</td>
			</tr>
        </table>
        `,
		2: `
        <h3 class="result_info__content-title">What day of week? 31/08/2022</h3>
        <p class="result_info__content-day-for">31/08/2022 August 31, 2022 was <strong>Monday</strong>, first day of week</p>
        `,
		3: `
        <h3 class="result_info__content-title">How long ago was 08/31/2022 10:17:23</h3>
        <h4 class="result_info__content-subtitle">Current time in Poltava: Friday, September 6, 2024, 16:01:31</h4>
        <table class="table-standard">
            <tr>
                <td>Years</td>
                <td>4</td>
            </tr>
            <tr>
                <td>Months</td>
                <td>48</td>
            </tr>
            <tr>
                <td>Week</td>
                <td>208</td>
            </tr>
            <tr>
                <td>Days</td>
                <td>1461</td>
            </tr>
            <tr>
                <td>Hours</td>
                <td>35064</td>
            </tr>
            <tr>
                <td>Minutes</td>
                <td>2103840</td>
            </tr>
            <tr>
                <td>Seconds</td>
                <td>126230400</td>
            </tr>
        </table>
        `,
		4: `
        <h3 class="result_info__content-title">How long ago was 08/31/2022 10:17:23</h3>
        <h4 class="result_info__content-subtitle">
        <img
			src="assets/img/prompt.png"
			class="prompt hero-prompt"
			alt="prompt"
			width="12px"
			height="12px"
			id="ai-about-prompt"
		/>
        This block was generated automatically on 06.09.2024 at 10:43, updated on 11.7.24 10:43:17
        </h4>

        <p class="result_info__text">Time formatting allows you to convert time data into a variety of formats that are easy to read and process. This can include displaying hours, minutes, seconds, AM/PM, as well as working with time zones and timestamps. Proper time formatting is especially important when working with an international audience, as time formats vary between countries and can cause confusion.</p>
        <p class="result_info__text">Time formatting allows you to convert time data into a variety of formats that are easy to read and process. This can include displaying hours, minutes, seconds, AM/PM, as well as working with time zones and timestamps. Proper time formatting is especially important when working with an international audience, as time formats vary between countries and can cause confusion.</p>
        `,
		5: `
        <h3 class="result_info__content-title">Pagination navigate</h3>

        <div class="date-time-picker">
        <div class="picker-item">
          <button class="arrow-btn left"><img src="assets/img/arrow_left.png" width="9px" height="18px" ></button>
          <div class="picker-value">
            <span class="number">2022</span>
            <span class="label">Year</span>
          </div>
          <button class="arrow-btn right"><img src="assets/img/arrow_right.png" width="9px" height="18px" ></button>
        </div>
      
        <div class="picker-item">
          <button class="arrow-btn left"><img src="assets/img/arrow_left.png" width="9px" height="18px" ></button>
          <div class="picker-value">
            <span class="number">08</span>
            <span class="label">Month</span>
          </div>
          <button class="arrow-btn right"><img src="assets/img/arrow_right.png" width="9px" height="18px" ></button>
        </div>
      
        <div class="picker-item">
          <button class="arrow-btn left"><img src="assets/img/arrow_left.png" width="9px" height="18px" ></button>
          <div class="picker-value">
            <span class="number">31</span>
            <span class="label">Day</span>
          </div>
          <button class="arrow-btn right"><img src="assets/img/arrow_right.png" width="9px" height="18px" ></button>
        </div>
      
        <div class="picker-item">
          <button class="arrow-btn left"><img src="assets/img/arrow_left.png" width="9px" height="18px" ></button>
          <div class="picker-value">
            <span class="number">10</span>
            <span class="label">Hour (24)</span>
          </div>
          <button class="arrow-btn right"><img src="assets/img/arrow_right.png" width="9px" height="18px" ></button>
        </div>
      
        <div class="picker-item">
          <button class="arrow-btn left"><img src="assets/img/arrow_left.png" width="9px" height="18px" ></button>
          <div class="picker-value">
            <span class="number">17</span>
            <span class="label">Minutes</span>
          </div>
          <button class="arrow-btn right"><img src="assets/img/arrow_right.png" width="9px" height="18px" ></button>
        </div>
      
        <div class="picker-item">
          <button class="arrow-btn left"><img src="assets/img/arrow_left.png" width="9px" height="18px" ></button>
          <div class="picker-value">
            <span class="number">45</span>
            <span class="label">Seconds</span>
          </div>
          <button class="arrow-btn right"><img src="assets/img/arrow_right.png" width="9px" height="18px" ></button>
        </div>
      </div>
      

        `,
	};

	function initPromptForFormatElement() {
		tippy('#time-stomp-prompt', {
			content: 'Hello world!',
		});
	}

	function initPromptForAIAbout() {
		tippy('#ai-about-prompt', {
			content: 'Hello world!',
		});
	}

	function updateContent(id) {
		switcherItems.forEach(i => i.classList.remove('active'));

		const activeItem = document.querySelector(
			`.result-switcher_item[data-id="${id}"]`
		);
		activeItem.classList.add('active');

		resultContent.innerHTML = contentMap[id];

		if (id === '1') {
			initPromptForFormatElement();
		}

		if (id === '4') {
			initPromptForAIAbout();
		}

		if (id === '5') {
			initPagination();
		}
	}

	updateContent('1');
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
});
