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
	const [Members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/members.json`).then((json) => {
			setMembers(json.data.team);
		});
	}, []);

	return (
		<Layout
			name={'ABOUT'}
			txt={'ABOUT OUR COMPANY'}
			link={'about'}
			tit={'Lorem ipsum dolor sit.'}
			titTxt={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quidem?'}
		>
			<article className='value'>
				<div className='inner'>
					<div className='text'>
						<h2>We help and solve your business problem</h2>
						<p>
							Uniquely unleash client-centered relationships and world-class alignments Compellingly
							impact premier enterprise quality vectors whereas client has functionalities.
							Seamlessly benchmark
						</p>
					</div>
					<div className='wrap'>
						<div>
							<i>
								<FontAwesomeIcon icon={faLifeRing} />
							</i>
							<p>
								<strong>STRATEGY</strong>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>
						</div>
						<div>
							<i>
								<FontAwesomeIcon icon={faMessage} />
							</i>
							<p>
								<strong>COMMUNICATION</strong>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>
						</div>
						<div>
							<i>
								<FontAwesomeIcon icon={faHourglass} />
							</i>
							<p>
								<strong>TIME MANAGEMENT</strong>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>
						</div>
						<div>
							<i>
								<FontAwesomeIcon icon={faLightbulb} />
							</i>
							<p>
								<strong>INNOVATION</strong>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>
						</div>
					</div>
				</div>
			</article>

			<article className='member'>
				<div className='inner'>
					<div className='text'>
						<h2>A few words teamwork company</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla in nam possimus
							voluptatum quod perferendis aliquid nemo, reprehenderit debitis saepe dolor architecto
							sapiente necessitatibus unde eveniet! Facilis, unde quisquam?
						</p>
					</div>
					<ul>
						{Members.map((data, idx) => {
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

			<article className='ceo'>
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
						<span>
							CEO James<i className='sign'>James</i>
						</span>
					</div>
				</div>
			</article>
		</Layout>
	);
}

export default About;
