import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      landing page
      <Link href={"/workspaces"} className="text-blue-500">
        workspaces
      </Link>
      <Link href={"/sign-in"} className="text-blue-500">
        sign-in
      </Link>
      <Link href={"/sign-up"} className="text-blue-500">
        sign-up
      </Link>
    </main>
  );
}
