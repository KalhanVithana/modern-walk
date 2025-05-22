export default function Header() {
  console.log("Header SERVER");

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center px-4 py-3 border-b-4 border-b-dark-gray bg-light-gray">
      <h1 className="font-bold text-[32px] sm:text-[48px] md:text-[66px] text-center">
        Modern Work
      </h1>
    </header>
  );
}
