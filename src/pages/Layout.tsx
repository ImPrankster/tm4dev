import { useEffect, useState } from "react";
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
    <>
      <div>
        <Header />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
