import EngineApp from '../Framework/engine.js'
import HomeScreen from '../components/HomeScreen.js'

class HomeRestaurante{
    constructor(restaurante){
       this.restaurante = restaurante
    }
    render(value){
        let eng = new EngineApp()
        //eng.renderEngine.renderHtml("app","<div>"+this.restaurante+"</div>")  
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);
                let index = 0
                let eng = new EngineApp()
                myObj.forEach(element => {
                    if(element["restaurante"] == value){
                        let Cardaprio = Object.keys(element["produtos"])
                        eng.componentsEngine.createComponent("restaurante",renderRestaurante(element["restaurante"],element["img"],element["categoria"],element["Nota"],element["cover"]))
                        eng.componentsEngine.renderComponent("app","restaurante")
                        AddEventListnerTO()
                        index=0
                        while(Object.keys(element["produtos"]).length > index){
                            eng.componentsEngine.createComponent(Cardaprio[index],renderCardaprio(Cardaprio[index],element["produtos"][Cardaprio[index]]["descição"],element["produtos"][Cardaprio[index]]["preco"],element["produtos"][Cardaprio[index]]["img"]))
                            eng.componentsEngine.renderComponent("cardaprio",Cardaprio[index])
                            index+=1
                        }
                    }
                    index += 1
                });
            }
        };
        xmlhttp.open("GET", "../json/restaurantes.json", true);
        xmlhttp.send(); 

    }
}

function AddEventListnerTO() {
    var elements = document.getElementById("back");
    elements.addEventListener('click', myFunction, false);
}
var myFunction = function () {
    let eng = new EngineApp()
    eng.renderEngine.pageDynamic="app"
    eng.renderEngine.clearPage()
    HomeScreen.render()
};

function renderRestaurante(tile,cover,descr,stars,imgcover){
    return "<div class='body'>"+
    "<div id='back'> < </div>"+
    "<img src='"+imgcover+"' class='cover'>"+
    "<div class='head'>"+
    "<img src='"+cover+"' height='60' width='60'>"+
    "<div class='titlehead'>"+tile+"</div>"+
    "<h4>"+descr+"</h4>"+
    "<div class='stars'>"+stars+"</div>"+
    "</div>"+
    "<div id='cardaprio'></div>"
    "</div>"
}

function renderCardaprio(title,about,price,img){
    return "<div class='order'>"+
    "<img src='"+img+"'>"+
    "<span>"+
    "<h4>"+title+"</h4>"+
    "<h5>"+about+""+
    "<h6>R$"+price+"</h6></h5>"
    "</span>"+
    "</div>"
}

export default new HomeRestaurante