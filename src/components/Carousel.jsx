import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import postercards from '../data/postercards';

const Carousel = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const carouselRef = useRef(null);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 767px)');
		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (e) => setIsMobile(e.matches);
		mediaQuery.addEventListener('change', handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		};
	}, []);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.children[activeIndex].scrollIntoView({
				behavior: 'smooth',
				inline: 'center',
			});
		}
	}, [activeIndex]);

	const leftPosition = isMobile ? -4100 : -3978;

	const handleSlideChange = (index) => {
		setActiveIndex(index);
	};

	return (
		<>
			<div className='mt-4 h-11 flex justify-center'>
				{postercards.map((_, index) => (
					<div
						key={index}
						className={`w-4 h-4 rounded-full mx-1 ${
							index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
						}`}
						onClick={() => handleSlideChange(index)}></div>
				))}
			</div>
			<motion.div className='w-full mt-0 mb-0 m-auto overflow-x-hidden'>
				<motion.div
					className='h-[500px] flex cursor-grab'
					drag='x'
					dragConstraints={{ right: 0, left: leftPosition }}
					onDragEnd={(event, info) => {
						const newIndex = activeIndex - Math.round(info.offset.x / 300);

						if (newIndex >= 0 && newIndex < postercards.length) {
							setActiveIndex(newIndex);
						}
					}}
					ref={carouselRef}>
					{postercards.map((postercard, index) => (
						<motion.div
							key={postercard.id}
							className='min-w-full md:min-w-fit lg:min-w-[400px] p-2'
							style={{ opacity: activeIndex === index ? 1 : 0.65 }}>
							<Image
								src={postercard.img}
								alt='chakana'
								className='w-full h-full pointer-events-none'
							/>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</>
	);
};

export default Carousel;
