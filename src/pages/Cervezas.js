import CardsBrewery from '../components/CardsBrewery';
import BreweryContent from '../components/BreweryContent';
import Head from 'next/head';

const pageBrewey = () => {
	return (
		<>
			<Head>
				<title>Cervezas</title>
			</Head>
			<div className=' text-gray-300 max-w-[70rem] lg:m-auto mr-3 ml-3'>
				<CardsBrewery />
				<BreweryContent />
			</div>
		</>
	);
};

export default pageBrewey;
