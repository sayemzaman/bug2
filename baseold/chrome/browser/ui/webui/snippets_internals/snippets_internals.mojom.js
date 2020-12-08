// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/ui/webui/snippets_internals/snippets_internals.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('snippetsInternals.mojom');



  function SuggestionCategory(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SuggestionCategory.prototype.initDefaults_ = function() {
    this.categoryId = 0;
    this.categoryTitle = null;
    this.status = null;
    this.suggestions = null;
    this.dismissedSuggestions = null;
  };
  SuggestionCategory.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SuggestionCategory.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate SuggestionCategory.categoryTitle
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SuggestionCategory.status
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SuggestionCategory.suggestions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(SuggestionItem), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SuggestionCategory.dismissedSuggestions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(SuggestionItem), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SuggestionCategory.encodedSize = codec.kStructHeaderSize + 40;

  SuggestionCategory.decode = function(decoder) {
    var packed;
    var val = new SuggestionCategory();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.categoryId = decoder.decodeStruct(codec.Int64);
    val.categoryTitle = decoder.decodeStruct(codec.String);
    val.status = decoder.decodeStruct(codec.String);
    val.suggestions = decoder.decodeArrayPointer(new codec.PointerTo(SuggestionItem));
    val.dismissedSuggestions = decoder.decodeArrayPointer(new codec.PointerTo(SuggestionItem));
    return val;
  };

  SuggestionCategory.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SuggestionCategory.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.categoryId);
    encoder.encodeStruct(codec.String, val.categoryTitle);
    encoder.encodeStruct(codec.String, val.status);
    encoder.encodeArrayPointer(new codec.PointerTo(SuggestionItem), val.suggestions);
    encoder.encodeArrayPointer(new codec.PointerTo(SuggestionItem), val.dismissedSuggestions);
  };
  function SuggestionItem(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SuggestionItem.prototype.initDefaults_ = function() {
    this.suggestionTitle = null;
    this.suggestionId = null;
    this.suggestionIdWithinCategory = null;
    this.url = null;
    this.faviconUrl = null;
    this.snippet = null;
    this.publishDate = null;
    this.publisherName = null;
    this.score = 0;
  };
  SuggestionItem.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SuggestionItem.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 80}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SuggestionItem.suggestionTitle
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SuggestionItem.suggestionId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SuggestionItem.suggestionIdWithinCategory
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SuggestionItem.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SuggestionItem.faviconUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SuggestionItem.snippet
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SuggestionItem.publishDate
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SuggestionItem.publisherName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SuggestionItem.encodedSize = codec.kStructHeaderSize + 72;

  SuggestionItem.decode = function(decoder) {
    var packed;
    var val = new SuggestionItem();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.suggestionTitle = decoder.decodeStruct(codec.String);
    val.suggestionId = decoder.decodeStruct(codec.String);
    val.suggestionIdWithinCategory = decoder.decodeStruct(codec.String);
    val.url = decoder.decodeStruct(codec.String);
    val.faviconUrl = decoder.decodeStruct(codec.String);
    val.snippet = decoder.decodeStruct(codec.String);
    val.publishDate = decoder.decodeStruct(codec.String);
    val.publisherName = decoder.decodeStruct(codec.String);
    val.score = decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SuggestionItem.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SuggestionItem.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.suggestionTitle);
    encoder.encodeStruct(codec.String, val.suggestionId);
    encoder.encodeStruct(codec.String, val.suggestionIdWithinCategory);
    encoder.encodeStruct(codec.String, val.url);
    encoder.encodeStruct(codec.String, val.faviconUrl);
    encoder.encodeStruct(codec.String, val.snippet);
    encoder.encodeStruct(codec.String, val.publishDate);
    encoder.encodeStruct(codec.String, val.publisherName);
    encoder.encodeStruct(codec.Float, val.score);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PageHandlerFactory_CreatePageHandler_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandlerFactory_CreatePageHandler_Params.prototype.initDefaults_ = function() {
    this.page = new PagePtr();
  };
  PageHandlerFactory_CreatePageHandler_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandlerFactory_CreatePageHandler_Params.validate = function(messageValidator, offset) {
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


    // validate PageHandlerFactory_CreatePageHandler_Params.page
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandlerFactory_CreatePageHandler_Params.encodedSize = codec.kStructHeaderSize + 8;

  PageHandlerFactory_CreatePageHandler_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandlerFactory_CreatePageHandler_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.page = decoder.decodeStruct(new codec.Interface(PagePtr));
    return val;
  };

  PageHandlerFactory_CreatePageHandler_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandlerFactory_CreatePageHandler_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(PagePtr), val.page);
  };
  function PageHandlerFactory_CreatePageHandler_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandlerFactory_CreatePageHandler_ResponseParams.prototype.initDefaults_ = function() {
    this.handler = new PageHandlerPtr();
  };
  PageHandlerFactory_CreatePageHandler_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandlerFactory_CreatePageHandler_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandlerFactory_CreatePageHandler_ResponseParams.handler
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandlerFactory_CreatePageHandler_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandlerFactory_CreatePageHandler_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandlerFactory_CreatePageHandler_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.handler = decoder.decodeStruct(new codec.Interface(PageHandlerPtr));
    return val;
  };

  PageHandlerFactory_CreatePageHandler_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandlerFactory_CreatePageHandler_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(PageHandlerPtr), val.handler);
  };
  function PageHandler_GetGeneralProperties_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetGeneralProperties_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_GetGeneralProperties_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetGeneralProperties_Params.validate = function(messageValidator, offset) {
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

  PageHandler_GetGeneralProperties_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_GetGeneralProperties_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetGeneralProperties_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_GetGeneralProperties_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetGeneralProperties_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetGeneralProperties_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetGeneralProperties_ResponseParams.prototype.initDefaults_ = function() {
    this.properties = null;
  };
  PageHandler_GetGeneralProperties_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetGeneralProperties_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandler_GetGeneralProperties_ResponseParams.properties
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetGeneralProperties_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_GetGeneralProperties_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetGeneralProperties_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.properties = decoder.decodeMapPointer(codec.String, codec.String);
    return val;
  };

  PageHandler_GetGeneralProperties_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetGeneralProperties_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, codec.String, val.properties);
  };
  function PageHandler_GetUserClassifierProperties_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetUserClassifierProperties_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_GetUserClassifierProperties_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetUserClassifierProperties_Params.validate = function(messageValidator, offset) {
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

  PageHandler_GetUserClassifierProperties_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_GetUserClassifierProperties_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetUserClassifierProperties_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_GetUserClassifierProperties_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetUserClassifierProperties_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetUserClassifierProperties_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetUserClassifierProperties_ResponseParams.prototype.initDefaults_ = function() {
    this.properties = null;
  };
  PageHandler_GetUserClassifierProperties_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetUserClassifierProperties_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandler_GetUserClassifierProperties_ResponseParams.properties
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetUserClassifierProperties_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_GetUserClassifierProperties_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetUserClassifierProperties_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.properties = decoder.decodeMapPointer(codec.String, codec.String);
    return val;
  };

  PageHandler_GetUserClassifierProperties_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetUserClassifierProperties_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, codec.String, val.properties);
  };
  function PageHandler_ClearUserClassifierProperties_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_ClearUserClassifierProperties_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_ClearUserClassifierProperties_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_ClearUserClassifierProperties_Params.validate = function(messageValidator, offset) {
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

  PageHandler_ClearUserClassifierProperties_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_ClearUserClassifierProperties_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_ClearUserClassifierProperties_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_ClearUserClassifierProperties_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_ClearUserClassifierProperties_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetCategoryRankerProperties_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetCategoryRankerProperties_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_GetCategoryRankerProperties_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetCategoryRankerProperties_Params.validate = function(messageValidator, offset) {
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

  PageHandler_GetCategoryRankerProperties_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_GetCategoryRankerProperties_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetCategoryRankerProperties_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_GetCategoryRankerProperties_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetCategoryRankerProperties_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetCategoryRankerProperties_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetCategoryRankerProperties_ResponseParams.prototype.initDefaults_ = function() {
    this.properties = null;
  };
  PageHandler_GetCategoryRankerProperties_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetCategoryRankerProperties_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandler_GetCategoryRankerProperties_ResponseParams.properties
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetCategoryRankerProperties_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_GetCategoryRankerProperties_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetCategoryRankerProperties_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.properties = decoder.decodeMapPointer(codec.String, codec.String);
    return val;
  };

  PageHandler_GetCategoryRankerProperties_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetCategoryRankerProperties_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, codec.String, val.properties);
  };
  function PageHandler_ReloadSuggestions_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_ReloadSuggestions_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_ReloadSuggestions_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_ReloadSuggestions_Params.validate = function(messageValidator, offset) {
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

  PageHandler_ReloadSuggestions_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_ReloadSuggestions_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_ReloadSuggestions_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_ReloadSuggestions_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_ReloadSuggestions_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_ClearCachedSuggestions_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_ClearCachedSuggestions_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_ClearCachedSuggestions_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_ClearCachedSuggestions_Params.validate = function(messageValidator, offset) {
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

  PageHandler_ClearCachedSuggestions_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_ClearCachedSuggestions_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_ClearCachedSuggestions_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_ClearCachedSuggestions_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_ClearCachedSuggestions_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetRemoteContentSuggestionsProperties_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetRemoteContentSuggestionsProperties_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_GetRemoteContentSuggestionsProperties_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetRemoteContentSuggestionsProperties_Params.validate = function(messageValidator, offset) {
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

  PageHandler_GetRemoteContentSuggestionsProperties_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_GetRemoteContentSuggestionsProperties_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetRemoteContentSuggestionsProperties_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_GetRemoteContentSuggestionsProperties_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetRemoteContentSuggestionsProperties_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams.prototype.initDefaults_ = function() {
    this.properties = null;
  };
  PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams.properties
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.properties = decoder.decodeMapPointer(codec.String, codec.String);
    return val;
  };

  PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, codec.String, val.properties);
  };
  function PageHandler_FetchSuggestionsInBackground_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_FetchSuggestionsInBackground_Params.prototype.initDefaults_ = function() {
    this.delaySeconds = 0;
  };
  PageHandler_FetchSuggestionsInBackground_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_FetchSuggestionsInBackground_Params.validate = function(messageValidator, offset) {
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

  PageHandler_FetchSuggestionsInBackground_Params.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_FetchSuggestionsInBackground_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_FetchSuggestionsInBackground_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.delaySeconds = decoder.decodeStruct(codec.Int64);
    return val;
  };

  PageHandler_FetchSuggestionsInBackground_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_FetchSuggestionsInBackground_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.delaySeconds);
  };
  function PageHandler_FetchSuggestionsInBackground_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_FetchSuggestionsInBackground_ResponseParams.prototype.initDefaults_ = function() {
  };
  PageHandler_FetchSuggestionsInBackground_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_FetchSuggestionsInBackground_ResponseParams.validate = function(messageValidator, offset) {
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

  PageHandler_FetchSuggestionsInBackground_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_FetchSuggestionsInBackground_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_FetchSuggestionsInBackground_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_FetchSuggestionsInBackground_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_FetchSuggestionsInBackground_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetLastJson_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetLastJson_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_GetLastJson_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetLastJson_Params.validate = function(messageValidator, offset) {
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

  PageHandler_GetLastJson_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_GetLastJson_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetLastJson_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_GetLastJson_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetLastJson_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetLastJson_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetLastJson_ResponseParams.prototype.initDefaults_ = function() {
    this.json = null;
  };
  PageHandler_GetLastJson_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetLastJson_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandler_GetLastJson_ResponseParams.json
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetLastJson_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_GetLastJson_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetLastJson_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.json = decoder.decodeStruct(codec.String);
    return val;
  };

  PageHandler_GetLastJson_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetLastJson_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.json);
  };
  function PageHandler_GetSuggestionsByCategory_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetSuggestionsByCategory_Params.prototype.initDefaults_ = function() {
  };
  PageHandler_GetSuggestionsByCategory_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetSuggestionsByCategory_Params.validate = function(messageValidator, offset) {
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

  PageHandler_GetSuggestionsByCategory_Params.encodedSize = codec.kStructHeaderSize + 0;

  PageHandler_GetSuggestionsByCategory_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetSuggestionsByCategory_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageHandler_GetSuggestionsByCategory_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetSuggestionsByCategory_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PageHandler_GetSuggestionsByCategory_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_GetSuggestionsByCategory_ResponseParams.prototype.initDefaults_ = function() {
    this.categories = null;
  };
  PageHandler_GetSuggestionsByCategory_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_GetSuggestionsByCategory_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PageHandler_GetSuggestionsByCategory_ResponseParams.categories
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(SuggestionCategory), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageHandler_GetSuggestionsByCategory_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_GetSuggestionsByCategory_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageHandler_GetSuggestionsByCategory_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.categories = decoder.decodeArrayPointer(new codec.PointerTo(SuggestionCategory));
    return val;
  };

  PageHandler_GetSuggestionsByCategory_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_GetSuggestionsByCategory_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(SuggestionCategory), val.categories);
  };
  function PageHandler_ClearDismissedSuggestions_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageHandler_ClearDismissedSuggestions_Params.prototype.initDefaults_ = function() {
    this.category = 0;
  };
  PageHandler_ClearDismissedSuggestions_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageHandler_ClearDismissedSuggestions_Params.validate = function(messageValidator, offset) {
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

  PageHandler_ClearDismissedSuggestions_Params.encodedSize = codec.kStructHeaderSize + 8;

  PageHandler_ClearDismissedSuggestions_Params.decode = function(decoder) {
    var packed;
    var val = new PageHandler_ClearDismissedSuggestions_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.category = decoder.decodeStruct(codec.Int64);
    return val;
  };

  PageHandler_ClearDismissedSuggestions_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageHandler_ClearDismissedSuggestions_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.category);
  };
  function Page_OnSuggestionsChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Page_OnSuggestionsChanged_Params.prototype.initDefaults_ = function() {
  };
  Page_OnSuggestionsChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Page_OnSuggestionsChanged_Params.validate = function(messageValidator, offset) {
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

  Page_OnSuggestionsChanged_Params.encodedSize = codec.kStructHeaderSize + 0;

  Page_OnSuggestionsChanged_Params.decode = function(decoder) {
    var packed;
    var val = new Page_OnSuggestionsChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Page_OnSuggestionsChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Page_OnSuggestionsChanged_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kPageHandlerFactory_CreatePageHandler_Name = 0;

  function PageHandlerFactoryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PageHandlerFactory,
                                                   handleOrPtrInfo);
  }

  function PageHandlerFactoryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PageHandlerFactory, associatedInterfacePtrInfo);
  }

  PageHandlerFactoryAssociatedPtr.prototype =
      Object.create(PageHandlerFactoryPtr.prototype);
  PageHandlerFactoryAssociatedPtr.prototype.constructor =
      PageHandlerFactoryAssociatedPtr;

  function PageHandlerFactoryProxy(receiver) {
    this.receiver_ = receiver;
  }
  PageHandlerFactoryPtr.prototype.createPageHandler = function() {
    return PageHandlerFactoryProxy.prototype.createPageHandler
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerFactoryProxy.prototype.createPageHandler = function(page) {
    var params_ = new PageHandlerFactory_CreatePageHandler_Params();
    params_.page = page;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandlerFactory_CreatePageHandler_Name,
          codec.align(PageHandlerFactory_CreatePageHandler_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandlerFactory_CreatePageHandler_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandlerFactory_CreatePageHandler_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PageHandlerFactoryStub(delegate) {
    this.delegate_ = delegate;
  }
  PageHandlerFactoryStub.prototype.createPageHandler = function(page) {
    return this.delegate_ && this.delegate_.createPageHandler && this.delegate_.createPageHandler(page);
  }

  PageHandlerFactoryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PageHandlerFactoryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPageHandlerFactory_CreatePageHandler_Name:
      var params = reader.decodeStruct(PageHandlerFactory_CreatePageHandler_Params);
      this.createPageHandler(params.page).then(function(response) {
        var responseParams =
            new PageHandlerFactory_CreatePageHandler_ResponseParams();
        responseParams.handler = response.handler;
        var builder = new codec.MessageV1Builder(
            kPageHandlerFactory_CreatePageHandler_Name,
            codec.align(PageHandlerFactory_CreatePageHandler_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandlerFactory_CreatePageHandler_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePageHandlerFactoryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPageHandlerFactory_CreatePageHandler_Name:
        if (message.expectsResponse())
          paramsClass = PageHandlerFactory_CreatePageHandler_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePageHandlerFactoryResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPageHandlerFactory_CreatePageHandler_Name:
        if (message.isResponse())
          paramsClass = PageHandlerFactory_CreatePageHandler_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PageHandlerFactory = {
    name: 'snippets_internals.mojom.PageHandlerFactory',
    kVersion: 0,
    ptrClass: PageHandlerFactoryPtr,
    proxyClass: PageHandlerFactoryProxy,
    stubClass: PageHandlerFactoryStub,
    validateRequest: validatePageHandlerFactoryRequest,
    validateResponse: validatePageHandlerFactoryResponse,
  };
  PageHandlerFactoryStub.prototype.validator = validatePageHandlerFactoryRequest;
  PageHandlerFactoryProxy.prototype.validator = validatePageHandlerFactoryResponse;
  var kPageHandler_GetGeneralProperties_Name = 0;
  var kPageHandler_GetUserClassifierProperties_Name = 1;
  var kPageHandler_ClearUserClassifierProperties_Name = 2;
  var kPageHandler_GetCategoryRankerProperties_Name = 3;
  var kPageHandler_ReloadSuggestions_Name = 4;
  var kPageHandler_ClearCachedSuggestions_Name = 5;
  var kPageHandler_GetRemoteContentSuggestionsProperties_Name = 6;
  var kPageHandler_FetchSuggestionsInBackground_Name = 7;
  var kPageHandler_GetLastJson_Name = 8;
  var kPageHandler_GetSuggestionsByCategory_Name = 9;
  var kPageHandler_ClearDismissedSuggestions_Name = 10;

  function PageHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PageHandler,
                                                   handleOrPtrInfo);
  }

  function PageHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PageHandler, associatedInterfacePtrInfo);
  }

  PageHandlerAssociatedPtr.prototype =
      Object.create(PageHandlerPtr.prototype);
  PageHandlerAssociatedPtr.prototype.constructor =
      PageHandlerAssociatedPtr;

  function PageHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  PageHandlerPtr.prototype.getGeneralProperties = function() {
    return PageHandlerProxy.prototype.getGeneralProperties
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.getGeneralProperties = function() {
    var params_ = new PageHandler_GetGeneralProperties_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_GetGeneralProperties_Name,
          codec.align(PageHandler_GetGeneralProperties_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_GetGeneralProperties_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_GetGeneralProperties_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.getUserClassifierProperties = function() {
    return PageHandlerProxy.prototype.getUserClassifierProperties
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.getUserClassifierProperties = function() {
    var params_ = new PageHandler_GetUserClassifierProperties_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_GetUserClassifierProperties_Name,
          codec.align(PageHandler_GetUserClassifierProperties_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_GetUserClassifierProperties_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_GetUserClassifierProperties_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.clearUserClassifierProperties = function() {
    return PageHandlerProxy.prototype.clearUserClassifierProperties
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.clearUserClassifierProperties = function() {
    var params_ = new PageHandler_ClearUserClassifierProperties_Params();
    var builder = new codec.MessageV0Builder(
        kPageHandler_ClearUserClassifierProperties_Name,
        codec.align(PageHandler_ClearUserClassifierProperties_Params.encodedSize));
    builder.encodeStruct(PageHandler_ClearUserClassifierProperties_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PageHandlerPtr.prototype.getCategoryRankerProperties = function() {
    return PageHandlerProxy.prototype.getCategoryRankerProperties
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.getCategoryRankerProperties = function() {
    var params_ = new PageHandler_GetCategoryRankerProperties_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_GetCategoryRankerProperties_Name,
          codec.align(PageHandler_GetCategoryRankerProperties_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_GetCategoryRankerProperties_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_GetCategoryRankerProperties_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.reloadSuggestions = function() {
    return PageHandlerProxy.prototype.reloadSuggestions
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.reloadSuggestions = function() {
    var params_ = new PageHandler_ReloadSuggestions_Params();
    var builder = new codec.MessageV0Builder(
        kPageHandler_ReloadSuggestions_Name,
        codec.align(PageHandler_ReloadSuggestions_Params.encodedSize));
    builder.encodeStruct(PageHandler_ReloadSuggestions_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PageHandlerPtr.prototype.clearCachedSuggestions = function() {
    return PageHandlerProxy.prototype.clearCachedSuggestions
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.clearCachedSuggestions = function() {
    var params_ = new PageHandler_ClearCachedSuggestions_Params();
    var builder = new codec.MessageV0Builder(
        kPageHandler_ClearCachedSuggestions_Name,
        codec.align(PageHandler_ClearCachedSuggestions_Params.encodedSize));
    builder.encodeStruct(PageHandler_ClearCachedSuggestions_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PageHandlerPtr.prototype.getRemoteContentSuggestionsProperties = function() {
    return PageHandlerProxy.prototype.getRemoteContentSuggestionsProperties
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.getRemoteContentSuggestionsProperties = function() {
    var params_ = new PageHandler_GetRemoteContentSuggestionsProperties_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_GetRemoteContentSuggestionsProperties_Name,
          codec.align(PageHandler_GetRemoteContentSuggestionsProperties_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_GetRemoteContentSuggestionsProperties_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.fetchSuggestionsInBackground = function() {
    return PageHandlerProxy.prototype.fetchSuggestionsInBackground
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.fetchSuggestionsInBackground = function(delaySeconds) {
    var params_ = new PageHandler_FetchSuggestionsInBackground_Params();
    params_.delaySeconds = delaySeconds;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_FetchSuggestionsInBackground_Name,
          codec.align(PageHandler_FetchSuggestionsInBackground_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_FetchSuggestionsInBackground_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_FetchSuggestionsInBackground_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.getLastJson = function() {
    return PageHandlerProxy.prototype.getLastJson
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.getLastJson = function() {
    var params_ = new PageHandler_GetLastJson_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_GetLastJson_Name,
          codec.align(PageHandler_GetLastJson_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_GetLastJson_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_GetLastJson_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.getSuggestionsByCategory = function() {
    return PageHandlerProxy.prototype.getSuggestionsByCategory
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.getSuggestionsByCategory = function() {
    var params_ = new PageHandler_GetSuggestionsByCategory_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageHandler_GetSuggestionsByCategory_Name,
          codec.align(PageHandler_GetSuggestionsByCategory_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageHandler_GetSuggestionsByCategory_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageHandler_GetSuggestionsByCategory_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageHandlerPtr.prototype.clearDismissedSuggestions = function() {
    return PageHandlerProxy.prototype.clearDismissedSuggestions
        .apply(this.ptr.getProxy(), arguments);
  };

  PageHandlerProxy.prototype.clearDismissedSuggestions = function(category) {
    var params_ = new PageHandler_ClearDismissedSuggestions_Params();
    params_.category = category;
    var builder = new codec.MessageV0Builder(
        kPageHandler_ClearDismissedSuggestions_Name,
        codec.align(PageHandler_ClearDismissedSuggestions_Params.encodedSize));
    builder.encodeStruct(PageHandler_ClearDismissedSuggestions_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PageHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  PageHandlerStub.prototype.getGeneralProperties = function() {
    return this.delegate_ && this.delegate_.getGeneralProperties && this.delegate_.getGeneralProperties();
  }
  PageHandlerStub.prototype.getUserClassifierProperties = function() {
    return this.delegate_ && this.delegate_.getUserClassifierProperties && this.delegate_.getUserClassifierProperties();
  }
  PageHandlerStub.prototype.clearUserClassifierProperties = function() {
    return this.delegate_ && this.delegate_.clearUserClassifierProperties && this.delegate_.clearUserClassifierProperties();
  }
  PageHandlerStub.prototype.getCategoryRankerProperties = function() {
    return this.delegate_ && this.delegate_.getCategoryRankerProperties && this.delegate_.getCategoryRankerProperties();
  }
  PageHandlerStub.prototype.reloadSuggestions = function() {
    return this.delegate_ && this.delegate_.reloadSuggestions && this.delegate_.reloadSuggestions();
  }
  PageHandlerStub.prototype.clearCachedSuggestions = function() {
    return this.delegate_ && this.delegate_.clearCachedSuggestions && this.delegate_.clearCachedSuggestions();
  }
  PageHandlerStub.prototype.getRemoteContentSuggestionsProperties = function() {
    return this.delegate_ && this.delegate_.getRemoteContentSuggestionsProperties && this.delegate_.getRemoteContentSuggestionsProperties();
  }
  PageHandlerStub.prototype.fetchSuggestionsInBackground = function(delaySeconds) {
    return this.delegate_ && this.delegate_.fetchSuggestionsInBackground && this.delegate_.fetchSuggestionsInBackground(delaySeconds);
  }
  PageHandlerStub.prototype.getLastJson = function() {
    return this.delegate_ && this.delegate_.getLastJson && this.delegate_.getLastJson();
  }
  PageHandlerStub.prototype.getSuggestionsByCategory = function() {
    return this.delegate_ && this.delegate_.getSuggestionsByCategory && this.delegate_.getSuggestionsByCategory();
  }
  PageHandlerStub.prototype.clearDismissedSuggestions = function(category) {
    return this.delegate_ && this.delegate_.clearDismissedSuggestions && this.delegate_.clearDismissedSuggestions(category);
  }

  PageHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPageHandler_ClearUserClassifierProperties_Name:
      var params = reader.decodeStruct(PageHandler_ClearUserClassifierProperties_Params);
      this.clearUserClassifierProperties();
      return true;
    case kPageHandler_ReloadSuggestions_Name:
      var params = reader.decodeStruct(PageHandler_ReloadSuggestions_Params);
      this.reloadSuggestions();
      return true;
    case kPageHandler_ClearCachedSuggestions_Name:
      var params = reader.decodeStruct(PageHandler_ClearCachedSuggestions_Params);
      this.clearCachedSuggestions();
      return true;
    case kPageHandler_ClearDismissedSuggestions_Name:
      var params = reader.decodeStruct(PageHandler_ClearDismissedSuggestions_Params);
      this.clearDismissedSuggestions(params.category);
      return true;
    default:
      return false;
    }
  };

  PageHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPageHandler_GetGeneralProperties_Name:
      var params = reader.decodeStruct(PageHandler_GetGeneralProperties_Params);
      this.getGeneralProperties().then(function(response) {
        var responseParams =
            new PageHandler_GetGeneralProperties_ResponseParams();
        responseParams.properties = response.properties;
        var builder = new codec.MessageV1Builder(
            kPageHandler_GetGeneralProperties_Name,
            codec.align(PageHandler_GetGeneralProperties_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_GetGeneralProperties_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPageHandler_GetUserClassifierProperties_Name:
      var params = reader.decodeStruct(PageHandler_GetUserClassifierProperties_Params);
      this.getUserClassifierProperties().then(function(response) {
        var responseParams =
            new PageHandler_GetUserClassifierProperties_ResponseParams();
        responseParams.properties = response.properties;
        var builder = new codec.MessageV1Builder(
            kPageHandler_GetUserClassifierProperties_Name,
            codec.align(PageHandler_GetUserClassifierProperties_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_GetUserClassifierProperties_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPageHandler_GetCategoryRankerProperties_Name:
      var params = reader.decodeStruct(PageHandler_GetCategoryRankerProperties_Params);
      this.getCategoryRankerProperties().then(function(response) {
        var responseParams =
            new PageHandler_GetCategoryRankerProperties_ResponseParams();
        responseParams.properties = response.properties;
        var builder = new codec.MessageV1Builder(
            kPageHandler_GetCategoryRankerProperties_Name,
            codec.align(PageHandler_GetCategoryRankerProperties_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_GetCategoryRankerProperties_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPageHandler_GetRemoteContentSuggestionsProperties_Name:
      var params = reader.decodeStruct(PageHandler_GetRemoteContentSuggestionsProperties_Params);
      this.getRemoteContentSuggestionsProperties().then(function(response) {
        var responseParams =
            new PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams();
        responseParams.properties = response.properties;
        var builder = new codec.MessageV1Builder(
            kPageHandler_GetRemoteContentSuggestionsProperties_Name,
            codec.align(PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPageHandler_FetchSuggestionsInBackground_Name:
      var params = reader.decodeStruct(PageHandler_FetchSuggestionsInBackground_Params);
      this.fetchSuggestionsInBackground(params.delaySeconds).then(function(response) {
        var responseParams =
            new PageHandler_FetchSuggestionsInBackground_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kPageHandler_FetchSuggestionsInBackground_Name,
            codec.align(PageHandler_FetchSuggestionsInBackground_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_FetchSuggestionsInBackground_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPageHandler_GetLastJson_Name:
      var params = reader.decodeStruct(PageHandler_GetLastJson_Params);
      this.getLastJson().then(function(response) {
        var responseParams =
            new PageHandler_GetLastJson_ResponseParams();
        responseParams.json = response.json;
        var builder = new codec.MessageV1Builder(
            kPageHandler_GetLastJson_Name,
            codec.align(PageHandler_GetLastJson_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_GetLastJson_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPageHandler_GetSuggestionsByCategory_Name:
      var params = reader.decodeStruct(PageHandler_GetSuggestionsByCategory_Params);
      this.getSuggestionsByCategory().then(function(response) {
        var responseParams =
            new PageHandler_GetSuggestionsByCategory_ResponseParams();
        responseParams.categories = response.categories;
        var builder = new codec.MessageV1Builder(
            kPageHandler_GetSuggestionsByCategory_Name,
            codec.align(PageHandler_GetSuggestionsByCategory_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageHandler_GetSuggestionsByCategory_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePageHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPageHandler_GetGeneralProperties_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_GetGeneralProperties_Params;
      break;
      case kPageHandler_GetUserClassifierProperties_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_GetUserClassifierProperties_Params;
      break;
      case kPageHandler_ClearUserClassifierProperties_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageHandler_ClearUserClassifierProperties_Params;
      break;
      case kPageHandler_GetCategoryRankerProperties_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_GetCategoryRankerProperties_Params;
      break;
      case kPageHandler_ReloadSuggestions_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageHandler_ReloadSuggestions_Params;
      break;
      case kPageHandler_ClearCachedSuggestions_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageHandler_ClearCachedSuggestions_Params;
      break;
      case kPageHandler_GetRemoteContentSuggestionsProperties_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_GetRemoteContentSuggestionsProperties_Params;
      break;
      case kPageHandler_FetchSuggestionsInBackground_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_FetchSuggestionsInBackground_Params;
      break;
      case kPageHandler_GetLastJson_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_GetLastJson_Params;
      break;
      case kPageHandler_GetSuggestionsByCategory_Name:
        if (message.expectsResponse())
          paramsClass = PageHandler_GetSuggestionsByCategory_Params;
      break;
      case kPageHandler_ClearDismissedSuggestions_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageHandler_ClearDismissedSuggestions_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePageHandlerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPageHandler_GetGeneralProperties_Name:
        if (message.isResponse())
          paramsClass = PageHandler_GetGeneralProperties_ResponseParams;
        break;
      case kPageHandler_GetUserClassifierProperties_Name:
        if (message.isResponse())
          paramsClass = PageHandler_GetUserClassifierProperties_ResponseParams;
        break;
      case kPageHandler_GetCategoryRankerProperties_Name:
        if (message.isResponse())
          paramsClass = PageHandler_GetCategoryRankerProperties_ResponseParams;
        break;
      case kPageHandler_GetRemoteContentSuggestionsProperties_Name:
        if (message.isResponse())
          paramsClass = PageHandler_GetRemoteContentSuggestionsProperties_ResponseParams;
        break;
      case kPageHandler_FetchSuggestionsInBackground_Name:
        if (message.isResponse())
          paramsClass = PageHandler_FetchSuggestionsInBackground_ResponseParams;
        break;
      case kPageHandler_GetLastJson_Name:
        if (message.isResponse())
          paramsClass = PageHandler_GetLastJson_ResponseParams;
        break;
      case kPageHandler_GetSuggestionsByCategory_Name:
        if (message.isResponse())
          paramsClass = PageHandler_GetSuggestionsByCategory_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PageHandler = {
    name: 'snippets_internals.mojom.PageHandler',
    kVersion: 0,
    ptrClass: PageHandlerPtr,
    proxyClass: PageHandlerProxy,
    stubClass: PageHandlerStub,
    validateRequest: validatePageHandlerRequest,
    validateResponse: validatePageHandlerResponse,
  };
  PageHandlerStub.prototype.validator = validatePageHandlerRequest;
  PageHandlerProxy.prototype.validator = validatePageHandlerResponse;
  var kPage_OnSuggestionsChanged_Name = 0;

  function PagePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(Page,
                                                   handleOrPtrInfo);
  }

  function PageAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        Page, associatedInterfacePtrInfo);
  }

  PageAssociatedPtr.prototype =
      Object.create(PagePtr.prototype);
  PageAssociatedPtr.prototype.constructor =
      PageAssociatedPtr;

  function PageProxy(receiver) {
    this.receiver_ = receiver;
  }
  PagePtr.prototype.onSuggestionsChanged = function() {
    return PageProxy.prototype.onSuggestionsChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  PageProxy.prototype.onSuggestionsChanged = function() {
    var params_ = new Page_OnSuggestionsChanged_Params();
    var builder = new codec.MessageV0Builder(
        kPage_OnSuggestionsChanged_Name,
        codec.align(Page_OnSuggestionsChanged_Params.encodedSize));
    builder.encodeStruct(Page_OnSuggestionsChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PageStub(delegate) {
    this.delegate_ = delegate;
  }
  PageStub.prototype.onSuggestionsChanged = function() {
    return this.delegate_ && this.delegate_.onSuggestionsChanged && this.delegate_.onSuggestionsChanged();
  }

  PageStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPage_OnSuggestionsChanged_Name:
      var params = reader.decodeStruct(Page_OnSuggestionsChanged_Params);
      this.onSuggestionsChanged();
      return true;
    default:
      return false;
    }
  };

  PageStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePageRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPage_OnSuggestionsChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Page_OnSuggestionsChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePageResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var Page = {
    name: 'snippets_internals.mojom.Page',
    kVersion: 0,
    ptrClass: PagePtr,
    proxyClass: PageProxy,
    stubClass: PageStub,
    validateRequest: validatePageRequest,
    validateResponse: null,
  };
  PageStub.prototype.validator = validatePageRequest;
  PageProxy.prototype.validator = null;
  exports.SuggestionCategory = SuggestionCategory;
  exports.SuggestionItem = SuggestionItem;
  exports.PageHandlerFactory = PageHandlerFactory;
  exports.PageHandlerFactoryPtr = PageHandlerFactoryPtr;
  exports.PageHandlerFactoryAssociatedPtr = PageHandlerFactoryAssociatedPtr;
  exports.PageHandler = PageHandler;
  exports.PageHandlerPtr = PageHandlerPtr;
  exports.PageHandlerAssociatedPtr = PageHandlerAssociatedPtr;
  exports.Page = Page;
  exports.PagePtr = PagePtr;
  exports.PageAssociatedPtr = PageAssociatedPtr;
})();