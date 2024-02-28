import { motion } from 'framer-motion';

const AnimatedText = ({ text }) => {
	return (
	  <>
		{text.split('').map((letter, index) => (
		  <motion.span
			key={index}
			initial={{opacity: 1}}
			animate={{opacity: [1, 0.3, 1]}}
			transition={{ delay: index * 0.1 + 2, duration: 4, repeat: Infinity }}
		  >
			{letter}
		  </motion.span>
		))}
	  </>
	);
  };

  export default AnimatedText;