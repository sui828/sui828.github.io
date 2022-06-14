<template>
  <div class="header">
    <div class="headerbox">
      <div class="title">
        <h1 class="titletext"><router-link to="/">生成物置き場</router-link></h1>
      </div>
      <div class="navigation">
        <ul class="navigationlist">
          <li><router-link to="/music">Music</router-link></li>
          <li><router-link to="/novel">Novel</router-link></li>
          <li><router-link to="/picture">Picture</router-link></li>
          <li><router-link to="/other">Other</router-link></li>
        </ul>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*ヘッダー*/
.header {
  z-index: 100;
  padding: 6px 0;
  width: 100%;
  background: linear-gradient(135deg, #002b56 0%, #edf0ff 100%);
  background-blend-mode: normal;
  color: #fff;
}
.headerbox {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.title{
  width: 40%;
  height: 54px;
  margin: 0 auto 0 0;
  display: flex;
  flex-wrap: wrap;
}
.titletext {
  width: 100%;
  margin: 0;
  font-family: 'Sawarabi Mincho', sans-serif;
  text-shadow: 0px 2px 4px rgba(255,255,255,0.25);
  color: #edf0ff;
  font-size: 36px;
  font-weight: 400;
}
.titletext > a {
  text-decoration: none;
  color:#fff;
}
/*ナビゲーション*/
.navigation {
  text-align: center;
  width: 50%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
}
.navigationlist {
  padding: 0 5% 0 0;
  display: flex;
  text-shadow: 0px 2px 4px rgba(255,255,255,0.6);
  margin: 10px auto;
  justify-content: flex-end;
}
.navigationlist > li {
  width: 80px;
  list-style-type: none;
}
.navigationlist > li a {
  display: block;
  padding: 6px 12px;
  color: #002b56;
  text-decoration: none;
  font-family: "Abril Fatface";
  font-size: 18px;
  font-weight: 400;
  text-align: center;
}
.navigationlist > li a:hover {
  color: #002b56;
}
.navigationlist > li a.active {
  border-bottom: #0f0 solid 2px;
  color: #002b56;
}
.navigationlist > li a {
  display: inline-block;
  position: relative;
}
.navigationlist > li a::after {
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: #002b56;
  transition: all 0.3s ease 0s;
}
.navigationlist > li a:hover {
  cursor: pointer;
}
.navigationlist > li a:hover::after {
  width: 100%;
}
</style>
