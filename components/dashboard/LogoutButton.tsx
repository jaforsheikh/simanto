"use client";

import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

export default function LogoutButton() {
  const router = useRouter();

  function handleLogout() {
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 font-bold text-red-500 transition hover:bg-red-50"
    >
      <FiLogOut />
      Logout
    </button>
  );
}