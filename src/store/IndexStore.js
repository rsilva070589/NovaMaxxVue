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
       baseApi: 'http://34.172.134.46:4040'    ,
       databasecliente: '',
       method: 'get'  ,
       etapaPedido: 0,
       buttonAvancar: false,
       carregando: false,
       ip: '127.0.0.1',
       dominio: 'suapizzaria'
       
    }); 

    const dadosItens = []

    const dadosItensFiltro = []

    const ambiente = []

    const itensTipo = []     

    const itensSelecao = [ { AMBIENTE: null, 
                                TIPO: null, 
                                OPCIONAL: null, 
                                DESCRICAO: null,
                                 VALOR: null ,
                                 ID_ITEM: null 
                        } ]

    const BoxOpen = null

    const AmbienteOpen = null

    const ilhaBalcao = null
    

    const itemSelecionado = null

    const dadosEmpresa = {} 

    const imagens = []

    
    
    return {
        rotas,
        recursos,
        dadosEmpresa,
        dadosItens,
        ambiente,
        itensTipo,
        itensSelecao,
        itemSelecionado,
        BoxOpen,
        AmbienteOpen,
        imagens,
        ilhaBalcao,
        dadosItensFiltro
    }
});


