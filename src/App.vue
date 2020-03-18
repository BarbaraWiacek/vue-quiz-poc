<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="main-container">
      <transition name="fadeIn">
        <router-view :key="$route.path" />
      </transition>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>
