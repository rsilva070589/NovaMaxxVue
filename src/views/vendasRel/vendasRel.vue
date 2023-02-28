<template>
    <div class="layout-px-spacing" style="margin-top: -100px;">
        <h1 class="text-2xl font-medium mx-2" data-testid="statements-title-txt">Vendas</h1>
        <div> 
</div>
        
    
 
 
        
        <div v-if="!store.editando">
            <div  >
              
                <div class="panel br-0 p-0 mt-0">
                    <div class="custom-table">
                        <v-client-table :data="store.itensCadastro" :columns="columns1" :options="table_option1">
                        
                            <template #progress="props">
                                <div class="progress">
                                    <div
                                        role="progressbar"
                                        aria-valuemin="0"
                                        :aria-valuemax="props.row.progress.count"
                                        aria-valuenow="100"
                                        class="progress-bar"
                                        :class="'bg-' + props.row.progress.class"
                                        :style="{ width: props.row.progress.count + '%' }"
                                    ></div>
                                </div>
                            </template>
                            <template #salary="props"> ${{ props.row.salary }} </template>
                            <template #actions="props">
                                <div class="me-2 custom-dropdown dropdown btn-group">
                                    <a class="btn dropdown-toggle btn-icon-only" href="#" role="button" id="pendingTask" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            style="width: 24px; height: 24px"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-more-horizontal"
                                        >
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item" @click="view_row1(props.row)"> view </a>
                                        </li>
                                        <li @click="selectItemEdit(props.row)">
                                            <a href="javascript:void(0);" class="dropdown-item"> Edit </a>
                                        </li>
                                        <li @click="deleteItem(props.row)">
                                            <a href="javascript:void(0);" class="dropdown-item"> Delete </a>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {indexStore} from '../../store/IndexStore' 
    import { onMounted, ref } from 'vue';
    import axios from 'axios'
    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Multiple Tables' });
    const store = indexStore(); 
    const code_arr = ref([]);
    //table 1
  
 

 

    //table 2
    const columns1 = ref(['ID', 'DATA','NOME', 'COD_CLIENTE', 'CASA','EMPREENDIMENTO','STATUS','VALOR']);
    const items1 = store.itensCadastro;
    const table_option1 = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table ',
        columnsClasses: { actions: 'actions text-center' },
        sortable: [],
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['ID', 'DATA','NOME', 'COD_CLIENTE','CASA', 'EMPREENDIMENTO', 'STATUS' ,'VALOR'],
        sortIcon: {
            base: 'sort-icon-none',
            up: 'sort-icon-asc',
            down: 'sort-icon-desc',
        },
        resizableColumns: false,
    });

    onMounted(() => {
        bind_data();
    });

    const bind_data = async  () => {
        store.itensCadastro = []
       var result = await axios.get(store.baseApiHTTPS+'/pedidos') 
      
    
        //table 2
        console.log(result.data)
        store.itensCadastro =  result.data

    }
    //table 2
    const view_row1 = (item) => {
        alert('ID: ' + item1.value.ID + ', Name: ' + item1.value.NOMENCLATURA);
    };

function selectItemEdit (props) {
    store.editando = true
    console.log(props)
    store.cadastroProduto.ID = props.ID,
    store.cadastroProduto.AMBIENTE = props.AMBIENTE,
    store.cadastroProduto.TIPO = props.TIPO, 
    store.cadastroProduto.OPCAO = props.OPCAO, 
    store.cadastroProduto.NOMENCLATURA = props.NOMENCLATURA, 
    store.cadastroProduto.FORNECEDOR = props.FORNECEDOR, 
    store.cadastroProduto.DESCRICAO = props.DESCRICAO, 
    store.cadastroProduto.UND = props.UND,
    store.cadastroProduto.QTDE = props.QTDE, 
    store.cadastroProduto.VLR_UNITARIO = props.VLR_UNITARIO, 
    store.cadastroProduto.FRETE = props.FRETE, 
    store.cadastroProduto.VLR_MAO_OBRA = props.VLR_MAO_OBRA, 
    store.cadastroProduto.CONTINGENCIA = props.CONTINGENCIA,
    store.cadastroProduto.CUSTO_TOTAL = props.CUSTO_TOTAL,
    store.cadastroProduto.TAXA = props.TAXA,
    store.cadastroProduto.PRECO_TOTAL = props.PRECO_TOTAL,
    store.cadastroProduto.LUCRO = props.LUCRO
}


function editItem(id){        
    console.log('Editando Item ID: '+id)
    console.log('NOMENCLATURA '+ store.cadastroProduto.NOMENCLATURA)
    
var data = 
JSON.stringify ( { "ID": id, 
        "AMBIENTE":   store.cadastroProduto.AMBIENTE     , 
        "TIPO": store.cadastroProduto.TIPO, 
        "OPCAO": store.cadastroProduto.OPCAO, 
        "NOMENCLATURA": store.cadastroProduto.NOMENCLATURA, 
        "FORNECEDOR": store.cadastroProduto.FORNECEDOR, 
        "DESCRICAO": store.cadastroProduto.DESCRICAO, 
        "UND": store.cadastroProduto.UND,
        "QTDE": store.cadastroProduto.QTDE, 
        "VLR_UNITARIO": store.cadastroProduto.VLR_UNITARIO, 
        "FRETE": store.cadastroProduto.FRETE, 
        "VLR_MAO_OBRA": store.cadastroProduto.VLR_MAO_OBRA, 
        "CONTINGENCIA": store.cadastroProduto.CONTINGENCIA, 
        "CUSTO_TOTAL": store.cadastroProduto.CUSTO_TOTAL,
        "TAXA": store.cadastroProduto.TAXA,
        "PRECO_TOTAL":store.cadastroProduto.PRECO_TOTAL,
            "LUCRO": store.cadastroProduto.LUCRO
        } 
            )

var config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: 'https://json-replace-oracle-production.up.railway.app/itens',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    bind_data()
    })
    .catch(function (error) {
    console.log(error);
    });

}

 function createItem(){
    console.log('Cadastrando Novo Item')
    var axios = require('axios');
    console.log(store.cadastroProduto.AMBIENTE)
var data = JSON.stringify( 
    { 
         "AMBIENTE":   store.cadastroProduto.AMBIENTE     , 
         "TIPO": store.cadastroProduto.TIPO, 
         "OPCAO": store.cadastroProduto.OPCAO, 
         "NOMENCLATURA": store.cadastroProduto.NOMENCLATURA, 
         "FORNECEDOR": store.cadastroProduto.FORNECEDOR, 
         "DESCRICAO": store.cadastroProduto.DESCRICAO, 
         "UND": store.cadastroProduto.UND,
          "QTDE": store.cadastroProduto.QTDE, 
          "VLR_UNITARIO": store.cadastroProduto.VLR_UNITARIO, 
          "FRETE": store.cadastroProduto.FRETE, 
          "VLR_MAO_OBRA": store.cadastroProduto.VLR_MAO_OBRA, 
          "CONTINGENCIA": store.cadastroProduto.CONTINGENCIA, 
          "CUSTO_TOTAL": store.cadastroProduto.CUSTO_TOTAL,
           "TAXA": store.cadastroProduto.TAXA,
            "PRECO_TOTAL":store.cadastroProduto.PRECO_TOTAL,
             "LUCRO": store.cadastroProduto.LUCRO
            } 
 );

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://json-replace-oracle-production.up.railway.app/itens',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  bind_data()
})
.catch(function (error) {
  console.log(error);
});

 }

 function confirmar (id) {
    console.log('Valor do ID: ' + id)
    if (id > 0) {
        editItem(id)
    }else{
        createItem()
    }
    store.editando = false
    store.cadastroProduto.ID=0 
 }

 function deleteItem(props){
    store.editando = false
    store.cadastroProduto.ID=0
    
    var data =   {"ID" : props.ID}  

                var config = {
                method: 'delete',
                maxBodyLength: Infinity,
                url: 'https://json-replace-oracle-production.up.railway.app/itens',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
                };

                axios(config)
                .then(function (response) {
                console.log(JSON.stringify(response.data));
                bind_data()
                })
                .catch(function (error) {
                console.log(error);
                });

 }


</script>
