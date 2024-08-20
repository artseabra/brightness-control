export enum BrightnessAction {
  Up,
  Down,
  Custom,
}

export const makeScript = (action: BrightnessAction, customLevel?: number) => {
  switch (action) {
    case BrightnessAction.Up:
      return `
        tell application "System Events"
          repeat 10 times
            key code 144
          end repeat
        end tell
      `;
    case BrightnessAction.Down:
      return `
        tell application "System Events"
          repeat 10 times
            key code 145
          end repeat
        end tell
      `;
    case BrightnessAction.Custom:
      if (customLevel === undefined || customLevel < 0 || customLevel > 100) {
        throw new Error("Invalid custom brightness level");
      }
      return `
        tell application "System Events"
          -- First, decrease brightness to minimum
          repeat 20 times
            key code 145
          end repeat
          
          -- Then, increase to desired level
          set targetSteps to round(${customLevel} / 5)
          repeat targetSteps times
            key code 144
            delay 0.1
          end repeat
        end tell
        return "Brightness adjusted to approximately ${customLevel}%"
      `;
    default:
      throw new Error("Invalid brightness action");
  }
};