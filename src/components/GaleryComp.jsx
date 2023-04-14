import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import chakanalab from '../assets/img/Chakana-Lab.jpg';
const images = [
	{
		original:
			'https://i.pinimg.com/750x/78/f2/40/78f2405d6e92805f6c0c2dbb2b8433f1.jpg',
		thumbnail:
			'https://i.pinimg.com/736x/46/1e/60/461e60eeeb21f49d4705c2f1c952f94f.jpg',
	},
	{
		original:
			'https://i.pinimg.com/750x/33/05/6c/33056c725c6a1e3a32955cee151a90fe.jpg',
		thumbnail:
			'https://i.pinimg.com/736x/8a/78/cb/8a78cbaea6ee3dca7d4f0290deed122f.jpg',
	},
	{
		original:
			'https://i.pinimg.com/750x/3b/eb/85/3beb85426567c9b98abc32c6c86c7617.jpg',
		thumbnail:
			'https://i.pinimg.com/736x/07/bb/06/07bb06d00b054d1319fb18fe5ec922d1.jpg',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d8770b150840771.63024519a689b.png',
		thumbnail:
			'https://i.pinimg.com/236x/e0/da/42/e0da4285dea3e17f4960c66238cb6254.jpg',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/0287ce150840771.Y3JvcCwxMDY5LDgzNiw4Nyww.png',
		thumbnail:
			'https://i.pinimg.com/236x/c1/aa/20/c1aa207c49c0bf06a202406930aecdd7.jpg',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/fa5e85166269281.6415370716bdf.jpg',
		thumbnail:
			'https://i.pinimg.com/564x/6d/64/9e/6d649ee1404ce4f8661e149ac2fa67ed.jpg',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/279555166269831.64153b556396d.png',
		thumbnail:
			'https://i.pinimg.com/736x/27/58/2b/27582b40b56af2cc770ba33a61ddccfb.jpg',
	},
	{
		original:
			'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e1e594166268905.6415338584cbd.jpg',
		thumbnail:
			'https://i.pinimg.com/736x/93/ce/9d/93ce9d06adb25f1f04261dea9d05f352.jpg',
	},
];
const GaleryComp = () => {
	return (
		<div>
			<ImageGallery items={images} infinite={true} />
		</div>
	);
};

export default GaleryComp;
