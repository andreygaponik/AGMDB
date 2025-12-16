import SearchBar from "@/features/search/ui/SearchBar";
import Logo from "@/shared/ui/Logo/Logo";

const Header = () => {
  console.log("header render");
  return (
    <header className="bg-[#14161a] pt-5 pb-5">
      <div className="container mx-auto">
        <div className="header__top">
          <div className="header__top-left flex">
            <Logo />
            <SearchBar />
          </div>
          <div className="header__top-right"></div>
        </div>
        <div className="header__bottom"></div>
      </div>
    </header>
  );
};

export default Header;
