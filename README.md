# Custom Brightness Control for Raycast

## Overview

This Raycast extension provides enhanced brightness control for macOS, allowing users to adjust screen brightness in larger increments and set custom brightness levels.

## Features

1. **Brightness Up**: Increases screen brightness by approximately 25%.
2. **Brightness Down**: Decreases screen brightness by approximately 25%.
3. **Set Custom Brightness**: Allows setting a specific brightness level (0-100%).

## Usage

1. Open Raycast.
2. Type "Brightness Up" or "Brightness Down" to access the quick adjustment commands.
3. Type "Set Custom Brightness" to access the custom brightness setting command.
4. Enter a value between 0 and 100 to set the desired brightness level.

## Technical Details

- The extension uses AppleScript to simulate key presses for brightness adjustment.
- Custom brightness setting first reduces brightness to minimum, then increases to the desired level for more accurate results.
- The extension directly interfaces with macOS's brightness control, bypassing the need for additional permissions or system modifications.

## Known Limitations

- The custom brightness setting may not always be 100% accurate due to the method used for adjustment.
- Rapid consecutive adjustments may sometimes lead to unexpected results.

## Troubleshooting

If the brightness change seems too drastic or not noticeable:
1. Try adjusting the number of repetitions in the `makeScript` function in `src/script.ts`.
2. Ensure you're running the latest version of the extension.
3. Test on different Mac models, as brightness behavior can vary.

## Development

To contribute to this project:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Make your changes.
4. Build the extension with `npm run build`.
5. Test your changes with `npm run dev`.

## Contributors
- [Cali Castle/CaliCastle]
- [Art Seabra/artseabra]

## License

[Specify your license here, e.g., MIT License]
