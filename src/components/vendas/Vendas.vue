<template> 
   <div style="position: fixed; margin-left: 97%;"
        @click="store1.pedidoEdit_cod=false"
   >
      <router-link class="button is-light" to="/vendas">   
        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class=""
                    >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                        ></path>
                    </svg>
        </router-link> 
    </div> 
   
    <div  
    style="
           background-attachment: fixed;                               
           background-size: 100%; 
           background-position: center;           
          "
    v-bind:style="{ 'background-image': 'url(' + store1.imagemAmbiente + ')' }"
    > 

 
     
    <div style="padding: 15px; width: 300px; position: relative;">
    
        <h2 style="color: black; font-size: 27px; margin-left: 5px; font-weight: bold;">Resumo do Pedido</h2> 

        <input style="padding: 5px; 
                font-size: 18px;
                background-color: #000000DD;
                color: white;
                width: 265px;
                border-radius: 10px;" type="text" placeholder="Nome do Cliente" v-model="store1.nomeCliente">   

                <div style="display: flex; padding: 5px 0px 0px 0px;">
                  <input style="padding: 5px; 
                                font-size: 18px;
                                background-color: #000000DD;
                                color: white;
                                width: 170px;
                                border-radius: 10px;" type="text" placeholder="CPF/CNPJ" v-model="store1.cpfCnpjCliente">    

                                <input style="padding: 5px; 
                                margin-left: 4px;
                                font-size: 18px;
                                background-color: #000000DD;
                                color: white;
                                width: 90px;
                                border-radius: 10px;" type="text" placeholder="Casa" v-model="store1.numeroCasa">  
                </div>

    
    
    <div  
            style="padding: 10px;
                   margin: 10px 0px 20px 0px;
                   background-color: #000000DD;
                   width: 265px;
                   border-radius: 10px;
                   
                   "
          v-for="(a, indexA) in store1.ambiente" :key="indexA">
    <div style="color: whitesmoke; font-weight: bold; font-size: 18px;
    border: 1px solid var(--bgContainer);
                          transition: all 0.2s ease 0s;
                          cursor: pointer;
                        
  " 
       @click="AmbienteOpenClose(a);
                         store1.AmbienteOpen = a;                         
                         selecionarImagem(store1.AmbienteOpen); 
                         store1.dadosItensFiltro = store1.dadosItens; 
                         store1.ilhaBalcao=null "
  >

  <span class="item">
    {{primeiraLetraMaiuscula(a)}}
  </span>
  
  </div>

  <div v-if="store1.AmbienteOpen == a  && store1.AmbienteOpenClose"> 

<div style="display: flex; justify-content: center;  margin: 10px 0px 0px 15px; "
        @click=""
>

  <div  v-if="getOpcional(store1.AmbienteOpen, 'ILHA') > 0"     
        style="" @click="store1.ilhaBalcao='ILHA'; 
                          selecionarImagem(store1.AmbienteOpen)
                          dadosFiltro(store1.AmbienteOpen, store1.ilhaBalcao)                
                          ">     
        <label class="container">Com Ilha
        <input type="radio" checked="checked" name="radio">
        <span class="checkmark"></span>
        </label>
    </div>    

    <div v-if="getOpcional(store1.AmbienteOpen, 'BALCAO') > 0"  
          style="" @click="store1.ilhaBalcao='BALCAO';
                           selecionarImagem(store1.AmbienteOpen)
                           dadosFiltro(store1.AmbienteOpen, store1.ilhaBalcao)  
                           ">  
            <label class="container">Com Balcão
            <input type="radio" name="radio">
            <span class="checkmark"></span>
            </label>
    </div>    
</div>
    


    
    <div style="color: white; padding: 0px 0px 7px 0px; cursor: pointer; " 
            v-for="(b, indexB) in store1.itensTipo.filter(x => x.AMBIENTE==a && x.TIPO != null)" :key="indexB"            
            >
          <span style="font-size: 16px;" @dblclick="clearAmbiente(a, b.TIPO)">
            {{ primeiraLetraMaiuscula(b.TIPO)}}  
          </span>  
   
         
         <div v-if="!buscaItem(a, b.TIPO) > 0"
              style=" background-color: #000000DD;    
                      text-transform: capitalize;        
                      font-size: 16px;             
                      border-style: solid;
                      border-width: 0 0 1px 0;   
                      display: flex;
                      justify-content: space-between;
                      
                       "                     
               @click="boxOpen(a, b.TIPO)" 
                    >
                <div>
                  Selecione
                </div>    
                <div style="padding: 5px 7px 0px 0px; font-size: 12px;  font-weight: bold; ">
                v
                </div>
                
        </div>  

        <div  
               
                v-for="(c, indexC) in store1.itensSelecao.filter(x=>   x.AMBIENTE ==a 
                                                                    && x.TIPO     ==b.TIPO 
                                                                        )" 
              :key="indexC"                                                              
              style=" 
                      background-color: #000000DD;    
                      text-transform: capitalize;        
                      font-size: 16px;       
                      color: #D98427;      
                      border-style: solid;
                      border-width: 0 0 1px 0;
                      display: flex;
                      justify-content: space-between;
                          "                     
                @click="store1.BoxOpen = a+'-'+b.TIPO" 
              >
            
            <div>
              {{ primeiraLetraMaiuscula30(c.NOMENCLATURA) }}
            </div>

            <div style="padding: 5px 7px 0px 0px; font-size: 12px;  font-weight: bold; ">
                v
                </div>
        </div>         
        
 
 <div class="conteudo" style="background-color: #000000DD; ">
 
      
      <div   style="                              
                  color: white;
                  text-transform: capitalize;        
                  font-size: 15px;             
                  padding: 2px;
                  height: auto;
                  max-height: 40vh;    
                  width: auto;
                  
                "   
            v-if="store1.BoxOpen == a+'-'+b.TIPO"
             >
 
            <div class="itemSelect"
              style="display: flex; justify-content: space-between; padding-right: 10px;"                 
              v-for="(d, indexD) in store1.dadosItensFiltro.filter(x => x.AMBIENTE==a && x.TIPO==b.TIPO && x.ID < 10000)" 
              :key="indexD"
              :value="d.NOMENCLATURA"  
              @click="incluiItem(d)"
              >
                    
            <div>
            {{  primeiraLetraMaiuscula(d.NOMENCLATURA) }} 
            </div>                   
            
            <div>
              R$ {{ formataDinheiro(d.PRECO_TOTAL || 0) }}
            </div>
            

               
              
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
                    Total: R$ {{totalAmbiente(a) }}
                </div>
                
    </div>

  </div> 
    <div style="  color: #292929;      
                  display: flexbox;
                  font-size: 18px;
                  background-color: #D98427;                   
                  border-radius: 10px;
                  padding: 18px;
                  width: 265px;
        "> 
        <div>Total geral</div> 
          <div style="font-size: 25px; font-weight: bold;">
            R$ {{totalGeral()}}
          </div>
          <div style="                        
                        font-size: 18px;
                        font-weight: bold;
                        border-radius: 10px;
                        background-color: transparent;
                        color: var(--bgContainer); 
                        border: 1px solid var(--bgContainer);
                        transition: all 0.2s ease 0s;
                        cursor: pointer;
                    ">
              <div 
            
                    style="border-style: solid; 
                          padding: 10px; 
                          border-radius: 10px; 
                          text-align: center;                                               
                          "
                     @click="export_table('pdf');"
                          >
                SALVAR PEDIDO
              </div>
             
              <div style="border-style: solid; 
                          padding: 10px; 
                          border-radius: 10px; 
                          text-align: center;
                          margin-top: 15px;
                          "
                          @click="store1.itensSelecao = []"
                          >
                NOVO PEDIDO
              </div>
          </div>
        </div>
    </div> 
 
    </div>
    
    
</template>
    
<script setup>
    
    import {indexStore} from '../../store/IndexStore'  
    import store from '../../store';
    import axios from 'axios'  
    import icons from '../../views/font_icons.vue'
    import { onMounted, ref } from 'vue';
    import '@/assets/sass/scrollspyNav.scss';
    import '@/assets/sass/font-icons/fontawesome/css/regular.css';
    import '@/assets/sass/font-icons/fontawesome/css/fontawesome.css';
    import highlight from '@/components/plugins/highlight.vue';
    import feather from 'feather-icons';
    import { useMeta } from '@/composables/use-meta'; 
    import jsPDF from 'jspdf';
      import { useRouter } from "vue-router";
    import 'jspdf-autotable';
  
     const store1 = indexStore(); 
 
    
    async function getItens() { 
      store1.dadosItens = []
      store1.dadosItensFiltro = []
    var result = await axios.get(store1.baseApiHTTPS+'/itens')  
    store1.dadosItens = result.data
    store1.dadosItensFiltro = result.data 
    }     


    async function getAmbiente() {  
    var result = await axios.get(store1.baseApiHTTPS+'/imagens')  
    store1.ambiente = []
     result.data.map(x => { 
        return store1.ambiente.push(x.AMBIENTE)
    })  
    }     
    getItens()
    getAmbiente()
   
    
    const arrayAmbiente = []

     

    function dadosFiltro(ambiente, tipo, opcional) { 
      store1.dadosItensFiltro = store1.dadosItens


       if (store1.ilhaBalcao == null) {        
        store1.dadosItensFiltro = store1.dadosItensFiltro.filter(x => x.AMBIENTE == ambiente)        
       }else{
        if (store1.ilhaBalcao == 'ILHA') {
          store1.dadosItensFiltro = store1.dadosItensFiltro.filter(x =>  x.AMBIENTE == ambiente && x.OPCIONAL != 'BALCAO')
          store1.ilhaBalcao
        } else{
          store1.dadosItensFiltro = store1.dadosItensFiltro.filter(x =>  x.AMBIENTE == ambiente && x.OPCIONAL != 'ILHA')
        }        
       }
       store1.ilhaBalcao=null
    }
    
   

    async function getItensTipo() {
    
    var result = await axios.get(store1.baseApiHTTPS+'/itenstipo') 
 
    store1.itensTipo = result.data
     
    } 
    getItensTipo()


    function primeiraLetraMaiuscula30(minhaFrase) {  
    if (minhaFrase == null) {
        return null
    }else{
      if (minhaFrase){
        var minusculo = minhaFrase.toLowerCase()
        if(minusculo.length>25){
          return (minusculo.substring(0,25)).replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())
          }else{
            return (minusculo.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()))
          }
    
    }}
   
   }
    
    function primeiraLetraMaiuscula(minhaFrase) {  
    if (!minhaFrase == null) {
        return null
    }else{
      if (minhaFrase){
        var minusculo = minhaFrase.toLowerCase()
        if(minusculo.length>50){
          return (minusculo.substring(0,50)+'...').replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())
          }else{
            return (minusculo.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()))
          }   
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
        
      var arr =  store1.itensSelecao.filter(i => i.AMBIENTE == ambiente) 
      var sum = 0; 

      for(var i =0;i<arr.length;i++){ 
        sum+=arr[i].PRECO_TOTAL; 
      } 
 
      return formataDinheiro(sum)

    }

function totalGeral () {
    
    /** somatoria de Todos os ambiente */
      
    var arr =  store1.itensSelecao
   
    var sum = 0; 
  
    for(var i =0;i<arr.length;i++){ 
      sum+=arr[i].PRECO_TOTAL; 
    } 

    return formataDinheiro(sum)
  
  }
   
function getOpcional (ambiente,opcional) {
 
   for(var i=0; i<store1.dadosItens.length; i++) { 
      if(store1.dadosItens[i].AMBIENTE == ambiente && store1.dadosItens[i].OPCAO == opcional) {
         
         return i
      }
  }
} 

    
function buscaItem(ambiente, tipo) {
   for(var i=0; i<store1.itensSelecao.length; i++) {
      if(store1.itensSelecao[i].AMBIENTE === ambiente && store1.itensSelecao[i].TIPO === tipo) {
         return i
      }
  }
} 

function incluiItem(item) {
  if (buscaItem(item.AMBIENTE, item.TIPO) > -1){
    
    store1.itensSelecao.splice(buscaItem(item.AMBIENTE, item.TIPO), 1)
    store1.itensSelecao.push(item)
  }else{
   
    store1.itensSelecao.push(item)
  }
  store1.BoxOpen = '' 
} 

async function getImagens() {
     var result = await axios.get(store1.baseApiHTTPS+'/imagens')      
     store1.imagens = result.data 
    }
    
getImagens()


function selecionarImagem(ambiente){ 
  var result = store1.imagens.filter(x=> x.AMBIENTE==ambiente) 
  result.map(a=> {
    if(store1.ilhaBalcao == 'ILHA')
    {
      store1.imagemAmbiente = a.IMG
    }else{
      store1.imagemAmbiente = a.IMG_BALCAO || a.IMG
    }
    

  })
  return result
}


function removeAcento (text)
{       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}
 
const columns = ref(['TIPO', 'DESCRICAO', 'PRECO_TOTAL']); 

const capitalize = (text) => {
        return text
            .replace('_', ' ')
            .replace('-', ' ')
            .toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    };

const export_table = (type) => {
  processaPedido()

  function ambienteDistinct() { 
        const arrayProv = []   
        store1.itensSelecao.filter( f => f.AMBIENTE != null).map(x => {  
            arrayProv.push(  x.AMBIENTE )
        }) 

        console.log(arrayProv)
        arrayProv.getUnique = function() {
            var o = {}, a = [], i, e;
            for (i = 0; e = this[i]; i++) {o[e] = 1};
            for (e in o) {a.push (e)};  
            console.log(a)
            return a;  
            }  

          return  arrayProv.getUnique()
        } 

        
const capitalize = (text) => {
    return text 
        
};
const columns = ref(['TIPO', 'DESCRICAO', 'PRECO_TOTAL']);  

let cols = columns.value.filter((d) => d != 'profile' && d != 'action'); 
let filename = store1.nomeCliente|| 'sem nome';

if  (type == 'pdf') {

    cols = cols.map((d) => {
        return { header: capitalize(d), dataKey: d };
    });
    const doc = new jsPDF('p', 'mm', [297, 210]);
    let str = "Pagina: ";
    let pageCurrent = doc.internal.getCurrentPageInfo().pageNumber;
    var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    
    const arrayHead = []
  
    ambienteDistinct().map( x => {    
      arrayHead.push() 
      doc.autoTable({           
        headStyles: { fillColor: '#eff5ff', textColor: '#515365', fontsize: 40 },
        head: [{TIPO: x},['TIPO', 'DESCRICAO', 'VALOR']],
        columns: cols,
        body: store1.itensSelecao.filter(d => d.AMBIENTE == x),    
        columnStyles: {0: {halign: 'left'} ,1: {halign: 'left'} , 2: {halign: 'right'} },
        styles: { overflow: 'linebreak' },
        pageBreak: 'auto',
        margin: { top: 9 },
        didDrawPage: () => { 
            doc.text('ANEXO 1',90, 6);
            doc.setTextColor(105);
            doc.setFontSize(10);
            doc.text(str + doc.internal.getCurrentPageInfo().pageNumber, pageWidth / 2, pageHeight  - 10, {align: 'center'}); 
        },
    });          
    }) 
 
    doc.save(filename + '.pdf');   
    }
  }

  function boxOpen (ambiente, tipo) {
    if (store1.BoxOpen) {
      store1.BoxOpen = null
    } else {
      store1.BoxOpen = ambiente+'-'+tipo
    }
    
  }

  function clearAmbiente (ambiente, tipo) {
    console.log('Clear Ambiente: '+ambiente + ' / Tipo: '+tipo)
    console.log(store1.itensSelecao.filter(f => f.AMBIENTE == ambiente && f.TIPO == tipo))
    store1.itensSelecao.splice(buscaItem(ambiente, tipo), 1)
    
  }


 
    function AmbienteOpenClose(a) {
      
      if (store1.AmbienteOpenClose ) {
        store1.AmbienteOpenClose = false
      }else{
        store1.AmbienteOpenClose = true        
      }
    }

  

    function savePedido(){
 

    const arrayItensPedido = [] 

    store1.itensSelecao.map(x => 
    
    arrayItensPedido.push({
                        "COD_ITEM": x.ID,
                        "VALOR"   : x.PRECO_TOTAL,
                        "DESCONTO": 0
                        })
    )
    
    function processar (){
      if (store1.pedidoEdit_cod) {
        var data1 = JSON.stringify({
        "SEQUENCIA": store1.pedidoEdit_cod,
        "NOME": store1.nomeCliente,
        "COD_CLIENTE": store1.cpfCnpjCliente,
        "EMPREENDIMENTO": "COMDOMINIO PADRAO",
        "CASA": store1.numeroCasa,
        "VALOR": totalGeral(),
        "DESCONTO": 0,
        "ITENS": arrayItensPedido.filter(x => x.COD_ITEM > 0)  
      })
          return data1
      }else{
        var data1 = JSON.stringify({ 
        "NOME": store1.nomeCliente,
        "COD_CLIENTE": store1.cpfCnpjCliente,
        "EMPREENDIMENTO": "COMDOMINIO PADRAO",
        "CASA": store1.numeroCasa,
        "VALOR": totalGeral(),
        "DESCONTO": 0,
        "ITENS": arrayItensPedido.filter(x => x.COD_ITEM > 0)  
      })
          return data1
      }
    }
      
      var data = processar()

       var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://json-replace-oracle-production.up.railway.app/pedidos',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    }

    function deletePedido(){

    console.log('Atualizando o Pedido: '+store1.pedidoEdit_cod) 

    var data = JSON.stringify({
      "ID": store1.pedidoEdit_cod
      });

    var config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: 'https://json-replace-oracle-production.up.railway.app/pedidos',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

    }
 
    function processaPedido (){
        if (store1.pedidoEdit_cod) {
          deletePedido()
          savePedido()
        }else {
          savePedido()
        }
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
    width: 450px;
    overflow-x: auto;
}
 
.item {
  color: write;
}

.item:hover {
  color: #D98427;
}

.itemSelect {
  color: write;
}

.itemSelect:hover {
  background-color: #2196F3;
}

</style>