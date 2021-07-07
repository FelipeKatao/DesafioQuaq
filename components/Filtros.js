import EngineApp from "../Framework/engine.js"

class Filtro{
    eng = new EngineApp()
    render(){
        this.eng.componentsEngine.createComponent("filtro",filtrorender())
        this.eng.componentsEngine.renderComponent("menus","filtro")
    }
}

function filtrorender(){
    return "<div id='filtros'>"+
    "<div class='pill'>Ordenar</div><div class='pill'>Para Retirar</div><div class='pill'>Entrega Gratis</div> "+
    "</div>"
}


export default new Filtro