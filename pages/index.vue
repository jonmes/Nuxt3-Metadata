<script setup>
import { setLocale } from '@vee-validate/i18n';
// import i18n from '@/plugins/i18n'
// import rules from '@/plugins/rules'
// import { useI18n } from 'vue-i18n';



// const videoId = "rRVlWEwmbfQ";
const title = "Index Page";
const videoId = "";
const item = ref({})


// const { t } = useI18n()
// console.log(rules(t));

</script>

<template>
  <div>

    <Head>
      <Title>{{ title }}</Title>
      <Meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Nuxt 3" />
      <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website" />
      <Meta data-n-head="ssr" data-hid="twitter:site" name="twitter:site" content="@nuxt_js" />
      <Meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary_large_image" />
      <Meta data-n-head="ssr" data-hid="og:image" property="og:image"
        content="https://res.cloudinary.com/nuxt/image/upload/v1650870623/nuxt3-rc-social_z6qh3m.png" />
      <Meta data-n-head="ssr" data-hid="og:image:secure_url" property="og:image:secure_url"
        content="https://res.cloudinary.com/nuxt/image/upload/v1650870623/nuxt3-rc-social_z6qh3m.png" />
      <Meta data-n-head="ssr" data-hid="og:image:alt" property="og:image:alt" content="Nuxt 3" />
      <Meta data-n-head="ssr" data-hid="twitter:image" property="twitter:image"
        content="https://res.cloudinary.com/nuxt/image/upload/v1650870623/nuxt3-rc-social_z6qh3m.png" />
      <Meta data-n-head="ssr" data-hid="og:video" name="og:video"
        content="https://res.cloudinary.com/nuxt/video/upload/v1634114611/nuxt3-beta_sznsf8.mp4" />
      <Meta data-n-head="ssr" data-hid="apple-mobile-web-app-title" name="apple-mobile-web-app-title"
        content="Nuxt 3" />
      <Meta data-n-head="ssr" data-hid="charset" charset="utf-8" />
      <Meta data-n-head="ssr" data-hid="mobile-web-app-capable" name="mobile-web-app-capable" content="yes" />
      <Meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Head Management" />

      <Meta data-n-head="ssr" data-hid="twitter:title" property="twitter:title" content="Head Management" />

      <Meta data-n-head="ssr" data-hid="description" name="description"
        content="Out-of-the-box, Nuxt provides good default values for charset and viewport meta tags, but you can override these if you need to, as well as customize other meta tags for your site in several different ways." />
      <Meta data-n-head="ssr" data-hid="og:description" property="og:description"
        content="Out-of-the-box, Nuxt provides good default values for charset and viewport meta tags, but you can override these if you need to, as well as customize other meta tags for your site in several different ways." />
      <Meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description"
        content="Out-of-the-box, Nuxt provides good default values for charset and viewport meta tags, but you can override these if you need to, as well as customize other meta tags for your site in several different ways." />
      <!-- ===================  -->
      <div v-if="videoId">
        <Meta property="og:title" content="Mux Video" />
        <Meta property="og:type" content="video.episode" />
        <Meta property="og:description" content="MP4 video asset for Open Graph Cards" />
        <Meta property="og:image" :content="`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`" />
        <Meta property="og:video" content="https://www.youtube.com/embed/rRVlWEwmbfQ" />
        <Meta property="og:video:width" content="350" />
        <Meta property="og:video:height" content="200" />
        <Meta property="og:video:duration" content="300" />
        <Meta property="og:url" content="http://mux.com" />

        <!-- ================= Twitter Video Player works for twitter and telegram ================== -->

        <Meta name="twitter:card" content="player" />
        <Meta name="twitter:title" content="Some great video" />
        <Meta name="twitter:site" content="@mesfinjohn" />
        <Meta name="twitter:description" content="Great video by @twitter_username" />
        <Meta name="twitter:player" content="https://www.youtube.com/embed/rRVlWEwmbfQ" />
        <Meta name="twitter:player:width" content="360" />
        <Meta name="twitter:player:height" content="200" />
        <Meta name="twitter:image" :content="`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`" />
      </div>
    </Head>
    <div class="flex">
      <div>
        <select v-model="$i18n.locale">
          <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
            {{ locale }}
          </option>
        </select>
      </div>
      <h1>{{ $t("hello") }}</h1>
      <NuxtLink to="/blogs"> {{ $t("blogspage") }} </NuxtLink>
      <video id="my-player" controls style="width: 100%; max-width: 500px">
        <source src="https://stream.mux.com/F9cP5Xgdcp7028hN4gQrOmlF62ZDHNloCTQQao8Pk00kk/medium.mp4"
          type="video/mp4" />
      </video>

      <form @submit.prevent="submit" show="true"
        class="flex pb-10 lg:pb-5 max-h-[915px] w-full sm:w-10/12 lg:w-full 3xl:w-10/12 flex-col rounded-md bg-white pt-11 px-2 ease-in dark:bg-HahuGray1 sm:px-3 md:px-10 lg:px-20 xl:px-24">
        <H-text-field v-model="item.name" rules="required|number" type="text" name="name" placeholder="Your name..."
          class="dark:text-white" placeholderStyle="text-HahuGray2">
          <template v-slot:label>
            <div class="mb-5 text-lg font-medium leading-6 text-gray-800 dark:text-white">
              {{ $t("name") }}
            </div>
          </template>
        </H-text-field>
        <H-text-field v-model="item.phone" type="text" name="phone" placeholder="09..."
          placeholderStyle="text-HahuGray2" class="dark:text-white"><template v-slot:label>
            <div class="mb-5 text-lg font-medium leading-6 text-gray-800 dark:text-white">
              {{ $t('phone_number') }}
            </div>
          </template></H-text-field>
        <H-text-field v-model="item.email" type="text" name="email" placeholder="Your email..."
          placeholderStyle="text-HahuGray2" class="dark:text-white"><template v-slot:label>
            <div class="mb-5 text-lg font-medium leading-6 text-gray-800 dark:text-white">
              {{ $t('email') }}
            </div>
          </template></H-text-field>
        <H-text-area type="text" v-model="item.message" placeholder="Your message..."
          placeholderStyle="text-HahuGray1 dark:text-white" :label="$t('message')"
          labelClass="font-medium text-gray-800 text-lg leading-6 dark:text-white duration-500 ease-in mb-5"
          name="message" class="dark:text-white" />

        <button type="submit"
          class="mt-9 w-full rounded-md bg-primary py-3 text-xl font-medium leading-7 text-whitePrimary">
          {{ $t('send') }}
        </button>
      </form>

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
