<template>
  <v-app>
    <v-navigation-drawer location="top" v-model="drawer" v-if="ramune !== 'top'">
      <ZodiacSign />
      <ZodiacTrajectory />
      <div class="drawer-icon">
        <v-btn icon class="drawer-icon-about" to="/about"><IconAbout /></v-btn>
        <v-btn icon class="drawer-icon-news" to="/news"><IconNews /></v-btn>
        <v-btn icon class="drawer-icon-picture" to="/picture"><IconPicture /></v-btn>
        <v-btn icon class="drawer-icon-music" to="/music"><IconMusic /></v-btn>
        <v-btn icon class="drawer-icon-novel" to="/novel"><IconNovel /></v-btn>
        <v-btn icon class="drawer-icon-others" to="/others"><IconOthers /></v-btn>
        <p class="drawer-text-about">About</p>
        <p class="drawer-text-news">News</p>
        <p class="drawer-text-picture">Picture</p>
        <p class="drawer-text-music">Music</p>
        <p class="drawer-text-novel">Novel</p>
        <p class="drawer-text-others">Others</p>
      </div>
    </v-navigation-drawer>
    <v-main>
      <div class="main">
        <div class="main-content">
          <div class="zodiac-sign-svg">
            <ZodiacSign />
          </div>
          <div class="fade">
            <router-view/>
          </div>
        </div>
        <div class="top-menu">
          <v-btn flat color="transparent" to="/" class="top-menu-title">生成物置き場</v-btn>
          <div class="top-menu-icons">
            <v-btn flat color="transparent" to="/about">
              <IconAbout />
            </v-btn>
            <v-btn flat color="transparent" to="/news">
              <IconNews />
            </v-btn>
            <v-btn flat color="transparent" to="/picture">
              <IconPicture />
            </v-btn>
            <v-btn flat color="transparent" to="/music">
              <IconMusic />
            </v-btn>
            <v-btn flat color="transparent" to="/novel">
              <IconNovel />
            </v-btn>
            <v-btn flat color="transparent" to="/others">
              <IconOthers />
            </v-btn>
          </div>
          <div class="top-menu-hamburger d-sm-none" v-if="ramune !== 'top'">
            <v-btn block icon color="transparent" @click.stop="drawer = !drawer">
              <ZodiacTrajectory />
            </v-btn>
          </div>
        </div>
        <div class="side-menu">
          <v-btn flat height="3.2rem" color="transparent" to="/" class="top-title">生成物置き場</v-btn>
          <v-list>
            <v-list-item>
              <v-btn flat color="transparent" to="/about">
                <div class="d-flex flex-row justify-center px-4">
                  <IconAbout />
                  <v-list-item-title class="pl-4">About</v-list-item-title>
                </div>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn flat color="transparent" to="/news">
                <div class="d-flex flex-row justify-center px-4">
                  <IconNews />
                  <v-list-item-title class="pl-4">News</v-list-item-title>
                </div>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn flat color="transparent" to="/picture">
                <div class="d-flex flex-row justify-center px-4">
                  <IconPicture />
                  <v-list-item-title class="pl-4">Picture</v-list-item-title>
                </div>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn flat color="transparent" to="/music">
                <div class="d-flex flex-row justify-center px-4">
                  <IconMusic />
                  <v-list-item-title class="pl-4">Music</v-list-item-title>
                </div>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn flat color="transparent" to="/novel">
                <div class="d-flex flex-row justify-center px-4">
                  <IconNovel />
                  <v-list-item-title class="pl-4">Novel</v-list-item-title>
                </div>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn flat color="transparent" to="/others">
                <div class="d-flex flex-row justify-center px-4">
                  <IconOthers />
                  <v-list-item-title class="pl-4">Others</v-list-item-title>
                </div>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <router-link to="/genshin">
              </router-link>
            </v-list-item>
          </v-list>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<style>
  @import "./assets/stylesheet.css"
</style>

<script>
import ZodiacSign from './assets/top/Sui_zodiacsign1.svg'
import ZodiacTrajectory from './assets/top/Sui_zodiacsign2.svg'
import IconAbout from './assets/top/PastelGlyph_Person2.svg'
import IconNews from './assets/top/PastelGlyph_News.svg'
import IconPicture from './assets/top/PastelGlyph_Image.svg'
import IconMusic from './assets/top/PastelGlyph_Music.svg'
import IconNovel from './assets/top/PastelGlyph_Literature.svg'
import IconOthers from './assets/top/PastelGlyph_LaptopCoding.svg'

export default {
  name: 'App',
  components:{
    ZodiacSign,
    ZodiacTrajectory,
    IconAbout,
    IconNews,
    IconPicture,
    IconMusic,
    IconNovel,
    IconOthers,
  },

  data: () => ({
    ramune: 'top',
    page: '',
    drawer: false,
  }),

  methods: {
    setRamune() {
      this.ramune = this.$route.name;
    }
  },

  watch: {
  // Pathの変化: Page移動を監視する
    $route(newRoute, oldRoute) {
      const topPath = newRoute.name;
      const oldPath = oldRoute.name;
      this.ramune = topPath;
      console.log(this.ramune);
      this.page = oldPath;
    },
  },
}
</script>
