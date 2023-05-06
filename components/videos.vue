<template>
    <div class="row">
        <a class="col-lg-6 mb-5 text-decoration-none" v-for="video in videos" :key="video.id"
           :href="video.url"
           :title="video.title" target="_blank" rel="noopener noreferrer">
            <img class="mb-3 video-thumbnail" :src="video.thumbnail" :alt="video.title" loading="lazy"/>
            <h2 class="h4 text-decoration-underline">{{ video.title }}</h2>
            <strong>{{ formatDate(video.date) }}</strong>
        </a>
    </div>

    <a class="btn btn-primary" :href="youtubeChannelUrl" target="_blank" rel="noopener noreferrer">
        View more videos on YouTube
    </a>
</template>

<script setup lang="ts">
import { getApiClient } from "~/helpers/apiClientHelper";
import { FormatDate } from "~/helpers/dateHelper";

const formatDate = FormatDate;
const youtubeChannelUrl = "https://www.youtube.com/channel/UCO8AfKh3KGeKqRpub2m1vAQ/videos";

const videos = await getApiClient().videos();
</script>

<style scoped lang="scss">
.video-thumbnail {
  height: 360px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
