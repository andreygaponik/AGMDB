import { useLogoutMutation } from "@/features/auth/api/authApi";

export const LogoutButton = () => {
  const [logout, { isLoading }] = useLogoutMutation();

  return (
    <button
      onClick={() => logout()}
      disabled={isLoading}
      className="rounded-md bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-500 disabled:opacity-50"
    >
      Выйти
    </button>
  );
};
