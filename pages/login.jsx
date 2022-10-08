import Head from "next/head";
import { Container } from "../styles/login";
import Image from "next/image";
import eagle from "../public/eagle.svg";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const gLogin =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg";
  const fLogin =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg";

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider).then((res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential.accessToken;
      const user = res.user;
      return { credential, token, user };
    });
    console.warn(result);
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <Image src={eagle} width="250px" height="250px" alt="logo" />
        <div className="app__login--buttonBox">
          <button onClick={signIn}>
            <img src={gLogin} alt="login with google" />
            <span>Login with Google</span>
          </button>
          <button>
            <img src={fLogin} alt="login with facebook" />
            <span>Login with Google</span>
          </button>
        </div>
      </Container>
    </>
  );
}

export default Login;
