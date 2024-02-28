import { useParams } from "react-router-dom";
import { studentSlides } from "../helpers/studentSlidesList"
import { lecturerSlides } from "../helpers/lecturerSlidesList"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Project = () => {
	const { id } = useParams();
	const slides = id === 'students' ? studentSlides : lecturerSlides;

	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNextProject = () => {
		if (currentIndex < slides.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const goToPrevProject = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	return (
		<motion.main className="section">
			<motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
				<div className="help-content">
					<motion.button
						className="list-button-left"
						onClick={goToPrevProject}
						disabled={currentIndex === 0}
						whileTap={{ scale: 0.9 }}
					></motion.button>
					<motion.div className="project-details">
						<motion.h1 className="title-2"
							key={slides[currentIndex].title}
							initial={{ opacity: 0, y: -30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}>
							{slides[currentIndex].title}
						</motion.h1>
						<motion.img
							src={slides[currentIndex].img}
							alt={slides[currentIndex].title}
							className="project-details__cover"
							key={slides[currentIndex].img}
							initial={{ opacity: 0, scale: 1.2 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						/>
						<motion.div className="project-details__desc" 
						key={currentIndex}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}>
							<p>{slides[currentIndex].text}</p>
						</motion.div>
					</motion.div>
					<motion.button
						className="list-button-right"
						onClick={goToNextProject}
						disabled={currentIndex === slides.length - 1}
						whileTap={{ scale: 0.9 }}
					></motion.button>
				</div>
			</motion.div>
		</motion.main>
	);
}

export default Project;