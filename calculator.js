const valor = document.getElementById('valor')
const borrarTodo = document.querySelector(".borrarTodo")
const igual = document.querySelector(".igual")
const operacionPrevia = document.querySelector(".operacion_previa")
const borra = document.querySelector(".borrar")
let n1 = 0
let n2 = 0
let operacion = ""
let operacionPre = ""
let primeraOp = true
let resultado = 0
let valores = []

borrarTodo.addEventListener("click",(e) => {
	valor.innerHTML = ""
	operacionPrevia.innerHTML = ""
	primeraOp = true
})
//Boton que borra el ultimo digito
borra.addEventListener("click", (e) => {
	let a = String(valor.textContent)
	console.log(valor.textContent.length);
	let largo = a.length
	console.log("p op: "+primeraOp);
	largo = largo-1
	let b = a.slice(0,largo)
	valor.innerHTML = b
	if(!primeraOp){
		primeraOp = true;
	}
	console.log("borrar :"+primeraOp);
})

igual.addEventListener("click",(e) => {
	console.log(valor.textContent);
})

const operaciones = document.querySelectorAll(".operacion")

 for(let op of operaciones){
	console.log(primeraOp);
	op.addEventListener("click",(e) => {
		if(primeraOp){
			operacionPre = op.value
			valor.innerHTML += op.value
			primeraOp = false
			console.log(primeraOp);
		}else{
			console.log("Pre" + operacionPre);
			operacion = op.value
			console.log("Nueva " + operacion)
			operacionPrevia.innerHTML = valor.textContent
			valores = valor.textContent.split(operacionPre)
			console.log(valores);
			
			

			switch (operacionPre){
				case "+" : {
					result =  Number(valores[0]) + Number(valores[1])
					console.log("result "+result);
					let a = String(result)
					console.log("largo del resultado " + (a.length));
					if(a.includes(".")){
						let recorte = a.split(".")
						console.log(recorte[1]);
						console.log("largo de decimal "+recorte[1].length)
						resultado.innerHTML = result
						valor.innerHTML = result + op.value
						if(recorte[1].length > 4)
						{
							let decimal = recorte[1].slice(0,4)
							console.log(decimal);
							let nuevoDecimal = recorte[0]+ "." +decimal
							console.log("nuevo decimal " +nuevoDecimal);
							resultado.innerHTML = nuevoDecimal
							valor.innerHTML = nuevoDecimal + op.value
						}
					}else{			
						resultado.innerHTML = result
						valor.innerHTML = result + operacion
					}
					break;
				}
				case "-" : {
					result =  Number(valores[0]) - Number(valores[1]) 
					resultado.innerHTML = result
					valor.innerHTML = result + op.value
					break;
				}
				case "*": {
					result =  Number(valores[0]) * Number(valores[1]) 
					resultado.innerHTML = result
					valor.innerHTML = result + op.value
					break;
				}
				case "/" :{
					result =  Number(valores[0]) / Number(valores[1]) 
					
					resultado.innerHTML = result
					valor.innerHTML = result + op.value
					break;
				}
				case "r" : {
					result = Math.sqrt(valores[0])
					resultado.innerHTML = result
					valor.innerHTML = result + op.value
					break
				}
				default : resultado.innerHTML ="Error ⚠️"
			}
			//para que la ultima operacion quede guardada como la ultima usada
				operacionPre = operacion
			
			}
	})
 }

const numeros = document.querySelectorAll(".numero")
for(let n of numeros)
{
	n.addEventListener("click",(e) => {
		valor.innerHTML += n.value;
	})
}
