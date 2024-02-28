import curator from "./../img/slides/student/curator.jpg";
import student_different from "./../img/slides/student/student-different.jpg";
import student_election from "./../img/slides/student/student-election.jpg";
import student_login from "./../img/slides/student/student-login.jpg";
import student_office from "./../img/slides/student/student-office.jpg";
import student_report from "./../img/slides/student/student-report.jpg";
import './style.css';

const studentSlides = [
	{
		title: 'Отримайте обліковий запис',
		img: curator,
		text: (
			<div>
			<ul>
				<li>
					<strong>1. Зверніться до свого куратора:</strong><br></br>Зверніться до куратора своєї групи для отримання облікового запису.
				</li>
				<li>
					<strong>2. Отримайте логін та пароль:</strong><br></br>Після звернення до куратора Вам буде видано особистий логін та пароль, які Ви зможете використовувати для входу в систему застосунка.
				</li>
				<li>
					<strong>3. Бережіть свій обліковий запис:</strong><br></br>Обов'язково зберігайте свої облікові дані у безпечному місці та не передавайте їх іншим користувачам, щоб не допустити їх неправомірне використання.
				</li>
				<li>
					<strong>4. Звертайтеся за допомогою</strong><br></br>У разі втрати облікових даних або будь-яких труднощів із входом у систему звертайтеся до свого куратора для отримання допомоги.
				</li>
			</ul>
			</div>
			),
	},
	{
		title: 'Увійдіть у застосунок',
		img: student_login,
		text: (
			<div>
			<ul>
				<li>
					<strong>1. Встановіть застосунок:</strong><br></br>Завантажне застосунок з головної сторінки та встановіть його, виконуючи вказівки установника. 
				</li>
				<li>
					<strong>2. Введіть логін та пароль:</strong><br></br>Після запуску застосунку вас буде вітати екран входу. Введіть свій користувацький логін та пароль у відповідні поля. Переконайтесь в правильності введених даних та підтвердіть вхід.
				</li>
				<li>
					<strong>3. Особистий кабінет:</strong><br></br>Після успішного входу ви отримаєте доступ до свого особистого кабінету, де ви зможете переглядати та управляти своїми особистими даними, робити необхідні налаштування та використовувати функціонал застосунку.
				</li>
			</ul>
			</div>
			),
	},
	{
		title: 'Дослідіть Ваш особистий кабінет',
		img: student_office,
		text: (
			<div>
				<p>
					Якщо вхід виконан успішно, то першим Ви побачите свій особистий кабінет. В ньому відображається особиста інформація студента, наприклад: ПІБ, адреса, контактні дані, група тощо, а також тут можна переглянути поточні оцінкі і список обраних Вами дисциплін.
				</p>
			</div>
		),
	},
	{
		title: 'Оберіть цікаві дисципліни',
		img: student_election,
		text: (
			<div>
				<p>
					Переглядайте списки вибіркових дисциплін, читайте їх опис та обирайте на наступний семестр ті, які Вам подобаються. Але поспішайте, адже кількість студентів на на кожну дисципліну обмежена, та після завершення виборів Ви будете не в змозі самостійно робити вибір. Також пам'ятайте, що куратор Вашої групи теж має право обирати дисципліни за Вас.
				</p>
			</div>
		),
	},
	{
		title: 'Отримуйте актуальну інформацію',
		img: student_different,
		text: (
			<div>
				<p>
					Також Ви можете переглядати основну поточну інформацію про викладачів, дисципліни та студентів інших груп. Дізнайтеся, який викладач веде Вашу дисципліну, які дисципліни будуть у наступному семестрі, що обрали інші студенти та багато іншого.
				</p>
			</div>
		),
	},
	{
		title: 'Зберігайте необхідне',
		img: student_report,
		text:  (
			<div>
				<p>
					Якщо Ви виконали запит на пошук певної інформації і хочете зберегти результат, то поруч з кнопками "Виконати" є кнопки "Звітувати", які записують результати на екрані у .pdf файл і зберігають його у зручне для Вас місце на комп'юторі.
				</p>
			</div>
		),
	},
];

export { studentSlides }