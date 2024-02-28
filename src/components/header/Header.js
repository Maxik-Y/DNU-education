import "./style.css";
import { motion } from 'framer-motion';

const Header = () => {
	return (
		<header className="header">
			<div className="header__wrapper">
				<motion.h1 className="header__title"
					initial={{ opacity: 0, scale: 0.7 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.1 }}>
					<strong>
						<em>DNU-education</em> <br /> Інноваційний Клієнт-Серверний Застосунок для Покращення Навчального Процесу
					</strong>
				</motion.h1>
				<motion.div className="header__text"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.4 }}>
					<p>Безкоштовне завантаження</p>

					<motion.a href="form" className="btn" whileTap={{ scale: 0.95 }}>
						Download DNU_education.zip
					</motion.a>
				</motion.div>
			</div>
		</header>
	);
}

export default Header;