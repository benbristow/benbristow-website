<template>
    <h2 class="mb-4"><i class="fa fa-flickr" aria-hidden="true"></i> My recent photos on <a
            href="https://www.flickr.com/photos/benbrist" target="_blank" rel="noopener noreferrer">Flickr</a></h2>
    <div class="row gy-4">
        <a class="d-block photo-thumbnail col-lg-6 text-decoration-none" v-for="photo in photos" :key="photo.id"
           :href="photo.url" :title="photo.altText" target="_blank" rel="noopener noreferrer">
            <div class="photo-thumbnail__inner">
                <img class="photo-thumbnail" :src="photo.imageUrl" :alt="photo.altText" loading="lazy"/>
                <div class="photo-thumbnail__caption">
                    {{ photo.altText }}
                </div>
            </div>
        </a>
    </div>
</template>

<script setup lang="ts">
import { getApiClient } from "~/helpers/apiClientHelper";

const photos = await getApiClient().photos();
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
