<template>
    <li :id="data.id" class="custom-list-item">
  
    </li>
</template>
<script lang="ts" setup>

interface ListItemComponentProps {
    data: {
        id: string,
        name: string,
        content: string,
        url: string
    }
}

defineProps<ListItemComponentProps>()


</script>
<style lang="scss">
.custom-list-item {
    display: flex;
    flex-direction: column;
}
</style>