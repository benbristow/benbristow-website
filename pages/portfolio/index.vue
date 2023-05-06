<template>
    <Head>
        <Title>Portfolio</Title>
    </Head>
    
    <h2 class="mb-4">Portfolio</h2>

    <article class="row gx-5 gy-3 mb-5" v-for="datum in data" :key="datum.id">
        <div class="col-lg-3">
            <img :src="`/images/portfolio/${datum.id}.webp`" :alt="`Screenshot of ${datum.title}`" class="mb-3"
                 loading="lazy"/>
        </div>

        <div class="col-lg-9">
            <h3>{{ datum.title }}</h3>
            <p>{{ datum.description }}</p>
            <NuxtLink class="btn btn-primary" :href="`/portfolio/${datum.id}`">
                More Details
            </NuxtLink>
        </div>
    </article>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('portfolio', () => queryContent('/').find());
</script>