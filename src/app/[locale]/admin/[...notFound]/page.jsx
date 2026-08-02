import { notFound } from "next/navigation";

export default function CatchAllNotFound() {
  notFound(); // ده بيجبر Next.js إنه يعرض not-found.jsx فوراً!
}
