export type Game = {
  id: number
  players: Player[]
  activePlayer: number
  state: String
}
  
export type Player = {
  id: number
  name: String
  score: number
}

export type Query = {
  getAllGames: Game[];
}