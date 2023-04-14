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
			{/* img-breweries-content */}

			<section className='flex flex-col justify-center text-center flex-wrap'>
				<h3 className='  lg:text-4xl text-2xl md:text-4xl sm:m-10'>
					En nuestra cervecería tenemos cuatro estilos de cerveza
				</h3>

				<div className='lg:flex justify-between items-center gap-2 p-2 max-w-[77rem]'>
					<Image
						src={contenido1}
						alt='Cerveza artesanal ecuatoriana quiteña chulla'
						className='w-auto lg:w-1/2 rounded-sm'
					/>
					<Image
						src={contenido2}
						alt='cerveza artesnal de quito sur de quito '
						className='w-auto lg:w-1/2 rounded-sm'
					/>
				</div>
				<article className='text-justify leading-relaxed pt-10 pb-10 lg:text-2xl    '>
					<p>
						En nuestra micro cervecería “Chakana Brewhouse” elaboramos nuestras
						recetas basándonos en la Guía de estilos BJCP 2021.Cuidamos todo
						nuestro proceso desde el ajuste del perfil de agua, maltas,
						levaduras y lúpulos hasta obtener el producto final una cerveza muy
						buena en sabor aroma y cuerpo.
					</p>
					<p className='pt-6'>
						Aquí te contamos un poco de historia sobre cada uno de los estilos
						realizados a nivel mundial y los que elaboramos comercialmente.
					</p>
				</article>
				<div className='flex justify-center text-center flex-wrap m-auto pt-8 '>
					{/* video */}
					{/* <div className='flex justify-center flex-wrap md:flex-nowrap gap-3 bg-white md:rounded-xl max-w-[77rem]'>
						<div className='h-[580px] w-full md:w-[220px] lg:w-[420px] m-2'>
							<iframe
								className='h-[580px] w-full'
								src='https://player.vimeo.com/video/808927626?h=c77cc875a2?autoplay=1'
								allow='autoplay'
								allowFullScreen
								muted={true}></iframe>
						</div>
						<div className='h-[580px] w-full md:w-[220px] lg:w-[420px] m-2'>
							<iframe
								className='w-full h-full'
								src='https://player.vimeo.com/video/809172748?h=0617756271'
								allow='autoplay'
								allowFullScreen
								muted={true}></iframe>
						</div>
						<div className='h-[580px] w-full md:w-[220px] lg:w-[420px] m-2'>
							<iframe
								className='w-full h-full'
								src='https://player.vimeo.com/video/809187211'
								allow='autoplay'
								allowFullScreen
								muted={true}></iframe>
						</div>
					</div> */}

					{/* Brewery Details Inti */}

					<div
						id='inti'
						className=' lg:grid grid-cols-2 flex-wrap bg-rubio rounded-xl mt-20'>
						<Image
							src={portadainti}
							alt='Sello chakana Brewhouse'
							className='lg:h-full'
						/>
						<div className=' flex justify-center flex-col text-justify p-4 md:p-20'>
							<div className='flex justify-center -translate-y-3 md:-translate-y-4 lg:-translate-y-6'>
								<h3 className='letra border bg-rubio border-black md:text-5xl font-extrabold  hidden md:flex'>
									Cerveza Rubia
								</h3>
								<h3 className='letra wave rojo text-rubio  md:text-5xl font-extrabold '>
									Cerveza Rubia
								</h3>
							</div>
							<p className='md:mt-20 mt-4 '>
								<b>Caracteristicas</b>:Una blonde ale de cuerpo ligero. 6,5% de
								alcohol, baja en amargor y refrescante, su sabor es maltoso, un
								poco dulce al gusto y sutil aroma a levadura.
							</p>
							<h4>
								<b>Maridaje:</b>Ensaladas,Quesos,Mariscos,Embutidos
							</h4>
							<br />
							<div className='flex  items-center text-4xl justify-center '>
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
					{/* description Blonde Ale */}
					<article className='text-justify leading-relaxed pt-10 pb-10  lg:text-2xl  '>
						<h3 className='text-primary font-bold'>Belgian Blonde Ale</h3>
						<p>
							Ya sea para novatos que incursionan al mundo de la cerveza
							artesanal o para conocedores del mundo cervecero o simplemente
							para quienes les apetece beber una cerveza clara en días
							calurosos, la blonde ale es la adecuada.
						</p>
						<p>
							La blonde ale es uno de los muchos estilos disponibles en el
							mercado, con la particularidad de que su nombre deriva de su
							característico color rubio, que va de un amarillo pálido hasta un
							dorado intenso.
						</p>
					</article>
					<Image
						src={blodeImg}
						alt='imagen blonde referencia cerveza chakana chakana'
					/>
					<article className='text-justify leading-relaxed pt-10 pb-10  lg:text-2xl  '>
						<h5 className='text-primary font-bold'>Su origen</h5>
						<p>
							La historia de la blonde ale comienza con las tradiciones
							centenarias relacionadas con el linaje de la pale ale y de la
							kölsch. Su nacimiento fue producto de la elaboración de una
							versión más ligera de la pale ale llamada ale espumosa, que se
							elaboraba a mediados de siglo XIX.
						</p>
						<p>
							Hoy en día la blonde ale se elabora en todo el mundo, desde
							Bélgica donde tiene su particular característica hasta Brasil,
							Francia y EE.UU. Cada una tiene ligeras variaciones, generalmente
							centradas en ingredientes nativos de cada país.
						</p>
					</article>
					<Image
						src={belgianblonde}
						alt='blog.escuelacervecera.com'
						className='h-[25rem] w-auto'
					/>
					<article className='text-justify leading-relaxed pt-10 pb-10  lg:text-2xl  '>
						<h5 className='text-primary font-bold'>Evolución</h5>
						<p>
							En comparación con muchos estilos belgas tradicionales como las
							cervezas sour o las trapenses, la blonde Ale es relativamente
							reciente y actualmente existen en el mercado diferentes
							interpretaciones del estilo. Algunas han perdido gran parte de su
							carácter original para atraer a un público más amplio.
						</p>
					</article>
					<h5>nuestras cerevezas Blonde Ale</h5>

					{/* img-breweries-content-inti */}
					<div className='lg:flex justify-center items-center gap-1 p-2 max-w-[77rem]'>
						<Image
							src={intibotella}
							alt='Cerveza artesanal ecuatoriana quiteña chulla'
							className='w-screen lg:w-1/3 rounded-sm'
						/>
						<Image
							src={intilata}
							alt='cerveza artesanal de quito sur de quito '
							className='w-screen lg:w-1/3 rounded-sm'
						/>
						<Image
							src={intilata}
							alt='cerveza artesnal de quito sur de quito '
							className='w-screen lg:w-1/3 rounded-sm'
						/>
					</div>
					{/* Brewery Details Quisato */}
					<div
						id='quisato'
						className='lg:grid grid-cols-2 flex-wrap bg-red-900 rounded-xl mt-20'>
						<Image
							src={portadaquisato}
							alt=''
							className='lg:h-full'
						/>
						<div className=' flex justify-center flex-col text-justify p-2 md:p-20'>
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
								<b>Maridaje:</b>Postres,Quesos,Mariscos,Pollo,Embutidos
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
					<article className='text-justify leading-relaxed pt-10 pb-10  lg:text-2xl  '>
						<h3 className='text-primary font-bold'>Irish Red Ale</h3>
						<p>
							Es una cerveza de fermentación alta, fácil de beber, tiene un
							color ámbar-rojizo, transparente y con una espuma blanquecina a
							color canela de retención media. Su sabor es bastante neutral pero
							inclinado hacia las maltas, puede contener algunas notas a
							caramelo o bizcocho, históricamente más derivadas del proceso de
							elaboración que del uso de maltas caramelizadas. El aroma es dulce
							a grano o caramelo tostado y con muy baja o ninguna presencia de
							lúpulo que de existir le otorgaría notas florales o terrosas.
						</p>
						<p>
							. Tiene un cuerpo medio, de final medio-seco con notas amargas por
							la malta tostada que junto a su graduación alcohólica moderada
							oscila entre 3,8 y el 5 %, invita a beberla a sorbos. Algunas
							versiones americanas exhiben mayor grado alcohólico y una
							“reinvención” del estilo tradicional en Irlanda está apostando por
							otorgarles mayor amargor.
						</p>
					</article>
					<Image
						src={irishred}
						alt='imagen blonde referencia cerveza chakana chakana'
					/>
					<article className='text-justify leading-relaxed pt-10 pb-10  lg:text-2xl  '>
						<h5 className='text-primary font-bold'>Su origen</h5>
						<p>
							La elaboración de este estilo se la debemos a los Vikingos desde
							aquellos días que ocuparon Irlanda y llevaron sus estilos de
							cerveza a esas tierras. En un poema del siglo VIII se habla de
							esta cerveza de una manera diferente a como la conocemos hoy en
							día. Las primeras Red Ale que se hicieron como las conocemos hoy
							en día datan del año 1710. Su elaboración requiere desde entonces
							una cantidad menor de lúpulo y mayor de malta.
						</p>
						<p>
							Aunque su nombre nos haga pensar que por lógica es el estilo
							favorito de los irlandeses, la realidad es que no. En dicho país
							siempre ha dominado el consumo de las cervezas Porter y las ale
							muy obscuras ya que su historia en Irlanda tiene más años que la
							misma Irish Red Ale.
						</p>
					</article>
					<Image
						src={irisale}
						alt='www.boulevard.com'
						className='h-[25rem] w-auto'
					/>
					<article className='text-justify leading-relaxed pt-10 pb-10  lg:text-2xl  '>
						<h3 className='text-primary font-bold'>Evolución</h3>
						<p>
							A día de hoy, podemos encontrar un par de referencias más o menos
							extendidas a lo largo del planeta. Una de ellas es Murphys Irish
							Red y la otra Smithwicks de Kilkenn. Es fácil encontrar cualquiera
							de ellas en casi cualquier pub o tienda cervecera, debido a que se
							han enfocado en la exportación. Sin embargo, esta última ahora
							emplea jarabe de maíz en sus recetas. Otras casas de referencia
							por su red ales son O Haras y Porterhouse, pero todavía no se han
							expandido en la misma medida.
						</p>
					</article>
					<h3>Nuestras cerveceras Irish Red</h3>

					{/* img-breweries-content-quisato */}

					<div className='lg:flex justify-center items-center gap-1 p-2 max-w-[77rem]'>
						<Image
							src={quisbotella}
							alt='Cerveza artesanal ecuatoriana quiteña chulla'
							className='w-screen lg:w-1/3 rounded-sm'
						/>
						<Image
							src={quislata}
							alt='cerveza artesnal de quito sur de quito '
							className='w-screen lg:w-1/3 rounded-sm'
						/>
						<Image
							src={quislata}
							alt='cerveza artesnal de quito sur de quito '
							className='w-screen lg:w-1/3 rounded-sm'
						/>
					</div>

					{/* Brewery Details Viracocha */}
					<div
						id='viracocha'
						className='lg:grid grid-cols-2 flex-wrap rounded-xl bg-dorado mt-20 '>
						<Image
							src={portadaviracocha}
							alt=''
							className='lg:h-full'
						/>
						<div className=' flex justify-center flex-col text-justify p-2 md:p-20'>
							<div className='flex justify-center -translate-y-3 md:-translate-y-4 lg:-translate-y-6'>
								<h3 className='letra border bg-dorado border-black md:text-5xl font-extrabold hidden md:flex '>
									Cerveza Dorada
								</h3>
								<h3 className='letra wave rojo text-dorado  md:text-5xl font-extrabold '>
									Cerveza Dorada
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
					<article className='text-justify leading-relaxed pt-10 pb-10  lg:text-2xl  '>
						<h3 className='text-primary font-bold'>IPA India Pale Ale</h3>
						<p>
							Una IPA es una cerveza de alta graduación alcohólica la cual puede
							oscilar entre 4 y 9% ABV. Posee un amargor y aroma intensos y
							cierta complejidad en el paladar. El nombre hace referencia a
							India Pale Ale, un estilo cervecero que se caracteriza por la alta
							concentración de lúpulo en su preparación.
						</p>
						<p>
							Son cervezas de fermentación alta, por lo general presentan un
							color pálido anaranjado de menor o mayor intensidad, aunque hoy en
							día existen muchas variantes. El lúpulo es el protagonista
							principal, proporcionando un amargor que va de intensidad media a
							alta, pero que además expresan una serie de sabor particulares y
							matices aromáticos.
						</p>
						<p>
							Fue introducida nuevamente a mediados de la década de 1970 con el
							inicio de la era de la cerveza artesanal. Se dice que su nombre
							inició por su popularidad entre la clase obrera de Londres muy
							popular entre los porteros (porter, en inglés) que trabajaban en
							los mercados locales, quienes solían entregar diversos productos a
							las puertas de los pubs.
						</p>
					</article>
					<Image
						src={palecerveza}
						alt='IPA India Pale Ale'
						className='h-[50rem] w-auto'
					/>

					<article className='text-justify leading-relaxed pt-10 pb-10  lg:text-2xl  '>
						<h3 className='text-primary font-bold'>Su origen </h3>
						<p>
							En 1639, la Compañía Británica de las Indias Orientales consiguió
							establecerse en la India para capitalizar el comercio de especias.
							Con el intercambio comercial comenzaron las idas y venidas. Una
							travesía que podía alargarse más de 300 días, rodeando el
							continente Africano, y que suponía atravesar cuatro zonas
							climáticas distintas. Sin refrigeración ni pasteurización posible,
							las cervezas se echaban a perder antes de llegar a la mitad del
							camino. Y a partir de ahí, el viaje se hacía mucho, pero que mucho
							más largo.
						</p>
						<p>
							¡Había que hacer algo! Los maestros cerveceros se pusieron manos a
							la obra para lograr lo que parecía imposible: crear una cerveza
							capaz de sobrevivir contra viento y marea. Y lo consiguieron.
						</p>
						<p>
							La solución fue tan sencilla como brillante: aumentar la
							graduación alcohólica y añadir una mayor cantidad del lúpulo, del
							que ya se conocían sus propiedades antisépticas y conservantes.
							Este ingrediente dio a la cerveza un peculiar sabor, mucho más
							amargo y un aroma intenso.
						</p>
						<p>
							El resultado fue un estilo de cerveza no solo capaz de sobrevivir
							a la travesía, sino también a los 90 años del Raj Británico. El
							fenómeno craft americano comenzó a recuperar este capítulo de la
							historia cervecera popularizando de nuevo el consumo de las IPAS,
							que viven hoy su máxima expresión creativa
						</p>
					</article>
					<div className='lg:flex justify-between items-center gap-4 p-2 max-w-[77rem] flex-wrap lg:flex-nowrap lg:h-[30rem]'>
						<Image
							src={ipa2}
							alt='"Ruta desde Inglaterra a la India en el siglo XIX..'
							className='w-auto lg:w-1/2  rounded-sm h-94 bg-clip-content bg-cover lg:h-[30rem]'
						/>
						<Image
							src={indianpale}
							alt='India Pale Ale Chakana '
							className='w-auto lg:w-1/2  rounded-sm h-94 bg-clip-content bg-cover lg:h-[30rem] mt-4 md:mt-0'
						/>
					</div>
					{/* img-breweries-content-viracocha */}
					<h5 className='mt-20'>Nuestras Cervezas I.P.A Pale Ale </h5>
					<div className='lg:flex justify-center items-center gap-2 p-2 max-w-[77rem] '>
						<Image
							src={viracbotella}
							alt='Cerveza artesanal ecuatoriana quiteña chulla'
							className='w-screen lg:w-1/3 rounded-sm'
						/>
						<Image
							src={viraclata}
							alt='cerveza artesnal de quito sur de quito '
							className='w-screen lg:w-1/3 rounded-sm'
						/>
						<Image
							src={viraclata}
							alt='cerveza artesnal de quito sur de quito '
							className='w-screen lg:w-1/3 rounded-sm'
						/>
					</div>

					{/* Brewery Details Killa */}
					<div
						id='killa'
						className='lg:grid grid-cols-2 flex-wrap rounded-xl bg-gray-900 '>
						<Image
							src={portadaKilla}
							alt=''
							className='lg:h-full'
						/>
						<div className=' flex justify-center flex-col text-justify p-2 md:p-20'>
							<div className='flex justify-center -translate-y-3 md:-translate-y-4 lg:-translate-y-6'>
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

					<article className='text-justify leading-relaxed pt-10 pb-10  lg:text-2xl  '>
						<h3 className='text-primary font-bold'>English Porter </h3>
						<p>
							Una cerveza Ale que se caracteriza por su evidente color oscuro,
							que va desde el marrón rojizo al negro y por tener un sabor
							intenso en el cual destaca la malta y el lúpulo. Conocida como
							estilo porter, suele ser seca y tener un ABV que oscila entre 4,5%
							y 5,5% la cual le ha hecho ser una de las cervezas más populares.
						</p>
					</article>
					<Image
						src={englishporter}
						alt='English Porter chakana'
					/>
					<article className='text-justify leading-relaxed pt-10 pb-10  lg:text-2xl  '>
						<h3 className='text-primary font-bold'>Su Origen</h3>
						<p>
							Originada en Londres hace alrededor de 300 años, el estilo Porter
							evolucionó a partir de una cerveza Brown Ale muy popular en la
							época y a partir de entonces, continúo evolucionando debido a
							desarrollos tecnológicos de ingredientes y de preferencias de los
							consumidores que impulsaron estos cambios. A partir de 1800 se
							convirtió en un estilo muy popular y ampliamente exportado a todo
							el mundo hasta llegar a la Primera Guerra Mundial, llegando a
							desaparecer en la década de 1950.
						</p>
						<p>
							Fue introducida nuevamente a mediados de la década de 1970 con el
							inicio de la era de la cerveza artesanal. Se dice que su nombre
							inició por su popularidad entre la clase obrera de Londres muy
							popular entre los porteros (porter, en inglés) que trabajaban en
							los mercados locales, quienes solían entregar diversos productos a
							las puertas de los pubs
						</p>
					</article>
					<Image
						src={porter2}
						alt='drinkmemag.com chakana'
					/>

					<article className='text-justify leading-relaxed pt-10 pb-10  lg:text-2xl  '>
						<h3 className='text-primary font-bold'>Su evolución </h3>
						<p>
							Con el paso del tiempo, las técnicas de elaboración fueron
							cambiando. Diversos factores influyeron en ello como fue el
							aumento de los impuestos lo que causo que se reduzcan costos en
							sus insumos realizando versiones más ligeras. Con la invención del
							tostador de malta en 1817 hizo que la malta negra fuese más
							asequible. En 1776 la cerveza porter llegó a irlanda y tan solo
							unos años después Guinness ya estaba produciéndola. Los irlandeses
							realizaron una gran cantidad de versiones que, utilizando sobre
							todo malta pálida con suficiente malta negra para darle su color
							oscuro, se caracterizaron por su sabor quemado y torrefacto. Una
							de las versiones mas populares es la extra stout que básicamente
							la Guinness que conocemos hoy en día.
						</p>
						<p>
							La porter inglesa, tuvo sus propias versiones en América y Rusia
							hacia finales del siglo XVII y durante el siglo XIX; de hecho, por
							algún tiempo los términos “porter” y “cerveza” fueron usados
							indistintamente como sinónimos. La variante rusa fue conocida como
							stout imperial, probablemente debido a su consumo por parte del
							cuerpo diplomático inglés. Hacia finales del siglo XVIII, la
							cerveza porter llegó a América gracias a los ingleses, donde se
							vio modificada y llamada porter o stout indistintamente, gozo de
							mucha popularidad hasta inicios de siglo pasado, cuando
							prácticamente desapareció a causa de la prohibición.
						</p>
					</article>
					{/* img-breweries-content- killa */}
					<div className='lg:flex justify-center items-center gap-1 p-2'>
						<Image
							src={killabotella}
							alt='Cerveza artesanal ecuatoriana quiteña chulla'
							className='w-screen lg:w-1/3 rounded-sm'
						/>
						<Image
							src={killalata}
							alt='cerveza artesnal de quito sur de quito '
							className='w-screen lg:w-1/3 rounded-sm'
						/>
						<Image
							src={killalata}
							alt='cerveza artesnal de quito sur de quito '
							className='w-screen lg:w-1/3 rounded-sm'
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Breweries;
