function Visual() {
	const imgSrc = process.env.PUBLIC_URL;
	return (
		<figure id='visual'>
			<div className='slider'>
				<ul>
					<li style={{ backgroundImage: `url(${imgSrc}/img/visual1.jpg)` }} />
					<li style={{ backgroundImage: `url(${imgSrc}/img/visual2.jpg)` }} />
					<li style={{ backgroundImage: `url(${imgSrc}/img/visual3.jpg)` }} />
					<li style={{ backgroundImage: `url(${imgSrc}/img/visual4.jpg)` }} />
				</ul>
			</div>
			<ul className='sliderPage'>
				<li href='#' className='on'>
					1
				</li>
				<li href='#'>2</li>
				<li href='#'>3</li>
				<li href='#'>4</li>
			</ul>
			<button className='sliderBtn sliderNext'>
				<img src={`${imgSrc}/img/next.png`} alt='다음 슬라이드 버튼' />
			</button>
			<button className='sliderBtn sliderPrev'>
				<img src={`${imgSrc}/img/prev.png`} alt='이전 슬라이드 버튼' />
			</button>
			<div className='inner'>
				<div className='text'>
					<h2>WELCOME TO YOUR NEW WEBSITE</h2>
					<p>
						WE CREATE <br />
						CAREERS
					</p>
					<a href='#' className='btn'>
						SEE OUR LATEST WORK
					</a>
				</div>
			</div>
		</figure>
	);
}

export default Visual;
