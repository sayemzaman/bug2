// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/network_context.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');
  var big_buffer$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/big_buffer.mojom', '../../../../mojo/public/mojom/base/big_buffer.mojom.js');
  }
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var values$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/values.mojom', '../../../../mojo/public/mojom/base/values.mojom.js');
  }
  var address_list$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/address_list.mojom', 'address_list.mojom.js');
  }
  var cookie_manager$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/cookie_manager.mojom', 'cookie_manager.mojom.js');
  }
  var cors_origin_pattern$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/cors_origin_pattern.mojom', 'cors_origin_pattern.mojom.js');
  }
  var host_resolver$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/host_resolver.mojom', 'host_resolver.mojom.js');
  }
  var http_request_headers$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/http_request_headers.mojom', 'http_request_headers.mojom.js');
  }
  var ip_address$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_address.mojom', 'ip_address.mojom.js');
  }
  var ip_endpoint$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_endpoint.mojom', 'ip_endpoint.mojom.js');
  }
  var mdns_responder$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/mdns_responder.mojom', 'mdns_responder.mojom.js');
  }
  var mutable_network_traffic_annotation_tag$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/mutable_network_traffic_annotation_tag.mojom', 'mutable_network_traffic_annotation_tag.mojom.js');
  }
  var net_log$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/net_log.mojom', 'net_log.mojom.js');
  }
  var network_param$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_param.mojom', 'network_param.mojom.js');
  }
  var origin_policy_manager$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/origin_policy_manager.mojom', 'origin_policy_manager.mojom.js');
  }
  var p2p$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/p2p.mojom', 'p2p.mojom.js');
  }
  var p2p_trusted$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/p2p_trusted.mojom', 'p2p_trusted.mojom.js');
  }
  var proxy_config$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/proxy_config.mojom', 'proxy_config.mojom.js');
  }
  var proxy_config_with_annotation$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/proxy_config_with_annotation.mojom', 'proxy_config_with_annotation.mojom.js');
  }
  var proxy_lookup_client$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/proxy_lookup_client.mojom', 'proxy_lookup_client.mojom.js');
  }
  var proxy_resolving_socket$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/proxy_resolving_socket.mojom', 'proxy_resolving_socket.mojom.js');
  }
  var restricted_cookie_manager$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/restricted_cookie_manager.mojom', 'restricted_cookie_manager.mojom.js');
  }
  var ssl_config$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ssl_config.mojom', 'ssl_config.mojom.js');
  }
  var tcp_socket$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/tcp_socket.mojom', 'tcp_socket.mojom.js');
  }
  var udp_socket$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/udp_socket.mojom', 'udp_socket.mojom.js');
  }
  var url_loader$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader.mojom', 'url_loader.mojom.js');
  }
  var url_loader_factory$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader_factory.mojom', 'url_loader_factory.mojom.js');
  }
  var websocket$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/websocket.mojom', 'websocket.mojom.js');
  }
  var proxy_resolver$ =
      mojo.internal.exposeNamespace('proxyResolver.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/proxy_resolver/public/mojom/proxy_resolver.mojom', '../../../proxy_resolver/public/mojom/proxy_resolver.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../url/mojom/origin.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }
  var ct_log_info$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ct_log_info.mojom', 'ct_log_info.mojom.js');
  }


  var kWebSocketOptionNone = 0;
  var kWebSocketOptionBlockAllCookies = 1;
  var kWebSocketOptionBlockThirdPartyCookies = 2;
  var kBrowserProcessId = 0;
  var kInvalidProcessId = 0xffffffff;

  function CustomProxyConfig(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CustomProxyConfig.prototype.initDefaults_ = function() {
    this.rules = null;
    this.shouldOverrideExistingConfig = false;
    this.allowNonIdempotentMethods = false;
    this.assumeHttpsProxiesSupportQuic = false;
    this.canUseProxyOnHttpUrlRedirectCycles = true;
    this.preCacheHeaders = null;
    this.postCacheHeaders = null;
    this.connectTunnelHeaders = null;
  };
  CustomProxyConfig.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CustomProxyConfig.validate = function(messageValidator, offset) {
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


    // validate CustomProxyConfig.rules
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, proxy_config$.ProxyRules, false);
    if (err !== validator.validationError.NONE)
        return err;






    // validate CustomProxyConfig.preCacheHeaders
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, http_request_headers$.HttpRequestHeaders, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CustomProxyConfig.postCacheHeaders
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, http_request_headers$.HttpRequestHeaders, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CustomProxyConfig.connectTunnelHeaders
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, http_request_headers$.HttpRequestHeaders, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CustomProxyConfig.encodedSize = codec.kStructHeaderSize + 40;

  CustomProxyConfig.decode = function(decoder) {
    var packed;
    var val = new CustomProxyConfig();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rules = decoder.decodeStructPointer(proxy_config$.ProxyRules);
    packed = decoder.readUint8();
    val.shouldOverrideExistingConfig = (packed >> 0) & 1 ? true : false;
    val.allowNonIdempotentMethods = (packed >> 1) & 1 ? true : false;
    val.assumeHttpsProxiesSupportQuic = (packed >> 2) & 1 ? true : false;
    val.canUseProxyOnHttpUrlRedirectCycles = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.preCacheHeaders = decoder.decodeStructPointer(http_request_headers$.HttpRequestHeaders);
    val.postCacheHeaders = decoder.decodeStructPointer(http_request_headers$.HttpRequestHeaders);
    val.connectTunnelHeaders = decoder.decodeStructPointer(http_request_headers$.HttpRequestHeaders);
    return val;
  };

  CustomProxyConfig.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CustomProxyConfig.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(proxy_config$.ProxyRules, val.rules);
    packed = 0;
    packed |= (val.shouldOverrideExistingConfig & 1) << 0
    packed |= (val.allowNonIdempotentMethods & 1) << 1
    packed |= (val.assumeHttpsProxiesSupportQuic & 1) << 2
    packed |= (val.canUseProxyOnHttpUrlRedirectCycles & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(http_request_headers$.HttpRequestHeaders, val.preCacheHeaders);
    encoder.encodeStructPointer(http_request_headers$.HttpRequestHeaders, val.postCacheHeaders);
    encoder.encodeStructPointer(http_request_headers$.HttpRequestHeaders, val.connectTunnelHeaders);
  };
  function NetworkContextParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContextParams.prototype.initDefaults_ = function() {
    this.contextName = null;
    this.userAgent = null;
    this.acceptLanguage = null;
    this.enableBrotli = true;
    this.enableReferrers = true;
    this.validateReferrerPolicyOnInitialRequest = true;
    this.enableEncryptedCookies = true;
    this.restoreOldSessionCookies = false;
    this.persistSessionCookies = false;
    this.httpCacheEnabled = true;
    this.enableFtpUrlSupport = false;
    this.checkClearTextPermitted = false;
    this.enforceChromeCtPolicy = false;
    this.http09OnNonDefaultPortsEnabled = false;
    this.disableIdleSocketsCloseOnMemoryPressure = false;
    this.pacQuickCheckEnabled = true;
    this.enableCertificateReporting = false;
    this.enableExpectCtReporting = false;
    this.enableDomainReliability = false;
    this.discardDomainReliablityUploads = false;
    this.skipReportingSendPermissionCheck = false;
    this.primaryNetworkContext = false;
    this.httpCacheMaxSize = 0;
    this.quicUserAgentId = null;
    this.proxyResolverFactory = new proxy_resolver$.ProxyResolverFactoryPtr();
    this.cookiePath = null;
    this.httpCachePath = null;
    this.httpServerPropertiesPath = null;
    this.transportSecurityPersisterPath = null;
    this.initialSslConfig = null;
    this.sslConfigClientRequest = new bindings.InterfaceRequest();
    this.proxyConfigClientRequest = new bindings.InterfaceRequest();
    this.initialProxyConfig = null;
    this.initialCustomProxyConfig = null;
    this.customProxyConfigClientRequest = new bindings.InterfaceRequest();
    this.proxyConfigPollerClient = new proxy_config_with_annotation$.ProxyConfigPollerClientPtr();
    this.proxyErrorClient = new proxy_config_with_annotation$.ProxyErrorClientPtr();
    this.ctLogs = null;
    this.cookieManagerParams = null;
    this.domainReliabilityUploadReporter = null;
    this.reportingDeliveryInterval = null;
    this.corsOriginAccessList = null;
    this.corsExemptHeaderList = null;
  };
  NetworkContextParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContextParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 192}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.contextName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.userAgent
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.acceptLanguage
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate NetworkContextParams.quicUserAgentId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;




    // validate NetworkContextParams.proxyResolverFactory
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 40, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.cookiePath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, file_path$.FilePath, true);
    if (err !== validator.validationError.NONE)
        return err;







    // validate NetworkContextParams.httpCachePath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, file_path$.FilePath, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.httpServerPropertiesPath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 64, file_path$.FilePath, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.transportSecurityPersisterPath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 72, file_path$.FilePath, true);
    if (err !== validator.validationError.NONE)
        return err;







    // validate NetworkContextParams.initialSslConfig
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 80, ssl_config$.SSLConfig, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.sslConfigClientRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 88, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.initialProxyConfig
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 96, proxy_config_with_annotation$.ProxyConfigWithAnnotation, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.proxyConfigClientRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 92, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.initialCustomProxyConfig
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 104, CustomProxyConfig, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.customProxyConfigClientRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 112, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.proxyConfigPollerClient
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 116, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.proxyErrorClient
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 124, true);
    if (err !== validator.validationError.NONE)
        return err;





    // validate NetworkContextParams.ctLogs
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 136, 8, new codec.PointerTo(ct_log_info$.CTLogInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.cookieManagerParams
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 144, cookie_manager$.CookieManagerParams, true);
    if (err !== validator.validationError.NONE)
        return err;



    // validate NetworkContextParams.domainReliabilityUploadReporter
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 152, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate NetworkContextParams.reportingDeliveryInterval
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 160, time$.TimeDelta, true);
    if (err !== validator.validationError.NONE)
        return err;




    // validate NetworkContextParams.corsOriginAccessList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 168, 8, new codec.PointerTo(cors_origin_pattern$.CorsOriginAccessPatterns), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextParams.corsExemptHeaderList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 176, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContextParams.encodedSize = codec.kStructHeaderSize + 184;

  NetworkContextParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContextParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.contextName = decoder.decodeStruct(codec.NullableString);
    val.userAgent = decoder.decodeStruct(codec.String);
    val.acceptLanguage = decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.enableBrotli = (packed >> 0) & 1 ? true : false;
    val.enableReferrers = (packed >> 1) & 1 ? true : false;
    val.validateReferrerPolicyOnInitialRequest = (packed >> 2) & 1 ? true : false;
    val.enableEncryptedCookies = (packed >> 3) & 1 ? true : false;
    val.restoreOldSessionCookies = (packed >> 4) & 1 ? true : false;
    val.persistSessionCookies = (packed >> 5) & 1 ? true : false;
    val.httpCacheEnabled = (packed >> 6) & 1 ? true : false;
    val.enableFtpUrlSupport = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.checkClearTextPermitted = (packed >> 0) & 1 ? true : false;
    val.enforceChromeCtPolicy = (packed >> 1) & 1 ? true : false;
    val.http09OnNonDefaultPortsEnabled = (packed >> 2) & 1 ? true : false;
    val.disableIdleSocketsCloseOnMemoryPressure = (packed >> 3) & 1 ? true : false;
    val.pacQuickCheckEnabled = (packed >> 4) & 1 ? true : false;
    val.enableCertificateReporting = (packed >> 5) & 1 ? true : false;
    val.enableExpectCtReporting = (packed >> 6) & 1 ? true : false;
    val.enableDomainReliability = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.discardDomainReliablityUploads = (packed >> 0) & 1 ? true : false;
    val.skipReportingSendPermissionCheck = (packed >> 1) & 1 ? true : false;
    val.primaryNetworkContext = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    val.httpCacheMaxSize = decoder.decodeStruct(codec.Int32);
    val.quicUserAgentId = decoder.decodeStruct(codec.String);
    val.proxyResolverFactory = decoder.decodeStruct(new codec.NullableInterface(proxy_resolver$.ProxyResolverFactoryPtr));
    val.cookiePath = decoder.decodeStructPointer(file_path$.FilePath);
    val.httpCachePath = decoder.decodeStructPointer(file_path$.FilePath);
    val.httpServerPropertiesPath = decoder.decodeStructPointer(file_path$.FilePath);
    val.transportSecurityPersisterPath = decoder.decodeStructPointer(file_path$.FilePath);
    val.initialSslConfig = decoder.decodeStructPointer(ssl_config$.SSLConfig);
    val.sslConfigClientRequest = decoder.decodeStruct(codec.NullableInterfaceRequest);
    val.proxyConfigClientRequest = decoder.decodeStruct(codec.NullableInterfaceRequest);
    val.initialProxyConfig = decoder.decodeStructPointer(proxy_config_with_annotation$.ProxyConfigWithAnnotation);
    val.initialCustomProxyConfig = decoder.decodeStructPointer(CustomProxyConfig);
    val.customProxyConfigClientRequest = decoder.decodeStruct(codec.NullableInterfaceRequest);
    val.proxyConfigPollerClient = decoder.decodeStruct(new codec.NullableInterface(proxy_config_with_annotation$.ProxyConfigPollerClientPtr));
    val.proxyErrorClient = decoder.decodeStruct(new codec.NullableInterface(proxy_config_with_annotation$.ProxyErrorClientPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.ctLogs = decoder.decodeArrayPointer(new codec.PointerTo(ct_log_info$.CTLogInfo));
    val.cookieManagerParams = decoder.decodeStructPointer(cookie_manager$.CookieManagerParams);
    val.domainReliabilityUploadReporter = decoder.decodeStruct(codec.String);
    val.reportingDeliveryInterval = decoder.decodeStructPointer(time$.TimeDelta);
    val.corsOriginAccessList = decoder.decodeArrayPointer(new codec.PointerTo(cors_origin_pattern$.CorsOriginAccessPatterns));
    val.corsExemptHeaderList = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  NetworkContextParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContextParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.contextName);
    encoder.encodeStruct(codec.String, val.userAgent);
    encoder.encodeStruct(codec.String, val.acceptLanguage);
    packed = 0;
    packed |= (val.enableBrotli & 1) << 0
    packed |= (val.enableReferrers & 1) << 1
    packed |= (val.validateReferrerPolicyOnInitialRequest & 1) << 2
    packed |= (val.enableEncryptedCookies & 1) << 3
    packed |= (val.restoreOldSessionCookies & 1) << 4
    packed |= (val.persistSessionCookies & 1) << 5
    packed |= (val.httpCacheEnabled & 1) << 6
    packed |= (val.enableFtpUrlSupport & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.checkClearTextPermitted & 1) << 0
    packed |= (val.enforceChromeCtPolicy & 1) << 1
    packed |= (val.http09OnNonDefaultPortsEnabled & 1) << 2
    packed |= (val.disableIdleSocketsCloseOnMemoryPressure & 1) << 3
    packed |= (val.pacQuickCheckEnabled & 1) << 4
    packed |= (val.enableCertificateReporting & 1) << 5
    packed |= (val.enableExpectCtReporting & 1) << 6
    packed |= (val.enableDomainReliability & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.discardDomainReliablityUploads & 1) << 0
    packed |= (val.skipReportingSendPermissionCheck & 1) << 1
    packed |= (val.primaryNetworkContext & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.httpCacheMaxSize);
    encoder.encodeStruct(codec.String, val.quicUserAgentId);
    encoder.encodeStruct(new codec.NullableInterface(proxy_resolver$.ProxyResolverFactoryPtr), val.proxyResolverFactory);
    encoder.encodeStructPointer(file_path$.FilePath, val.cookiePath);
    encoder.encodeStructPointer(file_path$.FilePath, val.httpCachePath);
    encoder.encodeStructPointer(file_path$.FilePath, val.httpServerPropertiesPath);
    encoder.encodeStructPointer(file_path$.FilePath, val.transportSecurityPersisterPath);
    encoder.encodeStructPointer(ssl_config$.SSLConfig, val.initialSslConfig);
    encoder.encodeStruct(codec.NullableInterfaceRequest, val.sslConfigClientRequest);
    encoder.encodeStruct(codec.NullableInterfaceRequest, val.proxyConfigClientRequest);
    encoder.encodeStructPointer(proxy_config_with_annotation$.ProxyConfigWithAnnotation, val.initialProxyConfig);
    encoder.encodeStructPointer(CustomProxyConfig, val.initialCustomProxyConfig);
    encoder.encodeStruct(codec.NullableInterfaceRequest, val.customProxyConfigClientRequest);
    encoder.encodeStruct(new codec.NullableInterface(proxy_config_with_annotation$.ProxyConfigPollerClientPtr), val.proxyConfigPollerClient);
    encoder.encodeStruct(new codec.NullableInterface(proxy_config_with_annotation$.ProxyErrorClientPtr), val.proxyErrorClient);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(ct_log_info$.CTLogInfo), val.ctLogs);
    encoder.encodeStructPointer(cookie_manager$.CookieManagerParams, val.cookieManagerParams);
    encoder.encodeStruct(codec.String, val.domainReliabilityUploadReporter);
    encoder.encodeStructPointer(time$.TimeDelta, val.reportingDeliveryInterval);
    encoder.encodeArrayPointer(new codec.PointerTo(cors_origin_pattern$.CorsOriginAccessPatterns), val.corsOriginAccessList);
    encoder.encodeArrayPointer(codec.String, val.corsExemptHeaderList);
  };
  function NetworkConditions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkConditions.prototype.initDefaults_ = function() {
    this.offline = false;
    this.latency = null;
    this.downloadThroughput = 0;
    this.uploadThroughput = 0;
  };
  NetworkConditions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkConditions.validate = function(messageValidator, offset) {
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



    // validate NetworkConditions.latency
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  NetworkConditions.encodedSize = codec.kStructHeaderSize + 32;

  NetworkConditions.decode = function(decoder) {
    var packed;
    var val = new NetworkConditions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.offline = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.latency = decoder.decodeStructPointer(time$.TimeDelta);
    val.downloadThroughput = decoder.decodeStruct(codec.Double);
    val.uploadThroughput = decoder.decodeStruct(codec.Double);
    return val;
  };

  NetworkConditions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkConditions.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.offline & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(time$.TimeDelta, val.latency);
    encoder.encodeStruct(codec.Double, val.downloadThroughput);
    encoder.encodeStruct(codec.Double, val.uploadThroughput);
  };
  function ClearDataFilter(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  ClearDataFilter.Type = {};
  ClearDataFilter.Type.DELETE_MATCHES = 0;
  ClearDataFilter.Type.KEEP_MATCHES = ClearDataFilter.Type.DELETE_MATCHES + 1;
  ClearDataFilter.Type.MIN_VALUE = 0,
  ClearDataFilter.Type.MAX_VALUE = 1,

  ClearDataFilter.Type.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  ClearDataFilter.Type.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  ClearDataFilter.prototype.initDefaults_ = function() {
    this.type = 0;
    this.domains = null;
    this.origins = null;
  };
  ClearDataFilter.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ClearDataFilter.validate = function(messageValidator, offset) {
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


    // validate ClearDataFilter.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ClearDataFilter.Type);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ClearDataFilter.domains
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ClearDataFilter.origins
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(origin$.Origin), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ClearDataFilter.encodedSize = codec.kStructHeaderSize + 24;

  ClearDataFilter.decode = function(decoder) {
    var packed;
    var val = new ClearDataFilter();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.domains = decoder.decodeArrayPointer(codec.String);
    val.origins = decoder.decodeArrayPointer(new codec.PointerTo(origin$.Origin));
    return val;
  };

  ClearDataFilter.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ClearDataFilter.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.String, val.domains);
    encoder.encodeArrayPointer(new codec.PointerTo(origin$.Origin), val.origins);
  };
  function NetworkUsage(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkUsage.prototype.initDefaults_ = function() {
    this.processId = 0;
    this.routingId = 0;
    this.totalBytesReceived = 0;
    this.totalBytesSent = 0;
  };
  NetworkUsage.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkUsage.validate = function(messageValidator, offset) {
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





    return validator.validationError.NONE;
  };

  NetworkUsage.encodedSize = codec.kStructHeaderSize + 24;

  NetworkUsage.decode = function(decoder) {
    var packed;
    var val = new NetworkUsage();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processId = decoder.decodeStruct(codec.Uint32);
    val.routingId = decoder.decodeStruct(codec.Uint32);
    val.totalBytesReceived = decoder.decodeStruct(codec.Int64);
    val.totalBytesSent = decoder.decodeStruct(codec.Int64);
    return val;
  };

  NetworkUsage.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkUsage.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.processId);
    encoder.encodeStruct(codec.Uint32, val.routingId);
    encoder.encodeStruct(codec.Int64, val.totalBytesReceived);
    encoder.encodeStruct(codec.Int64, val.totalBytesSent);
  };
  function SignedExchangeReport(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SignedExchangeReport.prototype.initDefaults_ = function() {
    this.success = false;
    this.statusCode = 0;
    this.type = null;
    this.outerUrl = null;
    this.innerUrl = null;
    this.certUrl = null;
    this.referrer = null;
    this.serverIpAddress = null;
    this.protocol = null;
    this.method = null;
    this.elapsedTime = null;
  };
  SignedExchangeReport.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SignedExchangeReport.validate = function(messageValidator, offset) {
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



    // validate SignedExchangeReport.type
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SignedExchangeReport.outerUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SignedExchangeReport.innerUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SignedExchangeReport.certUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SignedExchangeReport.referrer
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SignedExchangeReport.serverIpAddress
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, ip_address$.IPAddress, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SignedExchangeReport.protocol
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SignedExchangeReport.method
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 64, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate SignedExchangeReport.elapsedTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 72, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SignedExchangeReport.encodedSize = codec.kStructHeaderSize + 80;

  SignedExchangeReport.decode = function(decoder) {
    var packed;
    var val = new SignedExchangeReport();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.statusCode = decoder.decodeStruct(codec.Int32);
    val.type = decoder.decodeStruct(codec.String);
    val.outerUrl = decoder.decodeStructPointer(url$.Url);
    val.innerUrl = decoder.decodeStructPointer(url$.Url);
    val.certUrl = decoder.decodeStructPointer(url$.Url);
    val.referrer = decoder.decodeStruct(codec.String);
    val.serverIpAddress = decoder.decodeStructPointer(ip_address$.IPAddress);
    val.protocol = decoder.decodeStruct(codec.String);
    val.method = decoder.decodeStruct(codec.String);
    val.elapsedTime = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  SignedExchangeReport.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SignedExchangeReport.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.statusCode);
    encoder.encodeStruct(codec.String, val.type);
    encoder.encodeStructPointer(url$.Url, val.outerUrl);
    encoder.encodeStructPointer(url$.Url, val.innerUrl);
    encoder.encodeStructPointer(url$.Url, val.certUrl);
    encoder.encodeStruct(codec.String, val.referrer);
    encoder.encodeStructPointer(ip_address$.IPAddress, val.serverIpAddress);
    encoder.encodeStruct(codec.String, val.protocol);
    encoder.encodeStruct(codec.String, val.method);
    encoder.encodeStructPointer(time$.TimeDelta, val.elapsedTime);
  };
  function URLLoaderFactoryParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderFactoryParams.prototype.initDefaults_ = function() {
    this.processId = kInvalidProcessId;
    this.isCorbEnabled = true;
    this.disableWebSecurity = false;
    this.requestInitiatorSiteLock = null;
    this.headerClient = new TrustedURLLoaderHeaderClientPtr();
    this.factoryBoundAllowPatterns = null;
  };
  URLLoaderFactoryParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderFactoryParams.validate = function(messageValidator, offset) {
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



    // validate URLLoaderFactoryParams.requestInitiatorSiteLock
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, origin$.Origin, true);
    if (err !== validator.validationError.NONE)
        return err;




    // validate URLLoaderFactoryParams.headerClient
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 16, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLLoaderFactoryParams.factoryBoundAllowPatterns
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(cors_origin_pattern$.CorsOriginPattern), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderFactoryParams.encodedSize = codec.kStructHeaderSize + 32;

  URLLoaderFactoryParams.decode = function(decoder) {
    var packed;
    var val = new URLLoaderFactoryParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processId = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.isCorbEnabled = (packed >> 0) & 1 ? true : false;
    val.disableWebSecurity = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.requestInitiatorSiteLock = decoder.decodeStructPointer(origin$.Origin);
    val.headerClient = decoder.decodeStruct(new codec.NullableInterface(TrustedURLLoaderHeaderClientPtr));
    val.factoryBoundAllowPatterns = decoder.decodeArrayPointer(new codec.PointerTo(cors_origin_pattern$.CorsOriginPattern));
    return val;
  };

  URLLoaderFactoryParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderFactoryParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.processId);
    packed = 0;
    packed |= (val.isCorbEnabled & 1) << 0
    packed |= (val.disableWebSecurity & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(origin$.Origin, val.requestInitiatorSiteLock);
    encoder.encodeStruct(new codec.NullableInterface(TrustedURLLoaderHeaderClientPtr), val.headerClient);
    encoder.encodeArrayPointer(new codec.PointerTo(cors_origin_pattern$.CorsOriginPattern), val.factoryBoundAllowPatterns);
  };
  function CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params.prototype.initDefaults_ = function() {
    this.proxyConfig = null;
  };
  CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params.validate = function(messageValidator, offset) {
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


    // validate CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params.proxyConfig
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CustomProxyConfig, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params.encodedSize = codec.kStructHeaderSize + 8;

  CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params.decode = function(decoder) {
    var packed;
    var val = new CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.proxyConfig = decoder.decodeStructPointer(CustomProxyConfig);
    return val;
  };

  CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CustomProxyConfig, val.proxyConfig);
  };
  function CustomProxyConfigClient_MarkProxiesAsBad_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CustomProxyConfigClient_MarkProxiesAsBad_Params.prototype.initDefaults_ = function() {
    this.bypassDuration = null;
    this.badProxies = null;
  };
  CustomProxyConfigClient_MarkProxiesAsBad_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CustomProxyConfigClient_MarkProxiesAsBad_Params.validate = function(messageValidator, offset) {
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


    // validate CustomProxyConfigClient_MarkProxiesAsBad_Params.bypassDuration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CustomProxyConfigClient_MarkProxiesAsBad_Params.badProxies
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, proxy_config$.ProxyList, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CustomProxyConfigClient_MarkProxiesAsBad_Params.encodedSize = codec.kStructHeaderSize + 16;

  CustomProxyConfigClient_MarkProxiesAsBad_Params.decode = function(decoder) {
    var packed;
    var val = new CustomProxyConfigClient_MarkProxiesAsBad_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bypassDuration = decoder.decodeStructPointer(time$.TimeDelta);
    val.badProxies = decoder.decodeStructPointer(proxy_config$.ProxyList);
    return val;
  };

  CustomProxyConfigClient_MarkProxiesAsBad_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CustomProxyConfigClient_MarkProxiesAsBad_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeDelta, val.bypassDuration);
    encoder.encodeStructPointer(proxy_config$.ProxyList, val.badProxies);
  };
  function CustomProxyConfigClient_MarkProxiesAsBad_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CustomProxyConfigClient_MarkProxiesAsBad_ResponseParams.prototype.initDefaults_ = function() {
  };
  CustomProxyConfigClient_MarkProxiesAsBad_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CustomProxyConfigClient_MarkProxiesAsBad_ResponseParams.validate = function(messageValidator, offset) {
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

  CustomProxyConfigClient_MarkProxiesAsBad_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  CustomProxyConfigClient_MarkProxiesAsBad_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CustomProxyConfigClient_MarkProxiesAsBad_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CustomProxyConfigClient_MarkProxiesAsBad_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CustomProxyConfigClient_MarkProxiesAsBad_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function CustomProxyConfigClient_ClearBadProxiesCache_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CustomProxyConfigClient_ClearBadProxiesCache_Params.prototype.initDefaults_ = function() {
  };
  CustomProxyConfigClient_ClearBadProxiesCache_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CustomProxyConfigClient_ClearBadProxiesCache_Params.validate = function(messageValidator, offset) {
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

  CustomProxyConfigClient_ClearBadProxiesCache_Params.encodedSize = codec.kStructHeaderSize + 0;

  CustomProxyConfigClient_ClearBadProxiesCache_Params.decode = function(decoder) {
    var packed;
    var val = new CustomProxyConfigClient_ClearBadProxiesCache_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CustomProxyConfigClient_ClearBadProxiesCache_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CustomProxyConfigClient_ClearBadProxiesCache_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function TrustedHeaderClient_OnBeforeSendHeaders_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrustedHeaderClient_OnBeforeSendHeaders_Params.prototype.initDefaults_ = function() {
    this.headers = null;
  };
  TrustedHeaderClient_OnBeforeSendHeaders_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrustedHeaderClient_OnBeforeSendHeaders_Params.validate = function(messageValidator, offset) {
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


    // validate TrustedHeaderClient_OnBeforeSendHeaders_Params.headers
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, http_request_headers$.HttpRequestHeaders, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TrustedHeaderClient_OnBeforeSendHeaders_Params.encodedSize = codec.kStructHeaderSize + 8;

  TrustedHeaderClient_OnBeforeSendHeaders_Params.decode = function(decoder) {
    var packed;
    var val = new TrustedHeaderClient_OnBeforeSendHeaders_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.headers = decoder.decodeStructPointer(http_request_headers$.HttpRequestHeaders);
    return val;
  };

  TrustedHeaderClient_OnBeforeSendHeaders_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrustedHeaderClient_OnBeforeSendHeaders_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(http_request_headers$.HttpRequestHeaders, val.headers);
  };
  function TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
    this.headers = null;
  };
  TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams.headers
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, http_request_headers$.HttpRequestHeaders, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.headers = decoder.decodeStructPointer(http_request_headers$.HttpRequestHeaders);
    return val;
  };

  TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(http_request_headers$.HttpRequestHeaders, val.headers);
  };
  function TrustedHeaderClient_OnHeadersReceived_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrustedHeaderClient_OnHeadersReceived_Params.prototype.initDefaults_ = function() {
    this.headers = null;
  };
  TrustedHeaderClient_OnHeadersReceived_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrustedHeaderClient_OnHeadersReceived_Params.validate = function(messageValidator, offset) {
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


    // validate TrustedHeaderClient_OnHeadersReceived_Params.headers
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TrustedHeaderClient_OnHeadersReceived_Params.encodedSize = codec.kStructHeaderSize + 8;

  TrustedHeaderClient_OnHeadersReceived_Params.decode = function(decoder) {
    var packed;
    var val = new TrustedHeaderClient_OnHeadersReceived_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.headers = decoder.decodeStruct(codec.String);
    return val;
  };

  TrustedHeaderClient_OnHeadersReceived_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrustedHeaderClient_OnHeadersReceived_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.headers);
  };
  function TrustedHeaderClient_OnHeadersReceived_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrustedHeaderClient_OnHeadersReceived_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
    this.headers = null;
    this.allowedUnsafeRedirectUrl = null;
  };
  TrustedHeaderClient_OnHeadersReceived_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrustedHeaderClient_OnHeadersReceived_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate TrustedHeaderClient_OnHeadersReceived_ResponseParams.headers
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrustedHeaderClient_OnHeadersReceived_ResponseParams.allowedUnsafeRedirectUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TrustedHeaderClient_OnHeadersReceived_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  TrustedHeaderClient_OnHeadersReceived_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TrustedHeaderClient_OnHeadersReceived_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.headers = decoder.decodeStruct(codec.NullableString);
    val.allowedUnsafeRedirectUrl = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  TrustedHeaderClient_OnHeadersReceived_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrustedHeaderClient_OnHeadersReceived_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.NullableString, val.headers);
    encoder.encodeStructPointer(url$.Url, val.allowedUnsafeRedirectUrl);
  };
  function TrustedURLLoaderHeaderClient_OnLoaderCreated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrustedURLLoaderHeaderClient_OnLoaderCreated_Params.prototype.initDefaults_ = function() {
    this.requestId = 0;
    this.headerClient = new bindings.InterfaceRequest();
  };
  TrustedURLLoaderHeaderClient_OnLoaderCreated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrustedURLLoaderHeaderClient_OnLoaderCreated_Params.validate = function(messageValidator, offset) {
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



    // validate TrustedURLLoaderHeaderClient_OnLoaderCreated_Params.headerClient
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TrustedURLLoaderHeaderClient_OnLoaderCreated_Params.encodedSize = codec.kStructHeaderSize + 8;

  TrustedURLLoaderHeaderClient_OnLoaderCreated_Params.decode = function(decoder) {
    var packed;
    var val = new TrustedURLLoaderHeaderClient_OnLoaderCreated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId = decoder.decodeStruct(codec.Int32);
    val.headerClient = decoder.decodeStruct(codec.InterfaceRequest);
    return val;
  };

  TrustedURLLoaderHeaderClient_OnLoaderCreated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrustedURLLoaderHeaderClient_OnLoaderCreated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.requestId);
    encoder.encodeStruct(codec.InterfaceRequest, val.headerClient);
  };
  function NetworkContextClient_OnCanSendReportingReports_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContextClient_OnCanSendReportingReports_Params.prototype.initDefaults_ = function() {
    this.origins = null;
  };
  NetworkContextClient_OnCanSendReportingReports_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContextClient_OnCanSendReportingReports_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContextClient_OnCanSendReportingReports_Params.origins
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(origin$.Origin), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContextClient_OnCanSendReportingReports_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContextClient_OnCanSendReportingReports_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContextClient_OnCanSendReportingReports_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origins = decoder.decodeArrayPointer(new codec.PointerTo(origin$.Origin));
    return val;
  };

  NetworkContextClient_OnCanSendReportingReports_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContextClient_OnCanSendReportingReports_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(origin$.Origin), val.origins);
  };
  function NetworkContextClient_OnCanSendReportingReports_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContextClient_OnCanSendReportingReports_ResponseParams.prototype.initDefaults_ = function() {
    this.origins = null;
  };
  NetworkContextClient_OnCanSendReportingReports_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContextClient_OnCanSendReportingReports_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NetworkContextClient_OnCanSendReportingReports_ResponseParams.origins
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(origin$.Origin), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContextClient_OnCanSendReportingReports_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContextClient_OnCanSendReportingReports_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContextClient_OnCanSendReportingReports_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origins = decoder.decodeArrayPointer(new codec.PointerTo(origin$.Origin));
    return val;
  };

  NetworkContextClient_OnCanSendReportingReports_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContextClient_OnCanSendReportingReports_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(origin$.Origin), val.origins);
  };
  function NetworkContextClient_OnCanSendDomainReliabilityUpload_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContextClient_OnCanSendDomainReliabilityUpload_Params.prototype.initDefaults_ = function() {
    this.origin = null;
  };
  NetworkContextClient_OnCanSendDomainReliabilityUpload_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContextClient_OnCanSendDomainReliabilityUpload_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContextClient_OnCanSendDomainReliabilityUpload_Params.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContextClient_OnCanSendDomainReliabilityUpload_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContextClient_OnCanSendDomainReliabilityUpload_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContextClient_OnCanSendDomainReliabilityUpload_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  NetworkContextClient_OnCanSendDomainReliabilityUpload_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContextClient_OnCanSendDomainReliabilityUpload_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.origin);
  };
  function NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams.prototype.initDefaults_ = function() {
    this.allowed = false;
  };
  NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.allowed = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.allowed & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContextClient_OnClearSiteData_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContextClient_OnClearSiteData_Params.prototype.initDefaults_ = function() {
    this.processId = 0;
    this.routingId = 0;
    this.url = null;
    this.headerValue = null;
    this.loadFlags = 0;
  };
  NetworkContextClient_OnClearSiteData_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContextClient_OnClearSiteData_Params.validate = function(messageValidator, offset) {
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




    // validate NetworkContextClient_OnClearSiteData_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContextClient_OnClearSiteData_Params.headerValue
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  NetworkContextClient_OnClearSiteData_Params.encodedSize = codec.kStructHeaderSize + 32;

  NetworkContextClient_OnClearSiteData_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContextClient_OnClearSiteData_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.processId = decoder.decodeStruct(codec.Uint32);
    val.routingId = decoder.decodeStruct(codec.Int32);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.headerValue = decoder.decodeStruct(codec.String);
    val.loadFlags = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContextClient_OnClearSiteData_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContextClient_OnClearSiteData_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.processId);
    encoder.encodeStruct(codec.Int32, val.routingId);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.headerValue);
    encoder.encodeStruct(codec.Int32, val.loadFlags);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContextClient_OnClearSiteData_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContextClient_OnClearSiteData_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContextClient_OnClearSiteData_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContextClient_OnClearSiteData_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContextClient_OnClearSiteData_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContextClient_OnClearSiteData_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContextClient_OnClearSiteData_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContextClient_OnClearSiteData_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContextClient_OnClearSiteData_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_SetClient_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_SetClient_Params.prototype.initDefaults_ = function() {
    this.client = new NetworkContextClientPtr();
  };
  NetworkContext_SetClient_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_SetClient_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_SetClient_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_SetClient_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_SetClient_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_SetClient_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(new codec.Interface(NetworkContextClientPtr));
    return val;
  };

  NetworkContext_SetClient_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_SetClient_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(NetworkContextClientPtr), val.client);
  };
  function NetworkContext_CreateURLLoaderFactory_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CreateURLLoaderFactory_Params.prototype.initDefaults_ = function() {
    this.urlLoaderFactory = new bindings.InterfaceRequest();
    this.params = null;
  };
  NetworkContext_CreateURLLoaderFactory_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CreateURLLoaderFactory_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_CreateURLLoaderFactory_Params.urlLoaderFactory
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateURLLoaderFactory_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, URLLoaderFactoryParams, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_CreateURLLoaderFactory_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkContext_CreateURLLoaderFactory_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CreateURLLoaderFactory_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.urlLoaderFactory = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.params = decoder.decodeStructPointer(URLLoaderFactoryParams);
    return val;
  };

  NetworkContext_CreateURLLoaderFactory_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CreateURLLoaderFactory_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.urlLoaderFactory);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(URLLoaderFactoryParams, val.params);
  };
  function NetworkContext_ResetURLLoaderFactories_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ResetURLLoaderFactories_Params.prototype.initDefaults_ = function() {
  };
  NetworkContext_ResetURLLoaderFactories_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ResetURLLoaderFactories_Params.validate = function(messageValidator, offset) {
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

  NetworkContext_ResetURLLoaderFactories_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ResetURLLoaderFactories_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ResetURLLoaderFactories_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ResetURLLoaderFactories_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ResetURLLoaderFactories_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_GetCookieManager_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_GetCookieManager_Params.prototype.initDefaults_ = function() {
    this.cookieManager = new bindings.InterfaceRequest();
  };
  NetworkContext_GetCookieManager_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_GetCookieManager_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_GetCookieManager_Params.cookieManager
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_GetCookieManager_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_GetCookieManager_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_GetCookieManager_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cookieManager = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_GetCookieManager_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_GetCookieManager_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.cookieManager);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_GetRestrictedCookieManager_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_GetRestrictedCookieManager_Params.prototype.initDefaults_ = function() {
    this.restrictedCookieManager = new bindings.InterfaceRequest();
    this.origin = null;
  };
  NetworkContext_GetRestrictedCookieManager_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_GetRestrictedCookieManager_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_GetRestrictedCookieManager_Params.restrictedCookieManager
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_GetRestrictedCookieManager_Params.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_GetRestrictedCookieManager_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkContext_GetRestrictedCookieManager_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_GetRestrictedCookieManager_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.restrictedCookieManager = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.origin = decoder.decodeStructPointer(origin$.Origin);
    return val;
  };

  NetworkContext_GetRestrictedCookieManager_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_GetRestrictedCookieManager_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.restrictedCookieManager);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
  };
  function NetworkContext_ClearNetworkingHistorySince_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearNetworkingHistorySince_Params.prototype.initDefaults_ = function() {
    this.startTime = null;
  };
  NetworkContext_ClearNetworkingHistorySince_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearNetworkingHistorySince_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_ClearNetworkingHistorySince_Params.startTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_ClearNetworkingHistorySince_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_ClearNetworkingHistorySince_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearNetworkingHistorySince_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.startTime = decoder.decodeStructPointer(time$.Time);
    return val;
  };

  NetworkContext_ClearNetworkingHistorySince_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearNetworkingHistorySince_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.Time, val.startTime);
  };
  function NetworkContext_ClearNetworkingHistorySince_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearNetworkingHistorySince_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_ClearNetworkingHistorySince_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearNetworkingHistorySince_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_ClearNetworkingHistorySince_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ClearNetworkingHistorySince_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearNetworkingHistorySince_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ClearNetworkingHistorySince_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearNetworkingHistorySince_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_ClearHttpCache_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearHttpCache_Params.prototype.initDefaults_ = function() {
    this.startTime = null;
    this.endTime = null;
    this.filter = null;
  };
  NetworkContext_ClearHttpCache_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearHttpCache_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_ClearHttpCache_Params.startTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_ClearHttpCache_Params.endTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_ClearHttpCache_Params.filter
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, ClearDataFilter, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_ClearHttpCache_Params.encodedSize = codec.kStructHeaderSize + 24;

  NetworkContext_ClearHttpCache_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearHttpCache_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.startTime = decoder.decodeStructPointer(time$.Time);
    val.endTime = decoder.decodeStructPointer(time$.Time);
    val.filter = decoder.decodeStructPointer(ClearDataFilter);
    return val;
  };

  NetworkContext_ClearHttpCache_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearHttpCache_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.Time, val.startTime);
    encoder.encodeStructPointer(time$.Time, val.endTime);
    encoder.encodeStructPointer(ClearDataFilter, val.filter);
  };
  function NetworkContext_ClearHttpCache_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearHttpCache_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_ClearHttpCache_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearHttpCache_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_ClearHttpCache_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ClearHttpCache_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearHttpCache_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ClearHttpCache_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearHttpCache_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_ComputeHttpCacheSize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ComputeHttpCacheSize_Params.prototype.initDefaults_ = function() {
    this.startTime = null;
    this.endTime = null;
  };
  NetworkContext_ComputeHttpCacheSize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ComputeHttpCacheSize_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_ComputeHttpCacheSize_Params.startTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_ComputeHttpCacheSize_Params.endTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_ComputeHttpCacheSize_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkContext_ComputeHttpCacheSize_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ComputeHttpCacheSize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.startTime = decoder.decodeStructPointer(time$.Time);
    val.endTime = decoder.decodeStructPointer(time$.Time);
    return val;
  };

  NetworkContext_ComputeHttpCacheSize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ComputeHttpCacheSize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.Time, val.startTime);
    encoder.encodeStructPointer(time$.Time, val.endTime);
  };
  function NetworkContext_ComputeHttpCacheSize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ComputeHttpCacheSize_ResponseParams.prototype.initDefaults_ = function() {
    this.isUpperBound = false;
    this.sizeOrError = 0;
  };
  NetworkContext_ComputeHttpCacheSize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ComputeHttpCacheSize_ResponseParams.validate = function(messageValidator, offset) {
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



    return validator.validationError.NONE;
  };

  NetworkContext_ComputeHttpCacheSize_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NetworkContext_ComputeHttpCacheSize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ComputeHttpCacheSize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isUpperBound = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.sizeOrError = decoder.decodeStruct(codec.Int64);
    return val;
  };

  NetworkContext_ComputeHttpCacheSize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ComputeHttpCacheSize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isUpperBound & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int64, val.sizeOrError);
  };
  function NetworkContext_NotifyExternalCacheHit_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_NotifyExternalCacheHit_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.httpMethod = null;
    this.topFrameOrigin = null;
  };
  NetworkContext_NotifyExternalCacheHit_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_NotifyExternalCacheHit_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_NotifyExternalCacheHit_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_NotifyExternalCacheHit_Params.httpMethod
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_NotifyExternalCacheHit_Params.topFrameOrigin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, origin$.Origin, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_NotifyExternalCacheHit_Params.encodedSize = codec.kStructHeaderSize + 24;

  NetworkContext_NotifyExternalCacheHit_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_NotifyExternalCacheHit_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.httpMethod = decoder.decodeStruct(codec.String);
    val.topFrameOrigin = decoder.decodeStructPointer(origin$.Origin);
    return val;
  };

  NetworkContext_NotifyExternalCacheHit_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_NotifyExternalCacheHit_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.httpMethod);
    encoder.encodeStructPointer(origin$.Origin, val.topFrameOrigin);
  };
  function NetworkContext_WriteCacheMetadata_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_WriteCacheMetadata_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.priority = 0;
    this.expectedResponseTime = null;
    this.data = null;
  };
  NetworkContext_WriteCacheMetadata_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_WriteCacheMetadata_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_WriteCacheMetadata_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_WriteCacheMetadata_Params.priority
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, url_loader$.RequestPriority);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_WriteCacheMetadata_Params.expectedResponseTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_WriteCacheMetadata_Params.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 24, big_buffer$.BigBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_WriteCacheMetadata_Params.encodedSize = codec.kStructHeaderSize + 40;

  NetworkContext_WriteCacheMetadata_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_WriteCacheMetadata_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.priority = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.expectedResponseTime = decoder.decodeStructPointer(time$.Time);
    val.data = decoder.decodeStruct(big_buffer$.BigBuffer);
    return val;
  };

  NetworkContext_WriteCacheMetadata_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_WriteCacheMetadata_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.Int32, val.priority);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(time$.Time, val.expectedResponseTime);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.data);
  };
  function NetworkContext_ClearHostCache_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearHostCache_Params.prototype.initDefaults_ = function() {
    this.filter = null;
  };
  NetworkContext_ClearHostCache_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearHostCache_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_ClearHostCache_Params.filter
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ClearDataFilter, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_ClearHostCache_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_ClearHostCache_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearHostCache_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filter = decoder.decodeStructPointer(ClearDataFilter);
    return val;
  };

  NetworkContext_ClearHostCache_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearHostCache_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ClearDataFilter, val.filter);
  };
  function NetworkContext_ClearHostCache_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearHostCache_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_ClearHostCache_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearHostCache_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_ClearHostCache_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ClearHostCache_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearHostCache_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ClearHostCache_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearHostCache_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_ClearHttpAuthCache_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearHttpAuthCache_Params.prototype.initDefaults_ = function() {
    this.startTime = null;
  };
  NetworkContext_ClearHttpAuthCache_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearHttpAuthCache_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_ClearHttpAuthCache_Params.startTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_ClearHttpAuthCache_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_ClearHttpAuthCache_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearHttpAuthCache_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.startTime = decoder.decodeStructPointer(time$.Time);
    return val;
  };

  NetworkContext_ClearHttpAuthCache_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearHttpAuthCache_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.Time, val.startTime);
  };
  function NetworkContext_ClearHttpAuthCache_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearHttpAuthCache_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_ClearHttpAuthCache_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearHttpAuthCache_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_ClearHttpAuthCache_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ClearHttpAuthCache_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearHttpAuthCache_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ClearHttpAuthCache_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearHttpAuthCache_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_ClearReportingCacheReports_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearReportingCacheReports_Params.prototype.initDefaults_ = function() {
    this.filter = null;
  };
  NetworkContext_ClearReportingCacheReports_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearReportingCacheReports_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_ClearReportingCacheReports_Params.filter
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ClearDataFilter, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_ClearReportingCacheReports_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_ClearReportingCacheReports_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearReportingCacheReports_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filter = decoder.decodeStructPointer(ClearDataFilter);
    return val;
  };

  NetworkContext_ClearReportingCacheReports_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearReportingCacheReports_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ClearDataFilter, val.filter);
  };
  function NetworkContext_ClearReportingCacheReports_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearReportingCacheReports_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_ClearReportingCacheReports_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearReportingCacheReports_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_ClearReportingCacheReports_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ClearReportingCacheReports_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearReportingCacheReports_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ClearReportingCacheReports_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearReportingCacheReports_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_ClearReportingCacheClients_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearReportingCacheClients_Params.prototype.initDefaults_ = function() {
    this.filter = null;
  };
  NetworkContext_ClearReportingCacheClients_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearReportingCacheClients_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_ClearReportingCacheClients_Params.filter
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ClearDataFilter, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_ClearReportingCacheClients_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_ClearReportingCacheClients_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearReportingCacheClients_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filter = decoder.decodeStructPointer(ClearDataFilter);
    return val;
  };

  NetworkContext_ClearReportingCacheClients_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearReportingCacheClients_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ClearDataFilter, val.filter);
  };
  function NetworkContext_ClearReportingCacheClients_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearReportingCacheClients_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_ClearReportingCacheClients_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearReportingCacheClients_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_ClearReportingCacheClients_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ClearReportingCacheClients_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearReportingCacheClients_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ClearReportingCacheClients_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearReportingCacheClients_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_ClearNetworkErrorLogging_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearNetworkErrorLogging_Params.prototype.initDefaults_ = function() {
    this.filter = null;
  };
  NetworkContext_ClearNetworkErrorLogging_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearNetworkErrorLogging_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_ClearNetworkErrorLogging_Params.filter
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ClearDataFilter, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_ClearNetworkErrorLogging_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_ClearNetworkErrorLogging_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearNetworkErrorLogging_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filter = decoder.decodeStructPointer(ClearDataFilter);
    return val;
  };

  NetworkContext_ClearNetworkErrorLogging_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearNetworkErrorLogging_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ClearDataFilter, val.filter);
  };
  function NetworkContext_ClearNetworkErrorLogging_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearNetworkErrorLogging_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_ClearNetworkErrorLogging_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearNetworkErrorLogging_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_ClearNetworkErrorLogging_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ClearNetworkErrorLogging_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearNetworkErrorLogging_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ClearNetworkErrorLogging_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearNetworkErrorLogging_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_ClearDomainReliability_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearDomainReliability_Params.prototype.initDefaults_ = function() {
    this.filter = null;
    this.mode = 0;
  };
  NetworkContext_ClearDomainReliability_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearDomainReliability_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_ClearDomainReliability_Params.filter
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ClearDataFilter, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_ClearDomainReliability_Params.mode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, NetworkContext.DomainReliabilityClearMode);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_ClearDomainReliability_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkContext_ClearDomainReliability_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearDomainReliability_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filter = decoder.decodeStructPointer(ClearDataFilter);
    val.mode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_ClearDomainReliability_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearDomainReliability_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ClearDataFilter, val.filter);
    encoder.encodeStruct(codec.Int32, val.mode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_ClearDomainReliability_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearDomainReliability_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_ClearDomainReliability_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearDomainReliability_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_ClearDomainReliability_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ClearDomainReliability_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearDomainReliability_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ClearDomainReliability_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearDomainReliability_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_GetDomainReliabilityJSON_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_GetDomainReliabilityJSON_Params.prototype.initDefaults_ = function() {
  };
  NetworkContext_GetDomainReliabilityJSON_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_GetDomainReliabilityJSON_Params.validate = function(messageValidator, offset) {
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

  NetworkContext_GetDomainReliabilityJSON_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_GetDomainReliabilityJSON_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_GetDomainReliabilityJSON_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_GetDomainReliabilityJSON_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_GetDomainReliabilityJSON_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_GetDomainReliabilityJSON_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_GetDomainReliabilityJSON_ResponseParams.prototype.initDefaults_ = function() {
    this.data = null;
  };
  NetworkContext_GetDomainReliabilityJSON_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_GetDomainReliabilityJSON_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_GetDomainReliabilityJSON_ResponseParams.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, values$.Value, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_GetDomainReliabilityJSON_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NetworkContext_GetDomainReliabilityJSON_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_GetDomainReliabilityJSON_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data = decoder.decodeStruct(values$.Value);
    return val;
  };

  NetworkContext_GetDomainReliabilityJSON_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_GetDomainReliabilityJSON_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(values$.Value, val.data);
  };
  function NetworkContext_QueueReport_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_QueueReport_Params.prototype.initDefaults_ = function() {
    this.type = null;
    this.group = null;
    this.url = null;
    this.userAgent = null;
    this.body = null;
  };
  NetworkContext_QueueReport_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_QueueReport_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_QueueReport_Params.type
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_QueueReport_Params.group
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_QueueReport_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_QueueReport_Params.userAgent
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_QueueReport_Params.body
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, values$.DictionaryValue, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_QueueReport_Params.encodedSize = codec.kStructHeaderSize + 40;

  NetworkContext_QueueReport_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_QueueReport_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.String);
    val.group = decoder.decodeStruct(codec.String);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.userAgent = decoder.decodeStruct(codec.NullableString);
    val.body = decoder.decodeStructPointer(values$.DictionaryValue);
    return val;
  };

  NetworkContext_QueueReport_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_QueueReport_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.type);
    encoder.encodeStruct(codec.String, val.group);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.NullableString, val.userAgent);
    encoder.encodeStructPointer(values$.DictionaryValue, val.body);
  };
  function NetworkContext_QueueSignedExchangeReport_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_QueueSignedExchangeReport_Params.prototype.initDefaults_ = function() {
    this.report = null;
  };
  NetworkContext_QueueSignedExchangeReport_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_QueueSignedExchangeReport_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_QueueSignedExchangeReport_Params.report
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SignedExchangeReport, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_QueueSignedExchangeReport_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_QueueSignedExchangeReport_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_QueueSignedExchangeReport_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.report = decoder.decodeStructPointer(SignedExchangeReport);
    return val;
  };

  NetworkContext_QueueSignedExchangeReport_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_QueueSignedExchangeReport_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SignedExchangeReport, val.report);
  };
  function NetworkContext_CloseAllConnections_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CloseAllConnections_Params.prototype.initDefaults_ = function() {
  };
  NetworkContext_CloseAllConnections_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CloseAllConnections_Params.validate = function(messageValidator, offset) {
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

  NetworkContext_CloseAllConnections_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_CloseAllConnections_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CloseAllConnections_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_CloseAllConnections_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CloseAllConnections_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_CloseAllConnections_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CloseAllConnections_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_CloseAllConnections_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CloseAllConnections_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_CloseAllConnections_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_CloseAllConnections_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CloseAllConnections_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_CloseAllConnections_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CloseAllConnections_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_CloseIdleConnections_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CloseIdleConnections_Params.prototype.initDefaults_ = function() {
  };
  NetworkContext_CloseIdleConnections_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CloseIdleConnections_Params.validate = function(messageValidator, offset) {
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

  NetworkContext_CloseIdleConnections_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_CloseIdleConnections_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CloseIdleConnections_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_CloseIdleConnections_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CloseIdleConnections_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_CloseIdleConnections_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CloseIdleConnections_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_CloseIdleConnections_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CloseIdleConnections_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_CloseIdleConnections_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_CloseIdleConnections_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CloseIdleConnections_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_CloseIdleConnections_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CloseIdleConnections_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_SetNetworkConditions_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_SetNetworkConditions_Params.prototype.initDefaults_ = function() {
    this.throttlingProfileId = null;
    this.conditions = null;
  };
  NetworkContext_SetNetworkConditions_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_SetNetworkConditions_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_SetNetworkConditions_Params.throttlingProfileId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_SetNetworkConditions_Params.conditions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, NetworkConditions, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_SetNetworkConditions_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkContext_SetNetworkConditions_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_SetNetworkConditions_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.throttlingProfileId = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    val.conditions = decoder.decodeStructPointer(NetworkConditions);
    return val;
  };

  NetworkContext_SetNetworkConditions_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_SetNetworkConditions_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.throttlingProfileId);
    encoder.encodeStructPointer(NetworkConditions, val.conditions);
  };
  function NetworkContext_SetAcceptLanguage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_SetAcceptLanguage_Params.prototype.initDefaults_ = function() {
    this.newAcceptLanguage = null;
  };
  NetworkContext_SetAcceptLanguage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_SetAcceptLanguage_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_SetAcceptLanguage_Params.newAcceptLanguage
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_SetAcceptLanguage_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_SetAcceptLanguage_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_SetAcceptLanguage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.newAcceptLanguage = decoder.decodeStruct(codec.String);
    return val;
  };

  NetworkContext_SetAcceptLanguage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_SetAcceptLanguage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.newAcceptLanguage);
  };
  function NetworkContext_SetEnableReferrers_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_SetEnableReferrers_Params.prototype.initDefaults_ = function() {
    this.enableReferrers = false;
  };
  NetworkContext_SetEnableReferrers_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_SetEnableReferrers_Params.validate = function(messageValidator, offset) {
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

  NetworkContext_SetEnableReferrers_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_SetEnableReferrers_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_SetEnableReferrers_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.enableReferrers = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_SetEnableReferrers_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_SetEnableReferrers_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.enableReferrers & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_SetCTPolicy_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_SetCTPolicy_Params.prototype.initDefaults_ = function() {
    this.requiredHosts = null;
    this.excludedHosts = null;
    this.excludedSpkis = null;
    this.excludedLegacySpkis = null;
  };
  NetworkContext_SetCTPolicy_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_SetCTPolicy_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_SetCTPolicy_Params.requiredHosts
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_SetCTPolicy_Params.excludedHosts
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_SetCTPolicy_Params.excludedSpkis
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_SetCTPolicy_Params.excludedLegacySpkis
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_SetCTPolicy_Params.encodedSize = codec.kStructHeaderSize + 32;

  NetworkContext_SetCTPolicy_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_SetCTPolicy_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requiredHosts = decoder.decodeArrayPointer(codec.String);
    val.excludedHosts = decoder.decodeArrayPointer(codec.String);
    val.excludedSpkis = decoder.decodeArrayPointer(codec.String);
    val.excludedLegacySpkis = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  NetworkContext_SetCTPolicy_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_SetCTPolicy_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.requiredHosts);
    encoder.encodeArrayPointer(codec.String, val.excludedHosts);
    encoder.encodeArrayPointer(codec.String, val.excludedSpkis);
    encoder.encodeArrayPointer(codec.String, val.excludedLegacySpkis);
  };
  function NetworkContext_AddExpectCT_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_AddExpectCT_Params.prototype.initDefaults_ = function() {
    this.host = null;
    this.expiry = null;
    this.enforce = false;
    this.reportUri = null;
  };
  NetworkContext_AddExpectCT_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_AddExpectCT_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_AddExpectCT_Params.host
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_AddExpectCT_Params.expiry
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate NetworkContext_AddExpectCT_Params.reportUri
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_AddExpectCT_Params.encodedSize = codec.kStructHeaderSize + 32;

  NetworkContext_AddExpectCT_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_AddExpectCT_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.host = decoder.decodeStruct(codec.String);
    val.expiry = decoder.decodeStructPointer(time$.Time);
    packed = decoder.readUint8();
    val.enforce = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.reportUri = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  NetworkContext_AddExpectCT_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_AddExpectCT_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.host);
    encoder.encodeStructPointer(time$.Time, val.expiry);
    packed = 0;
    packed |= (val.enforce & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.reportUri);
  };
  function NetworkContext_AddExpectCT_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_AddExpectCT_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  NetworkContext_AddExpectCT_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_AddExpectCT_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_AddExpectCT_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_AddExpectCT_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_AddExpectCT_ResponseParams();
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

  NetworkContext_AddExpectCT_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_AddExpectCT_ResponseParams.encodedSize);
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
  function NetworkContext_SetExpectCTTestReport_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_SetExpectCTTestReport_Params.prototype.initDefaults_ = function() {
    this.reportUri = null;
  };
  NetworkContext_SetExpectCTTestReport_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_SetExpectCTTestReport_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_SetExpectCTTestReport_Params.reportUri
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_SetExpectCTTestReport_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_SetExpectCTTestReport_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_SetExpectCTTestReport_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reportUri = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  NetworkContext_SetExpectCTTestReport_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_SetExpectCTTestReport_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.reportUri);
  };
  function NetworkContext_SetExpectCTTestReport_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_SetExpectCTTestReport_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  NetworkContext_SetExpectCTTestReport_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_SetExpectCTTestReport_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_SetExpectCTTestReport_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_SetExpectCTTestReport_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_SetExpectCTTestReport_ResponseParams();
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

  NetworkContext_SetExpectCTTestReport_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_SetExpectCTTestReport_ResponseParams.encodedSize);
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
  function NetworkContext_GetExpectCTState_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_GetExpectCTState_Params.prototype.initDefaults_ = function() {
    this.domain = null;
  };
  NetworkContext_GetExpectCTState_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_GetExpectCTState_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_GetExpectCTState_Params.domain
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_GetExpectCTState_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_GetExpectCTState_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_GetExpectCTState_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.domain = decoder.decodeStruct(codec.String);
    return val;
  };

  NetworkContext_GetExpectCTState_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_GetExpectCTState_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.domain);
  };
  function NetworkContext_GetExpectCTState_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_GetExpectCTState_ResponseParams.prototype.initDefaults_ = function() {
    this.state = null;
  };
  NetworkContext_GetExpectCTState_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_GetExpectCTState_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_GetExpectCTState_ResponseParams.state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, values$.DictionaryValue, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_GetExpectCTState_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_GetExpectCTState_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_GetExpectCTState_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStructPointer(values$.DictionaryValue);
    return val;
  };

  NetworkContext_GetExpectCTState_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_GetExpectCTState_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(values$.DictionaryValue, val.state);
  };
  function NetworkContext_CreateUDPSocket_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CreateUDPSocket_Params.prototype.initDefaults_ = function() {
    this.request = new bindings.InterfaceRequest();
    this.receiver = new udp_socket$.UDPSocketReceiverPtr();
  };
  NetworkContext_CreateUDPSocket_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CreateUDPSocket_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_CreateUDPSocket_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateUDPSocket_Params.receiver
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_CreateUDPSocket_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkContext_CreateUDPSocket_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CreateUDPSocket_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    val.receiver = decoder.decodeStruct(new codec.NullableInterface(udp_socket$.UDPSocketReceiverPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_CreateUDPSocket_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CreateUDPSocket_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.encodeStruct(new codec.NullableInterface(udp_socket$.UDPSocketReceiverPtr), val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_CreateTCPServerSocket_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CreateTCPServerSocket_Params.prototype.initDefaults_ = function() {
    this.localAddr = null;
    this.backlog = 0;
    this.socket = new bindings.InterfaceRequest();
    this.trafficAnnotation = null;
  };
  NetworkContext_CreateTCPServerSocket_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CreateTCPServerSocket_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_CreateTCPServerSocket_Params.localAddr
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ip_endpoint$.IPEndPoint, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate NetworkContext_CreateTCPServerSocket_Params.trafficAnnotation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateTCPServerSocket_Params.socket
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 12, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_CreateTCPServerSocket_Params.encodedSize = codec.kStructHeaderSize + 24;

  NetworkContext_CreateTCPServerSocket_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CreateTCPServerSocket_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.localAddr = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    val.backlog = decoder.decodeStruct(codec.Uint32);
    val.socket = decoder.decodeStruct(codec.InterfaceRequest);
    val.trafficAnnotation = decoder.decodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag);
    return val;
  };

  NetworkContext_CreateTCPServerSocket_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CreateTCPServerSocket_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.localAddr);
    encoder.encodeStruct(codec.Uint32, val.backlog);
    encoder.encodeStruct(codec.InterfaceRequest, val.socket);
    encoder.encodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, val.trafficAnnotation);
  };
  function NetworkContext_CreateTCPServerSocket_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CreateTCPServerSocket_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
    this.localAddrOut = null;
  };
  NetworkContext_CreateTCPServerSocket_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CreateTCPServerSocket_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate NetworkContext_CreateTCPServerSocket_ResponseParams.localAddrOut
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ip_endpoint$.IPEndPoint, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_CreateTCPServerSocket_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NetworkContext_CreateTCPServerSocket_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CreateTCPServerSocket_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.localAddrOut = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    return val;
  };

  NetworkContext_CreateTCPServerSocket_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CreateTCPServerSocket_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.localAddrOut);
  };
  function NetworkContext_CreateTCPConnectedSocket_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CreateTCPConnectedSocket_Params.prototype.initDefaults_ = function() {
    this.localAddr = null;
    this.remoteAddrList = null;
    this.tcpConnectedSocketOptions = null;
    this.trafficAnnotation = null;
    this.socket = new bindings.InterfaceRequest();
    this.observer = new tcp_socket$.SocketObserverPtr();
  };
  NetworkContext_CreateTCPConnectedSocket_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CreateTCPConnectedSocket_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_CreateTCPConnectedSocket_Params.localAddr
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ip_endpoint$.IPEndPoint, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateTCPConnectedSocket_Params.remoteAddrList
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, address_list$.AddressList, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateTCPConnectedSocket_Params.tcpConnectedSocketOptions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, tcp_socket$.TCPConnectedSocketOptions, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateTCPConnectedSocket_Params.trafficAnnotation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateTCPConnectedSocket_Params.socket
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateTCPConnectedSocket_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 36, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_CreateTCPConnectedSocket_Params.encodedSize = codec.kStructHeaderSize + 48;

  NetworkContext_CreateTCPConnectedSocket_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CreateTCPConnectedSocket_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.localAddr = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    val.remoteAddrList = decoder.decodeStructPointer(address_list$.AddressList);
    val.tcpConnectedSocketOptions = decoder.decodeStructPointer(tcp_socket$.TCPConnectedSocketOptions);
    val.trafficAnnotation = decoder.decodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag);
    val.socket = decoder.decodeStruct(codec.InterfaceRequest);
    val.observer = decoder.decodeStruct(new codec.NullableInterface(tcp_socket$.SocketObserverPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_CreateTCPConnectedSocket_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CreateTCPConnectedSocket_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.localAddr);
    encoder.encodeStructPointer(address_list$.AddressList, val.remoteAddrList);
    encoder.encodeStructPointer(tcp_socket$.TCPConnectedSocketOptions, val.tcpConnectedSocketOptions);
    encoder.encodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, val.trafficAnnotation);
    encoder.encodeStruct(codec.InterfaceRequest, val.socket);
    encoder.encodeStruct(new codec.NullableInterface(tcp_socket$.SocketObserverPtr), val.observer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_CreateTCPConnectedSocket_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CreateTCPConnectedSocket_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
    this.receiveStream = null;
    this.localAddr = null;
    this.peerAddr = null;
    this.sendStream = null;
  };
  NetworkContext_CreateTCPConnectedSocket_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CreateTCPConnectedSocket_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate NetworkContext_CreateTCPConnectedSocket_ResponseParams.localAddr
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ip_endpoint$.IPEndPoint, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateTCPConnectedSocket_ResponseParams.peerAddr
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, ip_endpoint$.IPEndPoint, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateTCPConnectedSocket_ResponseParams.receiveStream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateTCPConnectedSocket_ResponseParams.sendStream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_CreateTCPConnectedSocket_ResponseParams.encodedSize = codec.kStructHeaderSize + 32;

  NetworkContext_CreateTCPConnectedSocket_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CreateTCPConnectedSocket_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    val.receiveStream = decoder.decodeStruct(codec.NullableHandle);
    val.localAddr = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    val.peerAddr = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    val.sendStream = decoder.decodeStruct(codec.NullableHandle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_CreateTCPConnectedSocket_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CreateTCPConnectedSocket_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.encodeStruct(codec.NullableHandle, val.receiveStream);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.localAddr);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.peerAddr);
    encoder.encodeStruct(codec.NullableHandle, val.sendStream);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_CreateTCPBoundSocket_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CreateTCPBoundSocket_Params.prototype.initDefaults_ = function() {
    this.localAddr = null;
    this.trafficAnnotation = null;
    this.socket = new bindings.InterfaceRequest();
  };
  NetworkContext_CreateTCPBoundSocket_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CreateTCPBoundSocket_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_CreateTCPBoundSocket_Params.localAddr
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ip_endpoint$.IPEndPoint, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateTCPBoundSocket_Params.trafficAnnotation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateTCPBoundSocket_Params.socket
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_CreateTCPBoundSocket_Params.encodedSize = codec.kStructHeaderSize + 24;

  NetworkContext_CreateTCPBoundSocket_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CreateTCPBoundSocket_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.localAddr = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    val.trafficAnnotation = decoder.decodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag);
    val.socket = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_CreateTCPBoundSocket_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CreateTCPBoundSocket_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.localAddr);
    encoder.encodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, val.trafficAnnotation);
    encoder.encodeStruct(codec.InterfaceRequest, val.socket);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_CreateTCPBoundSocket_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CreateTCPBoundSocket_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
    this.localAddr = null;
  };
  NetworkContext_CreateTCPBoundSocket_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CreateTCPBoundSocket_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate NetworkContext_CreateTCPBoundSocket_ResponseParams.localAddr
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ip_endpoint$.IPEndPoint, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_CreateTCPBoundSocket_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NetworkContext_CreateTCPBoundSocket_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CreateTCPBoundSocket_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.localAddr = decoder.decodeStructPointer(ip_endpoint$.IPEndPoint);
    return val;
  };

  NetworkContext_CreateTCPBoundSocket_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CreateTCPBoundSocket_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(ip_endpoint$.IPEndPoint, val.localAddr);
  };
  function NetworkContext_CreateProxyResolvingSocketFactory_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CreateProxyResolvingSocketFactory_Params.prototype.initDefaults_ = function() {
    this.factory = new bindings.InterfaceRequest();
  };
  NetworkContext_CreateProxyResolvingSocketFactory_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CreateProxyResolvingSocketFactory_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_CreateProxyResolvingSocketFactory_Params.factory
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_CreateProxyResolvingSocketFactory_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_CreateProxyResolvingSocketFactory_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CreateProxyResolvingSocketFactory_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.factory = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_CreateProxyResolvingSocketFactory_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CreateProxyResolvingSocketFactory_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.factory);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_LookUpProxyForURL_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_LookUpProxyForURL_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.proxyLookupClient = new proxy_lookup_client$.ProxyLookupClientPtr();
  };
  NetworkContext_LookUpProxyForURL_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_LookUpProxyForURL_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_LookUpProxyForURL_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_LookUpProxyForURL_Params.proxyLookupClient
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_LookUpProxyForURL_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkContext_LookUpProxyForURL_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_LookUpProxyForURL_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.proxyLookupClient = decoder.decodeStruct(new codec.Interface(proxy_lookup_client$.ProxyLookupClientPtr));
    return val;
  };

  NetworkContext_LookUpProxyForURL_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_LookUpProxyForURL_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(new codec.Interface(proxy_lookup_client$.ProxyLookupClientPtr), val.proxyLookupClient);
  };
  function NetworkContext_ForceReloadProxyConfig_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ForceReloadProxyConfig_Params.prototype.initDefaults_ = function() {
  };
  NetworkContext_ForceReloadProxyConfig_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ForceReloadProxyConfig_Params.validate = function(messageValidator, offset) {
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

  NetworkContext_ForceReloadProxyConfig_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ForceReloadProxyConfig_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ForceReloadProxyConfig_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ForceReloadProxyConfig_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ForceReloadProxyConfig_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_ForceReloadProxyConfig_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ForceReloadProxyConfig_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_ForceReloadProxyConfig_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ForceReloadProxyConfig_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_ForceReloadProxyConfig_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ForceReloadProxyConfig_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ForceReloadProxyConfig_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ForceReloadProxyConfig_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ForceReloadProxyConfig_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_ClearBadProxiesCache_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearBadProxiesCache_Params.prototype.initDefaults_ = function() {
  };
  NetworkContext_ClearBadProxiesCache_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearBadProxiesCache_Params.validate = function(messageValidator, offset) {
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

  NetworkContext_ClearBadProxiesCache_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ClearBadProxiesCache_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearBadProxiesCache_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ClearBadProxiesCache_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearBadProxiesCache_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_ClearBadProxiesCache_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ClearBadProxiesCache_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_ClearBadProxiesCache_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ClearBadProxiesCache_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_ClearBadProxiesCache_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ClearBadProxiesCache_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ClearBadProxiesCache_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ClearBadProxiesCache_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ClearBadProxiesCache_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_CreateWebSocket_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CreateWebSocket_Params.prototype.initDefaults_ = function() {
    this.request = new bindings.InterfaceRequest();
    this.processId = 0;
    this.renderFrameId = 0;
    this.options = 0;
    this.origin = null;
    this.authHandler = new websocket$.AuthenticationHandlerPtr();
    this.headerClient = new TrustedHeaderClientPtr();
  };
  NetworkContext_CreateWebSocket_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CreateWebSocket_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_CreateWebSocket_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;




    // validate NetworkContext_CreateWebSocket_Params.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate NetworkContext_CreateWebSocket_Params.authHandler
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 24, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateWebSocket_Params.headerClient
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 32, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_CreateWebSocket_Params.encodedSize = codec.kStructHeaderSize + 40;

  NetworkContext_CreateWebSocket_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CreateWebSocket_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    val.processId = decoder.decodeStruct(codec.Int32);
    val.renderFrameId = decoder.decodeStruct(codec.Int32);
    val.options = decoder.decodeStruct(codec.Uint32);
    val.origin = decoder.decodeStructPointer(origin$.Origin);
    val.authHandler = decoder.decodeStruct(new codec.NullableInterface(websocket$.AuthenticationHandlerPtr));
    val.headerClient = decoder.decodeStruct(new codec.NullableInterface(TrustedHeaderClientPtr));
    return val;
  };

  NetworkContext_CreateWebSocket_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CreateWebSocket_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.encodeStruct(codec.Int32, val.processId);
    encoder.encodeStruct(codec.Int32, val.renderFrameId);
    encoder.encodeStruct(codec.Uint32, val.options);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
    encoder.encodeStruct(new codec.NullableInterface(websocket$.AuthenticationHandlerPtr), val.authHandler);
    encoder.encodeStruct(new codec.NullableInterface(TrustedHeaderClientPtr), val.headerClient);
  };
  function NetworkContext_CreateNetLogExporter_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CreateNetLogExporter_Params.prototype.initDefaults_ = function() {
    this.exporter = new bindings.InterfaceRequest();
  };
  NetworkContext_CreateNetLogExporter_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CreateNetLogExporter_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_CreateNetLogExporter_Params.exporter
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_CreateNetLogExporter_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_CreateNetLogExporter_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CreateNetLogExporter_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.exporter = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_CreateNetLogExporter_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CreateNetLogExporter_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.exporter);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_PreconnectSockets_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_PreconnectSockets_Params.prototype.initDefaults_ = function() {
    this.numStreams = 0;
    this.loadFlags = 0;
    this.url = null;
    this.privacyModeEnabled = false;
  };
  NetworkContext_PreconnectSockets_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_PreconnectSockets_Params.validate = function(messageValidator, offset) {
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



    // validate NetworkContext_PreconnectSockets_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  NetworkContext_PreconnectSockets_Params.encodedSize = codec.kStructHeaderSize + 24;

  NetworkContext_PreconnectSockets_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_PreconnectSockets_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.numStreams = decoder.decodeStruct(codec.Uint32);
    val.loadFlags = decoder.decodeStruct(codec.Int32);
    val.url = decoder.decodeStructPointer(url$.Url);
    packed = decoder.readUint8();
    val.privacyModeEnabled = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_PreconnectSockets_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_PreconnectSockets_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.numStreams);
    encoder.encodeStruct(codec.Int32, val.loadFlags);
    encoder.encodeStructPointer(url$.Url, val.url);
    packed = 0;
    packed |= (val.privacyModeEnabled & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_CreateP2PSocketManager_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CreateP2PSocketManager_Params.prototype.initDefaults_ = function() {
    this.client = new p2p_trusted$.P2PTrustedSocketManagerClientPtr();
    this.trustedSocketManager = new bindings.InterfaceRequest();
    this.socketManager = new bindings.InterfaceRequest();
  };
  NetworkContext_CreateP2PSocketManager_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CreateP2PSocketManager_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_CreateP2PSocketManager_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateP2PSocketManager_Params.trustedSocketManager
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateP2PSocketManager_Params.socketManager
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 12, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_CreateP2PSocketManager_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkContext_CreateP2PSocketManager_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CreateP2PSocketManager_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(new codec.Interface(p2p_trusted$.P2PTrustedSocketManagerClientPtr));
    val.trustedSocketManager = decoder.decodeStruct(codec.InterfaceRequest);
    val.socketManager = decoder.decodeStruct(codec.InterfaceRequest);
    return val;
  };

  NetworkContext_CreateP2PSocketManager_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CreateP2PSocketManager_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(p2p_trusted$.P2PTrustedSocketManagerClientPtr), val.client);
    encoder.encodeStruct(codec.InterfaceRequest, val.trustedSocketManager);
    encoder.encodeStruct(codec.InterfaceRequest, val.socketManager);
  };
  function NetworkContext_CreateMdnsResponder_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CreateMdnsResponder_Params.prototype.initDefaults_ = function() {
    this.responderRequest = new bindings.InterfaceRequest();
  };
  NetworkContext_CreateMdnsResponder_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CreateMdnsResponder_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_CreateMdnsResponder_Params.responderRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_CreateMdnsResponder_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_CreateMdnsResponder_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CreateMdnsResponder_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.responderRequest = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_CreateMdnsResponder_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CreateMdnsResponder_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.responderRequest);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_ResolveHost_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ResolveHost_Params.prototype.initDefaults_ = function() {
    this.host = null;
    this.optionalParameters = null;
    this.responseClient = new host_resolver$.ResolveHostClientPtr();
  };
  NetworkContext_ResolveHost_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ResolveHost_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_ResolveHost_Params.host
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_param$.HostPortPair, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_ResolveHost_Params.optionalParameters
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, host_resolver$.ResolveHostParameters, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_ResolveHost_Params.responseClient
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 16, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_ResolveHost_Params.encodedSize = codec.kStructHeaderSize + 24;

  NetworkContext_ResolveHost_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ResolveHost_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.host = decoder.decodeStructPointer(network_param$.HostPortPair);
    val.optionalParameters = decoder.decodeStructPointer(host_resolver$.ResolveHostParameters);
    val.responseClient = decoder.decodeStruct(new codec.Interface(host_resolver$.ResolveHostClientPtr));
    return val;
  };

  NetworkContext_ResolveHost_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ResolveHost_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_param$.HostPortPair, val.host);
    encoder.encodeStructPointer(host_resolver$.ResolveHostParameters, val.optionalParameters);
    encoder.encodeStruct(new codec.Interface(host_resolver$.ResolveHostClientPtr), val.responseClient);
  };
  function NetworkContext_CreateHostResolver_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_CreateHostResolver_Params.prototype.initDefaults_ = function() {
    this.configOverrides = null;
    this.hostResolver = new bindings.InterfaceRequest();
  };
  NetworkContext_CreateHostResolver_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_CreateHostResolver_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_CreateHostResolver_Params.configOverrides
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, host_resolver$.DnsConfigOverrides, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_CreateHostResolver_Params.hostResolver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_CreateHostResolver_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkContext_CreateHostResolver_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_CreateHostResolver_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.configOverrides = decoder.decodeStructPointer(host_resolver$.DnsConfigOverrides);
    val.hostResolver = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_CreateHostResolver_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_CreateHostResolver_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(host_resolver$.DnsConfigOverrides, val.configOverrides);
    encoder.encodeStruct(codec.InterfaceRequest, val.hostResolver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_VerifyCertForSignedExchange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_VerifyCertForSignedExchange_Params.prototype.initDefaults_ = function() {
    this.certificate = null;
    this.url = null;
    this.ocspResponse = null;
    this.sctList = null;
  };
  NetworkContext_VerifyCertForSignedExchange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_VerifyCertForSignedExchange_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_VerifyCertForSignedExchange_Params.certificate
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_param$.X509Certificate, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_VerifyCertForSignedExchange_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_VerifyCertForSignedExchange_Params.ocspResponse
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_VerifyCertForSignedExchange_Params.sctList
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_VerifyCertForSignedExchange_Params.encodedSize = codec.kStructHeaderSize + 32;

  NetworkContext_VerifyCertForSignedExchange_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_VerifyCertForSignedExchange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.certificate = decoder.decodeStructPointer(network_param$.X509Certificate);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.ocspResponse = decoder.decodeStruct(codec.String);
    val.sctList = decoder.decodeStruct(codec.String);
    return val;
  };

  NetworkContext_VerifyCertForSignedExchange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_VerifyCertForSignedExchange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_param$.X509Certificate, val.certificate);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.ocspResponse);
    encoder.encodeStruct(codec.String, val.sctList);
  };
  function NetworkContext_VerifyCertForSignedExchange_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_VerifyCertForSignedExchange_ResponseParams.prototype.initDefaults_ = function() {
    this.errorCode = 0;
    this.cvResult = null;
    this.ctResult = null;
  };
  NetworkContext_VerifyCertForSignedExchange_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_VerifyCertForSignedExchange_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate NetworkContext_VerifyCertForSignedExchange_ResponseParams.cvResult
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, network_param$.CertVerifyResult, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_VerifyCertForSignedExchange_ResponseParams.ctResult
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, network_param$.CTVerifyResult, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_VerifyCertForSignedExchange_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  NetworkContext_VerifyCertForSignedExchange_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_VerifyCertForSignedExchange_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.cvResult = decoder.decodeStructPointer(network_param$.CertVerifyResult);
    val.ctResult = decoder.decodeStructPointer(network_param$.CTVerifyResult);
    return val;
  };

  NetworkContext_VerifyCertForSignedExchange_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_VerifyCertForSignedExchange_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(network_param$.CertVerifyResult, val.cvResult);
    encoder.encodeStructPointer(network_param$.CTVerifyResult, val.ctResult);
  };
  function NetworkContext_AddHSTS_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_AddHSTS_Params.prototype.initDefaults_ = function() {
    this.host = null;
    this.expiry = null;
    this.includeSubdomains = false;
  };
  NetworkContext_AddHSTS_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_AddHSTS_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_AddHSTS_Params.host
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_AddHSTS_Params.expiry
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  NetworkContext_AddHSTS_Params.encodedSize = codec.kStructHeaderSize + 24;

  NetworkContext_AddHSTS_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_AddHSTS_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.host = decoder.decodeStruct(codec.String);
    val.expiry = decoder.decodeStructPointer(time$.Time);
    packed = decoder.readUint8();
    val.includeSubdomains = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_AddHSTS_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_AddHSTS_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.host);
    encoder.encodeStructPointer(time$.Time, val.expiry);
    packed = 0;
    packed |= (val.includeSubdomains & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_AddHSTS_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_AddHSTS_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_AddHSTS_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_AddHSTS_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_AddHSTS_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_AddHSTS_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_AddHSTS_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_AddHSTS_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_AddHSTS_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_IsHSTSActiveForHost_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_IsHSTSActiveForHost_Params.prototype.initDefaults_ = function() {
    this.host = null;
  };
  NetworkContext_IsHSTSActiveForHost_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_IsHSTSActiveForHost_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_IsHSTSActiveForHost_Params.host
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_IsHSTSActiveForHost_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_IsHSTSActiveForHost_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_IsHSTSActiveForHost_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.host = decoder.decodeStruct(codec.String);
    return val;
  };

  NetworkContext_IsHSTSActiveForHost_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_IsHSTSActiveForHost_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.host);
  };
  function NetworkContext_IsHSTSActiveForHost_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_IsHSTSActiveForHost_ResponseParams.prototype.initDefaults_ = function() {
    this.result = false;
  };
  NetworkContext_IsHSTSActiveForHost_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_IsHSTSActiveForHost_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_IsHSTSActiveForHost_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_IsHSTSActiveForHost_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_IsHSTSActiveForHost_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.result = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_IsHSTSActiveForHost_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_IsHSTSActiveForHost_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.result & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_GetHSTSState_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_GetHSTSState_Params.prototype.initDefaults_ = function() {
    this.domain = null;
  };
  NetworkContext_GetHSTSState_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_GetHSTSState_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_GetHSTSState_Params.domain
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_GetHSTSState_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_GetHSTSState_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_GetHSTSState_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.domain = decoder.decodeStruct(codec.String);
    return val;
  };

  NetworkContext_GetHSTSState_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_GetHSTSState_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.domain);
  };
  function NetworkContext_GetHSTSState_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_GetHSTSState_ResponseParams.prototype.initDefaults_ = function() {
    this.state = null;
  };
  NetworkContext_GetHSTSState_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_GetHSTSState_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_GetHSTSState_ResponseParams.state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, values$.DictionaryValue, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_GetHSTSState_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_GetHSTSState_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_GetHSTSState_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStructPointer(values$.DictionaryValue);
    return val;
  };

  NetworkContext_GetHSTSState_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_GetHSTSState_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(values$.DictionaryValue, val.state);
  };
  function NetworkContext_SetCorsOriginAccessListsForOrigin_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_SetCorsOriginAccessListsForOrigin_Params.prototype.initDefaults_ = function() {
    this.sourceOrigin = null;
    this.allowPatterns = null;
    this.blockPatterns = null;
  };
  NetworkContext_SetCorsOriginAccessListsForOrigin_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_SetCorsOriginAccessListsForOrigin_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_SetCorsOriginAccessListsForOrigin_Params.sourceOrigin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_SetCorsOriginAccessListsForOrigin_Params.allowPatterns
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(cors_origin_pattern$.CorsOriginPattern), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_SetCorsOriginAccessListsForOrigin_Params.blockPatterns
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(cors_origin_pattern$.CorsOriginPattern), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_SetCorsOriginAccessListsForOrigin_Params.encodedSize = codec.kStructHeaderSize + 24;

  NetworkContext_SetCorsOriginAccessListsForOrigin_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_SetCorsOriginAccessListsForOrigin_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sourceOrigin = decoder.decodeStructPointer(origin$.Origin);
    val.allowPatterns = decoder.decodeArrayPointer(new codec.PointerTo(cors_origin_pattern$.CorsOriginPattern));
    val.blockPatterns = decoder.decodeArrayPointer(new codec.PointerTo(cors_origin_pattern$.CorsOriginPattern));
    return val;
  };

  NetworkContext_SetCorsOriginAccessListsForOrigin_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_SetCorsOriginAccessListsForOrigin_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.sourceOrigin);
    encoder.encodeArrayPointer(new codec.PointerTo(cors_origin_pattern$.CorsOriginPattern), val.allowPatterns);
    encoder.encodeArrayPointer(new codec.PointerTo(cors_origin_pattern$.CorsOriginPattern), val.blockPatterns);
  };
  function NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_DeleteDynamicDataForHost_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_DeleteDynamicDataForHost_Params.prototype.initDefaults_ = function() {
    this.host = null;
  };
  NetworkContext_DeleteDynamicDataForHost_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_DeleteDynamicDataForHost_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_DeleteDynamicDataForHost_Params.host
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_DeleteDynamicDataForHost_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_DeleteDynamicDataForHost_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_DeleteDynamicDataForHost_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.host = decoder.decodeStruct(codec.String);
    return val;
  };

  NetworkContext_DeleteDynamicDataForHost_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_DeleteDynamicDataForHost_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.host);
  };
  function NetworkContext_DeleteDynamicDataForHost_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_DeleteDynamicDataForHost_ResponseParams.prototype.initDefaults_ = function() {
    this.result = false;
  };
  NetworkContext_DeleteDynamicDataForHost_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_DeleteDynamicDataForHost_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_DeleteDynamicDataForHost_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_DeleteDynamicDataForHost_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_DeleteDynamicDataForHost_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.result = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_DeleteDynamicDataForHost_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_DeleteDynamicDataForHost_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.result & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_SaveHttpAuthCache_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_SaveHttpAuthCache_Params.prototype.initDefaults_ = function() {
  };
  NetworkContext_SaveHttpAuthCache_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_SaveHttpAuthCache_Params.validate = function(messageValidator, offset) {
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

  NetworkContext_SaveHttpAuthCache_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_SaveHttpAuthCache_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_SaveHttpAuthCache_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_SaveHttpAuthCache_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_SaveHttpAuthCache_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_SaveHttpAuthCache_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_SaveHttpAuthCache_ResponseParams.prototype.initDefaults_ = function() {
    this.cacheKey = null;
  };
  NetworkContext_SaveHttpAuthCache_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_SaveHttpAuthCache_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_SaveHttpAuthCache_ResponseParams.cacheKey
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_SaveHttpAuthCache_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_SaveHttpAuthCache_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_SaveHttpAuthCache_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cacheKey = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  NetworkContext_SaveHttpAuthCache_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_SaveHttpAuthCache_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.cacheKey);
  };
  function NetworkContext_LoadHttpAuthCache_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_LoadHttpAuthCache_Params.prototype.initDefaults_ = function() {
    this.cacheKey = null;
  };
  NetworkContext_LoadHttpAuthCache_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_LoadHttpAuthCache_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_LoadHttpAuthCache_Params.cacheKey
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_LoadHttpAuthCache_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_LoadHttpAuthCache_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_LoadHttpAuthCache_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cacheKey = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  NetworkContext_LoadHttpAuthCache_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_LoadHttpAuthCache_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.cacheKey);
  };
  function NetworkContext_LoadHttpAuthCache_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_LoadHttpAuthCache_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_LoadHttpAuthCache_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_LoadHttpAuthCache_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_LoadHttpAuthCache_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_LoadHttpAuthCache_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_LoadHttpAuthCache_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_LoadHttpAuthCache_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_LoadHttpAuthCache_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_LookupBasicAuthCredentials_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_LookupBasicAuthCredentials_Params.prototype.initDefaults_ = function() {
    this.url = null;
  };
  NetworkContext_LookupBasicAuthCredentials_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_LookupBasicAuthCredentials_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_LookupBasicAuthCredentials_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_LookupBasicAuthCredentials_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_LookupBasicAuthCredentials_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_LookupBasicAuthCredentials_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  NetworkContext_LookupBasicAuthCredentials_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_LookupBasicAuthCredentials_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
  };
  function NetworkContext_LookupBasicAuthCredentials_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_LookupBasicAuthCredentials_ResponseParams.prototype.initDefaults_ = function() {
    this.credentials = null;
  };
  NetworkContext_LookupBasicAuthCredentials_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_LookupBasicAuthCredentials_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_LookupBasicAuthCredentials_ResponseParams.credentials
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_param$.AuthCredentials, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_LookupBasicAuthCredentials_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_LookupBasicAuthCredentials_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_LookupBasicAuthCredentials_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.credentials = decoder.decodeStructPointer(network_param$.AuthCredentials);
    return val;
  };

  NetworkContext_LookupBasicAuthCredentials_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_LookupBasicAuthCredentials_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_param$.AuthCredentials, val.credentials);
  };
  function NetworkContext_EnableStaticKeyPinningForTesting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_EnableStaticKeyPinningForTesting_Params.prototype.initDefaults_ = function() {
  };
  NetworkContext_EnableStaticKeyPinningForTesting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_EnableStaticKeyPinningForTesting_Params.validate = function(messageValidator, offset) {
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

  NetworkContext_EnableStaticKeyPinningForTesting_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_EnableStaticKeyPinningForTesting_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_EnableStaticKeyPinningForTesting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_EnableStaticKeyPinningForTesting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_EnableStaticKeyPinningForTesting_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_SetFailingHttpTransactionForTesting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_SetFailingHttpTransactionForTesting_Params.prototype.initDefaults_ = function() {
    this.rv = 0;
  };
  NetworkContext_SetFailingHttpTransactionForTesting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_SetFailingHttpTransactionForTesting_Params.validate = function(messageValidator, offset) {
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

  NetworkContext_SetFailingHttpTransactionForTesting_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_SetFailingHttpTransactionForTesting_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_SetFailingHttpTransactionForTesting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rv = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_SetFailingHttpTransactionForTesting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_SetFailingHttpTransactionForTesting_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.rv);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_SetFailingHttpTransactionForTesting_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_SetFailingHttpTransactionForTesting_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_SetFailingHttpTransactionForTesting_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_SetFailingHttpTransactionForTesting_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_SetFailingHttpTransactionForTesting_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_SetFailingHttpTransactionForTesting_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_SetFailingHttpTransactionForTesting_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_SetFailingHttpTransactionForTesting_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_SetFailingHttpTransactionForTesting_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_VerifyCertificateForTesting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_VerifyCertificateForTesting_Params.prototype.initDefaults_ = function() {
    this.certificate = null;
    this.hostname = null;
    this.ocspResponse = null;
    this.sctList = null;
  };
  NetworkContext_VerifyCertificateForTesting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_VerifyCertificateForTesting_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_VerifyCertificateForTesting_Params.certificate
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_param$.X509Certificate, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_VerifyCertificateForTesting_Params.hostname
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_VerifyCertificateForTesting_Params.ocspResponse
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_VerifyCertificateForTesting_Params.sctList
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_VerifyCertificateForTesting_Params.encodedSize = codec.kStructHeaderSize + 32;

  NetworkContext_VerifyCertificateForTesting_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_VerifyCertificateForTesting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.certificate = decoder.decodeStructPointer(network_param$.X509Certificate);
    val.hostname = decoder.decodeStruct(codec.String);
    val.ocspResponse = decoder.decodeStruct(codec.String);
    val.sctList = decoder.decodeStruct(codec.String);
    return val;
  };

  NetworkContext_VerifyCertificateForTesting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_VerifyCertificateForTesting_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_param$.X509Certificate, val.certificate);
    encoder.encodeStruct(codec.String, val.hostname);
    encoder.encodeStruct(codec.String, val.ocspResponse);
    encoder.encodeStruct(codec.String, val.sctList);
  };
  function NetworkContext_VerifyCertificateForTesting_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_VerifyCertificateForTesting_ResponseParams.prototype.initDefaults_ = function() {
    this.errorCode = 0;
  };
  NetworkContext_VerifyCertificateForTesting_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_VerifyCertificateForTesting_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_VerifyCertificateForTesting_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_VerifyCertificateForTesting_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_VerifyCertificateForTesting_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.errorCode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_VerifyCertificateForTesting_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_VerifyCertificateForTesting_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.errorCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkContext_AddDomainReliabilityContextForTesting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_AddDomainReliabilityContextForTesting_Params.prototype.initDefaults_ = function() {
    this.origin = null;
    this.uploadUrl = null;
  };
  NetworkContext_AddDomainReliabilityContextForTesting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_AddDomainReliabilityContextForTesting_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_AddDomainReliabilityContextForTesting_Params.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkContext_AddDomainReliabilityContextForTesting_Params.uploadUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_AddDomainReliabilityContextForTesting_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkContext_AddDomainReliabilityContextForTesting_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_AddDomainReliabilityContextForTesting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin = decoder.decodeStructPointer(url$.Url);
    val.uploadUrl = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  NetworkContext_AddDomainReliabilityContextForTesting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_AddDomainReliabilityContextForTesting_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.origin);
    encoder.encodeStructPointer(url$.Url, val.uploadUrl);
  };
  function NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_ForceDomainReliabilityUploadsForTesting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ForceDomainReliabilityUploadsForTesting_Params.prototype.initDefaults_ = function() {
  };
  NetworkContext_ForceDomainReliabilityUploadsForTesting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ForceDomainReliabilityUploadsForTesting_Params.validate = function(messageValidator, offset) {
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

  NetworkContext_ForceDomainReliabilityUploadsForTesting_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ForceDomainReliabilityUploadsForTesting_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ForceDomainReliabilityUploadsForTesting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ForceDomainReliabilityUploadsForTesting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ForceDomainReliabilityUploadsForTesting_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams.prototype.initDefaults_ = function() {
  };
  NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkContext_GetOriginPolicyManager_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkContext_GetOriginPolicyManager_Params.prototype.initDefaults_ = function() {
    this.originPolicyManager = new bindings.InterfaceRequest();
  };
  NetworkContext_GetOriginPolicyManager_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkContext_GetOriginPolicyManager_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkContext_GetOriginPolicyManager_Params.originPolicyManager
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkContext_GetOriginPolicyManager_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkContext_GetOriginPolicyManager_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkContext_GetOriginPolicyManager_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.originPolicyManager = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkContext_GetOriginPolicyManager_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkContext_GetOriginPolicyManager_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.originPolicyManager);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kCustomProxyConfigClient_OnCustomProxyConfigUpdated_Name = 0;
  var kCustomProxyConfigClient_MarkProxiesAsBad_Name = 1;
  var kCustomProxyConfigClient_ClearBadProxiesCache_Name = 2;

  function CustomProxyConfigClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CustomProxyConfigClient,
                                                   handleOrPtrInfo);
  }

  function CustomProxyConfigClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CustomProxyConfigClient, associatedInterfacePtrInfo);
  }

  CustomProxyConfigClientAssociatedPtr.prototype =
      Object.create(CustomProxyConfigClientPtr.prototype);
  CustomProxyConfigClientAssociatedPtr.prototype.constructor =
      CustomProxyConfigClientAssociatedPtr;

  function CustomProxyConfigClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  CustomProxyConfigClientPtr.prototype.onCustomProxyConfigUpdated = function() {
    return CustomProxyConfigClientProxy.prototype.onCustomProxyConfigUpdated
        .apply(this.ptr.getProxy(), arguments);
  };

  CustomProxyConfigClientProxy.prototype.onCustomProxyConfigUpdated = function(proxyConfig) {
    var params_ = new CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params();
    params_.proxyConfig = proxyConfig;
    var builder = new codec.MessageV0Builder(
        kCustomProxyConfigClient_OnCustomProxyConfigUpdated_Name,
        codec.align(CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params.encodedSize));
    builder.encodeStruct(CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CustomProxyConfigClientPtr.prototype.markProxiesAsBad = function() {
    return CustomProxyConfigClientProxy.prototype.markProxiesAsBad
        .apply(this.ptr.getProxy(), arguments);
  };

  CustomProxyConfigClientProxy.prototype.markProxiesAsBad = function(bypassDuration, badProxies) {
    var params_ = new CustomProxyConfigClient_MarkProxiesAsBad_Params();
    params_.bypassDuration = bypassDuration;
    params_.badProxies = badProxies;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCustomProxyConfigClient_MarkProxiesAsBad_Name,
          codec.align(CustomProxyConfigClient_MarkProxiesAsBad_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CustomProxyConfigClient_MarkProxiesAsBad_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CustomProxyConfigClient_MarkProxiesAsBad_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CustomProxyConfigClientPtr.prototype.clearBadProxiesCache = function() {
    return CustomProxyConfigClientProxy.prototype.clearBadProxiesCache
        .apply(this.ptr.getProxy(), arguments);
  };

  CustomProxyConfigClientProxy.prototype.clearBadProxiesCache = function() {
    var params_ = new CustomProxyConfigClient_ClearBadProxiesCache_Params();
    var builder = new codec.MessageV0Builder(
        kCustomProxyConfigClient_ClearBadProxiesCache_Name,
        codec.align(CustomProxyConfigClient_ClearBadProxiesCache_Params.encodedSize));
    builder.encodeStruct(CustomProxyConfigClient_ClearBadProxiesCache_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CustomProxyConfigClientStub(delegate) {
    this.delegate_ = delegate;
  }
  CustomProxyConfigClientStub.prototype.onCustomProxyConfigUpdated = function(proxyConfig) {
    return this.delegate_ && this.delegate_.onCustomProxyConfigUpdated && this.delegate_.onCustomProxyConfigUpdated(proxyConfig);
  }
  CustomProxyConfigClientStub.prototype.markProxiesAsBad = function(bypassDuration, badProxies) {
    return this.delegate_ && this.delegate_.markProxiesAsBad && this.delegate_.markProxiesAsBad(bypassDuration, badProxies);
  }
  CustomProxyConfigClientStub.prototype.clearBadProxiesCache = function() {
    return this.delegate_ && this.delegate_.clearBadProxiesCache && this.delegate_.clearBadProxiesCache();
  }

  CustomProxyConfigClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCustomProxyConfigClient_OnCustomProxyConfigUpdated_Name:
      var params = reader.decodeStruct(CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params);
      this.onCustomProxyConfigUpdated(params.proxyConfig);
      return true;
    case kCustomProxyConfigClient_ClearBadProxiesCache_Name:
      var params = reader.decodeStruct(CustomProxyConfigClient_ClearBadProxiesCache_Params);
      this.clearBadProxiesCache();
      return true;
    default:
      return false;
    }
  };

  CustomProxyConfigClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCustomProxyConfigClient_MarkProxiesAsBad_Name:
      var params = reader.decodeStruct(CustomProxyConfigClient_MarkProxiesAsBad_Params);
      this.markProxiesAsBad(params.bypassDuration, params.badProxies).then(function(response) {
        var responseParams =
            new CustomProxyConfigClient_MarkProxiesAsBad_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kCustomProxyConfigClient_MarkProxiesAsBad_Name,
            codec.align(CustomProxyConfigClient_MarkProxiesAsBad_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CustomProxyConfigClient_MarkProxiesAsBad_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateCustomProxyConfigClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCustomProxyConfigClient_OnCustomProxyConfigUpdated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params;
      break;
      case kCustomProxyConfigClient_MarkProxiesAsBad_Name:
        if (message.expectsResponse())
          paramsClass = CustomProxyConfigClient_MarkProxiesAsBad_Params;
      break;
      case kCustomProxyConfigClient_ClearBadProxiesCache_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CustomProxyConfigClient_ClearBadProxiesCache_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCustomProxyConfigClientResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCustomProxyConfigClient_MarkProxiesAsBad_Name:
        if (message.isResponse())
          paramsClass = CustomProxyConfigClient_MarkProxiesAsBad_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CustomProxyConfigClient = {
    name: 'network.mojom.CustomProxyConfigClient',
    kVersion: 0,
    ptrClass: CustomProxyConfigClientPtr,
    proxyClass: CustomProxyConfigClientProxy,
    stubClass: CustomProxyConfigClientStub,
    validateRequest: validateCustomProxyConfigClientRequest,
    validateResponse: validateCustomProxyConfigClientResponse,
  };
  CustomProxyConfigClientStub.prototype.validator = validateCustomProxyConfigClientRequest;
  CustomProxyConfigClientProxy.prototype.validator = validateCustomProxyConfigClientResponse;
  var kTrustedHeaderClient_OnBeforeSendHeaders_Name = 0;
  var kTrustedHeaderClient_OnHeadersReceived_Name = 1;

  function TrustedHeaderClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(TrustedHeaderClient,
                                                   handleOrPtrInfo);
  }

  function TrustedHeaderClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        TrustedHeaderClient, associatedInterfacePtrInfo);
  }

  TrustedHeaderClientAssociatedPtr.prototype =
      Object.create(TrustedHeaderClientPtr.prototype);
  TrustedHeaderClientAssociatedPtr.prototype.constructor =
      TrustedHeaderClientAssociatedPtr;

  function TrustedHeaderClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  TrustedHeaderClientPtr.prototype.onBeforeSendHeaders = function() {
    return TrustedHeaderClientProxy.prototype.onBeforeSendHeaders
        .apply(this.ptr.getProxy(), arguments);
  };

  TrustedHeaderClientProxy.prototype.onBeforeSendHeaders = function(headers) {
    var params_ = new TrustedHeaderClient_OnBeforeSendHeaders_Params();
    params_.headers = headers;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTrustedHeaderClient_OnBeforeSendHeaders_Name,
          codec.align(TrustedHeaderClient_OnBeforeSendHeaders_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TrustedHeaderClient_OnBeforeSendHeaders_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TrustedHeaderClientPtr.prototype.onHeadersReceived = function() {
    return TrustedHeaderClientProxy.prototype.onHeadersReceived
        .apply(this.ptr.getProxy(), arguments);
  };

  TrustedHeaderClientProxy.prototype.onHeadersReceived = function(headers) {
    var params_ = new TrustedHeaderClient_OnHeadersReceived_Params();
    params_.headers = headers;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTrustedHeaderClient_OnHeadersReceived_Name,
          codec.align(TrustedHeaderClient_OnHeadersReceived_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TrustedHeaderClient_OnHeadersReceived_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TrustedHeaderClient_OnHeadersReceived_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function TrustedHeaderClientStub(delegate) {
    this.delegate_ = delegate;
  }
  TrustedHeaderClientStub.prototype.onBeforeSendHeaders = function(headers) {
    return this.delegate_ && this.delegate_.onBeforeSendHeaders && this.delegate_.onBeforeSendHeaders(headers);
  }
  TrustedHeaderClientStub.prototype.onHeadersReceived = function(headers) {
    return this.delegate_ && this.delegate_.onHeadersReceived && this.delegate_.onHeadersReceived(headers);
  }

  TrustedHeaderClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  TrustedHeaderClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTrustedHeaderClient_OnBeforeSendHeaders_Name:
      var params = reader.decodeStruct(TrustedHeaderClient_OnBeforeSendHeaders_Params);
      this.onBeforeSendHeaders(params.headers).then(function(response) {
        var responseParams =
            new TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams();
        responseParams.result = response.result;
        responseParams.headers = response.headers;
        var builder = new codec.MessageV1Builder(
            kTrustedHeaderClient_OnBeforeSendHeaders_Name,
            codec.align(TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTrustedHeaderClient_OnHeadersReceived_Name:
      var params = reader.decodeStruct(TrustedHeaderClient_OnHeadersReceived_Params);
      this.onHeadersReceived(params.headers).then(function(response) {
        var responseParams =
            new TrustedHeaderClient_OnHeadersReceived_ResponseParams();
        responseParams.result = response.result;
        responseParams.headers = response.headers;
        responseParams.allowedUnsafeRedirectUrl = response.allowedUnsafeRedirectUrl;
        var builder = new codec.MessageV1Builder(
            kTrustedHeaderClient_OnHeadersReceived_Name,
            codec.align(TrustedHeaderClient_OnHeadersReceived_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TrustedHeaderClient_OnHeadersReceived_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateTrustedHeaderClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTrustedHeaderClient_OnBeforeSendHeaders_Name:
        if (message.expectsResponse())
          paramsClass = TrustedHeaderClient_OnBeforeSendHeaders_Params;
      break;
      case kTrustedHeaderClient_OnHeadersReceived_Name:
        if (message.expectsResponse())
          paramsClass = TrustedHeaderClient_OnHeadersReceived_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTrustedHeaderClientResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kTrustedHeaderClient_OnBeforeSendHeaders_Name:
        if (message.isResponse())
          paramsClass = TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams;
        break;
      case kTrustedHeaderClient_OnHeadersReceived_Name:
        if (message.isResponse())
          paramsClass = TrustedHeaderClient_OnHeadersReceived_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var TrustedHeaderClient = {
    name: 'network.mojom.TrustedHeaderClient',
    kVersion: 0,
    ptrClass: TrustedHeaderClientPtr,
    proxyClass: TrustedHeaderClientProxy,
    stubClass: TrustedHeaderClientStub,
    validateRequest: validateTrustedHeaderClientRequest,
    validateResponse: validateTrustedHeaderClientResponse,
  };
  TrustedHeaderClientStub.prototype.validator = validateTrustedHeaderClientRequest;
  TrustedHeaderClientProxy.prototype.validator = validateTrustedHeaderClientResponse;
  var kTrustedURLLoaderHeaderClient_OnLoaderCreated_Name = 0;

  function TrustedURLLoaderHeaderClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(TrustedURLLoaderHeaderClient,
                                                   handleOrPtrInfo);
  }

  function TrustedURLLoaderHeaderClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        TrustedURLLoaderHeaderClient, associatedInterfacePtrInfo);
  }

  TrustedURLLoaderHeaderClientAssociatedPtr.prototype =
      Object.create(TrustedURLLoaderHeaderClientPtr.prototype);
  TrustedURLLoaderHeaderClientAssociatedPtr.prototype.constructor =
      TrustedURLLoaderHeaderClientAssociatedPtr;

  function TrustedURLLoaderHeaderClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  TrustedURLLoaderHeaderClientPtr.prototype.onLoaderCreated = function() {
    return TrustedURLLoaderHeaderClientProxy.prototype.onLoaderCreated
        .apply(this.ptr.getProxy(), arguments);
  };

  TrustedURLLoaderHeaderClientProxy.prototype.onLoaderCreated = function(requestId, headerClient) {
    var params_ = new TrustedURLLoaderHeaderClient_OnLoaderCreated_Params();
    params_.requestId = requestId;
    params_.headerClient = headerClient;
    var builder = new codec.MessageV0Builder(
        kTrustedURLLoaderHeaderClient_OnLoaderCreated_Name,
        codec.align(TrustedURLLoaderHeaderClient_OnLoaderCreated_Params.encodedSize));
    builder.encodeStruct(TrustedURLLoaderHeaderClient_OnLoaderCreated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function TrustedURLLoaderHeaderClientStub(delegate) {
    this.delegate_ = delegate;
  }
  TrustedURLLoaderHeaderClientStub.prototype.onLoaderCreated = function(requestId, headerClient) {
    return this.delegate_ && this.delegate_.onLoaderCreated && this.delegate_.onLoaderCreated(requestId, headerClient);
  }

  TrustedURLLoaderHeaderClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTrustedURLLoaderHeaderClient_OnLoaderCreated_Name:
      var params = reader.decodeStruct(TrustedURLLoaderHeaderClient_OnLoaderCreated_Params);
      this.onLoaderCreated(params.requestId, params.headerClient);
      return true;
    default:
      return false;
    }
  };

  TrustedURLLoaderHeaderClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateTrustedURLLoaderHeaderClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTrustedURLLoaderHeaderClient_OnLoaderCreated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = TrustedURLLoaderHeaderClient_OnLoaderCreated_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTrustedURLLoaderHeaderClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var TrustedURLLoaderHeaderClient = {
    name: 'network.mojom.TrustedURLLoaderHeaderClient',
    kVersion: 0,
    ptrClass: TrustedURLLoaderHeaderClientPtr,
    proxyClass: TrustedURLLoaderHeaderClientProxy,
    stubClass: TrustedURLLoaderHeaderClientStub,
    validateRequest: validateTrustedURLLoaderHeaderClientRequest,
    validateResponse: null,
  };
  TrustedURLLoaderHeaderClientStub.prototype.validator = validateTrustedURLLoaderHeaderClientRequest;
  TrustedURLLoaderHeaderClientProxy.prototype.validator = null;
  var kNetworkContextClient_OnCanSendReportingReports_Name = 0;
  var kNetworkContextClient_OnCanSendDomainReliabilityUpload_Name = 1;
  var kNetworkContextClient_OnClearSiteData_Name = 2;

  function NetworkContextClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NetworkContextClient,
                                                   handleOrPtrInfo);
  }

  function NetworkContextClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NetworkContextClient, associatedInterfacePtrInfo);
  }

  NetworkContextClientAssociatedPtr.prototype =
      Object.create(NetworkContextClientPtr.prototype);
  NetworkContextClientAssociatedPtr.prototype.constructor =
      NetworkContextClientAssociatedPtr;

  function NetworkContextClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  NetworkContextClientPtr.prototype.onCanSendReportingReports = function() {
    return NetworkContextClientProxy.prototype.onCanSendReportingReports
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextClientProxy.prototype.onCanSendReportingReports = function(origins) {
    var params_ = new NetworkContextClient_OnCanSendReportingReports_Params();
    params_.origins = origins;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContextClient_OnCanSendReportingReports_Name,
          codec.align(NetworkContextClient_OnCanSendReportingReports_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContextClient_OnCanSendReportingReports_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContextClient_OnCanSendReportingReports_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextClientPtr.prototype.onCanSendDomainReliabilityUpload = function() {
    return NetworkContextClientProxy.prototype.onCanSendDomainReliabilityUpload
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextClientProxy.prototype.onCanSendDomainReliabilityUpload = function(origin) {
    var params_ = new NetworkContextClient_OnCanSendDomainReliabilityUpload_Params();
    params_.origin = origin;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContextClient_OnCanSendDomainReliabilityUpload_Name,
          codec.align(NetworkContextClient_OnCanSendDomainReliabilityUpload_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContextClient_OnCanSendDomainReliabilityUpload_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextClientPtr.prototype.onClearSiteData = function() {
    return NetworkContextClientProxy.prototype.onClearSiteData
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextClientProxy.prototype.onClearSiteData = function(processId, routingId, url, headerValue, loadFlags) {
    var params_ = new NetworkContextClient_OnClearSiteData_Params();
    params_.processId = processId;
    params_.routingId = routingId;
    params_.url = url;
    params_.headerValue = headerValue;
    params_.loadFlags = loadFlags;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContextClient_OnClearSiteData_Name,
          codec.align(NetworkContextClient_OnClearSiteData_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContextClient_OnClearSiteData_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContextClient_OnClearSiteData_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function NetworkContextClientStub(delegate) {
    this.delegate_ = delegate;
  }
  NetworkContextClientStub.prototype.onCanSendReportingReports = function(origins) {
    return this.delegate_ && this.delegate_.onCanSendReportingReports && this.delegate_.onCanSendReportingReports(origins);
  }
  NetworkContextClientStub.prototype.onCanSendDomainReliabilityUpload = function(origin) {
    return this.delegate_ && this.delegate_.onCanSendDomainReliabilityUpload && this.delegate_.onCanSendDomainReliabilityUpload(origin);
  }
  NetworkContextClientStub.prototype.onClearSiteData = function(processId, routingId, url, headerValue, loadFlags) {
    return this.delegate_ && this.delegate_.onClearSiteData && this.delegate_.onClearSiteData(processId, routingId, url, headerValue, loadFlags);
  }

  NetworkContextClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  NetworkContextClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkContextClient_OnCanSendReportingReports_Name:
      var params = reader.decodeStruct(NetworkContextClient_OnCanSendReportingReports_Params);
      this.onCanSendReportingReports(params.origins).then(function(response) {
        var responseParams =
            new NetworkContextClient_OnCanSendReportingReports_ResponseParams();
        responseParams.origins = response.origins;
        var builder = new codec.MessageV1Builder(
            kNetworkContextClient_OnCanSendReportingReports_Name,
            codec.align(NetworkContextClient_OnCanSendReportingReports_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContextClient_OnCanSendReportingReports_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContextClient_OnCanSendDomainReliabilityUpload_Name:
      var params = reader.decodeStruct(NetworkContextClient_OnCanSendDomainReliabilityUpload_Params);
      this.onCanSendDomainReliabilityUpload(params.origin).then(function(response) {
        var responseParams =
            new NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams();
        responseParams.allowed = response.allowed;
        var builder = new codec.MessageV1Builder(
            kNetworkContextClient_OnCanSendDomainReliabilityUpload_Name,
            codec.align(NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContextClient_OnClearSiteData_Name:
      var params = reader.decodeStruct(NetworkContextClient_OnClearSiteData_Params);
      this.onClearSiteData(params.processId, params.routingId, params.url, params.headerValue, params.loadFlags).then(function(response) {
        var responseParams =
            new NetworkContextClient_OnClearSiteData_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContextClient_OnClearSiteData_Name,
            codec.align(NetworkContextClient_OnClearSiteData_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContextClient_OnClearSiteData_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateNetworkContextClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNetworkContextClient_OnCanSendReportingReports_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContextClient_OnCanSendReportingReports_Params;
      break;
      case kNetworkContextClient_OnCanSendDomainReliabilityUpload_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContextClient_OnCanSendDomainReliabilityUpload_Params;
      break;
      case kNetworkContextClient_OnClearSiteData_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContextClient_OnClearSiteData_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNetworkContextClientResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNetworkContextClient_OnCanSendReportingReports_Name:
        if (message.isResponse())
          paramsClass = NetworkContextClient_OnCanSendReportingReports_ResponseParams;
        break;
      case kNetworkContextClient_OnCanSendDomainReliabilityUpload_Name:
        if (message.isResponse())
          paramsClass = NetworkContextClient_OnCanSendDomainReliabilityUpload_ResponseParams;
        break;
      case kNetworkContextClient_OnClearSiteData_Name:
        if (message.isResponse())
          paramsClass = NetworkContextClient_OnClearSiteData_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NetworkContextClient = {
    name: 'network.mojom.NetworkContextClient',
    kVersion: 0,
    ptrClass: NetworkContextClientPtr,
    proxyClass: NetworkContextClientProxy,
    stubClass: NetworkContextClientStub,
    validateRequest: validateNetworkContextClientRequest,
    validateResponse: validateNetworkContextClientResponse,
  };
  NetworkContextClientStub.prototype.validator = validateNetworkContextClientRequest;
  NetworkContextClientProxy.prototype.validator = validateNetworkContextClientResponse;
  var kNetworkContext_SetClient_Name = 0;
  var kNetworkContext_CreateURLLoaderFactory_Name = 1;
  var kNetworkContext_ResetURLLoaderFactories_Name = 2;
  var kNetworkContext_GetCookieManager_Name = 3;
  var kNetworkContext_GetRestrictedCookieManager_Name = 4;
  var kNetworkContext_ClearNetworkingHistorySince_Name = 5;
  var kNetworkContext_ClearHttpCache_Name = 6;
  var kNetworkContext_ComputeHttpCacheSize_Name = 7;
  var kNetworkContext_NotifyExternalCacheHit_Name = 8;
  var kNetworkContext_WriteCacheMetadata_Name = 9;
  var kNetworkContext_ClearHostCache_Name = 10;
  var kNetworkContext_ClearHttpAuthCache_Name = 11;
  var kNetworkContext_ClearReportingCacheReports_Name = 12;
  var kNetworkContext_ClearReportingCacheClients_Name = 13;
  var kNetworkContext_ClearNetworkErrorLogging_Name = 14;
  var kNetworkContext_ClearDomainReliability_Name = 15;
  var kNetworkContext_GetDomainReliabilityJSON_Name = 16;
  var kNetworkContext_QueueReport_Name = 17;
  var kNetworkContext_QueueSignedExchangeReport_Name = 18;
  var kNetworkContext_CloseAllConnections_Name = 19;
  var kNetworkContext_CloseIdleConnections_Name = 20;
  var kNetworkContext_SetNetworkConditions_Name = 21;
  var kNetworkContext_SetAcceptLanguage_Name = 22;
  var kNetworkContext_SetEnableReferrers_Name = 23;
  var kNetworkContext_SetCTPolicy_Name = 24;
  var kNetworkContext_AddExpectCT_Name = 25;
  var kNetworkContext_SetExpectCTTestReport_Name = 26;
  var kNetworkContext_GetExpectCTState_Name = 27;
  var kNetworkContext_CreateUDPSocket_Name = 28;
  var kNetworkContext_CreateTCPServerSocket_Name = 29;
  var kNetworkContext_CreateTCPConnectedSocket_Name = 30;
  var kNetworkContext_CreateTCPBoundSocket_Name = 31;
  var kNetworkContext_CreateProxyResolvingSocketFactory_Name = 32;
  var kNetworkContext_LookUpProxyForURL_Name = 33;
  var kNetworkContext_ForceReloadProxyConfig_Name = 34;
  var kNetworkContext_ClearBadProxiesCache_Name = 35;
  var kNetworkContext_CreateWebSocket_Name = 36;
  var kNetworkContext_CreateNetLogExporter_Name = 37;
  var kNetworkContext_PreconnectSockets_Name = 38;
  var kNetworkContext_CreateP2PSocketManager_Name = 39;
  var kNetworkContext_CreateMdnsResponder_Name = 40;
  var kNetworkContext_ResolveHost_Name = 41;
  var kNetworkContext_CreateHostResolver_Name = 42;
  var kNetworkContext_VerifyCertForSignedExchange_Name = 43;
  var kNetworkContext_AddHSTS_Name = 44;
  var kNetworkContext_IsHSTSActiveForHost_Name = 45;
  var kNetworkContext_GetHSTSState_Name = 46;
  var kNetworkContext_SetCorsOriginAccessListsForOrigin_Name = 47;
  var kNetworkContext_DeleteDynamicDataForHost_Name = 48;
  var kNetworkContext_SaveHttpAuthCache_Name = 49;
  var kNetworkContext_LoadHttpAuthCache_Name = 50;
  var kNetworkContext_LookupBasicAuthCredentials_Name = 51;
  var kNetworkContext_EnableStaticKeyPinningForTesting_Name = 52;
  var kNetworkContext_SetFailingHttpTransactionForTesting_Name = 53;
  var kNetworkContext_VerifyCertificateForTesting_Name = 54;
  var kNetworkContext_AddDomainReliabilityContextForTesting_Name = 55;
  var kNetworkContext_ForceDomainReliabilityUploadsForTesting_Name = 56;
  var kNetworkContext_GetOriginPolicyManager_Name = 57;

  function NetworkContextPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NetworkContext,
                                                   handleOrPtrInfo);
  }

  function NetworkContextAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NetworkContext, associatedInterfacePtrInfo);
  }

  NetworkContextAssociatedPtr.prototype =
      Object.create(NetworkContextPtr.prototype);
  NetworkContextAssociatedPtr.prototype.constructor =
      NetworkContextAssociatedPtr;

  function NetworkContextProxy(receiver) {
    this.receiver_ = receiver;
  }
  NetworkContextPtr.prototype.setClient = function() {
    return NetworkContextProxy.prototype.setClient
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.setClient = function(client) {
    var params_ = new NetworkContext_SetClient_Params();
    params_.client = client;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_SetClient_Name,
        codec.align(NetworkContext_SetClient_Params.encodedSize));
    builder.encodeStruct(NetworkContext_SetClient_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.createURLLoaderFactory = function() {
    return NetworkContextProxy.prototype.createURLLoaderFactory
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.createURLLoaderFactory = function(urlLoaderFactory, params) {
    var params_ = new NetworkContext_CreateURLLoaderFactory_Params();
    params_.urlLoaderFactory = urlLoaderFactory;
    params_.params = params;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_CreateURLLoaderFactory_Name,
        codec.align(NetworkContext_CreateURLLoaderFactory_Params.encodedSize));
    builder.encodeStruct(NetworkContext_CreateURLLoaderFactory_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.resetURLLoaderFactories = function() {
    return NetworkContextProxy.prototype.resetURLLoaderFactories
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.resetURLLoaderFactories = function() {
    var params_ = new NetworkContext_ResetURLLoaderFactories_Params();
    var builder = new codec.MessageV0Builder(
        kNetworkContext_ResetURLLoaderFactories_Name,
        codec.align(NetworkContext_ResetURLLoaderFactories_Params.encodedSize));
    builder.encodeStruct(NetworkContext_ResetURLLoaderFactories_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.getCookieManager = function() {
    return NetworkContextProxy.prototype.getCookieManager
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.getCookieManager = function(cookieManager) {
    var params_ = new NetworkContext_GetCookieManager_Params();
    params_.cookieManager = cookieManager;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_GetCookieManager_Name,
        codec.align(NetworkContext_GetCookieManager_Params.encodedSize));
    builder.encodeStruct(NetworkContext_GetCookieManager_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.getRestrictedCookieManager = function() {
    return NetworkContextProxy.prototype.getRestrictedCookieManager
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.getRestrictedCookieManager = function(restrictedCookieManager, origin) {
    var params_ = new NetworkContext_GetRestrictedCookieManager_Params();
    params_.restrictedCookieManager = restrictedCookieManager;
    params_.origin = origin;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_GetRestrictedCookieManager_Name,
        codec.align(NetworkContext_GetRestrictedCookieManager_Params.encodedSize));
    builder.encodeStruct(NetworkContext_GetRestrictedCookieManager_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.clearNetworkingHistorySince = function() {
    return NetworkContextProxy.prototype.clearNetworkingHistorySince
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.clearNetworkingHistorySince = function(startTime) {
    var params_ = new NetworkContext_ClearNetworkingHistorySince_Params();
    params_.startTime = startTime;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_ClearNetworkingHistorySince_Name,
          codec.align(NetworkContext_ClearNetworkingHistorySince_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_ClearNetworkingHistorySince_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_ClearNetworkingHistorySince_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.clearHttpCache = function() {
    return NetworkContextProxy.prototype.clearHttpCache
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.clearHttpCache = function(startTime, endTime, filter) {
    var params_ = new NetworkContext_ClearHttpCache_Params();
    params_.startTime = startTime;
    params_.endTime = endTime;
    params_.filter = filter;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_ClearHttpCache_Name,
          codec.align(NetworkContext_ClearHttpCache_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_ClearHttpCache_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_ClearHttpCache_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.computeHttpCacheSize = function() {
    return NetworkContextProxy.prototype.computeHttpCacheSize
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.computeHttpCacheSize = function(startTime, endTime) {
    var params_ = new NetworkContext_ComputeHttpCacheSize_Params();
    params_.startTime = startTime;
    params_.endTime = endTime;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_ComputeHttpCacheSize_Name,
          codec.align(NetworkContext_ComputeHttpCacheSize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_ComputeHttpCacheSize_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_ComputeHttpCacheSize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.notifyExternalCacheHit = function() {
    return NetworkContextProxy.prototype.notifyExternalCacheHit
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.notifyExternalCacheHit = function(url, httpMethod, topFrameOrigin) {
    var params_ = new NetworkContext_NotifyExternalCacheHit_Params();
    params_.url = url;
    params_.httpMethod = httpMethod;
    params_.topFrameOrigin = topFrameOrigin;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_NotifyExternalCacheHit_Name,
        codec.align(NetworkContext_NotifyExternalCacheHit_Params.encodedSize));
    builder.encodeStruct(NetworkContext_NotifyExternalCacheHit_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.writeCacheMetadata = function() {
    return NetworkContextProxy.prototype.writeCacheMetadata
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.writeCacheMetadata = function(url, priority, expectedResponseTime, data) {
    var params_ = new NetworkContext_WriteCacheMetadata_Params();
    params_.url = url;
    params_.priority = priority;
    params_.expectedResponseTime = expectedResponseTime;
    params_.data = data;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_WriteCacheMetadata_Name,
        codec.align(NetworkContext_WriteCacheMetadata_Params.encodedSize));
    builder.encodeStruct(NetworkContext_WriteCacheMetadata_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.clearHostCache = function() {
    return NetworkContextProxy.prototype.clearHostCache
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.clearHostCache = function(filter) {
    var params_ = new NetworkContext_ClearHostCache_Params();
    params_.filter = filter;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_ClearHostCache_Name,
          codec.align(NetworkContext_ClearHostCache_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_ClearHostCache_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_ClearHostCache_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.clearHttpAuthCache = function() {
    return NetworkContextProxy.prototype.clearHttpAuthCache
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.clearHttpAuthCache = function(startTime) {
    var params_ = new NetworkContext_ClearHttpAuthCache_Params();
    params_.startTime = startTime;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_ClearHttpAuthCache_Name,
          codec.align(NetworkContext_ClearHttpAuthCache_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_ClearHttpAuthCache_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_ClearHttpAuthCache_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.clearReportingCacheReports = function() {
    return NetworkContextProxy.prototype.clearReportingCacheReports
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.clearReportingCacheReports = function(filter) {
    var params_ = new NetworkContext_ClearReportingCacheReports_Params();
    params_.filter = filter;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_ClearReportingCacheReports_Name,
          codec.align(NetworkContext_ClearReportingCacheReports_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_ClearReportingCacheReports_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_ClearReportingCacheReports_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.clearReportingCacheClients = function() {
    return NetworkContextProxy.prototype.clearReportingCacheClients
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.clearReportingCacheClients = function(filter) {
    var params_ = new NetworkContext_ClearReportingCacheClients_Params();
    params_.filter = filter;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_ClearReportingCacheClients_Name,
          codec.align(NetworkContext_ClearReportingCacheClients_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_ClearReportingCacheClients_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_ClearReportingCacheClients_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.clearNetworkErrorLogging = function() {
    return NetworkContextProxy.prototype.clearNetworkErrorLogging
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.clearNetworkErrorLogging = function(filter) {
    var params_ = new NetworkContext_ClearNetworkErrorLogging_Params();
    params_.filter = filter;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_ClearNetworkErrorLogging_Name,
          codec.align(NetworkContext_ClearNetworkErrorLogging_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_ClearNetworkErrorLogging_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_ClearNetworkErrorLogging_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.clearDomainReliability = function() {
    return NetworkContextProxy.prototype.clearDomainReliability
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.clearDomainReliability = function(filter, mode) {
    var params_ = new NetworkContext_ClearDomainReliability_Params();
    params_.filter = filter;
    params_.mode = mode;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_ClearDomainReliability_Name,
          codec.align(NetworkContext_ClearDomainReliability_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_ClearDomainReliability_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_ClearDomainReliability_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.getDomainReliabilityJSON = function() {
    return NetworkContextProxy.prototype.getDomainReliabilityJSON
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.getDomainReliabilityJSON = function() {
    var params_ = new NetworkContext_GetDomainReliabilityJSON_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_GetDomainReliabilityJSON_Name,
          codec.align(NetworkContext_GetDomainReliabilityJSON_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_GetDomainReliabilityJSON_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_GetDomainReliabilityJSON_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.queueReport = function() {
    return NetworkContextProxy.prototype.queueReport
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.queueReport = function(type, group, url, userAgent, body) {
    var params_ = new NetworkContext_QueueReport_Params();
    params_.type = type;
    params_.group = group;
    params_.url = url;
    params_.userAgent = userAgent;
    params_.body = body;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_QueueReport_Name,
        codec.align(NetworkContext_QueueReport_Params.encodedSize));
    builder.encodeStruct(NetworkContext_QueueReport_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.queueSignedExchangeReport = function() {
    return NetworkContextProxy.prototype.queueSignedExchangeReport
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.queueSignedExchangeReport = function(report) {
    var params_ = new NetworkContext_QueueSignedExchangeReport_Params();
    params_.report = report;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_QueueSignedExchangeReport_Name,
        codec.align(NetworkContext_QueueSignedExchangeReport_Params.encodedSize));
    builder.encodeStruct(NetworkContext_QueueSignedExchangeReport_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.closeAllConnections = function() {
    return NetworkContextProxy.prototype.closeAllConnections
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.closeAllConnections = function() {
    var params_ = new NetworkContext_CloseAllConnections_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_CloseAllConnections_Name,
          codec.align(NetworkContext_CloseAllConnections_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_CloseAllConnections_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_CloseAllConnections_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.closeIdleConnections = function() {
    return NetworkContextProxy.prototype.closeIdleConnections
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.closeIdleConnections = function() {
    var params_ = new NetworkContext_CloseIdleConnections_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_CloseIdleConnections_Name,
          codec.align(NetworkContext_CloseIdleConnections_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_CloseIdleConnections_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_CloseIdleConnections_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.setNetworkConditions = function() {
    return NetworkContextProxy.prototype.setNetworkConditions
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.setNetworkConditions = function(throttlingProfileId, conditions) {
    var params_ = new NetworkContext_SetNetworkConditions_Params();
    params_.throttlingProfileId = throttlingProfileId;
    params_.conditions = conditions;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_SetNetworkConditions_Name,
        codec.align(NetworkContext_SetNetworkConditions_Params.encodedSize));
    builder.encodeStruct(NetworkContext_SetNetworkConditions_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.setAcceptLanguage = function() {
    return NetworkContextProxy.prototype.setAcceptLanguage
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.setAcceptLanguage = function(newAcceptLanguage) {
    var params_ = new NetworkContext_SetAcceptLanguage_Params();
    params_.newAcceptLanguage = newAcceptLanguage;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_SetAcceptLanguage_Name,
        codec.align(NetworkContext_SetAcceptLanguage_Params.encodedSize));
    builder.encodeStruct(NetworkContext_SetAcceptLanguage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.setEnableReferrers = function() {
    return NetworkContextProxy.prototype.setEnableReferrers
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.setEnableReferrers = function(enableReferrers) {
    var params_ = new NetworkContext_SetEnableReferrers_Params();
    params_.enableReferrers = enableReferrers;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_SetEnableReferrers_Name,
        codec.align(NetworkContext_SetEnableReferrers_Params.encodedSize));
    builder.encodeStruct(NetworkContext_SetEnableReferrers_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.setCTPolicy = function() {
    return NetworkContextProxy.prototype.setCTPolicy
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.setCTPolicy = function(requiredHosts, excludedHosts, excludedSpkis, excludedLegacySpkis) {
    var params_ = new NetworkContext_SetCTPolicy_Params();
    params_.requiredHosts = requiredHosts;
    params_.excludedHosts = excludedHosts;
    params_.excludedSpkis = excludedSpkis;
    params_.excludedLegacySpkis = excludedLegacySpkis;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_SetCTPolicy_Name,
        codec.align(NetworkContext_SetCTPolicy_Params.encodedSize));
    builder.encodeStruct(NetworkContext_SetCTPolicy_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.addExpectCT = function() {
    return NetworkContextProxy.prototype.addExpectCT
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.addExpectCT = function(host, expiry, enforce, reportUri) {
    var params_ = new NetworkContext_AddExpectCT_Params();
    params_.host = host;
    params_.expiry = expiry;
    params_.enforce = enforce;
    params_.reportUri = reportUri;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_AddExpectCT_Name,
          codec.align(NetworkContext_AddExpectCT_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_AddExpectCT_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_AddExpectCT_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.setExpectCTTestReport = function() {
    return NetworkContextProxy.prototype.setExpectCTTestReport
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.setExpectCTTestReport = function(reportUri) {
    var params_ = new NetworkContext_SetExpectCTTestReport_Params();
    params_.reportUri = reportUri;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_SetExpectCTTestReport_Name,
          codec.align(NetworkContext_SetExpectCTTestReport_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_SetExpectCTTestReport_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_SetExpectCTTestReport_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.getExpectCTState = function() {
    return NetworkContextProxy.prototype.getExpectCTState
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.getExpectCTState = function(domain) {
    var params_ = new NetworkContext_GetExpectCTState_Params();
    params_.domain = domain;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_GetExpectCTState_Name,
          codec.align(NetworkContext_GetExpectCTState_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_GetExpectCTState_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_GetExpectCTState_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.createUDPSocket = function() {
    return NetworkContextProxy.prototype.createUDPSocket
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.createUDPSocket = function(request, receiver) {
    var params_ = new NetworkContext_CreateUDPSocket_Params();
    params_.request = request;
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_CreateUDPSocket_Name,
        codec.align(NetworkContext_CreateUDPSocket_Params.encodedSize));
    builder.encodeStruct(NetworkContext_CreateUDPSocket_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.createTCPServerSocket = function() {
    return NetworkContextProxy.prototype.createTCPServerSocket
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.createTCPServerSocket = function(localAddr, backlog, trafficAnnotation, socket) {
    var params_ = new NetworkContext_CreateTCPServerSocket_Params();
    params_.localAddr = localAddr;
    params_.backlog = backlog;
    params_.trafficAnnotation = trafficAnnotation;
    params_.socket = socket;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_CreateTCPServerSocket_Name,
          codec.align(NetworkContext_CreateTCPServerSocket_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_CreateTCPServerSocket_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_CreateTCPServerSocket_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.createTCPConnectedSocket = function() {
    return NetworkContextProxy.prototype.createTCPConnectedSocket
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.createTCPConnectedSocket = function(localAddr, remoteAddrList, tcpConnectedSocketOptions, trafficAnnotation, socket, observer) {
    var params_ = new NetworkContext_CreateTCPConnectedSocket_Params();
    params_.localAddr = localAddr;
    params_.remoteAddrList = remoteAddrList;
    params_.tcpConnectedSocketOptions = tcpConnectedSocketOptions;
    params_.trafficAnnotation = trafficAnnotation;
    params_.socket = socket;
    params_.observer = observer;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_CreateTCPConnectedSocket_Name,
          codec.align(NetworkContext_CreateTCPConnectedSocket_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_CreateTCPConnectedSocket_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_CreateTCPConnectedSocket_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.createTCPBoundSocket = function() {
    return NetworkContextProxy.prototype.createTCPBoundSocket
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.createTCPBoundSocket = function(localAddr, trafficAnnotation, socket) {
    var params_ = new NetworkContext_CreateTCPBoundSocket_Params();
    params_.localAddr = localAddr;
    params_.trafficAnnotation = trafficAnnotation;
    params_.socket = socket;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_CreateTCPBoundSocket_Name,
          codec.align(NetworkContext_CreateTCPBoundSocket_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_CreateTCPBoundSocket_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_CreateTCPBoundSocket_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.createProxyResolvingSocketFactory = function() {
    return NetworkContextProxy.prototype.createProxyResolvingSocketFactory
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.createProxyResolvingSocketFactory = function(factory) {
    var params_ = new NetworkContext_CreateProxyResolvingSocketFactory_Params();
    params_.factory = factory;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_CreateProxyResolvingSocketFactory_Name,
        codec.align(NetworkContext_CreateProxyResolvingSocketFactory_Params.encodedSize));
    builder.encodeStruct(NetworkContext_CreateProxyResolvingSocketFactory_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.lookUpProxyForURL = function() {
    return NetworkContextProxy.prototype.lookUpProxyForURL
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.lookUpProxyForURL = function(url, proxyLookupClient) {
    var params_ = new NetworkContext_LookUpProxyForURL_Params();
    params_.url = url;
    params_.proxyLookupClient = proxyLookupClient;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_LookUpProxyForURL_Name,
        codec.align(NetworkContext_LookUpProxyForURL_Params.encodedSize));
    builder.encodeStruct(NetworkContext_LookUpProxyForURL_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.forceReloadProxyConfig = function() {
    return NetworkContextProxy.prototype.forceReloadProxyConfig
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.forceReloadProxyConfig = function() {
    var params_ = new NetworkContext_ForceReloadProxyConfig_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_ForceReloadProxyConfig_Name,
          codec.align(NetworkContext_ForceReloadProxyConfig_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_ForceReloadProxyConfig_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_ForceReloadProxyConfig_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.clearBadProxiesCache = function() {
    return NetworkContextProxy.prototype.clearBadProxiesCache
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.clearBadProxiesCache = function() {
    var params_ = new NetworkContext_ClearBadProxiesCache_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_ClearBadProxiesCache_Name,
          codec.align(NetworkContext_ClearBadProxiesCache_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_ClearBadProxiesCache_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_ClearBadProxiesCache_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.createWebSocket = function() {
    return NetworkContextProxy.prototype.createWebSocket
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.createWebSocket = function(request, processId, renderFrameId, origin, options, authHandler, headerClient) {
    var params_ = new NetworkContext_CreateWebSocket_Params();
    params_.request = request;
    params_.processId = processId;
    params_.renderFrameId = renderFrameId;
    params_.origin = origin;
    params_.options = options;
    params_.authHandler = authHandler;
    params_.headerClient = headerClient;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_CreateWebSocket_Name,
        codec.align(NetworkContext_CreateWebSocket_Params.encodedSize));
    builder.encodeStruct(NetworkContext_CreateWebSocket_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.createNetLogExporter = function() {
    return NetworkContextProxy.prototype.createNetLogExporter
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.createNetLogExporter = function(exporter) {
    var params_ = new NetworkContext_CreateNetLogExporter_Params();
    params_.exporter = exporter;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_CreateNetLogExporter_Name,
        codec.align(NetworkContext_CreateNetLogExporter_Params.encodedSize));
    builder.encodeStruct(NetworkContext_CreateNetLogExporter_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.preconnectSockets = function() {
    return NetworkContextProxy.prototype.preconnectSockets
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.preconnectSockets = function(numStreams, url, loadFlags, privacyModeEnabled) {
    var params_ = new NetworkContext_PreconnectSockets_Params();
    params_.numStreams = numStreams;
    params_.url = url;
    params_.loadFlags = loadFlags;
    params_.privacyModeEnabled = privacyModeEnabled;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_PreconnectSockets_Name,
        codec.align(NetworkContext_PreconnectSockets_Params.encodedSize));
    builder.encodeStruct(NetworkContext_PreconnectSockets_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.createP2PSocketManager = function() {
    return NetworkContextProxy.prototype.createP2PSocketManager
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.createP2PSocketManager = function(client, trustedSocketManager, socketManager) {
    var params_ = new NetworkContext_CreateP2PSocketManager_Params();
    params_.client = client;
    params_.trustedSocketManager = trustedSocketManager;
    params_.socketManager = socketManager;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_CreateP2PSocketManager_Name,
        codec.align(NetworkContext_CreateP2PSocketManager_Params.encodedSize));
    builder.encodeStruct(NetworkContext_CreateP2PSocketManager_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.createMdnsResponder = function() {
    return NetworkContextProxy.prototype.createMdnsResponder
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.createMdnsResponder = function(responderRequest) {
    var params_ = new NetworkContext_CreateMdnsResponder_Params();
    params_.responderRequest = responderRequest;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_CreateMdnsResponder_Name,
        codec.align(NetworkContext_CreateMdnsResponder_Params.encodedSize));
    builder.encodeStruct(NetworkContext_CreateMdnsResponder_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.resolveHost = function() {
    return NetworkContextProxy.prototype.resolveHost
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.resolveHost = function(host, optionalParameters, responseClient) {
    var params_ = new NetworkContext_ResolveHost_Params();
    params_.host = host;
    params_.optionalParameters = optionalParameters;
    params_.responseClient = responseClient;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_ResolveHost_Name,
        codec.align(NetworkContext_ResolveHost_Params.encodedSize));
    builder.encodeStruct(NetworkContext_ResolveHost_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.createHostResolver = function() {
    return NetworkContextProxy.prototype.createHostResolver
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.createHostResolver = function(configOverrides, hostResolver) {
    var params_ = new NetworkContext_CreateHostResolver_Params();
    params_.configOverrides = configOverrides;
    params_.hostResolver = hostResolver;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_CreateHostResolver_Name,
        codec.align(NetworkContext_CreateHostResolver_Params.encodedSize));
    builder.encodeStruct(NetworkContext_CreateHostResolver_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkContextPtr.prototype.verifyCertForSignedExchange = function() {
    return NetworkContextProxy.prototype.verifyCertForSignedExchange
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.verifyCertForSignedExchange = function(certificate, url, ocspResponse, sctList) {
    var params_ = new NetworkContext_VerifyCertForSignedExchange_Params();
    params_.certificate = certificate;
    params_.url = url;
    params_.ocspResponse = ocspResponse;
    params_.sctList = sctList;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_VerifyCertForSignedExchange_Name,
          codec.align(NetworkContext_VerifyCertForSignedExchange_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_VerifyCertForSignedExchange_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_VerifyCertForSignedExchange_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.addHSTS = function() {
    return NetworkContextProxy.prototype.addHSTS
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.addHSTS = function(host, expiry, includeSubdomains) {
    var params_ = new NetworkContext_AddHSTS_Params();
    params_.host = host;
    params_.expiry = expiry;
    params_.includeSubdomains = includeSubdomains;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_AddHSTS_Name,
          codec.align(NetworkContext_AddHSTS_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_AddHSTS_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_AddHSTS_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.isHSTSActiveForHost = function() {
    return NetworkContextProxy.prototype.isHSTSActiveForHost
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.isHSTSActiveForHost = function(host) {
    var params_ = new NetworkContext_IsHSTSActiveForHost_Params();
    params_.host = host;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_IsHSTSActiveForHost_Name,
          codec.align(NetworkContext_IsHSTSActiveForHost_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_IsHSTSActiveForHost_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_IsHSTSActiveForHost_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.getHSTSState = function() {
    return NetworkContextProxy.prototype.getHSTSState
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.getHSTSState = function(domain) {
    var params_ = new NetworkContext_GetHSTSState_Params();
    params_.domain = domain;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_GetHSTSState_Name,
          codec.align(NetworkContext_GetHSTSState_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_GetHSTSState_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_GetHSTSState_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.setCorsOriginAccessListsForOrigin = function() {
    return NetworkContextProxy.prototype.setCorsOriginAccessListsForOrigin
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.setCorsOriginAccessListsForOrigin = function(sourceOrigin, allowPatterns, blockPatterns) {
    var params_ = new NetworkContext_SetCorsOriginAccessListsForOrigin_Params();
    params_.sourceOrigin = sourceOrigin;
    params_.allowPatterns = allowPatterns;
    params_.blockPatterns = blockPatterns;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_SetCorsOriginAccessListsForOrigin_Name,
          codec.align(NetworkContext_SetCorsOriginAccessListsForOrigin_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_SetCorsOriginAccessListsForOrigin_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.deleteDynamicDataForHost = function() {
    return NetworkContextProxy.prototype.deleteDynamicDataForHost
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.deleteDynamicDataForHost = function(host) {
    var params_ = new NetworkContext_DeleteDynamicDataForHost_Params();
    params_.host = host;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_DeleteDynamicDataForHost_Name,
          codec.align(NetworkContext_DeleteDynamicDataForHost_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_DeleteDynamicDataForHost_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_DeleteDynamicDataForHost_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.saveHttpAuthCache = function() {
    return NetworkContextProxy.prototype.saveHttpAuthCache
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.saveHttpAuthCache = function() {
    var params_ = new NetworkContext_SaveHttpAuthCache_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_SaveHttpAuthCache_Name,
          codec.align(NetworkContext_SaveHttpAuthCache_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_SaveHttpAuthCache_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_SaveHttpAuthCache_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.loadHttpAuthCache = function() {
    return NetworkContextProxy.prototype.loadHttpAuthCache
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.loadHttpAuthCache = function(cacheKey) {
    var params_ = new NetworkContext_LoadHttpAuthCache_Params();
    params_.cacheKey = cacheKey;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_LoadHttpAuthCache_Name,
          codec.align(NetworkContext_LoadHttpAuthCache_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_LoadHttpAuthCache_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_LoadHttpAuthCache_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.lookupBasicAuthCredentials = function() {
    return NetworkContextProxy.prototype.lookupBasicAuthCredentials
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.lookupBasicAuthCredentials = function(url) {
    var params_ = new NetworkContext_LookupBasicAuthCredentials_Params();
    params_.url = url;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_LookupBasicAuthCredentials_Name,
          codec.align(NetworkContext_LookupBasicAuthCredentials_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_LookupBasicAuthCredentials_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_LookupBasicAuthCredentials_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.enableStaticKeyPinningForTesting = function() {
    return NetworkContextProxy.prototype.enableStaticKeyPinningForTesting
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.enableStaticKeyPinningForTesting = function() {
    var params_ = new NetworkContext_EnableStaticKeyPinningForTesting_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_EnableStaticKeyPinningForTesting_Name,
          codec.align(NetworkContext_EnableStaticKeyPinningForTesting_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_EnableStaticKeyPinningForTesting_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.setFailingHttpTransactionForTesting = function() {
    return NetworkContextProxy.prototype.setFailingHttpTransactionForTesting
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.setFailingHttpTransactionForTesting = function(rv) {
    var params_ = new NetworkContext_SetFailingHttpTransactionForTesting_Params();
    params_.rv = rv;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_SetFailingHttpTransactionForTesting_Name,
          codec.align(NetworkContext_SetFailingHttpTransactionForTesting_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_SetFailingHttpTransactionForTesting_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_SetFailingHttpTransactionForTesting_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.verifyCertificateForTesting = function() {
    return NetworkContextProxy.prototype.verifyCertificateForTesting
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.verifyCertificateForTesting = function(certificate, hostname, ocspResponse, sctList) {
    var params_ = new NetworkContext_VerifyCertificateForTesting_Params();
    params_.certificate = certificate;
    params_.hostname = hostname;
    params_.ocspResponse = ocspResponse;
    params_.sctList = sctList;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_VerifyCertificateForTesting_Name,
          codec.align(NetworkContext_VerifyCertificateForTesting_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_VerifyCertificateForTesting_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_VerifyCertificateForTesting_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.addDomainReliabilityContextForTesting = function() {
    return NetworkContextProxy.prototype.addDomainReliabilityContextForTesting
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.addDomainReliabilityContextForTesting = function(origin, uploadUrl) {
    var params_ = new NetworkContext_AddDomainReliabilityContextForTesting_Params();
    params_.origin = origin;
    params_.uploadUrl = uploadUrl;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_AddDomainReliabilityContextForTesting_Name,
          codec.align(NetworkContext_AddDomainReliabilityContextForTesting_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_AddDomainReliabilityContextForTesting_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.forceDomainReliabilityUploadsForTesting = function() {
    return NetworkContextProxy.prototype.forceDomainReliabilityUploadsForTesting
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.forceDomainReliabilityUploadsForTesting = function() {
    var params_ = new NetworkContext_ForceDomainReliabilityUploadsForTesting_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkContext_ForceDomainReliabilityUploadsForTesting_Name,
          codec.align(NetworkContext_ForceDomainReliabilityUploadsForTesting_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkContext_ForceDomainReliabilityUploadsForTesting_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkContextPtr.prototype.getOriginPolicyManager = function() {
    return NetworkContextProxy.prototype.getOriginPolicyManager
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkContextProxy.prototype.getOriginPolicyManager = function(originPolicyManager) {
    var params_ = new NetworkContext_GetOriginPolicyManager_Params();
    params_.originPolicyManager = originPolicyManager;
    var builder = new codec.MessageV0Builder(
        kNetworkContext_GetOriginPolicyManager_Name,
        codec.align(NetworkContext_GetOriginPolicyManager_Params.encodedSize));
    builder.encodeStruct(NetworkContext_GetOriginPolicyManager_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NetworkContextStub(delegate) {
    this.delegate_ = delegate;
  }
  NetworkContextStub.prototype.setClient = function(client) {
    return this.delegate_ && this.delegate_.setClient && this.delegate_.setClient(client);
  }
  NetworkContextStub.prototype.createURLLoaderFactory = function(urlLoaderFactory, params) {
    return this.delegate_ && this.delegate_.createURLLoaderFactory && this.delegate_.createURLLoaderFactory(urlLoaderFactory, params);
  }
  NetworkContextStub.prototype.resetURLLoaderFactories = function() {
    return this.delegate_ && this.delegate_.resetURLLoaderFactories && this.delegate_.resetURLLoaderFactories();
  }
  NetworkContextStub.prototype.getCookieManager = function(cookieManager) {
    return this.delegate_ && this.delegate_.getCookieManager && this.delegate_.getCookieManager(cookieManager);
  }
  NetworkContextStub.prototype.getRestrictedCookieManager = function(restrictedCookieManager, origin) {
    return this.delegate_ && this.delegate_.getRestrictedCookieManager && this.delegate_.getRestrictedCookieManager(restrictedCookieManager, origin);
  }
  NetworkContextStub.prototype.clearNetworkingHistorySince = function(startTime) {
    return this.delegate_ && this.delegate_.clearNetworkingHistorySince && this.delegate_.clearNetworkingHistorySince(startTime);
  }
  NetworkContextStub.prototype.clearHttpCache = function(startTime, endTime, filter) {
    return this.delegate_ && this.delegate_.clearHttpCache && this.delegate_.clearHttpCache(startTime, endTime, filter);
  }
  NetworkContextStub.prototype.computeHttpCacheSize = function(startTime, endTime) {
    return this.delegate_ && this.delegate_.computeHttpCacheSize && this.delegate_.computeHttpCacheSize(startTime, endTime);
  }
  NetworkContextStub.prototype.notifyExternalCacheHit = function(url, httpMethod, topFrameOrigin) {
    return this.delegate_ && this.delegate_.notifyExternalCacheHit && this.delegate_.notifyExternalCacheHit(url, httpMethod, topFrameOrigin);
  }
  NetworkContextStub.prototype.writeCacheMetadata = function(url, priority, expectedResponseTime, data) {
    return this.delegate_ && this.delegate_.writeCacheMetadata && this.delegate_.writeCacheMetadata(url, priority, expectedResponseTime, data);
  }
  NetworkContextStub.prototype.clearHostCache = function(filter) {
    return this.delegate_ && this.delegate_.clearHostCache && this.delegate_.clearHostCache(filter);
  }
  NetworkContextStub.prototype.clearHttpAuthCache = function(startTime) {
    return this.delegate_ && this.delegate_.clearHttpAuthCache && this.delegate_.clearHttpAuthCache(startTime);
  }
  NetworkContextStub.prototype.clearReportingCacheReports = function(filter) {
    return this.delegate_ && this.delegate_.clearReportingCacheReports && this.delegate_.clearReportingCacheReports(filter);
  }
  NetworkContextStub.prototype.clearReportingCacheClients = function(filter) {
    return this.delegate_ && this.delegate_.clearReportingCacheClients && this.delegate_.clearReportingCacheClients(filter);
  }
  NetworkContextStub.prototype.clearNetworkErrorLogging = function(filter) {
    return this.delegate_ && this.delegate_.clearNetworkErrorLogging && this.delegate_.clearNetworkErrorLogging(filter);
  }
  NetworkContextStub.prototype.clearDomainReliability = function(filter, mode) {
    return this.delegate_ && this.delegate_.clearDomainReliability && this.delegate_.clearDomainReliability(filter, mode);
  }
  NetworkContextStub.prototype.getDomainReliabilityJSON = function() {
    return this.delegate_ && this.delegate_.getDomainReliabilityJSON && this.delegate_.getDomainReliabilityJSON();
  }
  NetworkContextStub.prototype.queueReport = function(type, group, url, userAgent, body) {
    return this.delegate_ && this.delegate_.queueReport && this.delegate_.queueReport(type, group, url, userAgent, body);
  }
  NetworkContextStub.prototype.queueSignedExchangeReport = function(report) {
    return this.delegate_ && this.delegate_.queueSignedExchangeReport && this.delegate_.queueSignedExchangeReport(report);
  }
  NetworkContextStub.prototype.closeAllConnections = function() {
    return this.delegate_ && this.delegate_.closeAllConnections && this.delegate_.closeAllConnections();
  }
  NetworkContextStub.prototype.closeIdleConnections = function() {
    return this.delegate_ && this.delegate_.closeIdleConnections && this.delegate_.closeIdleConnections();
  }
  NetworkContextStub.prototype.setNetworkConditions = function(throttlingProfileId, conditions) {
    return this.delegate_ && this.delegate_.setNetworkConditions && this.delegate_.setNetworkConditions(throttlingProfileId, conditions);
  }
  NetworkContextStub.prototype.setAcceptLanguage = function(newAcceptLanguage) {
    return this.delegate_ && this.delegate_.setAcceptLanguage && this.delegate_.setAcceptLanguage(newAcceptLanguage);
  }
  NetworkContextStub.prototype.setEnableReferrers = function(enableReferrers) {
    return this.delegate_ && this.delegate_.setEnableReferrers && this.delegate_.setEnableReferrers(enableReferrers);
  }
  NetworkContextStub.prototype.setCTPolicy = function(requiredHosts, excludedHosts, excludedSpkis, excludedLegacySpkis) {
    return this.delegate_ && this.delegate_.setCTPolicy && this.delegate_.setCTPolicy(requiredHosts, excludedHosts, excludedSpkis, excludedLegacySpkis);
  }
  NetworkContextStub.prototype.addExpectCT = function(host, expiry, enforce, reportUri) {
    return this.delegate_ && this.delegate_.addExpectCT && this.delegate_.addExpectCT(host, expiry, enforce, reportUri);
  }
  NetworkContextStub.prototype.setExpectCTTestReport = function(reportUri) {
    return this.delegate_ && this.delegate_.setExpectCTTestReport && this.delegate_.setExpectCTTestReport(reportUri);
  }
  NetworkContextStub.prototype.getExpectCTState = function(domain) {
    return this.delegate_ && this.delegate_.getExpectCTState && this.delegate_.getExpectCTState(domain);
  }
  NetworkContextStub.prototype.createUDPSocket = function(request, receiver) {
    return this.delegate_ && this.delegate_.createUDPSocket && this.delegate_.createUDPSocket(request, receiver);
  }
  NetworkContextStub.prototype.createTCPServerSocket = function(localAddr, backlog, trafficAnnotation, socket) {
    return this.delegate_ && this.delegate_.createTCPServerSocket && this.delegate_.createTCPServerSocket(localAddr, backlog, trafficAnnotation, socket);
  }
  NetworkContextStub.prototype.createTCPConnectedSocket = function(localAddr, remoteAddrList, tcpConnectedSocketOptions, trafficAnnotation, socket, observer) {
    return this.delegate_ && this.delegate_.createTCPConnectedSocket && this.delegate_.createTCPConnectedSocket(localAddr, remoteAddrList, tcpConnectedSocketOptions, trafficAnnotation, socket, observer);
  }
  NetworkContextStub.prototype.createTCPBoundSocket = function(localAddr, trafficAnnotation, socket) {
    return this.delegate_ && this.delegate_.createTCPBoundSocket && this.delegate_.createTCPBoundSocket(localAddr, trafficAnnotation, socket);
  }
  NetworkContextStub.prototype.createProxyResolvingSocketFactory = function(factory) {
    return this.delegate_ && this.delegate_.createProxyResolvingSocketFactory && this.delegate_.createProxyResolvingSocketFactory(factory);
  }
  NetworkContextStub.prototype.lookUpProxyForURL = function(url, proxyLookupClient) {
    return this.delegate_ && this.delegate_.lookUpProxyForURL && this.delegate_.lookUpProxyForURL(url, proxyLookupClient);
  }
  NetworkContextStub.prototype.forceReloadProxyConfig = function() {
    return this.delegate_ && this.delegate_.forceReloadProxyConfig && this.delegate_.forceReloadProxyConfig();
  }
  NetworkContextStub.prototype.clearBadProxiesCache = function() {
    return this.delegate_ && this.delegate_.clearBadProxiesCache && this.delegate_.clearBadProxiesCache();
  }
  NetworkContextStub.prototype.createWebSocket = function(request, processId, renderFrameId, origin, options, authHandler, headerClient) {
    return this.delegate_ && this.delegate_.createWebSocket && this.delegate_.createWebSocket(request, processId, renderFrameId, origin, options, authHandler, headerClient);
  }
  NetworkContextStub.prototype.createNetLogExporter = function(exporter) {
    return this.delegate_ && this.delegate_.createNetLogExporter && this.delegate_.createNetLogExporter(exporter);
  }
  NetworkContextStub.prototype.preconnectSockets = function(numStreams, url, loadFlags, privacyModeEnabled) {
    return this.delegate_ && this.delegate_.preconnectSockets && this.delegate_.preconnectSockets(numStreams, url, loadFlags, privacyModeEnabled);
  }
  NetworkContextStub.prototype.createP2PSocketManager = function(client, trustedSocketManager, socketManager) {
    return this.delegate_ && this.delegate_.createP2PSocketManager && this.delegate_.createP2PSocketManager(client, trustedSocketManager, socketManager);
  }
  NetworkContextStub.prototype.createMdnsResponder = function(responderRequest) {
    return this.delegate_ && this.delegate_.createMdnsResponder && this.delegate_.createMdnsResponder(responderRequest);
  }
  NetworkContextStub.prototype.resolveHost = function(host, optionalParameters, responseClient) {
    return this.delegate_ && this.delegate_.resolveHost && this.delegate_.resolveHost(host, optionalParameters, responseClient);
  }
  NetworkContextStub.prototype.createHostResolver = function(configOverrides, hostResolver) {
    return this.delegate_ && this.delegate_.createHostResolver && this.delegate_.createHostResolver(configOverrides, hostResolver);
  }
  NetworkContextStub.prototype.verifyCertForSignedExchange = function(certificate, url, ocspResponse, sctList) {
    return this.delegate_ && this.delegate_.verifyCertForSignedExchange && this.delegate_.verifyCertForSignedExchange(certificate, url, ocspResponse, sctList);
  }
  NetworkContextStub.prototype.addHSTS = function(host, expiry, includeSubdomains) {
    return this.delegate_ && this.delegate_.addHSTS && this.delegate_.addHSTS(host, expiry, includeSubdomains);
  }
  NetworkContextStub.prototype.isHSTSActiveForHost = function(host) {
    return this.delegate_ && this.delegate_.isHSTSActiveForHost && this.delegate_.isHSTSActiveForHost(host);
  }
  NetworkContextStub.prototype.getHSTSState = function(domain) {
    return this.delegate_ && this.delegate_.getHSTSState && this.delegate_.getHSTSState(domain);
  }
  NetworkContextStub.prototype.setCorsOriginAccessListsForOrigin = function(sourceOrigin, allowPatterns, blockPatterns) {
    return this.delegate_ && this.delegate_.setCorsOriginAccessListsForOrigin && this.delegate_.setCorsOriginAccessListsForOrigin(sourceOrigin, allowPatterns, blockPatterns);
  }
  NetworkContextStub.prototype.deleteDynamicDataForHost = function(host) {
    return this.delegate_ && this.delegate_.deleteDynamicDataForHost && this.delegate_.deleteDynamicDataForHost(host);
  }
  NetworkContextStub.prototype.saveHttpAuthCache = function() {
    return this.delegate_ && this.delegate_.saveHttpAuthCache && this.delegate_.saveHttpAuthCache();
  }
  NetworkContextStub.prototype.loadHttpAuthCache = function(cacheKey) {
    return this.delegate_ && this.delegate_.loadHttpAuthCache && this.delegate_.loadHttpAuthCache(cacheKey);
  }
  NetworkContextStub.prototype.lookupBasicAuthCredentials = function(url) {
    return this.delegate_ && this.delegate_.lookupBasicAuthCredentials && this.delegate_.lookupBasicAuthCredentials(url);
  }
  NetworkContextStub.prototype.enableStaticKeyPinningForTesting = function() {
    return this.delegate_ && this.delegate_.enableStaticKeyPinningForTesting && this.delegate_.enableStaticKeyPinningForTesting();
  }
  NetworkContextStub.prototype.setFailingHttpTransactionForTesting = function(rv) {
    return this.delegate_ && this.delegate_.setFailingHttpTransactionForTesting && this.delegate_.setFailingHttpTransactionForTesting(rv);
  }
  NetworkContextStub.prototype.verifyCertificateForTesting = function(certificate, hostname, ocspResponse, sctList) {
    return this.delegate_ && this.delegate_.verifyCertificateForTesting && this.delegate_.verifyCertificateForTesting(certificate, hostname, ocspResponse, sctList);
  }
  NetworkContextStub.prototype.addDomainReliabilityContextForTesting = function(origin, uploadUrl) {
    return this.delegate_ && this.delegate_.addDomainReliabilityContextForTesting && this.delegate_.addDomainReliabilityContextForTesting(origin, uploadUrl);
  }
  NetworkContextStub.prototype.forceDomainReliabilityUploadsForTesting = function() {
    return this.delegate_ && this.delegate_.forceDomainReliabilityUploadsForTesting && this.delegate_.forceDomainReliabilityUploadsForTesting();
  }
  NetworkContextStub.prototype.getOriginPolicyManager = function(originPolicyManager) {
    return this.delegate_ && this.delegate_.getOriginPolicyManager && this.delegate_.getOriginPolicyManager(originPolicyManager);
  }

  NetworkContextStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkContext_SetClient_Name:
      var params = reader.decodeStruct(NetworkContext_SetClient_Params);
      this.setClient(params.client);
      return true;
    case kNetworkContext_CreateURLLoaderFactory_Name:
      var params = reader.decodeStruct(NetworkContext_CreateURLLoaderFactory_Params);
      this.createURLLoaderFactory(params.urlLoaderFactory, params.params);
      return true;
    case kNetworkContext_ResetURLLoaderFactories_Name:
      var params = reader.decodeStruct(NetworkContext_ResetURLLoaderFactories_Params);
      this.resetURLLoaderFactories();
      return true;
    case kNetworkContext_GetCookieManager_Name:
      var params = reader.decodeStruct(NetworkContext_GetCookieManager_Params);
      this.getCookieManager(params.cookieManager);
      return true;
    case kNetworkContext_GetRestrictedCookieManager_Name:
      var params = reader.decodeStruct(NetworkContext_GetRestrictedCookieManager_Params);
      this.getRestrictedCookieManager(params.restrictedCookieManager, params.origin);
      return true;
    case kNetworkContext_NotifyExternalCacheHit_Name:
      var params = reader.decodeStruct(NetworkContext_NotifyExternalCacheHit_Params);
      this.notifyExternalCacheHit(params.url, params.httpMethod, params.topFrameOrigin);
      return true;
    case kNetworkContext_WriteCacheMetadata_Name:
      var params = reader.decodeStruct(NetworkContext_WriteCacheMetadata_Params);
      this.writeCacheMetadata(params.url, params.priority, params.expectedResponseTime, params.data);
      return true;
    case kNetworkContext_QueueReport_Name:
      var params = reader.decodeStruct(NetworkContext_QueueReport_Params);
      this.queueReport(params.type, params.group, params.url, params.userAgent, params.body);
      return true;
    case kNetworkContext_QueueSignedExchangeReport_Name:
      var params = reader.decodeStruct(NetworkContext_QueueSignedExchangeReport_Params);
      this.queueSignedExchangeReport(params.report);
      return true;
    case kNetworkContext_SetNetworkConditions_Name:
      var params = reader.decodeStruct(NetworkContext_SetNetworkConditions_Params);
      this.setNetworkConditions(params.throttlingProfileId, params.conditions);
      return true;
    case kNetworkContext_SetAcceptLanguage_Name:
      var params = reader.decodeStruct(NetworkContext_SetAcceptLanguage_Params);
      this.setAcceptLanguage(params.newAcceptLanguage);
      return true;
    case kNetworkContext_SetEnableReferrers_Name:
      var params = reader.decodeStruct(NetworkContext_SetEnableReferrers_Params);
      this.setEnableReferrers(params.enableReferrers);
      return true;
    case kNetworkContext_SetCTPolicy_Name:
      var params = reader.decodeStruct(NetworkContext_SetCTPolicy_Params);
      this.setCTPolicy(params.requiredHosts, params.excludedHosts, params.excludedSpkis, params.excludedLegacySpkis);
      return true;
    case kNetworkContext_CreateUDPSocket_Name:
      var params = reader.decodeStruct(NetworkContext_CreateUDPSocket_Params);
      this.createUDPSocket(params.request, params.receiver);
      return true;
    case kNetworkContext_CreateProxyResolvingSocketFactory_Name:
      var params = reader.decodeStruct(NetworkContext_CreateProxyResolvingSocketFactory_Params);
      this.createProxyResolvingSocketFactory(params.factory);
      return true;
    case kNetworkContext_LookUpProxyForURL_Name:
      var params = reader.decodeStruct(NetworkContext_LookUpProxyForURL_Params);
      this.lookUpProxyForURL(params.url, params.proxyLookupClient);
      return true;
    case kNetworkContext_CreateWebSocket_Name:
      var params = reader.decodeStruct(NetworkContext_CreateWebSocket_Params);
      this.createWebSocket(params.request, params.processId, params.renderFrameId, params.origin, params.options, params.authHandler, params.headerClient);
      return true;
    case kNetworkContext_CreateNetLogExporter_Name:
      var params = reader.decodeStruct(NetworkContext_CreateNetLogExporter_Params);
      this.createNetLogExporter(params.exporter);
      return true;
    case kNetworkContext_PreconnectSockets_Name:
      var params = reader.decodeStruct(NetworkContext_PreconnectSockets_Params);
      this.preconnectSockets(params.numStreams, params.url, params.loadFlags, params.privacyModeEnabled);
      return true;
    case kNetworkContext_CreateP2PSocketManager_Name:
      var params = reader.decodeStruct(NetworkContext_CreateP2PSocketManager_Params);
      this.createP2PSocketManager(params.client, params.trustedSocketManager, params.socketManager);
      return true;
    case kNetworkContext_CreateMdnsResponder_Name:
      var params = reader.decodeStruct(NetworkContext_CreateMdnsResponder_Params);
      this.createMdnsResponder(params.responderRequest);
      return true;
    case kNetworkContext_ResolveHost_Name:
      var params = reader.decodeStruct(NetworkContext_ResolveHost_Params);
      this.resolveHost(params.host, params.optionalParameters, params.responseClient);
      return true;
    case kNetworkContext_CreateHostResolver_Name:
      var params = reader.decodeStruct(NetworkContext_CreateHostResolver_Params);
      this.createHostResolver(params.configOverrides, params.hostResolver);
      return true;
    case kNetworkContext_GetOriginPolicyManager_Name:
      var params = reader.decodeStruct(NetworkContext_GetOriginPolicyManager_Params);
      this.getOriginPolicyManager(params.originPolicyManager);
      return true;
    default:
      return false;
    }
  };

  NetworkContextStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkContext_ClearNetworkingHistorySince_Name:
      var params = reader.decodeStruct(NetworkContext_ClearNetworkingHistorySince_Params);
      this.clearNetworkingHistorySince(params.startTime).then(function(response) {
        var responseParams =
            new NetworkContext_ClearNetworkingHistorySince_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_ClearNetworkingHistorySince_Name,
            codec.align(NetworkContext_ClearNetworkingHistorySince_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_ClearNetworkingHistorySince_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_ClearHttpCache_Name:
      var params = reader.decodeStruct(NetworkContext_ClearHttpCache_Params);
      this.clearHttpCache(params.startTime, params.endTime, params.filter).then(function(response) {
        var responseParams =
            new NetworkContext_ClearHttpCache_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_ClearHttpCache_Name,
            codec.align(NetworkContext_ClearHttpCache_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_ClearHttpCache_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_ComputeHttpCacheSize_Name:
      var params = reader.decodeStruct(NetworkContext_ComputeHttpCacheSize_Params);
      this.computeHttpCacheSize(params.startTime, params.endTime).then(function(response) {
        var responseParams =
            new NetworkContext_ComputeHttpCacheSize_ResponseParams();
        responseParams.isUpperBound = response.isUpperBound;
        responseParams.sizeOrError = response.sizeOrError;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_ComputeHttpCacheSize_Name,
            codec.align(NetworkContext_ComputeHttpCacheSize_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_ComputeHttpCacheSize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_ClearHostCache_Name:
      var params = reader.decodeStruct(NetworkContext_ClearHostCache_Params);
      this.clearHostCache(params.filter).then(function(response) {
        var responseParams =
            new NetworkContext_ClearHostCache_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_ClearHostCache_Name,
            codec.align(NetworkContext_ClearHostCache_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_ClearHostCache_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_ClearHttpAuthCache_Name:
      var params = reader.decodeStruct(NetworkContext_ClearHttpAuthCache_Params);
      this.clearHttpAuthCache(params.startTime).then(function(response) {
        var responseParams =
            new NetworkContext_ClearHttpAuthCache_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_ClearHttpAuthCache_Name,
            codec.align(NetworkContext_ClearHttpAuthCache_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_ClearHttpAuthCache_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_ClearReportingCacheReports_Name:
      var params = reader.decodeStruct(NetworkContext_ClearReportingCacheReports_Params);
      this.clearReportingCacheReports(params.filter).then(function(response) {
        var responseParams =
            new NetworkContext_ClearReportingCacheReports_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_ClearReportingCacheReports_Name,
            codec.align(NetworkContext_ClearReportingCacheReports_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_ClearReportingCacheReports_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_ClearReportingCacheClients_Name:
      var params = reader.decodeStruct(NetworkContext_ClearReportingCacheClients_Params);
      this.clearReportingCacheClients(params.filter).then(function(response) {
        var responseParams =
            new NetworkContext_ClearReportingCacheClients_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_ClearReportingCacheClients_Name,
            codec.align(NetworkContext_ClearReportingCacheClients_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_ClearReportingCacheClients_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_ClearNetworkErrorLogging_Name:
      var params = reader.decodeStruct(NetworkContext_ClearNetworkErrorLogging_Params);
      this.clearNetworkErrorLogging(params.filter).then(function(response) {
        var responseParams =
            new NetworkContext_ClearNetworkErrorLogging_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_ClearNetworkErrorLogging_Name,
            codec.align(NetworkContext_ClearNetworkErrorLogging_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_ClearNetworkErrorLogging_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_ClearDomainReliability_Name:
      var params = reader.decodeStruct(NetworkContext_ClearDomainReliability_Params);
      this.clearDomainReliability(params.filter, params.mode).then(function(response) {
        var responseParams =
            new NetworkContext_ClearDomainReliability_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_ClearDomainReliability_Name,
            codec.align(NetworkContext_ClearDomainReliability_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_ClearDomainReliability_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_GetDomainReliabilityJSON_Name:
      var params = reader.decodeStruct(NetworkContext_GetDomainReliabilityJSON_Params);
      this.getDomainReliabilityJSON().then(function(response) {
        var responseParams =
            new NetworkContext_GetDomainReliabilityJSON_ResponseParams();
        responseParams.data = response.data;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_GetDomainReliabilityJSON_Name,
            codec.align(NetworkContext_GetDomainReliabilityJSON_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_GetDomainReliabilityJSON_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_CloseAllConnections_Name:
      var params = reader.decodeStruct(NetworkContext_CloseAllConnections_Params);
      this.closeAllConnections().then(function(response) {
        var responseParams =
            new NetworkContext_CloseAllConnections_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_CloseAllConnections_Name,
            codec.align(NetworkContext_CloseAllConnections_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_CloseAllConnections_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_CloseIdleConnections_Name:
      var params = reader.decodeStruct(NetworkContext_CloseIdleConnections_Params);
      this.closeIdleConnections().then(function(response) {
        var responseParams =
            new NetworkContext_CloseIdleConnections_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_CloseIdleConnections_Name,
            codec.align(NetworkContext_CloseIdleConnections_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_CloseIdleConnections_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_AddExpectCT_Name:
      var params = reader.decodeStruct(NetworkContext_AddExpectCT_Params);
      this.addExpectCT(params.host, params.expiry, params.enforce, params.reportUri).then(function(response) {
        var responseParams =
            new NetworkContext_AddExpectCT_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_AddExpectCT_Name,
            codec.align(NetworkContext_AddExpectCT_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_AddExpectCT_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_SetExpectCTTestReport_Name:
      var params = reader.decodeStruct(NetworkContext_SetExpectCTTestReport_Params);
      this.setExpectCTTestReport(params.reportUri).then(function(response) {
        var responseParams =
            new NetworkContext_SetExpectCTTestReport_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_SetExpectCTTestReport_Name,
            codec.align(NetworkContext_SetExpectCTTestReport_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_SetExpectCTTestReport_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_GetExpectCTState_Name:
      var params = reader.decodeStruct(NetworkContext_GetExpectCTState_Params);
      this.getExpectCTState(params.domain).then(function(response) {
        var responseParams =
            new NetworkContext_GetExpectCTState_ResponseParams();
        responseParams.state = response.state;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_GetExpectCTState_Name,
            codec.align(NetworkContext_GetExpectCTState_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_GetExpectCTState_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_CreateTCPServerSocket_Name:
      var params = reader.decodeStruct(NetworkContext_CreateTCPServerSocket_Params);
      this.createTCPServerSocket(params.localAddr, params.backlog, params.trafficAnnotation, params.socket).then(function(response) {
        var responseParams =
            new NetworkContext_CreateTCPServerSocket_ResponseParams();
        responseParams.result = response.result;
        responseParams.localAddrOut = response.localAddrOut;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_CreateTCPServerSocket_Name,
            codec.align(NetworkContext_CreateTCPServerSocket_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_CreateTCPServerSocket_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_CreateTCPConnectedSocket_Name:
      var params = reader.decodeStruct(NetworkContext_CreateTCPConnectedSocket_Params);
      this.createTCPConnectedSocket(params.localAddr, params.remoteAddrList, params.tcpConnectedSocketOptions, params.trafficAnnotation, params.socket, params.observer).then(function(response) {
        var responseParams =
            new NetworkContext_CreateTCPConnectedSocket_ResponseParams();
        responseParams.result = response.result;
        responseParams.localAddr = response.localAddr;
        responseParams.peerAddr = response.peerAddr;
        responseParams.receiveStream = response.receiveStream;
        responseParams.sendStream = response.sendStream;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_CreateTCPConnectedSocket_Name,
            codec.align(NetworkContext_CreateTCPConnectedSocket_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_CreateTCPConnectedSocket_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_CreateTCPBoundSocket_Name:
      var params = reader.decodeStruct(NetworkContext_CreateTCPBoundSocket_Params);
      this.createTCPBoundSocket(params.localAddr, params.trafficAnnotation, params.socket).then(function(response) {
        var responseParams =
            new NetworkContext_CreateTCPBoundSocket_ResponseParams();
        responseParams.result = response.result;
        responseParams.localAddr = response.localAddr;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_CreateTCPBoundSocket_Name,
            codec.align(NetworkContext_CreateTCPBoundSocket_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_CreateTCPBoundSocket_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_ForceReloadProxyConfig_Name:
      var params = reader.decodeStruct(NetworkContext_ForceReloadProxyConfig_Params);
      this.forceReloadProxyConfig().then(function(response) {
        var responseParams =
            new NetworkContext_ForceReloadProxyConfig_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_ForceReloadProxyConfig_Name,
            codec.align(NetworkContext_ForceReloadProxyConfig_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_ForceReloadProxyConfig_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_ClearBadProxiesCache_Name:
      var params = reader.decodeStruct(NetworkContext_ClearBadProxiesCache_Params);
      this.clearBadProxiesCache().then(function(response) {
        var responseParams =
            new NetworkContext_ClearBadProxiesCache_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_ClearBadProxiesCache_Name,
            codec.align(NetworkContext_ClearBadProxiesCache_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_ClearBadProxiesCache_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_VerifyCertForSignedExchange_Name:
      var params = reader.decodeStruct(NetworkContext_VerifyCertForSignedExchange_Params);
      this.verifyCertForSignedExchange(params.certificate, params.url, params.ocspResponse, params.sctList).then(function(response) {
        var responseParams =
            new NetworkContext_VerifyCertForSignedExchange_ResponseParams();
        responseParams.errorCode = response.errorCode;
        responseParams.cvResult = response.cvResult;
        responseParams.ctResult = response.ctResult;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_VerifyCertForSignedExchange_Name,
            codec.align(NetworkContext_VerifyCertForSignedExchange_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_VerifyCertForSignedExchange_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_AddHSTS_Name:
      var params = reader.decodeStruct(NetworkContext_AddHSTS_Params);
      this.addHSTS(params.host, params.expiry, params.includeSubdomains).then(function(response) {
        var responseParams =
            new NetworkContext_AddHSTS_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_AddHSTS_Name,
            codec.align(NetworkContext_AddHSTS_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_AddHSTS_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_IsHSTSActiveForHost_Name:
      var params = reader.decodeStruct(NetworkContext_IsHSTSActiveForHost_Params);
      this.isHSTSActiveForHost(params.host).then(function(response) {
        var responseParams =
            new NetworkContext_IsHSTSActiveForHost_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_IsHSTSActiveForHost_Name,
            codec.align(NetworkContext_IsHSTSActiveForHost_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_IsHSTSActiveForHost_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_GetHSTSState_Name:
      var params = reader.decodeStruct(NetworkContext_GetHSTSState_Params);
      this.getHSTSState(params.domain).then(function(response) {
        var responseParams =
            new NetworkContext_GetHSTSState_ResponseParams();
        responseParams.state = response.state;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_GetHSTSState_Name,
            codec.align(NetworkContext_GetHSTSState_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_GetHSTSState_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_SetCorsOriginAccessListsForOrigin_Name:
      var params = reader.decodeStruct(NetworkContext_SetCorsOriginAccessListsForOrigin_Params);
      this.setCorsOriginAccessListsForOrigin(params.sourceOrigin, params.allowPatterns, params.blockPatterns).then(function(response) {
        var responseParams =
            new NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_SetCorsOriginAccessListsForOrigin_Name,
            codec.align(NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_DeleteDynamicDataForHost_Name:
      var params = reader.decodeStruct(NetworkContext_DeleteDynamicDataForHost_Params);
      this.deleteDynamicDataForHost(params.host).then(function(response) {
        var responseParams =
            new NetworkContext_DeleteDynamicDataForHost_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_DeleteDynamicDataForHost_Name,
            codec.align(NetworkContext_DeleteDynamicDataForHost_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_DeleteDynamicDataForHost_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_SaveHttpAuthCache_Name:
      var params = reader.decodeStruct(NetworkContext_SaveHttpAuthCache_Params);
      this.saveHttpAuthCache().then(function(response) {
        var responseParams =
            new NetworkContext_SaveHttpAuthCache_ResponseParams();
        responseParams.cacheKey = response.cacheKey;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_SaveHttpAuthCache_Name,
            codec.align(NetworkContext_SaveHttpAuthCache_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_SaveHttpAuthCache_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_LoadHttpAuthCache_Name:
      var params = reader.decodeStruct(NetworkContext_LoadHttpAuthCache_Params);
      this.loadHttpAuthCache(params.cacheKey).then(function(response) {
        var responseParams =
            new NetworkContext_LoadHttpAuthCache_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_LoadHttpAuthCache_Name,
            codec.align(NetworkContext_LoadHttpAuthCache_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_LoadHttpAuthCache_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_LookupBasicAuthCredentials_Name:
      var params = reader.decodeStruct(NetworkContext_LookupBasicAuthCredentials_Params);
      this.lookupBasicAuthCredentials(params.url).then(function(response) {
        var responseParams =
            new NetworkContext_LookupBasicAuthCredentials_ResponseParams();
        responseParams.credentials = response.credentials;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_LookupBasicAuthCredentials_Name,
            codec.align(NetworkContext_LookupBasicAuthCredentials_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_LookupBasicAuthCredentials_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_EnableStaticKeyPinningForTesting_Name:
      var params = reader.decodeStruct(NetworkContext_EnableStaticKeyPinningForTesting_Params);
      this.enableStaticKeyPinningForTesting().then(function(response) {
        var responseParams =
            new NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_EnableStaticKeyPinningForTesting_Name,
            codec.align(NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_SetFailingHttpTransactionForTesting_Name:
      var params = reader.decodeStruct(NetworkContext_SetFailingHttpTransactionForTesting_Params);
      this.setFailingHttpTransactionForTesting(params.rv).then(function(response) {
        var responseParams =
            new NetworkContext_SetFailingHttpTransactionForTesting_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_SetFailingHttpTransactionForTesting_Name,
            codec.align(NetworkContext_SetFailingHttpTransactionForTesting_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_SetFailingHttpTransactionForTesting_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_VerifyCertificateForTesting_Name:
      var params = reader.decodeStruct(NetworkContext_VerifyCertificateForTesting_Params);
      this.verifyCertificateForTesting(params.certificate, params.hostname, params.ocspResponse, params.sctList).then(function(response) {
        var responseParams =
            new NetworkContext_VerifyCertificateForTesting_ResponseParams();
        responseParams.errorCode = response.errorCode;
        var builder = new codec.MessageV1Builder(
            kNetworkContext_VerifyCertificateForTesting_Name,
            codec.align(NetworkContext_VerifyCertificateForTesting_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_VerifyCertificateForTesting_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_AddDomainReliabilityContextForTesting_Name:
      var params = reader.decodeStruct(NetworkContext_AddDomainReliabilityContextForTesting_Params);
      this.addDomainReliabilityContextForTesting(params.origin, params.uploadUrl).then(function(response) {
        var responseParams =
            new NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_AddDomainReliabilityContextForTesting_Name,
            codec.align(NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kNetworkContext_ForceDomainReliabilityUploadsForTesting_Name:
      var params = reader.decodeStruct(NetworkContext_ForceDomainReliabilityUploadsForTesting_Params);
      this.forceDomainReliabilityUploadsForTesting().then(function(response) {
        var responseParams =
            new NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kNetworkContext_ForceDomainReliabilityUploadsForTesting_Name,
            codec.align(NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateNetworkContextRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNetworkContext_SetClient_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_SetClient_Params;
      break;
      case kNetworkContext_CreateURLLoaderFactory_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_CreateURLLoaderFactory_Params;
      break;
      case kNetworkContext_ResetURLLoaderFactories_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_ResetURLLoaderFactories_Params;
      break;
      case kNetworkContext_GetCookieManager_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_GetCookieManager_Params;
      break;
      case kNetworkContext_GetRestrictedCookieManager_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_GetRestrictedCookieManager_Params;
      break;
      case kNetworkContext_ClearNetworkingHistorySince_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_ClearNetworkingHistorySince_Params;
      break;
      case kNetworkContext_ClearHttpCache_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_ClearHttpCache_Params;
      break;
      case kNetworkContext_ComputeHttpCacheSize_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_ComputeHttpCacheSize_Params;
      break;
      case kNetworkContext_NotifyExternalCacheHit_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_NotifyExternalCacheHit_Params;
      break;
      case kNetworkContext_WriteCacheMetadata_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_WriteCacheMetadata_Params;
      break;
      case kNetworkContext_ClearHostCache_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_ClearHostCache_Params;
      break;
      case kNetworkContext_ClearHttpAuthCache_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_ClearHttpAuthCache_Params;
      break;
      case kNetworkContext_ClearReportingCacheReports_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_ClearReportingCacheReports_Params;
      break;
      case kNetworkContext_ClearReportingCacheClients_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_ClearReportingCacheClients_Params;
      break;
      case kNetworkContext_ClearNetworkErrorLogging_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_ClearNetworkErrorLogging_Params;
      break;
      case kNetworkContext_ClearDomainReliability_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_ClearDomainReliability_Params;
      break;
      case kNetworkContext_GetDomainReliabilityJSON_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_GetDomainReliabilityJSON_Params;
      break;
      case kNetworkContext_QueueReport_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_QueueReport_Params;
      break;
      case kNetworkContext_QueueSignedExchangeReport_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_QueueSignedExchangeReport_Params;
      break;
      case kNetworkContext_CloseAllConnections_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_CloseAllConnections_Params;
      break;
      case kNetworkContext_CloseIdleConnections_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_CloseIdleConnections_Params;
      break;
      case kNetworkContext_SetNetworkConditions_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_SetNetworkConditions_Params;
      break;
      case kNetworkContext_SetAcceptLanguage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_SetAcceptLanguage_Params;
      break;
      case kNetworkContext_SetEnableReferrers_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_SetEnableReferrers_Params;
      break;
      case kNetworkContext_SetCTPolicy_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_SetCTPolicy_Params;
      break;
      case kNetworkContext_AddExpectCT_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_AddExpectCT_Params;
      break;
      case kNetworkContext_SetExpectCTTestReport_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_SetExpectCTTestReport_Params;
      break;
      case kNetworkContext_GetExpectCTState_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_GetExpectCTState_Params;
      break;
      case kNetworkContext_CreateUDPSocket_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_CreateUDPSocket_Params;
      break;
      case kNetworkContext_CreateTCPServerSocket_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_CreateTCPServerSocket_Params;
      break;
      case kNetworkContext_CreateTCPConnectedSocket_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_CreateTCPConnectedSocket_Params;
      break;
      case kNetworkContext_CreateTCPBoundSocket_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_CreateTCPBoundSocket_Params;
      break;
      case kNetworkContext_CreateProxyResolvingSocketFactory_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_CreateProxyResolvingSocketFactory_Params;
      break;
      case kNetworkContext_LookUpProxyForURL_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_LookUpProxyForURL_Params;
      break;
      case kNetworkContext_ForceReloadProxyConfig_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_ForceReloadProxyConfig_Params;
      break;
      case kNetworkContext_ClearBadProxiesCache_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_ClearBadProxiesCache_Params;
      break;
      case kNetworkContext_CreateWebSocket_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_CreateWebSocket_Params;
      break;
      case kNetworkContext_CreateNetLogExporter_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_CreateNetLogExporter_Params;
      break;
      case kNetworkContext_PreconnectSockets_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_PreconnectSockets_Params;
      break;
      case kNetworkContext_CreateP2PSocketManager_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_CreateP2PSocketManager_Params;
      break;
      case kNetworkContext_CreateMdnsResponder_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_CreateMdnsResponder_Params;
      break;
      case kNetworkContext_ResolveHost_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_ResolveHost_Params;
      break;
      case kNetworkContext_CreateHostResolver_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_CreateHostResolver_Params;
      break;
      case kNetworkContext_VerifyCertForSignedExchange_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_VerifyCertForSignedExchange_Params;
      break;
      case kNetworkContext_AddHSTS_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_AddHSTS_Params;
      break;
      case kNetworkContext_IsHSTSActiveForHost_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_IsHSTSActiveForHost_Params;
      break;
      case kNetworkContext_GetHSTSState_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_GetHSTSState_Params;
      break;
      case kNetworkContext_SetCorsOriginAccessListsForOrigin_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_SetCorsOriginAccessListsForOrigin_Params;
      break;
      case kNetworkContext_DeleteDynamicDataForHost_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_DeleteDynamicDataForHost_Params;
      break;
      case kNetworkContext_SaveHttpAuthCache_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_SaveHttpAuthCache_Params;
      break;
      case kNetworkContext_LoadHttpAuthCache_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_LoadHttpAuthCache_Params;
      break;
      case kNetworkContext_LookupBasicAuthCredentials_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_LookupBasicAuthCredentials_Params;
      break;
      case kNetworkContext_EnableStaticKeyPinningForTesting_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_EnableStaticKeyPinningForTesting_Params;
      break;
      case kNetworkContext_SetFailingHttpTransactionForTesting_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_SetFailingHttpTransactionForTesting_Params;
      break;
      case kNetworkContext_VerifyCertificateForTesting_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_VerifyCertificateForTesting_Params;
      break;
      case kNetworkContext_AddDomainReliabilityContextForTesting_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_AddDomainReliabilityContextForTesting_Params;
      break;
      case kNetworkContext_ForceDomainReliabilityUploadsForTesting_Name:
        if (message.expectsResponse())
          paramsClass = NetworkContext_ForceDomainReliabilityUploadsForTesting_Params;
      break;
      case kNetworkContext_GetOriginPolicyManager_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkContext_GetOriginPolicyManager_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNetworkContextResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNetworkContext_ClearNetworkingHistorySince_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_ClearNetworkingHistorySince_ResponseParams;
        break;
      case kNetworkContext_ClearHttpCache_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_ClearHttpCache_ResponseParams;
        break;
      case kNetworkContext_ComputeHttpCacheSize_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_ComputeHttpCacheSize_ResponseParams;
        break;
      case kNetworkContext_ClearHostCache_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_ClearHostCache_ResponseParams;
        break;
      case kNetworkContext_ClearHttpAuthCache_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_ClearHttpAuthCache_ResponseParams;
        break;
      case kNetworkContext_ClearReportingCacheReports_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_ClearReportingCacheReports_ResponseParams;
        break;
      case kNetworkContext_ClearReportingCacheClients_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_ClearReportingCacheClients_ResponseParams;
        break;
      case kNetworkContext_ClearNetworkErrorLogging_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_ClearNetworkErrorLogging_ResponseParams;
        break;
      case kNetworkContext_ClearDomainReliability_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_ClearDomainReliability_ResponseParams;
        break;
      case kNetworkContext_GetDomainReliabilityJSON_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_GetDomainReliabilityJSON_ResponseParams;
        break;
      case kNetworkContext_CloseAllConnections_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_CloseAllConnections_ResponseParams;
        break;
      case kNetworkContext_CloseIdleConnections_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_CloseIdleConnections_ResponseParams;
        break;
      case kNetworkContext_AddExpectCT_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_AddExpectCT_ResponseParams;
        break;
      case kNetworkContext_SetExpectCTTestReport_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_SetExpectCTTestReport_ResponseParams;
        break;
      case kNetworkContext_GetExpectCTState_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_GetExpectCTState_ResponseParams;
        break;
      case kNetworkContext_CreateTCPServerSocket_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_CreateTCPServerSocket_ResponseParams;
        break;
      case kNetworkContext_CreateTCPConnectedSocket_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_CreateTCPConnectedSocket_ResponseParams;
        break;
      case kNetworkContext_CreateTCPBoundSocket_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_CreateTCPBoundSocket_ResponseParams;
        break;
      case kNetworkContext_ForceReloadProxyConfig_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_ForceReloadProxyConfig_ResponseParams;
        break;
      case kNetworkContext_ClearBadProxiesCache_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_ClearBadProxiesCache_ResponseParams;
        break;
      case kNetworkContext_VerifyCertForSignedExchange_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_VerifyCertForSignedExchange_ResponseParams;
        break;
      case kNetworkContext_AddHSTS_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_AddHSTS_ResponseParams;
        break;
      case kNetworkContext_IsHSTSActiveForHost_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_IsHSTSActiveForHost_ResponseParams;
        break;
      case kNetworkContext_GetHSTSState_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_GetHSTSState_ResponseParams;
        break;
      case kNetworkContext_SetCorsOriginAccessListsForOrigin_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams;
        break;
      case kNetworkContext_DeleteDynamicDataForHost_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_DeleteDynamicDataForHost_ResponseParams;
        break;
      case kNetworkContext_SaveHttpAuthCache_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_SaveHttpAuthCache_ResponseParams;
        break;
      case kNetworkContext_LoadHttpAuthCache_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_LoadHttpAuthCache_ResponseParams;
        break;
      case kNetworkContext_LookupBasicAuthCredentials_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_LookupBasicAuthCredentials_ResponseParams;
        break;
      case kNetworkContext_EnableStaticKeyPinningForTesting_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams;
        break;
      case kNetworkContext_SetFailingHttpTransactionForTesting_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_SetFailingHttpTransactionForTesting_ResponseParams;
        break;
      case kNetworkContext_VerifyCertificateForTesting_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_VerifyCertificateForTesting_ResponseParams;
        break;
      case kNetworkContext_AddDomainReliabilityContextForTesting_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams;
        break;
      case kNetworkContext_ForceDomainReliabilityUploadsForTesting_Name:
        if (message.isResponse())
          paramsClass = NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NetworkContext = {
    name: 'network.mojom.NetworkContext',
    kVersion: 0,
    ptrClass: NetworkContextPtr,
    proxyClass: NetworkContextProxy,
    stubClass: NetworkContextStub,
    validateRequest: validateNetworkContextRequest,
    validateResponse: validateNetworkContextResponse,
  };
  NetworkContext.DomainReliabilityClearMode = {};
  NetworkContext.DomainReliabilityClearMode.CLEAR_CONTEXTS = 0;
  NetworkContext.DomainReliabilityClearMode.CLEAR_BEACONS = NetworkContext.DomainReliabilityClearMode.CLEAR_CONTEXTS + 1;
  NetworkContext.DomainReliabilityClearMode.MIN_VALUE = 0,
  NetworkContext.DomainReliabilityClearMode.MAX_VALUE = 1,

  NetworkContext.DomainReliabilityClearMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  NetworkContext.DomainReliabilityClearMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  NetworkContextStub.prototype.validator = validateNetworkContextRequest;
  NetworkContextProxy.prototype.validator = validateNetworkContextResponse;
  exports.kWebSocketOptionNone = kWebSocketOptionNone;
  exports.kWebSocketOptionBlockAllCookies = kWebSocketOptionBlockAllCookies;
  exports.kWebSocketOptionBlockThirdPartyCookies = kWebSocketOptionBlockThirdPartyCookies;
  exports.kBrowserProcessId = kBrowserProcessId;
  exports.kInvalidProcessId = kInvalidProcessId;
  exports.CustomProxyConfig = CustomProxyConfig;
  exports.NetworkContextParams = NetworkContextParams;
  exports.NetworkConditions = NetworkConditions;
  exports.ClearDataFilter = ClearDataFilter;
  exports.NetworkUsage = NetworkUsage;
  exports.SignedExchangeReport = SignedExchangeReport;
  exports.URLLoaderFactoryParams = URLLoaderFactoryParams;
  exports.CustomProxyConfigClient = CustomProxyConfigClient;
  exports.CustomProxyConfigClientPtr = CustomProxyConfigClientPtr;
  exports.CustomProxyConfigClientAssociatedPtr = CustomProxyConfigClientAssociatedPtr;
  exports.TrustedHeaderClient = TrustedHeaderClient;
  exports.TrustedHeaderClientPtr = TrustedHeaderClientPtr;
  exports.TrustedHeaderClientAssociatedPtr = TrustedHeaderClientAssociatedPtr;
  exports.TrustedURLLoaderHeaderClient = TrustedURLLoaderHeaderClient;
  exports.TrustedURLLoaderHeaderClientPtr = TrustedURLLoaderHeaderClientPtr;
  exports.TrustedURLLoaderHeaderClientAssociatedPtr = TrustedURLLoaderHeaderClientAssociatedPtr;
  exports.NetworkContextClient = NetworkContextClient;
  exports.NetworkContextClientPtr = NetworkContextClientPtr;
  exports.NetworkContextClientAssociatedPtr = NetworkContextClientAssociatedPtr;
  exports.NetworkContext = NetworkContext;
  exports.NetworkContextPtr = NetworkContextPtr;
  exports.NetworkContextAssociatedPtr = NetworkContextAssociatedPtr;
})();