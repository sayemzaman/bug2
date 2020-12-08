// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/loader/pause_subresource_loading_handle.mojom';
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




  function PauseSubresourceLoadingHandlePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PauseSubresourceLoadingHandle,
                                                   handleOrPtrInfo);
  }

  function PauseSubresourceLoadingHandleAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PauseSubresourceLoadingHandle, associatedInterfacePtrInfo);
  }

  PauseSubresourceLoadingHandleAssociatedPtr.prototype =
      Object.create(PauseSubresourceLoadingHandlePtr.prototype);
  PauseSubresourceLoadingHandleAssociatedPtr.prototype.constructor =
      PauseSubresourceLoadingHandleAssociatedPtr;

  function PauseSubresourceLoadingHandleProxy(receiver) {
    this.receiver_ = receiver;
  }

  function PauseSubresourceLoadingHandleStub(delegate) {
    this.delegate_ = delegate;
  }

  PauseSubresourceLoadingHandleStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PauseSubresourceLoadingHandleStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePauseSubresourceLoadingHandleRequest(messageValidator) {
    return validator.validationError.NONE;
  }

  function validatePauseSubresourceLoadingHandleResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PauseSubresourceLoadingHandle = {
    name: 'blink.mojom.PauseSubresourceLoadingHandle',
    kVersion: 0,
    ptrClass: PauseSubresourceLoadingHandlePtr,
    proxyClass: PauseSubresourceLoadingHandleProxy,
    stubClass: PauseSubresourceLoadingHandleStub,
    validateRequest: validatePauseSubresourceLoadingHandleRequest,
    validateResponse: null,
  };
  PauseSubresourceLoadingHandleStub.prototype.validator = validatePauseSubresourceLoadingHandleRequest;
  PauseSubresourceLoadingHandleProxy.prototype.validator = null;
  exports.PauseSubresourceLoadingHandle = PauseSubresourceLoadingHandle;
  exports.PauseSubresourceLoadingHandlePtr = PauseSubresourceLoadingHandlePtr;
  exports.PauseSubresourceLoadingHandleAssociatedPtr = PauseSubresourceLoadingHandleAssociatedPtr;
})();