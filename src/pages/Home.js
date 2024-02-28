import Header from './../components/header/Header';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import people from './../img/icons/people.svg';
import question_circle from './../img/icons/question-circle.svg';
import rocket from './../img/icons/rocket.svg';

const textAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: { duration: 0.4, delay: custom * 0.2 }
	})
}

const Home = () => {
	return (
		<>
			<Header />
			<main
				className="section-1"
			>
				<div className="container">
					<motion.div initial='hidden'
						whileInView='visible'
						viewport={{ amount: 0.2, once: true }}
						custom={1}
						variants={textAnimation}
						className="main-part-left"
					>
						<h2 className="title-2"><img className='img-logo' src={question_circle} alt="Link" /> Що це</h2>
						<p>
							Опануйте майбутнє освіти з нашим інноваційним проєктом, який спрощує та автоматизує навчальний процес. DNU-education - це інноваційний та зручний клієнт-серверний застосунок, який призначений для покращення та цифровізації навчального процесу, надаючи різноманітні функції та зручний інтерфейс користувача.
						</p>
					</motion.div>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ amount: 0.2, once: true }}
						className="main-part-right"
					>
						<motion.h2 custom={1} variants={textAnimation} className="title-2-right">Для кого <img className='img-logo' src={people} alt="Link" /></motion.h2>
						<ul className="content-list">
							<motion.li custom={4} variants={textAnimation} className="content-list__item">
								<h3 className="title-3">для СТУДЕНТІВ</h3>
								<p>
									Отримайте зручний доступ до розкладу, оцінок, інформації про викладачів, навчальних матеріалів та інших корисних ресурсів. Майте можливість ознайомитися із власним актуальним списком вибіркових дисциплін для вашого факультету та обрати ті, які вас зацікавлять.
								</p>
							</motion.li>
							<motion.li custom={8} variants={textAnimation} className="content-list__item">
								<h3 className="title-3">для ВИКЛАДАЧІВ</h3>
								<p>
									Легко керуйте курсами та оцінками зі своїх дисциплін, переглядайте основну інформацію про групи студентів в журналі викладача, відстежуйте та обирайте виборкові дисципліни забудькуватих студентів, легко підраховуйте та формуйте рейтингові списки студентів.
								</p>
							</motion.li>
						</ul>
					</motion.div>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ amount: 0.2, once: true }}
						custom={1}
						variants={textAnimation}
						className="main-part-left"
					>
						<h2 className="title-2"><img className='img-logo' src={rocket} alt="Link" /> Основні можливості</h2>
						<p>
							Зручний доступ до інформації та ресурсів для студентів, викладачів та адміністрації.
							Власна система управління для викладачів та деканів забезпечить ефективну роботу та аналіз результатів.
							Особисті кабінети для студентів та викладачів для налаштування та відслідковування власного прогресу.
							Використовуйте сучасну технологію для ефективної взаємодії між клієнтами та сервером.
							Забезпечте безпеку та контроль доступу до інформації на різних рівнях.
						</p>
					</motion.div>
				</div>
			</main >
		</>
	);
}

export default Home;