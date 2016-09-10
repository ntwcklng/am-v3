import { h, Component } from 'preact';
import style from './style';

export default class ReferenzenItem extends Component {
	render({data}) {
		return (
			<li class={style.referenzItem}>
				<a href={data.url} alt={data.title} target="_blank">
					<img src={data.img} alt={data.title} />
					<div>
						{data.title}
					</div>
				</a>
			</li>
		);
	}
}
