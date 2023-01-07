import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import Masonry from 'react-masonry-component';

function Gallery() {
	const masonryOptions = { transitionDuration: '0.5s' };
	const input = useRef(null);
	const frame = useRef(null);
	const [Items, setItems] = useState([]);
	const [Loading, setLoading] = useState(true);

	const getFilckr = async (option) => {
		const method_interest = 'flickr.interestingness.getList';
		const method_search = 'flickr.photos.search';
		const api_key = '90b16afc1c9a03f06cb7f099502e292c';
		const per_page = 12;
		let url = '';

		if (option.type === 'interest')
			url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${api_key}&per_page=${per_page}&format=json&nojsoncallback=1`;
		if (option.type === 'search')
			url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${api_key}&per_page=${per_page}&format=json&nojsoncallback=1&tags=${option.tag}&privacy_filter=1`;

		const result = await axios.get(url);
		if (result.data.photos.photo.length === 0) {
			frame.current.classList.add('on');
			setLoading(false);
			alert('검색 결과가 없습니다.');
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
		getFilckr({ type: 'search', tag: tags });
		frame.current.classList.remove('on');
		setLoading(true);
	};

	return (
		<Layout name={'GALLERY'} txt={'Meet Gallery'}>
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

			<div className='wrap'>
				<ul className='list' ref={frame}>
					<Masonry elementType={'ul'} options={masonryOptions}>
						{Items.map((el, idx) => {
							return (
								<li className='item' key={idx}>
									<div>
										<div className='pic'>
											<img
												src={`https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_m.jpg`}
												alt={el.title}
												className='thumb'
											/>
										</div>
										<span>
											<p>${el.title}</p>
											<img
												src={`http://farm${el.farm}.staticflickr.com/${el.server}/buddyicons/${el.owner}.jpg`}
												alt={el.owner}
												className='profile'
											/>
											<strong>${el.owner}</strong>
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
	);
}

export default Gallery;
