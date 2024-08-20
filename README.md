# Custom Brightness Control for Raycast

## Overview

This Raycast extension provides enhanced brightness control for macOS, allowing users to adjust screen brightness in larger increments than the default system controls.

## Features

1. **Brightness Up**: Increases screen brightness by approximately 25%.
2. **Brightness Down**: Decreases screen brightness by approximately 25%.

## Technical Details

### Implementation

- The extension uses AppleScript to simulate key presses for brightness adjustment.
- Each command (up/down) repeats the brightness change action 10 times, resulting in roughly a 25% change.
- The extension directly interfaces with macOS's brightness control, bypassing the need for additional permissions or system modifications.

### File Structure

- `src/up.ts`: Handles the brightness increase command.
- `src/down.ts`: Handles the brightness decrease command.
- `src/script.ts`: Contains the shared AppleScript generation logic.

### Key Components

1. **makeScript Function** (in `script.ts`):
   - Generates the AppleScript for brightness adjustment.
   - Uses key codes 144 (brightness up) and 145 (brightness down).

2. **Command Execution** (in `up.ts` and `down.ts`):
   - Runs the generated AppleScript.
   - Closes the Raycast window immediately after execution.

## Usage

1. Open Raycast.
2. Type "Brightness Up" or "Brightness Down" to access the commands.
3. Execute the desired command to adjust screen brightness.

## Development Notes

- The extension was developed iteratively, with several refinements to improve accuracy and user experience.
- Initial versions included brightness change calculations and user feedback, which were later removed for simplicity and reliability.
- The current version focuses on quick and effective brightness adjustments without additional feedback beyond the system's built-in brightness indicator.

## Future Enhancements

- Potential addition of custom brightness presets.
- Exploration of more precise brightness control methods.

## Troubleshooting

If the brightness change seems too drastic or not noticeable:
1. Adjust the number of repetitions in the `makeScript` function.
2. Test on different Mac models, as brightness behavior can vary.

## Contributors

- [Art Seabra/artseabra]

## License

[Specify your license here, e.g., MIT License]

