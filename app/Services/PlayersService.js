import { appState } from "../AppState.js";


class PlayersService {
    up(name) {
        let player = appState.players.find(p => p.name == name)
        player.score++
    }

    down(name) {
        let player = appState.players.find(p => p.name == name)
        player.score--
    }
}


export const playersService = new PlayersService()