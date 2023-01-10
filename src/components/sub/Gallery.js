import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
	const [Index, setIndex] = useState(0);
	const [Opt, setOpt] = useState({ type: 'user', user: my_id });
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
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
		}, 500);
	}, [Items]);

	useEffect(() => {
		dispatch({ type: types.FLICKR.start, Opt });
	}, [Opt, dispatch]);

	return (
		<>
			<Layout name={'GALLERY'} txt={'Meet Gallery'}>
				<div className='controls'>
					<nav>
						<button onClick={showMine}>My Gallery</button>
						<button onClick={showInterest}>Interest</button>
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

				<div className='wrap'>
					<ul className='list' ref={frame}>
						<Masonry elementType={'ul'} options={masonryOptions}>
							{Items.map((el, idx) => {
								return (
									<li className='item' key={idx}>
										<div>
											<div
												className='pic'
												onClick={() => {
													modal.current.open();
													setIndex(idx);
												}}
											>
												<img
													src={`https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_m.jpg`}
													alt={el.title}
													className='thumb'
												/>
											</div>
											<span>
												<p>{el.title}</p>
												<img
													src={`http://farm${el.farm}.staticflickr.com/${el.server}/buddyicons/${el.owner}.jpg`}
													alt={el.owner}
													className='profile'
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
