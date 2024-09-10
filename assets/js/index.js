document.addEventListener('DOMContentLoaded', function () {
	function isMobile() {
		return window.innerWidth <= 768;
	}

	if (isMobile) {
		const content = `
        
        <section class="result_info">
						<div class="result_info__switcher">
							<a href="#format">
								<div class="result-switcher_item active" data-id="1">
									<h4>Format</h4>
								</div>
							</a>

							<a href="#dayOfWeek">
								<div class="result-switcher_item" data-id="2">
									<h4>Day of week</h4>
								</div>
							</a>

							<a href="#howLong">
								<div class="result-switcher_item" data-id="3">
									<h4>How long ago was</h4>
								</div>
							</a>

							<a href="#aiAbout">
								<div class="result-switcher_item" data-id="4">
									<h4>AI about</h4>
								</div>
							</a>

							<a href="#pagination">
								<div class="result-switcher_item" data-id="5">
									<h4>Pagination</h4>
								</div>
							</a>
						</div>

                        <div class="result_info__content_wrapper">

                            <div class="result_info__content">
                                <h3 class="result_info__content-title" id="format">Format</h3>
                                <table class="table-standard">
                                    <tr>
                                        <td>
                                            Time Stomp
                                            <img
                                                src="assets/img/prompt.svg"
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
                                            ISO 8601
                                            <img
                                                src="assets/img/prompt.svg"
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
                                                src="assets/img/prompt.svg"
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
                                            ISO 8601
                                            <img
                                                src="assets/img/prompt.svg"
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
                            </div>

    <div class="result_info__content">
        <div class="block_result">
            <h3 class="result_info__content-title" id="dayOfWeek">
                What day of week? 31/08/2022
            </h3>
            <p class="result_info__content-day-for">
                31/08/2022 August 31, 2022 was <strong>Monday</strong>, first
                day of week
            </p>
        </div>
    </div>

    <div class="result_info__content">
        <div class="block_result">
            <h3 class="result_info__content-title" id="howLong">
                How long ago was 08/31/2022 10:17:23
            </h3>
            <h4 class="result_info__content-subtitle">
                Current time in Poltava: Friday, September 6, 2024, 16:01:31
            </h4>
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
        </div>
    </div>
    
    <div class="result_info__content">
        <div class="block_result">
            <h3 class="result_info__content-title" id="aiAbout">
                How long ago was 08/31/2022 10:17:23
            </h3>
            <h4 class="result_info__content-subtitle">
                <img
                    src="assets/img/prompt.svg"
                    class="prompt hero-prompt"
                    alt="prompt"
                    width="12px"
                    height="12px"
                    id="ai-about-prompt"
                />
                This block was generated automatically on 06.09.2024 at 10:43,
                updated on 11.7.24 10:43:17
            </h4>
    
            <p class="result_info__text">
                Time formatting allows you to convert time data into a variety
                of formats that are easy to read and process. This can include
                displaying hours, minutes, seconds, AM/PM, as well as working
                with time zones and timestamps. Proper time formatting is
                especially important when working with an international
                audience, as time formats vary between countries and can cause
                confusion.
            </p>
            <p class="result_info__text">
                Time formatting allows you to convert time data into a variety
                of formats that are easy to read and process. This can include
                displaying hours, minutes, seconds, AM/PM, as well as working
                with time zones and timestamps. Proper time formatting is
                especially important when working with an international
                audience, as time formats vary between countries and can cause
                confusion.
            </p>
        </div>
    </div>
    
    <div class="result_info__content">
        <div class="block_result">
            <h3 class="result_info__content-title" id="pagination">
                Pagination navigate
            </h3>
    
            <div class="date-time-picker">
                <div class="picker-item">
                    <a href="#" class="arrow-btn left">
                        <img
                            src="assets/img/arrow_left.svg"
                            width="9px"
                            height="18px"
                        />
                    </a>
                    <div class="picker-value">
                        <span class="number">2022</span>
                        <span class="label">Year</span>
                    </div>
                    <a href="#" class="arrow-btn right">
                        <img
                            src="assets/img/arrow_right.svg"
                            width="9px"
                            height="18px"
                        />
                    </a>
                </div>
    
                <div class="picker-item">
                    <a href="#" class="arrow-btn left">
                        <img
                            src="assets/img/arrow_left.svg"
                            width="9px"
                            height="18px"
                        />
                    </a>
                    <div class="picker-value">
                        <span class="number">08</span>
                        <span class="label">Month</span>
                    </div>
                    <a href="#" class="arrow-btn right">
                        <img
                            src="assets/img/arrow_right.svg"
                            width="9px"
                            height="18px"
                        />
                    </a>
                </div>
    
                <div class="picker-item">
                    <a href="#" class="arrow-btn left">
                        <img
                            src="assets/img/arrow_left.svg"
                            width="9px"
                            height="18px"
                        />
                    </a>
                    <div class="picker-value">
                        <span class="number">31</span>
                        <span class="label">Day</span>
                    </div>
                    <a href="#" class="arrow-btn right">
                        <img
                            src="assets/img/arrow_right.svg"
                            width="9px"
                            height="18px"
                        />
                    </a>
                </div>
    
                <div class="picker-item">
                    <a href="#" class="arrow-btn left">
                        <img
                            src="assets/img/arrow_left.svg"
                            width="9px"
                            height="18px"
                        />
                    </a>
                    <div class="picker-value">
                        <span class="number">10</span>
                        <span class="label">Hour (24)</span>
                    </div>
                    <a href="#" class="arrow-btn right">
                        <img
                            src="assets/img/arrow_right.svg"
                            width="9px"
                            height="18px"
                        />
                    </a>
                </div>
    
                <div class="picker-item">
                    <a href="#" class="arrow-btn left">
                        <img
                            src="assets/img/arrow_left.svg"
                            width="9px"
                            height="18px"
                        />
                    </a>
                    <div class="picker-value">
                        <span class="number">17</span>
                        <span class="label">Minutes</span>
                    </div>
                    <a href="#" class="arrow-btn right">
                        <img
                            src="assets/img/arrow_right.svg"
                            width="9px"
                            height="18px"
                        />
                    </a>
                </div>
    
                <div class="picker-item">
                    <a href="#" class="arrow-btn left">
                        <img
                            src="assets/img/arrow_left.svg"
                            width="9px"
                            height="18px"
                        />
                    </a>
                    <div class="picker-value">
                        <span class="number">45</span>
                        <span class="label">Seconds</span>
                    </div>
                    <a href="#" class="arrow-btn right">
                        <img
                            src="assets/img/arrow_right.svg"
                            width="9px"
                            height="18px"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
    
                            </div>
                        </div>
					</section>
        
        `;

		const el = document.querySelector('.result');
		el.querySelector('.container-full').innerHTML += content;
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
	} else {
		content = `
        <div class="result_info__switcher result_info__switcher_faq">
            <div class="result-switcher_item result-switcher_item_faq active" data-id="1">
                <div class="result-switcher_title">
                    <h4>Format</h4>
                </div>
                <div class="faq-content">
                <div class="result_info__content">
                <h3 class="result_info__content-title" id="format">Format</h3>
                <table class="table-standard">
                    <tr>
                        <td>
                            Time Stomp
                            <img
                                src="assets/img/prompt.svg"
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
                            ISO 8601
                            <img
                                src="assets/img/prompt.svg"
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
                                src="assets/img/prompt.svg"
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
                            ISO 8601
                            <img
                                src="assets/img/prompt.svg"
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
            </div>
                </div>
            </div>

            <div class="result-switcher_item result-switcher_item_faq" data-id="2">
                <div class="result-switcher_title">
                    <h4>Day of week</h4>
                </div>
                <div class="faq-content result-switcher_item_faq">
                <div class="result_info__content">
                    <div class="block_result">
                        <h3 class="result_info__content-title" id="dayOfWeek">
                            What day of week? 31/08/2022
                        </h3>
                        <p class="result_info__content-day-for">
                            31/08/2022 August 31, 2022 was <strong>Monday</strong>, first
                            day of week
                        </p>
                    </div>
                </div>
                </div>
            </div>

            <div class="result-switcher_item result-switcher_item_faq" data-id="3">
                <div class="result-switcher_title">
                    <h4>How long ago was</h4>
                </div>
                <div class="faq-content">
                <div class="result_info__content">
                <div class="block_result">
                    <h3 class="result_info__content-title" id="howLong">
                        How long ago was 08/31/2022 10:17:23
                    </h3>
                    <h4 class="result_info__content-subtitle">
                        Current time in Poltava: Friday, September 6, 2024, 16:01:31
                    </h4>
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
                </div>
            </div>
                </div>
            </div>

            <div class="result-switcher_item result-switcher_item_faq" data-id="4">
                <div class="result-switcher_title">
                    <h4>AI about</h4>
                </div>
                <div class="faq-content">
                <div class="result_info__content">
                <div class="block_result">
                    <h3 class="result_info__content-title" id="aiAbout">
                        How long ago was 08/31/2022 10:17:23
                    </h3>
                    <h4 class="result_info__content-subtitle">
                        <img
                            src="assets/img/prompt.svg"
                            class="prompt hero-prompt"
                            alt="prompt"
                            width="12px"
                            height="12px"
                            id="ai-about-prompt"
                        />
                        This block was generated automatically on 06.09.2024 at 10:43,
                        updated on 11.7.24 10:43:17
                    </h4>
            
                    <p class="result_info__text">
                        Time formatting allows you to convert time data into a variety
                        of formats that are easy to read and process. This can include
                        displaying hours, minutes, seconds, AM/PM, as well as working
                        with time zones and timestamps. Proper time formatting is
                        especially important when working with an international
                        audience, as time formats vary between countries and can cause
                        confusion.
                    </p>
                    <p class="result_info__text">
                        Time formatting allows you to convert time data into a variety
                        of formats that are easy to read and process. This can include
                        displaying hours, minutes, seconds, AM/PM, as well as working
                        with time zones and timestamps. Proper time formatting is
                        especially important when working with an international
                        audience, as time formats vary between countries and can cause
                        confusion.
                    </p>
                </div>
            </div>
                </div>
            </div>

            <div class="result-switcher_item result-switcher_item_faq" data-id="5">
                <div class="result-switcher_title">
                    <h4>Pagination</h4>
                </div>
                <div class="faq-content">
                <div class="result_info__content">
                <div class="block_result">
                    <h3 class="result_info__content-title" id="pagination">
                        Pagination navigate
                    </h3>
            
                    <div class="date-time-picker">
                        <div class="picker-item">
                            <a href="#" class="arrow-btn left">
                                <img
                                    src="assets/img/arrow_left.svg"
                                    width="9px"
                                    height="18px"
                                />
                            </a>
                            <div class="picker-value">
                                <span class="number">2022</span>
                                <span class="label">Year</span>
                            </div>
                            <a href="#" class="arrow-btn right">
                                <img
                                    src="assets/img/arrow_right.svg"
                                    width="9px"
                                    height="18px"
                                />
                            </a>
                        </div>
            
                        <div class="picker-item">
                            <a href="#" class="arrow-btn left">
                                <img
                                    src="assets/img/arrow_left.svg"
                                    width="9px"
                                    height="18px"
                                />
                            </a>
                            <div class="picker-value">
                                <span class="number">08</span>
                                <span class="label">Month</span>
                            </div>
                            <a href="#" class="arrow-btn right">
                                <img
                                    src="assets/img/arrow_right.svg"
                                    width="9px"
                                    height="18px"
                                />
                            </a>
                        </div>
            
                        <div class="picker-item">
                            <a href="#" class="arrow-btn left">
                                <img
                                    src="assets/img/arrow_left.svg"
                                    width="9px"
                                    height="18px"
                                />
                            </a>
                            <div class="picker-value">
                                <span class="number">31</span>
                                <span class="label">Day</span>
                            </div>
                            <a href="#" class="arrow-btn right">
                                <img
                                    src="assets/img/arrow_right.svg"
                                    width="9px"
                                    height="18px"
                                />
                            </a>
                        </div>
            
                        <div class="picker-item">
                            <a href="#" class="arrow-btn left">
                                <img
                                    src="assets/img/arrow_left.svg"
                                    width="9px"
                                    height="18px"
                                />
                            </a>
                            <div class="picker-value">
                                <span class="number">10</span>
                                <span class="label">Hour (24)</span>
                            </div>
                            <a href="#" class="arrow-btn right">
                                <img
                                    src="assets/img/arrow_right.svg"
                                    width="9px"
                                    height="18px"
                                />
                            </a>
                        </div>
            
                        <div class="picker-item">
                            <a href="#" class="arrow-btn left">
                                <img
                                    src="assets/img/arrow_left.svg"
                                    width="9px"
                                    height="18px"
                                />
                            </a>
                            <div class="picker-value">
                                <span class="number">17</span>
                                <span class="label">Minutes</span>
                            </div>
                            <a href="#" class="arrow-btn right">
                                <img
                                    src="assets/img/arrow_right.svg"
                                    width="9px"
                                    height="18px"
                                />
                            </a>
                        </div>
            
                        <div class="picker-item">
                            <a href="#" class="arrow-btn left">
                                <img
                                    src="assets/img/arrow_left.svg"
                                    width="9px"
                                    height="18px"
                                />
                            </a>
                            <div class="picker-value">
                                <span class="number">45</span>
                                <span class="label">Seconds</span>
                            </div>
                            <a href="#" class="arrow-btn right">
                                <img
                                    src="assets/img/arrow_right.svg"
                                    width="9px"
                                    height="18px"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
        `;
		const el = document.querySelector('.result');
		el.querySelector('.container-full').innerHTML += content;

		const switcherItems = document.querySelectorAll('.result-switcher_item');

		switcherItems.forEach(item => {
			item.addEventListener('click', function () {
				switcherItems.forEach(i => {
					i.classList.remove('active');
				});
				this.classList.add('active');
			});
		});
	}
});
