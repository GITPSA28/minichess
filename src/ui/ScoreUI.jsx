function ScoreUI({ score1, score2, date, type }) {
  if (type === "secondary")
    return (
      <>
        <div className="space-y-3">
          <div className="flex items-center gap-8 mt-8 mb-5">
            <p className="p-3 text-xl w-14  border-b-2 border-black/30 bg-chessbg-800 rounded-sm font-bold text-neutral-50">
              {score1}
            </p>
            <p className="text-stone-50 text-xl font-semibold  uppercase">
              - score -
            </p>
            <p className="p-3 w-14 text-xl border-b-2 border-black/30 bg-chessbg-800 rounded-sm font-bold text-neutral-50">
              {score2}
            </p>
          </div>
        </div>

        <div className="space-y-1 bg-chessbg-800 rounded px-2 py-2 ">
          <p className="text-stone-50 text-lg font-normal uppercase ">
            Next match
          </p>
          <p className="text-stone-50 text-xl font-semibold">{date}</p>
        </div>
      </>
    );

  return (
    <>
      <div className="space-y-3">
        <p className="text-stone-50 text-xl font-semibold border-b-2 border-white/30">
          score
        </p>
        <div className="flex gap-8">
          <p className="p-3 text-xl w-14  border-b-2 border-black/30 bg-chessbg-800 rounded-sm font-bold text-neutral-50">
            {score1}
          </p>
          <p className="p-3 w-14 text-xl  border-b-2 border-black/30 bg-chessbg-800 rounded-sm font-bold text-neutral-50">
            {score2}
          </p>
        </div>
      </div>

      <div className="space-y-1 bg-chessbg-800 rounded px-2 py-1 border-b-2 border-black/30">
        <p className="text-stone-50 text-base font-normal ">Next match</p>
        <p className="text-stone-50 text-xl font-semibold">{date}</p>
      </div>
    </>
  );
}

export default ScoreUI;
