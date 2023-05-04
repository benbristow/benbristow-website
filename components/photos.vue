<template>
    <div v-if="state.photos">
        <h2 class="mb-4">My recent photos on Flickr</h2>
        <div class="row">
            <a class="photo-thumbnail col-lg-6 mb-5 text-decoration-none" v-for="photo in state.photos" :key="photo.id"
               :href="photo.url" :title="photo.altText" target="_blank" rel="noopener noreferrer">
                <div class="photo-thumbnail__inner">
                    <img class="photo-thumbnail" :src="photo.imageUrl" :alt="photo.altText" loading="lazy"/>
                    <div class="photo-thumbnail__caption">
                        {{ photo.altText }}
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "@vue/runtime-core";

import { getApiClient } from "~/helpers/apiClientHelper";
import { PhotoViewModel } from "~/apiClient";

const state = reactive({
    photos: null as PhotoViewModel[] | null
});

onMounted(async () => {
    const apiClient = getApiClient();
    state.photos = await apiClient.photos();
});
</script>

<style scoped lang="scss">
.photo-thumbnail {
  height: 360px;
  object-fit: cover;
  object-position: center;

  &__inner {
    position: relative;

    &:not(:hover) .photo-thumbnail__caption {
      display: none;
    }
  }

  &__caption {
    align-items: center;
    animation: fade 0.2s ease-in;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    height: 100%;
    justify-content: center;
    left: 0;
    padding: 1.5rem;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;

    @keyframes fade {
      0% {
        background-color: rgba(0, 0, 0, 0);
        color: rgba(0, 0, 0, 0)
      }
    }
  }
}
</style>
