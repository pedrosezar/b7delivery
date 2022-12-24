import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as AuthContextProvider } from "../contexts/auth";
import { Provider as AppContextProvider } from "../contexts/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
