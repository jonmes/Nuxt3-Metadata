<script setup>
const title = "Index Page";
const videoId = "YQFx2aCzK0E";
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta
        data-n-head="ssr"
        data-hid="og:site_name"
        property="og:site_name"
        content="Nuxt 3"
      />
      <meta
        data-n-head="ssr"
        data-hid="og:type"
        property="og:type"
        content="website"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:site"
        name="twitter:site"
        content="@nuxt_js"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:image"
        property="og:image"
        content="https://res.cloudinary.com/nuxt/image/upload/v1650870623/nuxt3-rc-social_z6qh3m.png"
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:image:secure_url"
        property="og:image:secure_url"
        content="https://res.cloudinary.com/nuxt/image/upload/v1650870623/nuxt3-rc-social_z6qh3m.png"
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:image:alt"
        property="og:image:alt"
        content="Nuxt 3"
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:image"
        name="twitter:image"
        content="https://res.cloudinary.com/nuxt/image/upload/v1650870623/nuxt3-rc-social_z6qh3m.png"
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:video"
        name="og:video"
        content="https://res.cloudinary.com/nuxt/video/upload/v1634114611/nuxt3-beta_sznsf8.mp4"
      />
      <Meta
        data-n-head="ssr"
        data-hid="apple-mobile-web-app-title"
        name="apple-mobile-web-app-title"
        content="Nuxt 3"
      />
      <Meta data-n-head="ssr" data-hid="charset" charset="utf-8" />
      <Meta
        data-n-head="ssr"
        data-hid="mobile-web-app-capable"
        name="mobile-web-app-capable"
        content="yes"
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:title"
        property="og:title"
        content="Head Management"
      />

      <Meta
        data-n-head="ssr"
        data-hid="twitter:title"
        property="twitter:title"
        content="Head Management"
      />

      <Meta
        data-n-head="ssr"
        data-hid="description"
        name="description"
        content="Out-of-the-box, Nuxt provides good default values for charset and viewport meta tags, but you can override these if you need to, as well as customize other meta tags for your site in several different ways."
      />
      <Meta
        data-n-head="ssr"
        data-hid="og:description"
        property="og:description"
        content="Out-of-the-box, Nuxt provides good default values for charset and viewport meta tags, but you can override these if you need to, as well as customize other meta tags for your site in several different ways."
      />
      <Meta
        data-n-head="ssr"
        data-hid="twitter:description"
        name="twitter:description"
        content="Out-of-the-box, Nuxt provides good default values for charset and viewport meta tags, but you can override these if you need to, as well as customize other meta tags for your site in several different ways."
      />

      <Meta name="twitter:card" content="player" />
      <Meta name="twitter:title" content="Some great video" />
      <Meta name="twitter:site" content="@mesfinjohn" />
      <Meta
        name="twitter:description"
        content="Great video by @twitter_username"
      />
      <Meta
        name="twitter:player"
        content="https://www.youtube.com/embed/rRVlWEwmbfQ"
      />
      <Meta name="twitter:player:width" content="360" />
      <Meta name="twitter:player:height" content="200" />
      <Meta
        name="twitter:image"
        :content="`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`"
      />
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
