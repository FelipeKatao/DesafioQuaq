import EngineApp from '../Framework/engine.js'

class Restaurante{
    
    render(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        let index= 0
        myObj.forEach(element => {
            let eng  = new EngineApp();
            eng.componentsEngine.createComponent(myObj[index]['restaurante'],renderRestaurante(myObj[index]['restaurante'],myObj[index]['img'],myObj[index]['Nota']))
            eng.componentsEngine.renderComponent("restaurantesPage",myObj[index]['restaurante'])
            index+=1
        });
    }
};
xmlhttp.open("GET", "../json/restaurantes.json", true);
xmlhttp.send();
    }
}

function renderRestaurante(Nome,img,nota){
     return "<article id='restauranteVitrine'>"+
     "<img src='"+img+"' height='170vh' width='350vh'>"+
     "<b>"+Nome+
     "<h4 class='rate'>"+nota+"</h4></b>"+
     "</article>"
}
export default new Restaurante