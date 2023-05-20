import React from 'react';
import { Waveform } from '@uiball/loaders';
import Head from 'next/head';
import { TypeAnimation } from 'react-type-animation';
const Ubicacion = () => {
	return (
		<>
			<Head>
				<title>Ubicacion</title>
				<meta
					name='description'
					content='Ubicacion CHAKANA BREWERY HOUSE'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>

			<div className='w-full h-full  flex flex-col justify-center items-center text-slate-50  text-center'>
				<div className='h-96 p-10 lg:w-[550px]'>
					<TypeAnimation
						deletionSpeed={90}
						style={{
							whiteSpace: 'pre-line',
							height: 'auto',
							display: 'block',
							fontSize: '1rem',
							fontWeight: 'bold',
						}}
						sequence={[
							`Próximamente abriremos un local donde\nencontrarás mucho más que cerveza:  un ambiente acogedor música en vivo y deliciosos maridajes que complementarán tu experiencia.  \n ¡No puedes perderte esta nueva etapa de nuestra cervecería! 
              \n Prepárate para sumergirte en un mundo de sabores y emociones\n    Próximamente, te esperamos con los brazos abiertos en nuestro nuevo bar.`,
							2500,
							'',
						]}
						repeat={Infinity}
					/>
				</div>
				<div className='h-full'>
					<Waveform
						size={40}
						lineWeight={3.5}
						speed={1}
						color='yellow'
					/>
				</div>
			</div>
		</>
	);
};

export default Ubicacion;
