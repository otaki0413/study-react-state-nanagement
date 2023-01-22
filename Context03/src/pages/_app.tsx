import type { AppProps } from "next/app";
import { Layout } from "src/components/Layout";
import { TodoProvider } from "src/state/todo";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodoProvider>
  );
}
