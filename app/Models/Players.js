

export class Player {
    // name
    // level
    // color

    constructor(name, score, color) {
        this.name = name
        this.score = score
        this.color = color
    }


    check() {
        console.log(`Hi my name is ${this.name}, my score ${this.score} and ${this.color}`)
    }


    get PlayerTemplate() {
        return `
        <div class="col-3 p-2">
          <div class="bg-danger p-3 text-center text-light rounded">
            <h3>${this.name} | ${this.color}</h3>
            <h5>Score | ${this.score}</h5>
            <button onclick="app.playersController.up('${this.name}')" class="btn btn-light">UP</button>
            <button onclick="app.playersController.down('${this.name}')" class="btn btn-light">DOWN</button>
          </div>
        </div>
        `
    }
}