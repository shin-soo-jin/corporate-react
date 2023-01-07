import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../common/Layout';
import Modal from '../common/Modal';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyDNF6ER_FjS5SUokp336zPZpztBATERgqU';
		const playlistId = 'PLJMGVKPzkm8wzgPYetuzATsT2fbnH9mn5';
		const maxResults = 12;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${maxResults}`;

		axios.get(url).then((json) => {
			setVids(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'YOUTUBE'} txt={'Meet YouTube'}>
				<div className='vidList'>
					{Vids.map((data, idx) => {
						const tit = data.snippet.title;
						const owner = data.snippet.videoOwnerChannelTitle;
						const desc = data.snippet.description;

						return (
							<article key={data.id}>
								<div
									className='pic'
									onClick={() => {
										setOpen(true);
										setIndex(idx);
									}}
								>
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
			{Open && (
				<Modal setOpen={setOpen}>
					<iframe
						title={Vids[Index].id}
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
					></iframe>
				</Modal>
			)}
		</>
	);
}

export default Youtube;
