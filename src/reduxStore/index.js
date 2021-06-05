export const add = (count) => {
  return {
    type: "ADD",
    count
  };
};

export default function (state = { num: 1 }, action) {
  switch (action.type) {
    case "ADD":
      let newState = {
        num: state.num + action.count || 0
      };
      return newState;
    default:
      return state;
  }
}
