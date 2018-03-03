const React = require('react');
const ReactLogging = require('../index');

ReactLogging.render(<div>foo</div>);
ReactLogging.flushLogs();
ReactLogging.render(<div>bar</div>);
ReactLogging.flushLogs();
ReactLogging.render(<p>bar</p>);
ReactLogging.flushLogs();

/*
------ Start Flush -------
[getRootHostContext]
    type:'getRootHostContext'
    params:{ rootContainerInstance: {} }
[getChildHostContext]
    type:'getChildHostContext'
    params:{ parentHostContext: {}, type: 'div', instance: {} }
[shouldSetTextContent]
    type:'shouldSetTextContent'
    params:{ type: 'div', props: { children: 'foo' } }
[createTextInstance]
    type:'createTextInstance'
    params:{ text: 'foo',
  rootContainerInstance: {},
  hostContext: {},
  internalInstanceHandle: '...' }
[createInstance]
    type:'createInstance'
    params:{ type: 'div',
  props: { children: 'foo' },
  rootContainerInstance: {},
  hostContext: {},
  internalInstanceHandle: '...' }
[appendInitialChild]
    type:'appendInitialChild'
    params:{ parentInstance: {}, child: undefined }
[finalizeInitialChildren]
    type:'finalizeInitialChildren'
    params:{ parentInstance: {},
  type: 'div',
  props: { children: 'foo' },
  rootContainerInstance: {},
  hostContext: undefined }
[prepareForCommit]
    type:'prepareForCommit'
    params:{ containerInfo: undefined }
[appendChildToContainer]
    type:'appendChildToContainer'
    params:{ container: {}, child: {} }
[resetAfterCommit]
    type:'resetAfterCommit'
    params:{ containerInfo: undefined }
------ End Flush -------
------ Start Flush -------
[getRootHostContext]
    type:'getRootHostContext'
    params:{ rootContainerInstance: {} }
[getChildHostContext]
    type:'getChildHostContext'
    params:{ parentHostContext: {}, type: 'div', instance: {} }
[shouldSetTextContent]
    type:'shouldSetTextContent'
    params:{ type: 'div', props: { children: 'bar' } }
[shouldSetTextContent]
    type:'shouldSetTextContent'
    params:{ type: 'div', props: { children: 'foo' } }
[createTextInstance]
    type:'createTextInstance'
    params:{ text: 'bar',
  rootContainerInstance: {},
  hostContext: {},
  internalInstanceHandle: '...' }
[prepareUpdate]
    type:'prepareUpdate'
    params:{ instance: {},
  type: 'div',
  oldProps: { children: 'foo' },
  newProps: { children: 'bar' },
  rootContainerInstance: {},
  hostContext: {} }
[prepareForCommit]
    type:'prepareForCommit'
    params:{ containerInfo: undefined }
[commitUpdate]
    type:'commitUpdate'
    params:{ instance: {},
  updatePayload: {},
  type: 'div',
  oldProps: { children: 'foo' },
  newProps: { children: 'bar' },
  internalInstanceHandle: '...' }
[resetAfterCommit]
    type:'resetAfterCommit'
    params:{ containerInfo: undefined }
------ End Flush -------
------ Start Flush -------
[getRootHostContext]
    type:'getRootHostContext'
    params:{ rootContainerInstance: {} }
[getChildHostContext]
    type:'getChildHostContext'
    params:{ parentHostContext: {}, type: 'p', instance: {} }
[shouldSetTextContent]
    type:'shouldSetTextContent'
    params:{ type: 'p', props: { children: 'bar' } }
[createTextInstance]
    type:'createTextInstance'
    params:{ text: 'bar',
  rootContainerInstance: {},
  hostContext: {},
  internalInstanceHandle: '...' }
[createInstance]
    type:'createInstance'
    params:{ type: 'p',
  props: { children: 'bar' },
  rootContainerInstance: {},
  hostContext: {},
  internalInstanceHandle: '...' }
[appendInitialChild]
    type:'appendInitialChild'
    params:{ parentInstance: {}, child: undefined }
[finalizeInitialChildren]
    type:'finalizeInitialChildren'
    params:{ parentInstance: {},
  type: 'p',
  props: { children: 'bar' },
  rootContainerInstance: {},
  hostContext: undefined }
[prepareForCommit]
    type:'prepareForCommit'
    params:{ containerInfo: undefined }
[removeChildFromContainer]
    type:'removeChildFromContainer'
    params:{ container: {}, child: {} }
[appendChildToContainer]
    type:'appendChildToContainer'
    params:{ container: {}, child: {} }
[resetAfterCommit]
    type:'resetAfterCommit'
    params:{ containerInfo: undefined }
------ End Flush -------
*/
