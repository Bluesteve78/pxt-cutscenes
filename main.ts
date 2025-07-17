// Cutscene namespace
namespace cutscene {
    // Say text with typing effect
    // duration: milliseconds for each character
    export function typeText(text: string, duration: number): void {}

    // Move camera to location over time
    export function panCameraTo(x: number, y: number, duration: number): void {}

    // Focus camera on a sprite
    export function focusOn(sprite: Sprite, duration: number): void {}

    // Freeze/unfreeze all player controls
    export function freezePlayer(freeze: boolean): void {}

    // Wait/pause cutscene
    export function wait(ms: number): void {}

    // Run action (e.g., make a sprite talk)
    export function spriteSay(sprite: Sprite, text: string): void {}

    // Play music or sound
    export function playSound(name: string): void {}

    // Run multiple cutscene steps in order
    export function runSequence(steps: () => void[]): void {}
}
