<template>
    <div class="text-center">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">{{ alt }}</span>
        </div>
    </div>
</template>


<style scoped lang="scss">
    .spinner-border {
        width: 3rem;
        height: 3rem;
    }
</style>

<script lang="ts" setup>
    import { defineProps } from "@vue/runtime-core";

    defineProps({
        alt: {
            type: String,
            default: "Loading...",
        },
    });
</script>
