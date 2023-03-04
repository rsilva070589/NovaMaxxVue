<template>
    <div class="layout-px-spacing" style="margin-top: -100px;">
        <h1 class="text-2xl font-medium mx-2" data-testid="statements-title-txt">Vendas</h1>
        <div> 
</div> 
  
 <br> 
 
    <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel p-0">
                    <div class="custom-table">
                        <v-client-table :data="store.itensVendas" :columns="columns" :options="table_option">
                           <template #actions="props">
                            <router-link class="button is-light" to="/">  
                                <a href="javascript:void(0);" title="Editar Pedido" data-bs-toggle="tooltip" data-bs-placement="top"
                                @click="editPedido(props)"
                                >  <pencil />
                             
                                </a>
                            </router-link > 
                                <a href="javascript:void(0);" title="Print PDF" data-bs-toggle="tooltip" data-bs-placement="top"
                                    @click="getPedido(props)"
                                >
                                    <printer  />
                                </a>
                            </template>
                            <template #id="props">
                                <div class="checkbox-outline-primary custom-control custom-checkbox">
                                    <input variant="primary" type="checkbox" class="custom-control-input" :id="props.row.id" />
                                    <label class="custom-control-label" :for="props.row.id"></label>
                                </div>
                            </template>
                            <template #profile="props">
                                <img :src="require('@/assets/images/' + props.row.thumb)" class="rounded-circle profile-img" alt="avatar" />
                            </template>
                            <template #status="props">
                                <span class="badge inv-status" :class="'badge-' + props.row.status.class">{{ props.row.status.key }}</span>
                            </template>
                         
                          
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>    
       
    </div>




<!-- -->


</template>

<script setup>
   import jsPDF from 'jspdf';
      import { useRouter } from "vue-router";
    import 'jspdf-autotable';
    import {indexStore} from '../../store/IndexStore' 
    import { onMounted, ref } from 'vue';
    import axios from 'axios'
    import { useMeta } from '@/composables/use-meta';
    import printer from './printer.vue'
    import pencil from './pencil.vue'
import { async } from '@firebase/util';
    useMeta({ title: 'Vendas' });
    const store = indexStore(); 
    const code_arr = ref([]);
 

    async function getItens() { 
    var result = await axios.get(store.baseApiHTTPS+'/itens')  
    store.dadosItens = result.data
    store.dadosItensFiltro = result.data   
   ////////////////////////
    }     

    
    async function getAmbiente() {        
    var result = await axios.get(store.baseApiHTTPS+'/imagens')  
    store.ambiente = []
     result.data.map(x => {     
        return store.ambiente.push(x.AMBIENTE)
    })  
    }      


    async function selecionaItensVenda (ID_ITEM)  {
        const data =  store.dadosItens.filter(x => x.ID == ID_ITEM)[0]
        const item = {
            AMBIENTE : data.AMBIENTE,
            TIPO     : data.TIPO,
            OPCIONAL : data.OPCIONAL,
            DESCRICAO: data.DESCRICAO,
            NOMENCLATURA: data.NOMENCLATURA,
            PRECO_TOTAL: data.PRECO_TOTAL,
            ID:         data.ID
        } 
        store.itensSelecao.push(item)
    }

    async function selecionaVenda (ID_VENDA) {
        console.log('ID DA VENDA SELECIONADA - ' + ID_VENDA)
        store.itensSelecao = []
       const data =  store.itensVendas.filter(x => x.ID == ID_VENDA)[0].ITENS.map( b => {       
        selecionaItensVenda(b.COD_ITEM)
       }  )  
    }
    
   
 
  
    onMounted(() => {
        bind_data();  
    });

    const getStatus = (status) => {
      if(status == 1){
        return { key: 'Ativo', class: 'success' } 
      }
      if(status == 2){
        return { key: 'Cancelado', class: 'danger' } 
      }
      if(status == 3){
        return { key: 'Finalizado', class: 'primary' } 
      }
     
      
    }

    const bind_data = async  () => {
        store.ambiente = []
        getItens()
         getAmbiente()
        store.itensVendas = [] 
       var result = await axios.get( store.baseApiHTTPS+'/pedidos') 
       //https://json-replace-oracle-production.up.railway.app/pedidos
       
 
        result.data.map(x => {
console.log(x)
           
                const item = {
                    Casa: x.CASA,
                    CPF_CNPJ: x.COD_CLIENTE,
                    Data: x.DATA,
                    Desconto: x.DESCONTO,
                    Empreendimento: x.EMPREENDIMENTO,
                    ID: x.ID,
                    Nome: x.NOME,
                    Observacao: x.OBSERVACAO,
                    Valor: x.VALOR ,
                    status: getStatus(x.STATUS),     
                    ITENS: x.ITENS                  
                      }

                store.itensVendas.push(item) 
               
        })


    }
    

    useMeta({ title: 'Vendas' });
    //table 1
    
    const columns  = ref(['actions','ID', 'Data','Nome', 'CPF_CNPJ', 'Casa','Empreendimento','status','Valor']);
    const items =  store.itensVendas 
        //[{"ID":61,"NOME":"Renato","COD_CLIENTE":111111122222,"CASA":"40","EMPREENDIMENTO":"COMDOMINIO PADRAO","VALOR":"94.935,07","DESCONTO":"0","DATA":"2023-03-02T17:30:54.000Z","STATUS":"1"}]
    const table_option = ref({
        headings: {
            id: (h, row, index) => {
                return '#';
            },
        },
        perPage: 5,
        perPageValues: [5, 10, 20, 50],
        skin: 'table',
        columnsClasses: { actions: 'actions text-center' },
        sortable: ['ID', 'DATA','NOME', 'COD_CLIENTE', 'CASA','EMPREENDIMENTO','STATUS','VALOR'],
        sortIcon: {
            base: 'sort-icon-none',
            up: 'sort-icon-asc',
            down: 'sort-icon-desc',
        },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        resizableColumns: false,
    });

  
 
    const editPedido = async (props)=> { 
        selecionaVenda(props.row.ID)
  }

  
    
  


    const getPedido = async (props)=> { 
     
       export_table('pdf', props.row)
          
    }

    
 

const export_table =  async (type, dados) => {
 

const capitalize = (text) => {
    return text
        .replace('_', ' ')
        .replace('-', ' ')
        .toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
};
const columns = ref(['TIPO', 'DESCRICAO', 'PRECO_TOTAL']); 
 
store.nomeCliente = dados.Nome 
store.cpfCnpjCliente = dados.CPF_CNPJ
store.numeroCasa = dados.Casa

selecionaVenda(dados.ID)



let cols = columns.value.filter((d) => d != 'profile' && d != 'action'); 
let filename = dados.Nome || 'sem nome';

if  (type == 'pdf') {

    cols = cols.map((d) => {
        return { header: capitalize(d), dataKey: d };
    });

    const doc = new jsPDF('l', 'pt', cols.length > 10 ? 'a3' : 'a4');
    
    const arrayHead = []
  
    store.ambiente.map( x => {    
      arrayHead.push() 
      doc.autoTable({           
        headStyles: { fillColor: '#eff5ff', textColor: '#515365', fontsize: 40 },
        head: [{TIPO: x}],
        columns: cols,
        body: store.itensSelecao.filter(d => d.AMBIENTE == x),                
        styles: { overflow: 'linebreak' },
        pageBreak: 'auto',
        margin: { top: 45 },
        didDrawPage: () => {
            doc.text('ANEXO 1', cols.length > 10 ? 535 : 365, 30);
        },
    });          
    }) 
 
    doc.save(filename + '.pdf');
}
};


</script>