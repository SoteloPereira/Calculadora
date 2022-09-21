const valor = document.getElementById('valor')
const borrarTodo = document.querySelector(".borrarTodo")
const igual = document.querySelector(".igual")
const resultado = document.querySelector(".resultado")
let n1 = 0
let n2 = 0
let operacion = ""
let operacionPre = ""
let cantOp = false
let result = 0
let valores = []

borrarTodo.addEventListener("click",(e) => {
	valor.innerHTML = "";
	resultado.innerHTML = ""
	cantOp = 0
})

igual.addEventListener("click",(e) => {
	console.log(valor.textContent);
})

const operaciones = document.querySelectorAll(".operacion")

 for(let op of operaciones){
	op.addEventListener("click",(e) => {
		//operacionPre = op.value
		//console.log("previa "+operacionPre);
		if(cantOp === false){
			operacionPre = op.value
			//console.log(operacionPre)
			valor.innerHTML += op.value
			cantOp = true
		}else{
			
			console.log("Pre" + operacionPre);
			operacion = op.value
			console.log("Nueva " + operacion)
			
			valores = valor.textContent.split(operacionPre)
			console.log(valores);
			switch (operacionPre){
				case "+" : {
					result =  Number(valores[0]) + Number(valores[1])
					console.log(result);
					resultado.innerHTML = result
					valor.innerHTML = result + op.value
					break;
				}
				case "-" : {
					result =  Number(valores[0]) - Number(valores[1]) 
					console.log(result);
					resultado.innerHTML = result
					console.log(operacion);
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
