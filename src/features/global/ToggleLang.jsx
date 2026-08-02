"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/routing";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/shared/components/ui/native-select";

export default function ToggelLang() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <NativeSelect value={locale} onChange={changeLanguage} disabled={isPending}>
      <NativeSelectOption value="ar">ar</NativeSelectOption>
      <NativeSelectOption value="en">en</NativeSelectOption>
    </NativeSelect>
  );
}
