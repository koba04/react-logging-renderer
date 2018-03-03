const util = require('util');
const Reconciler = require('react-reconciler');

const sideEffect = (...args) => console.log('[SiteEffect]', ...args);

const LoggingRenderer = Reconciler({
  getRootHostContext(rootContainerInstance) {
    appendLog(
      'getRootHostContext',
      {rootContainerInstance}
    );
    return {};
  },
  getChildHostContext(parentHostContext, type, instance) {
    appendLog(
      'getChildHostContext',
      {parentHostContext, type, instance}
    );
    return {};
  },
  getPublicInstance(instance) {
    appendLog(
      'getPublicInstance',
      {instance}
    );
    return null;
  },
  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle,
  ) {
    appendLog(
      'createInstance',
      {
        type,
        props,
        rootContainerInstance,
        hostContext,
        internalInstanceHandle: '...',
      },
    );
    return {};
  },
  appendInitialChild(parentInstance, child) {
    appendLog(
      'appendInitialChild',
      {
        parentInstance,
        child
      },
    );
  },

  finalizeInitialChildren(parentInstance, type, props, rootContainerInstance, hostContext) {
    appendLog(
      'finalizeInitialChildren',
      {
        parentInstance,
        type,
        props,
        rootContainerInstance,
        hostContext,
      },
    );
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
    appendLog(
      'prepareUpdate',
      {
        instance,
        type,
        oldProps,
        newProps,
        rootContainerInstance,
        hostContext,
      }
    )
    return {};
  },

  shouldSetTextContent(type, props) {
    appendLog(
      'shouldSetTextContent',
      {
        type,
        props,
      },
    );
    return false;
  },
  shouldDeprioritizeSubtree(type, props) {
    appendLog(
      'shouldDeprioritizeSubtree',
      {
        type,
        props,
      },
    );
    return !!props.hidden;
  },
  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle,
  ) {
    appendLog(
      'createTextInstance',
      {
        text,
        rootContainerInstance,
        hostContext,
        internalInstanceHandle: '...',
      }
    );
  },

  useSyncScheduling: true,

  scheduleDeferredCallback(cb, options) {
    appendLog(
      'scheduleDeferredCallback',
      {
        cb: '...',
        options,
      },
    );
  },
  cancelDeferredCallback(callbackId) {
    appendLog(
      'cancelDeferredCallback',
      {
        callbackId,
      }
    );
  },

  prepareForCommit(containerInfo) {
    appendLog(
      'prepareForCommit',
      {
        containerInfo,
      },
    );
  },
  resetAfterCommit(containerInfo) {
    appendLog(
      'resetAfterCommit',
      {
        containerInfo,
      },
    );
  },

  now() { return Date.now() },

  hydration: {
    canHydrateInstance(instance, type, props) {
      appendLog(
        'canHydrateInstance',
        {
          instance,
          type,
          props,
        }
      );
    },
    canHydrateTextInstance(instance, text) {
      appendLog(
        'canHydrateTextInstance',
        {
          instance,
          text,
        },
      );
    },
    getNextHydratableSibling(instance) {
      appendLog(
        'getNextHydratableSibling',
        {
          instance,
        },
      );
    },
    getFirstHydratableChild(parentInstance) {
      appendLog(
        'getFirstHydratableChild',
        {
          parentInstance,
        },
      );
    },
    hydrateInstance(instance, type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
      appendLog(
        'hydrateInstance',
        {
          instance,
          type,
          props,
          rootContainerInstance,
          hostContext,
          internalInstanceHandle: '...',
        },
      );
    },
    hydrateTextInstance(textInstance, text, internalInstanceHandle) {
      appendLog(
        'hydrateTextInstance',
        {
          textInstance,
          text,
          internalInstanceHandle: '...',
        },
      );
    },
    didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, text) {
      appendLog(
        'didNotMatchHydratedContainerTextInstance',
        {
          parentContainer,
          textInstance,
          text,
        },
      );
    },
    didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, text) {
      appendLog(
        'didNotMatchHydratedTextInstance',
        {
          parentType,
          parentProps,
          parentInstance,
          textInstance,
          text,
        },
      )
    },
    didNotHydrateContainerInstance(parentContainer, instance) {
      appendLog(
        'didNotHydrateContainerInstance',
        {
          parentContainer,
          instance,
        },
      );
    },
    didNotHydrateInstance(parentType, parentProps, parentInstance, instance) {
      appendLog(
        'didNotHydrateInstance',
        {
          parentType,
          parentProps,
          parentInstance,
          instance,
        }
      )
    },
    didNotFindHydratableContainerInstance(parentContainer, type, props) {
      appendLog(
        'didNotFindHydratableContainerInstance',
        {
          parentContainer,
          type,
          props,
        }
      );
    },
    didNotFindHydratableContainerTextInstance(parentContainer, text) {
      appendLog(
        'didNotFindHydratableContainerTextInstance',
        {
          parentContainer,
          text ,
        },
      );
    },
    didNotFindHydratableInstance(parentType, parentProps, parentInstance, type, props) {
      appendLog(
        'didNotFindHydratableInstance',
        {
          parentType,
          parentProps,
          parentInstance,
          type,
          props,
        },
      );
    },
    didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, text) {
      appendLog(
        'didNotFindHydratableTextInstance',
        {
          parentType,
          parentProps,
          parentInstance,
          text,
        }
      );
    },
  },

  mutation: {
    commitUpdate(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
      appendLog(
        'commitUpdate',
        {
          instance,
          updatePayload,
          type,
          oldProps,
          newProps,
          internalInstanceHandle: '...',
        },
      );
    },
    commitMount(instance, type, newProps, internalInstanceHandle) {
      appendLog(
        'commitMount',
        {
          instance,
          type,
          newProps,
          internalInstanceHandle: '...',
        },
      );
    },
    commitTextUpdate(textInstance, oldText, newText) {
      appendLog(
        'commitTextUpdate',
        {
          textInstance,
          oldText,
          newText,
        },
      );
    },
    resetTextContent(instance) {
      appendLog(
        'resetTextContent',
        {
          instance,
        },
      );
    },
    appendChild(parentInstance, child) {
      appendLog(
        'appendChild',
        {
          parentInstance,
          child,
        },
      );
    },
    appendChildToContainer(container, child) {
      appendLog(
        'appendChildToContainer',
        {
          container,
          child,
        }
      );
    },
    insertBefore(parentInstance, child, beforeChild) {
      appendLog(
        'insertBefore',
        {
          parentInstance,
          child,
          beforeChild,
        }
      );
    },
    insertInContainerBefore(container, child, beforeChild) {
      this.appendChild(
        'insertInContainerBefore',
        {
          container,
          child,
          beforeChild,
        },
      );
    },
    removeChild(parentInstance, child) {
      appendLog(
        'removeChild',
        {
          parentInstance,
          child,
        },
      );
    },
    removeChildFromContainer(container, child) {
      appendLog(
        'removeChildFromContainer',
        {
          container,
          child,
        },
      );
    },
  },

  persistence: {
    cloneInstance(
      instance, updatePayload, type, oldProps,
      newProps, internalInstanceHandle, keepChildren, recyclableInstance
    ) {
      appendLog(
        'cloneInstance',
        {
          instance,
          updatePayload,
          type,
          oldProps,
          newProps,
          internalInstanceHandle: '...',
          keepChildren,
          recyclableInstance,
        },
      );
    },
    createContainerChildSet(container) {
      appendLog(
        'createContainerChildSet',
        {
          container,
        },
      );
    },
    appendChildToContainerChildSet(childSet, child) {
      appendLog(
        'appendChildToContainerChildSet',
        {
          childSet,
          child,
        }
      );
    },
    finalizeContainerChildren(container, newChildren) {
      appendLog(
        'finalizeContainerChildren',
        {
          container,
          newChildren,
        },
      );
    },
    replaceContainerChildren(container, newChildren) {
      appendLog(
        'replaceContainerChildren',
        {
          container,
          newChildren,
        },
      );
    },
  },
});

const logs = [];
const appendLog = (type, params = {}) => logs.push({type, params});

LoggingRenderer.flush = () => {
  console.log('------ Start Flush -------')
  logs.forEach(log => {
    console.log(`[${log.type}]`);
    Object.keys(log).forEach((key) => {
      console.log(`    ${key}:${util.inspect(log[key], {depth: 10})}`);
    });
  });
  console.log('------ End Flush -------')
  logs.length = 0;
};


module.exports = LoggingRenderer;
