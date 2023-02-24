import { ref } from 'vue' 
import { defineStore } from 'pinia';
 

export const indexStore = defineStore("rotas", () =>{
    const rotas = ref({ 
    }); 

   const baseApiHTTPS  = 'https://api-simple-json-production.up.railway.app'
  // const baseApiHTTPS  = 'localhost:5050'

    const dadosItens = []

    const dadosItensFiltro = []

    const ambiente = []

    const itensTipo = []     

    const itensSelecao = [ { AMBIENTE: null, 
                                TIPO: null, 
                                OPCIONAL: null, 
                                DESCRICAO: null,
                                PRECO_TOTAL: null ,
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
        dadosItensFiltro,
        baseApiHTTPS
    }
});


