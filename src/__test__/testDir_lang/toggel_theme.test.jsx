import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { ModeToggle } from "@/providers/theme-toogle";

describe("toggel_theme test btns", () => {
  it("check button theme", async () => {
    const user = userEvent.setup();
    render(<ModeToggle />);
    const btn = screen.getByRole("button", { name: /Toggle theme/i });
    expect(btn).toBeInTheDocument();
    await user.click(btn);
    expect(screen.getByRole("menuitem", { name: /Light/i }));
    expect(screen.getByRole("menuitem", { name: /Dark/i }));
    expect(screen.getByRole("menuitem", { name: /System/i }));
  });
});

describe("test html class theme", () => {
  const fun = async (usre, _name) => {
    const btn = screen.getByRole("button", { name: /Toggle theme/i });
    await usre.click(btn);
    const light = screen.getByRole("menuitem", {
      name: new RegExp(_name, "i"),
    });
    await usre.click(light);
    expect(document.documentElement.classList.contains(_name));
  };

  it("change theme by btn", async () => {
    const usre = userEvent.setup();
    render(<ModeToggle />);
    await fun(usre, "light");
  });
  it("change theme by btn", async () => {
    const usre = userEvent.setup();
    render(<ModeToggle />);
    await fun(usre, "dark");
  });
});
