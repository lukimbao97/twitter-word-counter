import React from "react";
import renderer from "react-test-renderer";
import Tweet from "../components/Tweet";

// Test matchSnapShot Tweet Component
test("test-changes-from-Tweet-component", () => {
  const component = renderer.create(
    <Tweet
      avatar={"https://source.unsplash.com/random/50x50"}
      tweet={"Testing"}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
