import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Footer extends Component {
	render() {
		return (
			<footer class={style.footer}>
				<a href="/impressum">Impressum</a>
			</footer>
		);
	}
}
