function PlayerCard({ name, photoUrl, theme }) {
  return (
    <div
      className={`rounded-md p-3 w-fit border-b-4 border-black/30 ${
        theme === "black" ? "bg-chessbg-800" : "bg-neutral-50"
      }`}
    >
      <img
        className="sm:w-32 w-24 rounded-md"
        src={photoUrl}
        alt="profile picture"
      />
      <div className="flex gap-2 items-center justify-center text-center pt-3">
        <img
          className="w-6 rounded-sm"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"
          alt=""
        />
        <p
          className={`text-center tracking-wider font-bold ${
            theme === "black" ? "text-neutral-50" : ""
          }`}
        >
          {name}
        </p>
      </div>
    </div>
  );
}

export default PlayerCard;
