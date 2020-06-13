let fuCkingBullet = 1
class Bullets {
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx

        this.posX = playerPosX + playerWidth / 2 - 10
        this.posY = playerPosY

        // this.playerPosX0 = playerPosX0
        // this.playerPosY0 = playerPosY0

        this.playerWidth = playerWidth
        this.playerHeight = playerHeight

        this.width = 20
        this.height = 30

        this.vel = 6

        this.image = new Image()
        this.image.src = "./img/bullet/laser-sprite-png-6-transparent.png"

        this.fuCkingBullet = fuCkingBullet++

    }

    draw() {
        this.ctx.drawImage(this.image, this.posX + 25, this.posY, this.width, this.height)
        this.ctx.drawImage(this.image, this.posX - 25, this.posY, this.width, this.height)
        console.log('traza', 'bala', this)
        this.move()
    }

    move() {
        this.posY -= this.vel
    }

}