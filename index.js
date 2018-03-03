const LoggingRenderer = require('./lib/LoggingRenderer');

let root;
const ReactLogging = {
  render(element, callback) {
    if (!root) {
      const container = {};
      root = LoggingRenderer.createContainer(container);
    }
    LoggingRenderer.updateContainer(element, root, null, callback);
  },
  flushLogs() {
    LoggingRenderer.flush();
  }
};

module.exports = ReactLogging;
