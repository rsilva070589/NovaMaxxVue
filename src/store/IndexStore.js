import { ref } from 'vue' 
import { defineStore } from 'pinia';
 

export const indexStore = defineStore("rotas", () =>{
    const rotas = ref({ 
    }); 

   const baseApiHTTPS  = 'https://json-replace-oracle-production.up.railway.app'
   //const baseApiHTTPS  = 'http://localhost:4040'

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

    const usuarioLogado = false                

    const BoxOpen = null

    const AmbienteOpen = null

    const ilhaBalcao = null
    

    const itemSelecionado = null

    const dadosEmpresa = {} 

    const imagens = []

    const itensCadastro = []

    const itensVendas = []

    const cadastroProduto = {
        ID: 0,
        AMBIENTE: 0,
        TIPO: 0, 
        OPCAO: 0, 
        NOMENCLATURA: 0, 
        FORNECEDOR: 0, 
        DESCRICAO: 0, 
        UND: 0,
        QTDE: 0, 
        VLR_UNITARIO: 0, 
         FRETE: 0, 
         VLR_MAO_OBRA: 0, 
         CONTINGENCIA: 0,
         CUSTO_TOTAL: 0,
         TAXA: 0,
         PRECO_TOTAL: 0,
         LUCRO: 0
        } 

        const login = {
            usuario: null,
            senha: null
        }

const reflesh = false
    
    
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
        itensCadastro,
        cadastroProduto,
        usuarioLogado,
        reflesh,
        itensVendas,
        login
    }
});


