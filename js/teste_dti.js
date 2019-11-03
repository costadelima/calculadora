	
function myFunction(){
	var canil;
	var valor;

	class PetShop{      		

	constructor(id, name, precoPequenoSemana, precoGrandeSemana, precoPequenoFinal, precoGrandeFinal, distancia){
		this.name = name;
		this.id = id;
		this.precoPequenoSemana = precoPequenoSemana;
		this.precoPequenoFinal = precoPequenoFinal;
		this.precoGrandeSemana = precoGrandeSemana;
		this.precoGrandeFinal = precoGrandeFinal;
		this.distancia = distancia;
	}

	getName(){
		return this.name;
	}

	getId(){
		return this.name;
	}

	getPrecoPequenoSemana(quantidade){
		return this.precoPequenoSemana * quantidade;
	}

	getPrecoGrandeSemana(quantidade){
		return this.precoGrandeSemana * quantidade;
	}

	getPrecoPequenoFinal(quantidade){
		return this.precoPequenoFinal * quantidade;
	}

	getPrecoGrandeFinal(quantidade){
		return this.precoGrandeFinal * quantidade;
	}

	getTotalSemana(qtdePequeno = 0, qtdeGrande = 0){
		return this.getPrecoPequenoSemana(qtdePequeno) + this.getPrecoGrandeSemana(qtdeGrande);
	}

	getTotalFinal(qtdePequeno = 0, qtdeGrande = 0){
		return this.getPrecoPequenoFinal(qtdePequeno) + this.getPrecoGrandeFinal(qtdeGrande);
	}

	getDistancia(){
		return this.distancia;
	}
	}

	var data = document.getElementById("data").value;
	var dt = new Date(data);
	var QtdePequeno = document.getElementById("cachorrosPequenos").value;;
	var QtdeGrande = document.getElementById("cachorrosGrandes").value;;

	//var petshops[]; //usar para instanciar mais petshops

	feliz = new PetShop(0, "Canino Feliz", 20, 40, 24, 48, 2);
	rex = new PetShop(1, "Vai Rex", 15, 50, 20, 55, 1.7);
	chawgas = new PetShop(2, "ChowChawgas", 30, 45, 30, 45, 0.8);


	if(dt.getDay() < 5){ //se for dia da semana  
	//canil = // document.write("semana: "+dt.getDay();       	
	//valor total dos banhos na semana
	var totalFeliz = feliz.getTotalSemana(QtdePequeno,QtdeGrande);
	var totalRex = rex.getTotalSemana(QtdePequeno,QtdeGrande);
	var totalChawgas = chawgas.getTotalSemana(QtdePequeno,QtdeGrande);

	//distancia do canil aos petchops
	var distanciaFeliz = feliz.getDistancia();
	var distanciaRex = rex.getDistancia();
	var distanciaChawgas = chawgas.getDistancia();

	var total = [totalFeliz,totalRex,totalChawgas];
	var distancia = [distanciaFeliz, distanciaRex, distanciaChawgas];

	if(totalFeliz != totalRex && totalFeliz != totalChawgas && totalRex != totalChawgas){
		if(total.indexOf(Math.min.apply(Math,total)) == 0){
			canil = feliz.getName();	
			valor = totalFeliz;	
		}else if(total.indexOf(Math.min.apply(Math,total)) == 1){
			canil = rex.getName();	
			valor = totalRex;	
		}else{
			canil = chawgas.getName();	
			valor = totalChawgas;	
		}
	}else if(totalFeliz == totalRex && totalFeliz == totalChawgas && totalRex == totalChawgas){
		if(total.indexOf(Math.min.apply(Math,distancia)) == 0){
			canil = feliz.getName();	
			valor = totalFeliz;	
		}else if(total.indexOf(Math.min.apply(Math,distancia)) == 1){
			canil = rex.getName();	
			valor = totalRex;	
		}else{
			canil = chawgas.getName();	
			valor = totalChawgas;	
		}
	}else if(totalFeliz == totalRex){
		if(total.indexOf(Math.min.apply(Math,distancia)) == 0){
			canil = feliz.getName();	
			valor = totalFeliz;	
		}else{
			canil = rex.getName();	
			valor = totalRex;	
		}
	}else if(totalFeliz == totalChawgas){
		if(total.indexOf(Math.min.apply(Math,distancia)) == 0){
			canil = feliz.getName();	
			valor = totalFeliz;	
		}else{
			canil = chawgas.getName();	
			valor = totalChawgas;	
		}	
	}else {
		if(total.indexOf(Math.min.apply(Math,distancia)) == 1){
			canil = rex.getName();	
			valor = totalRex;	
		}else{
			canil = chawgas.getName();	
			valor = totalChawgas;	
		}
	}         	
	}else{ //finais de semana
	//canil = // document.write("final de semana"+dt.getDay(); 
	//valor total dos banhos na semana
	var totalFeliz = feliz.getTotalFinal(QtdePequeno,QtdeGrande);
	var totalRex = rex.getTotalFinal(QtdePequeno,QtdeGrande);
	var totalChawgas = chawgas.getTotalFinal(QtdePequeno,QtdeGrande);

	// document.write("arroz");
	//distancia do canil aos petchops
	var distanciaFeliz = feliz.getDistancia();
	var distanciaRex = rex.getDistancia();
	var distanciaChawgas = chawgas.getDistancia();

	var total = [totalFeliz,totalRex,totalChawgas];
	var distancia = [distanciaFeliz, distanciaRex, distanciaChawgas];


	if(totalFeliz != totalRex && totalFeliz != totalChawgas && totalRex != totalChawgas){
		if(total.indexOf(Math.min.apply(Math,total)) == 0){
			canil = feliz.getName();	
			valor = totalFeliz;	
		}else if(total.indexOf(Math.min.apply(Math,total)) == 1){
			canil = rex.getName();	
			valor = totalRex;	
		}else{
			canil = chawgas.getName();	
			valor = totalChawgas;	
		}
	}else if(totalFeliz == totalRex && totalFeliz == totalChawgas && totalRex == totalChawgas){
		if(total.indexOf(Math.min.apply(Math,distancia)) == 0){
			canil = feliz.getName();	
			valor = totalFeliz;	
		}else if(total.indexOf(Math.min.apply(Math,distancia)) == 1){
			canil = rex.getName();	
			valor = totalRex;	
		}else{
			canil = chawgas.getName();	
			valor = totalChawgas;	
		}
	}else if(totalFeliz == totalRex){
		if(total.indexOf(Math.min.apply(Math,distancia)) == 0){
			canil = feliz.getName();	
			valor = totalFeliz;	
		}else{
			canil = rex.getName();	
			valor = totalRex;	
		}
	}else if(totalFeliz == totalChawgas){
		if(total.indexOf(Math.min.apply(Math,distancia)) == 0){
			canil = feliz.getName();	
			valor = totalFeliz;	
		}else{
			canil = chawgas.getName();	
			valor = totalChawgas;	
		}	
	}else {
		if(total.indexOf(Math.min.apply(Math,distancia)) == 1){
			canil = rex.getName();	
			valor = totalRex;	
		}else{
			canil = chawgas.getName();	
			valor = totalChawgas;	
		}
	}
	}
	document.getElementById("canil").innerHTML = "Melhor PetShop: "+canil;  	  		
	document.getElementById("valor").innerHTML = "Total dos Banhos: R$ "+valor+",00";
}  	

let botaoCalculadora = document.querySelector('#calcular');
botaoCalculadora.addEventListener('click',myFunction);