<template>
  <div class="news">
    <v-row>
      <v-col cols="12" v-for="(item, i) in news" :key="i">
        <v-card color="rgba(255,255,255,0.8)" :href="item.link" class="news-list" target="_blank">
          <div class="d-md-flex junstify-center align-center">
            <div class="news-list-item">
              <div class="news-list-item2">
                <div class="news-list-date">{{ item.date }}</div>
                <div class="news-list-genre">
                  <v-chip :color='item.color' class="news-list-genre-chip">{{ item.genre }}</v-chip>
                </div>
              </div>
              <div class="news-list-title">{{ item.title }}</div>
            </div>
            <div class="news-list-text">{{ item.text }}</div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: "NewsView",
  components: {
  },

  data: () => ({
    news: [
      /*
      genre:
        Music  : "yellow-darken-4"
        Picture: "light-green-darken-3"
        Novel  : "blue-darken-4"
        Game   : "brown-darken-2"
        Event  : "red-darken-1"
        Others : ""
      */
      {
        genre: "Novel",
        color: "blue-darken-4",
        link: "",
        date: "24/04/16",
        title: "少年少女が見る世界",
        text: "データを発掘したので加筆修正の上掲載しました！",
      },
      {
        genre: "Music",
        color: "yellow-darken-4",
        link: "https://www.nicovideo.jp/watch/so42905295",
        date: "23/11/02",
        title: "エスタゾラム",
        text: "新曲を投稿しました。Niconicoで視聴できます。",
      },
      {
        genre: "Picture",
        color: "light-green-darken-3",
        link: "",
        date: "23/10/26",
        title: "溶かす",
        text: "イラストを公開しました。",
      },
      {
        genre: "Others",
        color: "",
        link: "",
        date: "23/10/10",
        title: "生成物置き場",
        text: "デザインを一新して溜まってた更新作業を行いました！",
      },
      {
        genre: "Music",
        color: "yellow-darken-4",
        link: "https://www.youtube.com/watch?v=ajhMVt4Xcfs",
        date: "23/08/26",
        title: "『テラーと歯車』",
        text: "新曲を投稿しました。Niconico,Youtubeで視聴できます。",
      },
    ],
  }),
};
</script>
