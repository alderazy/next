"use server";
import { deleteSession } from "./session";
import { redirect } from "next/navigation";

export const LogoutAction = async () => {
  await deleteSession();
  redirect("/ar/login");
};
