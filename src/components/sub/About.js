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

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/members.json`).then((json) => {
			setMembers1(json.data.team1);
			setMembers2(json.data.team2);
			setMembers3(json.data.team3);
		});
	}, []);

	return (
		<Layout name={'ABOUT'} txt={'About Our Company'}>
			<article className='value'>
				<h2>OUR CORE VALUE</h2>
				<div className='wrap'>
					<div>
						<FontAwesomeIcon icon={faLifeRing} />
						<p>
							<strong>STRATEGY</strong>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
							iusto assumenda repudiandae voluptate magni itaque blanditiis
							iste, quod aspernatur molestiae.
						</p>
					</div>
					<div>
						<FontAwesomeIcon icon={faMessage} />
						<p>
							<strong>COMMUNICATION</strong>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
							iusto assumenda repudiandae voluptate magni itaque blanditiis
							iste, quod aspernatur molestiae.
						</p>
					</div>
					<div>
						<FontAwesomeIcon icon={faHourglass} />
						<p>
							<strong>TIME MANAGEMENT</strong>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
							iusto assumenda repudiandae voluptate magni itaque blanditiis
							iste, quod aspernatur molestiae.
						</p>
					</div>
					<div>
						<FontAwesomeIcon icon={faLightbulb} />
						<p>
							<strong>INNOVATION</strong>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
							iusto assumenda repudiandae voluptate magni itaque blanditiis
							iste, quod aspernatur molestiae.
						</p>
					</div>
				</div>
			</article>

			<article className='member'>
				<div className='text'>
					<h2>OUR TEAM</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
						similique, veniam, nesciunt voluptates laborum amet ipsam,
						consequuntur cupiditate eum provident inventore recusandae officia
						assumenda quaerat tempora laudantium ea enim. Facere?
					</p>
				</div>
				<div className='team'>
					<ul className='tabBtn'>
						<li className='on'>TEAM1</li>
						<li>TEAM2</li>
						<li>TEAM3</li>
					</ul>
					<ul className='tabBox on'>
						{Members1.map((data, idx) => {
							return (
								<li key={idx}>
									<div className='pic'>
										<img
											src={`${process.env.PUBLIC_URL}/img/${data.pic}`}
											alt='{data.name}'
										/>
									</div>
									<p>
										<strong>{data.name}</strong>
										{data.position}
									</p>
								</li>
							);
						})}
					</ul>
					<ul className='tabBox'>
						{Members2.map((data, idx) => {
							return (
								<li key={idx}>
									<div className='pic'>
										<img
											src={`${process.env.PUBLIC_URL}/img/${data.pic}`}
											alt='{data.name}'
										/>
									</div>
									<p>
										<strong>{data.name}</strong>
										{data.position}
									</p>
								</li>
							);
						})}
					</ul>
					<ul className='tabBox'>
						{Members3.map((data, idx) => {
							return (
								<li key={idx}>
									<div className='pic'>
										<img
											src={`${process.env.PUBLIC_URL}/img/${data.pic}`}
											alt='{data.name}'
										/>
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
		</Layout>
	);
}

export default About;
