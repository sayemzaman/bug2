// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/device/public/mojom/bluetooth_system.mojom';
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



  function BluetoothAddress(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothAddress.prototype.initDefaults_ = function() {
    this.address = null;
  };
  BluetoothAddress.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothAddress.validate = function(messageValidator, offset) {
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


    // validate BluetoothAddress.address
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [6], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BluetoothAddress.encodedSize = codec.kStructHeaderSize + 8;

  BluetoothAddress.decode = function(decoder) {
    var packed;
    var val = new BluetoothAddress();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.address = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  BluetoothAddress.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothAddress.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.address);
  };
  function BluetoothDeviceInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  BluetoothDeviceInfo.ConnectionState = {};
  BluetoothDeviceInfo.ConnectionState.kNotConnected = 0;
  BluetoothDeviceInfo.ConnectionState.kConnecting = BluetoothDeviceInfo.ConnectionState.kNotConnected + 1;
  BluetoothDeviceInfo.ConnectionState.kConnected = BluetoothDeviceInfo.ConnectionState.kConnecting + 1;
  BluetoothDeviceInfo.ConnectionState.MIN_VALUE = 0,
  BluetoothDeviceInfo.ConnectionState.MAX_VALUE = 2,

  BluetoothDeviceInfo.ConnectionState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  BluetoothDeviceInfo.ConnectionState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  BluetoothDeviceInfo.DeviceType = {};
  BluetoothDeviceInfo.DeviceType.kUnknown = 0;
  BluetoothDeviceInfo.DeviceType.kComputer = BluetoothDeviceInfo.DeviceType.kUnknown + 1;
  BluetoothDeviceInfo.DeviceType.kPhone = BluetoothDeviceInfo.DeviceType.kComputer + 1;
  BluetoothDeviceInfo.DeviceType.kModem = BluetoothDeviceInfo.DeviceType.kPhone + 1;
  BluetoothDeviceInfo.DeviceType.kAudio = BluetoothDeviceInfo.DeviceType.kModem + 1;
  BluetoothDeviceInfo.DeviceType.kCarAudio = BluetoothDeviceInfo.DeviceType.kAudio + 1;
  BluetoothDeviceInfo.DeviceType.kVideo = BluetoothDeviceInfo.DeviceType.kCarAudio + 1;
  BluetoothDeviceInfo.DeviceType.kPeripheral = BluetoothDeviceInfo.DeviceType.kVideo + 1;
  BluetoothDeviceInfo.DeviceType.kJoystick = BluetoothDeviceInfo.DeviceType.kPeripheral + 1;
  BluetoothDeviceInfo.DeviceType.kGamepad = BluetoothDeviceInfo.DeviceType.kJoystick + 1;
  BluetoothDeviceInfo.DeviceType.kKeyboard = BluetoothDeviceInfo.DeviceType.kGamepad + 1;
  BluetoothDeviceInfo.DeviceType.kMouse = BluetoothDeviceInfo.DeviceType.kKeyboard + 1;
  BluetoothDeviceInfo.DeviceType.kTablet = BluetoothDeviceInfo.DeviceType.kMouse + 1;
  BluetoothDeviceInfo.DeviceType.kKeyboardMouseCombo = BluetoothDeviceInfo.DeviceType.kTablet + 1;
  BluetoothDeviceInfo.DeviceType.MIN_VALUE = 0,
  BluetoothDeviceInfo.DeviceType.MAX_VALUE = 13,

  BluetoothDeviceInfo.DeviceType.isKnownEnumValue = function(value) {
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
    case 10:
    case 11:
    case 12:
    case 13:
      return true;
    }
    return false;
  };

  BluetoothDeviceInfo.DeviceType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  BluetoothDeviceInfo.prototype.initDefaults_ = function() {
    this.address = null;
    this.name = null;
    this.connectionState = 0;
    this.isPaired = false;
    this.deviceType = 0;
  };
  BluetoothDeviceInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothDeviceInfo.validate = function(messageValidator, offset) {
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


    // validate BluetoothDeviceInfo.address
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, BluetoothAddress, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BluetoothDeviceInfo.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate BluetoothDeviceInfo.connectionState
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, BluetoothDeviceInfo.ConnectionState);
    if (err !== validator.validationError.NONE)
        return err;



    // validate BluetoothDeviceInfo.deviceType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, BluetoothDeviceInfo.DeviceType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BluetoothDeviceInfo.encodedSize = codec.kStructHeaderSize + 32;

  BluetoothDeviceInfo.decode = function(decoder) {
    var packed;
    var val = new BluetoothDeviceInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.address = decoder.decodeStructPointer(BluetoothAddress);
    val.name = decoder.decodeStruct(codec.NullableString);
    val.connectionState = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.isPaired = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.deviceType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BluetoothDeviceInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothDeviceInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(BluetoothAddress, val.address);
    encoder.encodeStruct(codec.NullableString, val.name);
    encoder.encodeStruct(codec.Int32, val.connectionState);
    packed = 0;
    packed |= (val.isPaired & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.deviceType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BluetoothSystemFactory_Create_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystemFactory_Create_Params.prototype.initDefaults_ = function() {
    this.system = new bindings.InterfaceRequest();
    this.systemClient = new BluetoothSystemClientPtr();
  };
  BluetoothSystemFactory_Create_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystemFactory_Create_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BluetoothSystemFactory_Create_Params.system
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate BluetoothSystemFactory_Create_Params.systemClient
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BluetoothSystemFactory_Create_Params.encodedSize = codec.kStructHeaderSize + 16;

  BluetoothSystemFactory_Create_Params.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystemFactory_Create_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.system = decoder.decodeStruct(codec.InterfaceRequest);
    val.systemClient = decoder.decodeStruct(new codec.Interface(BluetoothSystemClientPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BluetoothSystemFactory_Create_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystemFactory_Create_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.system);
    encoder.encodeStruct(new codec.Interface(BluetoothSystemClientPtr), val.systemClient);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BluetoothSystem_GetState_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystem_GetState_Params.prototype.initDefaults_ = function() {
  };
  BluetoothSystem_GetState_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystem_GetState_Params.validate = function(messageValidator, offset) {
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

  BluetoothSystem_GetState_Params.encodedSize = codec.kStructHeaderSize + 0;

  BluetoothSystem_GetState_Params.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystem_GetState_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BluetoothSystem_GetState_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystem_GetState_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function BluetoothSystem_GetState_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystem_GetState_ResponseParams.prototype.initDefaults_ = function() {
    this.state = 0;
  };
  BluetoothSystem_GetState_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystem_GetState_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BluetoothSystem_GetState_ResponseParams.state
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BluetoothSystem.State);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BluetoothSystem_GetState_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  BluetoothSystem_GetState_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystem_GetState_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BluetoothSystem_GetState_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystem_GetState_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.state);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BluetoothSystem_SetPowered_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystem_SetPowered_Params.prototype.initDefaults_ = function() {
    this.powered = false;
  };
  BluetoothSystem_SetPowered_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystem_SetPowered_Params.validate = function(messageValidator, offset) {
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

  BluetoothSystem_SetPowered_Params.encodedSize = codec.kStructHeaderSize + 8;

  BluetoothSystem_SetPowered_Params.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystem_SetPowered_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.powered = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BluetoothSystem_SetPowered_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystem_SetPowered_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.powered & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BluetoothSystem_SetPowered_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystem_SetPowered_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  BluetoothSystem_SetPowered_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystem_SetPowered_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BluetoothSystem_SetPowered_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BluetoothSystem.SetPoweredResult);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BluetoothSystem_SetPowered_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  BluetoothSystem_SetPowered_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystem_SetPowered_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BluetoothSystem_SetPowered_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystem_SetPowered_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BluetoothSystem_GetScanState_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystem_GetScanState_Params.prototype.initDefaults_ = function() {
  };
  BluetoothSystem_GetScanState_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystem_GetScanState_Params.validate = function(messageValidator, offset) {
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

  BluetoothSystem_GetScanState_Params.encodedSize = codec.kStructHeaderSize + 0;

  BluetoothSystem_GetScanState_Params.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystem_GetScanState_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BluetoothSystem_GetScanState_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystem_GetScanState_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function BluetoothSystem_GetScanState_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystem_GetScanState_ResponseParams.prototype.initDefaults_ = function() {
    this.scanState = 0;
  };
  BluetoothSystem_GetScanState_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystem_GetScanState_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BluetoothSystem_GetScanState_ResponseParams.scanState
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BluetoothSystem.ScanState);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BluetoothSystem_GetScanState_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  BluetoothSystem_GetScanState_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystem_GetScanState_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.scanState = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BluetoothSystem_GetScanState_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystem_GetScanState_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.scanState);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BluetoothSystem_StartScan_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystem_StartScan_Params.prototype.initDefaults_ = function() {
  };
  BluetoothSystem_StartScan_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystem_StartScan_Params.validate = function(messageValidator, offset) {
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

  BluetoothSystem_StartScan_Params.encodedSize = codec.kStructHeaderSize + 0;

  BluetoothSystem_StartScan_Params.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystem_StartScan_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BluetoothSystem_StartScan_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystem_StartScan_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function BluetoothSystem_StartScan_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystem_StartScan_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  BluetoothSystem_StartScan_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystem_StartScan_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BluetoothSystem_StartScan_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BluetoothSystem.StartScanResult);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BluetoothSystem_StartScan_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  BluetoothSystem_StartScan_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystem_StartScan_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BluetoothSystem_StartScan_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystem_StartScan_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BluetoothSystem_StopScan_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystem_StopScan_Params.prototype.initDefaults_ = function() {
  };
  BluetoothSystem_StopScan_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystem_StopScan_Params.validate = function(messageValidator, offset) {
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

  BluetoothSystem_StopScan_Params.encodedSize = codec.kStructHeaderSize + 0;

  BluetoothSystem_StopScan_Params.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystem_StopScan_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BluetoothSystem_StopScan_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystem_StopScan_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function BluetoothSystem_StopScan_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystem_StopScan_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  BluetoothSystem_StopScan_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystem_StopScan_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BluetoothSystem_StopScan_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BluetoothSystem.StopScanResult);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BluetoothSystem_StopScan_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  BluetoothSystem_StopScan_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystem_StopScan_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BluetoothSystem_StopScan_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystem_StopScan_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BluetoothSystem_GetAvailableDevices_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystem_GetAvailableDevices_Params.prototype.initDefaults_ = function() {
  };
  BluetoothSystem_GetAvailableDevices_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystem_GetAvailableDevices_Params.validate = function(messageValidator, offset) {
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

  BluetoothSystem_GetAvailableDevices_Params.encodedSize = codec.kStructHeaderSize + 0;

  BluetoothSystem_GetAvailableDevices_Params.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystem_GetAvailableDevices_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BluetoothSystem_GetAvailableDevices_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystem_GetAvailableDevices_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function BluetoothSystem_GetAvailableDevices_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystem_GetAvailableDevices_ResponseParams.prototype.initDefaults_ = function() {
    this.devices = null;
  };
  BluetoothSystem_GetAvailableDevices_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystem_GetAvailableDevices_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate BluetoothSystem_GetAvailableDevices_ResponseParams.devices
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(BluetoothDeviceInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BluetoothSystem_GetAvailableDevices_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  BluetoothSystem_GetAvailableDevices_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystem_GetAvailableDevices_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.devices = decoder.decodeArrayPointer(new codec.PointerTo(BluetoothDeviceInfo));
    return val;
  };

  BluetoothSystem_GetAvailableDevices_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystem_GetAvailableDevices_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(BluetoothDeviceInfo), val.devices);
  };
  function BluetoothSystemClient_OnStateChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystemClient_OnStateChanged_Params.prototype.initDefaults_ = function() {
    this.newState = 0;
  };
  BluetoothSystemClient_OnStateChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystemClient_OnStateChanged_Params.validate = function(messageValidator, offset) {
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


    // validate BluetoothSystemClient_OnStateChanged_Params.newState
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BluetoothSystem.State);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BluetoothSystemClient_OnStateChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  BluetoothSystemClient_OnStateChanged_Params.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystemClient_OnStateChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.newState = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BluetoothSystemClient_OnStateChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystemClient_OnStateChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.newState);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function BluetoothSystemClient_OnScanStateChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BluetoothSystemClient_OnScanStateChanged_Params.prototype.initDefaults_ = function() {
    this.newState = 0;
  };
  BluetoothSystemClient_OnScanStateChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BluetoothSystemClient_OnScanStateChanged_Params.validate = function(messageValidator, offset) {
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


    // validate BluetoothSystemClient_OnScanStateChanged_Params.newState
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BluetoothSystem.ScanState);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BluetoothSystemClient_OnScanStateChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  BluetoothSystemClient_OnScanStateChanged_Params.decode = function(decoder) {
    var packed;
    var val = new BluetoothSystemClient_OnScanStateChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.newState = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BluetoothSystemClient_OnScanStateChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BluetoothSystemClient_OnScanStateChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.newState);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kBluetoothSystemFactory_Create_Name = 0;

  function BluetoothSystemFactoryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BluetoothSystemFactory,
                                                   handleOrPtrInfo);
  }

  function BluetoothSystemFactoryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BluetoothSystemFactory, associatedInterfacePtrInfo);
  }

  BluetoothSystemFactoryAssociatedPtr.prototype =
      Object.create(BluetoothSystemFactoryPtr.prototype);
  BluetoothSystemFactoryAssociatedPtr.prototype.constructor =
      BluetoothSystemFactoryAssociatedPtr;

  function BluetoothSystemFactoryProxy(receiver) {
    this.receiver_ = receiver;
  }
  BluetoothSystemFactoryPtr.prototype.create = function() {
    return BluetoothSystemFactoryProxy.prototype.create
        .apply(this.ptr.getProxy(), arguments);
  };

  BluetoothSystemFactoryProxy.prototype.create = function(system, systemClient) {
    var params_ = new BluetoothSystemFactory_Create_Params();
    params_.system = system;
    params_.systemClient = systemClient;
    var builder = new codec.MessageV0Builder(
        kBluetoothSystemFactory_Create_Name,
        codec.align(BluetoothSystemFactory_Create_Params.encodedSize));
    builder.encodeStruct(BluetoothSystemFactory_Create_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function BluetoothSystemFactoryStub(delegate) {
    this.delegate_ = delegate;
  }
  BluetoothSystemFactoryStub.prototype.create = function(system, systemClient) {
    return this.delegate_ && this.delegate_.create && this.delegate_.create(system, systemClient);
  }

  BluetoothSystemFactoryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBluetoothSystemFactory_Create_Name:
      var params = reader.decodeStruct(BluetoothSystemFactory_Create_Params);
      this.create(params.system, params.systemClient);
      return true;
    default:
      return false;
    }
  };

  BluetoothSystemFactoryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateBluetoothSystemFactoryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBluetoothSystemFactory_Create_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BluetoothSystemFactory_Create_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBluetoothSystemFactoryResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var BluetoothSystemFactory = {
    name: 'device.mojom.BluetoothSystemFactory',
    kVersion: 0,
    ptrClass: BluetoothSystemFactoryPtr,
    proxyClass: BluetoothSystemFactoryProxy,
    stubClass: BluetoothSystemFactoryStub,
    validateRequest: validateBluetoothSystemFactoryRequest,
    validateResponse: null,
  };
  BluetoothSystemFactoryStub.prototype.validator = validateBluetoothSystemFactoryRequest;
  BluetoothSystemFactoryProxy.prototype.validator = null;
  var kBluetoothSystem_GetState_Name = 0;
  var kBluetoothSystem_SetPowered_Name = 1;
  var kBluetoothSystem_GetScanState_Name = 2;
  var kBluetoothSystem_StartScan_Name = 3;
  var kBluetoothSystem_StopScan_Name = 4;
  var kBluetoothSystem_GetAvailableDevices_Name = 5;

  function BluetoothSystemPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BluetoothSystem,
                                                   handleOrPtrInfo);
  }

  function BluetoothSystemAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BluetoothSystem, associatedInterfacePtrInfo);
  }

  BluetoothSystemAssociatedPtr.prototype =
      Object.create(BluetoothSystemPtr.prototype);
  BluetoothSystemAssociatedPtr.prototype.constructor =
      BluetoothSystemAssociatedPtr;

  function BluetoothSystemProxy(receiver) {
    this.receiver_ = receiver;
  }
  BluetoothSystemPtr.prototype.getState = function() {
    return BluetoothSystemProxy.prototype.getState
        .apply(this.ptr.getProxy(), arguments);
  };

  BluetoothSystemProxy.prototype.getState = function() {
    var params_ = new BluetoothSystem_GetState_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBluetoothSystem_GetState_Name,
          codec.align(BluetoothSystem_GetState_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BluetoothSystem_GetState_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BluetoothSystem_GetState_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  BluetoothSystemPtr.prototype.setPowered = function() {
    return BluetoothSystemProxy.prototype.setPowered
        .apply(this.ptr.getProxy(), arguments);
  };

  BluetoothSystemProxy.prototype.setPowered = function(powered) {
    var params_ = new BluetoothSystem_SetPowered_Params();
    params_.powered = powered;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBluetoothSystem_SetPowered_Name,
          codec.align(BluetoothSystem_SetPowered_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BluetoothSystem_SetPowered_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BluetoothSystem_SetPowered_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  BluetoothSystemPtr.prototype.getScanState = function() {
    return BluetoothSystemProxy.prototype.getScanState
        .apply(this.ptr.getProxy(), arguments);
  };

  BluetoothSystemProxy.prototype.getScanState = function() {
    var params_ = new BluetoothSystem_GetScanState_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBluetoothSystem_GetScanState_Name,
          codec.align(BluetoothSystem_GetScanState_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BluetoothSystem_GetScanState_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BluetoothSystem_GetScanState_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  BluetoothSystemPtr.prototype.startScan = function() {
    return BluetoothSystemProxy.prototype.startScan
        .apply(this.ptr.getProxy(), arguments);
  };

  BluetoothSystemProxy.prototype.startScan = function() {
    var params_ = new BluetoothSystem_StartScan_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBluetoothSystem_StartScan_Name,
          codec.align(BluetoothSystem_StartScan_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BluetoothSystem_StartScan_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BluetoothSystem_StartScan_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  BluetoothSystemPtr.prototype.stopScan = function() {
    return BluetoothSystemProxy.prototype.stopScan
        .apply(this.ptr.getProxy(), arguments);
  };

  BluetoothSystemProxy.prototype.stopScan = function() {
    var params_ = new BluetoothSystem_StopScan_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBluetoothSystem_StopScan_Name,
          codec.align(BluetoothSystem_StopScan_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BluetoothSystem_StopScan_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BluetoothSystem_StopScan_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  BluetoothSystemPtr.prototype.getAvailableDevices = function() {
    return BluetoothSystemProxy.prototype.getAvailableDevices
        .apply(this.ptr.getProxy(), arguments);
  };

  BluetoothSystemProxy.prototype.getAvailableDevices = function() {
    var params_ = new BluetoothSystem_GetAvailableDevices_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBluetoothSystem_GetAvailableDevices_Name,
          codec.align(BluetoothSystem_GetAvailableDevices_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BluetoothSystem_GetAvailableDevices_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BluetoothSystem_GetAvailableDevices_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function BluetoothSystemStub(delegate) {
    this.delegate_ = delegate;
  }
  BluetoothSystemStub.prototype.getState = function() {
    return this.delegate_ && this.delegate_.getState && this.delegate_.getState();
  }
  BluetoothSystemStub.prototype.setPowered = function(powered) {
    return this.delegate_ && this.delegate_.setPowered && this.delegate_.setPowered(powered);
  }
  BluetoothSystemStub.prototype.getScanState = function() {
    return this.delegate_ && this.delegate_.getScanState && this.delegate_.getScanState();
  }
  BluetoothSystemStub.prototype.startScan = function() {
    return this.delegate_ && this.delegate_.startScan && this.delegate_.startScan();
  }
  BluetoothSystemStub.prototype.stopScan = function() {
    return this.delegate_ && this.delegate_.stopScan && this.delegate_.stopScan();
  }
  BluetoothSystemStub.prototype.getAvailableDevices = function() {
    return this.delegate_ && this.delegate_.getAvailableDevices && this.delegate_.getAvailableDevices();
  }

  BluetoothSystemStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  BluetoothSystemStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBluetoothSystem_GetState_Name:
      var params = reader.decodeStruct(BluetoothSystem_GetState_Params);
      this.getState().then(function(response) {
        var responseParams =
            new BluetoothSystem_GetState_ResponseParams();
        responseParams.state = response.state;
        var builder = new codec.MessageV1Builder(
            kBluetoothSystem_GetState_Name,
            codec.align(BluetoothSystem_GetState_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BluetoothSystem_GetState_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kBluetoothSystem_SetPowered_Name:
      var params = reader.decodeStruct(BluetoothSystem_SetPowered_Params);
      this.setPowered(params.powered).then(function(response) {
        var responseParams =
            new BluetoothSystem_SetPowered_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kBluetoothSystem_SetPowered_Name,
            codec.align(BluetoothSystem_SetPowered_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BluetoothSystem_SetPowered_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kBluetoothSystem_GetScanState_Name:
      var params = reader.decodeStruct(BluetoothSystem_GetScanState_Params);
      this.getScanState().then(function(response) {
        var responseParams =
            new BluetoothSystem_GetScanState_ResponseParams();
        responseParams.scanState = response.scanState;
        var builder = new codec.MessageV1Builder(
            kBluetoothSystem_GetScanState_Name,
            codec.align(BluetoothSystem_GetScanState_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BluetoothSystem_GetScanState_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kBluetoothSystem_StartScan_Name:
      var params = reader.decodeStruct(BluetoothSystem_StartScan_Params);
      this.startScan().then(function(response) {
        var responseParams =
            new BluetoothSystem_StartScan_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kBluetoothSystem_StartScan_Name,
            codec.align(BluetoothSystem_StartScan_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BluetoothSystem_StartScan_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kBluetoothSystem_StopScan_Name:
      var params = reader.decodeStruct(BluetoothSystem_StopScan_Params);
      this.stopScan().then(function(response) {
        var responseParams =
            new BluetoothSystem_StopScan_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kBluetoothSystem_StopScan_Name,
            codec.align(BluetoothSystem_StopScan_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BluetoothSystem_StopScan_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kBluetoothSystem_GetAvailableDevices_Name:
      var params = reader.decodeStruct(BluetoothSystem_GetAvailableDevices_Params);
      this.getAvailableDevices().then(function(response) {
        var responseParams =
            new BluetoothSystem_GetAvailableDevices_ResponseParams();
        responseParams.devices = response.devices;
        var builder = new codec.MessageV1Builder(
            kBluetoothSystem_GetAvailableDevices_Name,
            codec.align(BluetoothSystem_GetAvailableDevices_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BluetoothSystem_GetAvailableDevices_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateBluetoothSystemRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBluetoothSystem_GetState_Name:
        if (message.expectsResponse())
          paramsClass = BluetoothSystem_GetState_Params;
      break;
      case kBluetoothSystem_SetPowered_Name:
        if (message.expectsResponse())
          paramsClass = BluetoothSystem_SetPowered_Params;
      break;
      case kBluetoothSystem_GetScanState_Name:
        if (message.expectsResponse())
          paramsClass = BluetoothSystem_GetScanState_Params;
      break;
      case kBluetoothSystem_StartScan_Name:
        if (message.expectsResponse())
          paramsClass = BluetoothSystem_StartScan_Params;
      break;
      case kBluetoothSystem_StopScan_Name:
        if (message.expectsResponse())
          paramsClass = BluetoothSystem_StopScan_Params;
      break;
      case kBluetoothSystem_GetAvailableDevices_Name:
        if (message.expectsResponse())
          paramsClass = BluetoothSystem_GetAvailableDevices_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBluetoothSystemResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kBluetoothSystem_GetState_Name:
        if (message.isResponse())
          paramsClass = BluetoothSystem_GetState_ResponseParams;
        break;
      case kBluetoothSystem_SetPowered_Name:
        if (message.isResponse())
          paramsClass = BluetoothSystem_SetPowered_ResponseParams;
        break;
      case kBluetoothSystem_GetScanState_Name:
        if (message.isResponse())
          paramsClass = BluetoothSystem_GetScanState_ResponseParams;
        break;
      case kBluetoothSystem_StartScan_Name:
        if (message.isResponse())
          paramsClass = BluetoothSystem_StartScan_ResponseParams;
        break;
      case kBluetoothSystem_StopScan_Name:
        if (message.isResponse())
          paramsClass = BluetoothSystem_StopScan_ResponseParams;
        break;
      case kBluetoothSystem_GetAvailableDevices_Name:
        if (message.isResponse())
          paramsClass = BluetoothSystem_GetAvailableDevices_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var BluetoothSystem = {
    name: 'device.mojom.BluetoothSystem',
    kVersion: 0,
    ptrClass: BluetoothSystemPtr,
    proxyClass: BluetoothSystemProxy,
    stubClass: BluetoothSystemStub,
    validateRequest: validateBluetoothSystemRequest,
    validateResponse: validateBluetoothSystemResponse,
  };
  BluetoothSystem.State = {};
  BluetoothSystem.State.kUnsupported = 0;
  BluetoothSystem.State.kUnavailable = BluetoothSystem.State.kUnsupported + 1;
  BluetoothSystem.State.kPoweredOff = BluetoothSystem.State.kUnavailable + 1;
  BluetoothSystem.State.kTransitioning = BluetoothSystem.State.kPoweredOff + 1;
  BluetoothSystem.State.kPoweredOn = BluetoothSystem.State.kTransitioning + 1;
  BluetoothSystem.State.MIN_VALUE = 0,
  BluetoothSystem.State.MAX_VALUE = 4,

  BluetoothSystem.State.isKnownEnumValue = function(value) {
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

  BluetoothSystem.State.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  BluetoothSystem.SetPoweredResult = {};
  BluetoothSystem.SetPoweredResult.kSuccess = 0;
  BluetoothSystem.SetPoweredResult.kFailedUnknownReason = BluetoothSystem.SetPoweredResult.kSuccess + 1;
  BluetoothSystem.SetPoweredResult.kFailedBluetoothUnavailable = BluetoothSystem.SetPoweredResult.kFailedUnknownReason + 1;
  BluetoothSystem.SetPoweredResult.kFailedInProgress = BluetoothSystem.SetPoweredResult.kFailedBluetoothUnavailable + 1;
  BluetoothSystem.SetPoweredResult.MIN_VALUE = 0,
  BluetoothSystem.SetPoweredResult.MAX_VALUE = 3,

  BluetoothSystem.SetPoweredResult.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  BluetoothSystem.SetPoweredResult.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  BluetoothSystem.ScanState = {};
  BluetoothSystem.ScanState.kNotScanning = 0;
  BluetoothSystem.ScanState.kTransitioning = BluetoothSystem.ScanState.kNotScanning + 1;
  BluetoothSystem.ScanState.kScanning = BluetoothSystem.ScanState.kTransitioning + 1;
  BluetoothSystem.ScanState.MIN_VALUE = 0,
  BluetoothSystem.ScanState.MAX_VALUE = 2,

  BluetoothSystem.ScanState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  BluetoothSystem.ScanState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  BluetoothSystem.StartScanResult = {};
  BluetoothSystem.StartScanResult.kSuccess = 0;
  BluetoothSystem.StartScanResult.kFailedUnknownReason = BluetoothSystem.StartScanResult.kSuccess + 1;
  BluetoothSystem.StartScanResult.kFailedBluetoothUnavailable = BluetoothSystem.StartScanResult.kFailedUnknownReason + 1;
  BluetoothSystem.StartScanResult.MIN_VALUE = 0,
  BluetoothSystem.StartScanResult.MAX_VALUE = 2,

  BluetoothSystem.StartScanResult.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  BluetoothSystem.StartScanResult.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  BluetoothSystem.StopScanResult = {};
  BluetoothSystem.StopScanResult.kSuccess = 0;
  BluetoothSystem.StopScanResult.kFailedUnknownReason = BluetoothSystem.StopScanResult.kSuccess + 1;
  BluetoothSystem.StopScanResult.kFailedBluetoothUnavailable = BluetoothSystem.StopScanResult.kFailedUnknownReason + 1;
  BluetoothSystem.StopScanResult.MIN_VALUE = 0,
  BluetoothSystem.StopScanResult.MAX_VALUE = 2,

  BluetoothSystem.StopScanResult.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  BluetoothSystem.StopScanResult.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  BluetoothSystemStub.prototype.validator = validateBluetoothSystemRequest;
  BluetoothSystemProxy.prototype.validator = validateBluetoothSystemResponse;
  var kBluetoothSystemClient_OnStateChanged_Name = 0;
  var kBluetoothSystemClient_OnScanStateChanged_Name = 1;

  function BluetoothSystemClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BluetoothSystemClient,
                                                   handleOrPtrInfo);
  }

  function BluetoothSystemClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BluetoothSystemClient, associatedInterfacePtrInfo);
  }

  BluetoothSystemClientAssociatedPtr.prototype =
      Object.create(BluetoothSystemClientPtr.prototype);
  BluetoothSystemClientAssociatedPtr.prototype.constructor =
      BluetoothSystemClientAssociatedPtr;

  function BluetoothSystemClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  BluetoothSystemClientPtr.prototype.onStateChanged = function() {
    return BluetoothSystemClientProxy.prototype.onStateChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  BluetoothSystemClientProxy.prototype.onStateChanged = function(newState) {
    var params_ = new BluetoothSystemClient_OnStateChanged_Params();
    params_.newState = newState;
    var builder = new codec.MessageV0Builder(
        kBluetoothSystemClient_OnStateChanged_Name,
        codec.align(BluetoothSystemClient_OnStateChanged_Params.encodedSize));
    builder.encodeStruct(BluetoothSystemClient_OnStateChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BluetoothSystemClientPtr.prototype.onScanStateChanged = function() {
    return BluetoothSystemClientProxy.prototype.onScanStateChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  BluetoothSystemClientProxy.prototype.onScanStateChanged = function(newState) {
    var params_ = new BluetoothSystemClient_OnScanStateChanged_Params();
    params_.newState = newState;
    var builder = new codec.MessageV0Builder(
        kBluetoothSystemClient_OnScanStateChanged_Name,
        codec.align(BluetoothSystemClient_OnScanStateChanged_Params.encodedSize));
    builder.encodeStruct(BluetoothSystemClient_OnScanStateChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function BluetoothSystemClientStub(delegate) {
    this.delegate_ = delegate;
  }
  BluetoothSystemClientStub.prototype.onStateChanged = function(newState) {
    return this.delegate_ && this.delegate_.onStateChanged && this.delegate_.onStateChanged(newState);
  }
  BluetoothSystemClientStub.prototype.onScanStateChanged = function(newState) {
    return this.delegate_ && this.delegate_.onScanStateChanged && this.delegate_.onScanStateChanged(newState);
  }

  BluetoothSystemClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBluetoothSystemClient_OnStateChanged_Name:
      var params = reader.decodeStruct(BluetoothSystemClient_OnStateChanged_Params);
      this.onStateChanged(params.newState);
      return true;
    case kBluetoothSystemClient_OnScanStateChanged_Name:
      var params = reader.decodeStruct(BluetoothSystemClient_OnScanStateChanged_Params);
      this.onScanStateChanged(params.newState);
      return true;
    default:
      return false;
    }
  };

  BluetoothSystemClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateBluetoothSystemClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBluetoothSystemClient_OnStateChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BluetoothSystemClient_OnStateChanged_Params;
      break;
      case kBluetoothSystemClient_OnScanStateChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BluetoothSystemClient_OnScanStateChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBluetoothSystemClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var BluetoothSystemClient = {
    name: 'device.mojom.BluetoothSystemClient',
    kVersion: 0,
    ptrClass: BluetoothSystemClientPtr,
    proxyClass: BluetoothSystemClientProxy,
    stubClass: BluetoothSystemClientStub,
    validateRequest: validateBluetoothSystemClientRequest,
    validateResponse: null,
  };
  BluetoothSystemClientStub.prototype.validator = validateBluetoothSystemClientRequest;
  BluetoothSystemClientProxy.prototype.validator = null;
  exports.BluetoothAddress = BluetoothAddress;
  exports.BluetoothDeviceInfo = BluetoothDeviceInfo;
  exports.BluetoothSystemFactory = BluetoothSystemFactory;
  exports.BluetoothSystemFactoryPtr = BluetoothSystemFactoryPtr;
  exports.BluetoothSystemFactoryAssociatedPtr = BluetoothSystemFactoryAssociatedPtr;
  exports.BluetoothSystem = BluetoothSystem;
  exports.BluetoothSystemPtr = BluetoothSystemPtr;
  exports.BluetoothSystemAssociatedPtr = BluetoothSystemAssociatedPtr;
  exports.BluetoothSystemClient = BluetoothSystemClient;
  exports.BluetoothSystemClientPtr = BluetoothSystemClientPtr;
  exports.BluetoothSystemClientAssociatedPtr = BluetoothSystemClientAssociatedPtr;
})();