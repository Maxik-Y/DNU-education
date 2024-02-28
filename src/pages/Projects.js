import Project from '../components/project/Project';
import { projects } from "./../helpers/projectsList"
import { motion } from 'framer-motion';

const Projects = () => {
	return (
		<main className="section">
			<div className="container">
				<motion.h2 className="title-1"
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>Довідка</motion.h2>
				<ul className="projects">
					{projects.map((project, index) => {
						return (
							<Project
								key={project.index}
								title={project.title}
								img={project.img}
								index={project.index}
							/>
						);
					})}
				</ul>
			</div>
		</main>
	);
};

export default Projects;
