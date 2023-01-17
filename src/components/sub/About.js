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

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/members.json`).then((json) => {
			setMembers1(json.data.team1);
		});
	}, []);

	return (
		<Layout
			name={'ABOUT'}
			txt={'About Our Company'}
			link={'about'}
			tit={'Lorem ipsum dolor sit.'}
			titTxt={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quidem?'}
		>
			<article className='value'>
				<h2 className='hidden'>our core vlaue</h2>
				<div className='inner'>
					<div>
						<i>
							<FontAwesomeIcon icon={faLifeRing} />
						</i>
						<p>
							<strong>STRATEGY</strong>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tenetur, illo
							delectus ducimus quisquam dolor error quas nesciunt impedit ipsum.
						</p>
					</div>
					<div>
						<i>
							<FontAwesomeIcon icon={faMessage} />
						</i>
						<p>
							<strong>COMMUNICATION</strong>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt hic reiciendis
							expedita repudiandae labore suscipit ullam amet ea in? Officia!
						</p>
					</div>
					<div>
						<i>
							<FontAwesomeIcon icon={faHourglass} />
						</i>
						<p>
							<strong>TIME MANAGEMENT</strong>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores praesentium
							quasi sed hic. Maiores consequatur architecto nemo similique voluptatem?
						</p>
					</div>
					<div>
						<i>
							<FontAwesomeIcon icon={faLightbulb} />
						</i>
						<p>
							<strong>INNOVATION</strong>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi quis corrupti
							officiis repellendus a saepe, repudiandae deserunt laboriosam obcaecati?
						</p>
					</div>
				</div>
			</article>

			<article className='member'>
				<h2 className='hidden'>our member</h2>
				<ul>
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
			</article>

			<article className='txt'>
				<div className='inner'>
					<div className='left'>
						<span>about us</span>
						<h2>We believe bold ideas can be a force for good.</h2>
						<p>We work directly for our clients and put client’s interests first.</p>
					</div>
					<div className='right'>
						<p>
							Every project is unique, with its own set of requirements. We get under the skin of
							the problem. Define the challenge. And bring together the right people and the right
							elements to create meaningful brand experiences.
						</p>
						<p className='sign'>sign</p>
						<span>CEO</span>
					</div>
				</div>
			</article>
		</Layout>
	);
}

export default About;
