<template>
   
        <form class="custom-form animate__animated animate__slideInUp" @submit.prevent="submitHandler">
            <section class="custom-form__fields">
            <article>
                <label for="email"></label>
                <input
                    v-model="email"     
                    id="email" 
                    class="input"
                    type="email"
                    placeholder="Entrer votre email" 
                />
            </article>
            <article>
                <label for="password"></label>
                <input 
                    v-model="password"   
                    id="password"
                    class="input"
                    type="password"
                    placeholder="Entrer votre mot de passe" 
                />
            </article>
            </section>
            <section class="custom-form__buttons">
                <button 
                    type="submit" 
                    class="button is-primary"
                >Valider</button>
                <button
                    type="reset"
                    class="button is-danger"
                >
                Réinitialiser
                </button>
            </section>
        </form>

</template>
<script lang="ts" setup>
import { ref } from "vue"

// we initialize two reactive variables
// email which has by default a value of ""
// and password, which has by default a value of "" as well.
const email = ref("")
const password = ref("")

async function submitHandler () {
    // async : get ready 'cause 
    // data can get slower than expected
    if(! (email.value && password.value)){
        // if the user has not entered an email or a password
        // you stop the program
        return
    }
    const result = await fetch('http://localhost:3000/api/v1/user/login', {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ email: email.value, password: password.value })
    })
    const jsResponse = await result.json()
    console.log(jsResponse)

  

}



</script>
<style lang="scss">

.custom-form__fields, .custom-form__buttons {
    display: flex;
}

.custom-form__fields {
    display: flex;
    flex-direction: column;

    article {
        display: flex;
        flex-direction: column;
        margin-block: 20px;
    }


}

.custom-form__buttons {
    justify-content: space-between;
}

</style>