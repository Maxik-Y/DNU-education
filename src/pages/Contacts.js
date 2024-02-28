import { motion } from 'framer-motion';
import AnimatedText from "./../helpers/AnimatedText";

const Contacts = () => {
	return (
		<main className="section">
			<div className="container">
				<motion.h1 className="title-1"
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>Контакти</motion.h1>

				<ul className="content-list">
					<li className="content-list__item">
						<motion.h2 className="title-2"
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						><AnimatedText text={'Місцезнаходження'} />:</motion.h2>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 1.6 }}
						>м. Дніпро, Україна</motion.p>
					</li>
					<li className="content-list__item">
						<motion.h2 className="title-2"
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.8 }}
						><AnimatedText text={'Telegram / WhatsApp'} /></motion.h2>
						<p>
							<motion.a className="btn" href="tel:+380501465164"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 1.6 }}
								whileHover={{ rotate: [0, -5, 10, 0] , transition: { duration: 0.4 }}}
							>+38 (050) 146-51-64</motion.a>
						</p>
					</li>
					<li className="content-list__item">
						<motion.h2 className="title-2"
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 1.2 }}
						><AnimatedText text={'Email'} /></motion.h2>
						<p>
							<motion.a className="btn" href="mailto:yuriev.tech@cf.dnu.dp.ua"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 1.6 }}
								whileHover={{ rotate: [0, -5, 10, 0] , transition: { duration: 0.4 }}}
								>
								yuriev.tech@cf.dnu.dp.ua
							</motion.a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;