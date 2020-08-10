function verificar() {
	var data= new Date()
	var ano= data.getFullYear()
	var fano= document.getElementById('txtano')
	var res= document.getElementById('res')

	if (fano.value.length == 0 ||Number(fano.value) > ano) {
		window.alert('[ERROR] Verifique os dados e tente novamente')
	} else{
		var fsex= window.document.getElementsByName('radsex1') //sempre que usar esse get, lembre-se do s no final do elements,se nao pode dar erro
		var idade= ano - Number(fano.value)
		var genero=''

		// Nas linhas abaixo, foi como se eu tivesse criado no html uma tag img e dado o id foto, mas ele foi criado em js como mostrado
		var img= document.createElement('img')
		img.setAttribute('id','foto') 

		if (fsex[0].checked) {
				genero='Homem'
				if (idade > 0 && idade < 10) {
					// Criança
					img.setAttribute('src','https://i.imgur.com/WQqoYlv.png')
				}else if(idade < 21){
					// Jovem
					img.setAttribute('src','https://i.imgur.com/Gq4aS5q.png')
				} else if (idade < 50){
					// Adulto
					img.setAttribute('src','https://i.imgur.com/Yp0zBgW.png')
				}else{
					// Idoso
					img.setAttribute('src','https://i.imgur.com/I2RqUhX.png')
				}

		}else if (fsex[1].checked){
				genero='Mulher'
				if (idade > 0 && idade < 10) {
						// Criança
						img.setAttribute('src','https://i.imgur.com/fUhAn11.png')
					}else if(idade < 21){
						// Jovem
						img.setAttribute('src','https://i.imgur.com/Xrs3xH9.png')
					} else if (idade < 50){
						// Adulto
						img.setAttribute('src','https://i.imgur.com/YbnwZF6.png')
					}else{
						// Idoso
						img.setAttribute('src','https://i.imgur.com/rqoQw7G.png')
					}
		}else{
			window.alert('Deu errado')
		}

		res.innerHTML= `<p>Detectamos: ${genero} com ${idade} anos.</p>`
		res.appendChild(img)

	}
}