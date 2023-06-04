import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import app from "../../../Firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const SocialLogSign = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const handleWithGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const GoogleInUser = result.user;
        console.log(googleInUser);
        setUser(GoogleInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleWithGithubSignIn = () => {
    signInWithPopup(auth, GithubProvider)
      .then((result) => {
        const GithubInUser = result.user;
        console.log(GithubInUser);
        setUser(GithubInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleWithSignOutRedirect = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // className="text-white p-1 m-1 rounded-full fill-current bg-neutral-300 hover:bg-neutral-400
  return (
    <div className="grid grid-flow-col gap-1 justify-center mt-3">
      {user ? (
        <button onClick={handleWithSignOutRedirect}>Sign Out </button>
      ) : (
        <>
          <a className="cursor-pointer" onClick={handleWithGoogleSignIn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              className=" bi bi-google text-white p-1 m-1 rounded-full fill-current bg-neutral-300 hover:bg-neutral-400"
            >
              {" "}
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />{" "}
            </svg>
          </a>

          <a className="cursor-pointer" onClick={handleWithGithubSignIn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className=" text-white p-1 m-1 rounded-full fill-current bg-neutral-300 hover:bg-neutral-400"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </>
      )}
      {user && navigate("/")}
    </div>
  );
};

export default SocialLogSign;
