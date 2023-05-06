<template>
    <div class="row">
        <article class="col-md-6 gx-5 gy-3 mb-5" v-for="track in tracks" :key="track.url">
            <div class="row">
                <div class="col-md-3">
                    <a  :href="track.url" rel="noreferrer noopener" target="_blank">
                        <img :src="track.image" alt="Album Artwork" class="mb-3"
                             loading="lazy"/>
                    </a>
                </div>

                <div class="col-md-9">
                    <h3>{{ track.title }}</h3>
                    <p><strong>{{ track.artist }}</strong></p>
                    <a class="btn btn-primary" :href="track.url" rel="noreferrer noopener" target="_blank">
                        <i class="fa fa-lastfm" aria-hidden="true"></i> View on Last.fm
                    </a>
                </div>
            </div>
        </article>
    </div>
</template>

<script setup lang="ts">
import { getApiClient } from "~/helpers/apiClientHelper";
const tracks = await getApiClient().topTracks();
</script>
