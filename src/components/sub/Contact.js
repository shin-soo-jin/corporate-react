import { faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
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

	const marker = new kakao.maps.Marker({
		position: mapOption.current.center,
	});
	const mapTypeControl = new kakao.maps.MapTypeControl();
	const zoomControl = new kakao.maps.ZoomControl();

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
	}, [Index]);

	return (
		<Layout
			name={'CONTACT'}
			txt={'Contact Our Company'}
			link={'contact'}
			tit={'Come and visit us'}
			titTxt={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dignissimos?'}
		>
			<article className='mapCon'>
				<div className='inner'>
					<h2 className='hidden'>지도</h2>
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
				</div>
			</article>
			<article className='contactCon'>
				<div className='inner'>
					<h2>Lorem, ipsum.</h2>
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
								<div className='left'>
									<label htmlFor='name' className='hidden'>
										NAME
									</label>
									<input type='text' name='name' id='name' placeholder='NAME' />

									<label htmlFor='email' className='hidden'>
										E-MAIL
									</label>
									<input type='text' name='email' id='email' placeholder='E-MAIL' />
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
									></textarea>
								</div>
							</div>

							<input type='submit' value='SEND' />
						</fieldset>
					</form>
				</div>
			</article>
		</Layout>
	);
}

export default Contact;
