<template>
 
 
    <div  
    style="position: relative; width: 100%"
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

<div style="display: flex; justify-content: center;  margin: 10px 0px 0px 15px; ">
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
            v-for="(b, indexB) in store.itensTipo.filter(x => x.AMBIENTE==a)" :key="indexB"
            
            >
         {{ primeiraLetraMaiuscula(b.TIPO) }} 
         {{ buscaItem(a, b.TIPO) }}
         
         <div v-if="!buscaItem(a, b.TIPO) > 0"
              style=" background-color: #000000DD;    
                      text-transform: capitalize;        
                      font-size: 16px;             
                      border-style: solid;
                      border-width: 0 0 1px 0;    "                     
               @click="store.BoxOpen = a+'-'+b.TIPO" 
                    >
                Selecione
        </div>  

        <div  v-for="(c, indexC) in store.itensSelecao.filter(x=>  x.AMBIENTE ==a 
                                                                && x.TIPO     ==b.TIPO 
                                                                        )" 
              :key="indexC"                                                              
              style=" padding: 3px;
                      background-color: #000000DD;    
                      text-transform: capitalize;        h
                      font-size: 16px;       
                      color: #D98427;      
                      border-style: solid;
                      border-width: 0 0 1px 0;    "                     
                @click="store.BoxOpen = a+'-'+b.TIPO" 
              >
            {{ primeiraLetraMaiuscula30(c.DESCRICAO) }}
        </div>         
        
 
 <div class="conteudo">
      
      <div   style="
                  background-color: #000000DD;                  
                  color: #D98427;
                  text-transform: capitalize;        
                  font-size: 16px;             
                  padding: 2px;
                  height: auto;
                  max-height: 40vh;    
                  width: 700px;
                "   
            v-if="store.BoxOpen == a+'-'+b.TIPO"
             >
 
            <div    
                    
                    v-for="(d, indexD) in store.dadosItens.filter(x => x.AMBIENTE==a && x.TIPO==b.TIPO)" 
                    :key="indexD"
                    :value="d.DESCRICAO"  
                    @click="incluiItem(d)"
                    >
                    
            {{  primeiraLetraMaiuscula(d.DESCRICAO) }} - R$ {{ formataDinheiro(d.VALOR) }}

               
              
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
                    Total: R$ {{totalAmbiente(a) }}
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


    function primeiraLetraMaiuscula30(minhaFrase) {  
    if (minhaFrase == null) {
        return null
    }else{
        var minusculo = minhaFrase.toLowerCase()
        if(minusculo.length>30){
          return (minusculo.substring(0,30)+'...').replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())
          }else{
            return (minusculo.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()))
          }
    
    }
   
   }

    
    
    
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

 


function totalAmbiente(ambiente) {
    
/** somatoria de Todos os ambiente */
      
    var x = store.itensSelecao.filter(i => {i.AMBIENTE == ambiente})
    
    if (x.length > 0){
      console.log('aaaa') 
      }
    
    
    
    var soma = 0;
      for(var i = 0; i < x.length; i++) {
          soma += x[i.VALOR];
      }      
      console.log(soma)
      return(soma)  
  
}


   
    
function buscaItem(ambiente, tipo) {
   for(var i=0; i<store.itensSelecao.length; i++) {
      if(store.itensSelecao[i].AMBIENTE === ambiente && store.itensSelecao[i].TIPO === tipo) {
         return i
      }
  }
} 

function incluiItem(item) {
  if (buscaItem(item.AMBIENTE, item.TIPO) > -1){
    console.log('ja existe, index: '+ buscaItem(item.AMBIENTE, item.TIPO) + ', substituir' )
    store.itensSelecao.splice(buscaItem(item.AMBIENTE, item.TIPO), 1)
    store.itensSelecao.push(item)

  }else{
    console.log('item nao existe, incluir')
    store.itensSelecao.push(item)
  }
  store.BoxOpen = '' 
} 


   
     
    
     
    
    
    </script>
    
    <style>
/* The container */
.container {
  display: block;
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


.conteudo {    
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    width: 700px;
    overflow-x: auto;
}

 
 




</style>