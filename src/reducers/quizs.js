import * as types from "./../constants/ActionType";

let findIndex = (questions, id) => {
  let result = -1;
  result = questions.findIndex((x) => x.id === id);
  return result;
};

let questionEmptyAns = (question) => {
  let result = -1;
  result = question.findIndex((x) => x.answer === -1);
  return result;
};

let findAnswerIndex = (answer, ans) => {
  let result = -1;
  result = answer.findIndex((x) => x === ans);
  return result;
};

let socreQuestion = (quesArray) => {
  let res = 0;
  let ques = quesArray;
  var i = 0;
  var len = ques.length;
  for (; i < len; ) {
    var obj = ques[i];
    if (obj.answer === obj.correct_answer) res++;
    i++;
  }
  return res + "/" + len;
};

let initialState = {
  User: {
    userName: "",
    email: "",
    option_1: true,
    option_2: false,
    score: "",

    seconds: 30,
    status: "paused",
    decrement_interval: 0,
  },
  App: {
    id: 0,
    disabledBtn: true,
    questionIndex: 0,
    isChecked: "",
    question: [
      {
        id: 1,
        question: "Eighteen thousandths, written as a decimal, is:",
        answers: ["0.0018", "0.018", "0.18"],
        correct_answer: 1,
        answer: -1,
      },
      {
        id: 2,
        question: "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
        answers: ["12", "13", "14", "15"],
        correct_answer: 3,
        answer: -1,
      },
      {
        id: 3,
        question: "What is the scientific name of a butterfly?",
        answers: ["Apis", "Coleoptera", "Formicidae", "Rhopalocera"],
        correctIndex: 3,
        answer: -1,
      },
      {
        id: 4,
        question: "How hot is the surface of the sun?",
        answers: ["1,233 K", "5,778 K", "12,130 K", "101,300 K"],
        correctIndex: 1,
        answer: -1,
      },
      {
        id: 5,
        question: "Who are the actors in The Internship?",
        answers: [
          "Ben Stiller, Jonah Hill",
          "Courteney Cox, Matt LeBlanc",
          "Kaley Cuoco, Jim Parsons",
          "Vince Vaughn, Owen Wilson",
        ],
        correctIndex: 3,
        answer: -1,
      },
    ],
  },
};

let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RES_USER:
      state.User.userName = action.userName;
      state.User.email = action.userName;
      state.App.disabledBtn = false;
      return { ...state };

    case types.NEXT_BTN:
      state.App.id = action.number;
      if (state.App.id == 3) {          
        let indexAnsEmpty = questionEmptyAns(state.App.question);
        if (indexAnsEmpty != -1) {            
            state.App.questionIndex = indexAnsEmpty;
            state.App.id = 2;
            return {...state};
        } else {
          let sco = socreQuestion(state.App.question);
          state.User.score = sco;
          return { ...state };
        }
      }
      return { ...state };

    case types.SHOW_QUESTION:
      let id = action.id;
      let index = findIndex(state.App.question, id);
      state.App.questionIndex = index;
      var cloneQuestion = state.App.question[index];
      if (cloneQuestion.answer != -1) {
        let answerIndex = cloneQuestion.answer;
        var check = cloneQuestion.answers[answerIndex];
        state.App.isChecked = check;
      } else {
        state.App.isChecked = "";
      }
      return { ...state };

    case types.CHOOSE_ANS:
      let questionId = action.questionId;
      let ans = action.ans;
      let questionIndex = findIndex(state.App.question, questionId);
      var cloneQuesttion = state.App.question[questionIndex];
      var arrayAns = cloneQuesttion.answers;
      let ansIndex = findAnswerIndex(arrayAns, ans);
      cloneQuesttion.answer = ansIndex;
      state.App.question[questionIndex] = cloneQuesttion;
      state.App.isChecked = ans;

      return { ...state };

    case types.TICK:
      state.User.seconds = (state.User.seconds - 0.01).toFixed(2);
      return { ...state };

    case types.STOP:
      state.User.seconds = 0;
      state.App.id = 3;
      let sco = socreQuestion(state.App.question);
      state.User.score = sco;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
