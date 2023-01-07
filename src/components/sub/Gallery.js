import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Layout from '../common/Layout';
import Masonry from 'react-masonry-component';
import Modal from '../common/Modal';

function Gallery() {
	const my_id = '197333350@N05';
	const masonryOptions = { transitionDuration: '0.5s' };
	const input = useRef(null);
	const frame = useRef(null);
	const modal = useRef(null);
	const [Items, setItems] = useState([]);
	const [Loading, setLoading] = useState(true);
	const [Index, setIndex] = useState(0);

	const getFilckr = async (option) => {
		const baseURL = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
		const method_interest = 'flickr.interestingness.getList';
		const method_search = 'flickr.photos.search';
		const method_user = 'flickr.people.getPhotos';
		const api_key = '351a57e95d2a68e2c23e344ae6c77508';
		const per_page = 12;
		let url = '';

		if (option.type === 'interest')
			url = `${baseURL}&method=${method_interest}&api_key=${api_key}&per_page=${per_page}`;
		if (option.type === 'search')
			url = `${baseURL}&method=${method_search}&api_key=${api_key}&per_page=${per_page}&tags=${option.tags}`;
		if (option.type === 'user')
			url = `${baseURL}&method=${method_user}&api_key=${api_key}&per_page=${per_page}&user_id=${option.user_id}`;

		const result = await axios.get(url);
		if (result.data.photos.photo.length === 0) {
			frame.current.classList.add('on');
			setLoading(false);
			return alert('검색 결과가 없습니다.');
		}
		setItems(result.data.photos.photo);

		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
		}, 500);
	};

	useEffect(() => {
		showInterest();
	}, []);

	const showInterest = () => {
		getFilckr({ type: 'interest' });
		frame.current.classList.remove('on');
		setLoading(true);
	};
	const showSearch = () => {
		let tags = input.current.value.trim();
		input.current.value = '';
		if (!tags) return alert('검색어를 입력하지 않았습니다. 검색어를 입력하세요.');
		getFilckr({ type: 'search', tags: tags });
		frame.current.classList.remove('on');
		setLoading(true);
	};
	const showUser = (e) => {
		let user_id = e.target.innerText;
		getFilckr({ type: 'user', user_id: user_id });
		frame.current.classList.remove('on');
		setLoading(true);
	};
	const showMine = () => {
		getFilckr({ type: 'user', user_id: my_id });
		frame.current.classList.remove('on');
		setLoading(true);
	};

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
