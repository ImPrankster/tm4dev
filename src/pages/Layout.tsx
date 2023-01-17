import { useEffect, useState, createContext } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { supabase } from "../libs/supabaseClient";
import { Session } from "@supabase/supabase-js";

const Layout = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <SessionContext.Provider value={session}>
      <Header />
      <Outlet />
    </SessionContext.Provider>
  );
};

export const SessionContext = createContext<Session | null>(null);
export default Layout;
