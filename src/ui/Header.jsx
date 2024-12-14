function Header() {
  return (
    <header className=" flex w-full items-center justify-center gap-2 bg-chessbg-800 text-zinc-50 p-3 border-b-2 border-black/30">
      <img
        className="w-4 sm:w-6 h-fit"
        src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpkXK09k.png"
        alt="chess logo"
      />

      <div className="text-center">
        <h1 className="text-xl font-bold">Mini Chess Championship</h1>
        <p className="text-xs font-normal uppercase tracking-widest ">
          The ultimate battle
        </p>
      </div>
    </header>
  );
}

export default Header;
