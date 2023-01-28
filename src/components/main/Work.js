import React, { useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../common/Modal';

function Work() {
	const Items = useSelector((store) => store.flickrReducer.flickr);
	const modal = useRef(null);
	const [Index, setIndex] = useState(0);

	return (
		<>
			<section id='work' className='scrollSection'>
				<div className='inner'>
					<h2 className='hidden'>WORK</h2>
					<div className='wrap'>
						<article
							onClick={() => {
								setIndex(0);
								modal.current.open();
							}}
						>
							<div className='pic'>
								<img
									src={`https://live.staticflickr.com/${Items[0]?.server}/${Items[0]?.id}_${Items[0]?.secret}_b.jpg`}
									alt={Items.title}
								/>
							</div>
							<div className='text'>
								<h3>OUR MISSION STATEMENT</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore illum ad
									reiciendis ex assumenda possimus id? Accusamus error excepturi eos libero debitis.
									Doloremque commodi repellendus, veritatis laboriosam esse ratione voluptas.
								</p>
								<button>READ MORE</button>
							</div>
						</article>
						<article
							onClick={() => {
								setIndex(1);
								modal.current.open();
							}}
						>
							<div className='pic'>
								<img
									src={`https://live.staticflickr.com/${Items[1]?.server}/${Items[1]?.id}_${Items[1]?.secret}_b.jpg`}
									alt={Items.title}
								/>
							</div>
							<div className='text'>
								<h3>ACHIEVING OUR GOALS IN 2016</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore illum ad
									reiciendis ex assumenda possimus id? Accusamus error excepturi eos libero debitis.
									Doloremque commodi repellendus, veritatis laboriosam esse ratione voluptas.
								</p>
								<button>READ MORE</button>
							</div>
						</article>
						<article
							onClick={() => {
								setIndex(2);
								modal.current.open();
							}}
						>
							<div className='pic'>
								<img
									src={`https://live.staticflickr.com/${Items[2]?.server}/${Items[2]?.id}_${Items[2]?.secret}_b.jpg`}
									alt={Items.title}
								/>
							</div>
							<div className='text'>
								<h3>OUR ANNUAL REPORT</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore illum ad
									reiciendis ex assumenda possimus id? Accusamus error excepturi eos libero debitis.
									Doloremque commodi repellendus, veritatis laboriosam esse ratione voluptas.
								</p>
								<button>READ MORE</button>
							</div>
						</article>
					</div>
				</div>
			</section>
			<Modal ref={modal}>
				<img
					src={`https://live.staticflickr.com/${Items[Index]?.server}/${Items[Index]?.id}_${Items[Index]?.secret}_b.jpg`}
					alt={Items[Index]?.title}
				/>
			</Modal>
		</>
	);
}

export default Work;
