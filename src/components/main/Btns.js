import { useEffect, useRef } from 'react';
import Anime from '../../asset/anime';

function Btns() {
	const numRef = useRef(6);
	const btnsRef = useRef(null);
	const posRef = useRef([]);
	const speed = useRef(500);

	const getPos = () => {
		posRef.current = [];
		const sections = btnsRef.current.parentElement.querySelectorAll('.scrollSection');
		for (const section of sections) posRef.current.push(section.offsetTop);
	};

	const activation = () => {
		const btns = btnsRef.current.children;
		const sections = btnsRef.current.parentElement.querySelectorAll('.scrollSection');
		const scroll = window.scrollY;
		const base = -window.innerHeight / 3;

		posRef.current.forEach((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				for (const section of sections) section.classList.remove('on');
				btns[idx].classList.add('on');
				sections[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);

		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	return (
		<ul className='scrollNavi' ref={btnsRef}>
			{Array(numRef.current)
				.fill()
				.map((_, idx) => {
					let isOn = '';
					idx === 0 && (isOn = 'on');
					return (
						<li
							key={idx}
							className={isOn}
							onClick={() => {
								new Anime(window, {
									prop: 'scroll',
									value: posRef.current[idx],
									duration: speed.current,
								});
							}}
						></li>
					);
				})}
		</ul>
	);
}

export default Btns;
