<template>
    <main class="login__main">
        <section class="login__form-section">
            <FormView />
        </section>

    </main>
</template>
<script setup lang="ts">
 import FormView from '../components/FormComponent.vue';
</script>
<style 
    lang="scss"
>
.login__main {
    display: flex;
    background-image: url('/bg.jpg');
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    background-blend-mode: overlay;
    background-color: rgba($color: #000000, $alpha: 0.5);

  

}

.login__form-section {
    width: 350px;
}


</style>