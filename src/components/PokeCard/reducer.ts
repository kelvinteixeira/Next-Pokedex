interface State {
  array: string[];
  currentIndex: number;
}

export const reducer = (state: State, action: any) => {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        currentIndex:
          state.currentIndex < state.array.length - 1
            ? state.currentIndex + 1
            : state.currentIndex,
      };
    case "PREVIOUS":
      return {
        ...state,
        currentIndex: state.currentIndex > 0 ? state.currentIndex - 1 : 0,
      };
    default:
      return state;
  }
};
