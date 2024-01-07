import Link from "next/link";

export default function Header() {
  return (
    <header className=" px-3 py-3 bg-white shadow ">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="font-semibold text-2xl uppercase">Beauty</div>
        <nav>
          <ul className="flex items-center gap-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
