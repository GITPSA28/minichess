import { useQuery } from "@tanstack/react-query";
import { getPlayers } from "./chessApi";

export function usePlayers() {
  const {
    isLoading,
    error,
    data: players,
  } = useQuery({
    queryKey: ["players"],
    queryFn: getPlayers,
  });
  return { isLoading, players, error };
}
