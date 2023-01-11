import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faFacebookF,
	faPinterestP,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<div className='text'>
					<h2 href='#' className='footLogo'>
						B
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores adipisci, velit
						possimus quisquam dicta eligendi maxime debitis eius sequi incidunt officia ut corrupti
						deleniti ea rerum dolorem accusantium voluptates nemo?
					</p>
					<div className='sns'>
						<Link to='#'>
							<FontAwesomeIcon icon={faTwitter} />
						</Link>
						<Link to='#'>
							<FontAwesomeIcon icon={faFacebookF} />
						</Link>
						<Link to='#'>
							<FontAwesomeIcon icon={faPinterestP} />
						</Link>
						<Link to='#'>
							<FontAwesomeIcon icon={faLinkedinIn} />
						</Link>
					</div>
				</div>
				<div className='link'>
					<p>
						<strong>ADDITIONAL LINKS</strong>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, assumenda!
					</p>
					<ul>
						<li>
							<Link to='#'>Contact our marketing team</Link>
						</li>
						<li>
							<Link to='#'>See our clients</Link>
						</li>
						<li>
							<Link to='#'>Sign up for Newsletter</Link>
						</li>
						<li>
							<Link to='#'>Copyright information</Link>
						</li>
						<li>
							<Link to='#'>Legal Disclaimer</Link>
						</li>
					</ul>
				</div>
				<div className='link'>
					<p>
						<strong>ADDITIONAL LINKS</strong>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, assumenda!
					</p>
					<ul>
						<li>
							<Link to='#'>Contact our marketing team</Link>
						</li>
						<li>
							<Link to='#'>See our clients</Link>
						</li>
						<li>
							<Link to='#'>Sign up for Newsletter</Link>
						</li>
						<li>
							<Link to='#'>Copyright information</Link>
						</li>
						<li>
							<Link to='#'>Legal Disclaimer</Link>
						</li>
					</ul>
				</div>
				<div className='link'>
					<p>
						<strong>ADDITIONAL LINKS</strong>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, assumenda!
					</p>
					<ul>
						<li>
							<Link to='#'>Contact our marketing team</Link>
						</li>
						<li>
							<Link to='#'>See our clients</Link>
						</li>
						<li>
							<Link to='#'>Sign up for Newsletter</Link>
						</li>
						<li>
							<Link to='#'>Copyright information</Link>
						</li>
						<li>
							<Link to='#'>Legal Disclaimer</Link>
						</li>
					</ul>
				</div>
			</div>
			<p className='copy'>Copyright &copy; B All Rights Reserved.</p>
		</footer>
	);
}

export default Footer;
