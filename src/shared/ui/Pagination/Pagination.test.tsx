import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, type Mock, beforeEach } from "vitest";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  let mockOnPageChange: Mock;
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    mockOnPageChange = vi.fn();
    user = userEvent.setup();
  });

  const setup = (currentPage: number, totalPages: number) => {
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={mockOnPageChange}
      />,
    );
  };

  it("должен рендериться без ошибок и отображать основные элементы", () => {
    setup(1, 5);

    expect(screen.getByText("Назад")).toBeInTheDocument();
    expect(screen.getByText("Вперед")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("отключает кнопку 'Назад' на первой странице", () => {
    setup(1, 5);

    expect(screen.getByText("Назад")).toBeDisabled();
  });

  it("отключает кнопку 'Вперед' на последней странице", () => {
    setup(5, 5);

    expect(screen.getByText("Вперед")).toBeDisabled();
  });

  it("вызывает onPageChange с правильным номером страницы при клике на цифру", async () => {
    setup(1, 5);

    await user.click(screen.getByText("3"));

    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  it("вызывает onPageChange при клике на 'Вперед'", async () => {
    setup(1, 5);

    await user.click(screen.getByText("Вперед"));

    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it("вызывает onPageChange при клике на 'Назад'", async () => {
    setup(2, 5);

    await user.click(screen.getByText("Назад"));

    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });
});
