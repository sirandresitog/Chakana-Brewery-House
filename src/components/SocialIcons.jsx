import socialData from '../data/socialData';
<div className='flex justify-center items-center mt-6 mb-6'></div>;

const SocialIcons = () => {
	function createElement(social) {
		return (
			<div
				key={social.id}
				className=' text-black text-center text-3xl '>
				<a
					aria-label={social.title}
					href={social.href}
					target='_blank'
					className='flex justify-center items-center flex-col ml-4'
					rel='noopener noreferrer'>
					<span className='hover:text-slate-500'> {social.icon}</span>
				</a>
			</div>
		);
	}
	return socialData.map((social) => createElement(social));
};

export default SocialIcons;
