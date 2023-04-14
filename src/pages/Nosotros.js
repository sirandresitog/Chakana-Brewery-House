import AboutUs from '../components/AboutUs';
import Head from 'next/head';
const page = () => {
	return (
		<div className='text-slate-50 max-w-[70rem] lg:m-auto'>
			<Head>
				<title>Nosotros</title>
			</Head>
			<AboutUs />
		</div>
	);
};

export default page;
