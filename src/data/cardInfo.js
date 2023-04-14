import killa from '../img/killa.webp';
import inti from '../img/inti.webp';
import quisato from '../img/quisato.webp';
import viracocha from '../img/virachocha_1.webp';

const cardsInfo = [
	{
		id: 1,
		name: 'Killa Porter',
		img: killa,
		type: 'Cerveza Oscura',
		alt: 'Logotipo Cerveza Oscura Killa Porter Chakana brew House',
		color: 'bg-gray-900',
	},
	{
		id: 2,
		name: 'Inti Blode Ale ',
		img: inti,
		type: 'Cerveza Rubia',
		alt: 'Logotipo Inti Blonde Ale porter Chakana brew House',
		color: 'bg-rubio',
	},
	{
		id: 3,
		name: 'Viracocha I:P:A',
		img: viracocha,
		type: 'Cerveza Dorada',
		alt: 'Logotipo Cerveza Dorada Viracocha I.P.A Chakana brew House',
		color: 'bg-dorado',
	},
	{
		id: 4,
		name: 'Quisato Red Ale',
		img: quisato,
		type: 'Cerveza Negra',
		alt: 'Logotipo Cerveza Negra Quisato Stout Chakana brew House',
		color: 'bg-red-900',
	},
];

const _cardsInfo = cardsInfo;
export { _cardsInfo as cardsInfo };
