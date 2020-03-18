import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [
      {
        question_text: "Do you smoke?",
        answers: ["Never", "Rarely", "Often"]
      },
      {
        question_text: "Are you overweight?",
        answers: ["No", "Yes, up to 10kg", "Yes, over 10kg"]
      },
      {
        question_text: "How often do you exercise?",
        answers: ["Never", "Rarely", "Often"]
      },
      {
        question_text: "How often do you drink?",
        answers: ["Never", "Rarely", "Often"]
      },
      {
        question_text: "How would you rate your stress level?",
        answers: ["Low", "Medium", "High"]
      }
    ],
    user_input: [
      { answer: "" },
      { answer: "" },
      { answer: "" },
      { answer: "" },
      { answer: "" }
    ]
  },
  getters: {},
  mutations: {
    ADD_ANSWER(state, payload) {
      state.user_input[payload.index].answer = payload.answer;
    }
  },
  actions: {},
  modules: {}
});
