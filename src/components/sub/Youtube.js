import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../common/Layout';
import Modal from '../common/Modal';

function Youtube() {
	const Vids = useSelector((store) => store.youtubeReducer.youtube);
	const modal = useRef(null);
	const [Index, setIndex] = useState(0);

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
										modal.current.open();
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

			<Modal ref={modal}>
				<iframe
					title={Vids[Index]?.id}
					src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Youtube;
