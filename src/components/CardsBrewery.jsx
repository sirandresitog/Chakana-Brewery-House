import Image from 'next/image';
//import intimirada from '../../assets/img/inti-mirada.webp';
import CardsInfo from './CardsInfo';

import killa from '../img/killa.webp';
import inti from '../img/inti.webp';
import quisato from '../img/quisato.webp';
import viracocha from '../img/virachocha_1.webp';

const cards = () => {
	return (
		<>
			<div className='lg:flex p-6 hidden '>
				<Image
					src={killa}
					alt='Logo cerveza chakana Principal'
					className='h-auto w-1/4 rounded-sm opacity-50 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100'
					priority={true}
				/>
				<Image
					src={inti}
					alt='Logo cerveza chakana Principal'
					className='h-auto w-1/4 rounded-sm opacity-50 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100'
					priority={true}
				/>
				<Image
					src={quisato}
					alt='Logo cerveza chakana Principal'
					className='h-auto w-1/4 rounded-sm opacity-50 mix-blend-luminosity hover:mix-blend-normal  hover:opacity-100'
					priority={true}
				/>
				<Image
					src={viracocha}
					alt='Logo cerveza chakana Principal'
					className='h-auto w-1/4 rounded-sm opacity-50 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100'
					priority={true}
				/>
			</div>
			<h1 className='font-extrabold text-3xl lg:bg-slate-600  p-5 text-white text-center w-full mt-0 bg-small-chakana uppercase lg:rounded-3xl lg:mb-20 '>
				Nuestros Productos
			</h1>

			{/* ----------------- cards grop ------------ */}

			<div className=' flex max-w-5xl gap-8 p-4  mx-auto group flex-wrap lg:flex-nowrap '>
				<CardsInfo />
			</div>
		</>
	);
};

export default cards;
