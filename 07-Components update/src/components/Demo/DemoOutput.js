import { memo } from "react";
import MyParagraph from "./MyParagraph";
const DemoOutput = (props) => {
  console.log("Demo", props.show);
  return <MyParagraph>{props.show ? "New Paragraph!" : ""}</MyParagraph>;
};

export default memo(DemoOutput);
