<template>
 
 
    <div  
    style="position: ; width: 100%"
    v-bind:style="{ 'background-image': 'url(' + imagemSala + ')' }"
 
    >

    
    <div style="color: white;">
        {{ store.itensSelecao }} 
     
    </div>
    

    <div style="padding: 15px; width: 300px; ">
    
        <h2 style="color: darkgrey; font-size: 24px; margin-left: 15px;   ">Resumo do Pedido</h2>
    
     
        <input style="padding: 15px; 
                font-size: 18px;
                background-color: #000000DD;
                color: white;
                width: 265px;
                border-radius: 10px;" type="text" placeholder="Nome do Cliente">     
    
    <div  
            style="padding: 10px;
                   margin: 10px 0px 20px 0px;
                   background-color: #000000DD;
                   width: 265px;
                   border-radius: 10px;
                   "
          v-for="(a, indexA) in store.ambiente" :key="indexA">
          <div style="color: whitesmoke; font-weight: bold; font-size: 18px;" >{{primeiraLetraMaiuscula(a)}}
          </div>

<div style="display: flex; justify-content: center;  margin: 10px 0px 0px 15px; "
@click="store.boxSelect=null"
>
    <div style="background-color: ;">       
        <label class="container">Com Ilha
        <input type="radio" checked="checked" name="radio">
        <span class="checkmark"></span>
        </label>
    </div>    
    <div style="">   
 
            <label class="container">Com Balcão
            <input type="radio" name="radio">
            <span class="checkmark"></span>
            </label>
    </div>    
</div>
    


    
    <div style="color: white; padding: 0px 0px 7px 0px;" 
            v-for="(b, indexB) in store.itensTipo.filter(x => x.AMBIENTE==a)" :key="indexB">
         {{ primeiraLetraMaiuscula(b.TIPO) }} 
         

    <div   class="conteudo"  
 
     >
      <div 
       
      style="  
                    padding: opx 0px 0px 0px;
                    background-color: #000000DD;
                    width: 240px; 
                    height: 25px;
                    color: #D98427;
                    text-transform: capitalize;        
                    font-size: 16px;             
                    border-style: solid;
                    border-width: 0 0 2px 0;                    
                   "   
                   >

 

            <div  style="color: white"
              @click="store.boxSelect= a+ '-' +b.TIPO "
              v-if="store.boxSelect !=a+ '-' +b.TIPO"
            >
                Selecione
            </div>

            
        
            <div   
                  
                    v-for="(c, indexC) in store.dadosItens.filter(x => x.AMBIENTE==a && x.TIPO==b.TIPO)" :key="indexC"   
                    v-if="store.boxSelect==a+ '-' +b.TIPO"          
                    >
           
           <div  >
            {{primeiraLetraMaiuscula(c.DESCRICAO) }} - R$ {{ formataDinheiro(c.VALOR) }}
           </div>
            
            </div> 

       

          
        </div>
    </div> 
  
    </div>
       
        
    <div style="font-size: 20px; 
                display: flex;
                justify-content: end;
                color: #D98427;
                font-weight: bold; 
                ">
                <div>
                    Total: R$ 
                </div>
                
    </div>

    </div> 
    </div>
     
    </div>
    
    
    
    </template>
    
    <script setup>
    import {indexStore} from '../../store/IndexStore'
    import axios from 'axios'
    
    var imagemSala = 'https://finger.ind.br/wp-content/uploads/2021/08/post_thumbnail-a604185952a2859240903c1b2af3cd7c-1170x685.jpg'
    
    const store = indexStore(); 
    
    const arrayAmbiente = []
    
     
    
    async function getItens() {
    
    var result = await axios.get('http://localhost:4040/itens') 
     
    store.dadosItens = result.data
    
    store.dadosItens.forEach(i => {    
        arrayAmbiente.push (i.AMBIENTE)      
    }); 
    
     
    
    arrayAmbiente.getUnique = function() {
        var o = {}, a = [], i, e;
        for (i = 0; e = this[i]; i++) {o[e] = 1};
        for (e in o) {a.push (e)};   
        return a;  
       }     
    
    store.ambiente=arrayAmbiente.getUnique()
     
    
    } 
    
    getItens()
    
    async function getItensTipo() {    
    var result = await axios.get('http://localhost:4040/itensTipo')      
    store.itensTipo = (result.data)      
    } 
    getItensTipo()
    
    
    
   function primeiraLetraMaiuscula(minhaFrase) {  

    if (minhaFrase == null) {
        return null
    }else{
        var minusculo = minhaFrase.toLowerCase()

        if(minusculo.length>50){
          return (minusculo.substring(0,80)+'...').replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())
          }else{
            return (minusculo.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()))
          }


    
    }
   
   }

   function formataDinheiro(item) {
         let venda = item;
         if (!!venda && venda.toString().includes(",")) {
           venda = venda.toString().replace(",", ".");
         }
         return parseFloat(venda)
           .toFixed(2)
           .replace(".", ",")
           .replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
       }

function SelectItem(item) {
    store.itensSelecao.push({
        item
    })
   
}



function totalComodo () {
    const ArrayProv = []
}


function totalPedido ()  {
/** somatoria de Todos os adicionais */
  const ArrayProv = []
  var pitem = store.pedido.pedido?.pedidoitem?.map(a => {    
    
    var t = a.adicionais?.filter(f => f.isadicionalprod == 's')
      
    var x = t?.map(i => {return i.valortotal}) || 0    
 
    var soma = 0;
      for(var i = 0; i < x.length; i++) {
          soma += x[i];
      }      
      ArrayProv.push(soma)    
     
  })
  
  var totalAdicionais = 0;
  for(var i = 0; i < ArrayProv.length; i++) {
    totalAdicionais += ArrayProv[i];
  }
/** fim somatoria de Todos os adicionais */
 
      var somarPizza = store.pedido.pedido.pedidoitem.map(pedidoitem => {
      return (pedidoitem.valorunitario * pedidoitem.quantidade) // + somaAdic      
      }) 
      let totalpizzas = 0
      for(let i in somarPizza) {
        totalpizzas += somarPizza[i] 
      }
       
      store.pedido.pedido.valorpedido =  totalpizzas +totalAdicionais
  
}     
 
    

   
     
    
     
    
    
    </script>
    
    <style>

.conteudo {    
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    width: 100%;
    overflow-x: auto;
}

 
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;  
  
}

a:hover {
  background-color: #628ed1;
}    
 
/* The container */
.container {
  display: flex;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
   
  cursor: pointer;
  font-size: 13px;
  color: white;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 17px;
  width: 17px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
 	top: 5px;
	left: 5px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}
</style>