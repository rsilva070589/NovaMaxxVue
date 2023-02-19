import { ref } from 'vue' 
import { defineStore } from 'pinia';
 

export const indexStore = defineStore("rotas", () =>{
    const rotas = ref({ 
    }); 

    const recursos = ref({
       telaMobile:   false,
       sidebar:     false,
       telaContentAtual: 'DADOSEMPRESA',
       telaAtualNome: 'BEM-VINDO',
       baseApiHTTPS: 'https://easypedidos.sytes.net:8082',
       //baseApi: 'http://200.10.135.208:8080/evento',
       baseApi: 'http://localhost:4042'    ,
       databasecliente: '',
       method: 'get'  ,
       etapaPedido: 0,
       buttonAvancar: false,
       carregando: false,
       ip: '127.0.0.1',
       dominio: 'suapizzaria'
       
    }); 

    const dadosItens = []

    const ambiente = []

    const itensTipo = []

  

    const dadosEmpresa = {}  
    
    return {
        rotas,
        recursos,
        dadosEmpresa,
        dadosItens,
        ambiente,
        itensTipo 
    }
});


