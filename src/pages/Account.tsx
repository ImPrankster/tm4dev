import { supabase } from "../libs/supabaseClient";
import { FormEvent, useState, useContext } from "react";
import { SessionContext } from "./Layout";
import { AuthError } from "@supabase/supabase-js";

const Account = () => {
  const session = useContext(SessionContext);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      setLoginError("success");
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
    let { error } = await supabase.auth.signOut();
    return error;
  };

  return (
    <div className="hero h-screen bg-base-200" aria-live="polite">
      <div className="hero-content text-center">
        <div className="card w-full max-w-sm bg-base-100 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Hello there</h1>
            {session ? (
              <>
                <p className="py-6">Welcome back!</p>
                <button className="btn-warning btn" onClick={logOut}>
                  Log out
                </button>
              </>
            ) : (
              <>
                <p className="py-6">
                  Enter your email to sign in with magic link!
                </p>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    <form
                      onSubmit={handleLogin}
                      className="flex flex-col items-center justify-center space-y-8"
                    >
                      <input
                        className="input-bordered input w-full max-w-xs"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button className="btn-primary btn" type="submit">
                        Get Started
                      </button>
                    </form>
                    {loginError == null ? (
                      <></>
                    ) : (
                      <div
                        className={
                          "card mt-8 max-w-md items-center justify-center py-2 shadow-xl " +
                          "bg-" +
                          (loginError == "success" ? "accent" : "error")
                        }
                      >
                        <div
                          className={
                            "text-" +
                            (loginError == "success" ? "accent" : "error") +
                            "-content"
                          }
                        >
                          <p>
                            {loginError == "success"
                              ? "Check your inbox for sign in link."
                              : loginError}
                          </p>
                        </div>
                      </div>
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
