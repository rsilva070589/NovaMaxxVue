<template>
 
 
<div  
v-bind:style="{ 'background-image': 'url(' + imagemSala + ')' }"
>

<div style="padding: 15px; width: 900px; ">

    <h2 style="color: darkgrey; font-size: 24px; margin-left: 15px;   ">Resumo do Pedido</h2>

 
    <input style="padding: 15px; 
            font-size: 16px;
            background-color: #000000DD;
            color: white;
            width: 865px;
            border-radius: 10px;" type="text" placeholder="Nome do Cliente">
 

<div  
        style="padding: 10px;
               margin: 10px 0px 10px 0px;
               background-color: #000000DD;
               width: 865px;
               border-radius: 10px;
               "
      v-for="(a, indexA) in store.ambiente" :key="indexA">
      <div style="color: white; font-weight: bold;" >{{a}}
      </div>

<div v-for="(b, indexB) in store.itensTipo.filter(x => x.AMBIENTE==a)" :key="indexB">
{{ b.TIPO }}
******************************************************************************************
    <div v-for="(c, indexC) in store.dadosItens.filter(x => x.AMBIENTE==a && x.TIPO==b.TIPO)" :key="indexC" >
    {{ c.DESCRICAO}} - {{ c.VALOR }}
        <select>
            <option value=""></option>
        </select>
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
console.log(store.itensTipo)
 
} 
getItensTipo()




 
 

 


</script>

<style>
</style>