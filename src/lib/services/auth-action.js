"use server";
import { createSession } from "@/lib/services/session";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const logInAction = async (prevState, formData) => {
  const password = formData.get("password");
  const name = formData.get("username");
  const admin_password = process.env.ADMIN_PASSWORD || "123456";
  const admin_name = process.env.ADMIN_NAME || "Admin";

  if (!admin_password && !admin_name) {
    throw new Error("admin not found passowd || name");
  }
  if (password !== admin_password) {
    return { error: "passowrd is error" };
  }

  await createSession(name);
  revalidatePath("/", "layout");
  redirect("/ar/admin?logged=true");
};
