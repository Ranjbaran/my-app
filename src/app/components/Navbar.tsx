import Link from "next/link";

function Navbrar() {
  return (
    <div>
      <ul className="flex justify-start items-center gap-3 bg-gray-200 p-5">
        <li>
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li>
          <Link href="/blogs">مقالات</Link>
        </li>
        <li>
          <Link href="/about">درباره ما</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbrar;
