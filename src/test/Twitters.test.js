import React from "react";
import renderer from "react-test-renderer";
import TweetInput, {
  handleCircleColor,
  handleCountWords,
} from "../components/Twitters";

// Test handleCircleColor function
test("test-handle-color-yellow", () => {
  const handleCircleColorResult = handleCircleColor(49);

  expect(handleCircleColorResult).toBe("-yellow");
});

test("test-handle-color-red", () => {
  const handleCircleColorResult = handleCircleColor(60);

  expect(handleCircleColorResult).toBe("-red");
});

test("test-handle-color", () => {
  const handleCircleColorResult = handleCircleColor(10);

  expect(handleCircleColorResult).toBe("");
});

// Test handleCountWords function
test("test-count-words-red", () => {
  const handleCountWordsResult = handleCountWords(65);

  expect(handleCountWordsResult).toBe(-15);
});

test("test-count-words-yellow", () => {
  const handleCountWordsResult = handleCountWords(45);

  expect(handleCountWordsResult).toBe(5);
});

test("test-count-words-normal", () => {
  const handleCountWordsResult = handleCountWords(20);

  expect(handleCountWordsResult).toBe(30);
});

//Test matchSnapShot for Twitters component
test("test-changes-from-Twitters-component", () => {
  const component = renderer.create(<TweetInput />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
