import { TypeAnimation } from 'react-type-animation';

import React from 'react';

const TypingHeader = () => {
	return (
		<TypeAnimation
			sequence={[
				'MENTE CLARA', // Types 'One'
				1000, // Waits 1s
				'CERVEZA', // Deletes 'One' and types 'Two'
				1000, // Waits 2s
				'CERVEZA OSCURA ', // Types 'Three' without deleting 'Two'
				() => {
					// console.log("Done typing!"); // Place optional callbacks anywhere in the array
				},
			]}
			wrapper='div'
			cursor={true}
			repeat={Infinity}
			style={{ fontSize: '1em' }}
		/>
	);
};

export default TypingHeader;
