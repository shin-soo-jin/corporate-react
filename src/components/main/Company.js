import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../common/Modal';

function Company() {
	const modal = useRef(null);
	const vid = useSelector((store) => store.youtubeReducer.youtube);
	const idx = 0;

	return (
		<>
			<section id='company' className='scrollSection'>
				<div className='inner'>
					<div className='text'>
						<h2>MEET OUR COMPANY</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugiat tenetur
							ex exercitationem alias quos veritatis debitis error modi facilis tempora repellat
							repudiandae illo amet corporis, repellendus officiis minima inventore?
						</p>
						<button className='btn'>SEE OUR LATEST WORK</button>
					</div>
					<div className='vid' onClick={() => modal.current.open()}>
						<img alt={vid[idx]?.id} src={`${vid[idx]?.snippet.thumbnails.maxres.url}`}></img>
						<button className='vidBtn'>
							<FontAwesomeIcon icon={faPlay} />
						</button>
					</div>
				</div>
			</section>
			<Modal ref={modal}>
				<iframe
					title={vid[idx]?.id}
					src={`https://www.youtube.com/embed/${vid[idx]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Company;
