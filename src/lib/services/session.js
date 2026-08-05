"use server";
import { cookies } from "next/headers";
const ADMIN_NAME = "Admin";
const ADMIN_PASSWORD = "Admin_Passowrd";

export async function createSession(username) {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_PASSWORD, "Admin", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // أسبوع
    path: "/",
  });
  cookieStore.set(ADMIN_NAME, username, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // أسبوع
    path: "/",
  });
}

export async function getUser() {
  const cookieStore = await cookies();
  const user = cookieStore.get(ADMIN_NAME);

  return user || "Admin";
}

export async function verifySession() {
  const cookieStore = await cookies();
  const sessionPass = cookieStore.get(ADMIN_PASSWORD)?.value;
  return sessionPass === "Admin";
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_NAME);
  cookieStore.delete(ADMIN_PASSWORD);
}
