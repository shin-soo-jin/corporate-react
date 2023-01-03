import {
	faClock,
	faEnvelope,
	faMapMarkerAlt,
	faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import Layout from '../common/Layout';

function Contact() {
	const { kakao } = window;
	const mapContainer = useRef(null);
	const mapOption = {
		center: new kakao.maps.LatLng(37.5284304, 126.9330781),
		level: 3,
	};
	const marker = new kakao.maps.Marker({
		position: mapOption.center,
	});
	const mapTypeControl = new kakao.maps.MapTypeControl();
	const zoomControl = new kakao.maps.ZoomControl();

	useEffect(() => {
		const map = new kakao.maps.Map(mapContainer.current, mapOption);
		marker.setMap(map);
		map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
		map.setDraggable(false);
		map.setZoomable(false);
		window.onresize = () => {
			map.setCenter(mapOption.center);
		};
	}, []);

	return (
		<Layout name={'CONTACT'} txt={'Contact Our Company'}>
			<div id='map' ref={mapContainer}></div>
			<div className='wrap'>
				<div className='text'>
					<h2>INFO</h2>
					<ul>
						<li>
							<i>
								<FontAwesomeIcon icon={faPhoneAlt} />
							</i>
							070-1234-5678
						</li>
						<li>
							<i>
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
						<legend>CONTACT OUR COMPANY</legend>

						<b>CATEGORY</b>
						<label htmlFor='pc'>
							<input type='checkbox' name='category' id='pc' value='pc' />
							PC
						</label>
						<label htmlFor='mobile'>
							<input
								type='checkbox'
								name='category'
								id='mobile'
								value='mobile'
							/>
							MOBILE
						</label>
						<label htmlFor='responsive'>
							<input
								type='checkbox'
								name='category'
								id='responsive'
								value='responsive'
							/>
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
		</Layout>
	);
}

export default Contact;
