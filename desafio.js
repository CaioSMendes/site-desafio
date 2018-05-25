var resultado=0;
var salario=0;
var aux=0;
var total=0;
var val=0;

function tabela(){
	
	val = valores;
	console.log("val tabela->",val)
}

function calcula(){
	var gastos = document.getElementById("teste")
	var valores = document.calcform.valores.value;
	var sinal = document.getElementById("sinal").value;
	var suporte = document.getElementById("desc-renda2").value;

		
	
	salario=gastos;
	console.log(gastos);
	console.log(valores);
	console.log(sinal);

	

		if(sinal == "adicionar"){
			resultado = resultado + parseFloat(valores);
			gastos.innerHTML  = resultado.toString() 
			// console.log("resultado->",resultado);
		}else{
			aux = aux + parseFloat(valores);
			console.log("aux->",aux);
			var gastos = document.getElementById("teste2")
			gastos.innerHTML = aux.toString()

        }
        total = parseFloat(resultado) - parseFloat(aux);
        console.log("total->",total);
        var gastos = document.getElementById("teste0")
		gastos.innerHTML = total.toString()
			if(total<0){
				alert("Voce esta no VERMELHO !!!");
			}

}


