import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<Link href="/"><img src="/assets/AM_Logo.png" alt="Autopflege Mieth Logo"/></Link>
			</header>
		);
	}
}
