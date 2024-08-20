import { closeMainWindow } from "@raycast/api";
import { runAppleScript } from "run-applescript";
import { BrightnessAction, makeScript } from "./script";

export default async () => {
  const action = BrightnessAction.Up;
  await runAppleScript(makeScript(action));
  await closeMainWindow();
};
