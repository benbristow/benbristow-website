<template>
  <div class="text-center" v-if="loading">
    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else-if="photos?.length > 0">
    <h3 class="mb-4"><i class="fa fa-camera"></i> My recent photos on Flickr</h3>

    <div class="row">
      <a class="photo-thumbnail col-lg-6 mb-5 text-decoration-none" v-for="photo in photos" :key="photo.id"
        :href="photo.url" :title="photo.altText" target="_blank" rel="noopener noreferrer">
        <div class="photo-thumbnail__inner">
          <img class="photo-thumbnail" :src="photo.imageUrl" :alt="photo.title" loading="lazy" />
          <div class="photo-thumbnail__caption">
            {{ photo.altText }}
          </div>
        </div>
      </a>
    </div>
  </div>
  <div v-else>
    <div class="alert alert-danger">
      Error trying to retrieve photos.
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  }
}
</style>

<script>
import axios from "axios";

import { FormatDate } from '../helpers/DateHelper';

import config from "../config.js";

export default {
  data() {
    return {
      loading: true,
      photos: null,
    };
  },

  created() {
    this.getPhotos();
  },

  methods: {
    formatDate: date => FormatDate(date),
    getPhotos() {
      axios
        .get(config.apiUrl + "/Photos")
        .then(response => {
          this.photos = response.data;
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          console.error(error);
        });
    },
  },
};
</script>