# Custom Brightness Control Extension: Development Challenges and Attempted Solutions

## 1. Initial Approach: Using `brightness` Command

**Problem:** The `brightness` command-line tool was not available or not functioning as expected on the development machine.

**Attempted Solution:** We tried to use the `brightness` command to get and set brightness levels.

```applescript
set currentBrightness to do shell script "brightness -l | grep brightness | awk '{print $4}'"
```

**Outcome:** Failed due to the `brightness` command not being available or not returning expected results.

## 2. AppleScript Syntax Errors

**Problem:** Encountered syntax errors in AppleScript, particularly with string concatenation and conditional statements.

**Attempted Solution:** We tried different AppleScript syntaxes for string concatenation and conditionals.

```applescript
set log to log & "Attempt " & attempt & ": " & newBrightness
```

**Outcome:** Resulted in syntax errors, possibly due to differences in AppleScript versions or environment.

## 3. Precision in Brightness Adjustment

**Problem:** Difficulty in achieving precise brightness levels due to the discrete nature of brightness adjustment through key codes.

**Attempted Solution:** We tried to calculate the exact number of key presses needed to reach a specific brightness level.

```typescript
set totalSteps to round(abs(brightnessChange) * 100)
```

**Outcome:** This approach was not reliable due to variations in starting brightness and the non-linear nature of perceived brightness.

## 4. Reading Current Brightness Level

**Problem:** Inability to accurately read the current brightness level of the display.

**Attempted Solution:** We attempted to use system commands and AppleScript to read the current brightness.

```applescript
set currentBrightness to (do shell script "ioreg -c AppleBacklightDisplay | grep brightness | awk '{print $4}' | cut -d '=' -f2") as number
```

**Outcome:** This method was unreliable and sometimes returned unexpected values or errors.

## 5. Fine-grained Control Approach

**Problem:** Difficulty in setting an exact brightness level led to considering a fine-grained control approach.

**Attempted Solution:** We implemented "Fine Increase" and "Fine Decrease" commands to allow users to adjust brightness in small increments.

```typescript
case BrightnessAction.Increase:
  return `
    tell application "System Events"
      repeat 2 times
        key code 144
      end repeat
    end tell
    return "Brightness increased slightly"
  `;
```

**Outcome:** While functional, this approach deviated from the original goal of setting a specific brightness level and was not satisfactory.

## 6. Absolute vs. Relative Brightness Adjustment

**Problem:** Difficulty in achieving consistent results when setting brightness to a specific level from different starting points.

**Attempted Solution:** We tried to first reduce brightness to a minimum and then increase it to the desired level.

```applescript
-- First, decrease brightness to minimum
repeat 16 times
  key code 145
end repeat

-- Then, increase to desired level
set targetSteps to round(${customLevel} * 16 / 100)
repeat targetSteps times
  key code 144
  delay 0.05
end repeat
```

**Outcome:** While this approach provided more consistent results, it was still not perfectly accurate due to variations in display hardware and system behavior.

## Conclusion

The main challenges revolved around the lack of a reliable API for directly setting or reading brightness levels in macOS. The solutions we attempted were workarounds using key code simulation, which inherently lack precision. Future development might benefit from exploring lower-level system APIs or third-party libraries that can interact more directly with display brightness controls.