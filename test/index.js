const React = require('react');
const ReactLogging = require('../index');

ReactLogging.render(<div>foo</div>);
ReactLogging.flushLogs();
ReactLogging.render(<div>bar</div>);
ReactLogging.flushLogs();
ReactLogging.render(<p>bar</p>);
ReactLogging.flushLogs();

