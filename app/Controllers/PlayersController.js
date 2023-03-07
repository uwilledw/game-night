import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";



export class PlayersController {


    constructor() {
        console.log('players controller loaded');
        appState.players.forEach(p => p.check())
        this.drawPlayers()

    }


    drawPlayers() {
        let players = appState.players
        let template = ''
        players.forEach(player => template += player.PlayerTemplate)
        document.getElementById('players').innerHTML = template
    }

    up(name) {
        playersService.up(name)
        console.log('go up');
        this.drawPlayers()
    }

    down(name) {
        playersService.down(name)
        console.log('go down')
        this.drawPlayers()
    }

}