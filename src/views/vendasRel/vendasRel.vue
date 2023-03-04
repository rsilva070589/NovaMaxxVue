<template>
    <div class="layout-px-spacing" style="margin-top: -100px;">
        <h1 class="text-2xl font-medium mx-2" data-testid="statements-title-txt">Vendas</h1>
        <div> 
</div>
 
    <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel p-0">
                    <div class="custom-table">
                        <v-client-table :data="store.itensCadastro" :columns="columns" :options="table_option">
                           <template #actions="props">
                                <a href="javascript:void(0);" title="Editar Pedido" data-bs-toggle="tooltip" data-bs-placement="top">
                                   <pencil />
                                </a>
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
                         
                            <template #salary="props"> ${{ props.row.salary }} </template>
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
    useMeta({ title: 'Multiple Tables' });
    const store = indexStore(); 
    const code_arr = ref([]);
 

  
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
        store.itensCadastro = []
       var result = await axios.get( 'http://localhost:4040/pedidos') 
       //https://json-replace-oracle-production.up.railway.app/pedidos
 
        result.data.map(x => {

           
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
                    status: getStatus(x.STATUS)
                        
                      }

                store.itensCadastro.push(item)
                console.log(item)
               
        })


    }
   
    const view_row1 = (item) => {
        alert('ID: ' + item1.value.ID + ', Name: ' + item1.value.NOMENCLATURA);
    };

 



    useMeta({ title: 'Custom Table' });
    //table 1
    const columns  = ref(['actions','ID', 'Data','Nome', 'CPF_CNPJ', 'Casa','Empreendimento','status','Valor']);
    const items =  store.itensCadastro 
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

  
    const getPedido = (props)=> { 
      
         export_table('pdf', props.row)
        
          
    }
 

    const export_table = (type, dados) => {

const capitalize = (text) => {
    return text
        .replace('_', ' ')
        .replace('-', ' ')
        .toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
};

console.log(dados)

let cols = columns.value.filter((d) => d != 'profile' && d != 'action');
let records = store.itensCadastro;
let filename = dados.Nome || 'sem nome';

if (type == 'csv') {
    let coldelimiter = ',';
    let linedelimiter = '\n';
    let result = cols
        .map((d) => {
            return capitalize(d);
        })
        .join(coldelimiter);
    result += linedelimiter;
    records.map((item) => {
        cols.map((d, index) => {
            if (index > 0) {
                result += coldelimiter;
            }
            let val = item[d] ? item[d] : '';
            result += val;
        });
        result += linedelimiter;
    });

    if (result == null) return;
    if (!result.match(/^data:text\/csv/i) && !window.navigator.msSaveOrOpenBlob) {
        var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
        var link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename + '.csv');
        link.click();
    } else {
        var blob = new Blob([result]);
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename + '.csv');
        }
    }
} else if (type == 'print') {
    var rowhtml = '<p>' + filename + '</p>';
    rowhtml +=
        '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
    cols.map((d) => {
        rowhtml += '<th>' + capitalize(d) + '</th>';
    });
    rowhtml += '</tr></thead>';
    rowhtml += '<tbody>';

    records.map((item) => {
        rowhtml += '<tr>';
        cols.map((d) => {
            let val = item[d] ? item[d] : '';
            rowhtml += '<td>' + val + '</td>';
        });
        rowhtml += '</tr>';
    });
    rowhtml +=
        '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
    rowhtml += '</tbody></table>';
    var winPrint = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
    winPrint.document.write('<title>Print</title>' + rowhtml);
    winPrint.document.close();
    winPrint.focus();
    winPrint.print();
    // winPrint.close();
} else if (type == 'pdf') {

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