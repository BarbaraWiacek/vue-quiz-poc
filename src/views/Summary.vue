<template>
  <div class="wrapper">
    <h1>Your summary:</h1>
    <p>
      <ol>
        <li v-for="(answer, index) in answers" v-bind:key="index">
          <span class="text-bold">{{ questions[index].question_text }}:</span> {{ answer.answer }}
        </li>
      </ol>
    </p>
  </div>
</template>
<script>

export default {
  name: "Summary",
  data: function() {
    return {
      answers: this.$store.state.user_input,
      questions: this.$store.state.questions
    }
  }
};
</script>

