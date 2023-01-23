import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
			<article className='member'>
				<div className='inner'>
					<span> We are a team.</span>
					<h2>We love what we do. Simple as that.</h2>
				</div>
				<ul>
					{Members.map((data, idx) => {
						return (
							<li key={idx}>
								<div className='pic'>
									<img src={`${process.env.PUBLIC_URL}/img/${data.pic}`} alt='{data.name}' />
								</div>
								<div className='info'>
									<h3>{data.name}</h3>
									<p>{data.position}</p>
									<div className='sns'>
										<button>
											<FontAwesomeIcon icon={faFacebookF} />
										</button>
										<button>
											<FontAwesomeIcon icon={faTwitter} />
										</button>
										<button>
											<FontAwesomeIcon icon={faLinkedinIn} />
										</button>
									</div>
								</div>
							</li>
						);
					})}
					<li>
						<h3>JOBS</h3>
						<p>We’re always looking for new talents</p>
						<button>APPLY NOW</button>
					</li>
					<li>
						<img src={`${process.env.PUBLIC_URL}/img/2visual.jpg`} alt='' />
					</li>
				</ul>
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
							CEO Aiden<i className='sign'>Aiden</i>
						</span>
					</div>
				</div>
			</article>
		</Layout>
	);
}

export default About;
