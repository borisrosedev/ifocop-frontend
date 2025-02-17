<template>
    <ul>
        <ListItemComponent 
            v-for="(item, index) in list"
            :data="item"
            :key="index"
        />
    </ul>
</template>

<script setup lang="ts">
import ListItemComponent from './ListItemComponent.vue';

interface ListComponentProps {
    list: Array<any>
}

defineProps<ListComponentProps>()

</script>
