import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { LoginForm } from "@/features/auth/ui/LoginForm";

import type { RootState } from "@/app/store";

const LoginPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <LoginForm />;
};

export default LoginPage;
