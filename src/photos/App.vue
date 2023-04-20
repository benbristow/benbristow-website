<template>
  <div class="text-center" v-if="loading">
    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else-if="photos?.length > 0">
    <h3 class="mb-4"><i class="fa fa-camera"></i> My recent photos on Flickr</h3>

    <div class="row">
      <a class="col-lg-6 mb-5 text-decoration-none" v-for="photo in photos" :key="photo.id" :href="photo.url"
         :title="photo.altText" target="_blank" rel="noopener noreferrer">
        <img class="mb-3 photo-thumbnail" :src="photo.imageUrl" :alt="photo.title" loading="lazy"/>
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
    width: 100%;
    object-fit: cover;
    object-position: center;
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
          this.loading =false;
          console.error(error);
        });
    },
  },
};
</script>