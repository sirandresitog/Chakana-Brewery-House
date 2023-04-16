import Image from 'next/image';
import slidechakana from '../img/chakana-slide-1.webp';
import chakanaslogan from '../img/chakana-slogan.webp';
import selloindependiente from '../img/Sello-de-Independencia-Logo.png';
import materialeschakana from '../img/productos-chakana.webp';
import chakanabotellas from '../img/Chakana-Presentacion-Botella.webp';
import ecuador from '../img/Ecuador-chakana.webp';
import Carousel from '../components/Carousel';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Chakana Brew House</title>
			</Head>
			<main className='flex min-h-screen flex-col items-center justify-between   '>
				<section className=' max-w-[70rem]  lg:m-auto text-slate-50'>
					<Image
						src={slidechakana}
						priority={true}
						alt='Logo Chakana Brew House'
						className='rounded  mix-blend-normal h-auto w-[77rem]'
					/>
					<section>
						<h1
							className=' font-extrabold md:text-5xl lg:text-8xl text-center '
							aria-label='Chakana Brewhouse Titulo '>
							<b>Chakana Brewhouse </b>
						</h1>
						<h2
							className=' md:text-3xl lg:text-5xl text-sm text-white text-center'
							aria-label='Cervecería Artesanal Independiente titulo 2'>
							Cervecería Artesanal Independiente
						</h2>

						{/* Article */}
						<article className=' mt-5  md:text-justify leading-normal lg:text-2xl  lg:mt-44lg:grid justify-center items-center gap-5 '>
							<p className='m-8 lg:ml-0 lg:mr-0 '>
								Chakana Brewhouse es una micro cervecería artesanal Ecuatoriana,
								que nace en el año 2017 en los laboratorios de la universidad
								con la consigna de generar estilos de cervezas con alta calidad
								y gracias a varias amistades, cerveceros de trayectoria
								ecuatoriana amantes de la cerveza artesanal los cuales nos
								ayudaron a la adquisición de materiales y de excelentes materias
								primas iniciamos esta trayectoria exponiendo en nuestra imagen
								características e identidades propias rescatando los saberes
								andinos ancestrales. Nuestras cervezas son cuidosamente
								elaboradas controlando todos los aspectos importantes en el
								proceso de elaboración y gracias a nuestras excelentes maltas,
								lúpulos y levaduras se evidencian en el producto final su sabor,
								color y aroma.
							</p>

							<picture className='w-full h-full  flex justify-center items-center'>
								<Image
									src={selloindependiente}
									alt='Chakana Cerveza Artesanal Quito'
									className='w-full lg:h-[400px] md:w-auto opacity-95 rounded-sm '
								/>
							</picture>
						</article>
						{/* article */}
						<article className=' mt-2 text-left lg:text-justify leading-normal lg:text-2xl  '>
							<p className='m-7 lg:ml-0 lg:mr-0'>
								Nuestras cervezas son de alta calidad que se distingue por su
								sabor distintivo y aroma exquisito. Es una cerveza única,
								elaborada con los mejores ingredientes naturales cuidadosamente
								seleccionados. Elaborada con una mezcla única de maltas, lúpulos
								y levaduras, su color y aroma resalta gracias a cada uno de
								nuestros ingredientes utilizados en cada preparación y refleja
								su frescura y equilibrio en cada sorbo. Chakana es una cerveza
								que se adapta a cualquier ocasión, desde disfrutarla en una
								reunión con amigos hasta en un momento de relajación en casa.
								Esta cerveza artesanal se elabora con pasión y dedicación,
								cuidando cada detalle en su proceso de producción para ofrecer
								una experiencia única a cada uno de sus consumidores.
								<br />
							</p>
							<h3 className=' md:text-4xl text-yellow-300 mb-10 text-center font-bold'>
								¡Descubre el sabor auténtico de Chakana!
							</h3>
							<picture className='pt-20'>
								<div className='lg:flex  justify-center items-center '>
									<Image
										src={chakanaslogan}
										alt='Chakana Cerveza Artesanal Quito'
										className='lg:h-[400px] overflow-auto p-4'
									/>{' '}
									<Image
										src={chakanabotellas}
										alt='Chakana Cerveza Artesanal Quito'
										className='lg:h-[400px] overflow-auto p-4'
									/>
								</div>
							</picture>
							<h4 className='text-center text-4xl p-5 lg:text-5xl font-semibold mt-20'>
								Usamos materiales Importados
							</h4>
							<Image
								src={materialeschakana}
								alt='productos elaboracion chakana'
								className=' h-auto pt-5 pr-3 pl-3 w-full lg:w-screen lg:mr-0 lg:ml-0 lg:pr-0 lg:pl-0 '
							/>
							<div className='flex flex-col justify-center items-center '>
								<h4 className='text-center text-3xl mt-20 lg:mt-40 lg:text-5xl font-semibold '>
									Producto Ecuatoriano
								</h4>
								<Image
									src={ecuador}
									alt='Cerveza Ecuatoriana Artesanal'
									className='lg:h-[500px] overflow-auto p-4 w-auto mt-8'
								/>
							</div>
							<h5 className='text-center text-4xl lg:text-5xl mb-12 font-semibold mt-20'>
								Nuestra Marca
							</h5>
							<Carousel />
						</article>
					</section>
				</section>
			</main>
		</>
	);
}
