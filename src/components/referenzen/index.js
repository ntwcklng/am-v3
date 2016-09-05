import { h, Component } from 'preact';
import style from './style';
import ReferenzenItem from './item.js';
import ReferenzenData from './data.js';


export default class Referenzen extends Component {
	render() {
		const renderItems = ReferenzenData.map((i) => {
			return (<ReferenzenItem data={i}/>);
		});
		return (
			<div>
				<h1>Referenzen</h1>
				<ul class={style.referenzen}>
					{renderItems}
				</ul>
			</div>
		);
	}
}
