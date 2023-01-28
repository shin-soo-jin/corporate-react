import { useState } from 'react';

function Contact() {
	const publicUrl = process.env.PUBLIC_URL;
	const [Index, setIndex] = useState(0);
	const num = 4;
	return (
		<section id='contact' className='scrollSection'>
			<div className='inner'>
				<ul>
					{Array(num)
						.fill()
						.map((el, idx) => {
							return (
								<li key={idx}>
									<img src={`${publicUrl}/img/partner${idx + 1}.png`} alt='' />
								</li>
							);
						})}
				</ul>
			</div>
		</section>
	);
}

export default Contact;
