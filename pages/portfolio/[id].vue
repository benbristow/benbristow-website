<template>
    <main class="container">
        <NuxtLink href="/portfolio" class="d-inline-block mb-3">
            <i class="fa fa-arrow-left" aria-hidden="true"></i> Back to Portfolio
        </NuxtLink>

        <ContentDoc>
            <template v-slot="{ doc }">
                <h2 class="mb-4">{{ doc.title }}</h2>

                <div class="row">
                    <div class="col-lg-7">
                        <img :src="`/images/portfolio/${doc.id}.webp`" :alt="`Screenshot of ${doc.title}`" class="mb-3"
                             loading="lazy"/>
                    </div>

                    <div class="col-lg-5">
                        <ContentRenderer :value="doc"/>
                        <a :href="doc.link" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block">
                            <i class="fa fa-external-link"></i> Visit
                            {{ doc.title }}</a>
                    </div>
                </div>
            </template>

            <template #not-found>
                <h2>Page not found</h2>
                <p>Sorry, the page you are looking for does not exist.</p>
            </template>
        </ContentDoc>
    </main>
</template>
<script setup>
</script>