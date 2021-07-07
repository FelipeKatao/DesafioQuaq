import engineApp  from '../Framework/engine.js'
import Filtros from '../components/Filtros.js'
import menuBar from './menuBar.js'
import banner from '../components/banner.js'
import restaurantes from '../components/restaurantes.js'

class MainPage{
    eng = new engineApp()
    render(){
        this.eng.componentsEngine.createComponent("Home",renderHome())
        this.eng.componentsEngine.renderComponent("app","Home")
        menuBar.render()
        Filtros.render()
        banner.render()
        restaurantes.render()
    }
}

function renderHome(){
    return "<div id='head' class='padding2'></div>"+
    "<div id='menus' class='padding2'></div>"+
    "<div id='banner' class='padding2'></div>"+
    "<div id='restaurantes' class='padding2'></div>"+
    "<div id='restaurantesPage' class='padding2'></div>"
}

export default new MainPage()