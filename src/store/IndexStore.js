import { ref } from 'vue' 
import { defineStore } from 'pinia';
 

export const indexStore = defineStore("rotas", () =>{
    const rotas = ref({ 
    }); 

   const baseApiHTTPS  = 'https://json-replace-oracle-production.up.railway.app'
   //const baseApiHTTPS  = 'http://localhost:5050'

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

    const itemEdit = []

    const cadastroProduto = {
        AMBIENTE: null,
        TIPO: null,
        TIPO: null, 
        OPCAO: null, 
        NOMENCLATURA: null, 
        FORNECEDOR: null, 
        DESCRICAO: null, 
        UND: null,
        QTDE: null, 
        VLR_UNITARIO: null, 
         FRETE: null, 
         VLR_MAO_OBRA: null, 
         CONTINGENCIA: null,
         CUSTO_TOTAL: null,
         TAXA: null,
         PRECO_TOTAL: null,
         LUCRO: null
        } 
    
    
    
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
        baseApiHTTPS,
        itemEdit,
        cadastroProduto
    }
});


