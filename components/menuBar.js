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
  "<div id='endereco'><b>R. são paulo</b></div>"+
  "<div id='restaurantes'>Restaurantes</div>"+
  "</nav>"
}

export default new MenuBar