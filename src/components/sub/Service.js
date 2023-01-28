import { faCalendar, faCirclePlay, faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import {
	faChartLine,
	faDisplay,
	faLayerGroup,
	faPenNib,
	faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../common/Layout';
import Modal from '../common/Modal';

function Service() {
	const Vids = useSelector((store) => store.youtubeReducer.youtube);
	const modal = useRef(null);
	const [Index, setIndex] = useState(0);

	return (
		<>
			<Layout
				name={'SERVICE'}
				txt={'OUR SERVICE'}
				tit={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
				titTxt={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolores'}
			>
				<article className='vidList'>
					<div className='inner'>
						<div className='video'>
							<div className='text'>
								<h3>
									{Vids[0]?.snippet.title.length > 50
										? Vids[0]?.snippet.title.substr(0, 42)
										: Vids[0]?.snippet.title}
								</h3>
								<button
									onClick={() => {
										modal.current.open();
										setIndex(0);
									}}
								>
									<FontAwesomeIcon icon={faPlay} />
									WATCH THE VIDEO
								</button>
								<p>
									{Vids[0]?.snippet.description.length > 200
										? Vids[0]?.snippet.description.substr(35, 200) + '...'
										: Vids[0]?.snippet.description}
								</p>
							</div>
							<div
								className='pic'
								onClick={() => {
									modal.current.open();
									setIndex(0);
								}}
							>
								<img
									src={`${Vids[0]?.snippet.thumbnails.maxres.url}`}
									alt={Vids[0]?.snippet.title}
								/>
								<button>
									<FontAwesomeIcon icon={faPlay} />
								</button>
							</div>
						</div>

						<ul>
							{Vids.map((data, idx) => {
								if (idx === 0 || idx >= 4) return null;
								return (
									<li key={data.id}>
										<div
											className='pic'
											onClick={() => {
												modal.current.open();
												setIndex(idx);
											}}
										>
											<img src={data.snippet.thumbnails.maxres.url} alt={data.snippet.title} />
										</div>
										<button
											onClick={() => {
												modal.current.open();
												setIndex(idx);
											}}
										>
											<FontAwesomeIcon icon={faPlay} />
										</button>
									</li>
								);
							})}
						</ul>
					</div>
				</article>

				<article className='serviceList'>
					<div className='inner'>
						<h3>We Run All Kinds Of IT Services</h3>
						<ul>
							<li>
								<i>
									<FontAwesomeIcon icon={faDisplay} />
								</i>
								<i>
									<FontAwesomeIcon icon={faDisplay} />
								</i>
								<h4>Fully Responsive Design</h4>
								<p>
									Intense looks perfect on any modern device, be it a laptop, a smartphone, or a
									tablet.
								</p>
							</li>
							<li>
								<i>
									<FontAwesomeIcon icon={faChartLine} />
								</i>
								<i>
									<FontAwesomeIcon icon={faChartLine} />
								</i>
								<h4>Social Integration</h4>
								<p>
									Intense is integrated with such popular social networks as Facebook, Twitter,
									Instagram and Flickr.
								</p>
							</li>
							<li>
								<i>
									<FontAwesomeIcon icon={faPenNib} />
								</i>
								<i>
									<FontAwesomeIcon icon={faPenNib} />
								</i>
								<h4>150+ Predesigned Pages</h4>
								<p>
									Intense is a paradise for developers. Its initial release version comes shipped
									with 150+ responsive pages for any taste.
								</p>
							</li>
							<li>
								<i>
									<FontAwesomeIcon icon={faCalendar} />
								</i>
								<i>
									<FontAwesomeIcon icon={faCalendar} />
								</i>
								<h4>Regular Content Updates</h4>
								<p>
									New child themes, skins and predesigned pages are being released 2-3 times per
									month. Intense owners get them for free.
								</p>
							</li>
							<li>
								<i>
									<FontAwesomeIcon icon={faLayerGroup} />
								</i>
								<i>
									<FontAwesomeIcon icon={faLayerGroup} />
								</i>
								<h4>Lots of Child Themes</h4>
								<p>
									A variety of niche-specific designs, which expand the possibilities of this
									template.
								</p>
							</li>
							<li>
								<i>
									<FontAwesomeIcon icon={faFolderOpen} />
								</i>
								<i>
									<FontAwesomeIcon icon={faFolderOpen} />
								</i>
								<h4>200+ PSD Files</h4>
								<p>
									An impressive UI kit comprising 200+ layered PSD source files will be a useful
									addition to every designer’s toolbox.
								</p>
							</li>
						</ul>
					</div>
				</article>
			</Layout>

			<Modal ref={modal}>
				<iframe
					title={Vids[Index]?.id}
					src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Service;
