class Atleta{
    constructor(nome,idade,peso,altura,notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
    }
    
    
calculaCategoria(){
    let categoria="";
    if(this.idade >= 16 && this.idade <= 30){categoria = "Adulto";
}else if(this.idade === 12 || this.idade === 13){categoria = "Juvenil";
}else if(this.idade === 14 || this.idade === 15){categoria = "Intermediário";
}else if(this.idade >=9 && this.idade <=11){ categoria = "Infantil";
}else{categoria = "Sem categoria"}
    return categoria;
    }
    
calculaIMC(){   
    return this.peso / (this.altura * this.altura);    
    }
    
calculaMediaValida(){
     let notasComputadas = this.notas.sort().slice(1,this.notas.length-1);
     let somaDasNotas = 0;
     let somaDasNotasValidas = notasComputadas.reduce(
      (valorTotal, valorAtual) => valorTotal + valorAtual,
      somaDasNotas
      );
     let mediaValida = somaDasNotasValidas / notasComputadas.length;
     return mediaValida ;   
    }

    obtemNomeAtleta(){
       console.log('Atleta: '+this.nome);
    }
    obtemIdadeAtleta(){
       console.log('Idade: '+this.idade);
    }
    obtemPesoAtleta(){
       console.log('Peso: '+this.peso);
    }
    obtemAlturaAtleta(){
       console.log('Altura: '+this.altura); 
    }
    obtemNotasAtleta(){
       console.log('Notas:'+this.notas);
    }
    obtemCategoria(){
       console.log('Categoria: '+this.calculaCategoria());
    }
    obtemIMC(){
       console.log('IMC: '+this.calculaIMC());
    }
    obtemMediaValida(){
     console.log('Média Válida: '+this.calculaMediaValida());
    }   
}
    
    // Declara o atleta
    const atleta = new Atleta("Cesar Abascal",
        30, 80, 1.70,
        [10, 9.34, 8.42, 10, 7.88]);
        //saída
atleta.obtemNomeAtleta();
atleta.obtemIdadeAtleta();
atleta.obtemPesoAtleta();
atleta.obtemAlturaAtleta();
atleta.obtemNotasAtleta()
atleta.obtemCategoria();       
atleta.obtemIMC();
atleta.obtemMediaValida();
