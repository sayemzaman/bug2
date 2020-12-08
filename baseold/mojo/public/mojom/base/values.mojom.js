// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'mojo/public/mojom/base/values.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojoBase.mojom');



  function DictionaryValue(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DictionaryValue.prototype.initDefaults_ = function() {
    this.storage = null;
  };
  DictionaryValue.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DictionaryValue.validate = function(messageValidator, offset) {
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


    // validate DictionaryValue.storage
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, Value, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DictionaryValue.encodedSize = codec.kStructHeaderSize + 8;

  DictionaryValue.decode = function(decoder) {
    var packed;
    var val = new DictionaryValue();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.storage = decoder.decodeMapPointer(codec.String, Value);
    return val;
  };

  DictionaryValue.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DictionaryValue.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, Value, val.storage);
  };
  function ListValue(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ListValue.prototype.initDefaults_ = function() {
    this.storage = null;
  };
  ListValue.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ListValue.validate = function(messageValidator, offset) {
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


    // validate ListValue.storage
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 16, Value, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ListValue.encodedSize = codec.kStructHeaderSize + 8;

  ListValue.decode = function(decoder) {
    var packed;
    var val = new ListValue();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.storage = decoder.decodeArrayPointer(Value);
    return val;
  };

  ListValue.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ListValue.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(Value, val.storage);
  };

  function Value(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  Value.Tags = {
    nullValue: 0,
    boolValue: 1,
    intValue: 2,
    doubleValue: 3,
    stringValue: 4,
    binaryValue: 5,
    dictionaryValue: 6,
    listValue: 7,
  };

  Value.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  Value.prototype.initValue_ = function(value) {
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
        "nullValue",
        "boolValue",
        "intValue",
        "doubleValue",
        "stringValue",
        "binaryValue",
        "dictionaryValue",
        "listValue",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a Value member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(Value.prototype, "nullValue", {
    get: function() {
      if (this.$tag != Value.Tags.nullValue) {
        throw new ReferenceError(
            "Value.nullValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = Value.Tags.nullValue;
      this.$data = value;
    }
  });
  Object.defineProperty(Value.prototype, "boolValue", {
    get: function() {
      if (this.$tag != Value.Tags.boolValue) {
        throw new ReferenceError(
            "Value.boolValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = Value.Tags.boolValue;
      this.$data = value;
    }
  });
  Object.defineProperty(Value.prototype, "intValue", {
    get: function() {
      if (this.$tag != Value.Tags.intValue) {
        throw new ReferenceError(
            "Value.intValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = Value.Tags.intValue;
      this.$data = value;
    }
  });
  Object.defineProperty(Value.prototype, "doubleValue", {
    get: function() {
      if (this.$tag != Value.Tags.doubleValue) {
        throw new ReferenceError(
            "Value.doubleValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = Value.Tags.doubleValue;
      this.$data = value;
    }
  });
  Object.defineProperty(Value.prototype, "stringValue", {
    get: function() {
      if (this.$tag != Value.Tags.stringValue) {
        throw new ReferenceError(
            "Value.stringValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = Value.Tags.stringValue;
      this.$data = value;
    }
  });
  Object.defineProperty(Value.prototype, "binaryValue", {
    get: function() {
      if (this.$tag != Value.Tags.binaryValue) {
        throw new ReferenceError(
            "Value.binaryValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = Value.Tags.binaryValue;
      this.$data = value;
    }
  });
  Object.defineProperty(Value.prototype, "dictionaryValue", {
    get: function() {
      if (this.$tag != Value.Tags.dictionaryValue) {
        throw new ReferenceError(
            "Value.dictionaryValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = Value.Tags.dictionaryValue;
      this.$data = value;
    }
  });
  Object.defineProperty(Value.prototype, "listValue", {
    get: function() {
      if (this.$tag != Value.Tags.listValue) {
        throw new ReferenceError(
            "Value.listValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = Value.Tags.listValue;
      this.$data = value;
    }
  });


    Value.encode = function(encoder, val) {
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
        case Value.Tags.nullValue:
          encoder.encodeStruct(codec.Uint8, val.nullValue);
          break;
        case Value.Tags.boolValue:
          encoder.writeUint8(val.boolValue ? 1 : 0);
          break;
        case Value.Tags.intValue:
          encoder.encodeStruct(codec.Int32, val.intValue);
          break;
        case Value.Tags.doubleValue:
          encoder.encodeStruct(codec.Double, val.doubleValue);
          break;
        case Value.Tags.stringValue:
          encoder.encodeStruct(codec.String, val.stringValue);
          break;
        case Value.Tags.binaryValue:
          encoder.encodeArrayPointer(codec.Uint8, val.binaryValue);
          break;
        case Value.Tags.dictionaryValue:
          encoder.encodeStructPointer(DictionaryValue, val.dictionaryValue);
          break;
        case Value.Tags.listValue:
          encoder.encodeStructPointer(ListValue, val.listValue);
          break;
      }
      encoder.align();
    };


    Value.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new Value();
      var tag = decoder.readUint32();
      switch (tag) {
        case Value.Tags.nullValue:
          result.nullValue = decoder.decodeStruct(codec.Uint8);
          break;
        case Value.Tags.boolValue:
          result.boolValue = decoder.readUint8() ? true : false;
          break;
        case Value.Tags.intValue:
          result.intValue = decoder.decodeStruct(codec.Int32);
          break;
        case Value.Tags.doubleValue:
          result.doubleValue = decoder.decodeStruct(codec.Double);
          break;
        case Value.Tags.stringValue:
          result.stringValue = decoder.decodeStruct(codec.String);
          break;
        case Value.Tags.binaryValue:
          result.binaryValue = decoder.decodeArrayPointer(codec.Uint8);
          break;
        case Value.Tags.dictionaryValue:
          result.dictionaryValue = decoder.decodeStructPointer(DictionaryValue);
          break;
        case Value.Tags.listValue:
          result.listValue = decoder.decodeStructPointer(ListValue);
          break;
      }
      decoder.align();

      return result;
    };


    Value.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case Value.Tags.nullValue:
          

          break;
        case Value.Tags.boolValue:
          

          break;
        case Value.Tags.intValue:
          

          break;
        case Value.Tags.doubleValue:
          

          break;
        case Value.Tags.stringValue:
          

    // validate Value.stringValue
    err = messageValidator.validateStringPointer(data_offset, false)
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case Value.Tags.binaryValue:
          

    // validate Value.binaryValue
    err = messageValidator.validateArrayPointer(data_offset, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case Value.Tags.dictionaryValue:
          

    // validate Value.dictionaryValue
    err = messageValidator.validateStructPointer(data_offset, DictionaryValue, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case Value.Tags.listValue:
          

    // validate Value.listValue
    err = messageValidator.validateStructPointer(data_offset, ListValue, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  Value.encodedSize = 16;
  exports.DictionaryValue = DictionaryValue;
  exports.ListValue = ListValue;
  exports.Value = Value;
})();