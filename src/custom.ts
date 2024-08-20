import { closeMainWindow, showHUD } from "@raycast/api";
import { runAppleScript } from "run-applescript";
import { BrightnessAction, makeScript } from "./script";

export default async () => {
  try {
    const input = await runAppleScript(`
      text returned of (display dialog "Enter brightness level (0-100):" default answer "50")
    `);
    
    const brightnessLevel = parseInt(input, 10);
    
    if (isNaN(brightnessLevel) || brightnessLevel < 0 || brightnessLevel > 100) {
      throw new Error("Invalid input. Please enter a number between 0 and 100.");
    } else {
      console.log(`Setting brightness to ${brightnessLevel}%`);
      const script = makeScript(BrightnessAction.Custom, brightnessLevel);
      console.log("Executing AppleScript:", script);
      const result = await runAppleScript(script);
      console.log("AppleScript result:", result);
      await showHUD(`Brightness adjustment completed: ${result}`);
    }
  } catch (error) {
    console.error("Error in custom brightness command:", error);
    if (error instanceof Error) {
      await showHUD(`Failed to set brightness: ${error.message}`);
    } else {
      await showHUD("Failed to set brightness");
    }
  } finally {
    await closeMainWindow();
  }
};