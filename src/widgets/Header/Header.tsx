import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "@/app/store";

import Logo from "@/shared/ui/Logo/Logo";
import { LogoutButton } from "@/features/auth/ui/LogoutButton";
import { ThemeToggle } from "./ui/ThemeToggle";
import { FavoritesCounter } from "@/features/favorites/ui/FavoritesCounter";
import { MenuLinks } from "./ui/MenuLinks";

const HeaderUserActions = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user || !user.uid) {
    return (
      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="rounded-md px-3 py-1.5 text-sm text-neutral-300 transition hover:bg-white/5 hover:text-white"
        >
          Войти
        </Link>
        <Link
          to="/registration"
          className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-400"
        >
          Регистрация
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <FavoritesCounter userId={user.uid} />
      <span className="max-w-[160px] truncate text-sm text-neutral-300">
        {user.email}
      </span>
      <LogoutButton />
    </div>
  );
};

const Header = () => {
  return (
    <header className="sticky mb-10 top-0 z-50 border-b border-white/10 bg-[#14161a]/90 backdrop-blur">
      <div className="container">
        <div className="header__top">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/">
                <Logo />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <HeaderUserActions />
            </div>
          </div>
        </div>

        <div className="header__bottom">
          <div className="flex items-center justify-center space-x-6 py-3">
            <MenuLinks />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
