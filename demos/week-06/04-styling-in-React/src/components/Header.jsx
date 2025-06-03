import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header-heading">This is the header</h1>
        {/* we are styling with Tailwind! Tailwind has default sizes and colour palettes */}
        <p className="bg-sky-600 font-bold text-slate-700 p-4 text-2xl">
          This is a quirky subtitle
        </p>
      </header>
    </>
  );
}
