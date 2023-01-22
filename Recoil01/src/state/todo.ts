import { atom, selector } from "recoil";
import { Todo } from "src/types";

// atom使用
export const todosState = atom<Todo[]>({
  key: "todosState",
  default: [
    {
      id: 1,
      text: "test1",
      isDone: false,
    },
    {
      id: 2,
      text: "test2",
      isDone: true,
    },
  ],
});

// セレクタ
export const todosLengthState = selector({
  key: "todosLengthState",
  get: ({ get }) => {
    const todos = get(todosState);

    return todos.length;
  },
});
