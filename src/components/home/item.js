import { h, Component } from 'preact';
import style from './style';

export default class LeistungenItem extends Component {
	render({data}) {
		let infos = null;
		if (data.infos) {
			infos = <span> | Weitere Infos: <a href={data.infos[0].url}>{data.infos[0].title}</a></span>;
		}
		return (
			<li class={style.leistungenItem}>
				<div>
					<h1>{data.title}</h1>
					<hr />
					<p>
						{data.desc.split("\n").map((item)=>{
							return (<span>{item}<br /></span>);
						})}
					</p>
					<p>
						<strong>ab {data.price}€</strong>{infos}
					</p>
				</div>
			</li>
		);
	}
}
