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

		return { visibleLeft }
    }
}
</script>