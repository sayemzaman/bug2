// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/device/public/mojom/usb_manager.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('device.mojom');
  var usb_device$ =
      mojo.internal.exposeNamespace('device.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/device/public/mojom/usb_device.mojom', 'usb_device.mojom.js');
  }
  var usb_enumeration_options$ =
      mojo.internal.exposeNamespace('device.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/device/public/mojom/usb_enumeration_options.mojom', 'usb_enumeration_options.mojom.js');
  }
  var usb_manager_client$ =
      mojo.internal.exposeNamespace('device.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/device/public/mojom/usb_manager_client.mojom', 'usb_manager_client.mojom.js');
  }
  var file$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file.mojom', '../../../../mojo/public/mojom/base/file.mojom.js');
  }



  function UsbDeviceManager_EnumerateDevicesAndSetClient_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_EnumerateDevicesAndSetClient_Params.prototype.initDefaults_ = function() {
    this.client = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  UsbDeviceManager_EnumerateDevicesAndSetClient_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_EnumerateDevicesAndSetClient_Params.validate = function(messageValidator, offset) {
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


    // validate UsbDeviceManager_EnumerateDevicesAndSetClient_Params.client
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_EnumerateDevicesAndSetClient_Params.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_EnumerateDevicesAndSetClient_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_EnumerateDevicesAndSetClient_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  UsbDeviceManager_EnumerateDevicesAndSetClient_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_EnumerateDevicesAndSetClient_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.client);
  };
  function UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.prototype.initDefaults_ = function() {
    this.results = null;
  };
  UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.results
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(usb_device$.UsbDeviceInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.results = decoder.decodeArrayPointer(new codec.PointerTo(usb_device$.UsbDeviceInfo));
    return val;
  };

  UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(usb_device$.UsbDeviceInfo), val.results);
  };
  function UsbDeviceManager_GetDevices_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_GetDevices_Params.prototype.initDefaults_ = function() {
    this.options = null;
  };
  UsbDeviceManager_GetDevices_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_GetDevices_Params.validate = function(messageValidator, offset) {
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


    // validate UsbDeviceManager_GetDevices_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, usb_enumeration_options$.UsbEnumerationOptions, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_GetDevices_Params.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_GetDevices_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_GetDevices_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.options = decoder.decodeStructPointer(usb_enumeration_options$.UsbEnumerationOptions);
    return val;
  };

  UsbDeviceManager_GetDevices_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_GetDevices_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(usb_enumeration_options$.UsbEnumerationOptions, val.options);
  };
  function UsbDeviceManager_GetDevices_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_GetDevices_ResponseParams.prototype.initDefaults_ = function() {
    this.results = null;
  };
  UsbDeviceManager_GetDevices_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_GetDevices_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate UsbDeviceManager_GetDevices_ResponseParams.results
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(usb_device$.UsbDeviceInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_GetDevices_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_GetDevices_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_GetDevices_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.results = decoder.decodeArrayPointer(new codec.PointerTo(usb_device$.UsbDeviceInfo));
    return val;
  };

  UsbDeviceManager_GetDevices_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_GetDevices_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(usb_device$.UsbDeviceInfo), val.results);
  };
  function UsbDeviceManager_GetDevice_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_GetDevice_Params.prototype.initDefaults_ = function() {
    this.guid = null;
    this.deviceRequest = new bindings.InterfaceRequest();
    this.deviceClient = new usb_device$.UsbDeviceClientPtr();
  };
  UsbDeviceManager_GetDevice_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_GetDevice_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManager_GetDevice_Params.guid
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManager_GetDevice_Params.deviceRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManager_GetDevice_Params.deviceClient
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 12, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_GetDevice_Params.encodedSize = codec.kStructHeaderSize + 24;

  UsbDeviceManager_GetDevice_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_GetDevice_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.guid = decoder.decodeStruct(codec.String);
    val.deviceRequest = decoder.decodeStruct(codec.InterfaceRequest);
    val.deviceClient = decoder.decodeStruct(new codec.NullableInterface(usb_device$.UsbDeviceClientPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  UsbDeviceManager_GetDevice_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_GetDevice_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.guid);
    encoder.encodeStruct(codec.InterfaceRequest, val.deviceRequest);
    encoder.encodeStruct(new codec.NullableInterface(usb_device$.UsbDeviceClientPtr), val.deviceClient);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function UsbDeviceManager_RefreshDeviceInfo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_RefreshDeviceInfo_Params.prototype.initDefaults_ = function() {
    this.guid = null;
  };
  UsbDeviceManager_RefreshDeviceInfo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_RefreshDeviceInfo_Params.validate = function(messageValidator, offset) {
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


    // validate UsbDeviceManager_RefreshDeviceInfo_Params.guid
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_RefreshDeviceInfo_Params.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_RefreshDeviceInfo_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_RefreshDeviceInfo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.guid = decoder.decodeStruct(codec.String);
    return val;
  };

  UsbDeviceManager_RefreshDeviceInfo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_RefreshDeviceInfo_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.guid);
  };
  function UsbDeviceManager_RefreshDeviceInfo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_RefreshDeviceInfo_ResponseParams.prototype.initDefaults_ = function() {
    this.deviceInfo = null;
  };
  UsbDeviceManager_RefreshDeviceInfo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_RefreshDeviceInfo_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate UsbDeviceManager_RefreshDeviceInfo_ResponseParams.deviceInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, usb_device$.UsbDeviceInfo, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_RefreshDeviceInfo_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_RefreshDeviceInfo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_RefreshDeviceInfo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceInfo = decoder.decodeStructPointer(usb_device$.UsbDeviceInfo);
    return val;
  };

  UsbDeviceManager_RefreshDeviceInfo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_RefreshDeviceInfo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(usb_device$.UsbDeviceInfo, val.deviceInfo);
  };
  function UsbDeviceManager_SetClient_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManager_SetClient_Params.prototype.initDefaults_ = function() {
    this.client = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  UsbDeviceManager_SetClient_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManager_SetClient_Params.validate = function(messageValidator, offset) {
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


    // validate UsbDeviceManager_SetClient_Params.client
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManager_SetClient_Params.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManager_SetClient_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManager_SetClient_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  UsbDeviceManager_SetClient_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManager_SetClient_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.client);
  };
  var kUsbDeviceManager_EnumerateDevicesAndSetClient_Name = 0;
  var kUsbDeviceManager_GetDevices_Name = 1;
  var kUsbDeviceManager_GetDevice_Name = 2;
  var kUsbDeviceManager_RefreshDeviceInfo_Name = 3;
  var kUsbDeviceManager_SetClient_Name = 4;

  function UsbDeviceManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(UsbDeviceManager,
                                                   handleOrPtrInfo);
  }

  function UsbDeviceManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        UsbDeviceManager, associatedInterfacePtrInfo);
  }

  UsbDeviceManagerAssociatedPtr.prototype =
      Object.create(UsbDeviceManagerPtr.prototype);
  UsbDeviceManagerAssociatedPtr.prototype.constructor =
      UsbDeviceManagerAssociatedPtr;

  function UsbDeviceManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  UsbDeviceManagerPtr.prototype.enumerateDevicesAndSetClient = function() {
    return UsbDeviceManagerProxy.prototype.enumerateDevicesAndSetClient
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerProxy.prototype.enumerateDevicesAndSetClient = function(client) {
    var params_ = new UsbDeviceManager_EnumerateDevicesAndSetClient_Params();
    params_.client = client;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV2Builder(
          kUsbDeviceManager_EnumerateDevicesAndSetClient_Name,
          codec.align(UsbDeviceManager_EnumerateDevicesAndSetClient_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.setPayload(UsbDeviceManager_EnumerateDevicesAndSetClient_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  UsbDeviceManagerPtr.prototype.getDevices = function() {
    return UsbDeviceManagerProxy.prototype.getDevices
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerProxy.prototype.getDevices = function(options) {
    var params_ = new UsbDeviceManager_GetDevices_Params();
    params_.options = options;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kUsbDeviceManager_GetDevices_Name,
          codec.align(UsbDeviceManager_GetDevices_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(UsbDeviceManager_GetDevices_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(UsbDeviceManager_GetDevices_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  UsbDeviceManagerPtr.prototype.getDevice = function() {
    return UsbDeviceManagerProxy.prototype.getDevice
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerProxy.prototype.getDevice = function(guid, deviceRequest, deviceClient) {
    var params_ = new UsbDeviceManager_GetDevice_Params();
    params_.guid = guid;
    params_.deviceRequest = deviceRequest;
    params_.deviceClient = deviceClient;
    var builder = new codec.MessageV0Builder(
        kUsbDeviceManager_GetDevice_Name,
        codec.align(UsbDeviceManager_GetDevice_Params.encodedSize));
    builder.encodeStruct(UsbDeviceManager_GetDevice_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  UsbDeviceManagerPtr.prototype.refreshDeviceInfo = function() {
    return UsbDeviceManagerProxy.prototype.refreshDeviceInfo
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerProxy.prototype.refreshDeviceInfo = function(guid) {
    var params_ = new UsbDeviceManager_RefreshDeviceInfo_Params();
    params_.guid = guid;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kUsbDeviceManager_RefreshDeviceInfo_Name,
          codec.align(UsbDeviceManager_RefreshDeviceInfo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(UsbDeviceManager_RefreshDeviceInfo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(UsbDeviceManager_RefreshDeviceInfo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  UsbDeviceManagerPtr.prototype.setClient = function() {
    return UsbDeviceManagerProxy.prototype.setClient
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerProxy.prototype.setClient = function(client) {
    var params_ = new UsbDeviceManager_SetClient_Params();
    params_.client = client;
    var builder = new codec.MessageV2Builder(
        kUsbDeviceManager_SetClient_Name,
        codec.align(UsbDeviceManager_SetClient_Params.encodedSize));
    builder.setPayload(UsbDeviceManager_SetClient_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function UsbDeviceManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  UsbDeviceManagerStub.prototype.enumerateDevicesAndSetClient = function(client) {
    return this.delegate_ && this.delegate_.enumerateDevicesAndSetClient && this.delegate_.enumerateDevicesAndSetClient(client);
  }
  UsbDeviceManagerStub.prototype.getDevices = function(options) {
    return this.delegate_ && this.delegate_.getDevices && this.delegate_.getDevices(options);
  }
  UsbDeviceManagerStub.prototype.getDevice = function(guid, deviceRequest, deviceClient) {
    return this.delegate_ && this.delegate_.getDevice && this.delegate_.getDevice(guid, deviceRequest, deviceClient);
  }
  UsbDeviceManagerStub.prototype.refreshDeviceInfo = function(guid) {
    return this.delegate_ && this.delegate_.refreshDeviceInfo && this.delegate_.refreshDeviceInfo(guid);
  }
  UsbDeviceManagerStub.prototype.setClient = function(client) {
    return this.delegate_ && this.delegate_.setClient && this.delegate_.setClient(client);
  }

  UsbDeviceManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kUsbDeviceManager_GetDevice_Name:
      var params = reader.decodeStruct(UsbDeviceManager_GetDevice_Params);
      this.getDevice(params.guid, params.deviceRequest, params.deviceClient);
      return true;
    case kUsbDeviceManager_SetClient_Name:
      var params = reader.decodeStruct(UsbDeviceManager_SetClient_Params);
      this.setClient(params.client);
      return true;
    default:
      return false;
    }
  };

  UsbDeviceManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kUsbDeviceManager_EnumerateDevicesAndSetClient_Name:
      var params = reader.decodeStruct(UsbDeviceManager_EnumerateDevicesAndSetClient_Params);
      this.enumerateDevicesAndSetClient(params.client).then(function(response) {
        var responseParams =
            new UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams();
        responseParams.results = response.results;
        var builder = new codec.MessageV2Builder(
            kUsbDeviceManager_EnumerateDevicesAndSetClient_Name,
            codec.align(UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams
                .encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.setPayload(UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kUsbDeviceManager_GetDevices_Name:
      var params = reader.decodeStruct(UsbDeviceManager_GetDevices_Params);
      this.getDevices(params.options).then(function(response) {
        var responseParams =
            new UsbDeviceManager_GetDevices_ResponseParams();
        responseParams.results = response.results;
        var builder = new codec.MessageV1Builder(
            kUsbDeviceManager_GetDevices_Name,
            codec.align(UsbDeviceManager_GetDevices_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(UsbDeviceManager_GetDevices_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kUsbDeviceManager_RefreshDeviceInfo_Name:
      var params = reader.decodeStruct(UsbDeviceManager_RefreshDeviceInfo_Params);
      this.refreshDeviceInfo(params.guid).then(function(response) {
        var responseParams =
            new UsbDeviceManager_RefreshDeviceInfo_ResponseParams();
        responseParams.deviceInfo = response.deviceInfo;
        var builder = new codec.MessageV1Builder(
            kUsbDeviceManager_RefreshDeviceInfo_Name,
            codec.align(UsbDeviceManager_RefreshDeviceInfo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(UsbDeviceManager_RefreshDeviceInfo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateUsbDeviceManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kUsbDeviceManager_EnumerateDevicesAndSetClient_Name:
        if (message.expectsResponse())
          paramsClass = UsbDeviceManager_EnumerateDevicesAndSetClient_Params;
      break;
      case kUsbDeviceManager_GetDevices_Name:
        if (message.expectsResponse())
          paramsClass = UsbDeviceManager_GetDevices_Params;
      break;
      case kUsbDeviceManager_GetDevice_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = UsbDeviceManager_GetDevice_Params;
      break;
      case kUsbDeviceManager_RefreshDeviceInfo_Name:
        if (message.expectsResponse())
          paramsClass = UsbDeviceManager_RefreshDeviceInfo_Params;
      break;
      case kUsbDeviceManager_SetClient_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = UsbDeviceManager_SetClient_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateUsbDeviceManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kUsbDeviceManager_EnumerateDevicesAndSetClient_Name:
        if (message.isResponse())
          paramsClass = UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams;
        break;
      case kUsbDeviceManager_GetDevices_Name:
        if (message.isResponse())
          paramsClass = UsbDeviceManager_GetDevices_ResponseParams;
        break;
      case kUsbDeviceManager_RefreshDeviceInfo_Name:
        if (message.isResponse())
          paramsClass = UsbDeviceManager_RefreshDeviceInfo_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var UsbDeviceManager = {
    name: 'device.mojom.UsbDeviceManager',
    kVersion: 0,
    ptrClass: UsbDeviceManagerPtr,
    proxyClass: UsbDeviceManagerProxy,
    stubClass: UsbDeviceManagerStub,
    validateRequest: validateUsbDeviceManagerRequest,
    validateResponse: validateUsbDeviceManagerResponse,
  };
  UsbDeviceManagerStub.prototype.validator = validateUsbDeviceManagerRequest;
  UsbDeviceManagerProxy.prototype.validator = validateUsbDeviceManagerResponse;
  exports.UsbDeviceManager = UsbDeviceManager;
  exports.UsbDeviceManagerPtr = UsbDeviceManagerPtr;
  exports.UsbDeviceManagerAssociatedPtr = UsbDeviceManagerAssociatedPtr;
})();