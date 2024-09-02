<template>
  <div class="works">
    <v-row>
      <v-col cols="6" sm="4" md="4" lg="4" xl="3" xxl="3" v-for="(item, i) in musics" :key="i" class="works-list">
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
  name: "PictureView",
  components: {
  },

  data: () => ({
    musics: [
      {
        src: require("../assets/picture/summer1_ico.webp"),
        link: require("../assets/picture/閉じこめた夏.webp"),
        title: "閉じこめた夏",
        description: "2019年9月制作。すいさんのモデルの元になった絵。",
      },
      {
        src: require("../assets/picture/moonlight_sum.webp"),
        link: require("../assets/picture/moonlight.webp"),
        title: "月光",
        description: "2020年4月制作。すやすやで草。",
      },
      {
        src: require("../assets/picture/Frangle1_sum.webp"),
        link: require("../assets/picture/Frangle1.webp"),
        title: "Frangle1",
        description: "2020年7月制作。曲のイメージを考えたくて描いたらいい感じになりました。これを基にした曲は書けてないのでいつか書きたい。たぶん書かない。",
      },
      {
        src: require("../assets/picture/fireflower_sum.webp"),
        link: require("../assets/picture/花火大会.webp"),
        title: "花火大会",
        description: "2020年7月制作。",
      },
      {
        src: require("../assets/picture/sorry_sum.webp"),
        link: require("../assets/picture/sorry.webp"),
        title: "ごめんって",
        description: "2020年8月制作。謝りたいことはたくさんある。",
      },
      {
        src: require("../assets/picture/envy_sum.webp"),
        link: require("../assets/picture/envy.webp"),
        title: "羨望、吐いても虚像",
        description: "2020年8月制作。どうしようもないこと、変えられないことがあるのを知りながら、ずっと耐えている。",
      },
      {
        src: require("../assets/picture/不安定な安定_sum.webp"),
        link: require("../assets/picture/不安定な安定.webp"),
        title: "不安定な安定",
        description: "2020年8月制作。",
      },
      {
        src: require("../assets/picture/行楽_sum.webp"),
        link: require("../assets/picture/行楽.webp"),
        title: "行楽",
        description: "2020年9月制作。夢の中で「これはナツメだよ」って教えられたこの木は全然ナツメじゃなかった。",
      },
      {
        src: require("../assets/picture/休日_sum.webp"),
        link: require("../assets/picture/休日.webp"),
        title: "休日",
        description: "2021年1月制作。",
      },
      {
        src: require("../assets/picture/踏み出した夏_sum.webp"),
        link: require("../assets/picture/sui_header001.webp"),
        title: "踏み出した夏",
        description: "2021年3月制作。「閉じこめた夏」の続き的な。",
      },
      {
        src: require("../assets/picture/告白_sum.webp"),
        link: require("../assets/picture/告白.webp"),
        title: "告白",
        description: "2021年5月制作。",
      },
      {
        src: require("../assets/picture/lowsui_ico.webp"),
        link: require("../assets/picture/lowsui001.webp"),
        title: "変身",
        description: "2021年5月制作。",
      },
      {
        src: require("../assets/picture/hisui001_3.webp"),
        link: require("../assets/picture/hisui001_3.webp"),
        title: "憂愁",
        description: "2021年5月制作。",
      },
      {
        src: require("../assets/picture/切れない_sum.webp"),
        link: require("../assets/picture/切れない.webp"),
        title: "切れない",
        description: "2021年8月制作。",
      },
      {
        src: require("../assets/picture/mysui001_2.webp"),
        link: require("../assets/picture/mysui001_2.webp"),
        title: "調髪",
        description: "2021年8月制作。",
      },
      {
        src: require("../assets/picture/yoursui001_1.webp"),
        link: require("../assets/picture/yoursui001_1.webp"),
        title: "夢想",
        description: "2021年9月制作。",
      },
      {
        src: require("../assets/picture/みす同人誌企画2021_sum.webp"),
        link: require("../assets/picture/みす同人誌企画2021_すい.webp"),
        title: "睡眠学部案内パンフレット",
        description: "2021年9月制作。MIS.Wの同人誌企画の作品。",
      },
      {
        src: require("../assets/picture/TonEvo_Shito.webp"),
        link: require("../assets/picture/TonEvo_Shito.webp"),
        title: "Breeze of Youth",
        description: "2021年10月制作。とんえぼ創作班によるK-shootMANIAパッケージ \"とんえぼパッケージvol.10 -Evolved 2021-\"の収録曲\"Breeze of Youth\"のジャケットです。",
      },
      {
        src: require("../assets/picture/花子さんが呼んでる_sum.webp"),
        link: require("../assets/picture/花子さんが呼んでる_byすい.webp"),
        title: "花子さんが呼んでる",
        description: "2021年10月制作。MIS.Wの早稲田祭イラスト集用に描きました。",
      },
      {
        src: require("../assets/picture/Orient_jacket.webp"),
        link: require("../assets/picture/Orient.webp"),
        title: "Orient",
        description: "2022年3月制作。とんえぼ創作班によるK-shootMANIAパッケージ \"とんえぼパッケージvol.11 -new era, new nova-\"の収録曲\"Orient\"のジャケットです。",
      },
      {
        src: require("../assets/picture/C100_sum.webp"),
        link: require("../assets/picture/C100_すい.webp"),
        title: "A Summer Day",
        description: "2022年7月制作。MIS.WのC100画集用に描きました。",
      },
      {
        src: require("../assets/picture/white_sum.webp"),
        link: require("../assets/picture/white_summ.webp"),
        title: "春と普遍性",
        description: "2022年9月制作。どっかで使われてるかもしれないらしい。",
      },
      {
        src: require("../assets/picture/Magical_sum.webp"),
        link: require("../assets/picture/Magical.webp"),
        title: "Magicalな愛を",
        description: "2022年9月制作。MIS.Wの早稲田祭イラスト集用に描きました。",
      },
      {
        src: require("../assets/picture/みす同人誌企画2022_sum.webp"),
        link: require("../assets/picture/みす同人誌企画2022_すい.webp"),
        title: "こんにちは、スイチャ！",
        description: "2022年9月制作。MIS.Wの同人誌企画の作品。",
      },
      {
        src: require("../assets/picture/団欒_sum.webp"),
        link: require("../assets/picture/団欒.webp"),
        title: "団欒",
        description: "2023年4月制作。頭の中は毎日騒がしい。描きかけだったけどデータが吹っ飛んだ。",
      },
      {
        src: require("../assets/picture/estazolam_sum.webp"),
        link: require("../assets/picture/estazolam.webp"),
        title: "溶かす",
        description: "2023年10月制作。MIS.Wの早稲田祭イラスト集のテーマから連想して描いた。",
      },
      {
        src: require("../assets/picture/Godoshi1_sum.webp"),
        link: require("../assets/picture/Godoshi1.webp"),
        title: "Fragments of a Journey",
        description: "2023年12月制作。サークルの原神同人誌の表紙を担当させていただきました。",
      },
      {
        src: require("../assets/picture/Beidou_sum.webp"),
        link: require("../assets/picture/Beidou.webp"),
        title: "「炭になるがいい！」",
        description: "2023年12月制作。サークルの原神同人誌に寄稿したイラストその1。",
      },
      {
        src: require("../assets/picture/Freminet_sum.webp"),
        link: require("../assets/picture/Freminet.webp"),
        title: "「お別れの時間。」",
        description: "2023年12月制作。サークルの原神同人誌に寄稿したイラストその2。",
      },
      {
        src: require("../assets/picture/揺らめいた夏_sum.webp"),
        link: require("../assets/picture/揺らめいた夏.webp"),
        title: "揺らめいた夏",
        description: "2024年1月制作。新しいオリジナルデザインのスマホカバー用イラストとして描いた。",
      },
      {
        src: require("../assets/picture/Layla_sum.webp"),
        link: require("../assets/picture/Layla.webp"),
        title: "まだ、夢を見ている？",
        description: "2024年8月制作。サークルの原神同人誌に寄稿したイラスト。",
      },
    ],
  }),
};
</script>
