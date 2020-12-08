// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/renderer_preference_watcher.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');
  var renderer_preferences$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/renderer_preferences.mojom', 'renderer_preferences.mojom.js');
  }



  function RendererPreferenceWatcher_NotifyUpdate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererPreferenceWatcher_NotifyUpdate_Params.prototype.initDefaults_ = function() {
    this.newPrefs = null;
  };
  RendererPreferenceWatcher_NotifyUpdate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererPreferenceWatcher_NotifyUpdate_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererPreferenceWatcher_NotifyUpdate_Params.newPrefs
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, renderer_preferences$.RendererPreferences, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RendererPreferenceWatcher_NotifyUpdate_Params.encodedSize = codec.kStructHeaderSize + 8;

  RendererPreferenceWatcher_NotifyUpdate_Params.decode = function(decoder) {
    var packed;
    var val = new RendererPreferenceWatcher_NotifyUpdate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.newPrefs = decoder.decodeStructPointer(renderer_preferences$.RendererPreferences);
    return val;
  };

  RendererPreferenceWatcher_NotifyUpdate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererPreferenceWatcher_NotifyUpdate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(renderer_preferences$.RendererPreferences, val.newPrefs);
  };
  var kRendererPreferenceWatcher_NotifyUpdate_Name = 0;

  function RendererPreferenceWatcherPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(RendererPreferenceWatcher,
                                                   handleOrPtrInfo);
  }

  function RendererPreferenceWatcherAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        RendererPreferenceWatcher, associatedInterfacePtrInfo);
  }

  RendererPreferenceWatcherAssociatedPtr.prototype =
      Object.create(RendererPreferenceWatcherPtr.prototype);
  RendererPreferenceWatcherAssociatedPtr.prototype.constructor =
      RendererPreferenceWatcherAssociatedPtr;

  function RendererPreferenceWatcherProxy(receiver) {
    this.receiver_ = receiver;
  }
  RendererPreferenceWatcherPtr.prototype.notifyUpdate = function() {
    return RendererPreferenceWatcherProxy.prototype.notifyUpdate
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererPreferenceWatcherProxy.prototype.notifyUpdate = function(newPrefs) {
    var params_ = new RendererPreferenceWatcher_NotifyUpdate_Params();
    params_.newPrefs = newPrefs;
    var builder = new codec.MessageV0Builder(
        kRendererPreferenceWatcher_NotifyUpdate_Name,
        codec.align(RendererPreferenceWatcher_NotifyUpdate_Params.encodedSize));
    builder.encodeStruct(RendererPreferenceWatcher_NotifyUpdate_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function RendererPreferenceWatcherStub(delegate) {
    this.delegate_ = delegate;
  }
  RendererPreferenceWatcherStub.prototype.notifyUpdate = function(newPrefs) {
    return this.delegate_ && this.delegate_.notifyUpdate && this.delegate_.notifyUpdate(newPrefs);
  }

  RendererPreferenceWatcherStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kRendererPreferenceWatcher_NotifyUpdate_Name:
      var params = reader.decodeStruct(RendererPreferenceWatcher_NotifyUpdate_Params);
      this.notifyUpdate(params.newPrefs);
      return true;
    default:
      return false;
    }
  };

  RendererPreferenceWatcherStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateRendererPreferenceWatcherRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kRendererPreferenceWatcher_NotifyUpdate_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererPreferenceWatcher_NotifyUpdate_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateRendererPreferenceWatcherResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var RendererPreferenceWatcher = {
    name: 'blink.mojom.RendererPreferenceWatcher',
    kVersion: 0,
    ptrClass: RendererPreferenceWatcherPtr,
    proxyClass: RendererPreferenceWatcherProxy,
    stubClass: RendererPreferenceWatcherStub,
    validateRequest: validateRendererPreferenceWatcherRequest,
    validateResponse: null,
  };
  RendererPreferenceWatcherStub.prototype.validator = validateRendererPreferenceWatcherRequest;
  RendererPreferenceWatcherProxy.prototype.validator = null;
  exports.RendererPreferenceWatcher = RendererPreferenceWatcher;
  exports.RendererPreferenceWatcherPtr = RendererPreferenceWatcherPtr;
  exports.RendererPreferenceWatcherAssociatedPtr = RendererPreferenceWatcherAssociatedPtr;
})();