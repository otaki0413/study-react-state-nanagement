import type { AppProps } from "next/app";
import { useState } from "react";
import { Layout } from "src/components/Layout";
import { Todo } from "src/types";

const TODOS: Todo[] = [
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
];

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <Layout todoCount={todos.length}>
      <Component
        {...pageProps}
        todos={todos}
        setTodos={setTodos}
      />
    </Layout>
  );
}
