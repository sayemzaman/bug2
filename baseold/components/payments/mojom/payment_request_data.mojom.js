// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/payments/mojom/payment_request_data.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('payments.mojom');



  function PaymentAddress(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentAddress.prototype.initDefaults_ = function() {
    this.country = null;
    this.addressLine = null;
    this.region = null;
    this.city = null;
    this.dependentLocality = null;
    this.postalCode = null;
    this.sortingCode = null;
    this.organization = null;
    this.recipient = null;
    this.phone = null;
  };
  PaymentAddress.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentAddress.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 88}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentAddress.country
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentAddress.addressLine
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentAddress.region
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentAddress.city
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentAddress.dependentLocality
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentAddress.postalCode
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentAddress.sortingCode
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentAddress.organization
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentAddress.recipient
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 64, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentAddress.phone
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 72, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentAddress.encodedSize = codec.kStructHeaderSize + 80;

  PaymentAddress.decode = function(decoder) {
    var packed;
    var val = new PaymentAddress();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.country = decoder.decodeStruct(codec.String);
    val.addressLine = decoder.decodeArrayPointer(codec.String);
    val.region = decoder.decodeStruct(codec.String);
    val.city = decoder.decodeStruct(codec.String);
    val.dependentLocality = decoder.decodeStruct(codec.String);
    val.postalCode = decoder.decodeStruct(codec.String);
    val.sortingCode = decoder.decodeStruct(codec.String);
    val.organization = decoder.decodeStruct(codec.String);
    val.recipient = decoder.decodeStruct(codec.String);
    val.phone = decoder.decodeStruct(codec.String);
    return val;
  };

  PaymentAddress.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentAddress.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.country);
    encoder.encodeArrayPointer(codec.String, val.addressLine);
    encoder.encodeStruct(codec.String, val.region);
    encoder.encodeStruct(codec.String, val.city);
    encoder.encodeStruct(codec.String, val.dependentLocality);
    encoder.encodeStruct(codec.String, val.postalCode);
    encoder.encodeStruct(codec.String, val.sortingCode);
    encoder.encodeStruct(codec.String, val.organization);
    encoder.encodeStruct(codec.String, val.recipient);
    encoder.encodeStruct(codec.String, val.phone);
  };
  function PaymentCurrencyAmount(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentCurrencyAmount.prototype.initDefaults_ = function() {
    this.currency = null;
    this.value = null;
  };
  PaymentCurrencyAmount.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentCurrencyAmount.validate = function(messageValidator, offset) {
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


    // validate PaymentCurrencyAmount.currency
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentCurrencyAmount.value
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentCurrencyAmount.encodedSize = codec.kStructHeaderSize + 16;

  PaymentCurrencyAmount.decode = function(decoder) {
    var packed;
    var val = new PaymentCurrencyAmount();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.currency = decoder.decodeStruct(codec.String);
    val.value = decoder.decodeStruct(codec.String);
    return val;
  };

  PaymentCurrencyAmount.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentCurrencyAmount.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.currency);
    encoder.encodeStruct(codec.String, val.value);
  };
  function PaymentValidationErrors(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentValidationErrors.prototype.initDefaults_ = function() {
    this.error = null;
    this.payer = null;
    this.shippingAddress = null;
  };
  PaymentValidationErrors.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentValidationErrors.validate = function(messageValidator, offset) {
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


    // validate PaymentValidationErrors.error
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentValidationErrors.payer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, PayerErrors, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentValidationErrors.shippingAddress
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, AddressErrors, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentValidationErrors.encodedSize = codec.kStructHeaderSize + 24;

  PaymentValidationErrors.decode = function(decoder) {
    var packed;
    var val = new PaymentValidationErrors();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.String);
    val.payer = decoder.decodeStructPointer(PayerErrors);
    val.shippingAddress = decoder.decodeStructPointer(AddressErrors);
    return val;
  };

  PaymentValidationErrors.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentValidationErrors.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.error);
    encoder.encodeStructPointer(PayerErrors, val.payer);
    encoder.encodeStructPointer(AddressErrors, val.shippingAddress);
  };
  function PayerErrors(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PayerErrors.prototype.initDefaults_ = function() {
    this.email = null;
    this.name = null;
    this.phone = null;
  };
  PayerErrors.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PayerErrors.validate = function(messageValidator, offset) {
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


    // validate PayerErrors.email
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PayerErrors.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PayerErrors.phone
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PayerErrors.encodedSize = codec.kStructHeaderSize + 24;

  PayerErrors.decode = function(decoder) {
    var packed;
    var val = new PayerErrors();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.email = decoder.decodeStruct(codec.String);
    val.name = decoder.decodeStruct(codec.String);
    val.phone = decoder.decodeStruct(codec.String);
    return val;
  };

  PayerErrors.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PayerErrors.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.email);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.phone);
  };
  function AddressErrors(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AddressErrors.prototype.initDefaults_ = function() {
    this.addressLine = null;
    this.city = null;
    this.country = null;
    this.dependentLocality = null;
    this.organization = null;
    this.phone = null;
    this.postalCode = null;
    this.recipient = null;
    this.region = null;
    this.sortingCode = null;
  };
  AddressErrors.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AddressErrors.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 88}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AddressErrors.addressLine
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AddressErrors.city
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AddressErrors.country
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AddressErrors.dependentLocality
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AddressErrors.organization
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AddressErrors.phone
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AddressErrors.postalCode
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AddressErrors.recipient
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AddressErrors.region
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 64, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AddressErrors.sortingCode
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 72, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AddressErrors.encodedSize = codec.kStructHeaderSize + 80;

  AddressErrors.decode = function(decoder) {
    var packed;
    var val = new AddressErrors();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.addressLine = decoder.decodeStruct(codec.String);
    val.city = decoder.decodeStruct(codec.String);
    val.country = decoder.decodeStruct(codec.String);
    val.dependentLocality = decoder.decodeStruct(codec.String);
    val.organization = decoder.decodeStruct(codec.String);
    val.phone = decoder.decodeStruct(codec.String);
    val.postalCode = decoder.decodeStruct(codec.String);
    val.recipient = decoder.decodeStruct(codec.String);
    val.region = decoder.decodeStruct(codec.String);
    val.sortingCode = decoder.decodeStruct(codec.String);
    return val;
  };

  AddressErrors.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AddressErrors.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.addressLine);
    encoder.encodeStruct(codec.String, val.city);
    encoder.encodeStruct(codec.String, val.country);
    encoder.encodeStruct(codec.String, val.dependentLocality);
    encoder.encodeStruct(codec.String, val.organization);
    encoder.encodeStruct(codec.String, val.phone);
    encoder.encodeStruct(codec.String, val.postalCode);
    encoder.encodeStruct(codec.String, val.recipient);
    encoder.encodeStruct(codec.String, val.region);
    encoder.encodeStruct(codec.String, val.sortingCode);
  };
  exports.PaymentAddress = PaymentAddress;
  exports.PaymentCurrencyAmount = PaymentCurrencyAmount;
  exports.PaymentValidationErrors = PaymentValidationErrors;
  exports.PayerErrors = PayerErrors;
  exports.AddressErrors = AddressErrors;
})();