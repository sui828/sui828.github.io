<template>
  <div class="works">
    <v-row>
      <v-col cols="6" sm="4" md="4" lg="4" xl="3" xxl="3" v-for="(item, i) in novels" :key="i" class="works-list">
        <v-card color="#032a57" height="90%" class="links" @click="novelClick(item.id);" target="_blank">
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
  name: "NovelView",
  components: {
  },

  data: () => ({
    novels: [
      {
        id: "witch",
        // link: require("../assets/novel/ウィッチ.pdf"),
        title: "ウィッチ",
        description: "no description",
      },
      {
        id: "skyscraper",
        // link: require("../assets/novel/摩天図書館.pdf"),
        title: "摩天図書館",
        description: "no description",
      },
      {
        id: "handplay",
        // link: require("../assets/novel/神様の手遊び.pdf"),
        title: "神様の手遊び",
        description: "no description",
      },
      {
        id: "unfinished",
        // link: require("../assets/novel/未完の.pdf"),
        title: "未完の",
        description: "no description",
      },
      {
        id: "diary",
        // link: require("../assets/novel/普通の日記.pdf"),
        title: "普通の日記",
        description: "no description",
      },
      {
        id: "liar",
        // link: require("../assets/novel/嘘つきの魔女と黒猫.pdf"),
        title: "噓つきの魔女と黒猫",
        description: "no description",
      },
      {
        id: "aulait",
        // link: require("../assets/novel/いちごオレ.pdf"),
        title: "いちごオレ",
        description: "no description",
      },
      {
        id: "ending",
        // link: require("../assets/novel/終末の春.pdf"),
        title: "終末の春",
        description: "no description",
      },
      {
        id: "animal",
        // link: require("../assets/novel/動物と彼.pdf"),
        title: "動物と彼",
        description: "no description",
      },
      {
        id: "abitof",
        // link: require("../assets/novel/ひとくちいかがですか.pdf"),
        title: "ひとくちいかがですか",
        description: "no description",
      },
      {
        id: "destination",
        // link: require("../assets/novel/行先未定.pdf"),
        title: "行先未定",
        description: "no description",
      },
      {
        id: "",
        // link: "",
        title: "虚像を見る",
        description: "2020年度文芸部誌掲載作。データ紛失中。",
      },
      {
        id: "toriyasai",
        // link: require("../assets/novel/すいキッチン_とり野菜.pdf"),
        title: "すいキッチン　とり野菜",
        description: "no description",
      },
      {
        id: "ghostmember",
        // link: require("../assets/novel/幽霊部員は影を見るか？.pdf"),
        title: "幽霊部員は影を見るか？",
        description: "no description",
      },
      {
        id: "",
        // link: "",
        title: "Coming soon...",
        description: "執筆中",
      },
    ],
  }),

  methods: {
    novelClick(id) {
      const url = "/novel/" + id;
      this.$router.push({path: url, params: {id: id}});
    }
  }
};
</script>
