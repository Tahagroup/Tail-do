import GitHubIcon from "@mui/icons-material/GitHub";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import JavaScriptIcon from "./utilities/JavaScriptIcon";
import TypeScriptIcon from "./utilities/TypeScriptIcon";

function FAB() {
  function openInNewTab(url: string): void {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <Fab
      text="Github"
      mainButtonStyles={{ backgroundColor: "#000" }}
      //   actionButtonStyles={actionButtonStyles}
      style={{ bottom: 12, right: 12 }}
      icon={<GitHubIcon fontSize="large" />} // Main button component
      event={"click"} // default:'hover' or 'click'
      alwaysShowTitle={false} // to always show hints beside icons
      //   onClick={} // someFunction For The Main Button in addition to show/hide options
    >
      {/* The Action components are the "buttons" that appear when the Fab is open.
        You can use the out-of-the-box Action component or you can use a custom
        component of any type and style. */}
      <Action
        text="Implemention in JavaScript"
        onClick={() => openInNewTab("https://github.com/Tahagroup/Tail-do")}
        children={<JavaScriptIcon />}
        style={{ backgroundColor: "#f0db4f" }}
      />
      <Action
        text="Implemention in TypeScript"
        onClick={() =>
          openInNewTab("https://github.com/Tahagroup/Tail-do/tree/typescript")
        }
        children={<TypeScriptIcon />}
        style={{ backgroundColor: "#007acc" }}
      />
    </Fab>
  );
}

export default FAB;
