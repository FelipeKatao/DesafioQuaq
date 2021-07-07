import engineApp from '../Framework/engine.js'

class MenuBar{
  eng = new engineApp()
  render(){
    this.eng.componentsEngine.createComponent("menuBar",MenuBarRender())
    this.eng.componentsEngine.renderComponent("head","menuBar")
  }
}

function MenuBarRender(){
  return "<nav id='menuBar'>"+
  "<div id='endereco'><b>Endereço R. são paulo 109</b></div>"+
  "<div id='restaurantes'>Restaurantes</div>"+
  "</nav>"
}

export default new MenuBar