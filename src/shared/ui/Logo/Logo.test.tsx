import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Logo from "./Logo";
import logoSvg from "./logo.svg";

describe("Logo", () => {
  it("должен рендерить изображение логотипа с правильным alt и src", () => {
    render(<Logo />);

    const logoImage = screen.getByAltText("AGMDB");

    expect(logoImage).toHaveAttribute("src", logoSvg);
  });
});
