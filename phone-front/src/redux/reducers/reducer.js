const defaultState = {
  phones: { },
  isSelected: false,
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_PHONES': {
      return {
        ...state,
        phones: action.phones,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default mainReducer;
