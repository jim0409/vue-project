<template>
<Button icon="pi pi-arrow-right" @click="visibleLeft = true" >ClickMe</Button>
  <SidebarView v-model:visible="visibleLeft">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
  </SidebarView>
  <router-view />

</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const visibleLeft = ref(false);
        const visibleRight = ref(false);
        const visibleTop = ref(false);
        const visibleBottom = ref(false);
        const visibleFull = ref(false);

		return { visibleLeft, visibleRight, visibleTop, visibleBottom, visibleFull }
    }
}
</script>