import { useReducer } from 'react';
import { Action, State } from '@/app/question/types/questionProgress';
import QUESTIONS from '@/app/question/data/questions.json';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SELECT_ANSWER':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.selected,
        },
      };
    case 'PREV_QUESTION':
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };
    default:
      return state;
  }
};

export const useQuestionProgress = () => {
  const [state, dispatch] = useReducer(reducer, {
    currentIndex: 0,
    answers: {},
  });

  const prev = () => {
    if (state.currentIndex == 0) return;
    dispatch({ type: 'PREV_QUESTION' });
  };

  const next = () => {
    if (state.currentIndex == QUESTIONS.length - 1) return;
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const select = (questionId: number, selected: number) => {
    dispatch({
      type: 'SELECT_ANSWER',
      payload: { questionId, selected },
    });
  };

  return {
    currentIndex: state.currentIndex,
    answers: state.answers,
    prev,
    next,
    select,
  };
};
