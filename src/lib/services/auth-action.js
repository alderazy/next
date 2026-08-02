"use server";
import { createSession } from "@/lib/services/session";
import { redirect } from "next/navigation";

export const logInAction = async (prevState, formData) => {
  const password = formData.get("password");
  const admin_password = process.env.ADMIN_PASSWORD || "123456";

  if (!admin_password) {
    throw new Error("admin not found passowd");
  }
  if (password !== admin_password) {
    return { error: "passowrd is error" };
  }

  await createSession();
  redirect("/ar/admin?logged=true");
};
