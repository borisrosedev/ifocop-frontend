<template>
    <main class="home__main">
        <section class="home__hero-section">
            <figure class="home-hero__figure">
                <img 
                    src="/indoors.webp" 
                    alt="Image de l'intérieut du salon de thé"
                >
            </figure>
            <section class="home-header__usp">
                <MessageComponent  :data="message"/>
            </section>
        </section>

    </main>
  
</template>
<script lang="ts" setup>
import MessageComponent from '../components/MessageComponent.vue';

const message = {
    header: "Venez déguster des thés uniques",
    body: "TeaRoom est l'occasion de venir vous détendre en famille, ou seul(e) dans une ambiance chique et raffinée dans un quartir historique exceptionnel de Paris",
    classNames: 'is-primary'
}

</script>
<style lang="scss">


.home__main {

    background-image: url('/bg.jpg');
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    background-blend-mode: overlay;
    background-color: rgba($color: #000000, $alpha: 0.8);
}

.home__hero-section {
    display: flex;
    width: 100%;
    flex-direction: column;

    .home-header__usp {
        padding: 20px 10px;
    }
}
.home-hero__figure {
    height: 400px;
    width: 100%;
    flex-shrink: unset;

}
</style>