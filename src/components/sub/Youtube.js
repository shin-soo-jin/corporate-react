import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
			<Layout
				name={'YOUTUBE'}
				txt={'OUR YOUTUBE'}
				link={'youtube'}
				tit={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
				titTxt={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolores'}
			>
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
							<h3>{`${
								Vids[num]?.snippet.title.length > 20
									? Vids[num]?.snippet.title.substr(0, 20) + '...'
									: Vids[num]?.snippet.title
							}`}</h3>
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

				<article className='vidList'>
					<div className='inner'>
						<span>Things to see</span>
						<h3>The best place to spend your day</h3>
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
										<div className='btnVids'>
											<FontAwesomeIcon icon={faPlay} />
										</div>
									</li>
								);
							})}
						</ul>
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
