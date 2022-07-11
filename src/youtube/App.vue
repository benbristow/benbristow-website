<template>
  <div class="text-center" v-if="loading">
    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else-if="videos?.length > 0">
    <div class="row">
      <a class="col-lg-6 mb-5 text-decoration-none" v-for="video in videos" :key="video.id" :href="video.url" :title="video.title" target="_blank" rel="noopener noreferrer">
        <img class="mb-3 youtube-thumbnail" :src="video.thumbnail" :alt="video.title" loading="lazy" />
        <h2 class="h4 text-decoration-underline">{{ video.title }}</h2>
        <strong>{{ formatDate(video.date) }}</strong>
      </a>
    </div>
    <div class="d-grid">
      <a class="btn btn-primary" :href="youtubeChannelUrl" target="_blank" rel="noopener noreferrer">
        View more videos on YouTube
      </a>
    </div>
  </div>
  <div v-else>
      <div class="alert alert-danger">
        Error trying to retrieve my latest YouTube videos. You can click the button below to browse them on YouTube directly instead as an alternative.
      </div>
      <a class="btn btn-primary" :href="youtubeChannelUrl" target="_blank" rel="noopener noreferrer">
        Watch on YouTube directly instead
      </a>
  </div>
</template>

<style lang="scss" scoped>
  .youtube-thumbnail {
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

const youtubeChannelUrl = "https://www.youtube.com/channel/UCO8AfKh3KGeKqRpub2m1vAQ/videos";

export default {
  data() {
    return {
      youtubeChannelUrl,
      loading: true,
      videos: null,
    };
  },

  created() {
    this.getVideos();
  },

  methods: {
    formatDate: date => FormatDate(date),
    getVideos() {
      axios
        .get(config.apiUrl + "/YouTubeVideos")
        .then(response => {
          this.videos = response.data;
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