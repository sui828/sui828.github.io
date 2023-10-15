<template>
  <div class="top">
    <div class="zodiac-trajectory-svg">
      <ZodiacTrajectory />
    </div>
    <div class="top-icon">
      <v-btn icon class="top-icon-about" to="/about"><IconAbout /></v-btn>
      <v-btn icon class="top-icon-news" to="/news"><IconNews /></v-btn>
      <v-btn icon class="top-icon-picture" to="/picture"><IconPicture /></v-btn>
      <v-btn icon class="top-icon-music" to="/music"><IconMusic /></v-btn>
      <v-btn icon class="top-icon-novel" to="/novel"><IconNovel /></v-btn>
      <v-btn icon class="top-icon-others" to="/others"><IconOthers /></v-btn>
    </div>
    <p class="top-text-about">About</p>
    <p class="top-text-news">News</p>
    <p class="top-text-picture">Picture</p>
    <p class="top-text-music">Music</p>
    <p class="top-text-novel">Novel</p>
    <p class="top-text-others">Others</p>
  </div>
</template>

<script>
import ZodiacTrajectory from "../assets/top/Sui_zodiacsign2.svg";
import IconAbout from '../assets/top/PastelGlyph_Person2.svg'
import IconNews from '../assets/top/PastelGlyph_News.svg'
import IconPicture from '../assets/top/PastelGlyph_Image.svg'
import IconMusic from '../assets/top/PastelGlyph_Music.svg'
import IconNovel from '../assets/top/PastelGlyph_Literature.svg'
import IconOthers from '../assets/top/PastelGlyph_LaptopCoding.svg'

export default {
  name: "TopView",
  components: {
    ZodiacTrajectory,
    IconAbout,
    IconNews,
    IconPicture,
    IconMusic,
    IconNovel,
    IconOthers,
  },
};
</script>
