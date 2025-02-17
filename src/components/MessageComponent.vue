<template>
    <article :class="'message ' + data.classNames">
        <section class="message-header">
            <h1>{{ data.header }}</h1>
        </section>
        <section class="message-body">
            <p>{{  data.body }}</p>
        </section>
    </article>

</template>
<script lang="ts" setup>

interface MessageComponentProps {
    data: {
        header: string,
        body: string,
        classNames?: string
    }
}
defineProps<MessageComponentProps>()

</script>
