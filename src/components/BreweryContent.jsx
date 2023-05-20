import React from 'react';
import Image from 'next/image';
// icons
import { TbMeatOff, TbSalad } from 'react-icons/tb';
import { BiCheese } from 'react-icons/bi';
import { IoFishOutline } from 'react-icons/io5';
import { GiCakeSlice, GiSlicedSausage, GiMeat } from 'react-icons/gi';
// images
import portadaviracocha from '../img/viracocha-portada.jpg';
//import portadakilla from '../img/killa-portada.jpg';
import portadaquisato from '../img/quisato-portada.jpg';
import portadainti from '../img/inti-portada.jpg';
import portadaKilla from '../img/killa-portada.jpg';
import contenido1 from '../img/cervezas-contenido-1.webp';
import contenido2 from '../img/cervezas-contenido-2.webp';
import intibotella from '../img/inti-blode-ale-botella.jpg';
import intilata from '../img/inti-blode-ale-lata.jpg';
import killabotella from '../img/killa-botella.jpg';
import killalata from '../img/killa.lata.jpg';
import quisbotella from '../img/quisato-botella.webp';
import quislata from '../img/quisato-lata.jpg';
import viracbotella from '../img/viracocha-botella.jpg';
import viraclata from '../img/viracocha-lata.jpg';
import blodeImg from '../img/blonde.webp';
import belgianblonde from '../img/belgian-blonde.jpg';
import irishred from '../img/irishred.png';
import irisale from '../img/irisAle.png';
import palecerveza from '../img/receta-cerveza-india-pale-ale-clasica.jpg';
import ipa2 from '../img/ipa2.jpg';
import indianpale from '../img/cerveza-india-india-pale-ale-c-john-sleeman.jpg';
import englishporter from '../img/Recetas-de-English-Porter.jpg';
import porter2 from '../img/Taddy-Porter-drinkmemag.com-drink-me-Top-British-Porter.jpg';
// videos

const Breweries = () => {
	return (
		<div>
			{/* ---------------------------- Content Breweries ----------------------------- */}
			<section className='w-full flex flex-col justify-center  flex-wrap'>
				<h1 className=' text-center lg:text-[42px] text-2xl md:text-5xl mt-20 mb-20 mr-0 ml-0 font-bold'>
					En nuestra cervecería tenemos cuatro estilos de cerveza
				</h1>
				<div className=' w-full lg:flex justify-between items-center gap-2  p-4'>
					<Image
						src={contenido1}
						alt='Cerveza artesanal ecuatoriana quiteña chulla'
						className='w-auto lg:w-1/2 rounded-sm'
					/>
					<Image
						src={contenido2}
						alt='cerveza artesnal de quito sur de quito '
						className='pt-5 lg:pt-0 w-auto lg:w-1/2 rounded-sm'
					/>
				</div>
				<article className='w-full lg:text-justify leading-relaxed  pb-10 p-4  lg:text-xl  lg:pt-24 pt-10 '>
					<p>
						En nuestra micro cervecería
						<b className='font-bold'> “Chakana Brewhouse”</b> elaboramos
						nuestras recetas basándonos en la Guía de estilos BJCP 2021.Cuidamos
						todo nuestro proceso desde el ajuste del perfil de agua, maltas,
						levaduras y lúpulos hasta obtener el producto final una cerveza muy
						buena en sabor aroma y cuerpo.
					</p>
					<p>
						Aquí te contamos un poco de historia sobre cada uno de los estilos
						realizados a nivel mundial y los que elaboramos comercialmente.
					</p>
				</article>
			</section>
			{/* ---------------------------- Videos Breweries ----------------------------- */}

			<div className='flex justify-center flex-wrap md:flex-nowrap gap-3 bg-[#201f24] md:bg-quinary md:rounded-xl max-w-[77rem] lg:mt-20 mt-10'>
				<div className='h-[580px] w-full md:w-[220px] lg:w-[420px] m-2 '>
					<iframe
						className='h-[580px] w-full'
						src='https://player.vimeo.com/video/808927626?h=c77cc875a2?autoplay=1'
						allow='autoplay'></iframe>
				</div>
				<div className='h-[580px] w-full md:w-[220px] lg:w-[420px] m-2 '>
					<iframe
						className='w-full h-full'
						src='https://player.vimeo.com/video/809172748?h=0617756271'
						allow='autoplay'></iframe>
				</div>
				<div className='h-[580px] w-full md:w-[220px] lg:w-[420px] m-2 '>
					<iframe
						className='w-full h-full'
						src='https://player.vimeo.com/video/809187211'
						allow='autoplay'></iframe>
				</div>
			</div>

			{/* ---------------------------- Inti Brewery----------------------------- */}
			<div
				id='inti'
				className='w-full lg:grid grid-cols-2 flex-wrap  bg-[#333] rounded-xl mt-20 text-[15px] '>
				<div className='w-full h-full flex justify-center items-center '>
					<Image
						src={portadainti}
						alt='Sello chakana Brewhouse'
						className='w-auto h-auto '
					/>
				</div>
				<div className='w-full h-full flex justify-center items-center '>
					<div className=' h-[82%] flex justify-center flex-col text-left p-4 md:p-20 bg-rubio '>
						<div className='flex justify-center -translate-y-3 md:-translate-y-4 lg:-translate-y-6'>
							<h2 className='letra border bg-rubio border-black md:text-5xl font-extrabold  hidden md:flex'>
								Cerveza Rubia
							</h2>
							<h2 className='letra wave rojo text-rubio  md:text-5xl font-extrabold '>
								Cerveza Rubia
							</h2>
						</div>
						<p className='md:mt-20 mt-4 '>
							<b>Caracteristicas</b> :Una blonde ale de cuerpo ligero. 6,5% de
							alcohol, baja en amargor y refrescante, su sabor es maltoso, un
							poco dulce al gusto y sutil aroma a levadura.
						</p>
						<h3 className='sm:text-[0.3rem] md:text-base mt-5'>
							<b>Maridaje:</b>
						</h3>
						<p>Ensaladas,Quesos, Mariscos,Embutidos</p>
						<div className='flex  items-center text-4xl justify-center mt-10 '>
							<div className='m-1'>
								<TbSalad />
							</div>
							<div className='m-1'>
								<BiCheese />
							</div>
							<div className='m-1'>
								<IoFishOutline />
							</div>
							<div className='m-1'>
								<GiSlicedSausage />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* ---------------------------- Inti Breweries Content ----------------------------- */}
			<article className='w-full flex flex-col justify-center leading-relaxed lg:text-justify flex-wrap mt-10 lg:text-xl'>
				<h3 className='text-white font-bold'>Belgian Blonde Ale</h3>
				<p className='mt-5'>
					Ya sea para novatos que incursionan al mundo de la cerveza artesanal o
					para conocedores del mundo cervecero o simplemente para quienes les
					apetece beber una cerveza clara en días calurosos, la blonde ale es la
					adecuada.
				</p>
				<p>
					La blonde ale es uno de los muchos estilos disponibles en el mercado,
					con la particularidad de que su nombre deriva de su característico
					color rubio, que va de un amarillo pálido hasta un dorado intenso.
				</p>
			</article>
			{/* ---------------------------- Inti History ----------------------------- */}
			<section className='w-full flex flex-col justify-center text-left items-center flex-wrap  mt-10 lg:text-xl'>
				<div className=' w-full flex justify-center items-center gap-4 lg:gap-2 flex-wrap lg:flex-nowrap bg-[#201f24]  pb-10 pt-10 lg:p-14 border-dashed border-2 border-sky-500 '>
					<Image
						src={blodeImg}
						alt='imagen blonde referencia cerveza chakana chakana'
					/>
				</div>
				<article className='mt-7'>
					<h3 className='text-white font-extrabold'>Evolución</h3>
					<p className='mt-3'>
						En comparación con muchos estilos belgas tradicionales como las
						cervezas sour o las trapenses, la blonde Ale es relativamente
						reciente y actualmente existen en el mercado diferentes
						interpretaciones del estilo. Algunas han perdido gran parte de su
						carácter original para atraer a un público más amplio.
					</p>
				</article>
				<h5 className='mt-20 capitalize italic text-[0.8rem]m md:text-sm'>
					nuestras cerevezas Blonde Ale
				</h5>
				<div className='lg:flex gap-4 justify-center items-center lg:gap-1 p-2 max-w-[77rem]'>
					<Image
						src={intibotella}
						alt='Cerveza artesanal ecuatoriana quiteña chulla'
						className='pt-5 lg:pt-0 w-screen lg:w-1/3 rounded-sm'
					/>
					<Image
						src={intilata}
						alt='cerveza artesanal de quito sur de quito '
						className='pt-5 lg:pt-0 w-screen lg:w-1/3 rounded-sm'
					/>
					<Image
						src={intilata}
						alt='cerveza artesnal de quito sur de quito '
						className='pt-5 lg:pt-0 w-screen lg:w-1/3 rounded-sm'
					/>
				</div>
			</section>
			{/* ---------------------------- Quisato Brewery  ----------------------------- */}
			<section>
				<div
					id='quisato'
					className='lg:grid grid-cols-2 flex-wrap bg-[#333] rounded-xl mt-28 text-[15px]'>
					<div
						className='	w-full
						h-full
						flex
						justify-center
						items-center'>
						<Image
							src={portadaquisato}
							alt='QUISATO PORTADA CERVEZA'
							className='h-auto w-auto rounded-s-xl'
						/>
					</div>
					<div className='w-full h-full flex justify-center items-center '>
						<div className=' flex  h-[81%] justify-center flex-col text-left p-2 md:p-20 bg-red-900'>
							<div className='flex justify-center -translate-y-3 md:-translate-y-4 lg:-translate-y-6'>
								<h3 className='letra border bg-red-900 border-black md:text-5xl font-extrabold hidden md:flex '>
									Cerveza Roja
								</h3>
								<h3 className='letra wave rojo text-red-900  md:text-5xl font-extrabold '>
									Cerveza Roja
								</h3>
							</div>
							<p className='md:mt-20 mt-4 '>
								<b>Caracteristicas</b>: Estilo Irish red ale de 5% de alcohol
								cerveza maltosa acaramelado por las maltas sutil aroma a
								caramelo toffee con suaves notas a lúpulo baja en amargor y
								fácil de beber..
							</p>
							<br />
							<h4>
								<b>Maridaje:</b>
								<p>Postres,Quesos, Mariscos,Pollo,Embutidos</p>
							</h4>
							<br />
							<div className='flex  items-center text-4xl justify-center'>
								<div className='m-1'>
									<GiCakeSlice />
								</div>
								<div className='m-1'>
									<BiCheese />
								</div>
								<div className='m-1'>
									<IoFishOutline />
								</div>
								<div className='m-1'>
									<TbMeatOff />
								</div>
								<div className='m-1'>
									<GiSlicedSausage />
								</div>
							</div>
						</div>
					</div>
				</div>
				<article className='text-left leading-relaxed pt-10 pb-20  mt-10 lg:text-xl lg:text-justify '>
					<h3 className='text-white font-extrabold'>Irish Red Ale</h3>
					<p className='mt-3'>
						Es una cerveza de fermentación alta, fácil de beber, tiene un color
						ámbar-rojizo, transparente y con una espuma blanquecina a color
						canela de retención media. Su sabor es bastante neutral pero
						inclinado hacia las maltas, puede contener algunas notas a caramelo
						o bizcocho, históricamente más derivadas del proceso de elaboración
						que del uso de maltas caramelizadas. El aroma es dulce a grano o
						caramelo tostado y con muy baja o ninguna presencia de lúpulo que de
						existir le otorgaría notas florales o terrosas.
					</p>
					<p>
						Tiene un cuerpo medio, de final medio-seco con notas amargas por la
						malta tostada que junto a su graduación alcohólica moderada oscila
						entre 3,8 y el 5 %, invita a beberla a sorbos. Algunas versiones
						americanas exhiben mayor grado alcohólico y una “reinvención” del
						estilo tradicional en Irlanda está apostando por otorgarles mayor
						amargor.
					</p>
				</article>
				<div className='flex  items-center justify-center gap-4 lg:gap-2 flex-wrap lg:flex-nowrap bg-[#201f24]  pb-10 pt-10 lg:p-14 border-dashed border-2 border-sky-500 '>
					<Image
						src={irishred}
						alt='imagen blonde referencia cerveza chakana chakana'
					/>
				</div>
				<article className='text-left leading-relaxed pt-10 pb-10 lg:text-justify lg:text-xl   '>
					<h5 className='text-white font-extrabold'>Su Origen</h5>
					<p className='mt-3'>
						La elaboración de este estilo se la debemos a los Vikingos desde
						aquellos días que ocuparon Irlanda y llevaron sus estilos de cerveza
						a esas tierras. En un poema del siglo VIII se habla de esta cerveza
						de una manera diferente a como la conocemos hoy en día. Las primeras
						Red Ale que se hicieron como las conocemos hoy en día datan del año
						1710. Su elaboración requiere desde entonces una cantidad menor de
						lúpulo y mayor de malta.
					</p>
					<p>
						Aunque su nombre nos haga pensar que por lógica es el estilo
						favorito de los irlandeses, la realidad es que no. En dicho país
						siempre ha dominado el consumo de las cervezas Porter y las ale muy
						obscuras ya que su historia en Irlanda tiene más años que la misma
						Irish Red Ale.
					</p>
				</article>
				<div className='flex  items-center gap-4 lg:gap-2 flex-wrap lg:flex-nowrap bg-[#201f24]  pb-10 pt-10 lg:p-14 border-dashed border-2 border-sky-500  justify-center l'>
					<Image
						src={irisale}
						alt='www.boulevard.com'
						className='h-[25rem] w-auto'
					/>
				</div>
				<article className='text-left leading-relaxed pt-10 pb-10 lg:text-xl lg:text-justify  '>
					<h3 className='text-white font-extrabold '>Evolución</h3>
					<p className='mt-3'>
						A día de hoy, podemos encontrar un par de referencias más o menos
						extendidas a lo largo del planeta. Una de ellas es Murphys Irish Red
						y la otra Smithwicks de Kilkenn. Es fácil encontrar cualquiera de
						ellas en casi cualquier pub o tienda cervecera, debido a que se han
						enfocado en la exportación. Sin embargo, esta última ahora emplea
						jarabe de maíz en sus recetas. Otras casas de referencia por su red
						ales son O Haras y Porterhouse, pero todavía no se han expandido en
						la misma medida.
					</p>
				</article>
				<h3 className='text-center mt-20 capitalize italic text-[0.8rem]m md:text-sm'>
					Nuestras cerveceras Irish Red
				</h3>
				<div className='lg:flex gap-4 justify-center items-center lg:gap-1 p-2 max-w-[77rem]'>
					<Image
						src={quisbotella}
						alt='Cerveza artesanal ecuatoriana quiteña chulla'
						className='pt-5 lg:pt-0 w-screen lg:w-1/3 rounded-sm'
					/>
					<Image
						src={quislata}
						alt='cerveza artesnal de quito sur de quito '
						className='pt-5 lg:pt-0 w-screen lg:w-1/3 rounded-sm'
					/>
					<Image
						src={quislata}
						alt='cerveza artesnal de quito sur de quito '
						className='pt-5 lg:pt-0 w-screen lg:w-1/3 rounded-sm'
					/>
				</div>
			</section>
			{/* ---------------------------- Viracocha Brewery Content----------------------------- */}
			<section>
				<div
					id='viracocha'
					className='lg:grid grid-cols-2 flex-wrap rounded-xl  mt-20 text-[15px] bg-[#333] '>
					<div className='flex justify-center items-center w-full h-full'>
						<Image
							src={portadaviracocha}
							alt='Portada cerveza viracocha'
							className='lg:h-auto w-auto'
						/>
					</div>
					<div className='flex w-full h-full justify-center items-center'>
						<div className=' h-[83%] text-left p-2 md:p-20 bg-dorado'>
							<div className='flex justify-center -translate-y-3 md:-translate-y-4 lg:-translate-y-6 '>
								<h3 className='letra border bg-dorado border-black md:text-5xl font-extrabold hidden md:flex '>
									Cerveza Dorada
								</h3>
								<h3 className='letra wave rojo text-dorado  md:text-5xl font-extrabold '>
									Cerveza Dorada
								</h3>
							</div>
							<p className='md:mt-16 mt-4 '>
								<b>Caracteristicas</b>: Cerveza Porter de 6,5 % de alcohol.
								Cerveza con matices achocolatados por sus maltas chocolate,
								cuerpo medio, amargor bajo y predomina el aroma a café tostado
								gracias a sus maltas tostadas.
							</p>
							<br />
							<h4>
								<b>Maridaje:</b>
							</h4>
							<p>Carnes asadas, Postres, Quesos, Mariscos, Embutidos</p>
							<br />
							<div className='flex  items-center text-4xl justify-center'>
								<div className='m-1'>
									<GiMeat />
								</div>
								<div className='m-1'>
									<GiCakeSlice />
								</div>
								<div className='m-1'>
									<BiCheese />
								</div>
								<div className='m-1'>
									<IoFishOutline />
								</div>
								<div className='m-1'>
									<GiSlicedSausage />
								</div>
							</div>
						</div>
					</div>
				</div>
				<article className='text-left leading-relaxed pt-10 pb-10 lg:text-justify lg:text-xl'>
					<h3 className='text-white font-extrabold text-left'>
						IPA India Pale Ale
					</h3>
					<p className='mt-3'>
						Una IPA es una cerveza de alta graduación alcohólica la cual puede
						oscilar entre 4% y 9% ABV. Posee un amargor y aroma intensos y
						cierta complejidad en el paladar. El nombre hace referencia a India
						Pale Ale, un estilo cervecero que se caracteriza por la alta
						concentración de lúpulo en su preparación.
					</p>
					<p>
						Son cervezas de fermentación alta, por lo general presentan un color
						pálido anaranjado de menor o mayor intensidad, aunque hoy en día
						existen muchas variantes. El lúpulo es el protagonista principal,
						proporcionando un amargor que va de intensidad media a alta, pero
						que además expresan una serie de sabor particulares y matices
						aromáticos.
					</p>
					<p>
						Fue introducida nuevamente a mediados de la década de 1970 con el
						inicio de la era de la cerveza artesanal. Se dice que su nombre
						inició por su popularidad entre la clase obrera de Londres muy
						popular entre los porteros (porter, en inglés) que trabajaban en los
						mercados locales, quienes solían entregar diversos productos a las
						puertas de los pubs.
					</p>
					<div className='flex justify-center items-center bg-[#201f24] w-full mt-10 border-dashed border-2 border-sky-500 '>
						<Image
							src={palecerveza}
							alt='IPA India Pale Ale'
							className='lg:h-[35rem] lg:w-auto pb-10 pt-10 lg:p-8 rounded-xl'
						/>
						<p></p>
					</div>
				</article>
			</section>

			{/* ---------------------------- Viracocha History ----------------------------- */}
			<div className='flex  items-center gap-4 lg:gap-2 flex-wrap lg:flex-nowrap bg-[#201f24]  pb-10 pt-10 lg:p-14 border-dashed border-2 border-sky-500 '>
				<div className='lg:w-1/2'>
					<Image
						src={ipa2}
						alt='"Ruta desde Inglaterra a la India en el siglo XIX..'
						className='w-auto lg:h-[400px]  rounded-sm h-94 bg-clip-content bg-cover '
					/>
				</div>
				<div className='lg:w-1/2 '>
					<Image
						src={indianpale}
						alt='India Pale Ale Chakana '
						className='w-auto lg:h-[400px]  rounded-sm h-94 bg-clip-content bg-cover  md:mt-0 '
					/>
				</div>
			</div>
			<h5 className='text-center mt-20 capitalize italic text-[0.8rem]m md:text-sm'>
				Nuestras Cervezas I.P.A Pale Ale
			</h5>
			<div className='lg:flex justify-center items-center gap-2 p-2 max-w-[77rem] '>
				<Image
					src={viracbotella}
					alt='Cerveza artesanal ecuatoriana quiteña chulla'
					className='pt-5 lg:pt-0 w-screen lg:w-1/3 rounded-sm'
				/>
				<Image
					src={viraclata}
					alt='cerveza artesnal de quito sur de quito '
					className='pt-5 lg:pt-0 w-screen lg:w-1/3 rounded-sm'
				/>
				<Image
					src={viraclata}
					alt='cerveza artesnal de quito sur de quito '
					className='pt-5 lg:pt-0 w-screen lg:w-1/3 rounded-sm'
				/>
			</div>
			<section>
				<div
					id='killa'
					className='lg:grid grid-cols-2 flex-wrap rounded-xl bg-[#444] text-[15px] mt-20'>
					<div className='flex justify-center items-center w-full h-full'>
						<Image
							src={portadaKilla}
							alt='Portada cervecera Killa artesanal'
							className='w-auto h-auto '
						/>
					</div>
					<div className='w-full h-full flex justify-center items-center'>
						<div className=' flex h-[81%] justify-center flex-col text-justify p-2 md:p-20 bg-gray-900'>
							<div className='flex  justify-center -translate-y-3 md:-translate-y-4 lg:-translate-y-6 '>
								<h3 className='letra border bg-gray-900 border-black md:text-5xl font-extrabold hidden md:flex'>
									Cerveza Oscura
								</h3>
								<h3 className='letra wave rojo text-gray-900  md:text-5xl font-extrabold '>
									Cerveza Oscura
								</h3>
							</div>
							<p className='md:mt-20 mt-4 '>
								<b>Caracteristicas</b>: Cerveza Porter de 6,5 % de alcohol.
								Cerveza con matices achocolatados por sus maltas chocolate,
								cuerpo medio, amargor bajo y predomina el aroma a café tostado
								gracias a sus maltas tostadas.
							</p>
							<br />
							<h4>
								<b>Maridaje:</b> Carnes asadas, Postres, Quesos, Mariscos,
								Embutidos
							</h4>
							<br />
							<div className='flex  items-center text-4xl justify-center'>
								<div className='m-1'>
									<GiMeat />
								</div>
								<div className='m-1'>
									<GiCakeSlice />
								</div>
								<div className='m-1'>
									<BiCheese />
								</div>
								<div className='m-1'>
									<IoFishOutline />
								</div>
								<div className='m-1'>
									<GiSlicedSausage />
								</div>
							</div>
						</div>
					</div>
				</div>
				<article className='text-left leading-relaxed pt-10 pb-10 lg:text-justify lg:text-xl  '>
					<h3 className='text-white font-extrabold'>English Porter </h3>
					<p className='mt-3'>
						Una cerveza Ale que se caracteriza por su evidente color oscuro, que
						va desde el marrón rojizo al negro y por tener un sabor intenso en
						el cual destaca la malta y el lúpulo. Conocida como estilo porter,
						suele ser seca y tener un ABV que oscila entre 4,5% y 5,5% la cual
						le ha hecho ser una de las cervezas más populares.
					</p>
				</article>
				<div className='flex justify-center items-center bg-[#201f24] w-full mt-10 border-dashed border-2 border-sky-500'>
					<Image
						src={englishporter}
						alt='English Porter chakana'
						className='lg:h-[35rem] lg:w-auto pt-10 pb-10 lg:p-8 rounded-xl'
					/>
				</div>
				<article className='text-left leading-relaxed pt-10 pb-10 lg:text-justify lg:text-xl  '>
					<h3 className='text-white font-extrabold'>Su Origen</h3>
					<p className='mt-3'>
						Originada en Londres hace alrededor de 300 años, el estilo Porter
						evolucionó a partir de una cerveza Brown Ale muy popular en la época
						y a partir de entonces, continúo evolucionando debido a desarrollos
						tecnológicos de ingredientes y de preferencias de los consumidores
						que impulsaron estos cambios. A partir de 1800 se convirtió en un
						estilo muy popular y ampliamente exportado a todo el mundo hasta
						llegar a la Primera Guerra Mundial, llegando a desaparecer en la
						década de 1950.
					</p>
					<p>
						Fue introducida nuevamente a mediados de la década de 1970 con el
						inicio de la era de la cerveza artesanal. Se dice que su nombre
						inició por su popularidad entre la clase obrera de Londres muy
						popular entre los porteros (porter, en inglés) que trabajaban en los
						mercados locales, quienes solían entregar diversos productos a las
						puertas de los pubs
					</p>
				</article>
				<div className='flex justify-center items-center bg-[#201f24] w-full mt-10 border-dashed border-2 border-sky-500'>
					<div className='flex justify-center items-center w-full h-full'>
						<Image
							src={porter2}
							alt='imagen referencia www.drinkmemag.com chakana'
							className='lg:h-[35rem] lg:w-auto pb-10 pt-10 lg:p-8 rounded-xl'
						/>
					</div>
				</div>
				<article className='text-selft leading-relaxed pt-10 pb-10  lg:text-2xl  '></article>
				<h5 className='text-center  capitalize italic text-[0.8rem]m md:text-sm'>
					Nuestras Cervezas Killa Porter
				</h5>
				<div className='lg:flex gap-4 justify-center items-center lg:gap-1 p-2 max-w-[77rem]'>
					<Image
						src={killabotella}
						alt='Cerveza artesanal ecuatoriana quiteña chulla'
						className='pt-5 lg:pt-0 w-screen lg:w-1/3 rounded-sm'
					/>
					<Image
						src={killalata}
						alt='cerveza artesnal de quito sur de quito '
						className='pt-5 lg:pt-0 w-screen lg:w-1/3 rounded-sm'
					/>
					<Image
						src={killalata}
						alt='cerveza artesnal de quito sur de quito '
						className='pt-5 lg:pt-0 w-screen lg:w-1/3 rounded-sm'
					/>
				</div>
			</section>
		</div>
	);
};

export default Breweries;
