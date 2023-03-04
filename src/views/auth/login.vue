<template>
    <div class="form full-form auth-cover" 
    style="background-image: url('https://firebasestorage.googleapis.com/v0/b/projetodev-176bd.appspot.com/o/novamaxx%2FFundo_tela_login2.png?alt=media&token=899c17ae-dd49-476a-90ff-43f2afab0ba9');
            height: 100vh; width: 100%;
            background-attachment: fixed;                               
           background-size: 100%; 
           background-position: center;     
            "
    >
    <div style="position: fixed; margin-left: 40%; margin-top: 8vh;">

        <div class="form-container" >
            <div class="form-form" >
                <div class="form-form-wrap" style="" >
                    <div class="form-content" 
                        style="padding-top: 25vh;  "
                    >
                            
                            <form class="text-start">
                                <div class="form">
                                    <div id="username-field" class="field-wrapper input">
                                        <svg
                                            xmlns="https://novamaxxempreendimentos.com.br/wp-content/uploads/2022/10/Ativo-3@4x.png"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-user"
                                        >
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <input type="text" class="form-control" placeholder="Username" />
                                    </div>

                                    <div id="password-field" class="field-wrapper input mb-2">
                                        <svg
                                            xmlns="https://novamaxxempreendimentos.com.br/wp-content/uploads/2022/10/Ativo-3@4x.png"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-lock"
                                        >
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        <input type="password" class="form-control" placeholder="Password" />
                                    </div>
                                    <div class="d-sm-flex justify-content-between">
                                        <div class="field-wrapper toggle-pass d-flex align-items-center">
                                            <p class="d-inline-block">Show Password</p>
                                            <label class="switch s-primary mx-2">
                                                <input type="checkbox" class="custom-control-input" checked="" />
                                                <span class="slider round"></span>
                                            </label>
                                        </div>
                                        <div class="field-wrapper">
                                            <router-link to="/"><span class="brand-name">   
                                            <button type="submit" class="btn btn-primary">Entrar</button></span>
                                            </router-link>

                                        </div>
                                    </div>

                                    
                                
                                    
 
                                </div>
                            </form>
 
                        </div>
                </div>
            </div>
       
        </div>
    </div>
    </div>
</template>

<script setup>
  import '@/assets/sass/authentication/auth.scss';
  import { useRouter } from "vue-router"; 
  import { useMeta } from '@/composables/use-meta';
  import store from '../../store';

  const router = useRouter()
 
  
 
 
 
  
</script>