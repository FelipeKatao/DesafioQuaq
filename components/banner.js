import EngineApp from '../Framework/engine.js'

class Banner{
    Eng= new EngineApp()
    render(){
        this.Eng.componentsEngine.createComponent("Banner",renderBanner())
        this.Eng.componentsEngine.renderComponent("banner","Banner")
        document.getElementById("banner01").addEventListener("click",()=>{
            console.log("olaaa")
        })
    }
}

function renderBanner(){
    return "<div id='banner01A'>"+
    "<div id='banner01'>Selectimage</div>"+
    "<div id='banner02'>Selectimage</div>"+
    "</div>"
}

export default new Banner