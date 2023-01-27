import { faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useMemo, useRef, useState } from 'react';
import Layout from '../common/Layout';

function Contact() {
	const { kakao } = window;
	const mapContainer = useRef(null);
	const mapInstance = useRef(null);
	const mapOption = useRef(null);
	const mapList = useRef(null);
	const [Index, setIndex] = useState(0);

	mapList.current = [
		{
			title: '서울',
			latlng: new kakao.maps.LatLng(37.5668332121221, 126.97864942648738),
		},
		{
			title: '경기',
			latlng: new kakao.maps.LatLng(37.289016962605636, 127.05345726064418),
		},
		{
			title: '인천',
			latlng: new kakao.maps.LatLng(37.4560179806656, 126.70525801702745),
		},
	];

	mapOption.current = {
		center: mapList.current[Index].latlng,
		level: 3,
		draggable: false,
	};

	const markerPosition = mapOption.current.center;
	const marker = useMemo(
		() =>
			new kakao.maps.Marker({
				position: markerPosition,
			}),
		[kakao, markerPosition]
	);
	const mapTypeControl = useMemo(() => new kakao.maps.MapTypeControl(), [kakao]);
	const zoomControl = useMemo(() => new kakao.maps.ZoomControl(), [kakao]);

	const setCenter = () => {
		mapInstance.current.setCenter(mapOption.current.center);
	};

	useEffect(() => {
		mapContainer.current.innerHTML = '';
		mapInstance.current = new kakao.maps.Map(mapContainer.current, mapOption.current);
		marker.setMap(mapInstance.current);
		mapInstance.current.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
		mapInstance.current.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
		window.addEventListener('resize', setCenter);
		return () => {
			window.removeEventListener('resize', setCenter);
		};
	}, [Index, kakao, marker, mapTypeControl, zoomControl]);

	return (
		<Layout name={'CONTACT'} txt={'CONTACT OUR COMPANY'}>
			<article className='mapCon'>
				<div className='inner'>
					<h3>Come and visit us</h3>
					<p>
						If you have any questions, just fill in the contact form, and we will answer you
						shortly. If you are living nearby, come visit Starbis in one of our comfortable offices.
					</p>
					<div id='map' ref={mapContainer}></div>
					<ul className='mapList'>
						{mapList.current.map((el, idx) => {
							let isOn = '';
							idx === Index && (isOn = 'on');
							return (
								<li key={idx} className={isOn} onClick={() => setIndex(idx)}>
									{el.title}
								</li>
							);
						})}
					</ul>
					<ul className='info'>
						<li>
							<FontAwesomeIcon icon={faPhoneAlt} />
							<strong>070-1234-5678</strong>
							<p>
								Starting a collaboration is easy! Order a free consultation or call back. We are
								always in touch and happy to cooperate with you
							</p>
						</li>
						<li>
							<FontAwesomeIcon icon={faClock} />
							<strong>9AM - 6PM</strong>
							<p>
								If you have any questions, comments or ideas we can be reached by phone, fax or
								mail.
							</p>
						</li>
					</ul>
				</div>
			</article>
			<article className='formCon'>
				<div className='inner'>
					<h3>Interested in working with us?</h3>
					<p>
						Starting a collaboration is easy! Order a free consultation or call back. We are always
						in touch and happy to cooperate with you
					</p>
					<form action=''>
						<fieldset>
							<legend className='hidden'>Contact us</legend>

							<div className='wrap'>
								<div className='left'>
									<label htmlFor='name' className='hidden'>
										NAME
									</label>
									<input type='text' name='name' id='name' placeholder='NAME' required />

									<label htmlFor='email' className='hidden'>
										E-MAIL
									</label>
									<input type='text' name='email' id='email' placeholder='E-MAIL' required />
								</div>

								<div className='right'>
									<label htmlFor='message' className='hidden'>
										MESSAGE
									</label>
									<textarea
										name='message'
										id='message'
										cols='30'
										rows='5'
										placeholder='MESSAGE'
										required
									></textarea>
								</div>
							</div>

							<input type='checkbox' name='agree' id='agree' required />
							<label htmlFor='agree'>
								I agree to the transfer of personal data in accordance with the Privacy Policy
							</label>

							<input type='submit' value='SEND' />
						</fieldset>
					</form>
				</div>
			</article>
		</Layout>
	);
}

export default Contact;
