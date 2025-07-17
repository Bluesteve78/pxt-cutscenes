//% color=#AA00FF icon="\uf03e" block="Cutscene"
namespace cutscene {

    //% block="type text $text with delay $delay ms" blockGap=8
    export function typeText(text: string, delay: number) {
        let current = ""
        for (let i = 0; i < text.length; i++) {
            current += text.charAt(i)
            game.showLongText(current, DialogLayout.Bottom)
            pause(delay)
        }
    }

    //% block="pan camera to x:$x y:$y over $duration ms" blockGap=8
    export function panCameraTo(x: number, y: number, duration: number) {
        const startX = scene.cameraProperty(CameraProperty.X)
        const startY = scene.cameraProperty(CameraProperty.Y)
        const steps = 30
        for (let i = 0; i <= steps; i++) {
            const t = i / steps
            scene.centerCameraAt(startX + (x - startX) * t, startY + (y - startY) * t)
            pause(duration / steps)
        }
    }

    //% block="freeze player controls $freeze" blockGap=8
    export function freezePlayer(freeze: boolean) {
        if (freeze) {
            controller.moveSprite(null)
        } else {
            // Restore control manually
        }
    }

    //% block="wait $ms ms" blockGap=8
    export function wait(ms: number) {
        pause(ms)
    }

    //% block="sprite $sprite say $text" blockGap=8
    export function spriteSay(sprite: Sprite, text: string) {
        sprite.say(text, 2000)
    }
}

