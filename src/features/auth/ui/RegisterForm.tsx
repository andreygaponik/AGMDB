import { useState } from "react";
import { useRegisterMutation } from "@/features/auth/api/authApi";

export const RegisterForm = () => {
  const [register, { isLoading, error }] = useRegisterMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register({ email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-xl bg-neutral-800 p-6 shadow-lg"
      >
        <h1 className="text-center text-2xl font-semibold text-white">
          Регистрация
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md bg-neutral-700 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md bg-neutral-700 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {error && "message" in error && (
          <p className="text-sm text-red-400">{error.message}</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-md bg-indigo-600 py-2 font-medium text-white hover:bg-indigo-500 disabled:opacity-50"
        >
          {isLoading ? "Регистрация аккаунта..." : "Зарегистрироваться"}
        </button>
      </form>
    </div>
  );
};
