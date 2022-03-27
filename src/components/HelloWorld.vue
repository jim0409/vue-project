<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msg3 }}</h1>

    <h3>這是 h3 的字體</h3>
    <ul>
      <p>某一列</p>
      <li><p>某一行</p></li>
      <li><p>另一個某一行</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  // 使用 HelloWorld 的 template
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 解析運算元，可以針對指定的類別做另外解析 h3 增加屬性 margin */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
