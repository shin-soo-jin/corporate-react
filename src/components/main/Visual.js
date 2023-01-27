import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';
import { useEffect, useRef, useState } from 'react';
import Anime from '../../asset/anime';

function Visual() {
	const publicUrl = process.env.PUBLIC_URL;
	const pageNum = useRef(4);
	const btnStart = useRef(null);
	const btnStop = useRef(null);
	const interval = useRef(null);
	const bar = useRef(null);
	const txt1 = useRef(null);
	const txt2 = useRef(null);
	const [Index, setIndex] = useState(0);
	const [RollingOn, setRollingOn] = useState(0);
	const len = pageNum.current - 1;
	const time = 5000;

	const activation = (index) => {
		setIndex(index);
	};

	const nextSlide = useCallback(() => {
		Index < len ? setIndex(Index + 1) : setIndex(0);
	}, [Index, len]);

	const prevSlide = () => {
		Index === 0 ? setIndex(len) : setIndex(Index - 1);
	};

	const startRolling = useCallback(() => {
		interval.current = setInterval(nextSlide, time);
		bar.current.style.display = 'block';
		bar.current.style.width = '0%';
		progress();

		setRollingOn(0);
	}, [nextSlide]);

	const stopRolling = () => {
		clearInterval(interval.current);
		bar.current.style.display = 'none';

		setRollingOn(1);
	};

	const progress = () => {
		new Anime(bar.current, {
			prop: 'width',
			value: '100%',
			duration: time,
		});
	};

	const textAni = (txt) => {
		const strTxt = txt.current.innerText;
		let tags = '';

		for (const el of strTxt) tags += `<span>${el}</span>`;
		txt.current.innerHTML = tags;

		const span = txt.current.querySelectorAll('span');
		span.forEach((el, idx) => {
			if (el.innerText.length === 0) el.style.width = '20px';
			el.style.opacity = '1';
			el.style.transform = 'translateX(0%)';
			el.style.transitionDelay = 0.1 * (idx / 2) + 's';
		});
	};

	useEffect(() => {
		textAni(txt1);
		textAni(txt2);
	}, [Index]);

	useEffect(() => {
		startRolling();
		return () => stopRolling();
	}, [startRolling]);

	return (
		<figure id='visual' className='scrollSection'>
			<ul className='slider'>
				{Array(pageNum.current)
					.fill()
					.map((_, idx) => {
						return (
							<li key={idx} className={Index === idx ? 'on' : ''}>
								<img src={`${publicUrl}/img/visual0${idx + 1}.jpg`} alt='visual' />
							</li>
						);
					})}
			</ul>

			<div className='inner'>
				<div className='btns'>
					<ul className='sliderPage'>
						{Array(pageNum.current)
							.fill()
							.map((_, idx) => {
								return (
									<li
										key={idx}
										className={Index === idx ? 'on' : ''}
										onClick={() => {
											activation(idx);
										}}
									/>
								);
							})}
					</ul>
					<button className='sliderBtn sliderNext' onClick={nextSlide}>
						<img src={`${publicUrl}/img/next.png`} alt='다음 슬라이드 버튼' />
					</button>
					<button className='sliderBtn sliderPrev' onClick={prevSlide}>
						<img src={`${publicUrl}/img/prev.png`} alt='이전 슬라이드 버튼' />
					</button>

					<span className='sliderRollingBtn'>
						<i className={RollingOn === 0 ? 'on' : ''} ref={btnStart} onClick={startRolling}>
							<FontAwesomeIcon icon={faPlay} />
						</i>
						<i className={RollingOn === 1 ? 'on' : ''} ref={btnStop} onClick={stopRolling}>
							<FontAwesomeIcon icon={faPause} />
						</i>
					</span>

					<div className='bar'>
						<div className='barInner' ref={bar}></div>
					</div>
				</div>

				<div className='text'>
					{Index === 0 && (
						<>
							<h2>WELCOME TO YOUR NEW WEBSITE</h2>
							<p ref={txt1}>WE CREATE</p>
							<p ref={txt2}>CAREERS</p>
							<button className='btn'>SEE OUR LATEST WORK</button>
						</>
					)}

					{Index === 1 && (
						<>
							<h2>TOTAL IT SOLUTION</h2>
							<p ref={txt1}>BEST IT</p>
							<p ref={txt2}>SOLUTION AGENCY</p>
							<button className='btn'>SEE OUR LATEST WORK</button>
						</>
					)}

					{Index === 2 && (
						<>
							<h2>BUILT AS A FRAMEWORK</h2>
							<p ref={txt1}>WE ARE</p>
							<p ref={txt2}>A CREATIVE AGENCY</p>
							<button className='btn'>SEE OUR LATEST WORK</button>
						</>
					)}

					{Index === 3 && (
						<>
							<h2>DIGITAL EXPERIENCE</h2>
							<p ref={txt1}>WE PROVIDE</p>
							<p ref={txt2}>THE BEST VALUE</p>
							<button className='btn'>SEE OUR LATEST WORK</button>
						</>
					)}
				</div>
			</div>
		</figure>
	);
}

export default Visual;
