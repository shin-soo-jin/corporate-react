import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';

function Btntop() {
	const btnTop = useRef(null);

	const activation = () => {
		const scroll = window.scrollY;
		const pos = document.body.scrollHeight / 2;
		scroll >= pos ? btnTop.current.classList.add('on') : btnTop.current.classList.remove('on');
	};

	useEffect(() => {
		window.addEventListener('scroll', activation);
		return () => window.removeEventListener('scroll', activation);
	}, []);
	return (
		<button
			className='btnTop'
			ref={btnTop}
			onClick={() => {
				window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
			}}
		>
			<FontAwesomeIcon icon={faArrowUp} />
			<span>TOP</span>
		</button>
	);
}

export default Btntop;
