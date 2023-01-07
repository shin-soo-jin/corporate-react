import { faPhoneAlt, faClock, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
	return (
		<section id='contact'>
			<div className='inner'>
				<div className='text'>
					<h2>CONTACT OUR COMPANY</h2>
					<ul>
						<li>
							<i>
								<FontAwesomeIcon icon={faPhoneAlt} />
							</i>
							070-1234-5678
						</li>
						<li>
							<i className='far fa-clock'>
								<FontAwesomeIcon icon={faClock} />
							</i>
							9AM - 6PM
						</li>
						<li>
							<i>
								<FontAwesomeIcon icon={faMapMarkerAlt} />
							</i>
							SEOUL, KOREA
						</li>
						<li>
							<i>
								<FontAwesomeIcon icon={faEnvelope} />
							</i>
							B@B.com
						</li>
					</ul>
				</div>

				<form action=''>
					<fieldset>
						<legend className='hidden'>CONTACT OUR COMPANY</legend>

						<b>CATEGORY</b>
						<label htmlFor='pc'>
							<input type='checkbox' name='category' id='pc' value='pc' />
							PC
						</label>
						<label htmlFor='mobile'>
							<input type='checkbox' name='category' id='mobile' value='mobile' />
							MOBILE
						</label>
						<label htmlFor='responsive'>
							<input type='checkbox' name='category' id='responsive' value='responsive' />
							RESPONSIVE
						</label>

						<label htmlFor='name' className='hidden'>
							NAME
						</label>
						<input type='text' name='name' id='name' placeholder='NAME' />

						<label htmlFor='email' className='hidden'>
							E-MAIL
						</label>
						<input type='text' name='email' id='email' placeholder='E-MAIL' />

						<label htmlFor='message' className='hidden'>
							MESSAGE
						</label>
						<textarea
							name='message'
							id='message'
							cols='30'
							rows='10'
							placeholder='MESSAGE'
						></textarea>

						<input type='button' value='SEND' />
					</fieldset>
				</form>
			</div>
		</section>
	);
}

export default Contact;
