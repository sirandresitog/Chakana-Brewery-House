import postercards from '../data/postercards';
import Image from 'next/image';
import { motion } from 'framer-motion';
const Carousel = () => {
	return (
		<motion.div className='w-full mt-0 mb-0 m-auto overflow-x-hidden '>
			<motion.div
				className=' h-[500px] flex cursor-grab'
				drag='x'
				dragConstraints={{ right: 0, left: -3748 }}>
				{postercards.map((postercard) => {
					return (
						<motion.div
							key={postercard.id}
							className=' min-w-full md:min-w-fit lg:min-w-[400px] p-2'>
							<Image
								src={postercard.img}
								alt='chakana'
								className='w-full h-full pointer-events-none'
							/>
						</motion.div>
					);
				})}
			</motion.div>
		</motion.div>
	);
};

export default Carousel;
