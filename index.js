const LoggingRenderer = require('./lib/LoggingRenderer');

const rootMap = new WeakMap();

const getTypeName = (type) => typeof type === 'function' ? type.name : type;

const toTree = instance => {
  if (typeof instance === 'string') return instance;
  const props = instance.props;
  const children = props.children;
  return {
    type: getTypeName(instance.type),
    props: Object.assign(
      {},
      props,
      typeof children !== 'undefined' ?
      {
        children: Array.isArray(children) ? children.map(child => toTree(child)) : toTree(children)
      } :
      null
    )
  }
};

const ReactLogging = {
  render(element, container, callback) {
    let root = container ? rootMap.get(container) : null;
    if (!root) {
      let newContainer = {}
      root = LoggingRenderer.createContainer(newContainer);
      rootMap.set(newContainer, root);
    }
    LoggingRenderer.updateContainer(element, root, null, callback);
    return {
      toTree: () => toTree(root.containerInfo.children)
    }
  },
  flushLogs() {
    LoggingRenderer.flush();
  }
};

module.exports = ReactLogging;
