import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../common/Layout';
import Modal from '../common/Modal';

function Youtube() {
	const Vids = useSelector((store) => store.youtubeReducer.youtube);
	const modal = useRef(null);
	const [Index, setIndex] = useState(0);
	const num = 4;

	return (
		<>
			<Layout name={'YOUTUBE'} txt={'Meet YouTube'}>
				<article className='txt'>
					<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, sed.</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minima rem velit quas
						quidem illum nesciunt aliquam, impedit dolorum est aspernatur deleniti iusto enim
						ducimus nam ut adipisci! Ex, minus?
					</p>
				</article>
				<article className='vidList'>
					<ul>
						{Vids.map((data, idx) => {
							const tit = data.snippet.title;
							const owner = data.snippet.videoOwnerChannelTitle;
							const desc = data.snippet.description;
							if (idx >= 4) return null;
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
								</li>
							);
						})}
					</ul>
				</article>

				<article className='video'>
					<div
						className='vid'
						onClick={() => {
							modal.current.open();
							setIndex(num);
						}}
					>
						<img
							alt={`${Vids[num]?.snippet.title}`}
							src={`${Vids[num]?.snippet.thumbnails.maxres.url}`}
						/>
					</div>
					<div className='text'>
						<h2>{`${Vids[num]?.snippet.title}`}</h2>
						<p>{`${
							Vids[num]?.snippet.description.length > 300
								? Vids[num]?.snippet.description.substr(0, 300) + '...'
								: Vids[num]?.snippet.description
						}`}</p>
						<button
							onClick={() => {
								modal.current.open();
								setIndex(num);
							}}
						>
							button
						</button>
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

export default Youtube;
