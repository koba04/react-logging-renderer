// @flow
const util = require('util');
const Reconciler = require('react-reconciler');

type HostContext = {
  type: 'HostContext',
};

type ContainerInstance = {
  type: 'ContainerInstance',
};

type PublicInstance = Instance | TextInstance;

type Instance = {
  type: 'string',
  props: {},
};

type TextInstance = string;

type Props = {
  hidden: boolean,
  children?: Instance | TextInstance,
};

type PreparedUpdate = {};

opaque type Type: string = string;

type OpaqueHandler = {};

const LoggingRenderer = Reconciler({
  getRootHostContext(rootContainerInstance: ContainerInstance): HostContext {
    appendLog(
      'getRootHostContext',
      {rootContainerInstance}
    );
    return {
      type: 'HostContext'
    };
  },
  getChildHostContext(parentHostContext: HostContext, type: Type, instance: ContainerInstance): HostContext {
    appendLog(
      'getChildHostContext',
      {parentHostContext, type, instance}
    );
    return {
      type: 'HostContext'
    };
  },
  getPublicInstance(instance: Instance | TextInstance): PublicInstance {
    appendLog(
      'getPublicInstance',
      {instance}
    );
    return instance;
  },
  createInstance(
    type: Type,
    props: Props,
    rootContainerInstance: ContainerInstance,
    hostContext: HostContext,
    internalInstanceHandle: OpaqueHandler,
  ): Instance {
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
    return {
      type,
      props,
    };
  },
  appendInitialChild(parentInstance: Instance, child: Instance | TextInstance): void {
    appendLog(
      'appendInitialChild',
      {
        parentInstance,
        child
      },
    );
  },

  finalizeInitialChildren(
    parentInstance: Instance,
    type: Type,
    props: Props,
    rootContainerInstance: ContainerInstance,
    hostContext: HostContext): boolean {
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
    instance: Instance,
    type: Type,
    oldProps: Props,
    newProps: Props,
    rootContainerInstance: ContainerInstance,
    hostContext: HostContext,
  ): PreparedUpdate {
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

  shouldSetTextContent(type: Type, props: Props): boolean {
    appendLog(
      'shouldSetTextContent',
      {
        type,
        props,
      },
    );
    return false;
  },
  shouldDeprioritizeSubtree(type: Type, props: Props): boolean {
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
    text: string,
    rootContainerInstance: ContainerInstance,
    hostContext: HostContext,
    internalInstanceHandle: OpaqueHandler,
  ): TextInstance {
    appendLog(
      'createTextInstance',
      {
        text,
        rootContainerInstance,
        hostContext,
        internalInstanceHandle: '...',
      }
    );
    return text;
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
    setTimeout(cb, 10)
  },
  cancelDeferredCallback(callbackId) {
    appendLog(
      'cancelDeferredCallback',
      {
        callbackId,
      }
    );
    clearTimeout(callbackId);
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
      instance.type = type;
      instance.props = newProps;
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
      container.children = child;
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
      appendLog(
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
