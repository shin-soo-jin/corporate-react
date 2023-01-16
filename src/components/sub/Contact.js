import { faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
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
		<Layout
			name={'CONTACT'}
			txt={'Contact Our Company'}
			link={'contact'}
			tit={'Come and visit us'}
			titTxt={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dignissimos?'}
		>
			<div className='inner'>
				<article className='mapCon'>
					<h2 className='hidden'>지도</h2>
					<div id='map' ref={mapContainer}></div>
					<ul className='mapPlace'>
						<li>서울</li>
						<li>인천</li>
						<li>경기</li>
					</ul>
					<ul className='info'>
						<li>
							<FontAwesomeIcon icon={faPhoneAlt} />
							<strong>Lorem ipsum dolor sit amet.</strong>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corporis cumque
								libero assumenda iusto perspiciatis?
							</p>
						</li>
						<li>
							<FontAwesomeIcon icon={faClock} />
							<strong>Lorem ipsum dolor sit amet.</strong>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corporis cumque
								libero assumenda iusto perspiciatis?
							</p>
						</li>
					</ul>
				</article>
			</div>
			<article className='contactCon'>
				<div className='inner'>
					<h2>Contact us</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sint?</p>
					<form action=''>
						<fieldset>
							<legend className='hidden'>Contact us</legend>

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

							<div className='wrap'>
								<label htmlFor='name' className='hidden'>
									NAME
								</label>
								<input type='text' name='name' id='name' placeholder='NAME' />

								<label htmlFor='email' className='hidden'>
									E-MAIL
								</label>
								<input type='text' name='email' id='email' placeholder='E-MAIL' />
							</div>

							<label htmlFor='message' className='hidden'>
								MESSAGE
							</label>
							<textarea
								name='message'
								id='message'
								cols='30'
								rows='5'
								placeholder='MESSAGE'
							></textarea>

							<input type='submit' value='SEND' />
						</fieldset>
					</form>
				</div>
			</article>
		</Layout>
	);
}

export default Contact;
