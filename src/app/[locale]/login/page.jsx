"use client";

import { useActionState, useEffect } from "react";
import { logInAction } from "@/lib/services/auth-action";
import { toast } from "sonner";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button"; // لو المكون موجود عندك

export default function LogIn() {
  const [state, formAction, isPending] = useActionState(logInAction, null);
  useEffect(() => {
    if (!state) return;

    if (state.error) {
      toast.error(state.error); // إظهار الخطأ في Toast أيضاً لو تحب
    }
  }, [state]);
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">
      <form
        action={formAction}
        className="w-full max-w-sm rounded-xl border bg-card p-6 shadow-sm space-y-6"
      >
        <div className="space-y-1 text-center">
          <h2 className="text-xl font-bold tracking-tight">تسجيل الدخول</h2>
          <p className="text-sm text-muted-foreground">
            أدخل بياناتك للوصول إلى لوحة التحكم
          </p>
        </div>

        <FieldSet className="w-full">
          <FieldGroup className="space-y-4">
            <Field className="space-y-1.5">
              <FieldLabel htmlFor="username">اسم المستخدم</FieldLabel>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="اسم المستخدم"
                required
              />
              <FieldDescription>
                اختر اسم المستخدم الخاص بحسابك.
              </FieldDescription>
            </Field>

            <Field className="space-y-1.5">
              <FieldLabel htmlFor="password">كلمة المرور</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
              />
              <FieldDescription>
                يجب أن تحتوي على 8 أحرف على الأقل.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>

        {/* عرض رسالة الخطأ بشكل بارز وأنيق */}
        {state?.error && (
          <div className="rounded-lg bg-destructive/15 p-3 text-sm text-destructive font-medium text-center">
            {state.error}
          </div>
        )}

        <Button
          type="submit"
          disabled={isPending}
          className="w-full font-semibold transition-all"
        >
          {isPending ? "جاري التحقق..." : "دخول"}
        </Button>
      </form>
    </div>
  );
}
