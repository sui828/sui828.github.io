<template>
  <div class="works">
    <v-row>
      <v-col cols="6" sm="4" md="4" lg="4" xl="3" xxl="3" v-for="(item, i) in others" :key="i" class="works-list">
        <v-card color="#032a57" height="90%" class="links" :href="item.link" target="_blank">
          <v-img v-bind:src="item.src"></v-img>
          <v-card-title class="works-list-title">{{
            item.title
          }}</v-card-title>
          <v-card-text class="works-list-description">{{
            item.description
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: "GIView",
  components: {
  },

  data: () => ({
    others: [
      {
        src: require("../assets/genshin/天賦素材早見表.webp"),
        link: require("../assets/genshin/天賦素材早見表.webp"),
        title: "天賦素材早見表(~ver4.6)",
        description: "",
      },
    ],
  }),
};
</script>
