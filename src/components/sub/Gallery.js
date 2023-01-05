import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../common/Layout';

function Gallery() {
	const [Items, setItems] = useState([]);

	const getFilckr = async () => {
		const method_interest = 'flickr.interestingness.getList';
		const method_search = 'flickr.photos.search';
		const api_key = '90b16afc1c9a03f06cb7f099502e292c';
		const per_page = 12;
		const url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${api_key}&per_page=${per_page}&format=json&nojsoncallback=1`;

		const result = await axios.get(url);
		setItems(result.data.photos.photo);
	};

	useEffect(() => {
		getFilckr();
	}, []);

	console.log(Items);

	return (
		<Layout name={'GALLERY'} txt={'Meet Gallery'}>
			<div className='searchBox'>
				<input type='text' placeholder='이미지 검색' />
				<button>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</div>

			<div className='wrap'>
				<ul className='list'>
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
				</ul>
			</div>

			<img
				src={`${process.env.PUBLIC_URL}/img/loading.gif`}
				alt='로딩중 입니다'
				className='loading'
			/>
		</Layout>
	);
}

export default Gallery;
