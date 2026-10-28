import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";

const GoogleLoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleRedirectResult = async () => {
      setLoading(true);
      try {
        const result = await getRedirectResult(auth);
        if (result && result.user) {
          console.log("User signed in:", result.user);
          // ✅ Directly navigate to home after Google login
          navigate("/home");
        }
      } catch (err) {
        console.error("Google login error:", err);
        setError("Google login error. Check console for details.");
      } finally {
        setLoading(false);
      }
    };

    handleRedirectResult();
  }, [navigate]);

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (err) {
      console.error("Google login error:", err);
      setError("Google login error. Check console for details.");
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Login with Google</h1>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && (
        <button onClick={handleGoogleLogin} style={{ padding: "10px 20px" }}>
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default GoogleLoginPage;
