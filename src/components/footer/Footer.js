import "./style.css";

import facebook from './../../img/icons/facebook.svg';
import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<motion.li className="social__item" whileTap={{ scale: 0.85 }}>
							<a href="#!">
								<img src={facebook} alt="Link" />
							</a>
						</motion.li>
						<motion.li className="social__item" whileTap={{ scale: 0.85 }}>
							<a href="#!">
								<img src={instagram} alt="Link" />
							</a>
						</motion.li>
						<motion.li className="social__item" whileTap={{ scale: 0.85 }}>
							<a href="#!">
								<img src={twitter} alt="Link" />
							</a>
						</motion.li>
						<motion.li className="social__item" whileTap={{ scale: 0.85 }}>
							<a href="#!">
								<img src={gitHub} alt="Link" />
							</a>
						</motion.li>
						<motion.li className="social__item" whileTap={{ scale: 0.85 }}>
							<a href="#!">
								<img src={linkedIn} alt="Link" />
							</a>
						</motion.li>
					</ul>
					<div className="copyright">
						<p>© 2024 yuriev-tech.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;