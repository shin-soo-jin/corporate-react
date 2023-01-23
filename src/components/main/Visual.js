import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';

function Visual() {
	const publicUrl = process.env.PUBLIC_URL;
	const frameRef = useRef(null);
	const pageRef = useRef(null);
	const btnStartRef = useRef(null);
	const btnStopRef = useRef(null);
	const pageNumRef = useRef(4);

	const interval = 5000;
	let num = 0;
	let timer = null;

	const activation = (index) => {
		const frames = frameRef.current.children;
		const pages = pageRef.current.children;

		for (const frame of frames) frame.classList.remove('on');
		for (const page of pages) page.classList.remove('on');
		frames[index].classList.add('on');
		pages[index].classList.add('on');

		num = index;
	};

	const nextBtn = () => {
		const frames = frameRef.current.children;
		let len = frames.length - 1;

		num < len ? num++ : (num = 0);
		activation(num);
	};

	const prevBtn = () => {
		const frames = frameRef.current.children;
		let len = frames.length - 1;

		num === 0 ? (num = len) : num--;
		activation(num);
	};

	const startRolling = () => {
		timer = setInterval(nextBtn, interval);

		btnStartRef.current.classList.add('on');
		btnStopRef.current.classList.remove('on');
	};

	const stopRolling = () => {
		clearInterval(timer);

		btnStartRef.current?.classList.remove('on');
		btnStopRef.current?.classList.add('on');
	};

	useEffect(() => {
		startRolling();

		return () => stopRolling();
	}, []);

	return (
		<figure id='visual' className='scrollSection'>
			<ul className='slider' ref={frameRef}>
				{Array(pageNumRef.current)
					.fill()
					.map((_, idx) => {
						let isOn = '';
						idx === 0 && (isOn = 'on');
						return (
							<li key={idx} className={isOn}>
								<img src={`${publicUrl}/img/${idx + 1}visual.jpg`} alt='visual' />
								{/* <img src={`${publicUrl}/img/visual${idx + 1}.jpg`} alt='visual' /> */}
							</li>
						);
					})}
			</ul>

			<div className='inner'>
				<div className='btns'>
					<ul className='sliderPage' ref={pageRef}>
						{Array(pageNumRef.current)
							.fill()
							.map((_, idx) => {
								let isOn = '';
								idx === 0 && (isOn = 'on');
								return (
									<li
										key={idx}
										className={isOn}
										onClick={() => {
											activation(idx);
										}}
									/>
								);
							})}
					</ul>

					<button className='sliderBtn sliderNext' onClick={nextBtn}>
						<img src={`${publicUrl}/img/next.png`} alt='다음 슬라이드 버튼' />
					</button>
					<button className='sliderBtn sliderPrev' onClick={prevBtn}>
						<img src={`${publicUrl}/img/prev.png`} alt='이전 슬라이드 버튼' />
					</button>
					<span className='sliderRollingBtn'>
						<FontAwesomeIcon icon={faPlay} ref={btnStartRef} onClick={startRolling} />
						<FontAwesomeIcon icon={faPause} ref={btnStopRef} onClick={stopRolling} />
					</span>
				</div>

				<div className='text'>
					<h2>WELCOME TO YOUR NEW WEBSITE</h2>
					<p>
						WE CREATE <br />
						CAREERS
					</p>
					<button className='btn'>SEE OUR LATEST WORK</button>
				</div>
			</div>
		</figure>
	);
}

export default Visual;
