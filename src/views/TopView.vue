<template>
  <div class="top">
    <div class="zodiac-trajectory-svg">
      <ZodiacTrajectory />
    </div>
    <div class="top-icon">
      <v-btn icon class="top-icon-about" to="/im3py_/about"><IconAbout /></v-btn>
      <v-btn icon class="top-icon-news" to="/im3py_/news"><IconNews /></v-btn>
      <v-btn icon class="top-icon-picture" to="/im3py_/picture"><IconPicture /></v-btn>
      <v-btn icon class="top-icon-music" to="/im3py_/music"><IconMusic /></v-btn>
      <v-btn icon class="top-icon-novel" to="/im3py_/novel"><IconNovel /></v-btn>
      <v-btn icon class="top-icon-others" to="/im3py_/others"><IconOthers /></v-btn>
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
  data: () => ({
    page: ''
  }),
  methods: {
    QueryIs: function(){
      if(this.$route.query.p !== undefined){
        this.$router.push('/im3py_/' + this.$route.query.p)
      }
    },
  },
  mounted(){
    console.log('mounted');
    this.QueryIs();
  },
};
</script>
