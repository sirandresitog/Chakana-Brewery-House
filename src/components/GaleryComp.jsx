import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5826e0171053757.64681a3ab3c3a.png',
		thumbnail: '',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/24d343171053811.64681ab647933.png',
		thumbnail: '',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/bd2f37171053867.64681b2fd4b18.png',
		thumbnail: '',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/af17e6171053953.64681c0e24518.png',
		thumbnail: '',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/afd7b9171058305.64684617472cc.png',
		thumbnail: '',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/dcf587171058441.646846eeebf14.png',
		thumbnail: '',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/dd540c171058551.646847c182277.png',
		thumbnail: '',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e3ca5f171058579.6468480a85ef2.png',
		thumbnail: '',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/078336171058595.6468483b9fa2b.png',
		thumbnail: '',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/27f3d9171058641.646848723e33c.png',
		thumbnail: '',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/7eae7e171058707.646848d0c25aa.png',
		thumbnail: '',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/598c8e171058753.6468491bc0aea.png',
		thumbnail: '',
	},
];
const GaleryComp = () => {
	return (
		<div className='flexjustify-center lg:h-screen'>
			<ImageGallery
				items={images}
				infinite={true}
				showFullscreenButton={true}
				showPlayButton={false}
				showThumbnails={false}
				showIndex={true}
				fullscreen={true}
				className=' h-[800px] '
			/>
		</div>
	);
};

export default GaleryComp;
