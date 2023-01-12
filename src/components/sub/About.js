import Layout from '../common/Layout';
import {
	faHourglass,
	faLifeRing,
	faLightbulb,
	faMessage,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';

function About() {
	const [Members1, setMembers1] = useState([]);
	const [Members2, setMembers2] = useState([]);
	const [Members3, setMembers3] = useState([]);
	const [Index, setIndex] = useState(1);

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/members.json`).then((json) => {
			setMembers1(json.data.team1);
			setMembers2(json.data.team2);
			setMembers3(json.data.team3);
		});
	}, []);

	return (
		<Layout name={'ABOUT'} txt={'About Our Company'} link={'/about'}>
			<div className='inner'>
				<article className='value'>
					<h2>OUR CORE VALUE</h2>
					<div className='wrap'>
						<div>
							<FontAwesomeIcon icon={faLifeRing} />
							<p>
								<strong>STRATEGY</strong>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores iusto assumenda
								repudiandae voluptate magni itaque blanditiis iste, quod aspernatur molestiae.
							</p>
						</div>
						<div>
							<FontAwesomeIcon icon={faMessage} />
							<p>
								<strong>COMMUNICATION</strong>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores iusto assumenda
								repudiandae voluptate magni itaque blanditiis iste, quod aspernatur molestiae.
							</p>
						</div>
						<div>
							<FontAwesomeIcon icon={faHourglass} />
							<p>
								<strong>TIME MANAGEMENT</strong>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores iusto assumenda
								repudiandae voluptate magni itaque blanditiis iste, quod aspernatur molestiae.
							</p>
						</div>
						<div>
							<FontAwesomeIcon icon={faLightbulb} />
							<p>
								<strong>INNOVATION</strong>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores iusto assumenda
								repudiandae voluptate magni itaque blanditiis iste, quod aspernatur molestiae.
							</p>
						</div>
					</div>
				</article>

				<article className='member'>
					<div className='text'>
						<h2>OUR TEAM</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique, veniam,
							nesciunt voluptates laborum amet ipsam, consequuntur cupiditate eum provident
							inventore recusandae officia assumenda quaerat tempora laudantium ea enim. Facere?
						</p>
					</div>
					<div className='team'>
						<ul className='tabBtn'>
							<li
								className={Index === 1 ? 'on' : ''}
								onClick={() => {
									setIndex(1);
								}}
							>
								TEAM1
							</li>
							<li
								className={Index === 2 ? 'on' : ''}
								onClick={() => {
									setIndex(2);
								}}
							>
								TEAM2
							</li>
							<li
								className={Index === 3 ? 'on' : ''}
								onClick={() => {
									setIndex(3);
								}}
							>
								TEAM3
							</li>
						</ul>
						<ul className={Index === 1 ? 'tabBox on' : 'tabBox'}>
							{Members1.map((data, idx) => {
								return (
									<li key={idx}>
										<div className='pic'>
											<img src={`${process.env.PUBLIC_URL}/img/${data.pic}`} alt='{data.name}' />
										</div>
										<p>
											<strong>{data.name}</strong>
											{data.position}
										</p>
									</li>
								);
							})}
						</ul>
						<ul className={Index === 2 ? 'tabBox on' : 'tabBox'}>
							{Members2.map((data, idx) => {
								return (
									<li key={idx}>
										<div className='pic'>
											<img src={`${process.env.PUBLIC_URL}/img/${data.pic}`} alt='{data.name}' />
										</div>
										<p>
											<strong>{data.name}</strong>
											{data.position}
										</p>
									</li>
								);
							})}
						</ul>
						<ul className={Index === 3 ? 'tabBox on' : 'tabBox'}>
							{Members3.map((data, idx) => {
								return (
									<li key={idx}>
										<div className='pic'>
											<img src={`${process.env.PUBLIC_URL}/img/${data.pic}`} alt='{data.name}' />
										</div>
										<p>
											<strong>{data.name}</strong>
											{data.position}
										</p>
									</li>
								);
							})}
						</ul>
					</div>
				</article>
			</div>
		</Layout>
	);
}

export default About;
