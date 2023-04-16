import React from 'react';
import epn from '../img/Festival-EPN-2018.jpg';
import concurso from '../img/concurso-epn.webp';
import diseños2023 from '../img/diseños chakana-2023.jpg';
import henrylozada from '../img/Ing-henry.webp';
import imgtop from '../img/headAbout.webp';
import Image from 'next/image';
const AboutUs = () => {
	return (
		<div>
			<div className='flex justify-center items-center flex-wrap m-5 text-justify text-base p-4 lg:text-xl mt-0 font-semibold'>
				<Image
					src={imgtop}
					alt='kanaka Mirada Quisato'
					className=' rounded-t-xl'
				/>
				<h3 className='font-extrabold text-2xl  p-5 text-white text-center bg-primary w-screen m-0 bg-small-chakana uppercase  mt-0 '>
					Acerca de Nosotros
				</h3>
				<div className='lg:grid grid-cols-2 justify-center items-center gap-5 bg-secondary mt-8 rounded-xl text-gray-900 '>
					<p className='m-8'>
						Chakana Brewhouse Cervecería Artesanal independiente inició en Quito
						Ecuador como un proyecto personal el cuál nació en los laboratorios
						de ciencias de la universidad en donde gracias al gusto por la
						cerveza y al amplio matiz que nos ofrece como su sabor, color y
						aroma nació la idea de fabricar nuestra propia cerveza en casa.
						Conocimos a varios cerveceros de trayectoria los cuales nos ayudaron
						a conseguir todos los insumos para iniciar en este hermoso camino.
					</p>
					<figure>
						<Image
							src={epn}
							alt='Festival EPN 2018'
							className='rounded-tr-xl'
						/>
						<figcaption className='text-center bg-orange-100 text-gray-900 italic text-sm font-bold rounded-br-xl '>
							<span>Festival EPN</span>
						</figcaption>
					</figure>
				</div>
				<div className='lg:grid grid-cols-2 justify-center items-center gap-5 bg-secondary mt-8 rounded-xl  '>
					<figure className='inline-block h-full'>
						<Image
							src={concurso}
							alt='Concurso de EPN cervezas Caseras'
							className='rounded-tl-xl'
						/>
						<figcaption className='text-center bg-orange-100 text-gray-900 italic text-sm font-bold rounded-bl-xl '>
							<span className='text-[0.65rem] xl:text-sm'>
								Ganador del primer concurso de cervezas artesanales caseras EPN
							</span>
						</figcaption>
					</figure>
					<p className='m-8 text-gray-900'>
						Los primeros ensayos fueron un éxito logrando hacer nuestra primera
						cerveza una Blonde ale americana con un color dorado intenso buen
						aroma y muy refrescante. En cada lote añadíamos algo diferente,
						realizábamos varias experimentaciones con frutas añadidas a la
						preparación, especias y hierbas generando cervezas muy agradables y
						llamativas. Tanto fue nuestra aceptación por nuestros amigos,
						colegas y amantes de la cerveza que nos impulsó a seguir adelante y
						a sacar una marca que nos represente en el mercado local.
					</p>
				</div>
				<div className=' flex justify-center flex-col bg-white text-black mt-7 rounded-lg '>
					<p className=' p-7 bg-tertiary text-gray-900 '>
						Obteniendo así nuestro primer reconocimiento en un concurso de
						cerveceros caseros iniciando con mucho ánimo y paso firme en este
						bello mundo cervecero. Quisimos representar nuestras cervezas con la
						simbología de la Chakana (Símbolo milenario ancestral de la
						cosmovisión y cultura andina) donde significa la dualidad de nuestro
						alrededor, el hombre y la mujer, el sol y la luna, el cielo y la
						tierra, el tiempo y el espacio, el Dios y el hombre. Otorgando así
						un nombre y una representación a cada una de nuestras cervezas
						elaboradas fomentando a que más personas conozcan el significado de
						este símbolo milenario y su contexto ancestral disfrutando de una
						buena cerveza artesanal.
					</p>

					<Image
						src={diseños2023}
						alt='Diseños 2023 Chakana'
						className=''
					/>
					<p className='p-7 bg-tertiary text-gray-900'>
						Hoy en día contamos con una imagen renovada, mejorando día a día
						nuestras recetas realizando entregas de nuestros productos a nivel
						nacional ganando poco a poco más espacios en este interesante y
						complejo mundo cervecero.
					</p>
				</div>
				<div>
					{/* card-gerent */}
					<div className='lg:grid grid-cols-2 justify-center items-center  bg-quinary mt-8 rounded-xl pb-7 xl:p-0 '>
						<figure>
							<Image
								src={henrylozada}
								alt='Ing. Henrry Lozada fundador de Chakana BrewHouse'
								className='rounded-tl-xl rounded-tr-xl xl:rounded-tr-none'
							/>
							<figcaption className='text-center italic bg-slate-700 rounded-bl-xl xl:rounded-bl-none text-xs '>
								Henrry Ing. Henry Lozada Maestro Cervecero
								<br /> Fundador Cerveceria Chakana BrewHouse
							</figcaption>
						</figure>
						<div className=' flex justify-center flex-col items-center mt-5'>
							<h5 className='font-extrabold'> MISIÓN </h5>
							<p className='m-9 text-base'>
								En Chakana Brewhouse buscamos brindar al mercado ecuatoriano una
								cerveza artesanal de calidad con distinción en su sabor, color y
								aroma, ofreciendo experiencias exclusivas y culturizando a
								nuestros consumidores sobre cervezas y saberes ancestrales.
							</p>

							<div className='flex justify-center flex-col items-center bg-amber-50 text-black p-4'>
								<h5 className='font-extrabold'>VISIÓN</h5>
								<p className='m-9 text-base text-start'>
									Ser una micro cervecería reconocida y competitiva a nivel
									nacional e internacional ofreciendo a nuestros consumidores
									cervezas de calidad
								</p>
							</div>
							<h5 className='font-extrabold p-4'> VALORES</h5>
							<ul className='text-base text-center '>
								<li>Responsabilidad social y con el medio ambiente</li>
								<li>Calidad de producto final</li>
								<li>Innovación en procesos</li>
								<li>Servicio al cliente</li>
								<li>Mejora continua</li>
								<li>Sostenibilidad</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
