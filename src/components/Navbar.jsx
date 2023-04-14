import headerNavLinks from '../data/headerNavLinks';
import Link from 'next/link';
//console.log(headerNavLinks);

const LayoutWrapper = () => {
	return (
		<div className='flex items-center justify-center text-base leading-5 h-14'>
			<nav className='hidden sm:block '>
				{headerNavLinks.map((link) => (
					<Link
						key={link.title}
						href={link.href}
						className='p-1  text-white font-bold  sm:p-4 text-xl hover:bottom-1 hover:border-b-4 hover:text-purple-950 border-slate-950'>
						{link.title}
					</Link>
				))}
			</nav>
		</div>
	);
};

export default LayoutWrapper;
