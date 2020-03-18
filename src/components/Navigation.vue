<template>
  <div id="nav">
      <router-link
        class="router-link"
        v-for="route in this.$router.options.routes"
        v-bind:key="route.name"
        :to="route.path"
      >
        <span>{{ route.name }}</span>
      </router-link>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
