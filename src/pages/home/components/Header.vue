<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
      </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
//  lang="stylus" 调用stylus scoped指限制该处定义的样式只对当前组件有效
<style lang="stylus" scoped>
// ~@ 表示src文件夹 引入stylus CSS全局变量文件,在webpack.base.conf.js配置styles路径别名
// @import '~@/assets/styles/varibles.styl'
@import '~styles/varibles.styl'
  .header
    display : flex
    line-height : .86rem
    background : $bgColor
    color : #ffffff
    .header-left
      width : .64rem
      float : left
      .back-icon
        text-align : center
        font-size : .4rem
    .header-input
      flex : 1
      height : .64rem
      line-height : .64rem
      padding-left : .2rem
      margin-top : .12rem
      margin-left : .2rem
      background : #ffffff
      border-radius : .1rem
      color : #cccccc
    .header-right
      width : 1.24rem
      float : right
      text-align : center
      .arrow-icon
        font-size: .24rem
        margin-left : -.04rem
</style>
