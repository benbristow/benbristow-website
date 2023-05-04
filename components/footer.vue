
<template>
    <footer class="bg-light text-center py-5 mt-5">
        <div class="container">
            <p>&copy; Ben Bristow {{ currentYear }}</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
