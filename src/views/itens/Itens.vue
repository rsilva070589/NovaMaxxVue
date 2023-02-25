<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">DataTables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Itens</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

     
        <button @click="store.editando = true; store.cadastroProduto = [];store.cadastroProduto.ID=0" type="" class="btn btn-primary mt-3">Novo</button>
        <div v-if="store.editando">
        
            <div class="row layout-top-spacing"
                           > 
                     
          <div class="col-xl-12 col-lg-6 col-md-6 col-sm-12 col-12" style="margin-bottom: 24px">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Cadastro de Itens</h4>
                            </div>
                        </div>   
                    </div>
                    <div class="panel-body">
                        <div > 
                        
                            <div class="row">
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="email">Ambiente</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.AMBIENTE"  type="text" id="AMBIENTE" class="form-control" placeholder="Ambiente" />
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="password">Tipo</label>
                                    <div>
                                        <input  v-model="store.cadastroProduto.TIPO" type="text" id="TIPO" class="form-control" placeholder="Tipo" />
                                    </div>
                                </div>
                                <div class="form-group col-md-8">
                                    <label class="col-form-label pt-0" for="password">NOMENCLATURA</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.NOMENCLATURA"  type="text" id="NOMENCLATURA" class="form-control" placeholder="NOMENCLATURA" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-12">
                                    <label class="col-form-label pt-0" for="email">Descrição</label>
                                    <div>
                                        <input  v-model="store.cadastroProduto.DESCRICAO" type="text" id="DESCRICAO" class="form-control" placeholder="Descrição" />
                                    </div>
                                </div>                           
                            </div>
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label class="col-form-label pt-0" for="email">FORNECEDOR</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.FORNECEDOR"  type="text" id="FORNECEDOR" class="form-control" placeholder="FORNECEDOR" />
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="password">UND</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.UND"  type="text" id="UND" class="form-control" placeholder="UND" />
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="password">QTDE</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.QTDE"  type="text" id="QTDE" class="form-control" placeholder="QTDE" />
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="password">VLR_UNITARIO</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.VLR_UNITARIO"  type="text" id="VLR_UNITARIO" class="form-control" placeholder="VLR_UNITARIO" />
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="password">FRETE</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.FRETE" type="text" id="FRETE" class="form-control" placeholder="FRETE" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="email">Mão de Obra</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.VLR_MAO_OBRA"  type="text" id="VLR_MAO_OBRA" class="form-control" placeholder="Mão de Obra" />
                                    </div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label class="col-form-label pt-0" for="password">Contingência</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.CONTINGENCIA"  type="" id="CONTINGENCIA" class="form-control" placeholder="Contingência" />
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="password">Opção</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.OPCAO" type="text" id="OPCAO" class="form-control" placeholder="Opção" />
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="col-form-label pt-0" for="password">Taxa</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.TAXA"  type="text" id="TAXA" class="form-control" placeholder="Taxa" />
                                    </div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label class="col-form-label pt-0" for="password">Preço Total</label>
                                    <div>
                                        <input v-model="store.cadastroProduto.PRECO_TOTAL"  type="text" id="PRECO_TOTAL" class="form-control" placeholder="Preço Total" />
                                    </div>
                                </div>
                            </div>
                           
                  
                            <div class="row">
                                
                                <div class="form-group col-md-3">
                                    <label class="col-form-label pt-0" for="password">Custo Total</label>
                                    <div>
                                        <input :value="store.cadastroProduto.CUSTO_TOTAL"  type="text" id="CUSTO_TOTAL" class="form-control" placeholder="Custo Total" />
                                    </div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label class="col-form-label pt-0" for="password">Lucro</label>
                                    <div>
                                        <input :value="store.cadastroProduto.LUCRO"  type="text" id="LUCRO" class="form-control" placeholder="Lucro" />
                                    </div>
                                </div>
                            </div>

                        

                            <button @click="confirmar(store.cadastroProduto.ID)" type="" class="btn btn-primary mt-3">CONFIRMAR</button>
                      
                        </div>
                    </div>
                </div>
            </div>

             
        </div>
        </div>

 

 


        

        <div class="">
            <div  >
              
                <div class="panel br-6 p-0 mt-5">
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
    const columns1 = ref(['actions','ID', 'AMBIENTE', 'TIPO', 'NOMENCLATURA', 'OPCAO','FORNECEDOR','VLR_UNITARIO']);
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
        sortable: ['ID', 'AMBIENTE', 'TIPO', 'NOMENCLATURA', 'VLR_UNITARIO' ],
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
       var result = await axios.get(store.baseApiHTTPS+'/itens') 
      
    
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
