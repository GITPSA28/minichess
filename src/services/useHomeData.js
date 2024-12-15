import { useChess } from "../services/useChess";
import { usePlayers } from "../services/usePlayers";
export function useHomeData() {
  const {
    players: unSortedPlayers,
    isLoading: isPlayersLoading,
    error: playersError,
  } = usePlayers();
  const { chess, isLoading: isChessLoading, error: chessError } = useChess();
  const players = unSortedPlayers?.sort((a, b) => a.id - b.id);
  const scores = players?.map((player) => {
    return chess?.reduce((total, current) => {
      let c = 0;
      if (current.result === "0.5") c = 0.5;
      if (current.result === "" + player.id) c = 1;
      return total + c;
    }, 0);
  });

  const nextMatch = chess
    ?.sort((a, b) => new Date(a.date) - new Date(b.date))
    .find((match) => match.status === "Incomplete");
  const isLoading = isPlayersLoading || isChessLoading;
  const error = chessError || playersError;
  return { isLoading, error, nextMatch, scores, players, chess };
}
