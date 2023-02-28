<template>
    <div class="form full-form auth-cover" >
        <div class="form-container">
            <div class="form-form" style="  margin-top: 50px;
                                            margin-left: 300px; 
                                            position: fixed;                                            
                                             ">
                <div class="form-form-wrap" style="" >
                    <div class="form-content" >
                            <h1 style="display: flex; justify-content: center;">
                                 <router-link to="https://novamaxxempreendimentos.com.br"><span class="brand-name">   NewMaxx</span></router-link>
                            </h1>
                            
                            
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
                                            <router-link to="/"><span class="brand-name">   <button type="submit" class="btn btn-primary">Log In</button></span></router-link>

                                        </div>
                                    </div>

                                    <div   style="display: inline-flex;
                                                  padding: 10px;
                                                  background-color: dodgerblue;                                                  
                                                  border-radius: 10px;
                                                  margin-top: 20px;
                                                  margin-left: 60px;
                                            " 
                                           @click="signInWithGoogle" >
                                        <div class="google-icon-wrapper">
                                        <img class="google-icon" style="padding: 5px; background-color: white; "
                                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                                        </div>
                                        <span style="color: white; padding: 5px;">
                                            Sign in with google
                                        </span>
                                    
                                    </div>
                                
                                    
 
                                </div>
                            </form>
 
                        </div>
                </div>
            </div>
       
        </div>
    </div>
</template>

<script setup>
  import '@/assets/sass/authentication/auth.scss';

  import { useMeta } from '@/composables/use-meta';
  useMeta({ title: 'Login Cover' });
  import { signInWithEmailAndPassword, getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
  import { collection, Timestamp,  addDoc, where, doc, setDoc, deleteDoc, updateDoc, query, getDocs} from  'firebase/firestore'
  import {db} from'@/firebase/firebase'
  import { ref } from "vue"; 
  import { useRouter } from "vue-router";
  import { useUserStore } from "../../store/user"; 
  const store = useUserStore();
  const router = useRouter()
  const email = ref(""); 
  const password = ref("");
  const errMsg = ref("");
 
  const login = () => {
      signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
          console.log("Sucess signed in")
          console.log(getAuth().currentUser)
          router.push("/todos")
          store.user.email=(getAuth().currentUser?.email)    
          store.user.photoUrlOri=(getAuth().currentUser)  

        })
        .catch((error) => {
          console.log(error.code);
          switch(error.code) {
              case "auth/invalid-email":
                errMsg.value ="invalid email";
                break;
              case "auth/user-not-found":
                errMsg.value = "User not Found";
                break;
              case "auth/wrong-password":
                errMsg.value = "Incorrect Password";
                break;
              default:
                errMsg.value = "Email or Password was Incorrect";
                break;
          }
          alert(error.message);
        })        
    }
  const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();  
  signInWithPopup(getAuth(), provider)
  .then((result) => {
  //    console.log(result.user);
 
       router.push({ 
                path: '/',
                 name: 'Vendas',
                 params: { uid: getAuth().currentUser?.uid   }
            });
       
      store.user.displayNameOri=(getAuth().currentUser?.displayName)
      store.user.photoUrlOri=(getAuth().currentUser?.photoURL)
      store.user.uidOri=(getAuth().currentUser?.uid)
       store.user.emailOri=(getAuth().currentUser?.email)
         async function novoUser() { 
         await setDoc(doc(db, "USUARIOS", store.user.uidOri), {
        uid:          store.user.uidOri,  
        photoUrl:     store.user.photoUrlOri,
        displayName:  store.user.displayNameOri,
        email:        store.user.emailOri,
        data:         Timestamp.now() 
    })
   }
  novoUser()
       
    } 
  )  
  .catch((error) => {
      return null
  }) 
  
  }
  
</script>
