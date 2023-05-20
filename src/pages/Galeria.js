import React from 'react';
import GaleryComp from '@/components/GaleryComp';
import Head from 'next/head';
const Galeria = () => {
	return (
		<>
			<Head>
				<title>Galeria</title>
				<meta
					name='description'
					content='Galeria de imagenes CHAKANA BREWERY HOUSE'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>

			<div className='h-[495px] md:h-[700px]'>
				<GaleryComp />
			</div>
		</>
	);
};

export default Galeria;
