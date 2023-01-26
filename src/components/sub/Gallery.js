import {
	faMagnifyingGlass,
	faPlus,
	faChartLine,
	faDisplay,
	faLayerGroup,
	faPenNib,
} from '@fortawesome/free-solid-svg-icons';
import {
	faHourglass,
	faLifeRing,
	faLightbulb,
	faMessage,
	faCalendar,
	faFolderOpen,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import Masonry from 'react-masonry-component';
import Modal from '../common/Modal';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../redux/actionType';

function Gallery() {
	const dispatch = useDispatch();
	const my_id = '197333350@N05';
	const masonryOptions = { transitionDuration: '0.5s' };
	const input = useRef(null);
	const frame = useRef(null);
	const modal = useRef(null);
	const [Loading, setLoading] = useState(true);
	const [Init, setInit] = useState(true);
	const [Index, setIndex] = useState(0);
	const [Opt, setOpt] = useState({ type: 'user', user: my_id });
	const [IsOn, setIsOn] = useState(0);
	const Items = useSelector((store) => store.flickrReducer.flickr);

	const showInterest = () => {
		setOpt({ type: 'interest' });
		frame.current.classList.remove('on');
		setLoading(true);
	};
	const showSearch = () => {
		let tags = input.current.value.trim();
		input.current.value = '';
		if (!tags) return alert('검색어를 입력하지 않았습니다. 검색어를 입력하세요.');
		setOpt({ type: 'search', tags: tags });
		frame.current.classList.remove('on');
		setLoading(true);
		setIsOn('');
	};
	const showUser = (e) => {
		let user_id = e.target.innerText;
		setOpt({ type: 'user', user: user_id });
		frame.current.classList.remove('on');
		setLoading(true);
	};
	const showMine = () => {
		setOpt({ type: 'user', user: my_id });
		frame.current.classList.remove('on');
		setLoading(true);
	};

	useEffect(() => {
		setInit(false);
	}, []);

	useEffect(() => {
		if (Items.length === 0 && !Init) {
			alert('해당 검색어에 대한 검색결과가 없습니다.');
			showMine();
			setIsOn(0);
		}

		setTimeout(() => {
			frame.current?.classList.add('on');
			setLoading(false);
		}, 500);
	}, [Items]);

	useEffect(() => {
		setLoading(true);
		dispatch({ type: types.FLICKR.start, Opt });
	}, [Opt, dispatch]);

	return (
		<>
			<Layout
				name={'GALLERY'}
				txt={'OUR GALLERY'}
				tit={'Lorem ipsum dolor sit.'}
				titTxt={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, in.'}
			>
				<article className='images'>
					<div className='inner'>
						<div className='controls'>
							<nav>
								<button
									className={IsOn === 0 ? 'on' : ''}
									onClick={() => {
										showMine();
										setIsOn(0);
									}}
								>
									GALLERY
								</button>
								<button
									className={IsOn === 1 ? 'on' : ''}
									onClick={() => {
										showInterest();
										setIsOn(1);
									}}
								>
									INTEREST
								</button>
							</nav>
							<div className='searchBox'>
								<input
									type='text'
									placeholder='이미지 검색'
									ref={input}
									onKeyUp={(e) => e.key === 'Enter' && showSearch()}
								/>
								<button onClick={showSearch}>
									<FontAwesomeIcon icon={faMagnifyingGlass} />
								</button>
							</div>
						</div>

						<div className='imgList'>
							<ul ref={frame}>
								<Masonry elementType={'ul'} options={masonryOptions}>
									{Items.map((el, idx) => {
										if (idx >= 6) return null;
										return (
											<li key={idx}>
												<div>
													<div
														className='pic'
														onClick={() => {
															modal.current.open();
															setIndex(idx);
														}}
													>
														<img
															src={`https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_z.jpg`}
															alt={el.title}
															className='thumb'
														/>
														<i>
															<FontAwesomeIcon icon={faPlus} />
														</i>
													</div>
													<span>
														<p>{el.title}</p>
														<img
															src={`http://farm${el.farm}.staticflickr.com/${el.server}/buddyicons/${el.owner}.jpg`}
															alt={el.owner}
															className='profile'
															onError={(e) =>
																e.target.setAttribute(
																	'src',
																	'https://www.flickr.com/images/buddyicon.gif'
																)
															}
														/>
														<strong onClick={showUser}>{el.owner}</strong>
													</span>
												</div>
											</li>
										);
									})}
								</Masonry>
							</ul>
						</div>
						{Loading && (
							<img
								src={`${process.env.PUBLIC_URL}/img/loading.gif`}
								alt='로딩중 입니다'
								className='loading'
							/>
						)}
					</div>
				</article>

				<article className='gallery_Info'>
					<div className='bg bgL'>
						<i>
							<FontAwesomeIcon icon={faChartLine} />
						</i>
						<i>
							<FontAwesomeIcon icon={faDisplay} />
						</i>
						<i>
							<FontAwesomeIcon icon={faLayerGroup} />
						</i>
						<i>
							<FontAwesomeIcon icon={faPenNib} />
						</i>
						<i>
							<FontAwesomeIcon icon={faHourglass} />
						</i>
					</div>
					<div className='bg bgR'>
						<i>
							<FontAwesomeIcon icon={faLifeRing} />
						</i>
						<i>
							<FontAwesomeIcon icon={faLightbulb} />
						</i>
						<i>
							<FontAwesomeIcon icon={faMessage} />
						</i>
						<i>
							<FontAwesomeIcon icon={faCalendar} />
						</i>
						<i>
							<FontAwesomeIcon icon={faFolderOpen} />
						</i>
					</div>

					<div className='inner'>
						<h3>Let’s talk about your project and see how we can work together</h3>
						<p>
							Our team of business consultants, analysts and creatives are perfectionists who love
							what they do and where they work.
						</p>
						<button>070-000-1111</button>
						<span>Or</span>
						<button>Contact Us</button>
					</div>
				</article>
			</Layout>

			<Modal ref={modal}>
				<img
					src={`https://live.staticflickr.com/${Items[Index]?.server}/${Items[Index]?.id}_${Items[Index]?.secret}_b.jpg`}
					alt={Items[Index]?.owner}
				/>
			</Modal>
		</>
	);
}

export default Gallery;
