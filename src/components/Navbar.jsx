import headerNavLinks from '../data/headerNavLinks';
import Link from 'next/link';

const LayoutWrapper = () => {
	return (
		<div className='flex items-center justify-center text-base leading-5 h-14'>
			<nav className='hidden sm:block '>
				{headerNavLinks.map((link) => (
					<Link
						key={link.title}
						href={link.href}
						className='p-1  text-secondary font-bold  sm:p-4 text-xl hover:bottom-1 hover:border-b-4 hover:text-quaternary border-quinary'>
						{link.title}
					</Link>
				))}
			</nav>
		</div>
	);
};

export default LayoutWrapper;
