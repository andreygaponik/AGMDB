import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/features/theme/useTheme";

vi.mock("@/features/theme/useTheme", () => ({
  useTheme: vi.fn(),
}));

const mockUseTheme = vi.mocked(useTheme);

describe("ThemeToggle", async () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("должен отображать иконку солнца для светлой темы", () => {
    mockUseTheme.mockReturnValue({ mode: "light", toggle: vi.fn() });

    render(<ThemeToggle />);

    expect(screen.getByText("🌞")).toBeInTheDocument();
    expect(screen.queryByText("🌙")).not.toBeInTheDocument();
  });

  it("должен отображать иконку луны для темной темы", () => {
    mockUseTheme.mockReturnValue({ mode: "dark", toggle: vi.fn() });

    render(<ThemeToggle />);

    expect(screen.getByText("🌙")).toBeInTheDocument();
    expect(screen.queryByText("🌞")).not.toBeInTheDocument();
  });

  it("должен вызывать функцию toggle при клике", async () => {
    const mockToggle = vi.fn();

    mockUseTheme.mockReturnValue({ mode: "dark", toggle: mockToggle });

    render(<ThemeToggle />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Toggle theme" }));

    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});
