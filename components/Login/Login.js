"use client";

import { useOS } from "@/context/OSContext";

export default function Login() {
  const { login } = useOS();

  return (
    <div style={{ textAlign: "center", marginTop: "40vh" }}>
      <h1>Welcome</h1>
      <button onClick={login}>
        Log In
      </button>
    </div>
  );
}
