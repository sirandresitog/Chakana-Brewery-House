import SocialIcons from './SocialIcons';
const Footer = () => {
	return (
		<div className='flex justify-center flex-col flex-wrap items-center  text-black text-center mt-20 text-[15px]'>
			<div>
				<h4 className='font-bold'>{` Quito-Ecuador   ${new Date().getFullYear()}  `}</h4>
				<h5 className='font-bold'>
					Todos los derechos reservados © CHAKANA BREWERY HOUSE-ECUADOR
				</h5>
				<div className='flex justify-center items-center flex-nowrap mt-4 mb-4'>
					<SocialIcons />
				</div>
				<h5>
					Power by: <a href='https://github.com/sirandresitog'>sirandresitog</a>
				</h5>
			</div>
		</div>
	);
};

export default Footer;
