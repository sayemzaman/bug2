// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/document_metadata/copyless_paste.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom.documentMetadata');
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function Property(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Property.prototype.initDefaults_ = function() {
    this.name = null;
    this.values = null;
  };
  Property.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Property.validate = function(messageValidator, offset) {
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


    // validate Property.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Property.values
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, Values, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Property.encodedSize = codec.kStructHeaderSize + 24;

  Property.decode = function(decoder) {
    var packed;
    var val = new Property();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    val.values = decoder.decodeStruct(Values);
    return val;
  };

  Property.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Property.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(Values, val.values);
  };
  function Entity(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Entity.prototype.initDefaults_ = function() {
    this.type = null;
    this.properties = null;
  };
  Entity.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Entity.validate = function(messageValidator, offset) {
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


    // validate Entity.type
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Entity.properties
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(Property), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Entity.encodedSize = codec.kStructHeaderSize + 16;

  Entity.decode = function(decoder) {
    var packed;
    var val = new Entity();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.String);
    val.properties = decoder.decodeArrayPointer(new codec.PointerTo(Property));
    return val;
  };

  Entity.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Entity.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.type);
    encoder.encodeArrayPointer(new codec.PointerTo(Property), val.properties);
  };
  function WebPage(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebPage.prototype.initDefaults_ = function() {
    this.url = null;
    this.title = null;
    this.entities = null;
  };
  WebPage.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebPage.validate = function(messageValidator, offset) {
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


    // validate WebPage.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebPage.title
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebPage.entities
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(Entity), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebPage.encodedSize = codec.kStructHeaderSize + 24;

  WebPage.decode = function(decoder) {
    var packed;
    var val = new WebPage();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.title = decoder.decodeStruct(codec.String);
    val.entities = decoder.decodeArrayPointer(new codec.PointerTo(Entity));
    return val;
  };

  WebPage.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebPage.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.title);
    encoder.encodeArrayPointer(new codec.PointerTo(Entity), val.entities);
  };
  function CopylessPaste_GetEntities_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CopylessPaste_GetEntities_Params.prototype.initDefaults_ = function() {
  };
  CopylessPaste_GetEntities_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CopylessPaste_GetEntities_Params.validate = function(messageValidator, offset) {
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

  CopylessPaste_GetEntities_Params.encodedSize = codec.kStructHeaderSize + 0;

  CopylessPaste_GetEntities_Params.decode = function(decoder) {
    var packed;
    var val = new CopylessPaste_GetEntities_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CopylessPaste_GetEntities_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CopylessPaste_GetEntities_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function CopylessPaste_GetEntities_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CopylessPaste_GetEntities_ResponseParams.prototype.initDefaults_ = function() {
    this.page = null;
  };
  CopylessPaste_GetEntities_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CopylessPaste_GetEntities_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CopylessPaste_GetEntities_ResponseParams.page
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, WebPage, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CopylessPaste_GetEntities_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CopylessPaste_GetEntities_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CopylessPaste_GetEntities_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.page = decoder.decodeStructPointer(WebPage);
    return val;
  };

  CopylessPaste_GetEntities_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CopylessPaste_GetEntities_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(WebPage, val.page);
  };

  function Values(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  Values.Tags = {
    boolValues: 0,
    longValues: 1,
    stringValues: 2,
    entityValues: 3,
  };

  Values.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  Values.prototype.initValue_ = function(value) {
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
        "boolValues",
        "longValues",
        "stringValues",
        "entityValues",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a Values member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(Values.prototype, "boolValues", {
    get: function() {
      if (this.$tag != Values.Tags.boolValues) {
        throw new ReferenceError(
            "Values.boolValues is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = Values.Tags.boolValues;
      this.$data = value;
    }
  });
  Object.defineProperty(Values.prototype, "longValues", {
    get: function() {
      if (this.$tag != Values.Tags.longValues) {
        throw new ReferenceError(
            "Values.longValues is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = Values.Tags.longValues;
      this.$data = value;
    }
  });
  Object.defineProperty(Values.prototype, "stringValues", {
    get: function() {
      if (this.$tag != Values.Tags.stringValues) {
        throw new ReferenceError(
            "Values.stringValues is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = Values.Tags.stringValues;
      this.$data = value;
    }
  });
  Object.defineProperty(Values.prototype, "entityValues", {
    get: function() {
      if (this.$tag != Values.Tags.entityValues) {
        throw new ReferenceError(
            "Values.entityValues is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = Values.Tags.entityValues;
      this.$data = value;
    }
  });


    Values.encode = function(encoder, val) {
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
        case Values.Tags.boolValues:
          encoder.encodeArrayPointer(codec.PackedBool, val.boolValues);
          break;
        case Values.Tags.longValues:
          encoder.encodeArrayPointer(codec.Int64, val.longValues);
          break;
        case Values.Tags.stringValues:
          encoder.encodeArrayPointer(codec.String, val.stringValues);
          break;
        case Values.Tags.entityValues:
          encoder.encodeArrayPointer(new codec.PointerTo(Entity), val.entityValues);
          break;
      }
      encoder.align();
    };


    Values.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new Values();
      var tag = decoder.readUint32();
      switch (tag) {
        case Values.Tags.boolValues:
          result.boolValues = decoder.decodeArrayPointer(codec.PackedBool);
          break;
        case Values.Tags.longValues:
          result.longValues = decoder.decodeArrayPointer(codec.Int64);
          break;
        case Values.Tags.stringValues:
          result.stringValues = decoder.decodeArrayPointer(codec.String);
          break;
        case Values.Tags.entityValues:
          result.entityValues = decoder.decodeArrayPointer(new codec.PointerTo(Entity));
          break;
      }
      decoder.align();

      return result;
    };


    Values.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case Values.Tags.boolValues:
          

    // validate Values.boolValues
    err = messageValidator.validateArrayPointer(data_offset, 1, codec.PackedBool, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case Values.Tags.longValues:
          

    // validate Values.longValues
    err = messageValidator.validateArrayPointer(data_offset, 8, codec.Int64, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case Values.Tags.stringValues:
          

    // validate Values.stringValues
    err = messageValidator.validateArrayPointer(data_offset, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case Values.Tags.entityValues:
          

    // validate Values.entityValues
    err = messageValidator.validateArrayPointer(data_offset, 8, new codec.PointerTo(Entity), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  Values.encodedSize = 16;
  var kCopylessPaste_GetEntities_Name = 0;

  function CopylessPastePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CopylessPaste,
                                                   handleOrPtrInfo);
  }

  function CopylessPasteAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CopylessPaste, associatedInterfacePtrInfo);
  }

  CopylessPasteAssociatedPtr.prototype =
      Object.create(CopylessPastePtr.prototype);
  CopylessPasteAssociatedPtr.prototype.constructor =
      CopylessPasteAssociatedPtr;

  function CopylessPasteProxy(receiver) {
    this.receiver_ = receiver;
  }
  CopylessPastePtr.prototype.getEntities = function() {
    return CopylessPasteProxy.prototype.getEntities
        .apply(this.ptr.getProxy(), arguments);
  };

  CopylessPasteProxy.prototype.getEntities = function() {
    var params_ = new CopylessPaste_GetEntities_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCopylessPaste_GetEntities_Name,
          codec.align(CopylessPaste_GetEntities_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CopylessPaste_GetEntities_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CopylessPaste_GetEntities_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function CopylessPasteStub(delegate) {
    this.delegate_ = delegate;
  }
  CopylessPasteStub.prototype.getEntities = function() {
    return this.delegate_ && this.delegate_.getEntities && this.delegate_.getEntities();
  }

  CopylessPasteStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  CopylessPasteStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCopylessPaste_GetEntities_Name:
      var params = reader.decodeStruct(CopylessPaste_GetEntities_Params);
      this.getEntities().then(function(response) {
        var responseParams =
            new CopylessPaste_GetEntities_ResponseParams();
        responseParams.page = response.page;
        var builder = new codec.MessageV1Builder(
            kCopylessPaste_GetEntities_Name,
            codec.align(CopylessPaste_GetEntities_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CopylessPaste_GetEntities_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateCopylessPasteRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCopylessPaste_GetEntities_Name:
        if (message.expectsResponse())
          paramsClass = CopylessPaste_GetEntities_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCopylessPasteResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCopylessPaste_GetEntities_Name:
        if (message.isResponse())
          paramsClass = CopylessPaste_GetEntities_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CopylessPaste = {
    name: 'blink.mojom.document_metadata.CopylessPaste',
    kVersion: 0,
    ptrClass: CopylessPastePtr,
    proxyClass: CopylessPasteProxy,
    stubClass: CopylessPasteStub,
    validateRequest: validateCopylessPasteRequest,
    validateResponse: validateCopylessPasteResponse,
  };
  CopylessPasteStub.prototype.validator = validateCopylessPasteRequest;
  CopylessPasteProxy.prototype.validator = validateCopylessPasteResponse;
  exports.Property = Property;
  exports.Entity = Entity;
  exports.WebPage = WebPage;
  exports.Values = Values;
  exports.CopylessPaste = CopylessPaste;
  exports.CopylessPastePtr = CopylessPastePtr;
  exports.CopylessPasteAssociatedPtr = CopylessPasteAssociatedPtr;
})();