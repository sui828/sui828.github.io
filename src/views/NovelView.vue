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
        title: "ウィッチ",
        description: "ゲームと現実を混同してる人、たまにいますよね。もっと現実見たほうがいいと思います。",
      },
      {
        id: "skyscraper",
        title: "摩天図書館",
        description: "夢から書き起こし。他にも実際に見た夢から着想を得て書いた作品もあります。",
      },
      {
        id: "handplay",
        title: "神様の手遊び",
        description: "神様は見ているだけなので",
      },
      {
        id: "unfinished",
        title: "未完の",
        description: "道を外れた人間と道に迷った人間が出会うお話。",
      },
      {
        id: "diary",
        title: "普通の日記",
        description: "夏休み直前の「私」の日記。普通じゃない、私と優ちゃんの日常。",
      },
      {
        id: "liar",
        title: "噓つきの魔女と黒猫",
        description: "気付いたら魔女にされていた女の子のお話。",
      },
      {
        id: "aulait",
        title: "いちごオレ",
        description: "いちごオレが食堂の自販機に置いてあったのをずっと買ってたんですけど、売られなくなったのがめっちゃ残念でした。",
      },
      {
        id: "ending",
        title: "終末の春",
        description: "詩。",
      },
      {
        id: "animal",
        title: "動物と彼",
        description: "総文の交流会のときに書いたやつじゃなかったっけ。",
      },
      {
        id: "abitof",
        // link: require("../assets/novel/ひとくちいかがですか.pdf"),
        title: "ひとくちいかがですか",
        description: "超短編を集めたもの。",
      },
      {
        id: "destination",
        // link: require("../assets/novel/行先未定.pdf"),
        title: "行先未定",
        description: "学級日誌に書いたやつ。",
      },
      {
        id: "pretence",
        // link: "",
        title: "少年少女が見る世界",
        description: "2020年度文芸部誌『再生』掲載作。誤字等を加筆修正しています。シリーズものにしたくて書いたけど断念。",
      },
      {
        id: "toriyasai",
        // link: require("../assets/novel/すいキッチン_とり野菜.pdf"),
        title: "すいキッチン　とり野菜",
        description: "文字で飯テロをしたい。",
      },
      {
        id: "ghostmember",
        // link: require("../assets/novel/幽霊部員は影を見るか？.pdf"),
        title: "幽霊部員は影を見るか？",
        description: "2022年度文芸部誌『息吹』掲載作。",
      },
      {
        id: "sayonara",
        // link: "",
        title: "さよならちゃん",
        description: "2024年度文芸部誌『水源』掲載作。別れは突然で、それでも人生は続いていく。",
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
