<template>
    <main class="landing__main">
        <figure class="landing__figure animate__animated animate__slideInUp">
            <img 
                src="/logo.webp" 
                alt="Image du logo de l'application TeaRoom"
            />
        </figure>
    </main>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router"
const router = useRouter()

onMounted(() => {
    setTimeout(() => {

        router.push('/home')   
    }, 3000);
})

</script>
<style lang="scss">

.landing__main {
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


.landing__figure {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
}
</style>