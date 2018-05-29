var resultado=0;
var salario=0;
var aux=0;
var total=0;
var val=0;

function calcula(){
	var gastos = document.getElementById("teste")
	var valores = document.calcform.valores.value;
	var sinal = document.getElementById("sinal").value;
	var div = document.createTextNode(gastos)
	var div1 = document.createElement("gastos");
	
	salario=gastos;
	console.log("string ->",div);
	console.log("gastos ->",gastos);
	console.log(valores);
	console.log(sinal);

		if(sinal == "adicionar"){
			resultado = resultado + parseFloat(valores);
			gastos.innerHTML  = resultado.toString() 
			div1.innerHTML = gastos;
			document.getElementById("renda-desc").appendChild(div1);
     	    document.getElementById("valor-renda").innerHTML=valores;//aqui
 

		}else{
			aux = aux + parseFloat(valores);
			console.log("aux->",aux);
			var gastos = document.getElementById("teste2")
			gastos.innerHTML = aux.toString()
			document.getElementById("desp-desc").innerHTML=gastos.toString();
			document.getElementById("valor-desp").innerHTML=valores;
		}

        total = parseFloat(resultado) - parseFloat(aux);
        console.log("total->",total);
        var gastos = document.getElementById("teste0")
		gastos.innerHTML = total.toString()
			if(total<0){
				alert("Voce esta no VERMELHO !!!");
			}

}
