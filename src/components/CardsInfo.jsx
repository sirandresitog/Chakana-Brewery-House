import React from 'react';
import { cardsInfo } from '../data/cardInfo';
import Image from 'next/image';
const CardsInfo = () => {
	return (
		<>
			{cardsInfo.map((card) => {
				return (
					<div
						aria-label='Menu de Productos'
						key={card.id}
						className={`${card.color}   w-full cursor-pointer duration-500 p-8 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 text-center rounded-xl`}>
						<Image
							src={card.img}
							alt={card.alt}
							className={`rounded-full lg:h-36 w-auto mx-auto`}
						/>
						<h2 className=' text-base font-bold xl:text-xl'>{card.name}</h2>
						<p className='text-sm leading-7 my-3 font-light opacity-50 text-white'>
							{card.type}
						</p>
						<a
							href={card.ref}
							aria-label='Mas Información'
							className='bg-cyan-700 text-slate-300 py-1.5 px-4 text-sm rounded-full  hover:bg-blue-500'>
							Mas Informacion
						</a>
					</div>
				);
			})}
		</>
	);
};

export default CardsInfo;
