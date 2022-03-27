<template>
  <div class="hello">
      <p>Nice to Meet You</p>
  </div>
  <div id="app">
      {{message}}
  </div>
</template>

<script>

export default {
  name: 'NiceToMeetYou',
  props: {
    msg: String,
  },
  method:{
      ma : function check(){
          console.log(this);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 解析運算元，可以針對指定的類別做另外解析 h3 增加屬性 margin */
</style>
