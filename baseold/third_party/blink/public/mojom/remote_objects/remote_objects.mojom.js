// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/remote_objects/remote_objects.mojom';
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
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../../mojo/public/mojom/base/string16.mojom.js');
  }


  var SingletonJavaScriptValue = {};
  SingletonJavaScriptValue.kNull = 0;
  SingletonJavaScriptValue.kUndefined = SingletonJavaScriptValue.kNull + 1;
  SingletonJavaScriptValue.MIN_VALUE = 0,
  SingletonJavaScriptValue.MAX_VALUE = 1,

  SingletonJavaScriptValue.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  SingletonJavaScriptValue.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var RemoteInvocationError = {};
  RemoteInvocationError.OK = 0;
  RemoteInvocationError.METHOD_NOT_FOUND = RemoteInvocationError.OK + 1;
  RemoteInvocationError.OBJECT_GET_CLASS_BLOCKED = RemoteInvocationError.METHOD_NOT_FOUND + 1;
  RemoteInvocationError.EXCEPTION_THROWN = RemoteInvocationError.OBJECT_GET_CLASS_BLOCKED + 1;
  RemoteInvocationError.MIN_VALUE = 0,
  RemoteInvocationError.MAX_VALUE = 3,

  RemoteInvocationError.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  RemoteInvocationError.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function RemoteInvocationResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RemoteInvocationResult.prototype.initDefaults_ = function() {
    this.error = RemoteInvocationError.OK;
    this.value = null;
  };
  RemoteInvocationResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RemoteInvocationResult.validate = function(messageValidator, offset) {
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


    // validate RemoteInvocationResult.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, RemoteInvocationError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RemoteInvocationResult.value
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, RemoteInvocationResultValue, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RemoteInvocationResult.encodedSize = codec.kStructHeaderSize + 24;

  RemoteInvocationResult.decode = function(decoder) {
    var packed;
    var val = new RemoteInvocationResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.value = decoder.decodeStruct(RemoteInvocationResultValue);
    return val;
  };

  RemoteInvocationResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RemoteInvocationResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(RemoteInvocationResultValue, val.value);
  };
  function RemoteObjectHost_GetObject_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RemoteObjectHost_GetObject_Params.prototype.initDefaults_ = function() {
    this.objectId = 0;
    this.request = new bindings.InterfaceRequest();
  };
  RemoteObjectHost_GetObject_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RemoteObjectHost_GetObject_Params.validate = function(messageValidator, offset) {
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



    // validate RemoteObjectHost_GetObject_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RemoteObjectHost_GetObject_Params.encodedSize = codec.kStructHeaderSize + 8;

  RemoteObjectHost_GetObject_Params.decode = function(decoder) {
    var packed;
    var val = new RemoteObjectHost_GetObject_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.objectId = decoder.decodeStruct(codec.Int32);
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    return val;
  };

  RemoteObjectHost_GetObject_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RemoteObjectHost_GetObject_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.objectId);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
  };
  function RemoteObjectHost_ReleaseObject_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RemoteObjectHost_ReleaseObject_Params.prototype.initDefaults_ = function() {
    this.objectId = 0;
  };
  RemoteObjectHost_ReleaseObject_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RemoteObjectHost_ReleaseObject_Params.validate = function(messageValidator, offset) {
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

  RemoteObjectHost_ReleaseObject_Params.encodedSize = codec.kStructHeaderSize + 8;

  RemoteObjectHost_ReleaseObject_Params.decode = function(decoder) {
    var packed;
    var val = new RemoteObjectHost_ReleaseObject_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.objectId = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RemoteObjectHost_ReleaseObject_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RemoteObjectHost_ReleaseObject_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.objectId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function RemoteObject_HasMethod_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RemoteObject_HasMethod_Params.prototype.initDefaults_ = function() {
    this.name = null;
  };
  RemoteObject_HasMethod_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RemoteObject_HasMethod_Params.validate = function(messageValidator, offset) {
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


    // validate RemoteObject_HasMethod_Params.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RemoteObject_HasMethod_Params.encodedSize = codec.kStructHeaderSize + 8;

  RemoteObject_HasMethod_Params.decode = function(decoder) {
    var packed;
    var val = new RemoteObject_HasMethod_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    return val;
  };

  RemoteObject_HasMethod_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RemoteObject_HasMethod_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
  };
  function RemoteObject_HasMethod_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RemoteObject_HasMethod_ResponseParams.prototype.initDefaults_ = function() {
    this.methodExists = false;
  };
  RemoteObject_HasMethod_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RemoteObject_HasMethod_ResponseParams.validate = function(messageValidator, offset) {
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

  RemoteObject_HasMethod_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  RemoteObject_HasMethod_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new RemoteObject_HasMethod_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.methodExists = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RemoteObject_HasMethod_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RemoteObject_HasMethod_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.methodExists & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function RemoteObject_GetMethods_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RemoteObject_GetMethods_Params.prototype.initDefaults_ = function() {
  };
  RemoteObject_GetMethods_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RemoteObject_GetMethods_Params.validate = function(messageValidator, offset) {
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

  RemoteObject_GetMethods_Params.encodedSize = codec.kStructHeaderSize + 0;

  RemoteObject_GetMethods_Params.decode = function(decoder) {
    var packed;
    var val = new RemoteObject_GetMethods_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  RemoteObject_GetMethods_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RemoteObject_GetMethods_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function RemoteObject_GetMethods_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RemoteObject_GetMethods_ResponseParams.prototype.initDefaults_ = function() {
    this.methodNames = null;
  };
  RemoteObject_GetMethods_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RemoteObject_GetMethods_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate RemoteObject_GetMethods_ResponseParams.methodNames
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RemoteObject_GetMethods_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  RemoteObject_GetMethods_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new RemoteObject_GetMethods_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.methodNames = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  RemoteObject_GetMethods_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RemoteObject_GetMethods_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.methodNames);
  };
  function RemoteObject_InvokeMethod_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RemoteObject_InvokeMethod_Params.prototype.initDefaults_ = function() {
    this.name = null;
    this.arguments = null;
  };
  RemoteObject_InvokeMethod_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RemoteObject_InvokeMethod_Params.validate = function(messageValidator, offset) {
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


    // validate RemoteObject_InvokeMethod_Params.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate RemoteObject_InvokeMethod_Params.arguments
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 16, RemoteInvocationArgument, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RemoteObject_InvokeMethod_Params.encodedSize = codec.kStructHeaderSize + 16;

  RemoteObject_InvokeMethod_Params.decode = function(decoder) {
    var packed;
    var val = new RemoteObject_InvokeMethod_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    val.arguments = decoder.decodeArrayPointer(RemoteInvocationArgument);
    return val;
  };

  RemoteObject_InvokeMethod_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RemoteObject_InvokeMethod_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeArrayPointer(RemoteInvocationArgument, val.arguments);
  };
  function RemoteObject_InvokeMethod_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RemoteObject_InvokeMethod_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  RemoteObject_InvokeMethod_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RemoteObject_InvokeMethod_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate RemoteObject_InvokeMethod_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, RemoteInvocationResult, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RemoteObject_InvokeMethod_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  RemoteObject_InvokeMethod_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new RemoteObject_InvokeMethod_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(RemoteInvocationResult);
    return val;
  };

  RemoteObject_InvokeMethod_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RemoteObject_InvokeMethod_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(RemoteInvocationResult, val.result);
  };

  function RemoteInvocationArgument(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  RemoteInvocationArgument.Tags = {
    numberValue: 0,
    booleanValue: 1,
    stringValue: 2,
    singletonValue: 3,
    arrayValue: 4,
  };

  RemoteInvocationArgument.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  RemoteInvocationArgument.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "numberValue",
        "booleanValue",
        "stringValue",
        "singletonValue",
        "arrayValue",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a RemoteInvocationArgument member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(RemoteInvocationArgument.prototype, "numberValue", {
    get: function() {
      if (this.$tag != RemoteInvocationArgument.Tags.numberValue) {
        throw new ReferenceError(
            "RemoteInvocationArgument.numberValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RemoteInvocationArgument.Tags.numberValue;
      this.$data = value;
    }
  });
  Object.defineProperty(RemoteInvocationArgument.prototype, "booleanValue", {
    get: function() {
      if (this.$tag != RemoteInvocationArgument.Tags.booleanValue) {
        throw new ReferenceError(
            "RemoteInvocationArgument.booleanValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RemoteInvocationArgument.Tags.booleanValue;
      this.$data = value;
    }
  });
  Object.defineProperty(RemoteInvocationArgument.prototype, "stringValue", {
    get: function() {
      if (this.$tag != RemoteInvocationArgument.Tags.stringValue) {
        throw new ReferenceError(
            "RemoteInvocationArgument.stringValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RemoteInvocationArgument.Tags.stringValue;
      this.$data = value;
    }
  });
  Object.defineProperty(RemoteInvocationArgument.prototype, "singletonValue", {
    get: function() {
      if (this.$tag != RemoteInvocationArgument.Tags.singletonValue) {
        throw new ReferenceError(
            "RemoteInvocationArgument.singletonValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RemoteInvocationArgument.Tags.singletonValue;
      this.$data = value;
    }
  });
  Object.defineProperty(RemoteInvocationArgument.prototype, "arrayValue", {
    get: function() {
      if (this.$tag != RemoteInvocationArgument.Tags.arrayValue) {
        throw new ReferenceError(
            "RemoteInvocationArgument.arrayValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RemoteInvocationArgument.Tags.arrayValue;
      this.$data = value;
    }
  });


    RemoteInvocationArgument.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case RemoteInvocationArgument.Tags.numberValue:
          encoder.encodeStruct(codec.Double, val.numberValue);
          break;
        case RemoteInvocationArgument.Tags.booleanValue:
          encoder.writeUint8(val.booleanValue ? 1 : 0);
          break;
        case RemoteInvocationArgument.Tags.stringValue:
          encoder.encodeStructPointer(string16$.String16, val.stringValue);
          break;
        case RemoteInvocationArgument.Tags.singletonValue:
          encoder.encodeStruct(codec.Int32, val.singletonValue);
          break;
        case RemoteInvocationArgument.Tags.arrayValue:
          encoder.encodeArrayPointer(RemoteInvocationArgument, val.arrayValue);
          break;
      }
      encoder.align();
    };


    RemoteInvocationArgument.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new RemoteInvocationArgument();
      var tag = decoder.readUint32();
      switch (tag) {
        case RemoteInvocationArgument.Tags.numberValue:
          result.numberValue = decoder.decodeStruct(codec.Double);
          break;
        case RemoteInvocationArgument.Tags.booleanValue:
          result.booleanValue = decoder.readUint8() ? true : false;
          break;
        case RemoteInvocationArgument.Tags.stringValue:
          result.stringValue = decoder.decodeStructPointer(string16$.String16);
          break;
        case RemoteInvocationArgument.Tags.singletonValue:
          result.singletonValue = decoder.decodeStruct(codec.Int32);
          break;
        case RemoteInvocationArgument.Tags.arrayValue:
          result.arrayValue = decoder.decodeArrayPointer(RemoteInvocationArgument);
          break;
      }
      decoder.align();

      return result;
    };


    RemoteInvocationArgument.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case RemoteInvocationArgument.Tags.numberValue:
          

          break;
        case RemoteInvocationArgument.Tags.booleanValue:
          

          break;
        case RemoteInvocationArgument.Tags.stringValue:
          

    // validate RemoteInvocationArgument.stringValue
    err = messageValidator.validateStructPointer(data_offset, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case RemoteInvocationArgument.Tags.singletonValue:
          

    // validate RemoteInvocationArgument.singletonValue
    err = messageValidator.validateEnum(data_offset, SingletonJavaScriptValue);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case RemoteInvocationArgument.Tags.arrayValue:
          

    // validate RemoteInvocationArgument.arrayValue
    err = messageValidator.validateArrayPointer(data_offset, 16, RemoteInvocationArgument, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  RemoteInvocationArgument.encodedSize = 16;

  function RemoteInvocationResultValue(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  RemoteInvocationResultValue.Tags = {
    numberValue: 0,
    booleanValue: 1,
    stringValue: 2,
    singletonValue: 3,
    objectId: 4,
  };

  RemoteInvocationResultValue.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  RemoteInvocationResultValue.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "numberValue",
        "booleanValue",
        "stringValue",
        "singletonValue",
        "objectId",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a RemoteInvocationResultValue member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(RemoteInvocationResultValue.prototype, "numberValue", {
    get: function() {
      if (this.$tag != RemoteInvocationResultValue.Tags.numberValue) {
        throw new ReferenceError(
            "RemoteInvocationResultValue.numberValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RemoteInvocationResultValue.Tags.numberValue;
      this.$data = value;
    }
  });
  Object.defineProperty(RemoteInvocationResultValue.prototype, "booleanValue", {
    get: function() {
      if (this.$tag != RemoteInvocationResultValue.Tags.booleanValue) {
        throw new ReferenceError(
            "RemoteInvocationResultValue.booleanValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RemoteInvocationResultValue.Tags.booleanValue;
      this.$data = value;
    }
  });
  Object.defineProperty(RemoteInvocationResultValue.prototype, "stringValue", {
    get: function() {
      if (this.$tag != RemoteInvocationResultValue.Tags.stringValue) {
        throw new ReferenceError(
            "RemoteInvocationResultValue.stringValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RemoteInvocationResultValue.Tags.stringValue;
      this.$data = value;
    }
  });
  Object.defineProperty(RemoteInvocationResultValue.prototype, "singletonValue", {
    get: function() {
      if (this.$tag != RemoteInvocationResultValue.Tags.singletonValue) {
        throw new ReferenceError(
            "RemoteInvocationResultValue.singletonValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RemoteInvocationResultValue.Tags.singletonValue;
      this.$data = value;
    }
  });
  Object.defineProperty(RemoteInvocationResultValue.prototype, "objectId", {
    get: function() {
      if (this.$tag != RemoteInvocationResultValue.Tags.objectId) {
        throw new ReferenceError(
            "RemoteInvocationResultValue.objectId is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RemoteInvocationResultValue.Tags.objectId;
      this.$data = value;
    }
  });


    RemoteInvocationResultValue.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case RemoteInvocationResultValue.Tags.numberValue:
          encoder.encodeStruct(codec.Double, val.numberValue);
          break;
        case RemoteInvocationResultValue.Tags.booleanValue:
          encoder.writeUint8(val.booleanValue ? 1 : 0);
          break;
        case RemoteInvocationResultValue.Tags.stringValue:
          encoder.encodeStructPointer(string16$.String16, val.stringValue);
          break;
        case RemoteInvocationResultValue.Tags.singletonValue:
          encoder.encodeStruct(codec.Int32, val.singletonValue);
          break;
        case RemoteInvocationResultValue.Tags.objectId:
          encoder.encodeStruct(codec.Int32, val.objectId);
          break;
      }
      encoder.align();
    };


    RemoteInvocationResultValue.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new RemoteInvocationResultValue();
      var tag = decoder.readUint32();
      switch (tag) {
        case RemoteInvocationResultValue.Tags.numberValue:
          result.numberValue = decoder.decodeStruct(codec.Double);
          break;
        case RemoteInvocationResultValue.Tags.booleanValue:
          result.booleanValue = decoder.readUint8() ? true : false;
          break;
        case RemoteInvocationResultValue.Tags.stringValue:
          result.stringValue = decoder.decodeStructPointer(string16$.String16);
          break;
        case RemoteInvocationResultValue.Tags.singletonValue:
          result.singletonValue = decoder.decodeStruct(codec.Int32);
          break;
        case RemoteInvocationResultValue.Tags.objectId:
          result.objectId = decoder.decodeStruct(codec.Int32);
          break;
      }
      decoder.align();

      return result;
    };


    RemoteInvocationResultValue.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case RemoteInvocationResultValue.Tags.numberValue:
          

          break;
        case RemoteInvocationResultValue.Tags.booleanValue:
          

          break;
        case RemoteInvocationResultValue.Tags.stringValue:
          

    // validate RemoteInvocationResultValue.stringValue
    err = messageValidator.validateStructPointer(data_offset, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case RemoteInvocationResultValue.Tags.singletonValue:
          

    // validate RemoteInvocationResultValue.singletonValue
    err = messageValidator.validateEnum(data_offset, SingletonJavaScriptValue);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case RemoteInvocationResultValue.Tags.objectId:
          

          break;
      }

      return validator.validationError.NONE;
    };

  RemoteInvocationResultValue.encodedSize = 16;
  var kRemoteObjectHost_GetObject_Name = 0;
  var kRemoteObjectHost_ReleaseObject_Name = 1;

  function RemoteObjectHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(RemoteObjectHost,
                                                   handleOrPtrInfo);
  }

  function RemoteObjectHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        RemoteObjectHost, associatedInterfacePtrInfo);
  }

  RemoteObjectHostAssociatedPtr.prototype =
      Object.create(RemoteObjectHostPtr.prototype);
  RemoteObjectHostAssociatedPtr.prototype.constructor =
      RemoteObjectHostAssociatedPtr;

  function RemoteObjectHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  RemoteObjectHostPtr.prototype.getObject = function() {
    return RemoteObjectHostProxy.prototype.getObject
        .apply(this.ptr.getProxy(), arguments);
  };

  RemoteObjectHostProxy.prototype.getObject = function(objectId, request) {
    var params_ = new RemoteObjectHost_GetObject_Params();
    params_.objectId = objectId;
    params_.request = request;
    var builder = new codec.MessageV0Builder(
        kRemoteObjectHost_GetObject_Name,
        codec.align(RemoteObjectHost_GetObject_Params.encodedSize));
    builder.encodeStruct(RemoteObjectHost_GetObject_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RemoteObjectHostPtr.prototype.releaseObject = function() {
    return RemoteObjectHostProxy.prototype.releaseObject
        .apply(this.ptr.getProxy(), arguments);
  };

  RemoteObjectHostProxy.prototype.releaseObject = function(objectId) {
    var params_ = new RemoteObjectHost_ReleaseObject_Params();
    params_.objectId = objectId;
    var builder = new codec.MessageV0Builder(
        kRemoteObjectHost_ReleaseObject_Name,
        codec.align(RemoteObjectHost_ReleaseObject_Params.encodedSize));
    builder.encodeStruct(RemoteObjectHost_ReleaseObject_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function RemoteObjectHostStub(delegate) {
    this.delegate_ = delegate;
  }
  RemoteObjectHostStub.prototype.getObject = function(objectId, request) {
    return this.delegate_ && this.delegate_.getObject && this.delegate_.getObject(objectId, request);
  }
  RemoteObjectHostStub.prototype.releaseObject = function(objectId) {
    return this.delegate_ && this.delegate_.releaseObject && this.delegate_.releaseObject(objectId);
  }

  RemoteObjectHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kRemoteObjectHost_GetObject_Name:
      var params = reader.decodeStruct(RemoteObjectHost_GetObject_Params);
      this.getObject(params.objectId, params.request);
      return true;
    case kRemoteObjectHost_ReleaseObject_Name:
      var params = reader.decodeStruct(RemoteObjectHost_ReleaseObject_Params);
      this.releaseObject(params.objectId);
      return true;
    default:
      return false;
    }
  };

  RemoteObjectHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateRemoteObjectHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kRemoteObjectHost_GetObject_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RemoteObjectHost_GetObject_Params;
      break;
      case kRemoteObjectHost_ReleaseObject_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RemoteObjectHost_ReleaseObject_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateRemoteObjectHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var RemoteObjectHost = {
    name: 'blink.mojom.RemoteObjectHost',
    kVersion: 0,
    ptrClass: RemoteObjectHostPtr,
    proxyClass: RemoteObjectHostProxy,
    stubClass: RemoteObjectHostStub,
    validateRequest: validateRemoteObjectHostRequest,
    validateResponse: null,
  };
  RemoteObjectHostStub.prototype.validator = validateRemoteObjectHostRequest;
  RemoteObjectHostProxy.prototype.validator = null;
  var kRemoteObject_HasMethod_Name = 0;
  var kRemoteObject_GetMethods_Name = 1;
  var kRemoteObject_InvokeMethod_Name = 2;

  function RemoteObjectPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(RemoteObject,
                                                   handleOrPtrInfo);
  }

  function RemoteObjectAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        RemoteObject, associatedInterfacePtrInfo);
  }

  RemoteObjectAssociatedPtr.prototype =
      Object.create(RemoteObjectPtr.prototype);
  RemoteObjectAssociatedPtr.prototype.constructor =
      RemoteObjectAssociatedPtr;

  function RemoteObjectProxy(receiver) {
    this.receiver_ = receiver;
  }
  RemoteObjectPtr.prototype.hasMethod = function() {
    return RemoteObjectProxy.prototype.hasMethod
        .apply(this.ptr.getProxy(), arguments);
  };

  RemoteObjectProxy.prototype.hasMethod = function(name) {
    var params_ = new RemoteObject_HasMethod_Params();
    params_.name = name;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kRemoteObject_HasMethod_Name,
          codec.align(RemoteObject_HasMethod_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(RemoteObject_HasMethod_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(RemoteObject_HasMethod_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  RemoteObjectPtr.prototype.getMethods = function() {
    return RemoteObjectProxy.prototype.getMethods
        .apply(this.ptr.getProxy(), arguments);
  };

  RemoteObjectProxy.prototype.getMethods = function() {
    var params_ = new RemoteObject_GetMethods_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kRemoteObject_GetMethods_Name,
          codec.align(RemoteObject_GetMethods_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(RemoteObject_GetMethods_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(RemoteObject_GetMethods_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  RemoteObjectPtr.prototype.invokeMethod = function() {
    return RemoteObjectProxy.prototype.invokeMethod
        .apply(this.ptr.getProxy(), arguments);
  };

  RemoteObjectProxy.prototype.invokeMethod = function(name, arguments_) {
    var params_ = new RemoteObject_InvokeMethod_Params();
    params_.name = name;
    params_.arguments = arguments_;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kRemoteObject_InvokeMethod_Name,
          codec.align(RemoteObject_InvokeMethod_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(RemoteObject_InvokeMethod_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(RemoteObject_InvokeMethod_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function RemoteObjectStub(delegate) {
    this.delegate_ = delegate;
  }
  RemoteObjectStub.prototype.hasMethod = function(name) {
    return this.delegate_ && this.delegate_.hasMethod && this.delegate_.hasMethod(name);
  }
  RemoteObjectStub.prototype.getMethods = function() {
    return this.delegate_ && this.delegate_.getMethods && this.delegate_.getMethods();
  }
  RemoteObjectStub.prototype.invokeMethod = function(name, arguments_) {
    return this.delegate_ && this.delegate_.invokeMethod && this.delegate_.invokeMethod(name, arguments_);
  }

  RemoteObjectStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  RemoteObjectStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kRemoteObject_HasMethod_Name:
      var params = reader.decodeStruct(RemoteObject_HasMethod_Params);
      this.hasMethod(params.name).then(function(response) {
        var responseParams =
            new RemoteObject_HasMethod_ResponseParams();
        responseParams.methodExists = response.methodExists;
        var builder = new codec.MessageV1Builder(
            kRemoteObject_HasMethod_Name,
            codec.align(RemoteObject_HasMethod_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(RemoteObject_HasMethod_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kRemoteObject_GetMethods_Name:
      var params = reader.decodeStruct(RemoteObject_GetMethods_Params);
      this.getMethods().then(function(response) {
        var responseParams =
            new RemoteObject_GetMethods_ResponseParams();
        responseParams.methodNames = response.methodNames;
        var builder = new codec.MessageV1Builder(
            kRemoteObject_GetMethods_Name,
            codec.align(RemoteObject_GetMethods_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(RemoteObject_GetMethods_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kRemoteObject_InvokeMethod_Name:
      var params = reader.decodeStruct(RemoteObject_InvokeMethod_Params);
      this.invokeMethod(params.name, params.arguments).then(function(response) {
        var responseParams =
            new RemoteObject_InvokeMethod_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kRemoteObject_InvokeMethod_Name,
            codec.align(RemoteObject_InvokeMethod_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(RemoteObject_InvokeMethod_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateRemoteObjectRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kRemoteObject_HasMethod_Name:
        if (message.expectsResponse())
          paramsClass = RemoteObject_HasMethod_Params;
      break;
      case kRemoteObject_GetMethods_Name:
        if (message.expectsResponse())
          paramsClass = RemoteObject_GetMethods_Params;
      break;
      case kRemoteObject_InvokeMethod_Name:
        if (message.expectsResponse())
          paramsClass = RemoteObject_InvokeMethod_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateRemoteObjectResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kRemoteObject_HasMethod_Name:
        if (message.isResponse())
          paramsClass = RemoteObject_HasMethod_ResponseParams;
        break;
      case kRemoteObject_GetMethods_Name:
        if (message.isResponse())
          paramsClass = RemoteObject_GetMethods_ResponseParams;
        break;
      case kRemoteObject_InvokeMethod_Name:
        if (message.isResponse())
          paramsClass = RemoteObject_InvokeMethod_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var RemoteObject = {
    name: 'blink.mojom.RemoteObject',
    kVersion: 0,
    ptrClass: RemoteObjectPtr,
    proxyClass: RemoteObjectProxy,
    stubClass: RemoteObjectStub,
    validateRequest: validateRemoteObjectRequest,
    validateResponse: validateRemoteObjectResponse,
  };
  RemoteObjectStub.prototype.validator = validateRemoteObjectRequest;
  RemoteObjectProxy.prototype.validator = validateRemoteObjectResponse;
  exports.SingletonJavaScriptValue = SingletonJavaScriptValue;
  exports.RemoteInvocationError = RemoteInvocationError;
  exports.RemoteInvocationResult = RemoteInvocationResult;
  exports.RemoteInvocationArgument = RemoteInvocationArgument;
  exports.RemoteInvocationResultValue = RemoteInvocationResultValue;
  exports.RemoteObjectHost = RemoteObjectHost;
  exports.RemoteObjectHostPtr = RemoteObjectHostPtr;
  exports.RemoteObjectHostAssociatedPtr = RemoteObjectHostAssociatedPtr;
  exports.RemoteObject = RemoteObject;
  exports.RemoteObjectPtr = RemoteObjectPtr;
  exports.RemoteObjectAssociatedPtr = RemoteObjectAssociatedPtr;
})();