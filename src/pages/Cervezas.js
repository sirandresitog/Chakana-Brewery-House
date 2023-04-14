import CardsBrewery from '../components/CardsBrewery';
import BreweryContent from '../components/BreweryContent';
import Head from 'next/head';

const pageBrewey = () => {
	return (
		<>
			<Head>
				<title>Cervezas</title>
			</Head>
			<div className=' text-cyan-50 max-w-[70rem] lg:m-auto '>
				<CardsBrewery />
				<BreweryContent />
			</div>
		</>
	);
};

export default pageBrewey;
