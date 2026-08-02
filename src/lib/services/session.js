"use server";
import { cookies } from "next/headers";
const COOKIE_NAME = "alderazy";

export async function createSession() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, "true", {
    httpOnly: true,
    secure: (process.env.NODE_ENV = "production"),
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // أسبوع
    path: "/",
  });
}

export async function verifySession() {
  const cookieStore = await cookies();
  const session = cookieStore.get(COOKIE_NAME)?.value;

  return session === "true";
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
