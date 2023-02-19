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

      <div class="row layout-top-spacing">
          <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
              <div class="panel br-6 p-0">
                  <div class="custom-table">
                      <v-client-table :data="items" :columns="columns" :options="table_option">
                          <template #actions="props">
                              <div class="actions text-center">
                                  <a href="javascript:;" class="cancel" @click="view_row(props.row)">
                                      <button type="button" class="btn btn-primary btn-sm">View</button>
                                  </a>
                              </div>
                          </template>
                          <template #salary="props"> ${{ props.row.salary }} </template>
                      </v-client-table>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { collection, onSnapshot,  addDoc, doc, getDocs,where, deleteDoc, updateDoc, query, orderBy, limit} from  'firebase/firestore'
  import { db }   from '../../firebase/firebase'
  import { useMeta } from '@/composables/use-meta';
  import axios from 'axios'
  useMeta({ title: 'Default Order Sorting Table' }); 

  

  //const columns = ref(['ID_ITEM','AMBIENTE', 'APLICACAO', 'TIPO', 'NOMENCLATURA','FORNECEDOR','DESCRICAO']);
  const columns = ref(['AMBIENTE', 'TIPO', 'OPCIONAL','DESCRICAO','VALOR']);
  const items = ref([]);
 
  const table_option = ref({
      perPage: 10,
      perPageValues: [5, 10, 20, 50],
      skin: 'table table-hover',
      columnsClasses: { actions: 'actions text-center' },
      pagination: { nav: 'scroll', chunk: 5 },
      texts: {
          count: 'Showing {from} to {to} of {count}',
          filter: '',
          filterPlaceholder: 'Search...',
          limit: 'Results:',
      },
      sortable: ['AMBIENTE', 'TIPO', 'OPCIONAL','DESCRICAO','VALOR'],
      sortIcon: {
          base: 'sort-icon-none',
          up: 'sort-icon-asc',
          down: 'sort-icon-desc',
      },
      resizableColumns: false,
  });

async function getItens() {
    const result = await axios.get('http://localhost:4040/itens')
    items.value = result.data
}

 

 

  onMounted(() => {
      bind_data();   
  });

  const bind_data = () => {
    getItens()
    //  items.value = [
    //      { ID_ITEM: 1, ambiente: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '320,800' },
    //      { ID_ITEM: 2, ambiente: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, start_date: '2011/07/25', salary: '170,750' }      ];
     
  };

  const view_row = (item) => {
      alert('ID: ' + item.id + ', Name: ' + item.name);
  };
</script>
