import { NavLink } from 'react-router-dom';
import './style.css';
import { motion } from 'framer-motion';

const Project = ({ title, img, index }) => {
	return (
		<NavLink to={`/project/${index}`}>
			<motion.li className="project"
				initial={{ opacity: 0, scale: 1.2 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				whileHover={{ rotate: [0, -5, 10, 0] , transition: { duration: 0.4 }}}
			>
				<img src={img} alt={title} className="project__img" />
				<h3 className="project__title">{title}</h3>
			</motion.li>
		</NavLink>
	);
};

export default Project;
