import { supabase } from "../lib/supabaseClient";
import { FormEvent, useState, useContext } from "react";
import { AuthError } from "@supabase/supabase-js";
import { SessionContext } from "./Layout";
import CenteredLoadingBar from "../components/CenteredLoadingBar";

import { MdMarkEmailRead, MdError } from "react-icons/md";

const Account = () => {
  const session = useContext(SessionContext);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      setIsEmailSent(true);
      if (error) throw error;
    } catch (e) {
      if (typeof e === "string") {
        setLoginError(e);
      } else if (e instanceof AuthError) {
        setLoginError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logOut = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (e) {
      if (typeof e === "string") {
        alert(e);
      } else if (e instanceof AuthError) {
        alert(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="hero h-screen bg-base-200" aria-live="polite">
      <div className="hero-content text-center">
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body items-center">
            {isLoading ? (
              <CenteredLoadingBar />
            ) : (
              <>
                <h1 className="text-5xl font-bold">Hello there</h1>
                {session != null ? (
                  <>
                    <p className="py-6">Welcome back! {session!.user.email}</p>
                    <button className="btn-warning btn" onClick={logOut}>
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <p className="py-6">
                      Enter your email to sign in with magic link!
                    </p>
                    {/*Form that handles login*/}
                    <form
                      onSubmit={handleLogin}
                      className="flex flex-col items-center justify-center space-y-8 self-stretch"
                    >
                      <input
                        className="input-bordered input w-full"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button className="btn-primary btn" type="submit">
                        Get Started
                      </button>
                    </form>
                    {/*Displays login error or success message*/}
                    {loginError ? (
                      <div className="card mt-4 w-full flex-row items-center justify-center space-x-1 bg-error py-2 text-error-content shadow-xl">
                        <MdError />
                        <div>Login failed, please try again.</div>
                      </div>
                    ) : (
                      <>
                        {isEmailSent ? (
                          <div className="card mt-4 w-full flex-row items-center justify-center space-x-1 bg-primary py-2 text-primary-content shadow-xl">
                            <MdMarkEmailRead />
                            <div>Check your email for sign-in link.</div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
