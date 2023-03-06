<template>
    <!--  BEGIN SIDEBAR  -->

    
    <div class="sidebar-wrapper sidebar-theme" 
         style="margin: -130px 120px -0px -19px ; height: 103%;
         background-color: black; 
         ">
        <nav ref="menu" id="sidebar">
   

            <perfect-scrollbar class="list-unstyled menu-categories" tag="ul" :options="{ wheelSpeed: 0.5, swipeEasing: !0, minScrollbarLength: 40, maxScrollbarLength: 300, suppressScrollX: true }">
                <li class="menu">
                    <a>
                        <img src="" alt="">
                    </a>
 
                    <a class="dropdown-toggle"  aria-controls="dashboard" aria-expanded="false">
                   
                   <div style="color: black; " @click="goItens()" >    
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class=""
                    >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                        ></path>
                    </svg>      
                      <span style="color: white; font-size: 20px;">{{ $t('Itens') }}</span>
                   
                  
                   
                   </div>
                   
                   <div>
                       <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           class="feather feather-chevron-right"
                       >
                           <polyline points="9 18 15 12 9 6"></polyline>
                       </svg>
                   </div>
                    </a>


                    <a class="dropdown-toggle"  aria-controls="dashboard" aria-expanded="false">
                   
                   <div style="color: black; " @click="goAmbiente()" >    
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class=""
                    >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                        ></path>
                    </svg>                 
                      <span style="color: white; font-size: 20px;">{{ $t('Ambiente') }}</span>
                    
                   </div>
                   
                   <div>
                       <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           class="feather feather-chevron-right"
                       >
                           <polyline points="9 18 15 12 9 6"></polyline>
                       </svg>
                   </div>
                    </a>


                    <a class="dropdown-toggle"  aria-controls="dashboard" aria-expanded="false">
                   
                        <div style="color: black; " @click="goVendas()">     
                                                  
                                              
                            <svg id="Layer_1"  fill="white" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 111.04"><defs>
                                </defs><title>financial-growth</title><path class="cls-1" d="M19.1,70v39.24A1.8,1.8,0,0,1,17.3,111H1.8A1.8,1.8,0,0,1,0,109.25V70ZM41,0a20.6,20.6,0,1,1-20.6,20.59A20.59,20.59,0,0,1,41,0ZM39.24,10.62V8.55h2.85v2c.35,0,.7,0,1,.09.73.08,1.41.17,2,.29s1.22.23,1.73.35v4.06c-.81-.07-1.72-.13-2.73-.17s-1.93-.07-2.75-.07a7.49,7.49,0,0,0-1.32.11,1.62,1.62,0,0,0-.89.42,1.21,1.21,0,0,0-.32.92v.27a1.22,1.22,0,0,0,.42,1,2,2,0,0,0,1.29.34h1.74a6.09,6.09,0,0,1,3.07.7,4.57,4.57,0,0,1,1.85,1.9,5.83,5.83,0,0,1,.61,2.72v.87A6.92,6.92,0,0,1,47,28.18,4.27,4.27,0,0,1,44.54,30a11.48,11.48,0,0,1-2.45.41v2.27H39.24V30.38H39c-.55,0-1.1-.09-1.63-.16s-1-.15-1.54-.24-1-.19-1.43-.31V25.6c.6,0,1.25.1,1.94.13s1.4.06,2.11.08l2,0a7.26,7.26,0,0,0,1.45-.13,1.86,1.86,0,0,0,.87-.42,1.11,1.11,0,0,0,.29-.8v-.31a1,1,0,0,0-.41-.87,1.58,1.58,0,0,0-1-.29h-1.4a7,7,0,0,1-4.64-1.35q-1.58-1.34-1.58-4.5V16.3A5.31,5.31,0,0,1,35.79,12a6.66,6.66,0,0,1,3.45-1.34ZM0,57.19,21.17,38.67l.84.88h0a26.83,26.83,0,0,0,12.64,7.11L22.78,57.19ZM58.9,40.52c3,3.22,5.92,6.38,8.91,9.33L100.54,17,90,6.42l32.88-2.48L121,37.44,110.92,27.33c-7.26,7.35-24.43,23.56-31.69,30.83-9.19,9.18-13.57,9.35-22.76.16L46.2,46.89a26.87,26.87,0,0,0,12.7-6.37Zm53.75,7v61.74a1.8,1.8,0,0,1-1.8,1.79H95.35a1.81,1.81,0,0,1-1.8-1.79V62.57c3-2.87,6.41-6.2,9.93-9.59l7.34-7.07.31.29a12.65,12.65,0,0,0,1.52,1.31ZM81.47,73.45v35.8a1.81,1.81,0,0,1-1.8,1.79H64.17a1.8,1.8,0,0,1-1.8-1.79v-32A23.12,23.12,0,0,0,68,77.9a23.64,23.64,0,0,0,13.46-4.45Zm-31.19-2.9v38.7a1.8,1.8,0,0,1-1.8,1.79H33a1.81,1.81,0,0,1-1.8-1.79v-42c.32-.23.62-.48.92-.74l7.75-6.87,6.24,6.94.48.51c1.26,1.26,2.5,2.42,3.71,3.46Z"/>
                            </svg>                         
                           <span style="color: white; font-size: 20px;">{{ $t('Vendas') }}</span>
                        
                      
                        
                        </div>
                        
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-right"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>
                    

                  
                    <a class="dropdown-toggle"  aria-controls="dashboard" aria-expanded="false"
                       @click="handleSignOut()" 
                    >

                   
                        <div style="color: black;">
                            <svg fill="white" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                              viewBox="0 0 384.971 384.971" xml:space="preserve">                
                                <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
                                    C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
                                    C192.485,366.299,187.095,360.91,180.455,360.91z"/>
                                <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
                                    c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
                                    c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"/>
                              </svg>
                         <span style="color: white; font-size: 20px;">{{ $t('Sair') }}</span>
                        </div>
                        
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-right"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>
                    
                </li>

                
            </perfect-scrollbar>
        </nav>
    </div>
    <!--  END SIDEBAR  -->
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useStore } from 'vuex';
    import { useUserStore } from '../../store/user'
    import { indexStore } from '../../store/IndexStore'
    import { getAuth,  signOut } from "@firebase/auth";  
    import { useRouter } from "vue-router";
    import router from "@/router";
    const store = useStore();

   const store1 = indexStore();
    const storeUser = useUserStore();

    const menu_collapse = ref('dashboard');

    onMounted(() => {
        const selector = document.querySelector('#sidebar a[href="' + window.location.pathname + '"]');
        if (selector) {
            const ul = selector.closest('ul.collapse');
            if (ul) {
                let ele = ul.closest('li.menu').querySelectorAll('.dropdown-toggle');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            } else {
                selector.click();
            }
        }
    });

    const toggleMobileMenu = () => {
        if (window.innerWidth < 991) {
            store.commit('toggleSideBar', !store.state.is_show_sidebar);
        }
    };

    const handleSignOut = () => {
        store.state.login = false
        router.push("/")
       
      console.log('deslogado')
    }   

    const goVendas = () => {
       
     
            
      console.log('vendas')
    }   

    const goItens = () => {
        router.push("/itens")
      console.log('itens')
    }   

    const goAmbiente = () => {
        router.push("/ambiente")
      console.log('ambiente')
    }   
     
 
   
 
 

 

 
</script>
