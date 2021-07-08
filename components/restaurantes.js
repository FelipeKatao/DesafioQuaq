import EngineApp from '../Framework/engine.js'

class Restaurante{
    
    render(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        let index= 0
        let eng  = new EngineApp()
        eng.componentsEngine.createComponent("vitrineRest",renderRestaurante())
        eng.componentsEngine.renderComponent("restaurantesPage","vitrineRest")
        myObj.forEach(element => {
            eng.componentsEngine.createComponent(myObj[index]['restaurante'],renderRestaurantesId(myObj[index]['restaurante'],myObj[index]['img'],myObj[index]['Nota'],myObj[index]['TaxaEntrega'],myObj[index]['categoria']))
            eng.componentsEngine.renderComponent("restaurantesArea",myObj[index]['restaurante'])
            index+=1
        });
    }
};
xmlhttp.open("GET", "../json/restaurantes.json", true);
xmlhttp.send();
    }
}

function renderRestaurantesId(Nome,img,nota,taxa,categoria){
    return "<div id='"+Nome+"' class='restauranteIcon'><img src='"+img+"' height='60vh' width='60vh'>"+
    "<b>"+Nome+"</b>"+
    "<h4 class='rate'><img src='../img/estrela.svg'>"+nota+"<b>"+categoria+"</b></h4>"+
    "<h5>R$ "+taxa+"</h5>"+
    "<img class='like-rest' src='../img/coracao.svg'>"+
    "</div>"
}

function renderRestaurante(){
     return "<article id='restauranteVitrine'>"+
     "<div class='titlesub'>Restaurantes</div><br>"+
     "<div id='restaurantesArea'></div>"+
     "</article>"
}
export default new Restaurante