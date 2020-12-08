// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/device/public/mojom/serial.mojom';
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
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }


  var SerialSendError = {};
  SerialSendError.NONE = 0;
  SerialSendError.DISCONNECTED = SerialSendError.NONE + 1;
  SerialSendError.PENDING = SerialSendError.DISCONNECTED + 1;
  SerialSendError.TIMEOUT = SerialSendError.PENDING + 1;
  SerialSendError.SYSTEM_ERROR = SerialSendError.TIMEOUT + 1;
  SerialSendError.MIN_VALUE = 0,
  SerialSendError.MAX_VALUE = 4,

  SerialSendError.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  SerialSendError.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var SerialReceiveError = {};
  SerialReceiveError.NONE = 0;
  SerialReceiveError.DISCONNECTED = SerialReceiveError.NONE + 1;
  SerialReceiveError.TIMEOUT = SerialReceiveError.DISCONNECTED + 1;
  SerialReceiveError.DEVICE_LOST = SerialReceiveError.TIMEOUT + 1;
  SerialReceiveError.BREAK = SerialReceiveError.DEVICE_LOST + 1;
  SerialReceiveError.FRAME_ERROR = SerialReceiveError.BREAK + 1;
  SerialReceiveError.OVERRUN = SerialReceiveError.FRAME_ERROR + 1;
  SerialReceiveError.BUFFER_OVERFLOW = SerialReceiveError.OVERRUN + 1;
  SerialReceiveError.PARITY_ERROR = SerialReceiveError.BUFFER_OVERFLOW + 1;
  SerialReceiveError.SYSTEM_ERROR = SerialReceiveError.PARITY_ERROR + 1;
  SerialReceiveError.MIN_VALUE = 0,
  SerialReceiveError.MAX_VALUE = 9,

  SerialReceiveError.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return true;
    }
    return false;
  };

  SerialReceiveError.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var SerialDataBits = {};
  SerialDataBits.NONE = 0;
  SerialDataBits.SEVEN = SerialDataBits.NONE + 1;
  SerialDataBits.EIGHT = SerialDataBits.SEVEN + 1;
  SerialDataBits.MIN_VALUE = 0,
  SerialDataBits.MAX_VALUE = 2,

  SerialDataBits.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  SerialDataBits.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var SerialParityBit = {};
  SerialParityBit.NONE = 0;
  SerialParityBit.NO_PARITY = SerialParityBit.NONE + 1;
  SerialParityBit.ODD = SerialParityBit.NO_PARITY + 1;
  SerialParityBit.EVEN = SerialParityBit.ODD + 1;
  SerialParityBit.MIN_VALUE = 0,
  SerialParityBit.MAX_VALUE = 3,

  SerialParityBit.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  SerialParityBit.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var SerialStopBits = {};
  SerialStopBits.NONE = 0;
  SerialStopBits.ONE = SerialStopBits.NONE + 1;
  SerialStopBits.TWO = SerialStopBits.ONE + 1;
  SerialStopBits.MIN_VALUE = 0,
  SerialStopBits.MAX_VALUE = 2,

  SerialStopBits.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  SerialStopBits.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SerialPortInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPortInfo.prototype.initDefaults_ = function() {
    this.token = null;
    this.path = null;
    this.vendorId = 0;
    this.hasVendorId = false;
    this.hasProductId = false;
    this.productId = 0;
    this.displayName = null;
  };
  SerialPortInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPortInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SerialPortInfo.token
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SerialPortInfo.path
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;






    // validate SerialPortInfo.displayName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPortInfo.encodedSize = codec.kStructHeaderSize + 32;

  SerialPortInfo.decode = function(decoder) {
    var packed;
    var val = new SerialPortInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    val.path = decoder.decodeStructPointer(file_path$.FilePath);
    val.vendorId = decoder.decodeStruct(codec.Uint16);
    packed = decoder.readUint8();
    val.hasVendorId = (packed >> 0) & 1 ? true : false;
    val.hasProductId = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    val.productId = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    val.displayName = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  SerialPortInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPortInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.token);
    encoder.encodeStructPointer(file_path$.FilePath, val.path);
    encoder.encodeStruct(codec.Uint16, val.vendorId);
    packed = 0;
    packed |= (val.hasVendorId & 1) << 0
    packed |= (val.hasProductId & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint16, val.productId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.NullableString, val.displayName);
  };
  function SerialConnectionOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialConnectionOptions.prototype.initDefaults_ = function() {
    this.bitrate = 0;
    this.dataBits = SerialDataBits.NONE;
    this.parityBit = SerialParityBit.NONE;
    this.stopBits = SerialStopBits.NONE;
    this.ctsFlowControl = false;
    this.hasCtsFlowControl = false;
  };
  SerialConnectionOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialConnectionOptions.validate = function(messageValidator, offset) {
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



    // validate SerialConnectionOptions.dataBits
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, SerialDataBits);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SerialConnectionOptions.parityBit
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, SerialParityBit);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SerialConnectionOptions.stopBits
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, SerialStopBits);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  SerialConnectionOptions.encodedSize = codec.kStructHeaderSize + 24;

  SerialConnectionOptions.decode = function(decoder) {
    var packed;
    var val = new SerialConnectionOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bitrate = decoder.decodeStruct(codec.Uint32);
    val.dataBits = decoder.decodeStruct(codec.Int32);
    val.parityBit = decoder.decodeStruct(codec.Int32);
    val.stopBits = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.ctsFlowControl = (packed >> 0) & 1 ? true : false;
    val.hasCtsFlowControl = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialConnectionOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialConnectionOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.bitrate);
    encoder.encodeStruct(codec.Int32, val.dataBits);
    encoder.encodeStruct(codec.Int32, val.parityBit);
    encoder.encodeStruct(codec.Int32, val.stopBits);
    packed = 0;
    packed |= (val.ctsFlowControl & 1) << 0
    packed |= (val.hasCtsFlowControl & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SerialConnectionInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialConnectionInfo.prototype.initDefaults_ = function() {
    this.bitrate = 0;
    this.dataBits = SerialDataBits.NONE;
    this.parityBit = SerialParityBit.NONE;
    this.stopBits = SerialStopBits.NONE;
    this.ctsFlowControl = false;
  };
  SerialConnectionInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialConnectionInfo.validate = function(messageValidator, offset) {
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



    // validate SerialConnectionInfo.dataBits
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, SerialDataBits);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SerialConnectionInfo.parityBit
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, SerialParityBit);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SerialConnectionInfo.stopBits
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, SerialStopBits);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SerialConnectionInfo.encodedSize = codec.kStructHeaderSize + 24;

  SerialConnectionInfo.decode = function(decoder) {
    var packed;
    var val = new SerialConnectionInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bitrate = decoder.decodeStruct(codec.Uint32);
    val.dataBits = decoder.decodeStruct(codec.Int32);
    val.parityBit = decoder.decodeStruct(codec.Int32);
    val.stopBits = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.ctsFlowControl = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialConnectionInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialConnectionInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.bitrate);
    encoder.encodeStruct(codec.Int32, val.dataBits);
    encoder.encodeStruct(codec.Int32, val.parityBit);
    encoder.encodeStruct(codec.Int32, val.stopBits);
    packed = 0;
    packed |= (val.ctsFlowControl & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SerialHostControlSignals(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialHostControlSignals.prototype.initDefaults_ = function() {
    this.dtr = false;
    this.hasDtr = false;
    this.rts = false;
    this.hasRts = false;
  };
  SerialHostControlSignals.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialHostControlSignals.validate = function(messageValidator, offset) {
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





    return validator.validationError.NONE;
  };

  SerialHostControlSignals.encodedSize = codec.kStructHeaderSize + 8;

  SerialHostControlSignals.decode = function(decoder) {
    var packed;
    var val = new SerialHostControlSignals();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.dtr = (packed >> 0) & 1 ? true : false;
    val.hasDtr = (packed >> 1) & 1 ? true : false;
    val.rts = (packed >> 2) & 1 ? true : false;
    val.hasRts = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialHostControlSignals.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialHostControlSignals.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.dtr & 1) << 0
    packed |= (val.hasDtr & 1) << 1
    packed |= (val.rts & 1) << 2
    packed |= (val.hasRts & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SerialPortControlSignals(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPortControlSignals.prototype.initDefaults_ = function() {
    this.dcd = false;
    this.cts = false;
    this.ri = false;
    this.dsr = false;
  };
  SerialPortControlSignals.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPortControlSignals.validate = function(messageValidator, offset) {
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





    return validator.validationError.NONE;
  };

  SerialPortControlSignals.encodedSize = codec.kStructHeaderSize + 8;

  SerialPortControlSignals.decode = function(decoder) {
    var packed;
    var val = new SerialPortControlSignals();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.dcd = (packed >> 0) & 1 ? true : false;
    val.cts = (packed >> 1) & 1 ? true : false;
    val.ri = (packed >> 2) & 1 ? true : false;
    val.dsr = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialPortControlSignals.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPortControlSignals.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.dcd & 1) << 0
    packed |= (val.cts & 1) << 1
    packed |= (val.ri & 1) << 2
    packed |= (val.dsr & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SerialPortManager_GetDevices_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPortManager_GetDevices_Params.prototype.initDefaults_ = function() {
  };
  SerialPortManager_GetDevices_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPortManager_GetDevices_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPortManager_GetDevices_Params.encodedSize = codec.kStructHeaderSize + 0;

  SerialPortManager_GetDevices_Params.decode = function(decoder) {
    var packed;
    var val = new SerialPortManager_GetDevices_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SerialPortManager_GetDevices_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPortManager_GetDevices_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function SerialPortManager_GetDevices_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPortManager_GetDevices_ResponseParams.prototype.initDefaults_ = function() {
    this.devices = null;
  };
  SerialPortManager_GetDevices_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPortManager_GetDevices_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate SerialPortManager_GetDevices_ResponseParams.devices
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(SerialPortInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPortManager_GetDevices_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  SerialPortManager_GetDevices_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SerialPortManager_GetDevices_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.devices = decoder.decodeArrayPointer(new codec.PointerTo(SerialPortInfo));
    return val;
  };

  SerialPortManager_GetDevices_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPortManager_GetDevices_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(SerialPortInfo), val.devices);
  };
  function SerialPortManager_GetPort_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPortManager_GetPort_Params.prototype.initDefaults_ = function() {
    this.token = null;
    this.portRequest = new bindings.InterfaceRequest();
    this.watcher = new SerialPortConnectionWatcherPtr();
  };
  SerialPortManager_GetPort_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPortManager_GetPort_Params.validate = function(messageValidator, offset) {
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


    // validate SerialPortManager_GetPort_Params.token
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SerialPortManager_GetPort_Params.portRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SerialPortManager_GetPort_Params.watcher
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 12, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPortManager_GetPort_Params.encodedSize = codec.kStructHeaderSize + 24;

  SerialPortManager_GetPort_Params.decode = function(decoder) {
    var packed;
    var val = new SerialPortManager_GetPort_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    val.portRequest = decoder.decodeStruct(codec.InterfaceRequest);
    val.watcher = decoder.decodeStruct(new codec.NullableInterface(SerialPortConnectionWatcherPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialPortManager_GetPort_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPortManager_GetPort_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.token);
    encoder.encodeStruct(codec.InterfaceRequest, val.portRequest);
    encoder.encodeStruct(new codec.NullableInterface(SerialPortConnectionWatcherPtr), val.watcher);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SerialPort_Open_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_Open_Params.prototype.initDefaults_ = function() {
    this.options = null;
    this.inStream = null;
    this.outStream = null;
    this.client = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  SerialPort_Open_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_Open_Params.validate = function(messageValidator, offset) {
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


    // validate SerialPort_Open_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SerialConnectionOptions, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SerialPort_Open_Params.inStream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SerialPort_Open_Params.outStream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 12, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SerialPort_Open_Params.client
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 16, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPort_Open_Params.encodedSize = codec.kStructHeaderSize + 24;

  SerialPort_Open_Params.decode = function(decoder) {
    var packed;
    var val = new SerialPort_Open_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.options = decoder.decodeStructPointer(SerialConnectionOptions);
    val.inStream = decoder.decodeStruct(codec.Handle);
    val.outStream = decoder.decodeStruct(codec.Handle);
    val.client = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  SerialPort_Open_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_Open_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SerialConnectionOptions, val.options);
    encoder.encodeStruct(codec.Handle, val.inStream);
    encoder.encodeStruct(codec.Handle, val.outStream);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.client);
  };
  function SerialPort_Open_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_Open_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  SerialPort_Open_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_Open_ResponseParams.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  SerialPort_Open_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  SerialPort_Open_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SerialPort_Open_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialPort_Open_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_Open_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SerialPort_ClearSendError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_ClearSendError_Params.prototype.initDefaults_ = function() {
    this.consumer = null;
  };
  SerialPort_ClearSendError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_ClearSendError_Params.validate = function(messageValidator, offset) {
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


    // validate SerialPort_ClearSendError_Params.consumer
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPort_ClearSendError_Params.encodedSize = codec.kStructHeaderSize + 8;

  SerialPort_ClearSendError_Params.decode = function(decoder) {
    var packed;
    var val = new SerialPort_ClearSendError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.consumer = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialPort_ClearSendError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_ClearSendError_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.consumer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SerialPort_ClearReadError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_ClearReadError_Params.prototype.initDefaults_ = function() {
    this.producer = null;
  };
  SerialPort_ClearReadError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_ClearReadError_Params.validate = function(messageValidator, offset) {
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


    // validate SerialPort_ClearReadError_Params.producer
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPort_ClearReadError_Params.encodedSize = codec.kStructHeaderSize + 8;

  SerialPort_ClearReadError_Params.decode = function(decoder) {
    var packed;
    var val = new SerialPort_ClearReadError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.producer = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialPort_ClearReadError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_ClearReadError_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.producer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SerialPort_Flush_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_Flush_Params.prototype.initDefaults_ = function() {
  };
  SerialPort_Flush_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_Flush_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPort_Flush_Params.encodedSize = codec.kStructHeaderSize + 0;

  SerialPort_Flush_Params.decode = function(decoder) {
    var packed;
    var val = new SerialPort_Flush_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SerialPort_Flush_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_Flush_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function SerialPort_Flush_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_Flush_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  SerialPort_Flush_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_Flush_ResponseParams.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  SerialPort_Flush_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  SerialPort_Flush_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SerialPort_Flush_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialPort_Flush_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_Flush_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SerialPort_GetControlSignals_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_GetControlSignals_Params.prototype.initDefaults_ = function() {
  };
  SerialPort_GetControlSignals_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_GetControlSignals_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPort_GetControlSignals_Params.encodedSize = codec.kStructHeaderSize + 0;

  SerialPort_GetControlSignals_Params.decode = function(decoder) {
    var packed;
    var val = new SerialPort_GetControlSignals_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SerialPort_GetControlSignals_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_GetControlSignals_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function SerialPort_GetControlSignals_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_GetControlSignals_ResponseParams.prototype.initDefaults_ = function() {
    this.signals = null;
  };
  SerialPort_GetControlSignals_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_GetControlSignals_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate SerialPort_GetControlSignals_ResponseParams.signals
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SerialPortControlSignals, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPort_GetControlSignals_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  SerialPort_GetControlSignals_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SerialPort_GetControlSignals_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.signals = decoder.decodeStructPointer(SerialPortControlSignals);
    return val;
  };

  SerialPort_GetControlSignals_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_GetControlSignals_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SerialPortControlSignals, val.signals);
  };
  function SerialPort_SetControlSignals_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_SetControlSignals_Params.prototype.initDefaults_ = function() {
    this.signals = null;
  };
  SerialPort_SetControlSignals_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_SetControlSignals_Params.validate = function(messageValidator, offset) {
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


    // validate SerialPort_SetControlSignals_Params.signals
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SerialHostControlSignals, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPort_SetControlSignals_Params.encodedSize = codec.kStructHeaderSize + 8;

  SerialPort_SetControlSignals_Params.decode = function(decoder) {
    var packed;
    var val = new SerialPort_SetControlSignals_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.signals = decoder.decodeStructPointer(SerialHostControlSignals);
    return val;
  };

  SerialPort_SetControlSignals_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_SetControlSignals_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SerialHostControlSignals, val.signals);
  };
  function SerialPort_SetControlSignals_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_SetControlSignals_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  SerialPort_SetControlSignals_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_SetControlSignals_ResponseParams.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  SerialPort_SetControlSignals_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  SerialPort_SetControlSignals_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SerialPort_SetControlSignals_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialPort_SetControlSignals_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_SetControlSignals_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SerialPort_ConfigurePort_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_ConfigurePort_Params.prototype.initDefaults_ = function() {
    this.options = null;
  };
  SerialPort_ConfigurePort_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_ConfigurePort_Params.validate = function(messageValidator, offset) {
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


    // validate SerialPort_ConfigurePort_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SerialConnectionOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPort_ConfigurePort_Params.encodedSize = codec.kStructHeaderSize + 8;

  SerialPort_ConfigurePort_Params.decode = function(decoder) {
    var packed;
    var val = new SerialPort_ConfigurePort_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.options = decoder.decodeStructPointer(SerialConnectionOptions);
    return val;
  };

  SerialPort_ConfigurePort_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_ConfigurePort_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SerialConnectionOptions, val.options);
  };
  function SerialPort_ConfigurePort_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_ConfigurePort_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  SerialPort_ConfigurePort_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_ConfigurePort_ResponseParams.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  SerialPort_ConfigurePort_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  SerialPort_ConfigurePort_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SerialPort_ConfigurePort_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialPort_ConfigurePort_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_ConfigurePort_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SerialPort_GetPortInfo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_GetPortInfo_Params.prototype.initDefaults_ = function() {
  };
  SerialPort_GetPortInfo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_GetPortInfo_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPort_GetPortInfo_Params.encodedSize = codec.kStructHeaderSize + 0;

  SerialPort_GetPortInfo_Params.decode = function(decoder) {
    var packed;
    var val = new SerialPort_GetPortInfo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SerialPort_GetPortInfo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_GetPortInfo_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function SerialPort_GetPortInfo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_GetPortInfo_ResponseParams.prototype.initDefaults_ = function() {
    this.info = null;
  };
  SerialPort_GetPortInfo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_GetPortInfo_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate SerialPort_GetPortInfo_ResponseParams.info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SerialConnectionInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPort_GetPortInfo_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  SerialPort_GetPortInfo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SerialPort_GetPortInfo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeStructPointer(SerialConnectionInfo);
    return val;
  };

  SerialPort_GetPortInfo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_GetPortInfo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SerialConnectionInfo, val.info);
  };
  function SerialPort_SetBreak_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_SetBreak_Params.prototype.initDefaults_ = function() {
  };
  SerialPort_SetBreak_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_SetBreak_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPort_SetBreak_Params.encodedSize = codec.kStructHeaderSize + 0;

  SerialPort_SetBreak_Params.decode = function(decoder) {
    var packed;
    var val = new SerialPort_SetBreak_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SerialPort_SetBreak_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_SetBreak_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function SerialPort_SetBreak_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_SetBreak_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  SerialPort_SetBreak_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_SetBreak_ResponseParams.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  SerialPort_SetBreak_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  SerialPort_SetBreak_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SerialPort_SetBreak_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialPort_SetBreak_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_SetBreak_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SerialPort_ClearBreak_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_ClearBreak_Params.prototype.initDefaults_ = function() {
  };
  SerialPort_ClearBreak_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_ClearBreak_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPort_ClearBreak_Params.encodedSize = codec.kStructHeaderSize + 0;

  SerialPort_ClearBreak_Params.decode = function(decoder) {
    var packed;
    var val = new SerialPort_ClearBreak_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SerialPort_ClearBreak_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_ClearBreak_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function SerialPort_ClearBreak_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPort_ClearBreak_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  SerialPort_ClearBreak_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPort_ClearBreak_ResponseParams.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  SerialPort_ClearBreak_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  SerialPort_ClearBreak_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SerialPort_ClearBreak_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialPort_ClearBreak_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPort_ClearBreak_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SerialPortClient_OnReadError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPortClient_OnReadError_Params.prototype.initDefaults_ = function() {
    this.error = 0;
  };
  SerialPortClient_OnReadError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPortClient_OnReadError_Params.validate = function(messageValidator, offset) {
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


    // validate SerialPortClient_OnReadError_Params.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, SerialReceiveError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPortClient_OnReadError_Params.encodedSize = codec.kStructHeaderSize + 8;

  SerialPortClient_OnReadError_Params.decode = function(decoder) {
    var packed;
    var val = new SerialPortClient_OnReadError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialPortClient_OnReadError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPortClient_OnReadError_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SerialPortClient_OnSendError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerialPortClient_OnSendError_Params.prototype.initDefaults_ = function() {
    this.error = 0;
  };
  SerialPortClient_OnSendError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerialPortClient_OnSendError_Params.validate = function(messageValidator, offset) {
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


    // validate SerialPortClient_OnSendError_Params.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, SerialSendError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerialPortClient_OnSendError_Params.encodedSize = codec.kStructHeaderSize + 8;

  SerialPortClient_OnSendError_Params.decode = function(decoder) {
    var packed;
    var val = new SerialPortClient_OnSendError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SerialPortClient_OnSendError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerialPortClient_OnSendError_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kSerialPortManager_GetDevices_Name = 0;
  var kSerialPortManager_GetPort_Name = 1;

  function SerialPortManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SerialPortManager,
                                                   handleOrPtrInfo);
  }

  function SerialPortManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SerialPortManager, associatedInterfacePtrInfo);
  }

  SerialPortManagerAssociatedPtr.prototype =
      Object.create(SerialPortManagerPtr.prototype);
  SerialPortManagerAssociatedPtr.prototype.constructor =
      SerialPortManagerAssociatedPtr;

  function SerialPortManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  SerialPortManagerPtr.prototype.getDevices = function() {
    return SerialPortManagerProxy.prototype.getDevices
        .apply(this.ptr.getProxy(), arguments);
  };

  SerialPortManagerProxy.prototype.getDevices = function() {
    var params_ = new SerialPortManager_GetDevices_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSerialPortManager_GetDevices_Name,
          codec.align(SerialPortManager_GetDevices_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SerialPortManager_GetDevices_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SerialPortManager_GetDevices_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  SerialPortManagerPtr.prototype.getPort = function() {
    return SerialPortManagerProxy.prototype.getPort
        .apply(this.ptr.getProxy(), arguments);
  };

  SerialPortManagerProxy.prototype.getPort = function(token, portRequest, watcher) {
    var params_ = new SerialPortManager_GetPort_Params();
    params_.token = token;
    params_.portRequest = portRequest;
    params_.watcher = watcher;
    var builder = new codec.MessageV0Builder(
        kSerialPortManager_GetPort_Name,
        codec.align(SerialPortManager_GetPort_Params.encodedSize));
    builder.encodeStruct(SerialPortManager_GetPort_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SerialPortManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  SerialPortManagerStub.prototype.getDevices = function() {
    return this.delegate_ && this.delegate_.getDevices && this.delegate_.getDevices();
  }
  SerialPortManagerStub.prototype.getPort = function(token, portRequest, watcher) {
    return this.delegate_ && this.delegate_.getPort && this.delegate_.getPort(token, portRequest, watcher);
  }

  SerialPortManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSerialPortManager_GetPort_Name:
      var params = reader.decodeStruct(SerialPortManager_GetPort_Params);
      this.getPort(params.token, params.portRequest, params.watcher);
      return true;
    default:
      return false;
    }
  };

  SerialPortManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSerialPortManager_GetDevices_Name:
      var params = reader.decodeStruct(SerialPortManager_GetDevices_Params);
      this.getDevices().then(function(response) {
        var responseParams =
            new SerialPortManager_GetDevices_ResponseParams();
        responseParams.devices = response.devices;
        var builder = new codec.MessageV1Builder(
            kSerialPortManager_GetDevices_Name,
            codec.align(SerialPortManager_GetDevices_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SerialPortManager_GetDevices_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateSerialPortManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSerialPortManager_GetDevices_Name:
        if (message.expectsResponse())
          paramsClass = SerialPortManager_GetDevices_Params;
      break;
      case kSerialPortManager_GetPort_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SerialPortManager_GetPort_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSerialPortManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kSerialPortManager_GetDevices_Name:
        if (message.isResponse())
          paramsClass = SerialPortManager_GetDevices_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var SerialPortManager = {
    name: 'device.mojom.SerialPortManager',
    kVersion: 0,
    ptrClass: SerialPortManagerPtr,
    proxyClass: SerialPortManagerProxy,
    stubClass: SerialPortManagerStub,
    validateRequest: validateSerialPortManagerRequest,
    validateResponse: validateSerialPortManagerResponse,
  };
  SerialPortManagerStub.prototype.validator = validateSerialPortManagerRequest;
  SerialPortManagerProxy.prototype.validator = validateSerialPortManagerResponse;
  var kSerialPort_Open_Name = 0;
  var kSerialPort_ClearSendError_Name = 1;
  var kSerialPort_ClearReadError_Name = 2;
  var kSerialPort_Flush_Name = 3;
  var kSerialPort_GetControlSignals_Name = 4;
  var kSerialPort_SetControlSignals_Name = 5;
  var kSerialPort_ConfigurePort_Name = 6;
  var kSerialPort_GetPortInfo_Name = 7;
  var kSerialPort_SetBreak_Name = 8;
  var kSerialPort_ClearBreak_Name = 9;

  function SerialPortPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SerialPort,
                                                   handleOrPtrInfo);
  }

  function SerialPortAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SerialPort, associatedInterfacePtrInfo);
  }

  SerialPortAssociatedPtr.prototype =
      Object.create(SerialPortPtr.prototype);
  SerialPortAssociatedPtr.prototype.constructor =
      SerialPortAssociatedPtr;

  function SerialPortProxy(receiver) {
    this.receiver_ = receiver;
  }
  SerialPortPtr.prototype.open = function() {
    return SerialPortProxy.prototype.open
        .apply(this.ptr.getProxy(), arguments);
  };

  SerialPortProxy.prototype.open = function(options, inStream, outStream, client) {
    var params_ = new SerialPort_Open_Params();
    params_.options = options;
    params_.inStream = inStream;
    params_.outStream = outStream;
    params_.client = client;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV2Builder(
          kSerialPort_Open_Name,
          codec.align(SerialPort_Open_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.setPayload(SerialPort_Open_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SerialPort_Open_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  SerialPortPtr.prototype.clearSendError = function() {
    return SerialPortProxy.prototype.clearSendError
        .apply(this.ptr.getProxy(), arguments);
  };

  SerialPortProxy.prototype.clearSendError = function(consumer) {
    var params_ = new SerialPort_ClearSendError_Params();
    params_.consumer = consumer;
    var builder = new codec.MessageV0Builder(
        kSerialPort_ClearSendError_Name,
        codec.align(SerialPort_ClearSendError_Params.encodedSize));
    builder.encodeStruct(SerialPort_ClearSendError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SerialPortPtr.prototype.clearReadError = function() {
    return SerialPortProxy.prototype.clearReadError
        .apply(this.ptr.getProxy(), arguments);
  };

  SerialPortProxy.prototype.clearReadError = function(producer) {
    var params_ = new SerialPort_ClearReadError_Params();
    params_.producer = producer;
    var builder = new codec.MessageV0Builder(
        kSerialPort_ClearReadError_Name,
        codec.align(SerialPort_ClearReadError_Params.encodedSize));
    builder.encodeStruct(SerialPort_ClearReadError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SerialPortPtr.prototype.flush = function() {
    return SerialPortProxy.prototype.flush
        .apply(this.ptr.getProxy(), arguments);
  };

  SerialPortProxy.prototype.flush = function() {
    var params_ = new SerialPort_Flush_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSerialPort_Flush_Name,
          codec.align(SerialPort_Flush_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SerialPort_Flush_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SerialPort_Flush_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  SerialPortPtr.prototype.getControlSignals = function() {
    return SerialPortProxy.prototype.getControlSignals
        .apply(this.ptr.getProxy(), arguments);
  };

  SerialPortProxy.prototype.getControlSignals = function() {
    var params_ = new SerialPort_GetControlSignals_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSerialPort_GetControlSignals_Name,
          codec.align(SerialPort_GetControlSignals_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SerialPort_GetControlSignals_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SerialPort_GetControlSignals_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  SerialPortPtr.prototype.setControlSignals = function() {
    return SerialPortProxy.prototype.setControlSignals
        .apply(this.ptr.getProxy(), arguments);
  };

  SerialPortProxy.prototype.setControlSignals = function(signals) {
    var params_ = new SerialPort_SetControlSignals_Params();
    params_.signals = signals;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSerialPort_SetControlSignals_Name,
          codec.align(SerialPort_SetControlSignals_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SerialPort_SetControlSignals_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SerialPort_SetControlSignals_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  SerialPortPtr.prototype.configurePort = function() {
    return SerialPortProxy.prototype.configurePort
        .apply(this.ptr.getProxy(), arguments);
  };

  SerialPortProxy.prototype.configurePort = function(options) {
    var params_ = new SerialPort_ConfigurePort_Params();
    params_.options = options;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSerialPort_ConfigurePort_Name,
          codec.align(SerialPort_ConfigurePort_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SerialPort_ConfigurePort_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SerialPort_ConfigurePort_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  SerialPortPtr.prototype.getPortInfo = function() {
    return SerialPortProxy.prototype.getPortInfo
        .apply(this.ptr.getProxy(), arguments);
  };

  SerialPortProxy.prototype.getPortInfo = function() {
    var params_ = new SerialPort_GetPortInfo_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSerialPort_GetPortInfo_Name,
          codec.align(SerialPort_GetPortInfo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SerialPort_GetPortInfo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SerialPort_GetPortInfo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  SerialPortPtr.prototype.setBreak = function() {
    return SerialPortProxy.prototype.setBreak
        .apply(this.ptr.getProxy(), arguments);
  };

  SerialPortProxy.prototype.setBreak = function() {
    var params_ = new SerialPort_SetBreak_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSerialPort_SetBreak_Name,
          codec.align(SerialPort_SetBreak_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SerialPort_SetBreak_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SerialPort_SetBreak_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  SerialPortPtr.prototype.clearBreak = function() {
    return SerialPortProxy.prototype.clearBreak
        .apply(this.ptr.getProxy(), arguments);
  };

  SerialPortProxy.prototype.clearBreak = function() {
    var params_ = new SerialPort_ClearBreak_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSerialPort_ClearBreak_Name,
          codec.align(SerialPort_ClearBreak_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SerialPort_ClearBreak_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SerialPort_ClearBreak_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function SerialPortStub(delegate) {
    this.delegate_ = delegate;
  }
  SerialPortStub.prototype.open = function(options, inStream, outStream, client) {
    return this.delegate_ && this.delegate_.open && this.delegate_.open(options, inStream, outStream, client);
  }
  SerialPortStub.prototype.clearSendError = function(consumer) {
    return this.delegate_ && this.delegate_.clearSendError && this.delegate_.clearSendError(consumer);
  }
  SerialPortStub.prototype.clearReadError = function(producer) {
    return this.delegate_ && this.delegate_.clearReadError && this.delegate_.clearReadError(producer);
  }
  SerialPortStub.prototype.flush = function() {
    return this.delegate_ && this.delegate_.flush && this.delegate_.flush();
  }
  SerialPortStub.prototype.getControlSignals = function() {
    return this.delegate_ && this.delegate_.getControlSignals && this.delegate_.getControlSignals();
  }
  SerialPortStub.prototype.setControlSignals = function(signals) {
    return this.delegate_ && this.delegate_.setControlSignals && this.delegate_.setControlSignals(signals);
  }
  SerialPortStub.prototype.configurePort = function(options) {
    return this.delegate_ && this.delegate_.configurePort && this.delegate_.configurePort(options);
  }
  SerialPortStub.prototype.getPortInfo = function() {
    return this.delegate_ && this.delegate_.getPortInfo && this.delegate_.getPortInfo();
  }
  SerialPortStub.prototype.setBreak = function() {
    return this.delegate_ && this.delegate_.setBreak && this.delegate_.setBreak();
  }
  SerialPortStub.prototype.clearBreak = function() {
    return this.delegate_ && this.delegate_.clearBreak && this.delegate_.clearBreak();
  }

  SerialPortStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSerialPort_ClearSendError_Name:
      var params = reader.decodeStruct(SerialPort_ClearSendError_Params);
      this.clearSendError(params.consumer);
      return true;
    case kSerialPort_ClearReadError_Name:
      var params = reader.decodeStruct(SerialPort_ClearReadError_Params);
      this.clearReadError(params.producer);
      return true;
    default:
      return false;
    }
  };

  SerialPortStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSerialPort_Open_Name:
      var params = reader.decodeStruct(SerialPort_Open_Params);
      this.open(params.options, params.inStream, params.outStream, params.client).then(function(response) {
        var responseParams =
            new SerialPort_Open_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV2Builder(
            kSerialPort_Open_Name,
            codec.align(SerialPort_Open_ResponseParams
                .encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.setPayload(SerialPort_Open_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kSerialPort_Flush_Name:
      var params = reader.decodeStruct(SerialPort_Flush_Params);
      this.flush().then(function(response) {
        var responseParams =
            new SerialPort_Flush_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kSerialPort_Flush_Name,
            codec.align(SerialPort_Flush_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SerialPort_Flush_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kSerialPort_GetControlSignals_Name:
      var params = reader.decodeStruct(SerialPort_GetControlSignals_Params);
      this.getControlSignals().then(function(response) {
        var responseParams =
            new SerialPort_GetControlSignals_ResponseParams();
        responseParams.signals = response.signals;
        var builder = new codec.MessageV1Builder(
            kSerialPort_GetControlSignals_Name,
            codec.align(SerialPort_GetControlSignals_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SerialPort_GetControlSignals_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kSerialPort_SetControlSignals_Name:
      var params = reader.decodeStruct(SerialPort_SetControlSignals_Params);
      this.setControlSignals(params.signals).then(function(response) {
        var responseParams =
            new SerialPort_SetControlSignals_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kSerialPort_SetControlSignals_Name,
            codec.align(SerialPort_SetControlSignals_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SerialPort_SetControlSignals_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kSerialPort_ConfigurePort_Name:
      var params = reader.decodeStruct(SerialPort_ConfigurePort_Params);
      this.configurePort(params.options).then(function(response) {
        var responseParams =
            new SerialPort_ConfigurePort_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kSerialPort_ConfigurePort_Name,
            codec.align(SerialPort_ConfigurePort_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SerialPort_ConfigurePort_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kSerialPort_GetPortInfo_Name:
      var params = reader.decodeStruct(SerialPort_GetPortInfo_Params);
      this.getPortInfo().then(function(response) {
        var responseParams =
            new SerialPort_GetPortInfo_ResponseParams();
        responseParams.info = response.info;
        var builder = new codec.MessageV1Builder(
            kSerialPort_GetPortInfo_Name,
            codec.align(SerialPort_GetPortInfo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SerialPort_GetPortInfo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kSerialPort_SetBreak_Name:
      var params = reader.decodeStruct(SerialPort_SetBreak_Params);
      this.setBreak().then(function(response) {
        var responseParams =
            new SerialPort_SetBreak_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kSerialPort_SetBreak_Name,
            codec.align(SerialPort_SetBreak_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SerialPort_SetBreak_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kSerialPort_ClearBreak_Name:
      var params = reader.decodeStruct(SerialPort_ClearBreak_Params);
      this.clearBreak().then(function(response) {
        var responseParams =
            new SerialPort_ClearBreak_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kSerialPort_ClearBreak_Name,
            codec.align(SerialPort_ClearBreak_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SerialPort_ClearBreak_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateSerialPortRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSerialPort_Open_Name:
        if (message.expectsResponse())
          paramsClass = SerialPort_Open_Params;
      break;
      case kSerialPort_ClearSendError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SerialPort_ClearSendError_Params;
      break;
      case kSerialPort_ClearReadError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SerialPort_ClearReadError_Params;
      break;
      case kSerialPort_Flush_Name:
        if (message.expectsResponse())
          paramsClass = SerialPort_Flush_Params;
      break;
      case kSerialPort_GetControlSignals_Name:
        if (message.expectsResponse())
          paramsClass = SerialPort_GetControlSignals_Params;
      break;
      case kSerialPort_SetControlSignals_Name:
        if (message.expectsResponse())
          paramsClass = SerialPort_SetControlSignals_Params;
      break;
      case kSerialPort_ConfigurePort_Name:
        if (message.expectsResponse())
          paramsClass = SerialPort_ConfigurePort_Params;
      break;
      case kSerialPort_GetPortInfo_Name:
        if (message.expectsResponse())
          paramsClass = SerialPort_GetPortInfo_Params;
      break;
      case kSerialPort_SetBreak_Name:
        if (message.expectsResponse())
          paramsClass = SerialPort_SetBreak_Params;
      break;
      case kSerialPort_ClearBreak_Name:
        if (message.expectsResponse())
          paramsClass = SerialPort_ClearBreak_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSerialPortResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kSerialPort_Open_Name:
        if (message.isResponse())
          paramsClass = SerialPort_Open_ResponseParams;
        break;
      case kSerialPort_Flush_Name:
        if (message.isResponse())
          paramsClass = SerialPort_Flush_ResponseParams;
        break;
      case kSerialPort_GetControlSignals_Name:
        if (message.isResponse())
          paramsClass = SerialPort_GetControlSignals_ResponseParams;
        break;
      case kSerialPort_SetControlSignals_Name:
        if (message.isResponse())
          paramsClass = SerialPort_SetControlSignals_ResponseParams;
        break;
      case kSerialPort_ConfigurePort_Name:
        if (message.isResponse())
          paramsClass = SerialPort_ConfigurePort_ResponseParams;
        break;
      case kSerialPort_GetPortInfo_Name:
        if (message.isResponse())
          paramsClass = SerialPort_GetPortInfo_ResponseParams;
        break;
      case kSerialPort_SetBreak_Name:
        if (message.isResponse())
          paramsClass = SerialPort_SetBreak_ResponseParams;
        break;
      case kSerialPort_ClearBreak_Name:
        if (message.isResponse())
          paramsClass = SerialPort_ClearBreak_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var SerialPort = {
    name: 'device.mojom.SerialPort',
    kVersion: 0,
    ptrClass: SerialPortPtr,
    proxyClass: SerialPortProxy,
    stubClass: SerialPortStub,
    validateRequest: validateSerialPortRequest,
    validateResponse: validateSerialPortResponse,
  };
  SerialPortStub.prototype.validator = validateSerialPortRequest;
  SerialPortProxy.prototype.validator = validateSerialPortResponse;
  var kSerialPortClient_OnReadError_Name = 0;
  var kSerialPortClient_OnSendError_Name = 1;

  function SerialPortClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SerialPortClient,
                                                   handleOrPtrInfo);
  }

  function SerialPortClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SerialPortClient, associatedInterfacePtrInfo);
  }

  SerialPortClientAssociatedPtr.prototype =
      Object.create(SerialPortClientPtr.prototype);
  SerialPortClientAssociatedPtr.prototype.constructor =
      SerialPortClientAssociatedPtr;

  function SerialPortClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  SerialPortClientPtr.prototype.onReadError = function() {
    return SerialPortClientProxy.prototype.onReadError
        .apply(this.ptr.getProxy(), arguments);
  };

  SerialPortClientProxy.prototype.onReadError = function(error) {
    var params_ = new SerialPortClient_OnReadError_Params();
    params_.error = error;
    var builder = new codec.MessageV0Builder(
        kSerialPortClient_OnReadError_Name,
        codec.align(SerialPortClient_OnReadError_Params.encodedSize));
    builder.encodeStruct(SerialPortClient_OnReadError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SerialPortClientPtr.prototype.onSendError = function() {
    return SerialPortClientProxy.prototype.onSendError
        .apply(this.ptr.getProxy(), arguments);
  };

  SerialPortClientProxy.prototype.onSendError = function(error) {
    var params_ = new SerialPortClient_OnSendError_Params();
    params_.error = error;
    var builder = new codec.MessageV0Builder(
        kSerialPortClient_OnSendError_Name,
        codec.align(SerialPortClient_OnSendError_Params.encodedSize));
    builder.encodeStruct(SerialPortClient_OnSendError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SerialPortClientStub(delegate) {
    this.delegate_ = delegate;
  }
  SerialPortClientStub.prototype.onReadError = function(error) {
    return this.delegate_ && this.delegate_.onReadError && this.delegate_.onReadError(error);
  }
  SerialPortClientStub.prototype.onSendError = function(error) {
    return this.delegate_ && this.delegate_.onSendError && this.delegate_.onSendError(error);
  }

  SerialPortClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSerialPortClient_OnReadError_Name:
      var params = reader.decodeStruct(SerialPortClient_OnReadError_Params);
      this.onReadError(params.error);
      return true;
    case kSerialPortClient_OnSendError_Name:
      var params = reader.decodeStruct(SerialPortClient_OnSendError_Params);
      this.onSendError(params.error);
      return true;
    default:
      return false;
    }
  };

  SerialPortClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSerialPortClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSerialPortClient_OnReadError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SerialPortClient_OnReadError_Params;
      break;
      case kSerialPortClient_OnSendError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SerialPortClient_OnSendError_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSerialPortClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SerialPortClient = {
    name: 'device.mojom.SerialPortClient',
    kVersion: 0,
    ptrClass: SerialPortClientPtr,
    proxyClass: SerialPortClientProxy,
    stubClass: SerialPortClientStub,
    validateRequest: validateSerialPortClientRequest,
    validateResponse: null,
  };
  SerialPortClientStub.prototype.validator = validateSerialPortClientRequest;
  SerialPortClientProxy.prototype.validator = null;

  function SerialPortConnectionWatcherPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SerialPortConnectionWatcher,
                                                   handleOrPtrInfo);
  }

  function SerialPortConnectionWatcherAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SerialPortConnectionWatcher, associatedInterfacePtrInfo);
  }

  SerialPortConnectionWatcherAssociatedPtr.prototype =
      Object.create(SerialPortConnectionWatcherPtr.prototype);
  SerialPortConnectionWatcherAssociatedPtr.prototype.constructor =
      SerialPortConnectionWatcherAssociatedPtr;

  function SerialPortConnectionWatcherProxy(receiver) {
    this.receiver_ = receiver;
  }

  function SerialPortConnectionWatcherStub(delegate) {
    this.delegate_ = delegate;
  }

  SerialPortConnectionWatcherStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  SerialPortConnectionWatcherStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSerialPortConnectionWatcherRequest(messageValidator) {
    return validator.validationError.NONE;
  }

  function validateSerialPortConnectionWatcherResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SerialPortConnectionWatcher = {
    name: 'device.mojom.SerialPortConnectionWatcher',
    kVersion: 0,
    ptrClass: SerialPortConnectionWatcherPtr,
    proxyClass: SerialPortConnectionWatcherProxy,
    stubClass: SerialPortConnectionWatcherStub,
    validateRequest: validateSerialPortConnectionWatcherRequest,
    validateResponse: null,
  };
  SerialPortConnectionWatcherStub.prototype.validator = validateSerialPortConnectionWatcherRequest;
  SerialPortConnectionWatcherProxy.prototype.validator = null;
  exports.SerialSendError = SerialSendError;
  exports.SerialReceiveError = SerialReceiveError;
  exports.SerialDataBits = SerialDataBits;
  exports.SerialParityBit = SerialParityBit;
  exports.SerialStopBits = SerialStopBits;
  exports.SerialPortInfo = SerialPortInfo;
  exports.SerialConnectionOptions = SerialConnectionOptions;
  exports.SerialConnectionInfo = SerialConnectionInfo;
  exports.SerialHostControlSignals = SerialHostControlSignals;
  exports.SerialPortControlSignals = SerialPortControlSignals;
  exports.SerialPortManager = SerialPortManager;
  exports.SerialPortManagerPtr = SerialPortManagerPtr;
  exports.SerialPortManagerAssociatedPtr = SerialPortManagerAssociatedPtr;
  exports.SerialPort = SerialPort;
  exports.SerialPortPtr = SerialPortPtr;
  exports.SerialPortAssociatedPtr = SerialPortAssociatedPtr;
  exports.SerialPortClient = SerialPortClient;
  exports.SerialPortClientPtr = SerialPortClientPtr;
  exports.SerialPortClientAssociatedPtr = SerialPortClientAssociatedPtr;
  exports.SerialPortConnectionWatcher = SerialPortConnectionWatcher;
  exports.SerialPortConnectionWatcherPtr = SerialPortConnectionWatcherPtr;
  exports.SerialPortConnectionWatcherAssociatedPtr = SerialPortConnectionWatcherAssociatedPtr;
})();