<template>
    <footer class="bg-light text-center py-5 mt-5">
        <div class="container">
            <div class="social mb-2">
                <a class="mx-2" href="https://www.linkedin.com/in/benbb" title="My LinkedIn" target="_blank"
                   rel="noopener noreferrer">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>

                <a class="mx-2" href="https://www.instagram.com/benbrist" title="My Instagram" target="_blank"
                   rel="noopener noreferrer">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>

                <a class="mx-2" href="https://www.twitter.com/benbristowuk" title="My Twitter" target="_blank"
                   rel="noopener noreferrer">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>

                <a class="mx-2" href="https://www.flickr.com/photos/benbrist" title="My Flickr" target="_blank"
                   rel="noopener noreferrer">
                    <i class="fa fa-camera" aria-hidden="true"></i>
                </a>

                <a class="mx-2" href="https://www.github.com/benbristow" title="My GitHub" target="_blank"
                   rel="noopener noreferrer">
                    <i class="fa fa-github" aria-hidden="true"></i>
                </a>

                <a class="mx-2" href="https://www.youtube.com/channel/UCO8AfKh3KGeKqRpub2m1vAQ"
                   title="My YouTube Channel" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>

                <a class="mx-2" href="https://www.last.fm/user/benbristow" title="My Last.fm" target="_blank"
                   rel="noopener noreferrer">
                    <i class="fa fa-lastfm" aria-hidden="true"></i>
                </a>
            </div>

            &copy; Ben Bristow {{ currentYear }}
        </div>
    </footer>
</template>

<style scoped lang="scss">
.social {
  font-size: 1.8rem;

  a {
    text-decoration: none;

    :hover {
      color: lighten(#000, 50%);
    }
  }
}
</style>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
