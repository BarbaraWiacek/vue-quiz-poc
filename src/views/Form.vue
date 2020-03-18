<template>
  <div class="wrapper">
    <h1>Question {{ question_number }}</h1>
    <p>{{ question.question_text }}</p>
    <radioform
      v-bind:form_items="question.answers"
      v-bind:activeInStore="activeInStore"
      v-model="active"
    />
    <!-- <p>Active: {{active}}</p> -->
    <router-link
      class="btn btn-primary"
      v-bind:class="{isDisabled: !active}"
      v-bind:to="nextRoute"
    >
      Next
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Radioform from "@/components/Radioform.vue";

export default {
  name: "home",
  components: {
    Radioform
  },
  data: function() {
    return {
      active: this.activeInStore
    }
  },
  computed: {
    question_number() {
      return this.$route.name;
    },
    question_index () {
      return this.question_number - 1;
    },
    question() {
      return this.$store.state.questions[this.question_index];
    },
    nextRoute() {
      let next = parseInt(this.$route.name) + 1;
      return "/" + next;
    },
    activeInStore() {
      return this.$store.state.user_input[this.question_index];
    }
  },
  methods: {
    commitData: function() {
      this.$store.commit("ADD_ANSWER", {
        index: this.question_index,
        answer: this.active
      });
    }
  },
  beforeRouteLeave(to, from, next) {
    this.commitData();
    next();
  }
};
</script>
