import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

function Company() {
	const vid = useSelector((store) => store.youtube.data);
	console.log(vid);
	return (
		<section id='company' className='scrollSection'>
			<div className='inner'>
				<div className='text'>
					<h2>MEET OUR COMPANY</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugiat tenetur ex
						exercitationem alias quos veritatis debitis error modi facilis tempora repellat
						repudiandae illo amet corporis, repellendus officiis minima inventore?
					</p>
					<a href='#' className='btn'>
						SEE OUR LATEST WORK
					</a>
				</div>
				<div className='vid'>
					<p>{vid[0]?.snippet.title}</p>
					<video src={`${process.env.PUBLIC_URL}/img/company.mp4`} loop></video>
					<a href='#' className='vidBtn'>
						<i>
							<FontAwesomeIcon icon={faPlay} />
						</i>
						<i>
							<FontAwesomeIcon icon={faPause} />
						</i>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Company;
