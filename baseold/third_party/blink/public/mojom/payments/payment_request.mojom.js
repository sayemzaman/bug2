// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/payments/payment_request.mojom';
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
  var payment_request_data$ =
      mojo.internal.exposeNamespace('payments.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/payments/mojom/payment_request_data.mojom', '../../../../../components/payments/mojom/payment_request_data.mojom.js');
  }


  var PaymentErrorReason = {};
  PaymentErrorReason.UNKNOWN = 0;
  PaymentErrorReason.USER_CANCEL = PaymentErrorReason.UNKNOWN + 1;
  PaymentErrorReason.NOT_SUPPORTED = PaymentErrorReason.USER_CANCEL + 1;
  PaymentErrorReason.ALREADY_SHOWING = PaymentErrorReason.NOT_SUPPORTED + 1;
  PaymentErrorReason.MIN_VALUE = 0,
  PaymentErrorReason.MAX_VALUE = 3,

  PaymentErrorReason.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  PaymentErrorReason.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CanMakePaymentQueryResult = {};
  CanMakePaymentQueryResult.CAN_MAKE_PAYMENT = 0;
  CanMakePaymentQueryResult.CANNOT_MAKE_PAYMENT = CanMakePaymentQueryResult.CAN_MAKE_PAYMENT + 1;
  CanMakePaymentQueryResult.QUERY_QUOTA_EXCEEDED = CanMakePaymentQueryResult.CANNOT_MAKE_PAYMENT + 1;
  CanMakePaymentQueryResult.WARNING_CAN_MAKE_PAYMENT = CanMakePaymentQueryResult.QUERY_QUOTA_EXCEEDED + 1;
  CanMakePaymentQueryResult.WARNING_CANNOT_MAKE_PAYMENT = CanMakePaymentQueryResult.WARNING_CAN_MAKE_PAYMENT + 1;
  CanMakePaymentQueryResult.MIN_VALUE = 0,
  CanMakePaymentQueryResult.MAX_VALUE = 4,

  CanMakePaymentQueryResult.isKnownEnumValue = function(value) {
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

  CanMakePaymentQueryResult.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var HasEnrolledInstrumentQueryResult = {};
  HasEnrolledInstrumentQueryResult.HAS_ENROLLED_INSTRUMENT = 0;
  HasEnrolledInstrumentQueryResult.HAS_NO_ENROLLED_INSTRUMENT = HasEnrolledInstrumentQueryResult.HAS_ENROLLED_INSTRUMENT + 1;
  HasEnrolledInstrumentQueryResult.QUERY_QUOTA_EXCEEDED = HasEnrolledInstrumentQueryResult.HAS_NO_ENROLLED_INSTRUMENT + 1;
  HasEnrolledInstrumentQueryResult.WARNING_HAS_ENROLLED_INSTRUMENT = HasEnrolledInstrumentQueryResult.QUERY_QUOTA_EXCEEDED + 1;
  HasEnrolledInstrumentQueryResult.WARNING_HAS_NO_ENROLLED_INSTRUMENT = HasEnrolledInstrumentQueryResult.WARNING_HAS_ENROLLED_INSTRUMENT + 1;
  HasEnrolledInstrumentQueryResult.MIN_VALUE = 0,
  HasEnrolledInstrumentQueryResult.MAX_VALUE = 4,

  HasEnrolledInstrumentQueryResult.isKnownEnumValue = function(value) {
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

  HasEnrolledInstrumentQueryResult.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var AndroidPayEnvironment = {};
  AndroidPayEnvironment.PRODUCTION = 0;
  AndroidPayEnvironment.TEST = AndroidPayEnvironment.PRODUCTION + 1;
  AndroidPayEnvironment.MIN_VALUE = 0,
  AndroidPayEnvironment.MAX_VALUE = 1,

  AndroidPayEnvironment.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  AndroidPayEnvironment.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var BasicCardNetwork = {};
  BasicCardNetwork.AMEX = 0;
  BasicCardNetwork.DINERS = BasicCardNetwork.AMEX + 1;
  BasicCardNetwork.DISCOVER = BasicCardNetwork.DINERS + 1;
  BasicCardNetwork.JCB = BasicCardNetwork.DISCOVER + 1;
  BasicCardNetwork.MASTERCARD = BasicCardNetwork.JCB + 1;
  BasicCardNetwork.MIR = BasicCardNetwork.MASTERCARD + 1;
  BasicCardNetwork.UNIONPAY = BasicCardNetwork.MIR + 1;
  BasicCardNetwork.VISA = BasicCardNetwork.UNIONPAY + 1;
  BasicCardNetwork.MIN_VALUE = 0,
  BasicCardNetwork.MAX_VALUE = 7,

  BasicCardNetwork.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return true;
    }
    return false;
  };

  BasicCardNetwork.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var BasicCardType = {};
  BasicCardType.CREDIT = 0;
  BasicCardType.DEBIT = BasicCardType.CREDIT + 1;
  BasicCardType.PREPAID = BasicCardType.DEBIT + 1;
  BasicCardType.MIN_VALUE = 0,
  BasicCardType.MAX_VALUE = 2,

  BasicCardType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  BasicCardType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PaymentShippingType = {};
  PaymentShippingType.SHIPPING = 0;
  PaymentShippingType.DELIVERY = PaymentShippingType.SHIPPING + 1;
  PaymentShippingType.PICKUP = PaymentShippingType.DELIVERY + 1;
  PaymentShippingType.MIN_VALUE = 0,
  PaymentShippingType.MAX_VALUE = 2,

  PaymentShippingType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  PaymentShippingType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PaymentComplete = {};
  PaymentComplete.FAIL = 0;
  PaymentComplete.SUCCESS = PaymentComplete.FAIL + 1;
  PaymentComplete.UNKNOWN = PaymentComplete.SUCCESS + 1;
  PaymentComplete.MIN_VALUE = 0,
  PaymentComplete.MAX_VALUE = 2,

  PaymentComplete.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  PaymentComplete.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function PaymentResponse(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentResponse.prototype.initDefaults_ = function() {
    this.methodName = null;
    this.stringifiedDetails = null;
    this.shippingAddress = null;
    this.shippingOption = null;
    this.payer = null;
  };
  PaymentResponse.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentResponse.validate = function(messageValidator, offset) {
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


    // validate PaymentResponse.methodName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentResponse.stringifiedDetails
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentResponse.shippingAddress
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, payment_request_data$.PaymentAddress, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentResponse.shippingOption
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentResponse.payer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, PayerDetail, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentResponse.encodedSize = codec.kStructHeaderSize + 40;

  PaymentResponse.decode = function(decoder) {
    var packed;
    var val = new PaymentResponse();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.methodName = decoder.decodeStruct(codec.String);
    val.stringifiedDetails = decoder.decodeStruct(codec.String);
    val.shippingAddress = decoder.decodeStructPointer(payment_request_data$.PaymentAddress);
    val.shippingOption = decoder.decodeStruct(codec.NullableString);
    val.payer = decoder.decodeStructPointer(PayerDetail);
    return val;
  };

  PaymentResponse.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentResponse.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.methodName);
    encoder.encodeStruct(codec.String, val.stringifiedDetails);
    encoder.encodeStructPointer(payment_request_data$.PaymentAddress, val.shippingAddress);
    encoder.encodeStruct(codec.NullableString, val.shippingOption);
    encoder.encodeStructPointer(PayerDetail, val.payer);
  };
  function PayerDetail(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PayerDetail.prototype.initDefaults_ = function() {
    this.email = null;
    this.name = null;
    this.phone = null;
  };
  PayerDetail.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PayerDetail.validate = function(messageValidator, offset) {
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


    // validate PayerDetail.email
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PayerDetail.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PayerDetail.phone
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PayerDetail.encodedSize = codec.kStructHeaderSize + 24;

  PayerDetail.decode = function(decoder) {
    var packed;
    var val = new PayerDetail();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.email = decoder.decodeStruct(codec.NullableString);
    val.name = decoder.decodeStruct(codec.NullableString);
    val.phone = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  PayerDetail.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PayerDetail.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.email);
    encoder.encodeStruct(codec.NullableString, val.name);
    encoder.encodeStruct(codec.NullableString, val.phone);
  };
  function PaymentItem(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentItem.prototype.initDefaults_ = function() {
    this.label = null;
    this.amount = null;
    this.pending = false;
  };
  PaymentItem.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentItem.validate = function(messageValidator, offset) {
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


    // validate PaymentItem.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentItem.amount
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, payment_request_data$.PaymentCurrencyAmount, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  PaymentItem.encodedSize = codec.kStructHeaderSize + 24;

  PaymentItem.decode = function(decoder) {
    var packed;
    var val = new PaymentItem();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.label = decoder.decodeStruct(codec.String);
    val.amount = decoder.decodeStructPointer(payment_request_data$.PaymentCurrencyAmount);
    packed = decoder.readUint8();
    val.pending = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PaymentItem.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentItem.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.label);
    encoder.encodeStructPointer(payment_request_data$.PaymentCurrencyAmount, val.amount);
    packed = 0;
    packed |= (val.pending & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PaymentShippingOption(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentShippingOption.prototype.initDefaults_ = function() {
    this.id = null;
    this.label = null;
    this.amount = null;
    this.selected = false;
  };
  PaymentShippingOption.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentShippingOption.validate = function(messageValidator, offset) {
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


    // validate PaymentShippingOption.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentShippingOption.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentShippingOption.amount
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, payment_request_data$.PaymentCurrencyAmount, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  PaymentShippingOption.encodedSize = codec.kStructHeaderSize + 32;

  PaymentShippingOption.decode = function(decoder) {
    var packed;
    var val = new PaymentShippingOption();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.String);
    val.label = decoder.decodeStruct(codec.String);
    val.amount = decoder.decodeStructPointer(payment_request_data$.PaymentCurrencyAmount);
    packed = decoder.readUint8();
    val.selected = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PaymentShippingOption.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentShippingOption.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.id);
    encoder.encodeStruct(codec.String, val.label);
    encoder.encodeStructPointer(payment_request_data$.PaymentCurrencyAmount, val.amount);
    packed = 0;
    packed |= (val.selected & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PaymentMethodData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentMethodData.prototype.initDefaults_ = function() {
    this.supportedMethod = null;
    this.stringifiedData = null;
    this.environment = 0;
    this.minGooglePlayServicesVersion = 0;
    this.apiVersion = 0;
    this.supportedNetworks = null;
    this.supportedTypes = null;
  };
  PaymentMethodData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentMethodData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentMethodData.supportedMethod
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentMethodData.stringifiedData
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentMethodData.environment
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, AndroidPayEnvironment);
    if (err !== validator.validationError.NONE)
        return err;




    // validate PaymentMethodData.supportedNetworks
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 4, new codec.Enum(BasicCardNetwork), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentMethodData.supportedTypes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 4, new codec.Enum(BasicCardType), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentMethodData.encodedSize = codec.kStructHeaderSize + 48;

  PaymentMethodData.decode = function(decoder) {
    var packed;
    var val = new PaymentMethodData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.supportedMethod = decoder.decodeStruct(codec.String);
    val.stringifiedData = decoder.decodeStruct(codec.String);
    val.environment = decoder.decodeStruct(codec.Int32);
    val.minGooglePlayServicesVersion = decoder.decodeStruct(codec.Int32);
    val.apiVersion = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.supportedNetworks = decoder.decodeArrayPointer(new codec.Enum(BasicCardNetwork));
    val.supportedTypes = decoder.decodeArrayPointer(new codec.Enum(BasicCardType));
    return val;
  };

  PaymentMethodData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentMethodData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.supportedMethod);
    encoder.encodeStruct(codec.String, val.stringifiedData);
    encoder.encodeStruct(codec.Int32, val.environment);
    encoder.encodeStruct(codec.Int32, val.minGooglePlayServicesVersion);
    encoder.encodeStruct(codec.Int32, val.apiVersion);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.Enum(BasicCardNetwork), val.supportedNetworks);
    encoder.encodeArrayPointer(new codec.Enum(BasicCardType), val.supportedTypes);
  };
  function PaymentDetailsModifier(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentDetailsModifier.prototype.initDefaults_ = function() {
    this.total = null;
    this.additionalDisplayItems = null;
    this.methodData = null;
  };
  PaymentDetailsModifier.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentDetailsModifier.validate = function(messageValidator, offset) {
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


    // validate PaymentDetailsModifier.total
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PaymentItem, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentDetailsModifier.additionalDisplayItems
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(PaymentItem), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentDetailsModifier.methodData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, PaymentMethodData, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentDetailsModifier.encodedSize = codec.kStructHeaderSize + 24;

  PaymentDetailsModifier.decode = function(decoder) {
    var packed;
    var val = new PaymentDetailsModifier();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.total = decoder.decodeStructPointer(PaymentItem);
    val.additionalDisplayItems = decoder.decodeArrayPointer(new codec.PointerTo(PaymentItem));
    val.methodData = decoder.decodeStructPointer(PaymentMethodData);
    return val;
  };

  PaymentDetailsModifier.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentDetailsModifier.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PaymentItem, val.total);
    encoder.encodeArrayPointer(new codec.PointerTo(PaymentItem), val.additionalDisplayItems);
    encoder.encodeStructPointer(PaymentMethodData, val.methodData);
  };
  function PaymentDetails(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentDetails.prototype.initDefaults_ = function() {
    this.total = null;
    this.displayItems = null;
    this.shippingOptions = null;
    this.modifiers = null;
    this.error = "";
    this.shippingAddressErrors = null;
    this.id = null;
    this.stringifiedPaymentMethodErrors = null;
  };
  PaymentDetails.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentDetails.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 72}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentDetails.total
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PaymentItem, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentDetails.displayItems
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(PaymentItem), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentDetails.shippingOptions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(PaymentShippingOption), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentDetails.modifiers
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(PaymentDetailsModifier), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentDetails.error
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentDetails.shippingAddressErrors
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, payment_request_data$.AddressErrors, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentDetails.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentDetails.stringifiedPaymentMethodErrors
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentDetails.encodedSize = codec.kStructHeaderSize + 64;

  PaymentDetails.decode = function(decoder) {
    var packed;
    var val = new PaymentDetails();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.total = decoder.decodeStructPointer(PaymentItem);
    val.displayItems = decoder.decodeArrayPointer(new codec.PointerTo(PaymentItem));
    val.shippingOptions = decoder.decodeArrayPointer(new codec.PointerTo(PaymentShippingOption));
    val.modifiers = decoder.decodeArrayPointer(new codec.PointerTo(PaymentDetailsModifier));
    val.error = decoder.decodeStruct(codec.String);
    val.shippingAddressErrors = decoder.decodeStructPointer(payment_request_data$.AddressErrors);
    val.id = decoder.decodeStruct(codec.NullableString);
    val.stringifiedPaymentMethodErrors = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  PaymentDetails.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentDetails.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PaymentItem, val.total);
    encoder.encodeArrayPointer(new codec.PointerTo(PaymentItem), val.displayItems);
    encoder.encodeArrayPointer(new codec.PointerTo(PaymentShippingOption), val.shippingOptions);
    encoder.encodeArrayPointer(new codec.PointerTo(PaymentDetailsModifier), val.modifiers);
    encoder.encodeStruct(codec.String, val.error);
    encoder.encodeStructPointer(payment_request_data$.AddressErrors, val.shippingAddressErrors);
    encoder.encodeStruct(codec.NullableString, val.id);
    encoder.encodeStruct(codec.NullableString, val.stringifiedPaymentMethodErrors);
  };
  function PaymentOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentOptions.prototype.initDefaults_ = function() {
    this.requestPayerName = false;
    this.requestPayerEmail = false;
    this.requestPayerPhone = false;
    this.requestShipping = false;
    this.shippingType = 0;
  };
  PaymentOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentOptions.validate = function(messageValidator, offset) {
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






    // validate PaymentOptions.shippingType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, PaymentShippingType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentOptions.encodedSize = codec.kStructHeaderSize + 8;

  PaymentOptions.decode = function(decoder) {
    var packed;
    var val = new PaymentOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.requestPayerName = (packed >> 0) & 1 ? true : false;
    val.requestPayerEmail = (packed >> 1) & 1 ? true : false;
    val.requestPayerPhone = (packed >> 2) & 1 ? true : false;
    val.requestShipping = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.shippingType = decoder.decodeStruct(codec.Int32);
    return val;
  };

  PaymentOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentOptions.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.requestPayerName & 1) << 0
    packed |= (val.requestPayerEmail & 1) << 1
    packed |= (val.requestPayerPhone & 1) << 2
    packed |= (val.requestShipping & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.shippingType);
  };
  function PaymentRequestClient_OnPaymentMethodChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequestClient_OnPaymentMethodChange_Params.prototype.initDefaults_ = function() {
    this.methodName = null;
    this.stringifiedDetails = null;
  };
  PaymentRequestClient_OnPaymentMethodChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequestClient_OnPaymentMethodChange_Params.validate = function(messageValidator, offset) {
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


    // validate PaymentRequestClient_OnPaymentMethodChange_Params.methodName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentRequestClient_OnPaymentMethodChange_Params.stringifiedDetails
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentRequestClient_OnPaymentMethodChange_Params.encodedSize = codec.kStructHeaderSize + 16;

  PaymentRequestClient_OnPaymentMethodChange_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequestClient_OnPaymentMethodChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.methodName = decoder.decodeStruct(codec.String);
    val.stringifiedDetails = decoder.decodeStruct(codec.String);
    return val;
  };

  PaymentRequestClient_OnPaymentMethodChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequestClient_OnPaymentMethodChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.methodName);
    encoder.encodeStruct(codec.String, val.stringifiedDetails);
  };
  function PaymentRequestClient_OnShippingAddressChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequestClient_OnShippingAddressChange_Params.prototype.initDefaults_ = function() {
    this.address = null;
  };
  PaymentRequestClient_OnShippingAddressChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequestClient_OnShippingAddressChange_Params.validate = function(messageValidator, offset) {
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


    // validate PaymentRequestClient_OnShippingAddressChange_Params.address
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, payment_request_data$.PaymentAddress, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentRequestClient_OnShippingAddressChange_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentRequestClient_OnShippingAddressChange_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequestClient_OnShippingAddressChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.address = decoder.decodeStructPointer(payment_request_data$.PaymentAddress);
    return val;
  };

  PaymentRequestClient_OnShippingAddressChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequestClient_OnShippingAddressChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(payment_request_data$.PaymentAddress, val.address);
  };
  function PaymentRequestClient_OnShippingOptionChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequestClient_OnShippingOptionChange_Params.prototype.initDefaults_ = function() {
    this.shippingOptionId = null;
  };
  PaymentRequestClient_OnShippingOptionChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequestClient_OnShippingOptionChange_Params.validate = function(messageValidator, offset) {
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


    // validate PaymentRequestClient_OnShippingOptionChange_Params.shippingOptionId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentRequestClient_OnShippingOptionChange_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentRequestClient_OnShippingOptionChange_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequestClient_OnShippingOptionChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.shippingOptionId = decoder.decodeStruct(codec.String);
    return val;
  };

  PaymentRequestClient_OnShippingOptionChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequestClient_OnShippingOptionChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.shippingOptionId);
  };
  function PaymentRequestClient_OnPayerDetailChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequestClient_OnPayerDetailChange_Params.prototype.initDefaults_ = function() {
    this.detail = null;
  };
  PaymentRequestClient_OnPayerDetailChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequestClient_OnPayerDetailChange_Params.validate = function(messageValidator, offset) {
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


    // validate PaymentRequestClient_OnPayerDetailChange_Params.detail
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PayerDetail, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentRequestClient_OnPayerDetailChange_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentRequestClient_OnPayerDetailChange_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequestClient_OnPayerDetailChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.detail = decoder.decodeStructPointer(PayerDetail);
    return val;
  };

  PaymentRequestClient_OnPayerDetailChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequestClient_OnPayerDetailChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PayerDetail, val.detail);
  };
  function PaymentRequestClient_OnPaymentResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequestClient_OnPaymentResponse_Params.prototype.initDefaults_ = function() {
    this.response = null;
  };
  PaymentRequestClient_OnPaymentResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequestClient_OnPaymentResponse_Params.validate = function(messageValidator, offset) {
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


    // validate PaymentRequestClient_OnPaymentResponse_Params.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PaymentResponse, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentRequestClient_OnPaymentResponse_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentRequestClient_OnPaymentResponse_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequestClient_OnPaymentResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(PaymentResponse);
    return val;
  };

  PaymentRequestClient_OnPaymentResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequestClient_OnPaymentResponse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PaymentResponse, val.response);
  };
  function PaymentRequestClient_OnError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequestClient_OnError_Params.prototype.initDefaults_ = function() {
    this.error = 0;
  };
  PaymentRequestClient_OnError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequestClient_OnError_Params.validate = function(messageValidator, offset) {
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


    // validate PaymentRequestClient_OnError_Params.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, PaymentErrorReason);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentRequestClient_OnError_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentRequestClient_OnError_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequestClient_OnError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PaymentRequestClient_OnError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequestClient_OnError_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PaymentRequestClient_OnComplete_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequestClient_OnComplete_Params.prototype.initDefaults_ = function() {
  };
  PaymentRequestClient_OnComplete_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequestClient_OnComplete_Params.validate = function(messageValidator, offset) {
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

  PaymentRequestClient_OnComplete_Params.encodedSize = codec.kStructHeaderSize + 0;

  PaymentRequestClient_OnComplete_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequestClient_OnComplete_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PaymentRequestClient_OnComplete_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequestClient_OnComplete_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PaymentRequestClient_OnAbort_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequestClient_OnAbort_Params.prototype.initDefaults_ = function() {
    this.abortedSuccessfully = false;
  };
  PaymentRequestClient_OnAbort_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequestClient_OnAbort_Params.validate = function(messageValidator, offset) {
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

  PaymentRequestClient_OnAbort_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentRequestClient_OnAbort_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequestClient_OnAbort_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.abortedSuccessfully = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PaymentRequestClient_OnAbort_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequestClient_OnAbort_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.abortedSuccessfully & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PaymentRequestClient_OnCanMakePayment_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequestClient_OnCanMakePayment_Params.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  PaymentRequestClient_OnCanMakePayment_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequestClient_OnCanMakePayment_Params.validate = function(messageValidator, offset) {
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


    // validate PaymentRequestClient_OnCanMakePayment_Params.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CanMakePaymentQueryResult);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentRequestClient_OnCanMakePayment_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentRequestClient_OnCanMakePayment_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequestClient_OnCanMakePayment_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PaymentRequestClient_OnCanMakePayment_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequestClient_OnCanMakePayment_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PaymentRequestClient_OnHasEnrolledInstrument_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequestClient_OnHasEnrolledInstrument_Params.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  PaymentRequestClient_OnHasEnrolledInstrument_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequestClient_OnHasEnrolledInstrument_Params.validate = function(messageValidator, offset) {
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


    // validate PaymentRequestClient_OnHasEnrolledInstrument_Params.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, HasEnrolledInstrumentQueryResult);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentRequestClient_OnHasEnrolledInstrument_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentRequestClient_OnHasEnrolledInstrument_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequestClient_OnHasEnrolledInstrument_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PaymentRequestClient_OnHasEnrolledInstrument_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequestClient_OnHasEnrolledInstrument_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PaymentRequestClient_WarnNoFavicon_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequestClient_WarnNoFavicon_Params.prototype.initDefaults_ = function() {
  };
  PaymentRequestClient_WarnNoFavicon_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequestClient_WarnNoFavicon_Params.validate = function(messageValidator, offset) {
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

  PaymentRequestClient_WarnNoFavicon_Params.encodedSize = codec.kStructHeaderSize + 0;

  PaymentRequestClient_WarnNoFavicon_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequestClient_WarnNoFavicon_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PaymentRequestClient_WarnNoFavicon_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequestClient_WarnNoFavicon_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PaymentRequest_Init_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequest_Init_Params.prototype.initDefaults_ = function() {
    this.client = new PaymentRequestClientPtr();
    this.methodData = null;
    this.details = null;
    this.options = null;
  };
  PaymentRequest_Init_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequest_Init_Params.validate = function(messageValidator, offset) {
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


    // validate PaymentRequest_Init_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentRequest_Init_Params.methodData
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(PaymentMethodData), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentRequest_Init_Params.details
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, PaymentDetails, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentRequest_Init_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, PaymentOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentRequest_Init_Params.encodedSize = codec.kStructHeaderSize + 32;

  PaymentRequest_Init_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequest_Init_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(new codec.Interface(PaymentRequestClientPtr));
    val.methodData = decoder.decodeArrayPointer(new codec.PointerTo(PaymentMethodData));
    val.details = decoder.decodeStructPointer(PaymentDetails);
    val.options = decoder.decodeStructPointer(PaymentOptions);
    return val;
  };

  PaymentRequest_Init_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequest_Init_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(PaymentRequestClientPtr), val.client);
    encoder.encodeArrayPointer(new codec.PointerTo(PaymentMethodData), val.methodData);
    encoder.encodeStructPointer(PaymentDetails, val.details);
    encoder.encodeStructPointer(PaymentOptions, val.options);
  };
  function PaymentRequest_Show_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequest_Show_Params.prototype.initDefaults_ = function() {
    this.isUserGesture = false;
    this.waitForUpdatedDetails = false;
  };
  PaymentRequest_Show_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequest_Show_Params.validate = function(messageValidator, offset) {
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

  PaymentRequest_Show_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentRequest_Show_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequest_Show_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isUserGesture = (packed >> 0) & 1 ? true : false;
    val.waitForUpdatedDetails = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PaymentRequest_Show_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequest_Show_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isUserGesture & 1) << 0
    packed |= (val.waitForUpdatedDetails & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PaymentRequest_UpdateWith_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequest_UpdateWith_Params.prototype.initDefaults_ = function() {
    this.details = null;
  };
  PaymentRequest_UpdateWith_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequest_UpdateWith_Params.validate = function(messageValidator, offset) {
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


    // validate PaymentRequest_UpdateWith_Params.details
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PaymentDetails, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentRequest_UpdateWith_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentRequest_UpdateWith_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequest_UpdateWith_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.details = decoder.decodeStructPointer(PaymentDetails);
    return val;
  };

  PaymentRequest_UpdateWith_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequest_UpdateWith_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PaymentDetails, val.details);
  };
  function PaymentRequest_NoUpdatedPaymentDetails_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequest_NoUpdatedPaymentDetails_Params.prototype.initDefaults_ = function() {
  };
  PaymentRequest_NoUpdatedPaymentDetails_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequest_NoUpdatedPaymentDetails_Params.validate = function(messageValidator, offset) {
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

  PaymentRequest_NoUpdatedPaymentDetails_Params.encodedSize = codec.kStructHeaderSize + 0;

  PaymentRequest_NoUpdatedPaymentDetails_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequest_NoUpdatedPaymentDetails_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PaymentRequest_NoUpdatedPaymentDetails_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequest_NoUpdatedPaymentDetails_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PaymentRequest_Abort_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequest_Abort_Params.prototype.initDefaults_ = function() {
  };
  PaymentRequest_Abort_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequest_Abort_Params.validate = function(messageValidator, offset) {
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

  PaymentRequest_Abort_Params.encodedSize = codec.kStructHeaderSize + 0;

  PaymentRequest_Abort_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequest_Abort_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PaymentRequest_Abort_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequest_Abort_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PaymentRequest_Complete_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequest_Complete_Params.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  PaymentRequest_Complete_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequest_Complete_Params.validate = function(messageValidator, offset) {
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


    // validate PaymentRequest_Complete_Params.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, PaymentComplete);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentRequest_Complete_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentRequest_Complete_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequest_Complete_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PaymentRequest_Complete_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequest_Complete_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PaymentRequest_Retry_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequest_Retry_Params.prototype.initDefaults_ = function() {
    this.errors = null;
  };
  PaymentRequest_Retry_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequest_Retry_Params.validate = function(messageValidator, offset) {
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


    // validate PaymentRequest_Retry_Params.errors
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, payment_request_data$.PaymentValidationErrors, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentRequest_Retry_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentRequest_Retry_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequest_Retry_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errors = decoder.decodeStructPointer(payment_request_data$.PaymentValidationErrors);
    return val;
  };

  PaymentRequest_Retry_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequest_Retry_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(payment_request_data$.PaymentValidationErrors, val.errors);
  };
  function PaymentRequest_CanMakePayment_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequest_CanMakePayment_Params.prototype.initDefaults_ = function() {
    this.legacyMode = false;
  };
  PaymentRequest_CanMakePayment_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequest_CanMakePayment_Params.validate = function(messageValidator, offset) {
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

  PaymentRequest_CanMakePayment_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentRequest_CanMakePayment_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequest_CanMakePayment_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.legacyMode = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PaymentRequest_CanMakePayment_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequest_CanMakePayment_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.legacyMode & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PaymentRequest_HasEnrolledInstrument_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentRequest_HasEnrolledInstrument_Params.prototype.initDefaults_ = function() {
    this.perMethodQuota = false;
  };
  PaymentRequest_HasEnrolledInstrument_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentRequest_HasEnrolledInstrument_Params.validate = function(messageValidator, offset) {
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

  PaymentRequest_HasEnrolledInstrument_Params.encodedSize = codec.kStructHeaderSize + 8;

  PaymentRequest_HasEnrolledInstrument_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentRequest_HasEnrolledInstrument_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.perMethodQuota = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PaymentRequest_HasEnrolledInstrument_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentRequest_HasEnrolledInstrument_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.perMethodQuota & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kPaymentRequestClient_OnPaymentMethodChange_Name = 0;
  var kPaymentRequestClient_OnShippingAddressChange_Name = 1;
  var kPaymentRequestClient_OnShippingOptionChange_Name = 2;
  var kPaymentRequestClient_OnPayerDetailChange_Name = 3;
  var kPaymentRequestClient_OnPaymentResponse_Name = 4;
  var kPaymentRequestClient_OnError_Name = 5;
  var kPaymentRequestClient_OnComplete_Name = 6;
  var kPaymentRequestClient_OnAbort_Name = 7;
  var kPaymentRequestClient_OnCanMakePayment_Name = 8;
  var kPaymentRequestClient_OnHasEnrolledInstrument_Name = 9;
  var kPaymentRequestClient_WarnNoFavicon_Name = 10;

  function PaymentRequestClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PaymentRequestClient,
                                                   handleOrPtrInfo);
  }

  function PaymentRequestClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PaymentRequestClient, associatedInterfacePtrInfo);
  }

  PaymentRequestClientAssociatedPtr.prototype =
      Object.create(PaymentRequestClientPtr.prototype);
  PaymentRequestClientAssociatedPtr.prototype.constructor =
      PaymentRequestClientAssociatedPtr;

  function PaymentRequestClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  PaymentRequestClientPtr.prototype.onPaymentMethodChange = function() {
    return PaymentRequestClientProxy.prototype.onPaymentMethodChange
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestClientProxy.prototype.onPaymentMethodChange = function(methodName, stringifiedDetails) {
    var params_ = new PaymentRequestClient_OnPaymentMethodChange_Params();
    params_.methodName = methodName;
    params_.stringifiedDetails = stringifiedDetails;
    var builder = new codec.MessageV0Builder(
        kPaymentRequestClient_OnPaymentMethodChange_Name,
        codec.align(PaymentRequestClient_OnPaymentMethodChange_Params.encodedSize));
    builder.encodeStruct(PaymentRequestClient_OnPaymentMethodChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestClientPtr.prototype.onShippingAddressChange = function() {
    return PaymentRequestClientProxy.prototype.onShippingAddressChange
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestClientProxy.prototype.onShippingAddressChange = function(address) {
    var params_ = new PaymentRequestClient_OnShippingAddressChange_Params();
    params_.address = address;
    var builder = new codec.MessageV0Builder(
        kPaymentRequestClient_OnShippingAddressChange_Name,
        codec.align(PaymentRequestClient_OnShippingAddressChange_Params.encodedSize));
    builder.encodeStruct(PaymentRequestClient_OnShippingAddressChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestClientPtr.prototype.onShippingOptionChange = function() {
    return PaymentRequestClientProxy.prototype.onShippingOptionChange
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestClientProxy.prototype.onShippingOptionChange = function(shippingOptionId) {
    var params_ = new PaymentRequestClient_OnShippingOptionChange_Params();
    params_.shippingOptionId = shippingOptionId;
    var builder = new codec.MessageV0Builder(
        kPaymentRequestClient_OnShippingOptionChange_Name,
        codec.align(PaymentRequestClient_OnShippingOptionChange_Params.encodedSize));
    builder.encodeStruct(PaymentRequestClient_OnShippingOptionChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestClientPtr.prototype.onPayerDetailChange = function() {
    return PaymentRequestClientProxy.prototype.onPayerDetailChange
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestClientProxy.prototype.onPayerDetailChange = function(detail) {
    var params_ = new PaymentRequestClient_OnPayerDetailChange_Params();
    params_.detail = detail;
    var builder = new codec.MessageV0Builder(
        kPaymentRequestClient_OnPayerDetailChange_Name,
        codec.align(PaymentRequestClient_OnPayerDetailChange_Params.encodedSize));
    builder.encodeStruct(PaymentRequestClient_OnPayerDetailChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestClientPtr.prototype.onPaymentResponse = function() {
    return PaymentRequestClientProxy.prototype.onPaymentResponse
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestClientProxy.prototype.onPaymentResponse = function(response) {
    var params_ = new PaymentRequestClient_OnPaymentResponse_Params();
    params_.response = response;
    var builder = new codec.MessageV0Builder(
        kPaymentRequestClient_OnPaymentResponse_Name,
        codec.align(PaymentRequestClient_OnPaymentResponse_Params.encodedSize));
    builder.encodeStruct(PaymentRequestClient_OnPaymentResponse_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestClientPtr.prototype.onError = function() {
    return PaymentRequestClientProxy.prototype.onError
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestClientProxy.prototype.onError = function(error) {
    var params_ = new PaymentRequestClient_OnError_Params();
    params_.error = error;
    var builder = new codec.MessageV0Builder(
        kPaymentRequestClient_OnError_Name,
        codec.align(PaymentRequestClient_OnError_Params.encodedSize));
    builder.encodeStruct(PaymentRequestClient_OnError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestClientPtr.prototype.onComplete = function() {
    return PaymentRequestClientProxy.prototype.onComplete
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestClientProxy.prototype.onComplete = function() {
    var params_ = new PaymentRequestClient_OnComplete_Params();
    var builder = new codec.MessageV0Builder(
        kPaymentRequestClient_OnComplete_Name,
        codec.align(PaymentRequestClient_OnComplete_Params.encodedSize));
    builder.encodeStruct(PaymentRequestClient_OnComplete_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestClientPtr.prototype.onAbort = function() {
    return PaymentRequestClientProxy.prototype.onAbort
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestClientProxy.prototype.onAbort = function(abortedSuccessfully) {
    var params_ = new PaymentRequestClient_OnAbort_Params();
    params_.abortedSuccessfully = abortedSuccessfully;
    var builder = new codec.MessageV0Builder(
        kPaymentRequestClient_OnAbort_Name,
        codec.align(PaymentRequestClient_OnAbort_Params.encodedSize));
    builder.encodeStruct(PaymentRequestClient_OnAbort_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestClientPtr.prototype.onCanMakePayment = function() {
    return PaymentRequestClientProxy.prototype.onCanMakePayment
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestClientProxy.prototype.onCanMakePayment = function(result) {
    var params_ = new PaymentRequestClient_OnCanMakePayment_Params();
    params_.result = result;
    var builder = new codec.MessageV0Builder(
        kPaymentRequestClient_OnCanMakePayment_Name,
        codec.align(PaymentRequestClient_OnCanMakePayment_Params.encodedSize));
    builder.encodeStruct(PaymentRequestClient_OnCanMakePayment_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestClientPtr.prototype.onHasEnrolledInstrument = function() {
    return PaymentRequestClientProxy.prototype.onHasEnrolledInstrument
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestClientProxy.prototype.onHasEnrolledInstrument = function(result) {
    var params_ = new PaymentRequestClient_OnHasEnrolledInstrument_Params();
    params_.result = result;
    var builder = new codec.MessageV0Builder(
        kPaymentRequestClient_OnHasEnrolledInstrument_Name,
        codec.align(PaymentRequestClient_OnHasEnrolledInstrument_Params.encodedSize));
    builder.encodeStruct(PaymentRequestClient_OnHasEnrolledInstrument_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestClientPtr.prototype.warnNoFavicon = function() {
    return PaymentRequestClientProxy.prototype.warnNoFavicon
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestClientProxy.prototype.warnNoFavicon = function() {
    var params_ = new PaymentRequestClient_WarnNoFavicon_Params();
    var builder = new codec.MessageV0Builder(
        kPaymentRequestClient_WarnNoFavicon_Name,
        codec.align(PaymentRequestClient_WarnNoFavicon_Params.encodedSize));
    builder.encodeStruct(PaymentRequestClient_WarnNoFavicon_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PaymentRequestClientStub(delegate) {
    this.delegate_ = delegate;
  }
  PaymentRequestClientStub.prototype.onPaymentMethodChange = function(methodName, stringifiedDetails) {
    return this.delegate_ && this.delegate_.onPaymentMethodChange && this.delegate_.onPaymentMethodChange(methodName, stringifiedDetails);
  }
  PaymentRequestClientStub.prototype.onShippingAddressChange = function(address) {
    return this.delegate_ && this.delegate_.onShippingAddressChange && this.delegate_.onShippingAddressChange(address);
  }
  PaymentRequestClientStub.prototype.onShippingOptionChange = function(shippingOptionId) {
    return this.delegate_ && this.delegate_.onShippingOptionChange && this.delegate_.onShippingOptionChange(shippingOptionId);
  }
  PaymentRequestClientStub.prototype.onPayerDetailChange = function(detail) {
    return this.delegate_ && this.delegate_.onPayerDetailChange && this.delegate_.onPayerDetailChange(detail);
  }
  PaymentRequestClientStub.prototype.onPaymentResponse = function(response) {
    return this.delegate_ && this.delegate_.onPaymentResponse && this.delegate_.onPaymentResponse(response);
  }
  PaymentRequestClientStub.prototype.onError = function(error) {
    return this.delegate_ && this.delegate_.onError && this.delegate_.onError(error);
  }
  PaymentRequestClientStub.prototype.onComplete = function() {
    return this.delegate_ && this.delegate_.onComplete && this.delegate_.onComplete();
  }
  PaymentRequestClientStub.prototype.onAbort = function(abortedSuccessfully) {
    return this.delegate_ && this.delegate_.onAbort && this.delegate_.onAbort(abortedSuccessfully);
  }
  PaymentRequestClientStub.prototype.onCanMakePayment = function(result) {
    return this.delegate_ && this.delegate_.onCanMakePayment && this.delegate_.onCanMakePayment(result);
  }
  PaymentRequestClientStub.prototype.onHasEnrolledInstrument = function(result) {
    return this.delegate_ && this.delegate_.onHasEnrolledInstrument && this.delegate_.onHasEnrolledInstrument(result);
  }
  PaymentRequestClientStub.prototype.warnNoFavicon = function() {
    return this.delegate_ && this.delegate_.warnNoFavicon && this.delegate_.warnNoFavicon();
  }

  PaymentRequestClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPaymentRequestClient_OnPaymentMethodChange_Name:
      var params = reader.decodeStruct(PaymentRequestClient_OnPaymentMethodChange_Params);
      this.onPaymentMethodChange(params.methodName, params.stringifiedDetails);
      return true;
    case kPaymentRequestClient_OnShippingAddressChange_Name:
      var params = reader.decodeStruct(PaymentRequestClient_OnShippingAddressChange_Params);
      this.onShippingAddressChange(params.address);
      return true;
    case kPaymentRequestClient_OnShippingOptionChange_Name:
      var params = reader.decodeStruct(PaymentRequestClient_OnShippingOptionChange_Params);
      this.onShippingOptionChange(params.shippingOptionId);
      return true;
    case kPaymentRequestClient_OnPayerDetailChange_Name:
      var params = reader.decodeStruct(PaymentRequestClient_OnPayerDetailChange_Params);
      this.onPayerDetailChange(params.detail);
      return true;
    case kPaymentRequestClient_OnPaymentResponse_Name:
      var params = reader.decodeStruct(PaymentRequestClient_OnPaymentResponse_Params);
      this.onPaymentResponse(params.response);
      return true;
    case kPaymentRequestClient_OnError_Name:
      var params = reader.decodeStruct(PaymentRequestClient_OnError_Params);
      this.onError(params.error);
      return true;
    case kPaymentRequestClient_OnComplete_Name:
      var params = reader.decodeStruct(PaymentRequestClient_OnComplete_Params);
      this.onComplete();
      return true;
    case kPaymentRequestClient_OnAbort_Name:
      var params = reader.decodeStruct(PaymentRequestClient_OnAbort_Params);
      this.onAbort(params.abortedSuccessfully);
      return true;
    case kPaymentRequestClient_OnCanMakePayment_Name:
      var params = reader.decodeStruct(PaymentRequestClient_OnCanMakePayment_Params);
      this.onCanMakePayment(params.result);
      return true;
    case kPaymentRequestClient_OnHasEnrolledInstrument_Name:
      var params = reader.decodeStruct(PaymentRequestClient_OnHasEnrolledInstrument_Params);
      this.onHasEnrolledInstrument(params.result);
      return true;
    case kPaymentRequestClient_WarnNoFavicon_Name:
      var params = reader.decodeStruct(PaymentRequestClient_WarnNoFavicon_Params);
      this.warnNoFavicon();
      return true;
    default:
      return false;
    }
  };

  PaymentRequestClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePaymentRequestClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPaymentRequestClient_OnPaymentMethodChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequestClient_OnPaymentMethodChange_Params;
      break;
      case kPaymentRequestClient_OnShippingAddressChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequestClient_OnShippingAddressChange_Params;
      break;
      case kPaymentRequestClient_OnShippingOptionChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequestClient_OnShippingOptionChange_Params;
      break;
      case kPaymentRequestClient_OnPayerDetailChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequestClient_OnPayerDetailChange_Params;
      break;
      case kPaymentRequestClient_OnPaymentResponse_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequestClient_OnPaymentResponse_Params;
      break;
      case kPaymentRequestClient_OnError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequestClient_OnError_Params;
      break;
      case kPaymentRequestClient_OnComplete_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequestClient_OnComplete_Params;
      break;
      case kPaymentRequestClient_OnAbort_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequestClient_OnAbort_Params;
      break;
      case kPaymentRequestClient_OnCanMakePayment_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequestClient_OnCanMakePayment_Params;
      break;
      case kPaymentRequestClient_OnHasEnrolledInstrument_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequestClient_OnHasEnrolledInstrument_Params;
      break;
      case kPaymentRequestClient_WarnNoFavicon_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequestClient_WarnNoFavicon_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePaymentRequestClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PaymentRequestClient = {
    name: 'payments.mojom.PaymentRequestClient',
    kVersion: 0,
    ptrClass: PaymentRequestClientPtr,
    proxyClass: PaymentRequestClientProxy,
    stubClass: PaymentRequestClientStub,
    validateRequest: validatePaymentRequestClientRequest,
    validateResponse: null,
  };
  PaymentRequestClientStub.prototype.validator = validatePaymentRequestClientRequest;
  PaymentRequestClientProxy.prototype.validator = null;
  var kPaymentRequest_Init_Name = 0;
  var kPaymentRequest_Show_Name = 1;
  var kPaymentRequest_UpdateWith_Name = 2;
  var kPaymentRequest_NoUpdatedPaymentDetails_Name = 3;
  var kPaymentRequest_Abort_Name = 4;
  var kPaymentRequest_Complete_Name = 5;
  var kPaymentRequest_Retry_Name = 6;
  var kPaymentRequest_CanMakePayment_Name = 7;
  var kPaymentRequest_HasEnrolledInstrument_Name = 8;

  function PaymentRequestPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PaymentRequest,
                                                   handleOrPtrInfo);
  }

  function PaymentRequestAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PaymentRequest, associatedInterfacePtrInfo);
  }

  PaymentRequestAssociatedPtr.prototype =
      Object.create(PaymentRequestPtr.prototype);
  PaymentRequestAssociatedPtr.prototype.constructor =
      PaymentRequestAssociatedPtr;

  function PaymentRequestProxy(receiver) {
    this.receiver_ = receiver;
  }
  PaymentRequestPtr.prototype.init = function() {
    return PaymentRequestProxy.prototype.init
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestProxy.prototype.init = function(client, methodData, details, options) {
    var params_ = new PaymentRequest_Init_Params();
    params_.client = client;
    params_.methodData = methodData;
    params_.details = details;
    params_.options = options;
    var builder = new codec.MessageV0Builder(
        kPaymentRequest_Init_Name,
        codec.align(PaymentRequest_Init_Params.encodedSize));
    builder.encodeStruct(PaymentRequest_Init_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestPtr.prototype.show = function() {
    return PaymentRequestProxy.prototype.show
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestProxy.prototype.show = function(isUserGesture, waitForUpdatedDetails) {
    var params_ = new PaymentRequest_Show_Params();
    params_.isUserGesture = isUserGesture;
    params_.waitForUpdatedDetails = waitForUpdatedDetails;
    var builder = new codec.MessageV0Builder(
        kPaymentRequest_Show_Name,
        codec.align(PaymentRequest_Show_Params.encodedSize));
    builder.encodeStruct(PaymentRequest_Show_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestPtr.prototype.updateWith = function() {
    return PaymentRequestProxy.prototype.updateWith
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestProxy.prototype.updateWith = function(details) {
    var params_ = new PaymentRequest_UpdateWith_Params();
    params_.details = details;
    var builder = new codec.MessageV0Builder(
        kPaymentRequest_UpdateWith_Name,
        codec.align(PaymentRequest_UpdateWith_Params.encodedSize));
    builder.encodeStruct(PaymentRequest_UpdateWith_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestPtr.prototype.noUpdatedPaymentDetails = function() {
    return PaymentRequestProxy.prototype.noUpdatedPaymentDetails
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestProxy.prototype.noUpdatedPaymentDetails = function() {
    var params_ = new PaymentRequest_NoUpdatedPaymentDetails_Params();
    var builder = new codec.MessageV0Builder(
        kPaymentRequest_NoUpdatedPaymentDetails_Name,
        codec.align(PaymentRequest_NoUpdatedPaymentDetails_Params.encodedSize));
    builder.encodeStruct(PaymentRequest_NoUpdatedPaymentDetails_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestPtr.prototype.abort = function() {
    return PaymentRequestProxy.prototype.abort
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestProxy.prototype.abort = function() {
    var params_ = new PaymentRequest_Abort_Params();
    var builder = new codec.MessageV0Builder(
        kPaymentRequest_Abort_Name,
        codec.align(PaymentRequest_Abort_Params.encodedSize));
    builder.encodeStruct(PaymentRequest_Abort_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestPtr.prototype.complete = function() {
    return PaymentRequestProxy.prototype.complete
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestProxy.prototype.complete = function(result) {
    var params_ = new PaymentRequest_Complete_Params();
    params_.result = result;
    var builder = new codec.MessageV0Builder(
        kPaymentRequest_Complete_Name,
        codec.align(PaymentRequest_Complete_Params.encodedSize));
    builder.encodeStruct(PaymentRequest_Complete_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestPtr.prototype.retry = function() {
    return PaymentRequestProxy.prototype.retry
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestProxy.prototype.retry = function(errors) {
    var params_ = new PaymentRequest_Retry_Params();
    params_.errors = errors;
    var builder = new codec.MessageV0Builder(
        kPaymentRequest_Retry_Name,
        codec.align(PaymentRequest_Retry_Params.encodedSize));
    builder.encodeStruct(PaymentRequest_Retry_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestPtr.prototype.canMakePayment = function() {
    return PaymentRequestProxy.prototype.canMakePayment
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestProxy.prototype.canMakePayment = function(legacyMode) {
    var params_ = new PaymentRequest_CanMakePayment_Params();
    params_.legacyMode = legacyMode;
    var builder = new codec.MessageV0Builder(
        kPaymentRequest_CanMakePayment_Name,
        codec.align(PaymentRequest_CanMakePayment_Params.encodedSize));
    builder.encodeStruct(PaymentRequest_CanMakePayment_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PaymentRequestPtr.prototype.hasEnrolledInstrument = function() {
    return PaymentRequestProxy.prototype.hasEnrolledInstrument
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentRequestProxy.prototype.hasEnrolledInstrument = function(perMethodQuota) {
    var params_ = new PaymentRequest_HasEnrolledInstrument_Params();
    params_.perMethodQuota = perMethodQuota;
    var builder = new codec.MessageV0Builder(
        kPaymentRequest_HasEnrolledInstrument_Name,
        codec.align(PaymentRequest_HasEnrolledInstrument_Params.encodedSize));
    builder.encodeStruct(PaymentRequest_HasEnrolledInstrument_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PaymentRequestStub(delegate) {
    this.delegate_ = delegate;
  }
  PaymentRequestStub.prototype.init = function(client, methodData, details, options) {
    return this.delegate_ && this.delegate_.init && this.delegate_.init(client, methodData, details, options);
  }
  PaymentRequestStub.prototype.show = function(isUserGesture, waitForUpdatedDetails) {
    return this.delegate_ && this.delegate_.show && this.delegate_.show(isUserGesture, waitForUpdatedDetails);
  }
  PaymentRequestStub.prototype.updateWith = function(details) {
    return this.delegate_ && this.delegate_.updateWith && this.delegate_.updateWith(details);
  }
  PaymentRequestStub.prototype.noUpdatedPaymentDetails = function() {
    return this.delegate_ && this.delegate_.noUpdatedPaymentDetails && this.delegate_.noUpdatedPaymentDetails();
  }
  PaymentRequestStub.prototype.abort = function() {
    return this.delegate_ && this.delegate_.abort && this.delegate_.abort();
  }
  PaymentRequestStub.prototype.complete = function(result) {
    return this.delegate_ && this.delegate_.complete && this.delegate_.complete(result);
  }
  PaymentRequestStub.prototype.retry = function(errors) {
    return this.delegate_ && this.delegate_.retry && this.delegate_.retry(errors);
  }
  PaymentRequestStub.prototype.canMakePayment = function(legacyMode) {
    return this.delegate_ && this.delegate_.canMakePayment && this.delegate_.canMakePayment(legacyMode);
  }
  PaymentRequestStub.prototype.hasEnrolledInstrument = function(perMethodQuota) {
    return this.delegate_ && this.delegate_.hasEnrolledInstrument && this.delegate_.hasEnrolledInstrument(perMethodQuota);
  }

  PaymentRequestStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPaymentRequest_Init_Name:
      var params = reader.decodeStruct(PaymentRequest_Init_Params);
      this.init(params.client, params.methodData, params.details, params.options);
      return true;
    case kPaymentRequest_Show_Name:
      var params = reader.decodeStruct(PaymentRequest_Show_Params);
      this.show(params.isUserGesture, params.waitForUpdatedDetails);
      return true;
    case kPaymentRequest_UpdateWith_Name:
      var params = reader.decodeStruct(PaymentRequest_UpdateWith_Params);
      this.updateWith(params.details);
      return true;
    case kPaymentRequest_NoUpdatedPaymentDetails_Name:
      var params = reader.decodeStruct(PaymentRequest_NoUpdatedPaymentDetails_Params);
      this.noUpdatedPaymentDetails();
      return true;
    case kPaymentRequest_Abort_Name:
      var params = reader.decodeStruct(PaymentRequest_Abort_Params);
      this.abort();
      return true;
    case kPaymentRequest_Complete_Name:
      var params = reader.decodeStruct(PaymentRequest_Complete_Params);
      this.complete(params.result);
      return true;
    case kPaymentRequest_Retry_Name:
      var params = reader.decodeStruct(PaymentRequest_Retry_Params);
      this.retry(params.errors);
      return true;
    case kPaymentRequest_CanMakePayment_Name:
      var params = reader.decodeStruct(PaymentRequest_CanMakePayment_Params);
      this.canMakePayment(params.legacyMode);
      return true;
    case kPaymentRequest_HasEnrolledInstrument_Name:
      var params = reader.decodeStruct(PaymentRequest_HasEnrolledInstrument_Params);
      this.hasEnrolledInstrument(params.perMethodQuota);
      return true;
    default:
      return false;
    }
  };

  PaymentRequestStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePaymentRequestRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPaymentRequest_Init_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequest_Init_Params;
      break;
      case kPaymentRequest_Show_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequest_Show_Params;
      break;
      case kPaymentRequest_UpdateWith_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequest_UpdateWith_Params;
      break;
      case kPaymentRequest_NoUpdatedPaymentDetails_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequest_NoUpdatedPaymentDetails_Params;
      break;
      case kPaymentRequest_Abort_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequest_Abort_Params;
      break;
      case kPaymentRequest_Complete_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequest_Complete_Params;
      break;
      case kPaymentRequest_Retry_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequest_Retry_Params;
      break;
      case kPaymentRequest_CanMakePayment_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequest_CanMakePayment_Params;
      break;
      case kPaymentRequest_HasEnrolledInstrument_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PaymentRequest_HasEnrolledInstrument_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePaymentRequestResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PaymentRequest = {
    name: 'payments.mojom.PaymentRequest',
    kVersion: 0,
    ptrClass: PaymentRequestPtr,
    proxyClass: PaymentRequestProxy,
    stubClass: PaymentRequestStub,
    validateRequest: validatePaymentRequestRequest,
    validateResponse: null,
  };
  PaymentRequestStub.prototype.validator = validatePaymentRequestRequest;
  PaymentRequestProxy.prototype.validator = null;
  exports.PaymentErrorReason = PaymentErrorReason;
  exports.CanMakePaymentQueryResult = CanMakePaymentQueryResult;
  exports.HasEnrolledInstrumentQueryResult = HasEnrolledInstrumentQueryResult;
  exports.AndroidPayEnvironment = AndroidPayEnvironment;
  exports.BasicCardNetwork = BasicCardNetwork;
  exports.BasicCardType = BasicCardType;
  exports.PaymentShippingType = PaymentShippingType;
  exports.PaymentComplete = PaymentComplete;
  exports.PaymentResponse = PaymentResponse;
  exports.PayerDetail = PayerDetail;
  exports.PaymentItem = PaymentItem;
  exports.PaymentShippingOption = PaymentShippingOption;
  exports.PaymentMethodData = PaymentMethodData;
  exports.PaymentDetailsModifier = PaymentDetailsModifier;
  exports.PaymentDetails = PaymentDetails;
  exports.PaymentOptions = PaymentOptions;
  exports.PaymentRequestClient = PaymentRequestClient;
  exports.PaymentRequestClientPtr = PaymentRequestClientPtr;
  exports.PaymentRequestClientAssociatedPtr = PaymentRequestClientAssociatedPtr;
  exports.PaymentRequest = PaymentRequest;
  exports.PaymentRequestPtr = PaymentRequestPtr;
  exports.PaymentRequestAssociatedPtr = PaymentRequestAssociatedPtr;
})();