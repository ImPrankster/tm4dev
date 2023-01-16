import { AuthError } from "@supabase/supabase-js";
import { supabase } from "../libs/supabaseClient";
import { FormEvent, useState } from "react";

const Account = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      setLoginInfo("Check your email for the login link!");
    } catch (error: any) {
      setLoginInfo(error.error_description || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-base hero h-almostFull" aria-live="polite">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Enter your email to sign in with magic link!</p>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
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
              <button className="btn-primary btn">Get Started</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
