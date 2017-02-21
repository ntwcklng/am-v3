import { h, Component } from 'preact'
import style from './style'
import Referenzen from '../referenzen'
import LeistungenData from './data.js'
import LeistungenItem from './item.js'

export default class Home extends Component {
  render () {
    const renderLeistungen = LeistungenData.map((i) => {
      return (<LeistungenItem data={i} />)
    })
    return (
      <div>
        <h1>Leistungen & Preise</h1>
        <div class={style.home}>
          <ul class={style.leistungen}>
            {renderLeistungen}
          </ul>
        </div>
        <Referenzen />
      </div>
		)
  }
}
