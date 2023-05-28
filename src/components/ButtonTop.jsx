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
	};
	return (
		<div>
			<ScrollToTop
				smooth
				style={btntop}
				component={<IoIosArrowUp className=' hover:text-oscuro ' />}
				className=' hover:text-black cursor-pointer '
			/>
		</div>
	);
};

export default ButtonTop;
