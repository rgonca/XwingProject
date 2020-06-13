//------PLAYER CHA-------
class Player {

    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = this.canvasSize.w / 2 - 50
        this.posY = this.canvasSize.h - 150

        this.playerW = 100
        this.playerH = 100

        this.image = new Image()
        this.image.src = './img/pngwave.png'

        this.vel = 20


        this.keys = {
            LEFT: 37,
            RIGHT: 39,
            // UP: 38,
            // DOWN: 40,
            SPACE: 32,
            // ENTER: 13,
        }

        this.bullets = []

    }

    draw() {
        this.setEventListeners()

        this.bullets.forEach(elm => elm.draw())

        // this.clearBullets()

        this.ctx.drawImage(this.image, this.posX, this.posY, this.playerW, this.playerH)

        this.move()

    }

    move(dir) {
        switch (dir) {
            case 'left':
                if (this.posX <= 30) {
                    this.posX == 30
                } else {
                    this.posX -= this.vel
                }
                break;
            case 'right':
                if (this.posX + 100 >= this.canvasSize.w - 30) {
                    this.posX == this.canvasSize.w - 30
                } else {
                    this.posX += this.vel
                }
        }


    }
    shoot() {
        this.bullets.push(new Bullets(this.ctx, this.posX, this.posY, this.posX0, this.playerW, this.playerH))
        console.log('traza', 'bullets', this.bullets)
    }
    clearBullets() {
        this.bullets = this.bullets.filter(elm => elm.posY >= this.canvasSize.h)
        console.log('traza', 'filter', this.bullets)
    }

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === this.keys.LEFT && this.move('left')
            e.keyCode === this.keys.RIGHT && this.move('right')
            e.keyCode === this.keys.SPACE && this.shoot('shoot')

        }
    }


}