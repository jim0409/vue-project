<template>
  <h1>Home Page</h1>
  <HelloWorld msg="這邊會被import"/>
  <HelloWorld msg2="這邊不會被import"/>
  <HelloWorld msg3="這邊又被import啦"/>

  <NiceToMeetYou msg="這邊好像也會被import"/>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import NiceToMeetYou from '../components/NiceToMeetYou.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NiceToMeetYou,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
