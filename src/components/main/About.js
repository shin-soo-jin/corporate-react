import {
	faHourglass,
	faLifeRing,
	faLightbulb,
	faMessage,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
	return (
		<section id='about'>
			<div className='inner'>
				<h2 className='hidden'>ABOUT</h2>
				<div className='wrap'>
					<article>
						<i>
							<FontAwesomeIcon icon={faLifeRing} />
						</i>
						<h3>GLOBAL STRATEGY</h3>
						<p>
							Sometimes the simplest things are the hardest to find So we created a new line for
							everday life All your
						</p>
					</article>
					<article>
						<i>
							<FontAwesomeIcon icon={faMessage} />
						</i>
						<h3>GLOBAL STRATEGY</h3>
						<p>
							Sometimes the simplest things are the hardest to find So we created a new line for
							everday life All your
						</p>
					</article>
					<article>
						<i>
							<FontAwesomeIcon icon={faHourglass} />
						</i>
						<h3>GLOBAL STRATEGY</h3>
						<p>
							Sometimes the simplest things are the hardest to find So we created a new line for
							everday life All your
						</p>
					</article>
					<article>
						<i>
							<FontAwesomeIcon icon={faLightbulb} />
						</i>
						<h3>GLOBAL STRATEGY</h3>
						<p>
							Sometimes the simplest things are the hardest to find So we created a new line for
							everday life All your
						</p>
					</article>
				</div>
			</div>
		</section>
	);
}

export default About;
