// import { render, screen } from "@testing-library/react";
// // داله تمثل المتصفح الوهمي
// //screen  هي الدوم اللي اترندر من خلالها بندور ع اي المنت اة تكست

// import { describe, it, expect } from "vitest";
// //describe  هي كل دوال التست اللي بنعملها لحاجه معينه
// //it هي الدوال اللي بنعملها
// // expect هوي مالذي نتوقعه من الرتيرن بتاع الدوال دي
// import Buto from "../shared/components/te";

// describe("First Test", () => {
//   it("should render correctly button", () => {
//     // render يعني انشاء الزرار ده في الدوم الوهمي
//     render(<Buto />);
//     // تحقق من ان الاسكرين تحتوى على هذا النص
//     expect(screen.getByText("test ")).toBeInTheDocument();
//   });
// });

import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ToggelLang from "@/features/global/ToggleLang";
import userEvent from "@testing-library/user-event";

const mockReplace = vi.fn();
vi.mock("next-intl", () => ({
  useLocale: () => "en",
}));

vi.mock("@/lib/i18n/routing", () => ({
  useRouter: () => ({ replace: mockReplace }),
  usePathname: () => "/",
}));

describe("test toggel lang & direction", () => {
  beforeEach(() => {
    mockReplace.mockClear();
  });

  it("shoud body have selector", () => {
    render(<ToggelLang />);

    const select = screen.getByRole("combobox"); // to get select elemnt
    const arOption = screen.getByRole("option", { name: "ar" }); // get option elemnt and name it is mean here text "ar"
    const enOption = screen.getByRole("option", { name: "en" });
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue("en");
    expect(arOption).toBeInTheDocument();
    expect(enOption).toBeInTheDocument();
  });

  it("shoud change changeLanguage if select lang", async () => {
    const user = userEvent.setup();
    render(<ToggelLang />);
    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "en");
    await waitFor(() => {
      expect(mockReplace).toHaveBeenLastCalledWith("/", { locale: "en" });
    });
  });
});
