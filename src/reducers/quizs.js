import * as types from './../constants/ActionType';

let initialState = {
    User: {
        userName: '',
        email: '',
        option_1: true,
        option_2: false,
    },
    App: {
        id: 0,
        disabledBtn: true,
        question: [
            {
                "id": 1,
                "question": "Eighteen thousandths, written as a decimal, is:",
                "answers": [
                    "0.0018",
                    "0.018",
                    "0.18"
                ],
                "correct_answer": 1
            }, {
                "id": 2,
                "question": "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
                "answers": [
                    "12",
                    "13",
                    "14",
                    "15"
                ],
                "correct_answer": 4
            }, {
                "id": 3,
                "question": "What is the scientific name of a butterfly?",
                "answers": [
                    "Apis",
                    "Coleoptera",
                    "Formicidae",
                    "Rhopalocera"
                ],
                "correctIndex": 3
            }, {
                "id": 4,
                "question": "How hot is the surface of the sun?",
                "answers": [
                    "1,233 K",
                    "5,778 K",
                    "12,130 K",
                    "101,300 K"
                ],
                "correctIndex": 1
            }, {
                "id": 5,
                "question": "Who are the actors in The Internship?",
                "answers": [
                    "Ben Stiller, Jonah Hill",
                    "Courteney Cox, Matt LeBlanc",
                    "Kaley Cuoco, Jim Parsons",
                    "Vince Vaughn, Owen Wilson"
                ],
                "correctIndex": 3
            },
        ]
    }
}

let myReducer = (state = initialState, action) => {   
    switch (action.type) {
        case types.RES_USER:
            state.User.userName = action.userName;
            state.User.email = action.userName;
            state.App.disabledBtn = false;
            return { ...state };
            
        case types.NEXT_BTN:                    
            state.App.id = action.number;
            return { ...state };
        default: return state;
    }
}

export default myReducer;