import React from 'react';
import { useSelector } from 'react-redux';

function Work() {
	const Items = useSelector((store) => store.flickrReducer.flickr);
	const num = 0;

	return (
		<section id='work' className='scrollSection'>
			<div className='inner'>
				<h2 className='hidden'>WORK</h2>
				<div className='wrap'>
					<article>
						<div className='pic'>
							<img
								src={`https://live.staticflickr.com/${Items[num]?.server}/${Items[num]?.id}_${Items[num]?.secret}_b.jpg`}
								alt={Items.title}
							/>
						</div>
						<div className='text'>
							<h3>OUR MISSION STATEMENT</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore illum ad reiciendis
								ex assumenda possimus id? Accusamus error excepturi eos libero debitis. Doloremque
								commodi repellendus, veritatis laboriosam esse ratione voluptas.
							</p>
							<button>READ MORE</button>
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
							<button>READ MORE</button>
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
							<button>READ MORE</button>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Work;
