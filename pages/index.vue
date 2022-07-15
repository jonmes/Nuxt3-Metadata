<script setup>
const title = "Index Page";
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />

      <Meta property="og:title" content="Mux Video" />
      <Meta property="og:type" content="video.episode" />
      <Meta
        property="og:description"
        content="MP4 video asset for Open Graph Cards"
      />
      <Meta
        property="og:image"
        content="https://image.mux.com/aYKMM7VxaD2InrbhrKlhi00V6R9EpRmQNmBJ10200AK02bE/thumbnail.png"
      />
      <Meta
        property="og:video"
        content="https://stream.mux.com/F9cP5Xgdcp7028hN4gQrOmlF62ZDHNloCTQQao8Pk00kk/medium.mp4"
      />
      <Meta property="og:video:width" content="350" />
      <Meta property="og:video:height" content="200" />
      <Meta property="og:video:duration" content="300" />
      <Meta property="og:url" content="http://mux.com" />
    </Head>
    <div class="flex">
      <h1>Root Index page</h1>
      <NuxtLink to="/blogs"> Go to Blogs </NuxtLink>
      <video id="my-player" controls style="width: 100%; max-width: 500px">
        <source
          src="https://stream.mux.com/F9cP5Xgdcp7028hN4gQrOmlF62ZDHNloCTQQao8Pk00kk/medium.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  margin: 30px;
}
</style>
