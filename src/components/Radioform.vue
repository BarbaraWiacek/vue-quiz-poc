<template>
  <div>
    <form>
      <ul>
        <li v-for="(item, index) in form_items" v-bind:key="index">
          <input
            type="radio"
            name="radio_form"
            :value="item"
            v-model="activeInStore.answer"
            v-on:change="$emit('input', $event.target.value)"
          >
          {{ item }}
        </li>
      </ul>
    </form>
    <!-- <p>ActiveInStore: {{activeInStore}}</p> -->
  </div>
</template>

<script>
export default {
  name: "Radioform",
  props: {
    form_items: Array,
    activeInStore: Object
  },
  methods: {
  }
};
</script>
