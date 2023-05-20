import { IoIosArrowUp } from 'react-icons/io';
import ScrollToTop from 'react-scroll-to-top';

const ButtonTop = () => {
	const btntop = {
		background: 'black',
		borderRadius: '12px',
		transform: 'translateY(-30px)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'white',
		padding: '10px',
		fontSize: '22px',
		cursor: 'none',
	};
	return (
		<div>
			<ScrollToTop
				smooth
				style={btntop}
				component={<IoIosArrowUp className=' hover:text-oscuro text-9xl' />}
				className='hover:bg-white hover:text-black'
			/>
		</div>
	);
};

export default ButtonTop;
