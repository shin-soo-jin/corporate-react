import { useRef } from 'react';
import { forwardRef } from 'react';

const Notice = forwardRef((props, ref) => {
	const num = useRef(10);
	return (
		<section className='notice' ref={ref}>
			<table>
				<tbody>
					{Array(num.current)
						.fill()
						.map((_, idx) => {
							return (
								<tr key={idx}>
									<td>
										<span>NOTICE</span>
									</td>
									<td>
										<strong>Lorem ipsum dolor sit amet.</strong>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quos expedita
											officia.
										</p>
									</td>
									<td>2023.01.01</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			<ul className='pagination'>
				<li className='on'>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
			</ul>
		</section>
	);
});

export default Notice;
