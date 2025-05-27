export interface State {
  currentIndex: number;
  answers: Record<number, number>;
}

interface SelectAction {
  type: 'SELECT_ANSWER';
  payload: {
    questionId: number;
    selected: number;
  };
}

interface MoveAction {
  type: 'PREV_QUESTION' | 'NEXT_QUESTION';
}

export type Action = SelectAction | MoveAction;
