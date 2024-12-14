import supabase from "./supabase";

export async function getChess() {
  let { data, error } = await supabase.from("chess").select("*");

  if (error) {
    console.log(error);
    throw new Error("Chess data could not be loaded");
  }
  return data;
}
export async function getPlayers() {
  let { data, error } = await supabase.from("chess_players").select("*");

  if (error) {
    console.log(error);
    throw new Error("Players data could not be loaded");
  }
  return data;
}
