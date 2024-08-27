"use client";

// /app/components/AuthButton.js
import { useEffect, useState } from "react";

const AuthButton = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/auth/check", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      setIsAuthenticated(data.authenticated);
    };

    checkAuth();
  }, []);

  const handleAuth = async () => {
    if (isAuthenticated) {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setIsAuthenticated(false);
    } else {
      window.location.href = "/page/login";
    }
  };

  return <button onClick={handleAuth}>{isAuthenticated ? "Logout" : "Login"}</button>;
};

export default AuthButton;
