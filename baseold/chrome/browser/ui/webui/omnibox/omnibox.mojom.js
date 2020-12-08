// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/ui/webui/omnibox/omnibox.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojom');



  function ACMatchClassification(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ACMatchClassification.prototype.initDefaults_ = function() {
    this.offset = 0;
    this.style = 0;
  };
  ACMatchClassification.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ACMatchClassification.validate = function(messageValidator, offset) {
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

  ACMatchClassification.encodedSize = codec.kStructHeaderSize + 8;

  ACMatchClassification.decode = function(decoder) {
    var packed;
    var val = new ACMatchClassification();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.offset = decoder.decodeStruct(codec.Int32);
    val.style = decoder.decodeStruct(codec.Int32);
    return val;
  };

  ACMatchClassification.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ACMatchClassification.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.offset);
    encoder.encodeStruct(codec.Int32, val.style);
  };
  function AutocompleteAdditionalInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AutocompleteAdditionalInfo.prototype.initDefaults_ = function() {
    this.key = null;
    this.value = null;
  };
  AutocompleteAdditionalInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AutocompleteAdditionalInfo.validate = function(messageValidator, offset) {
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


    // validate AutocompleteAdditionalInfo.key
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteAdditionalInfo.value
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AutocompleteAdditionalInfo.encodedSize = codec.kStructHeaderSize + 16;

  AutocompleteAdditionalInfo.decode = function(decoder) {
    var packed;
    var val = new AutocompleteAdditionalInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key = decoder.decodeStruct(codec.String);
    val.value = decoder.decodeStruct(codec.String);
    return val;
  };

  AutocompleteAdditionalInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AutocompleteAdditionalInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.key);
    encoder.encodeStruct(codec.String, val.value);
  };
  function AutocompleteMatch(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AutocompleteMatch.prototype.initDefaults_ = function() {
    this.providerName = null;
    this.providerDone = false;
    this.deletable = false;
    this.allowedToBeDefaultMatch = false;
    this.isSearchType = false;
    this.hasTabMatch = false;
    this.starred = false;
    this.fromPrevious = false;
    this.relevance = 0;
    this.fillIntoEdit = null;
    this.inlineAutocompletion = null;
    this.destinationUrl = null;
    this.strippedDestinationUrl = null;
    this.image = null;
    this.contents = null;
    this.contentsClass = null;
    this.description = null;
    this.descriptionClass = null;
    this.answer = null;
    this.transition = null;
    this.type = null;
    this.associatedKeyword = null;
    this.keyword = null;
    this.duplicates = 0;
    this.additionalInfo = null;
    this.documentType = null;
  };
  AutocompleteMatch.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AutocompleteMatch.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 160}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.providerName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;





    // validate AutocompleteMatch.fillIntoEdit
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.inlineAutocompletion
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.destinationUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.strippedDestinationUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.image
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.contents
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.contentsClass
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 64, 8, new codec.PointerTo(ACMatchClassification), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.description
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 72, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.descriptionClass
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 80, 8, new codec.PointerTo(ACMatchClassification), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.answer
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 88, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.transition
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 96, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate AutocompleteMatch.type
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 104, false)
    if (err !== validator.validationError.NONE)
        return err;




    // validate AutocompleteMatch.associatedKeyword
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 112, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.keyword
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 120, false)
    if (err !== validator.validationError.NONE)
        return err;





    // validate AutocompleteMatch.additionalInfo
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 136, 8, new codec.PointerTo(AutocompleteAdditionalInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteMatch.documentType
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 144, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AutocompleteMatch.encodedSize = codec.kStructHeaderSize + 152;

  AutocompleteMatch.decode = function(decoder) {
    var packed;
    var val = new AutocompleteMatch();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.providerName = decoder.decodeStruct(codec.NullableString);
    packed = decoder.readUint8();
    val.providerDone = (packed >> 0) & 1 ? true : false;
    val.deletable = (packed >> 1) & 1 ? true : false;
    val.allowedToBeDefaultMatch = (packed >> 2) & 1 ? true : false;
    val.isSearchType = (packed >> 3) & 1 ? true : false;
    val.hasTabMatch = (packed >> 4) & 1 ? true : false;
    val.starred = (packed >> 5) & 1 ? true : false;
    val.fromPrevious = (packed >> 6) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.relevance = decoder.decodeStruct(codec.Int32);
    val.fillIntoEdit = decoder.decodeStruct(codec.String);
    val.inlineAutocompletion = decoder.decodeStruct(codec.String);
    val.destinationUrl = decoder.decodeStruct(codec.String);
    val.strippedDestinationUrl = decoder.decodeStruct(codec.String);
    val.image = decoder.decodeStruct(codec.String);
    val.contents = decoder.decodeStruct(codec.String);
    val.contentsClass = decoder.decodeArrayPointer(new codec.PointerTo(ACMatchClassification));
    val.description = decoder.decodeStruct(codec.String);
    val.descriptionClass = decoder.decodeArrayPointer(new codec.PointerTo(ACMatchClassification));
    val.answer = decoder.decodeStruct(codec.String);
    val.transition = decoder.decodeStruct(codec.String);
    val.type = decoder.decodeStruct(codec.String);
    val.associatedKeyword = decoder.decodeStruct(codec.NullableString);
    val.keyword = decoder.decodeStruct(codec.String);
    val.duplicates = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.additionalInfo = decoder.decodeArrayPointer(new codec.PointerTo(AutocompleteAdditionalInfo));
    val.documentType = decoder.decodeStruct(codec.String);
    return val;
  };

  AutocompleteMatch.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AutocompleteMatch.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.providerName);
    packed = 0;
    packed |= (val.providerDone & 1) << 0
    packed |= (val.deletable & 1) << 1
    packed |= (val.allowedToBeDefaultMatch & 1) << 2
    packed |= (val.isSearchType & 1) << 3
    packed |= (val.hasTabMatch & 1) << 4
    packed |= (val.starred & 1) << 5
    packed |= (val.fromPrevious & 1) << 6
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.relevance);
    encoder.encodeStruct(codec.String, val.fillIntoEdit);
    encoder.encodeStruct(codec.String, val.inlineAutocompletion);
    encoder.encodeStruct(codec.String, val.destinationUrl);
    encoder.encodeStruct(codec.String, val.strippedDestinationUrl);
    encoder.encodeStruct(codec.String, val.image);
    encoder.encodeStruct(codec.String, val.contents);
    encoder.encodeArrayPointer(new codec.PointerTo(ACMatchClassification), val.contentsClass);
    encoder.encodeStruct(codec.String, val.description);
    encoder.encodeArrayPointer(new codec.PointerTo(ACMatchClassification), val.descriptionClass);
    encoder.encodeStruct(codec.String, val.answer);
    encoder.encodeStruct(codec.String, val.transition);
    encoder.encodeStruct(codec.String, val.type);
    encoder.encodeStruct(codec.NullableString, val.associatedKeyword);
    encoder.encodeStruct(codec.String, val.keyword);
    encoder.encodeStruct(codec.Int32, val.duplicates);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(AutocompleteAdditionalInfo), val.additionalInfo);
    encoder.encodeStruct(codec.String, val.documentType);
  };
  function AutocompleteResultsForProvider(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AutocompleteResultsForProvider.prototype.initDefaults_ = function() {
    this.providerName = null;
    this.results = null;
  };
  AutocompleteResultsForProvider.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AutocompleteResultsForProvider.validate = function(messageValidator, offset) {
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


    // validate AutocompleteResultsForProvider.providerName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AutocompleteResultsForProvider.results
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(AutocompleteMatch), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AutocompleteResultsForProvider.encodedSize = codec.kStructHeaderSize + 16;

  AutocompleteResultsForProvider.decode = function(decoder) {
    var packed;
    var val = new AutocompleteResultsForProvider();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.providerName = decoder.decodeStruct(codec.String);
    val.results = decoder.decodeArrayPointer(new codec.PointerTo(AutocompleteMatch));
    return val;
  };

  AutocompleteResultsForProvider.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AutocompleteResultsForProvider.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.providerName);
    encoder.encodeArrayPointer(new codec.PointerTo(AutocompleteMatch), val.results);
  };
  function OmniboxResponse(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OmniboxResponse.prototype.initDefaults_ = function() {
    this.done = false;
    this.isTypedHost = false;
    this.timeSinceOmniboxStartedMs = 0;
    this.type = null;
    this.host = null;
    this.combinedResults = null;
    this.resultsByProvider = null;
  };
  OmniboxResponse.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OmniboxResponse.validate = function(messageValidator, offset) {
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




    // validate OmniboxResponse.type
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate OmniboxResponse.host
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate OmniboxResponse.combinedResults
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(AutocompleteMatch), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate OmniboxResponse.resultsByProvider
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(AutocompleteResultsForProvider), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OmniboxResponse.encodedSize = codec.kStructHeaderSize + 40;

  OmniboxResponse.decode = function(decoder) {
    var packed;
    var val = new OmniboxResponse();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.done = (packed >> 0) & 1 ? true : false;
    val.isTypedHost = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.timeSinceOmniboxStartedMs = decoder.decodeStruct(codec.Int32);
    val.type = decoder.decodeStruct(codec.String);
    val.host = decoder.decodeStruct(codec.String);
    val.combinedResults = decoder.decodeArrayPointer(new codec.PointerTo(AutocompleteMatch));
    val.resultsByProvider = decoder.decodeArrayPointer(new codec.PointerTo(AutocompleteResultsForProvider));
    return val;
  };

  OmniboxResponse.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OmniboxResponse.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.done & 1) << 0
    packed |= (val.isTypedHost & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.timeSinceOmniboxStartedMs);
    encoder.encodeStruct(codec.String, val.type);
    encoder.encodeStruct(codec.String, val.host);
    encoder.encodeArrayPointer(new codec.PointerTo(AutocompleteMatch), val.combinedResults);
    encoder.encodeArrayPointer(new codec.PointerTo(AutocompleteResultsForProvider), val.resultsByProvider);
  };
  function OmniboxPageHandler_SetClientPage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OmniboxPageHandler_SetClientPage_Params.prototype.initDefaults_ = function() {
    this.page = new OmniboxPagePtr();
  };
  OmniboxPageHandler_SetClientPage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OmniboxPageHandler_SetClientPage_Params.validate = function(messageValidator, offset) {
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


    // validate OmniboxPageHandler_SetClientPage_Params.page
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OmniboxPageHandler_SetClientPage_Params.encodedSize = codec.kStructHeaderSize + 8;

  OmniboxPageHandler_SetClientPage_Params.decode = function(decoder) {
    var packed;
    var val = new OmniboxPageHandler_SetClientPage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.page = decoder.decodeStruct(new codec.Interface(OmniboxPagePtr));
    return val;
  };

  OmniboxPageHandler_SetClientPage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OmniboxPageHandler_SetClientPage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(OmniboxPagePtr), val.page);
  };
  function OmniboxPageHandler_StartOmniboxQuery_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OmniboxPageHandler_StartOmniboxQuery_Params.prototype.initDefaults_ = function() {
    this.inputString = null;
    this.resetAutocompleteController = false;
    this.zeroSuggest = false;
    this.preventInlineAutocomplete = false;
    this.preferKeyword = false;
    this.cursorPosition = 0;
    this.currentUrl = null;
    this.pageClassification = 0;
  };
  OmniboxPageHandler_StartOmniboxQuery_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OmniboxPageHandler_StartOmniboxQuery_Params.validate = function(messageValidator, offset) {
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


    // validate OmniboxPageHandler_StartOmniboxQuery_Params.inputString
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;







    // validate OmniboxPageHandler_StartOmniboxQuery_Params.currentUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  OmniboxPageHandler_StartOmniboxQuery_Params.encodedSize = codec.kStructHeaderSize + 32;

  OmniboxPageHandler_StartOmniboxQuery_Params.decode = function(decoder) {
    var packed;
    var val = new OmniboxPageHandler_StartOmniboxQuery_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.inputString = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.resetAutocompleteController = (packed >> 0) & 1 ? true : false;
    val.zeroSuggest = (packed >> 1) & 1 ? true : false;
    val.preventInlineAutocomplete = (packed >> 2) & 1 ? true : false;
    val.preferKeyword = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.cursorPosition = decoder.decodeStruct(codec.Int32);
    val.currentUrl = decoder.decodeStruct(codec.String);
    val.pageClassification = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  OmniboxPageHandler_StartOmniboxQuery_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OmniboxPageHandler_StartOmniboxQuery_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.inputString);
    packed = 0;
    packed |= (val.resetAutocompleteController & 1) << 0
    packed |= (val.zeroSuggest & 1) << 1
    packed |= (val.preventInlineAutocomplete & 1) << 2
    packed |= (val.preferKeyword & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.cursorPosition);
    encoder.encodeStruct(codec.String, val.currentUrl);
    encoder.encodeStruct(codec.Int32, val.pageClassification);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function OmniboxPage_handleNewAutocompleteResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OmniboxPage_handleNewAutocompleteResponse_Params.prototype.initDefaults_ = function() {
    this.response = null;
    this.isPageController = false;
  };
  OmniboxPage_handleNewAutocompleteResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OmniboxPage_handleNewAutocompleteResponse_Params.validate = function(messageValidator, offset) {
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


    // validate OmniboxPage_handleNewAutocompleteResponse_Params.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, OmniboxResponse, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  OmniboxPage_handleNewAutocompleteResponse_Params.encodedSize = codec.kStructHeaderSize + 16;

  OmniboxPage_handleNewAutocompleteResponse_Params.decode = function(decoder) {
    var packed;
    var val = new OmniboxPage_handleNewAutocompleteResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(OmniboxResponse);
    packed = decoder.readUint8();
    val.isPageController = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  OmniboxPage_handleNewAutocompleteResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OmniboxPage_handleNewAutocompleteResponse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(OmniboxResponse, val.response);
    packed = 0;
    packed |= (val.isPageController & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function OmniboxPage_HandleNewAutocompleteQuery_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OmniboxPage_HandleNewAutocompleteQuery_Params.prototype.initDefaults_ = function() {
    this.isPageController = false;
    this.inputText = null;
  };
  OmniboxPage_HandleNewAutocompleteQuery_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OmniboxPage_HandleNewAutocompleteQuery_Params.validate = function(messageValidator, offset) {
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



    // validate OmniboxPage_HandleNewAutocompleteQuery_Params.inputText
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OmniboxPage_HandleNewAutocompleteQuery_Params.encodedSize = codec.kStructHeaderSize + 16;

  OmniboxPage_HandleNewAutocompleteQuery_Params.decode = function(decoder) {
    var packed;
    var val = new OmniboxPage_HandleNewAutocompleteQuery_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isPageController = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.inputText = decoder.decodeStruct(codec.String);
    return val;
  };

  OmniboxPage_HandleNewAutocompleteQuery_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OmniboxPage_HandleNewAutocompleteQuery_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isPageController & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.inputText);
  };
  function OmniboxPage_HandleAnswerImageData_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OmniboxPage_HandleAnswerImageData_Params.prototype.initDefaults_ = function() {
    this.imageUrl = null;
    this.imageData = null;
  };
  OmniboxPage_HandleAnswerImageData_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OmniboxPage_HandleAnswerImageData_Params.validate = function(messageValidator, offset) {
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


    // validate OmniboxPage_HandleAnswerImageData_Params.imageUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate OmniboxPage_HandleAnswerImageData_Params.imageData
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OmniboxPage_HandleAnswerImageData_Params.encodedSize = codec.kStructHeaderSize + 16;

  OmniboxPage_HandleAnswerImageData_Params.decode = function(decoder) {
    var packed;
    var val = new OmniboxPage_HandleAnswerImageData_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.imageUrl = decoder.decodeStruct(codec.String);
    val.imageData = decoder.decodeStruct(codec.String);
    return val;
  };

  OmniboxPage_HandleAnswerImageData_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OmniboxPage_HandleAnswerImageData_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.imageUrl);
    encoder.encodeStruct(codec.String, val.imageData);
  };
  var kOmniboxPageHandler_SetClientPage_Name = 0;
  var kOmniboxPageHandler_StartOmniboxQuery_Name = 1;

  function OmniboxPageHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(OmniboxPageHandler,
                                                   handleOrPtrInfo);
  }

  function OmniboxPageHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        OmniboxPageHandler, associatedInterfacePtrInfo);
  }

  OmniboxPageHandlerAssociatedPtr.prototype =
      Object.create(OmniboxPageHandlerPtr.prototype);
  OmniboxPageHandlerAssociatedPtr.prototype.constructor =
      OmniboxPageHandlerAssociatedPtr;

  function OmniboxPageHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  OmniboxPageHandlerPtr.prototype.setClientPage = function() {
    return OmniboxPageHandlerProxy.prototype.setClientPage
        .apply(this.ptr.getProxy(), arguments);
  };

  OmniboxPageHandlerProxy.prototype.setClientPage = function(page) {
    var params_ = new OmniboxPageHandler_SetClientPage_Params();
    params_.page = page;
    var builder = new codec.MessageV0Builder(
        kOmniboxPageHandler_SetClientPage_Name,
        codec.align(OmniboxPageHandler_SetClientPage_Params.encodedSize));
    builder.encodeStruct(OmniboxPageHandler_SetClientPage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  OmniboxPageHandlerPtr.prototype.startOmniboxQuery = function() {
    return OmniboxPageHandlerProxy.prototype.startOmniboxQuery
        .apply(this.ptr.getProxy(), arguments);
  };

  OmniboxPageHandlerProxy.prototype.startOmniboxQuery = function(inputString, resetAutocompleteController, cursorPosition, zeroSuggest, preventInlineAutocomplete, preferKeyword, currentUrl, pageClassification) {
    var params_ = new OmniboxPageHandler_StartOmniboxQuery_Params();
    params_.inputString = inputString;
    params_.resetAutocompleteController = resetAutocompleteController;
    params_.cursorPosition = cursorPosition;
    params_.zeroSuggest = zeroSuggest;
    params_.preventInlineAutocomplete = preventInlineAutocomplete;
    params_.preferKeyword = preferKeyword;
    params_.currentUrl = currentUrl;
    params_.pageClassification = pageClassification;
    var builder = new codec.MessageV0Builder(
        kOmniboxPageHandler_StartOmniboxQuery_Name,
        codec.align(OmniboxPageHandler_StartOmniboxQuery_Params.encodedSize));
    builder.encodeStruct(OmniboxPageHandler_StartOmniboxQuery_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function OmniboxPageHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  OmniboxPageHandlerStub.prototype.setClientPage = function(page) {
    return this.delegate_ && this.delegate_.setClientPage && this.delegate_.setClientPage(page);
  }
  OmniboxPageHandlerStub.prototype.startOmniboxQuery = function(inputString, resetAutocompleteController, cursorPosition, zeroSuggest, preventInlineAutocomplete, preferKeyword, currentUrl, pageClassification) {
    return this.delegate_ && this.delegate_.startOmniboxQuery && this.delegate_.startOmniboxQuery(inputString, resetAutocompleteController, cursorPosition, zeroSuggest, preventInlineAutocomplete, preferKeyword, currentUrl, pageClassification);
  }

  OmniboxPageHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kOmniboxPageHandler_SetClientPage_Name:
      var params = reader.decodeStruct(OmniboxPageHandler_SetClientPage_Params);
      this.setClientPage(params.page);
      return true;
    case kOmniboxPageHandler_StartOmniboxQuery_Name:
      var params = reader.decodeStruct(OmniboxPageHandler_StartOmniboxQuery_Params);
      this.startOmniboxQuery(params.inputString, params.resetAutocompleteController, params.cursorPosition, params.zeroSuggest, params.preventInlineAutocomplete, params.preferKeyword, params.currentUrl, params.pageClassification);
      return true;
    default:
      return false;
    }
  };

  OmniboxPageHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateOmniboxPageHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kOmniboxPageHandler_SetClientPage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = OmniboxPageHandler_SetClientPage_Params;
      break;
      case kOmniboxPageHandler_StartOmniboxQuery_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = OmniboxPageHandler_StartOmniboxQuery_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateOmniboxPageHandlerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var OmniboxPageHandler = {
    name: 'mojom.OmniboxPageHandler',
    kVersion: 0,
    ptrClass: OmniboxPageHandlerPtr,
    proxyClass: OmniboxPageHandlerProxy,
    stubClass: OmniboxPageHandlerStub,
    validateRequest: validateOmniboxPageHandlerRequest,
    validateResponse: null,
  };
  OmniboxPageHandlerStub.prototype.validator = validateOmniboxPageHandlerRequest;
  OmniboxPageHandlerProxy.prototype.validator = null;
  var kOmniboxPage_handleNewAutocompleteResponse_Name = 0;
  var kOmniboxPage_HandleNewAutocompleteQuery_Name = 1;
  var kOmniboxPage_HandleAnswerImageData_Name = 2;

  function OmniboxPagePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(OmniboxPage,
                                                   handleOrPtrInfo);
  }

  function OmniboxPageAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        OmniboxPage, associatedInterfacePtrInfo);
  }

  OmniboxPageAssociatedPtr.prototype =
      Object.create(OmniboxPagePtr.prototype);
  OmniboxPageAssociatedPtr.prototype.constructor =
      OmniboxPageAssociatedPtr;

  function OmniboxPageProxy(receiver) {
    this.receiver_ = receiver;
  }
  OmniboxPagePtr.prototype.handleNewAutocompleteResponse = function() {
    return OmniboxPageProxy.prototype.handleNewAutocompleteResponse
        .apply(this.ptr.getProxy(), arguments);
  };

  OmniboxPageProxy.prototype.handleNewAutocompleteResponse = function(response, isPageController) {
    var params_ = new OmniboxPage_handleNewAutocompleteResponse_Params();
    params_.response = response;
    params_.isPageController = isPageController;
    var builder = new codec.MessageV0Builder(
        kOmniboxPage_handleNewAutocompleteResponse_Name,
        codec.align(OmniboxPage_handleNewAutocompleteResponse_Params.encodedSize));
    builder.encodeStruct(OmniboxPage_handleNewAutocompleteResponse_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  OmniboxPagePtr.prototype.handleNewAutocompleteQuery = function() {
    return OmniboxPageProxy.prototype.handleNewAutocompleteQuery
        .apply(this.ptr.getProxy(), arguments);
  };

  OmniboxPageProxy.prototype.handleNewAutocompleteQuery = function(isPageController, inputText) {
    var params_ = new OmniboxPage_HandleNewAutocompleteQuery_Params();
    params_.isPageController = isPageController;
    params_.inputText = inputText;
    var builder = new codec.MessageV0Builder(
        kOmniboxPage_HandleNewAutocompleteQuery_Name,
        codec.align(OmniboxPage_HandleNewAutocompleteQuery_Params.encodedSize));
    builder.encodeStruct(OmniboxPage_HandleNewAutocompleteQuery_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  OmniboxPagePtr.prototype.handleAnswerImageData = function() {
    return OmniboxPageProxy.prototype.handleAnswerImageData
        .apply(this.ptr.getProxy(), arguments);
  };

  OmniboxPageProxy.prototype.handleAnswerImageData = function(imageUrl, imageData) {
    var params_ = new OmniboxPage_HandleAnswerImageData_Params();
    params_.imageUrl = imageUrl;
    params_.imageData = imageData;
    var builder = new codec.MessageV0Builder(
        kOmniboxPage_HandleAnswerImageData_Name,
        codec.align(OmniboxPage_HandleAnswerImageData_Params.encodedSize));
    builder.encodeStruct(OmniboxPage_HandleAnswerImageData_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function OmniboxPageStub(delegate) {
    this.delegate_ = delegate;
  }
  OmniboxPageStub.prototype.handleNewAutocompleteResponse = function(response, isPageController) {
    return this.delegate_ && this.delegate_.handleNewAutocompleteResponse && this.delegate_.handleNewAutocompleteResponse(response, isPageController);
  }
  OmniboxPageStub.prototype.handleNewAutocompleteQuery = function(isPageController, inputText) {
    return this.delegate_ && this.delegate_.handleNewAutocompleteQuery && this.delegate_.handleNewAutocompleteQuery(isPageController, inputText);
  }
  OmniboxPageStub.prototype.handleAnswerImageData = function(imageUrl, imageData) {
    return this.delegate_ && this.delegate_.handleAnswerImageData && this.delegate_.handleAnswerImageData(imageUrl, imageData);
  }

  OmniboxPageStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kOmniboxPage_handleNewAutocompleteResponse_Name:
      var params = reader.decodeStruct(OmniboxPage_handleNewAutocompleteResponse_Params);
      this.handleNewAutocompleteResponse(params.response, params.isPageController);
      return true;
    case kOmniboxPage_HandleNewAutocompleteQuery_Name:
      var params = reader.decodeStruct(OmniboxPage_HandleNewAutocompleteQuery_Params);
      this.handleNewAutocompleteQuery(params.isPageController, params.inputText);
      return true;
    case kOmniboxPage_HandleAnswerImageData_Name:
      var params = reader.decodeStruct(OmniboxPage_HandleAnswerImageData_Params);
      this.handleAnswerImageData(params.imageUrl, params.imageData);
      return true;
    default:
      return false;
    }
  };

  OmniboxPageStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateOmniboxPageRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kOmniboxPage_handleNewAutocompleteResponse_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = OmniboxPage_handleNewAutocompleteResponse_Params;
      break;
      case kOmniboxPage_HandleNewAutocompleteQuery_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = OmniboxPage_HandleNewAutocompleteQuery_Params;
      break;
      case kOmniboxPage_HandleAnswerImageData_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = OmniboxPage_HandleAnswerImageData_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateOmniboxPageResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var OmniboxPage = {
    name: 'mojom.OmniboxPage',
    kVersion: 0,
    ptrClass: OmniboxPagePtr,
    proxyClass: OmniboxPageProxy,
    stubClass: OmniboxPageStub,
    validateRequest: validateOmniboxPageRequest,
    validateResponse: null,
  };
  OmniboxPageStub.prototype.validator = validateOmniboxPageRequest;
  OmniboxPageProxy.prototype.validator = null;
  exports.ACMatchClassification = ACMatchClassification;
  exports.AutocompleteAdditionalInfo = AutocompleteAdditionalInfo;
  exports.AutocompleteMatch = AutocompleteMatch;
  exports.AutocompleteResultsForProvider = AutocompleteResultsForProvider;
  exports.OmniboxResponse = OmniboxResponse;
  exports.OmniboxPageHandler = OmniboxPageHandler;
  exports.OmniboxPageHandlerPtr = OmniboxPageHandlerPtr;
  exports.OmniboxPageHandlerAssociatedPtr = OmniboxPageHandlerAssociatedPtr;
  exports.OmniboxPage = OmniboxPage;
  exports.OmniboxPagePtr = OmniboxPagePtr;
  exports.OmniboxPageAssociatedPtr = OmniboxPageAssociatedPtr;
})();