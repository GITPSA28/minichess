function ResultRow({ players, colors, result, link }) {
  return (
    <tr className="text-center">
      <td colSpan={2} className="hover:bg-black/10">
        <a
          href={link ? link : undefined}
          target="_blank"
          className="items-center py-2 grid grid-cols-[1fr_2rem_4rem_2rem_1fr]"
        >
          <p>{players[0].name}</p>
          <div className="flex justify-center">
            <div
              className={`rounded-sm w-3 h-3  ${
                colors[0] === "white" ? "bg-neutral-50" : "bg-white/10"
              }`}
            ></div>
          </div>
          <div>
            <span
              className={
                result === "0.5"
                  ? ""
                  : +result === players[0].id
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {+result === players[0].id
                ? "1"
                : +result === players[1].id
                ? "0"
                : result === "0.5"
                ? "½"
                : ""}
            </span>
            <span> - </span>
            <span
              className={
                result === "0.5"
                  ? ""
                  : +result === players[1].id
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {+result === players[1].id
                ? "1"
                : +result === players[0].id
                ? "0"
                : result === "0.5"
                ? "½"
                : ""}
            </span>
          </div>
          <div className="flex justify-center">
            <div
              className={`rounded-sm w-3 h-3  ${
                colors[1] === "white" ? "bg-neutral-50" : "bg-white/10"
              }`}
            ></div>
          </div>
          <p>{players[1].name}</p>
        </a>
      </td>
    </tr>
  );
}

export default ResultRow;
