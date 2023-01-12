import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../common/Layout';
import Modal from '../common/Modal';

function Youtube() {
	const Vids = useSelector((store) => store.youtubeReducer.youtube);
	const modal = useRef(null);
	const [Index, setIndex] = useState(0);
	const num = 6;

	return (
		<>
			<Layout name={'YOUTUBE'} txt={'Meet YouTube'} link={'/youtube'}>
				<article className='txt'>
					<div className='inner'>
						<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolores.</p>
					</div>
				</article>

				<div className='inner'>
					<article className='vidList'>
						<ul>
							{Vids.map((data, idx) => {
								if (idx >= num) return null;
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
				</div>

				<article className='video'>
					<div className='inner'>
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
