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
  name: "OtherView",
  components: {
  },

  data: () => ({
    others: [
      {
        src: require("../assets/others/crossfade_sum.webp"),
        link: "https://micomprocedure.com/works",
        title: "CrossFade",
        description: "プロセ新入生プロジェクト2020で制作。リズムゲーム。操作キャラ1人のデザイン、SE、タイトル曲、収録曲2曲とその譜面を担当。",
      },
      {
        src: require("../assets/others/sui_2d.webp"),
        link: "",
        title: "2Dモデル",
        description: "Live2Dで制作。配信環境はあるけど企画力と話術はない。",
      },
      {
        src: require("../assets/others/君の注射に超夢中.webp"),
        link: "https://unityroom.com/games/crazy_about_your_shot",
        title: "君の注射に超夢中",
        description: "Unity1週間ゲームジャム2020/9でプロセの有志と制作。縦画面STG。道中曲1曲とゲームオーバーBGM、SEを担当。",
      },
      {
        src: require("../assets/music/CDjacket_i1.webp"),
        link: "https://www.melonbooks.co.jp/detail/detail.php?product_id=1131888",
        title: "I collection vol.1",
        description: "M3で頒布したインスト曲のミニアルバム。6曲収録。",
      },
      {
        src: require("../assets/music/CDjacket_i2.webp"),
        link: "https://www.melonbooks.co.jp/detail/detail.php?product_id=1131889",
        title: "I collection vol.2",
        description: "M3で頒布したインスト曲のミニアルバム。6曲収録。",
      },
      {
        src: require("../assets/others/slow.webp"),
        link: "https://shiheikshoot.web.fc2.com/KSM_SLOW/",
        title: "Serene Life On Waterfront",
        description: "テンポが遅めの曲を集めたKSMパッケージ。4曲とそれらのジャケットを担当。",
      },
      {
        src: require("../assets/others/anchor_chan.webp"),
        link: "https://youtu.be/OKt3RCa7zXY",
        title: "アンカーちゃん3Dモデル",
        description: "2022年3月制作。MIS.WのMMD企画の作品。デザインは高校時代に考えていたオリキャラを参考にした。",
      },
      {
        src: require("../assets/others/TKS_ico.webp"),
        link: "https://unityroom.com/games/getcreditsstg",
        title: "単位回収銃撃戦-タンイカイシュウシューティング-",
        description: "2022年4月制作。新歓ブログ記事のために1週間で作った。",
      },
      {
        src: require("../assets/others/line_yuruyuru.webp"),
        link: "https://store.line.me/stickershop/product/20883929/ja",
        title: "LINEスタンプ",
        description: "2022年9月制作。「ゆるゆるすいさん」スタンプ好評発売中。",
      },
      {
        src: require("../assets/others/d10rama.webp"),
        link: "https://d10rama.com/nitousei/",
        title: "みえない二等星",
        description: "D10RAMA制作のビジュアルノベルゲーム。BGM2曲を担当。",
      },
      {
        src: require("../assets/others/KVM_ico.webp"),
        link: "https://micomprocedure.com/works",
        title: "花弁回し",
        description: "2022年9月制作。ルービックキューブをめちゃくちゃ難しくしたパズルゲーム。",
      },
      {
        src: require("../assets/others/NIGIRI_ico.webp"),
        link: "https://unityroom.com/games/n1g1r1",
        title: "NIGIRI",
        description: "Unity1週間ゲームジャム2023/9で個人で制作。画像の寿司は実際に食べたもの。",
      },
      {
        src: require("../assets/others/aoha_icon.webp"),
        link: "https://semicolon0103.com/",
        title: "Aioi Aoha's Workshop",
        description: "HPデザイン/実装を担当しました。",
      },
    ],
  }),
};
</script>
