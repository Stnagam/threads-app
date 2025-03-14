"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      router.push("/"); // Redirect to home after login
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      {user ? (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded w-64"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded w-64"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </>
      )}
    </div>
  );
}
