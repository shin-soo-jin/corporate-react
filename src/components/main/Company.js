import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Company() {
	return (
		<section id='company'>
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
