// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/dom_storage/storage_area.mojom';
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



  function KeyValue(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  KeyValue.prototype.initDefaults_ = function() {
    this.key = null;
    this.value = null;
  };
  KeyValue.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  KeyValue.validate = function(messageValidator, offset) {
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


    // validate KeyValue.key
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate KeyValue.value
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  KeyValue.encodedSize = codec.kStructHeaderSize + 16;

  KeyValue.decode = function(decoder) {
    var packed;
    var val = new KeyValue();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key = decoder.decodeArrayPointer(codec.Uint8);
    val.value = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  KeyValue.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(KeyValue.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.key);
    encoder.encodeArrayPointer(codec.Uint8, val.value);
  };
  function StorageAreaObserver_KeyAdded_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageAreaObserver_KeyAdded_Params.prototype.initDefaults_ = function() {
    this.key = null;
    this.value = null;
    this.source = null;
  };
  StorageAreaObserver_KeyAdded_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageAreaObserver_KeyAdded_Params.validate = function(messageValidator, offset) {
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


    // validate StorageAreaObserver_KeyAdded_Params.key
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StorageAreaObserver_KeyAdded_Params.value
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StorageAreaObserver_KeyAdded_Params.source
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StorageAreaObserver_KeyAdded_Params.encodedSize = codec.kStructHeaderSize + 24;

  StorageAreaObserver_KeyAdded_Params.decode = function(decoder) {
    var packed;
    var val = new StorageAreaObserver_KeyAdded_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key = decoder.decodeArrayPointer(codec.Uint8);
    val.value = decoder.decodeArrayPointer(codec.Uint8);
    val.source = decoder.decodeStruct(codec.String);
    return val;
  };

  StorageAreaObserver_KeyAdded_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageAreaObserver_KeyAdded_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.key);
    encoder.encodeArrayPointer(codec.Uint8, val.value);
    encoder.encodeStruct(codec.String, val.source);
  };
  function StorageAreaObserver_KeyChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageAreaObserver_KeyChanged_Params.prototype.initDefaults_ = function() {
    this.key = null;
    this.newValue = null;
    this.oldValue = null;
    this.source = null;
  };
  StorageAreaObserver_KeyChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageAreaObserver_KeyChanged_Params.validate = function(messageValidator, offset) {
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


    // validate StorageAreaObserver_KeyChanged_Params.key
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StorageAreaObserver_KeyChanged_Params.newValue
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StorageAreaObserver_KeyChanged_Params.oldValue
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StorageAreaObserver_KeyChanged_Params.source
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StorageAreaObserver_KeyChanged_Params.encodedSize = codec.kStructHeaderSize + 32;

  StorageAreaObserver_KeyChanged_Params.decode = function(decoder) {
    var packed;
    var val = new StorageAreaObserver_KeyChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key = decoder.decodeArrayPointer(codec.Uint8);
    val.newValue = decoder.decodeArrayPointer(codec.Uint8);
    val.oldValue = decoder.decodeArrayPointer(codec.Uint8);
    val.source = decoder.decodeStruct(codec.String);
    return val;
  };

  StorageAreaObserver_KeyChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageAreaObserver_KeyChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.key);
    encoder.encodeArrayPointer(codec.Uint8, val.newValue);
    encoder.encodeArrayPointer(codec.Uint8, val.oldValue);
    encoder.encodeStruct(codec.String, val.source);
  };
  function StorageAreaObserver_KeyDeleted_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageAreaObserver_KeyDeleted_Params.prototype.initDefaults_ = function() {
    this.key = null;
    this.oldValue = null;
    this.source = null;
  };
  StorageAreaObserver_KeyDeleted_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageAreaObserver_KeyDeleted_Params.validate = function(messageValidator, offset) {
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


    // validate StorageAreaObserver_KeyDeleted_Params.key
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StorageAreaObserver_KeyDeleted_Params.oldValue
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StorageAreaObserver_KeyDeleted_Params.source
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StorageAreaObserver_KeyDeleted_Params.encodedSize = codec.kStructHeaderSize + 24;

  StorageAreaObserver_KeyDeleted_Params.decode = function(decoder) {
    var packed;
    var val = new StorageAreaObserver_KeyDeleted_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key = decoder.decodeArrayPointer(codec.Uint8);
    val.oldValue = decoder.decodeArrayPointer(codec.Uint8);
    val.source = decoder.decodeStruct(codec.String);
    return val;
  };

  StorageAreaObserver_KeyDeleted_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageAreaObserver_KeyDeleted_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.key);
    encoder.encodeArrayPointer(codec.Uint8, val.oldValue);
    encoder.encodeStruct(codec.String, val.source);
  };
  function StorageAreaObserver_AllDeleted_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageAreaObserver_AllDeleted_Params.prototype.initDefaults_ = function() {
    this.source = null;
  };
  StorageAreaObserver_AllDeleted_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageAreaObserver_AllDeleted_Params.validate = function(messageValidator, offset) {
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


    // validate StorageAreaObserver_AllDeleted_Params.source
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StorageAreaObserver_AllDeleted_Params.encodedSize = codec.kStructHeaderSize + 8;

  StorageAreaObserver_AllDeleted_Params.decode = function(decoder) {
    var packed;
    var val = new StorageAreaObserver_AllDeleted_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.source = decoder.decodeStruct(codec.String);
    return val;
  };

  StorageAreaObserver_AllDeleted_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageAreaObserver_AllDeleted_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.source);
  };
  function StorageAreaObserver_ShouldSendOldValueOnMutations_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageAreaObserver_ShouldSendOldValueOnMutations_Params.prototype.initDefaults_ = function() {
    this.value = false;
  };
  StorageAreaObserver_ShouldSendOldValueOnMutations_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageAreaObserver_ShouldSendOldValueOnMutations_Params.validate = function(messageValidator, offset) {
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

  StorageAreaObserver_ShouldSendOldValueOnMutations_Params.encodedSize = codec.kStructHeaderSize + 8;

  StorageAreaObserver_ShouldSendOldValueOnMutations_Params.decode = function(decoder) {
    var packed;
    var val = new StorageAreaObserver_ShouldSendOldValueOnMutations_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.value = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  StorageAreaObserver_ShouldSendOldValueOnMutations_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageAreaObserver_ShouldSendOldValueOnMutations_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.value & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function StorageAreaGetAllCallback_Complete_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageAreaGetAllCallback_Complete_Params.prototype.initDefaults_ = function() {
    this.success = false;
  };
  StorageAreaGetAllCallback_Complete_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageAreaGetAllCallback_Complete_Params.validate = function(messageValidator, offset) {
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

  StorageAreaGetAllCallback_Complete_Params.encodedSize = codec.kStructHeaderSize + 8;

  StorageAreaGetAllCallback_Complete_Params.decode = function(decoder) {
    var packed;
    var val = new StorageAreaGetAllCallback_Complete_Params();
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

  StorageAreaGetAllCallback_Complete_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageAreaGetAllCallback_Complete_Params.encodedSize);
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
  function StorageArea_AddObserver_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageArea_AddObserver_Params.prototype.initDefaults_ = function() {
    this.observer = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  StorageArea_AddObserver_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageArea_AddObserver_Params.validate = function(messageValidator, offset) {
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


    // validate StorageArea_AddObserver_Params.observer
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StorageArea_AddObserver_Params.encodedSize = codec.kStructHeaderSize + 8;

  StorageArea_AddObserver_Params.decode = function(decoder) {
    var packed;
    var val = new StorageArea_AddObserver_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.observer = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  StorageArea_AddObserver_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageArea_AddObserver_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.observer);
  };
  function StorageArea_Put_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageArea_Put_Params.prototype.initDefaults_ = function() {
    this.key = null;
    this.value = null;
    this.clientOldValue = null;
    this.source = null;
  };
  StorageArea_Put_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageArea_Put_Params.validate = function(messageValidator, offset) {
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


    // validate StorageArea_Put_Params.key
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StorageArea_Put_Params.value
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StorageArea_Put_Params.clientOldValue
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StorageArea_Put_Params.source
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StorageArea_Put_Params.encodedSize = codec.kStructHeaderSize + 32;

  StorageArea_Put_Params.decode = function(decoder) {
    var packed;
    var val = new StorageArea_Put_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key = decoder.decodeArrayPointer(codec.Uint8);
    val.value = decoder.decodeArrayPointer(codec.Uint8);
    val.clientOldValue = decoder.decodeArrayPointer(codec.Uint8);
    val.source = decoder.decodeStruct(codec.String);
    return val;
  };

  StorageArea_Put_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageArea_Put_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.key);
    encoder.encodeArrayPointer(codec.Uint8, val.value);
    encoder.encodeArrayPointer(codec.Uint8, val.clientOldValue);
    encoder.encodeStruct(codec.String, val.source);
  };
  function StorageArea_Put_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageArea_Put_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  StorageArea_Put_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageArea_Put_ResponseParams.validate = function(messageValidator, offset) {
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

  StorageArea_Put_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  StorageArea_Put_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new StorageArea_Put_ResponseParams();
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

  StorageArea_Put_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageArea_Put_ResponseParams.encodedSize);
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
  function StorageArea_Delete_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageArea_Delete_Params.prototype.initDefaults_ = function() {
    this.key = null;
    this.clientOldValue = null;
    this.source = null;
  };
  StorageArea_Delete_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageArea_Delete_Params.validate = function(messageValidator, offset) {
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


    // validate StorageArea_Delete_Params.key
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StorageArea_Delete_Params.clientOldValue
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StorageArea_Delete_Params.source
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StorageArea_Delete_Params.encodedSize = codec.kStructHeaderSize + 24;

  StorageArea_Delete_Params.decode = function(decoder) {
    var packed;
    var val = new StorageArea_Delete_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key = decoder.decodeArrayPointer(codec.Uint8);
    val.clientOldValue = decoder.decodeArrayPointer(codec.Uint8);
    val.source = decoder.decodeStruct(codec.String);
    return val;
  };

  StorageArea_Delete_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageArea_Delete_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.key);
    encoder.encodeArrayPointer(codec.Uint8, val.clientOldValue);
    encoder.encodeStruct(codec.String, val.source);
  };
  function StorageArea_Delete_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageArea_Delete_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  StorageArea_Delete_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageArea_Delete_ResponseParams.validate = function(messageValidator, offset) {
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

  StorageArea_Delete_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  StorageArea_Delete_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new StorageArea_Delete_ResponseParams();
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

  StorageArea_Delete_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageArea_Delete_ResponseParams.encodedSize);
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
  function StorageArea_DeleteAll_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageArea_DeleteAll_Params.prototype.initDefaults_ = function() {
    this.source = null;
  };
  StorageArea_DeleteAll_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageArea_DeleteAll_Params.validate = function(messageValidator, offset) {
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


    // validate StorageArea_DeleteAll_Params.source
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StorageArea_DeleteAll_Params.encodedSize = codec.kStructHeaderSize + 8;

  StorageArea_DeleteAll_Params.decode = function(decoder) {
    var packed;
    var val = new StorageArea_DeleteAll_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.source = decoder.decodeStruct(codec.String);
    return val;
  };

  StorageArea_DeleteAll_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageArea_DeleteAll_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.source);
  };
  function StorageArea_DeleteAll_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageArea_DeleteAll_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  StorageArea_DeleteAll_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageArea_DeleteAll_ResponseParams.validate = function(messageValidator, offset) {
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

  StorageArea_DeleteAll_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  StorageArea_DeleteAll_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new StorageArea_DeleteAll_ResponseParams();
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

  StorageArea_DeleteAll_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageArea_DeleteAll_ResponseParams.encodedSize);
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
  function StorageArea_Get_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageArea_Get_Params.prototype.initDefaults_ = function() {
    this.key = null;
  };
  StorageArea_Get_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageArea_Get_Params.validate = function(messageValidator, offset) {
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


    // validate StorageArea_Get_Params.key
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StorageArea_Get_Params.encodedSize = codec.kStructHeaderSize + 8;

  StorageArea_Get_Params.decode = function(decoder) {
    var packed;
    var val = new StorageArea_Get_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  StorageArea_Get_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageArea_Get_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.key);
  };
  function StorageArea_Get_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageArea_Get_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
    this.value = null;
  };
  StorageArea_Get_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageArea_Get_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate StorageArea_Get_ResponseParams.value
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StorageArea_Get_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  StorageArea_Get_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new StorageArea_Get_ResponseParams();
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
    val.value = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  StorageArea_Get_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageArea_Get_ResponseParams.encodedSize);
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
    encoder.encodeArrayPointer(codec.Uint8, val.value);
  };
  function StorageArea_GetAll_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageArea_GetAll_Params.prototype.initDefaults_ = function() {
    this.completeCallback = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  StorageArea_GetAll_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageArea_GetAll_Params.validate = function(messageValidator, offset) {
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


    // validate StorageArea_GetAll_Params.completeCallback
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StorageArea_GetAll_Params.encodedSize = codec.kStructHeaderSize + 8;

  StorageArea_GetAll_Params.decode = function(decoder) {
    var packed;
    var val = new StorageArea_GetAll_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.completeCallback = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  StorageArea_GetAll_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageArea_GetAll_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.completeCallback);
  };
  function StorageArea_GetAll_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageArea_GetAll_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
    this.data = null;
  };
  StorageArea_GetAll_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageArea_GetAll_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate StorageArea_GetAll_ResponseParams.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(KeyValue), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StorageArea_GetAll_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  StorageArea_GetAll_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new StorageArea_GetAll_ResponseParams();
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
    val.data = decoder.decodeArrayPointer(new codec.PointerTo(KeyValue));
    return val;
  };

  StorageArea_GetAll_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageArea_GetAll_ResponseParams.encodedSize);
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
    encoder.encodeArrayPointer(new codec.PointerTo(KeyValue), val.data);
  };
  var kStorageAreaObserver_KeyAdded_Name = 0;
  var kStorageAreaObserver_KeyChanged_Name = 1;
  var kStorageAreaObserver_KeyDeleted_Name = 2;
  var kStorageAreaObserver_AllDeleted_Name = 3;
  var kStorageAreaObserver_ShouldSendOldValueOnMutations_Name = 4;

  function StorageAreaObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(StorageAreaObserver,
                                                   handleOrPtrInfo);
  }

  function StorageAreaObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        StorageAreaObserver, associatedInterfacePtrInfo);
  }

  StorageAreaObserverAssociatedPtr.prototype =
      Object.create(StorageAreaObserverPtr.prototype);
  StorageAreaObserverAssociatedPtr.prototype.constructor =
      StorageAreaObserverAssociatedPtr;

  function StorageAreaObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  StorageAreaObserverPtr.prototype.keyAdded = function() {
    return StorageAreaObserverProxy.prototype.keyAdded
        .apply(this.ptr.getProxy(), arguments);
  };

  StorageAreaObserverProxy.prototype.keyAdded = function(key, value, source) {
    var params_ = new StorageAreaObserver_KeyAdded_Params();
    params_.key = key;
    params_.value = value;
    params_.source = source;
    var builder = new codec.MessageV0Builder(
        kStorageAreaObserver_KeyAdded_Name,
        codec.align(StorageAreaObserver_KeyAdded_Params.encodedSize));
    builder.encodeStruct(StorageAreaObserver_KeyAdded_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  StorageAreaObserverPtr.prototype.keyChanged = function() {
    return StorageAreaObserverProxy.prototype.keyChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  StorageAreaObserverProxy.prototype.keyChanged = function(key, newValue, oldValue, source) {
    var params_ = new StorageAreaObserver_KeyChanged_Params();
    params_.key = key;
    params_.newValue = newValue;
    params_.oldValue = oldValue;
    params_.source = source;
    var builder = new codec.MessageV0Builder(
        kStorageAreaObserver_KeyChanged_Name,
        codec.align(StorageAreaObserver_KeyChanged_Params.encodedSize));
    builder.encodeStruct(StorageAreaObserver_KeyChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  StorageAreaObserverPtr.prototype.keyDeleted = function() {
    return StorageAreaObserverProxy.prototype.keyDeleted
        .apply(this.ptr.getProxy(), arguments);
  };

  StorageAreaObserverProxy.prototype.keyDeleted = function(key, oldValue, source) {
    var params_ = new StorageAreaObserver_KeyDeleted_Params();
    params_.key = key;
    params_.oldValue = oldValue;
    params_.source = source;
    var builder = new codec.MessageV0Builder(
        kStorageAreaObserver_KeyDeleted_Name,
        codec.align(StorageAreaObserver_KeyDeleted_Params.encodedSize));
    builder.encodeStruct(StorageAreaObserver_KeyDeleted_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  StorageAreaObserverPtr.prototype.allDeleted = function() {
    return StorageAreaObserverProxy.prototype.allDeleted
        .apply(this.ptr.getProxy(), arguments);
  };

  StorageAreaObserverProxy.prototype.allDeleted = function(source) {
    var params_ = new StorageAreaObserver_AllDeleted_Params();
    params_.source = source;
    var builder = new codec.MessageV0Builder(
        kStorageAreaObserver_AllDeleted_Name,
        codec.align(StorageAreaObserver_AllDeleted_Params.encodedSize));
    builder.encodeStruct(StorageAreaObserver_AllDeleted_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  StorageAreaObserverPtr.prototype.shouldSendOldValueOnMutations = function() {
    return StorageAreaObserverProxy.prototype.shouldSendOldValueOnMutations
        .apply(this.ptr.getProxy(), arguments);
  };

  StorageAreaObserverProxy.prototype.shouldSendOldValueOnMutations = function(value) {
    var params_ = new StorageAreaObserver_ShouldSendOldValueOnMutations_Params();
    params_.value = value;
    var builder = new codec.MessageV0Builder(
        kStorageAreaObserver_ShouldSendOldValueOnMutations_Name,
        codec.align(StorageAreaObserver_ShouldSendOldValueOnMutations_Params.encodedSize));
    builder.encodeStruct(StorageAreaObserver_ShouldSendOldValueOnMutations_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function StorageAreaObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  StorageAreaObserverStub.prototype.keyAdded = function(key, value, source) {
    return this.delegate_ && this.delegate_.keyAdded && this.delegate_.keyAdded(key, value, source);
  }
  StorageAreaObserverStub.prototype.keyChanged = function(key, newValue, oldValue, source) {
    return this.delegate_ && this.delegate_.keyChanged && this.delegate_.keyChanged(key, newValue, oldValue, source);
  }
  StorageAreaObserverStub.prototype.keyDeleted = function(key, oldValue, source) {
    return this.delegate_ && this.delegate_.keyDeleted && this.delegate_.keyDeleted(key, oldValue, source);
  }
  StorageAreaObserverStub.prototype.allDeleted = function(source) {
    return this.delegate_ && this.delegate_.allDeleted && this.delegate_.allDeleted(source);
  }
  StorageAreaObserverStub.prototype.shouldSendOldValueOnMutations = function(value) {
    return this.delegate_ && this.delegate_.shouldSendOldValueOnMutations && this.delegate_.shouldSendOldValueOnMutations(value);
  }

  StorageAreaObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kStorageAreaObserver_KeyAdded_Name:
      var params = reader.decodeStruct(StorageAreaObserver_KeyAdded_Params);
      this.keyAdded(params.key, params.value, params.source);
      return true;
    case kStorageAreaObserver_KeyChanged_Name:
      var params = reader.decodeStruct(StorageAreaObserver_KeyChanged_Params);
      this.keyChanged(params.key, params.newValue, params.oldValue, params.source);
      return true;
    case kStorageAreaObserver_KeyDeleted_Name:
      var params = reader.decodeStruct(StorageAreaObserver_KeyDeleted_Params);
      this.keyDeleted(params.key, params.oldValue, params.source);
      return true;
    case kStorageAreaObserver_AllDeleted_Name:
      var params = reader.decodeStruct(StorageAreaObserver_AllDeleted_Params);
      this.allDeleted(params.source);
      return true;
    case kStorageAreaObserver_ShouldSendOldValueOnMutations_Name:
      var params = reader.decodeStruct(StorageAreaObserver_ShouldSendOldValueOnMutations_Params);
      this.shouldSendOldValueOnMutations(params.value);
      return true;
    default:
      return false;
    }
  };

  StorageAreaObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateStorageAreaObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kStorageAreaObserver_KeyAdded_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = StorageAreaObserver_KeyAdded_Params;
      break;
      case kStorageAreaObserver_KeyChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = StorageAreaObserver_KeyChanged_Params;
      break;
      case kStorageAreaObserver_KeyDeleted_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = StorageAreaObserver_KeyDeleted_Params;
      break;
      case kStorageAreaObserver_AllDeleted_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = StorageAreaObserver_AllDeleted_Params;
      break;
      case kStorageAreaObserver_ShouldSendOldValueOnMutations_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = StorageAreaObserver_ShouldSendOldValueOnMutations_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateStorageAreaObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var StorageAreaObserver = {
    name: 'blink.mojom.StorageAreaObserver',
    kVersion: 0,
    ptrClass: StorageAreaObserverPtr,
    proxyClass: StorageAreaObserverProxy,
    stubClass: StorageAreaObserverStub,
    validateRequest: validateStorageAreaObserverRequest,
    validateResponse: null,
  };
  StorageAreaObserverStub.prototype.validator = validateStorageAreaObserverRequest;
  StorageAreaObserverProxy.prototype.validator = null;
  var kStorageAreaGetAllCallback_Complete_Name = 0;

  function StorageAreaGetAllCallbackPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(StorageAreaGetAllCallback,
                                                   handleOrPtrInfo);
  }

  function StorageAreaGetAllCallbackAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        StorageAreaGetAllCallback, associatedInterfacePtrInfo);
  }

  StorageAreaGetAllCallbackAssociatedPtr.prototype =
      Object.create(StorageAreaGetAllCallbackPtr.prototype);
  StorageAreaGetAllCallbackAssociatedPtr.prototype.constructor =
      StorageAreaGetAllCallbackAssociatedPtr;

  function StorageAreaGetAllCallbackProxy(receiver) {
    this.receiver_ = receiver;
  }
  StorageAreaGetAllCallbackPtr.prototype.complete = function() {
    return StorageAreaGetAllCallbackProxy.prototype.complete
        .apply(this.ptr.getProxy(), arguments);
  };

  StorageAreaGetAllCallbackProxy.prototype.complete = function(success) {
    var params_ = new StorageAreaGetAllCallback_Complete_Params();
    params_.success = success;
    var builder = new codec.MessageV0Builder(
        kStorageAreaGetAllCallback_Complete_Name,
        codec.align(StorageAreaGetAllCallback_Complete_Params.encodedSize));
    builder.encodeStruct(StorageAreaGetAllCallback_Complete_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function StorageAreaGetAllCallbackStub(delegate) {
    this.delegate_ = delegate;
  }
  StorageAreaGetAllCallbackStub.prototype.complete = function(success) {
    return this.delegate_ && this.delegate_.complete && this.delegate_.complete(success);
  }

  StorageAreaGetAllCallbackStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kStorageAreaGetAllCallback_Complete_Name:
      var params = reader.decodeStruct(StorageAreaGetAllCallback_Complete_Params);
      this.complete(params.success);
      return true;
    default:
      return false;
    }
  };

  StorageAreaGetAllCallbackStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateStorageAreaGetAllCallbackRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kStorageAreaGetAllCallback_Complete_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = StorageAreaGetAllCallback_Complete_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateStorageAreaGetAllCallbackResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var StorageAreaGetAllCallback = {
    name: 'blink.mojom.StorageAreaGetAllCallback',
    kVersion: 0,
    ptrClass: StorageAreaGetAllCallbackPtr,
    proxyClass: StorageAreaGetAllCallbackProxy,
    stubClass: StorageAreaGetAllCallbackStub,
    validateRequest: validateStorageAreaGetAllCallbackRequest,
    validateResponse: null,
  };
  StorageAreaGetAllCallbackStub.prototype.validator = validateStorageAreaGetAllCallbackRequest;
  StorageAreaGetAllCallbackProxy.prototype.validator = null;
  var kStorageArea_AddObserver_Name = 0;
  var kStorageArea_Put_Name = 1;
  var kStorageArea_Delete_Name = 2;
  var kStorageArea_DeleteAll_Name = 3;
  var kStorageArea_Get_Name = 4;
  var kStorageArea_GetAll_Name = 5;

  function StorageAreaPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(StorageArea,
                                                   handleOrPtrInfo);
  }

  function StorageAreaAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        StorageArea, associatedInterfacePtrInfo);
  }

  StorageAreaAssociatedPtr.prototype =
      Object.create(StorageAreaPtr.prototype);
  StorageAreaAssociatedPtr.prototype.constructor =
      StorageAreaAssociatedPtr;

  function StorageAreaProxy(receiver) {
    this.receiver_ = receiver;
  }
  StorageAreaPtr.prototype.addObserver = function() {
    return StorageAreaProxy.prototype.addObserver
        .apply(this.ptr.getProxy(), arguments);
  };

  StorageAreaProxy.prototype.addObserver = function(observer) {
    var params_ = new StorageArea_AddObserver_Params();
    params_.observer = observer;
    var builder = new codec.MessageV2Builder(
        kStorageArea_AddObserver_Name,
        codec.align(StorageArea_AddObserver_Params.encodedSize));
    builder.setPayload(StorageArea_AddObserver_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  StorageAreaPtr.prototype.put = function() {
    return StorageAreaProxy.prototype.put
        .apply(this.ptr.getProxy(), arguments);
  };

  StorageAreaProxy.prototype.put = function(key, value, clientOldValue, source) {
    var params_ = new StorageArea_Put_Params();
    params_.key = key;
    params_.value = value;
    params_.clientOldValue = clientOldValue;
    params_.source = source;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kStorageArea_Put_Name,
          codec.align(StorageArea_Put_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(StorageArea_Put_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(StorageArea_Put_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  StorageAreaPtr.prototype.delete = function() {
    return StorageAreaProxy.prototype.delete
        .apply(this.ptr.getProxy(), arguments);
  };

  StorageAreaProxy.prototype.delete = function(key, clientOldValue, source) {
    var params_ = new StorageArea_Delete_Params();
    params_.key = key;
    params_.clientOldValue = clientOldValue;
    params_.source = source;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kStorageArea_Delete_Name,
          codec.align(StorageArea_Delete_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(StorageArea_Delete_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(StorageArea_Delete_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  StorageAreaPtr.prototype.deleteAll = function() {
    return StorageAreaProxy.prototype.deleteAll
        .apply(this.ptr.getProxy(), arguments);
  };

  StorageAreaProxy.prototype.deleteAll = function(source) {
    var params_ = new StorageArea_DeleteAll_Params();
    params_.source = source;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kStorageArea_DeleteAll_Name,
          codec.align(StorageArea_DeleteAll_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(StorageArea_DeleteAll_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(StorageArea_DeleteAll_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  StorageAreaPtr.prototype.get = function() {
    return StorageAreaProxy.prototype.get
        .apply(this.ptr.getProxy(), arguments);
  };

  StorageAreaProxy.prototype.get = function(key) {
    var params_ = new StorageArea_Get_Params();
    params_.key = key;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kStorageArea_Get_Name,
          codec.align(StorageArea_Get_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(StorageArea_Get_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(StorageArea_Get_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  StorageAreaPtr.prototype.getAll = function() {
    return StorageAreaProxy.prototype.getAll
        .apply(this.ptr.getProxy(), arguments);
  };

  StorageAreaProxy.prototype.getAll = function(completeCallback) {
    var params_ = new StorageArea_GetAll_Params();
    params_.completeCallback = completeCallback;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV2Builder(
          kStorageArea_GetAll_Name,
          codec.align(StorageArea_GetAll_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.setPayload(StorageArea_GetAll_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(StorageArea_GetAll_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function StorageAreaStub(delegate) {
    this.delegate_ = delegate;
  }
  StorageAreaStub.prototype.addObserver = function(observer) {
    return this.delegate_ && this.delegate_.addObserver && this.delegate_.addObserver(observer);
  }
  StorageAreaStub.prototype.put = function(key, value, clientOldValue, source) {
    return this.delegate_ && this.delegate_.put && this.delegate_.put(key, value, clientOldValue, source);
  }
  StorageAreaStub.prototype.delete = function(key, clientOldValue, source) {
    return this.delegate_ && this.delegate_.delete && this.delegate_.delete(key, clientOldValue, source);
  }
  StorageAreaStub.prototype.deleteAll = function(source) {
    return this.delegate_ && this.delegate_.deleteAll && this.delegate_.deleteAll(source);
  }
  StorageAreaStub.prototype.get = function(key) {
    return this.delegate_ && this.delegate_.get && this.delegate_.get(key);
  }
  StorageAreaStub.prototype.getAll = function(completeCallback) {
    return this.delegate_ && this.delegate_.getAll && this.delegate_.getAll(completeCallback);
  }

  StorageAreaStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kStorageArea_AddObserver_Name:
      var params = reader.decodeStruct(StorageArea_AddObserver_Params);
      this.addObserver(params.observer);
      return true;
    default:
      return false;
    }
  };

  StorageAreaStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kStorageArea_Put_Name:
      var params = reader.decodeStruct(StorageArea_Put_Params);
      this.put(params.key, params.value, params.clientOldValue, params.source).then(function(response) {
        var responseParams =
            new StorageArea_Put_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kStorageArea_Put_Name,
            codec.align(StorageArea_Put_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(StorageArea_Put_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kStorageArea_Delete_Name:
      var params = reader.decodeStruct(StorageArea_Delete_Params);
      this.delete(params.key, params.clientOldValue, params.source).then(function(response) {
        var responseParams =
            new StorageArea_Delete_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kStorageArea_Delete_Name,
            codec.align(StorageArea_Delete_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(StorageArea_Delete_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kStorageArea_DeleteAll_Name:
      var params = reader.decodeStruct(StorageArea_DeleteAll_Params);
      this.deleteAll(params.source).then(function(response) {
        var responseParams =
            new StorageArea_DeleteAll_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kStorageArea_DeleteAll_Name,
            codec.align(StorageArea_DeleteAll_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(StorageArea_DeleteAll_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kStorageArea_Get_Name:
      var params = reader.decodeStruct(StorageArea_Get_Params);
      this.get(params.key).then(function(response) {
        var responseParams =
            new StorageArea_Get_ResponseParams();
        responseParams.success = response.success;
        responseParams.value = response.value;
        var builder = new codec.MessageV1Builder(
            kStorageArea_Get_Name,
            codec.align(StorageArea_Get_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(StorageArea_Get_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kStorageArea_GetAll_Name:
      var params = reader.decodeStruct(StorageArea_GetAll_Params);
      this.getAll(params.completeCallback).then(function(response) {
        var responseParams =
            new StorageArea_GetAll_ResponseParams();
        responseParams.success = response.success;
        responseParams.data = response.data;
        var builder = new codec.MessageV2Builder(
            kStorageArea_GetAll_Name,
            codec.align(StorageArea_GetAll_ResponseParams
                .encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.setPayload(StorageArea_GetAll_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateStorageAreaRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kStorageArea_AddObserver_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = StorageArea_AddObserver_Params;
      break;
      case kStorageArea_Put_Name:
        if (message.expectsResponse())
          paramsClass = StorageArea_Put_Params;
      break;
      case kStorageArea_Delete_Name:
        if (message.expectsResponse())
          paramsClass = StorageArea_Delete_Params;
      break;
      case kStorageArea_DeleteAll_Name:
        if (message.expectsResponse())
          paramsClass = StorageArea_DeleteAll_Params;
      break;
      case kStorageArea_Get_Name:
        if (message.expectsResponse())
          paramsClass = StorageArea_Get_Params;
      break;
      case kStorageArea_GetAll_Name:
        if (message.expectsResponse())
          paramsClass = StorageArea_GetAll_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateStorageAreaResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kStorageArea_Put_Name:
        if (message.isResponse())
          paramsClass = StorageArea_Put_ResponseParams;
        break;
      case kStorageArea_Delete_Name:
        if (message.isResponse())
          paramsClass = StorageArea_Delete_ResponseParams;
        break;
      case kStorageArea_DeleteAll_Name:
        if (message.isResponse())
          paramsClass = StorageArea_DeleteAll_ResponseParams;
        break;
      case kStorageArea_Get_Name:
        if (message.isResponse())
          paramsClass = StorageArea_Get_ResponseParams;
        break;
      case kStorageArea_GetAll_Name:
        if (message.isResponse())
          paramsClass = StorageArea_GetAll_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var StorageArea = {
    name: 'blink.mojom.StorageArea',
    kVersion: 0,
    ptrClass: StorageAreaPtr,
    proxyClass: StorageAreaProxy,
    stubClass: StorageAreaStub,
    validateRequest: validateStorageAreaRequest,
    validateResponse: validateStorageAreaResponse,
  };
  StorageArea.kPerStorageAreaQuota = 10485760,
  StorageArea.kPerStorageAreaOverQuotaAllowance = 102400,
  StorageAreaStub.prototype.validator = validateStorageAreaRequest;
  StorageAreaProxy.prototype.validator = validateStorageAreaResponse;
  exports.KeyValue = KeyValue;
  exports.StorageAreaObserver = StorageAreaObserver;
  exports.StorageAreaObserverPtr = StorageAreaObserverPtr;
  exports.StorageAreaObserverAssociatedPtr = StorageAreaObserverAssociatedPtr;
  exports.StorageAreaGetAllCallback = StorageAreaGetAllCallback;
  exports.StorageAreaGetAllCallbackPtr = StorageAreaGetAllCallbackPtr;
  exports.StorageAreaGetAllCallbackAssociatedPtr = StorageAreaGetAllCallbackAssociatedPtr;
  exports.StorageArea = StorageArea;
  exports.StorageAreaPtr = StorageAreaPtr;
  exports.StorageAreaAssociatedPtr = StorageAreaAssociatedPtr;
})();