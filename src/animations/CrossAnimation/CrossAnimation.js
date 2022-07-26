import React, {useEffect, useRef} from 'react';



const Test = () => {
    const prop = {
        block: 20,
        color: ['#1E4FCD', '#fff'] // changing may break the text in the center
        // changing the first value is easier
    }
    const canvass = useRef()
    let ctx;
    const toRadian = Math.PI / 180
    let width, height
    let tick = 0
    let waves = []
    let pluses = []
    prop.square = prop.block * 3
    prop.lengthOffset = -prop.block * 1.5
    prop.widthOffset = -prop.block / 2



    useEffect(() => {
        class Plus {

            constructor(x, y, type) {
                this.x = x
                this.y = y

                // either 0 or 1 (also the color index)
                this.type = type

                this.rotating = this.angle = 0

            }

            drawPlus() {

                ctx.save()
                ctx.translate(this.x, this.y)

                // rotate
                if(this.rotating) {

                    // rotate the canvas in the respective direction and reset at 90 degress
                    if(Math.abs(this.angle -= (1 - this.type * 2)) === 90) this.angle = this.rotating = 0
                    ctx.rotate( this.angle % 360 * toRadian )

                }

                // draw cross
                ctx.fillStyle = prop.color[this.type]
                ctx.fillRect(prop.widthOffset, prop.lengthOffset, prop.block, prop.square)
                ctx.fillRect(prop.lengthOffset, prop.widthOffset, prop.square, prop.block)

                ctx.restore()

            }

            drawSquare() {

                ctx.save()
                ctx.translate(this.x, this.y)

                ctx.fillStyle = prop.color[(!this.type)*1] // draw the inverse color
                ctx.fillRect(prop.lengthOffset, prop.lengthOffset, prop.square, prop.square)

                ctx.restore()

            }

        }
        const canvas = canvass.current
        const ctx = canvas.getContext('2d')
        window.addEventListener('resize', (function _self(e) {
            width = canvas.width
            height = canvas.height

            pluses.length = waves.length = 0

            for(let x = -2, w = width / prop.square; x < w; x++) {

                // create starting points for the waves (on the first row)
                if(x % 6 === 0) waves.push( pluses.length - 2)
                else if(x % 3 === 0) waves.push( pluses.length - 1)

                for(let y = 0, h = height / prop.square + 2; y < h; y++) {
                    let plusX = x * prop.square + y * prop.block + (x / 3 % 10 | 0) * prop.block
                    let plusY = y * prop.square - x % 3 * prop.block
                    pluses.push( // push one of either color
                        new Plus(plusX, plusY, 0),
                        new Plus(plusX - prop.block * 2, plusY - prop.block, 1)
                    )
                }
            }

            return _self
        })())

        ;(function update() {
            requestAnimationFrame(update)

            if(++tick % 10 === 0) // speed of the waves
                for(let i = 0; i < waves.length; i++) {
                    if((waves[i] += 2) >= pluses.length) waves[i] = (waves[i] & 1) * 1
                    else pluses[waves[i]].rotating = 1
                }

            // draw the not moving ones first so we can "overdraw" them
            for(let i = 0, plus; plus = pluses[i]; i++) if(!plus.rotating) plus.drawPlus(); else plus.drawSquare()
            for(let i = 0, plus; plus = pluses[i]; i++) if(plus.rotating) plus.drawPlus()

        }())
    }, [])

    return (
        <div style={{width: '100%', height: '100%'}}>
            <canvas ref={canvass} style={{width: '100%', height: '100%'}}/>
        </div>
    );
};

export default Test;








