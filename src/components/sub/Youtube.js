import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../common/Layout';

function Youtube() {
	const [Vids, setVids] = useState([]);

	useEffect(() => {
		const key = 'AIzaSyCaXRXk4IImstZdfY92MFZLzPLaz0VxlRc';
		const playlistId = 'PL5lm99t4rEC4v0vphLBO7rm2f9mR_nMeY';
		const maxResults = 12;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${maxResults}`;

		axios.get(url).then((json) => {
			setVids(json.data.items);
		});
	}, []);

	return (
		<Layout name={'YOUTUBE'} txt={'Meet YouTube'}>
			<div className='vidList'>
				{Vids.map((data) => {
					const tit = data.snippet.title;
					const owner = data.snippet.videoOwnerChannelTitle;
					const desc = data.snippet.description;

					return (
						<article key={data.id}>
							<div className='pic'>
								<img src={data.snippet.thumbnails.maxres.url} alt={data.snippet.title} />
							</div>
							<div className='text'>
								<h2>{tit.length > 30 ? tit.substr(0, 30) + '...' : tit}</h2>
								<span>{owner}</span>
								<em>{desc.length > 100 ? desc.substr(0, 25) + '...' : desc}</em>
							</div>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Youtube;
