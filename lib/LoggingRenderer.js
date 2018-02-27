const Reconciler = require('react-reconciler');

const sideEffect = (...args) => console.log('[SiteEffect]', ...args);

const LoggingRenderer = Reconciler({
  getRootHostContext(rootContainerInstance) {
    console.log('getRootHostContext(rootContainerInstance)', rootContainerInstance);
    return {};
  },
  getChildHostContext(parentHostContext, type, instance) {
    console.log('getChildHostContext(parentHostContext, type, instance)', parentHostContext, type, instance);
    return {};
  },
  getPublicInstance(instance) {
    console.log('getPublicInstance(instance)', instance);
    return null;
  },
  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle,
  ) {
    console.log(
      'createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle)',
      type,
      props,
      rootContainerInstance,
      hostContext,
      '...', //internalInstanceHandle
    );
    return {};
  },
  appendInitialChild(parentInstance, child) {
    console.log('appendInitialChild(parentInstance, child)', parentInstance, child);
  },

  finalizeInitialChildren(parentInstance, type, props, rootContainerInstance, hostContext) {
    console.log(
      'finalizeInitialChildren(parentInstance, type, props, rootContainerInstance, hostContext)',
      parentInstance,
      type,
      props,
      rootContainerInstance,
      hostContext
    );
    if (typeof props.children === 'string') {
      sideEffect(type, props.children);
    }
    return false;
  },

  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext,
  ) {
    console.log(
      'prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, hostContext)',
      instance,
      type,
      oldProps,
      newProps,
      rootContainerInstance,
      hostContext,
    )
    return {};
  },

  shouldSetTextContent(type, props) {
    console.log('shouldSetTextContent(type, props)', type, props);
    return false;
  },
  shouldDeprioritizeSubtree(type, props) {
    console.log('shouldDeprioritizeSubtree(type, props)', type, props);
    return !!props.hidden;
  },
  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle,
  ) {
    console.log(
      'createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandl',
      text,
      rootContainerInstance,
      hostContext,
      '...' //internalInstanceHandle,
    );
  },

  useSyncScheduling: true,

  scheduleDeferredCallback(cb) {
    console.log('scheduleDeferredCallback');
  },
  cancelDeferredCallback() {
    console.log('cancelDeferredCallback');
  },

  prepareForCommit() {
    console.log('prepareForCommit');
  },
  resetAfterCommit() {
    console.log('resetAfterCommit');
  },

  now() { return Date.now() },

  mutation: {
    commitUpdate(instance, updatePayload, type, oldProps, newProps) {
      if (typeof newProps.children === 'string') {
        if (newProps.children !== oldProps.children) {
          sideEffect(type, newProps.children);
        }
      }
    },
    commitMount(instance, type, newProps) {},
    commitTextUpdate(textInstance, oldText, newText) {},
    resetTextContent(instance) {},
    appendChild(parentInstance, child) {},
    appendChildToContainer(parentInstance, child) {},
    insertBefore(parentInstance, child, beforeChild) {},
    insertInContainerBefore(container, child, beforeChild) {},
    removeChild(parentInstance, child) {},
    removeChildFromContainer(container, child) {},
  },
});

module.exports = LoggingRenderer;
