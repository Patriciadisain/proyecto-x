
function enviarMsg (){
	var valorInput = document.getElementById('mensajes').value;	
	var contMsg = document.getElementById('conversacion');
	var burbuja2 = document.createElement('div');
		burbuja2.setAttribute("class","w-message w-message-out");
	var burbuja = document.createElement('div');
		burbuja.setAttribute("class","w-message-text");	
	var pMsg = document.createElement('p');
	var mensaje = document.createTextNode(valorInput);
	var horaDiv = document.createElement('div');
	var horaReal = document.createTextNode("12:40");
		horaDiv.setAttribute("class","time");	
		contMsg.appendChild(burbuja2);	
		burbuja2.appendChild(burbuja);
		burbuja.appendChild(pMsg);
		pMsg.appendChild(mensaje);
		burbuja.appendChild(horaDiv);
		horaDiv.appendChild(horaReal);
};
function limpiar (){
		var valorInput = document.getElementById('mensajes').value;
		valorInput.innerHTML = "";
};
function conversacion(){
	

};

