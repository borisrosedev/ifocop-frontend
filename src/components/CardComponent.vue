<template>
<article class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="data.url"
          :alt="data.name ? data.name : data.title"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              :src="data.url"
              :alt="data.name"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">TeaRoom</p>
          <p class="subtitle is-6">@tearoom</p>
        </div>
      </div>
  
      <div class="content">
        {{ data.content }}
        <br />

      </div>
    </div>
</article>
</template>

<script lang="ts" setup>
interface CardComponentProps {
    data: {
        id: string,
        content: string,
        url: string
        name?: string,
        title?: string
    }
}

defineProps<CardComponentProps>()


</script>

