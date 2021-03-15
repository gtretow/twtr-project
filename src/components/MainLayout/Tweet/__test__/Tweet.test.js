import React from "react";
import Tweet from "../Tweet";
import ReactDOM from "react-dom";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Tweet />, div);
});

/* describe("render all buttons", () => {
  const { getByTestId } = render(<Tweet />);

  const commentBtn = getByTestId("comment", { exact: false });

  expect(commentBtn).toBeInTheDocument();
});
 */
