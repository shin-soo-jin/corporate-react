import { useRef } from 'react';

function Btns() {
	const numRef = useRef(6);
	return (
		<ul className='scrollNavi'>
			{Array(numRef.current)
				.fill()
				.map((_, idx) => {
					let isOn = '';
					idx === 0 && (isOn = 'on');
					return <li key={idx} className={isOn}></li>;
				})}
		</ul>
	);
}

export default Btns;
