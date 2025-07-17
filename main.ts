namespace cutscene {
    let playerWasFrozen = false

    export function typeText(text: string, delay: number) {
        let current = ""
        for (let i = 0; i < text.length; i++) {
            current += text.charAt(i)
            game.showLongText(current, DialogLayout.Bottom)
            pause(delay)
        }
    }

    export function panCameraTo(x: number, y: number, duration: number) {
        const startX = scene.cameraProperty(CameraProperty.X)
        const startY = scene.cameraProperty(CameraProperty.Y)
        const steps = 30
        for (let i = 0; i <= steps; i++) {
            const t = i / steps
            scene.centerCameraAt(
                startX + (x - startX) * t,
                startY + (y - startY) * t
            )
            pause(duration / steps)
        }
    }

    export function focusOn(sprite: Sprite, duration: number) {
        const steps = 30
        for (let i = 0; i <= steps; i++) {
            scene.centerCameraAt(sprite.x, sprite.y)
            pause(duration / steps)
        }
    }

    export function freezePlayer(freeze: boolean) {
        playerWasFrozen = freeze
        controller.moveSprite(null)
    }

    export function wait(ms: number) {
        pause(ms)
    }

    export function spriteSay(sprite: Sprite, text: string) {
        sprite.say(text, 2000)
    }

    export function playSound(name: string) {
        // Replace this with a real sound later
        music.playTone(Note.C, 500)
    }

    export function runSequence(steps: () => void[]): void {
        for (let step of steps()) {
            step
        }
    }
}
