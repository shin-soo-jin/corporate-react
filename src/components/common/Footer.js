import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faPinterestP, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<div className='text'>
					<h2 href='#' className='footLogo'>
						B
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores adipisci, velit possimus quisquam dicta
						eligendi maxime debitis eius sequi incidunt officia ut corrupti deleniti ea rerum dolorem accusantium
						voluptates nemo?
					</p>
					<div className='sns'>
						<a href='#'>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a href='#'>
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
						<a href='#'>
							<FontAwesomeIcon icon={faPinterestP} />
						</a>
						<a href='#'>
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
					</div>
				</div>
				<div className='link'>
					<p>
						<strong>ADDITIONAL LINKS</strong>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, assumenda!
					</p>
					<ul>
						<li>
							<a href='#'>Contact our marketing team</a>
						</li>
						<li>
							<a href='#'>See our clients</a>
						</li>
						<li>
							<a href='#'>Sign up for Newsletter</a>
						</li>
						<li>
							<a href='#'>Copyright information</a>
						</li>
						<li>
							<a href='#'>Legal Disclaimer</a>
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
							<a href='#'>Contact our marketing team</a>
						</li>
						<li>
							<a href='#'>See our clients</a>
						</li>
						<li>
							<a href='#'>Sign up for Newsletter</a>
						</li>
						<li>
							<a href='#'>Copyright information</a>
						</li>
						<li>
							<a href='#'>Legal Disclaimer</a>
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
							<a href='#'>Contact our marketing team</a>
						</li>
						<li>
							<a href='#'>See our clients</a>
						</li>
						<li>
							<a href='#'>Sign up for Newsletter</a>
						</li>
						<li>
							<a href='#'>Copyright information</a>
						</li>
						<li>
							<a href='#'>Legal Disclaimer</a>
						</li>
					</ul>
				</div>
			</div>
			<p className='copy'>Copyright &copy; B All Rights Reserved.</p>
			<a href='#' className='btnTop'>
				<FontAwesomeIcon icon={faArrowUp} />
				<span>TOP</span>
			</a>
		</footer>
	);
}

export default Footer;
