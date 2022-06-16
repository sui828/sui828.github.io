<template>
  <div class="music">
    <div class="space"></div>
    <div class="caption"><h2 class="captiontitle">CONTENTS</h2></div>
    <div class="division">
      <div class="divisionarea">
        <router-link to="/music">
          <div class="divisionimage"><img src="../assets/pic/mus.png"></div>
          <p class="divisionname">Music</p>
        </router-link>
      </div>
      <div class="divisionarea">
        <router-link to="/novel">
          <div class="divisionimage"><img src="../assets/pic/nov.png"></div>
          <p class="divisionname">Novel</p>
        </router-link>
      </div>
      <div class="divisionarea">
        <router-link to="/picture">
          <div class="divisionimage"><img src="../assets/pic/pic.png"></div>
          <p class="divisionname">Picture</p>
        </router-link>
      </div>
      <div class="divisionarea">
        <router-link to="/other">
          <div class="divisionimage"><img src="../assets/pic/oth.png"></div>
          <p class="divisionname">Other</p>
        </router-link>
      </div>
    </div>
    <div class="caption"><h2 class="captiontitle">LINKS</h2></div>
    <div class="division">
      <div class="divisionarea">
        <a href="https://twitter.com/828sui" target="_blank">
          <div class="divisionimage"><img src="../assets/pic/mus.png"></div>
          <p class="divisionname">Twitter</p>
        </a>
      </div>
      <div class="divisionarea">
        <a href="https://www.youtube.com/channel/UC7ODCByUzHSCc_wYDhUWlFg" target="_blank">
          <div class="divisionimage"><img src="../assets/pic/nov.png"></div>
          <p class="divisionname">Youtube</p>
        </a>
      </div>
      <div class="divisionarea">
        <a href="https://www.nicovideo.jp/user/116019505" target="_blank">
          <div class="divisionimage"><img src="../assets/pic/pic.png"></div>
          <p class="divisionname">Niconico</p>
        </a>
      </div>
      <div class="divisionarea">
        <a href="https://soundcloud.com/im3py" target="_blank">
          <div class="divisionimage"><img src="../assets/pic/oth.png"></div>
          <p class="divisionname">Soundcloud</p>
        </a>
      </div>
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
</script>

<style>
.music{
  width: 100%;
  background: radial-gradient(circle, at 0% 0%, #002b56 0%, #002b56 41.98%, #ffffff 100%);
  background-image: radial-gradient(at 0% 0%, rgba(00, 43, 86, 1) 0%, rgba(00, 43, 86, 1) 42%, rgba(255, 255, 255, 1) 100%);
  background-blend-mode: normal;
}
/*見出し*/
.caption {
  max-width: 960px;
  margin: 80px auto 20px;
}
.captiontitle {
  text-shadow: 0px 2px 4px rgba(255,255,255,0.15);
  color: #edf0ff;
  font-family: "Abril Fatface";
  font-size: 48px;
  font-weight: 400;
  text-align: center;
}
/*コンテンツ*/
.division {
  max-width: 960px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.divisionarea {
  width: 23%;
  min-width: 200px;
  margin: 20px 0;
  height: auto;
}
.divisionarea > a {
  color: #111;
  display: block;
  text-decoration: none;
}
.disabled{
  pointer-events: none;
}
.divisionimage{
  width: 100%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.divisionimage > img {
  border-radius: 50%;
  width: 90%;
  object-fit: cover;
  font-family: 'object-fit: cover;'; /*IE対策*/
}
.divisionname {
  margin: 10px 0;
  padding: 10px 0;
  text-shadow: 0px 2px 4px rgba(255,255,255,0.15);
  color: #edf0ff;
  font-family: "Abril Fatface";
  font-size: 24px;
  font-weight: 400;
  text-align: center;
}
.divisiontext {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}
.divisionicon {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
}
.space{
  height: 100px;
}
</style>
