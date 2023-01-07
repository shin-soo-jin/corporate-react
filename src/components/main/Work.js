import React from 'react';

function Work() {
	return (
		<div id='work'>
			<div className='inner'>
				<h2 className='hidden'>WORK</h2>
				<div className='wrap'>
					<article>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/work1.jpg`} alt='회의실 사진' />
						</div>
						<div className='text'>
							<h3>OUR MISSION STATEMENT</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore illum ad reiciendis
								ex assumenda possimus id? Accusamus error excepturi eos libero debitis. Doloremque
								commodi repellendus, veritatis laboriosam esse ratione voluptas.
							</p>
							<a href='#'>READ MORE</a>
						</div>
					</article>
					<article>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/work2.jpg`} alt='계획표 사진' />
							opacity{' '}
						</div>
						<div className='text'>
							<h3>ACHIEVING OUR GOALS IN 2016</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore illum ad reiciendis
								ex assumenda possimus id? Accusamus error excepturi eos libero debitis. Doloremque
								commodi repellendus, veritatis laboriosam esse ratione voluptas.
							</p>
							<a href='#'>READ MORE</a>
						</div>
					</article>
					<article>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/work3.jpg`} alt='문서 사진' />
						</div>
						<div className='text'>
							<h3>OUR ANNUAL REPORT</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore illum ad reiciendis
								ex assumenda possimus id? Accusamus error excepturi eos libero debitis. Doloremque
								commodi repellendus, veritatis laboriosam esse ratione voluptas.
							</p>
							<a href='#'>READ MORE</a>
						</div>
					</article>
				</div>
			</div>
		</div>
	);
}

export default Work;
