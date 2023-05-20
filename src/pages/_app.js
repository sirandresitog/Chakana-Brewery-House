import '@/styles/globals.css';

import Navbar from '../components/Navbar';
import ButtonTop from '../components/ButtonTop';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
	return (
		<div className='overflow-x-hidden'>
			<header className='bg-navbar h-20  flex justify-center items-center '>
				<Navbar />
			</header>
			<MobileNav />
			<ButtonTop />
			<Component {...pageProps} />
			<footer className='bg-yellow-300 w-full h-full '>
				<Footer />
			</footer>
		</div>
	);
}
