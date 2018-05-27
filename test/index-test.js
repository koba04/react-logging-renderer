const assert = require('assert');
const React = require('react');
const ReactLogging = require('../index');

describe('ReactLogging', () => {
  it('should return the json', () => {
    const container = {};
    let instance = ReactLogging.render(<div id="foo" />, container);
    assert.deepStrictEqual(
      instance.toTree(),
      {
        type: 'div',
        props: {
          id: 'foo'
        }
      }
    );
    instance = ReactLogging.render(<div id="foo">hoge</div>, container);
    assert.deepStrictEqual(
      instance.toTree(),
      {
        type: 'div',
        props: {
          id: 'foo',
          children: 'hoge'
        }
      }
    );
  });
  it('should return a type string even if the component is a CompositeComponent', () => {
    const Button = props => <button>{props.text}</button>;
    instance = ReactLogging.render(<div><Button text="click" /></div>);
    ReactLogging.flushLogs();
    assert.deepStrictEqual(
      instance.toTree(),
      {
        type: 'div',
        props: {
          children: {
            type: 'Button',
            props: {
              text: 'click',
            }
          }
        }
      }
    );
  });
});
