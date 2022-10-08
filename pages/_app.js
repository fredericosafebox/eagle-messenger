import { GlobalStyle } from "../styles/global";
import { wrapper } from "../store/store";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../firebase";
import Login from "./login";

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  if (!user) {
    return (
      <>
        <GlobalStyle />
        <Login />
      </>
    );
  }
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
