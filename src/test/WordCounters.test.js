import React from 'react';
import renderer from 'react-test-renderer';
import WordCounter from '../components/WordCounter';

// Test matchSnapShot WordCounter component
test("test-changes-from-word-counter-component", () => {
    const component = renderer.create(
        <WordCounter 
        handleCircleColor={() => {}}
        handleCountWords={() => {}}
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
