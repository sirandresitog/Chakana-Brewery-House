import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { IoMdMail } from 'react-icons/io';

const socialData = [
	{
		id: '1',
		title: 'facebook',
		href: 'https://www.facebook.com/ChakanaBrewhouse/',
		icon: <AiFillFacebook />,
	},
	{
		id: '2',
		title: 'instagram',
		href: 'https://www.instagram.com/chakanabrewhouse/?hl=es',
		icon: <FaInstagramSquare />,
	},
	{
		id: '5',
		title: 'mail',
		href: `mailto:ventas@chakanabrewhouse.com`,
		icon: <IoMdMail />,
	},
	{
		id: '3',
		title: 'TikTok',
		href: 'https://www.tiktok.com/@chakanabrewhouse',
		icon: <SiTiktok />,
	},
];

export default socialData;
