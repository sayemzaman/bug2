// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/capture/mojom/video_capture_types.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('media.mojom');
  var mailbox_holder$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/mailbox_holder.mojom', '../../../gpu/ipc/common/mailbox_holder.mojom.js');
  }
  var shared_memory$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/shared_memory.mojom', '../../../mojo/public/mojom/base/shared_memory.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../mojo/public/mojom/base/time.mojom.js');
  }
  var values$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/values.mojom', '../../../mojo/public/mojom/base/values.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }
  var color_space$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojo/color_space.mojom', '../../../ui/gfx/mojo/color_space.mojom.js');
  }


  var VideoCapturePixelFormat = {};
  VideoCapturePixelFormat.UNKNOWN = 0;
  VideoCapturePixelFormat.I420 = VideoCapturePixelFormat.UNKNOWN + 1;
  VideoCapturePixelFormat.YV12 = VideoCapturePixelFormat.I420 + 1;
  VideoCapturePixelFormat.I422 = VideoCapturePixelFormat.YV12 + 1;
  VideoCapturePixelFormat.I420A = VideoCapturePixelFormat.I422 + 1;
  VideoCapturePixelFormat.I444 = VideoCapturePixelFormat.I420A + 1;
  VideoCapturePixelFormat.NV12 = VideoCapturePixelFormat.I444 + 1;
  VideoCapturePixelFormat.NV21 = VideoCapturePixelFormat.NV12 + 1;
  VideoCapturePixelFormat.UYVY = VideoCapturePixelFormat.NV21 + 1;
  VideoCapturePixelFormat.YUY2 = VideoCapturePixelFormat.UYVY + 1;
  VideoCapturePixelFormat.ARGB = VideoCapturePixelFormat.YUY2 + 1;
  VideoCapturePixelFormat.XRGB = VideoCapturePixelFormat.ARGB + 1;
  VideoCapturePixelFormat.RGB24 = VideoCapturePixelFormat.XRGB + 1;
  VideoCapturePixelFormat.RGB32 = VideoCapturePixelFormat.RGB24 + 1;
  VideoCapturePixelFormat.MJPEG = VideoCapturePixelFormat.RGB32 + 1;
  VideoCapturePixelFormat.MT21 = VideoCapturePixelFormat.MJPEG + 1;
  VideoCapturePixelFormat.YUV420P9 = VideoCapturePixelFormat.MT21 + 1;
  VideoCapturePixelFormat.YUV420P10 = VideoCapturePixelFormat.YUV420P9 + 1;
  VideoCapturePixelFormat.YUV422P9 = VideoCapturePixelFormat.YUV420P10 + 1;
  VideoCapturePixelFormat.YUV422P10 = VideoCapturePixelFormat.YUV422P9 + 1;
  VideoCapturePixelFormat.YUV444P9 = VideoCapturePixelFormat.YUV422P10 + 1;
  VideoCapturePixelFormat.YUV444P10 = VideoCapturePixelFormat.YUV444P9 + 1;
  VideoCapturePixelFormat.YUV420P12 = VideoCapturePixelFormat.YUV444P10 + 1;
  VideoCapturePixelFormat.YUV422P12 = VideoCapturePixelFormat.YUV420P12 + 1;
  VideoCapturePixelFormat.YUV444P12 = VideoCapturePixelFormat.YUV422P12 + 1;
  VideoCapturePixelFormat.Y16 = VideoCapturePixelFormat.YUV444P12 + 1;
  VideoCapturePixelFormat.ABGR = VideoCapturePixelFormat.Y16 + 1;
  VideoCapturePixelFormat.XBGR = VideoCapturePixelFormat.ABGR + 1;
  VideoCapturePixelFormat.P016LE = VideoCapturePixelFormat.XBGR + 1;
  VideoCapturePixelFormat.MIN_VALUE = 0,
  VideoCapturePixelFormat.MAX_VALUE = 28,

  VideoCapturePixelFormat.isKnownEnumValue = function(value) {
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
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
      return true;
    }
    return false;
  };

  VideoCapturePixelFormat.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ResolutionChangePolicy = {};
  ResolutionChangePolicy.FIXED_RESOLUTION = 0;
  ResolutionChangePolicy.FIXED_ASPECT_RATIO = ResolutionChangePolicy.FIXED_RESOLUTION + 1;
  ResolutionChangePolicy.ANY_WITHIN_LIMIT = ResolutionChangePolicy.FIXED_ASPECT_RATIO + 1;
  ResolutionChangePolicy.MIN_VALUE = 0,
  ResolutionChangePolicy.MAX_VALUE = 2,

  ResolutionChangePolicy.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ResolutionChangePolicy.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PowerLineFrequency = {};
  PowerLineFrequency.DEFAULT = 0;
  PowerLineFrequency.HZ_50 = PowerLineFrequency.DEFAULT + 1;
  PowerLineFrequency.HZ_60 = PowerLineFrequency.HZ_50 + 1;
  PowerLineFrequency.MIN_VALUE = 0,
  PowerLineFrequency.MAX_VALUE = 2,

  PowerLineFrequency.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  PowerLineFrequency.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var VideoFacingMode = {};
  VideoFacingMode.NONE = 0;
  VideoFacingMode.USER = VideoFacingMode.NONE + 1;
  VideoFacingMode.ENVIRONMENT = VideoFacingMode.USER + 1;
  VideoFacingMode.MIN_VALUE = 0,
  VideoFacingMode.MAX_VALUE = 2,

  VideoFacingMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  VideoFacingMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var VideoCaptureApi = {};
  VideoCaptureApi.LINUX_V4L2_SINGLE_PLANE = 0;
  VideoCaptureApi.WIN_MEDIA_FOUNDATION = VideoCaptureApi.LINUX_V4L2_SINGLE_PLANE + 1;
  VideoCaptureApi.WIN_MEDIA_FOUNDATION_SENSOR = VideoCaptureApi.WIN_MEDIA_FOUNDATION + 1;
  VideoCaptureApi.WIN_DIRECT_SHOW = VideoCaptureApi.WIN_MEDIA_FOUNDATION_SENSOR + 1;
  VideoCaptureApi.MACOSX_AVFOUNDATION = VideoCaptureApi.WIN_DIRECT_SHOW + 1;
  VideoCaptureApi.MACOSX_DECKLINK = VideoCaptureApi.MACOSX_AVFOUNDATION + 1;
  VideoCaptureApi.ANDROID_API1 = VideoCaptureApi.MACOSX_DECKLINK + 1;
  VideoCaptureApi.ANDROID_API2_LEGACY = VideoCaptureApi.ANDROID_API1 + 1;
  VideoCaptureApi.ANDROID_API2_FULL = VideoCaptureApi.ANDROID_API2_LEGACY + 1;
  VideoCaptureApi.ANDROID_API2_LIMITED = VideoCaptureApi.ANDROID_API2_FULL + 1;
  VideoCaptureApi.VIRTUAL_DEVICE = VideoCaptureApi.ANDROID_API2_LIMITED + 1;
  VideoCaptureApi.UNKNOWN = VideoCaptureApi.VIRTUAL_DEVICE + 1;
  VideoCaptureApi.MIN_VALUE = 0,
  VideoCaptureApi.MAX_VALUE = 11,

  VideoCaptureApi.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  VideoCaptureApi.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var VideoCaptureTransportType = {};
  VideoCaptureTransportType.MACOSX_USB_OR_BUILT_IN = 0;
  VideoCaptureTransportType.OTHER_TRANSPORT = VideoCaptureTransportType.MACOSX_USB_OR_BUILT_IN + 1;
  VideoCaptureTransportType.MIN_VALUE = 0,
  VideoCaptureTransportType.MAX_VALUE = 1,

  VideoCaptureTransportType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  VideoCaptureTransportType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var VideoCaptureBufferType = {};
  VideoCaptureBufferType.kSharedMemory = 0;
  VideoCaptureBufferType.kSharedMemoryViaRawFileDescriptor = VideoCaptureBufferType.kSharedMemory + 1;
  VideoCaptureBufferType.kMailboxHolder = VideoCaptureBufferType.kSharedMemoryViaRawFileDescriptor + 1;
  VideoCaptureBufferType.MIN_VALUE = 0,
  VideoCaptureBufferType.MAX_VALUE = 2,

  VideoCaptureBufferType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  VideoCaptureBufferType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var VideoCaptureError = {};
  VideoCaptureError.kNone = 0;
  VideoCaptureError.kVideoCaptureControllerInvalidOrUnsupportedVideoCaptureParametersRequested = VideoCaptureError.kNone + 1;
  VideoCaptureError.kVideoCaptureControllerIsAlreadyInErrorState = VideoCaptureError.kVideoCaptureControllerInvalidOrUnsupportedVideoCaptureParametersRequested + 1;
  VideoCaptureError.kVideoCaptureManagerDeviceConnectionLost = VideoCaptureError.kVideoCaptureControllerIsAlreadyInErrorState + 1;
  VideoCaptureError.kFrameSinkVideoCaptureDeviceAleradyEndedOnFatalError = VideoCaptureError.kVideoCaptureManagerDeviceConnectionLost + 1;
  VideoCaptureError.kFrameSinkVideoCaptureDeviceEncounteredFatalError = VideoCaptureError.kFrameSinkVideoCaptureDeviceAleradyEndedOnFatalError + 1;
  VideoCaptureError.kV4L2FailedToOpenV4L2DeviceDriverFile = VideoCaptureError.kFrameSinkVideoCaptureDeviceEncounteredFatalError + 1;
  VideoCaptureError.kV4L2ThisIsNotAV4L2VideoCaptureDevice = VideoCaptureError.kV4L2FailedToOpenV4L2DeviceDriverFile + 1;
  VideoCaptureError.kV4L2FailedToFindASupportedCameraFormat = VideoCaptureError.kV4L2ThisIsNotAV4L2VideoCaptureDevice + 1;
  VideoCaptureError.kV4L2FailedToSetVideoCaptureFormat = VideoCaptureError.kV4L2FailedToFindASupportedCameraFormat + 1;
  VideoCaptureError.kV4L2UnsupportedPixelFormat = VideoCaptureError.kV4L2FailedToSetVideoCaptureFormat + 1;
  VideoCaptureError.kV4L2FailedToSetCameraFramerate = VideoCaptureError.kV4L2UnsupportedPixelFormat + 1;
  VideoCaptureError.kV4L2ErrorRequestingMmapBuffers = VideoCaptureError.kV4L2FailedToSetCameraFramerate + 1;
  VideoCaptureError.kV4L2AllocateBufferFailed = VideoCaptureError.kV4L2ErrorRequestingMmapBuffers + 1;
  VideoCaptureError.kV4L2VidiocStreamonFailed = VideoCaptureError.kV4L2AllocateBufferFailed + 1;
  VideoCaptureError.kV4L2VidiocStreamoffFailed = VideoCaptureError.kV4L2VidiocStreamonFailed + 1;
  VideoCaptureError.kV4L2FailedToVidiocReqbufsWithCount0 = VideoCaptureError.kV4L2VidiocStreamoffFailed + 1;
  VideoCaptureError.kV4L2PollFailed = VideoCaptureError.kV4L2FailedToVidiocReqbufsWithCount0 + 1;
  VideoCaptureError.kV4L2MultipleContinuousTimeoutsWhileReadPolling = VideoCaptureError.kV4L2PollFailed + 1;
  VideoCaptureError.kV4L2FailedToDequeueCaptureBuffer = VideoCaptureError.kV4L2MultipleContinuousTimeoutsWhileReadPolling + 1;
  VideoCaptureError.kV4L2FailedToEnqueueCaptureBuffer = VideoCaptureError.kV4L2FailedToDequeueCaptureBuffer + 1;
  VideoCaptureError.kSingleClientVideoCaptureHostLostConnectionToDevice = VideoCaptureError.kV4L2FailedToEnqueueCaptureBuffer + 1;
  VideoCaptureError.kSingleClientVideoCaptureDeviceLaunchAborted = VideoCaptureError.kSingleClientVideoCaptureHostLostConnectionToDevice + 1;
  VideoCaptureError.kDesktopCaptureDeviceWebrtcDesktopCapturerHasFailed = VideoCaptureError.kSingleClientVideoCaptureDeviceLaunchAborted + 1;
  VideoCaptureError.kFileVideoCaptureDeviceCouldNotOpenVideoFile = VideoCaptureError.kDesktopCaptureDeviceWebrtcDesktopCapturerHasFailed + 1;
  VideoCaptureError.kDeviceCaptureLinuxFailedToCreateVideoCaptureDelegate = VideoCaptureError.kFileVideoCaptureDeviceCouldNotOpenVideoFile + 1;
  VideoCaptureError.kErrorFakeDeviceIntentionallyEmittingErrorEvent = VideoCaptureError.kDeviceCaptureLinuxFailedToCreateVideoCaptureDelegate + 1;
  VideoCaptureError.kDeviceClientTooManyFramesDroppedY16 = VideoCaptureError.kErrorFakeDeviceIntentionallyEmittingErrorEvent + 1;
  VideoCaptureError.kDeviceMediaToMojoAdapterEncounteredUnsupportedBufferType = VideoCaptureError.kDeviceClientTooManyFramesDroppedY16 + 1;
  VideoCaptureError.kVideoCaptureManagerProcessDeviceStartQueueDeviceInfoNotFound = VideoCaptureError.kDeviceMediaToMojoAdapterEncounteredUnsupportedBufferType + 1;
  VideoCaptureError.kInProcessDeviceLauncherFailedToCreateDeviceInstance = VideoCaptureError.kVideoCaptureManagerProcessDeviceStartQueueDeviceInfoNotFound + 1;
  VideoCaptureError.kServiceDeviceLauncherLostConnectionToDeviceFactoryDuringDeviceStart = VideoCaptureError.kInProcessDeviceLauncherFailedToCreateDeviceInstance + 1;
  VideoCaptureError.kServiceDeviceLauncherServiceRespondedWithDeviceNotFound = VideoCaptureError.kServiceDeviceLauncherLostConnectionToDeviceFactoryDuringDeviceStart + 1;
  VideoCaptureError.kServiceDeviceLauncherConnectionLostWhileWaitingForCallback = VideoCaptureError.kServiceDeviceLauncherServiceRespondedWithDeviceNotFound + 1;
  VideoCaptureError.kIntentionalErrorRaisedByUnitTest = VideoCaptureError.kServiceDeviceLauncherConnectionLostWhileWaitingForCallback + 1;
  VideoCaptureError.kCrosHalV3FailedToStartDeviceThread = VideoCaptureError.kIntentionalErrorRaisedByUnitTest + 1;
  VideoCaptureError.kCrosHalV3DeviceDelegateMojoConnectionError = VideoCaptureError.kCrosHalV3FailedToStartDeviceThread + 1;
  VideoCaptureError.kCrosHalV3DeviceDelegateFailedToGetCameraInfo = VideoCaptureError.kCrosHalV3DeviceDelegateMojoConnectionError + 1;
  VideoCaptureError.kCrosHalV3DeviceDelegateMissingSensorOrientationInfo = VideoCaptureError.kCrosHalV3DeviceDelegateFailedToGetCameraInfo + 1;
  VideoCaptureError.kCrosHalV3DeviceDelegateFailedToOpenCameraDevice = VideoCaptureError.kCrosHalV3DeviceDelegateMissingSensorOrientationInfo + 1;
  VideoCaptureError.kCrosHalV3DeviceDelegateFailedToInitializeCameraDevice = VideoCaptureError.kCrosHalV3DeviceDelegateFailedToOpenCameraDevice + 1;
  VideoCaptureError.kCrosHalV3DeviceDelegateFailedToConfigureStreams = VideoCaptureError.kCrosHalV3DeviceDelegateFailedToInitializeCameraDevice + 1;
  VideoCaptureError.kCrosHalV3DeviceDelegateWrongNumberOfStreamsConfigured = VideoCaptureError.kCrosHalV3DeviceDelegateFailedToConfigureStreams + 1;
  VideoCaptureError.kCrosHalV3DeviceDelegateFailedToGetDefaultRequestSettings = VideoCaptureError.kCrosHalV3DeviceDelegateWrongNumberOfStreamsConfigured + 1;
  VideoCaptureError.kCrosHalV3BufferManagerHalRequestedTooManyBuffers = VideoCaptureError.kCrosHalV3DeviceDelegateFailedToGetDefaultRequestSettings + 1;
  VideoCaptureError.kCrosHalV3BufferManagerFailedToCreateGpuMemoryBuffer = VideoCaptureError.kCrosHalV3BufferManagerHalRequestedTooManyBuffers + 1;
  VideoCaptureError.kCrosHalV3BufferManagerFailedToMapGpuMemoryBuffer = VideoCaptureError.kCrosHalV3BufferManagerFailedToCreateGpuMemoryBuffer + 1;
  VideoCaptureError.kCrosHalV3BufferManagerUnsupportedVideoPixelFormat = VideoCaptureError.kCrosHalV3BufferManagerFailedToMapGpuMemoryBuffer + 1;
  VideoCaptureError.kCrosHalV3BufferManagerFailedToDupFd = VideoCaptureError.kCrosHalV3BufferManagerUnsupportedVideoPixelFormat + 1;
  VideoCaptureError.kCrosHalV3BufferManagerFailedToWrapGpuMemoryHandle = VideoCaptureError.kCrosHalV3BufferManagerFailedToDupFd + 1;
  VideoCaptureError.kCrosHalV3BufferManagerFailedToRegisterBuffer = VideoCaptureError.kCrosHalV3BufferManagerFailedToWrapGpuMemoryHandle + 1;
  VideoCaptureError.kCrosHalV3BufferManagerProcessCaptureRequestFailed = VideoCaptureError.kCrosHalV3BufferManagerFailedToRegisterBuffer + 1;
  VideoCaptureError.kCrosHalV3BufferManagerInvalidPendingResultId = VideoCaptureError.kCrosHalV3BufferManagerProcessCaptureRequestFailed + 1;
  VideoCaptureError.kCrosHalV3BufferManagerReceivedDuplicatedPartialMetadata = VideoCaptureError.kCrosHalV3BufferManagerInvalidPendingResultId + 1;
  VideoCaptureError.kCrosHalV3BufferManagerIncorrectNumberOfOutputBuffersReceived = VideoCaptureError.kCrosHalV3BufferManagerReceivedDuplicatedPartialMetadata + 1;
  VideoCaptureError.kCrosHalV3BufferManagerInvalidTypeOfOutputBuffersReceived = VideoCaptureError.kCrosHalV3BufferManagerIncorrectNumberOfOutputBuffersReceived + 1;
  VideoCaptureError.kCrosHalV3BufferManagerReceivedMultipleResultBuffersForFrame = VideoCaptureError.kCrosHalV3BufferManagerInvalidTypeOfOutputBuffersReceived + 1;
  VideoCaptureError.kCrosHalV3BufferManagerUnknownStreamInCamera3NotifyMsg = VideoCaptureError.kCrosHalV3BufferManagerReceivedMultipleResultBuffersForFrame + 1;
  VideoCaptureError.kCrosHalV3BufferManagerReceivedInvalidShutterTime = VideoCaptureError.kCrosHalV3BufferManagerUnknownStreamInCamera3NotifyMsg + 1;
  VideoCaptureError.kCrosHalV3BufferManagerFatalDeviceError = VideoCaptureError.kCrosHalV3BufferManagerReceivedInvalidShutterTime + 1;
  VideoCaptureError.kCrosHalV3BufferManagerReceivedFrameIsOutOfOrder = VideoCaptureError.kCrosHalV3BufferManagerFatalDeviceError + 1;
  VideoCaptureError.kCrosHalV3BufferManagerFailedToUnwrapReleaseFenceFd = VideoCaptureError.kCrosHalV3BufferManagerReceivedFrameIsOutOfOrder + 1;
  VideoCaptureError.kCrosHalV3BufferManagerSyncWaitOnReleaseFenceTimedOut = VideoCaptureError.kCrosHalV3BufferManagerFailedToUnwrapReleaseFenceFd + 1;
  VideoCaptureError.kCrosHalV3BufferManagerInvalidJpegBlob = VideoCaptureError.kCrosHalV3BufferManagerSyncWaitOnReleaseFenceTimedOut + 1;
  VideoCaptureError.kAndroidFailedToAllocate = VideoCaptureError.kCrosHalV3BufferManagerInvalidJpegBlob + 1;
  VideoCaptureError.kAndroidFailedToStartCapture = VideoCaptureError.kAndroidFailedToAllocate + 1;
  VideoCaptureError.kAndroidFailedToStopCapture = VideoCaptureError.kAndroidFailedToStartCapture + 1;
  VideoCaptureError.kAndroidApi1CameraErrorCallbackReceived = VideoCaptureError.kAndroidFailedToStopCapture + 1;
  VideoCaptureError.kAndroidApi2CameraDeviceErrorReceived = VideoCaptureError.kAndroidApi1CameraErrorCallbackReceived + 1;
  VideoCaptureError.kAndroidApi2CaptureSessionConfigureFailed = VideoCaptureError.kAndroidApi2CameraDeviceErrorReceived + 1;
  VideoCaptureError.kAndroidApi2ImageReaderUnexpectedImageFormat = VideoCaptureError.kAndroidApi2CaptureSessionConfigureFailed + 1;
  VideoCaptureError.kAndroidApi2ImageReaderSizeDidNotMatchImageSize = VideoCaptureError.kAndroidApi2ImageReaderUnexpectedImageFormat + 1;
  VideoCaptureError.kAndroidApi2ErrorRestartingPreview = VideoCaptureError.kAndroidApi2ImageReaderSizeDidNotMatchImageSize + 1;
  VideoCaptureError.kAndroidScreenCaptureUnsupportedFormat = VideoCaptureError.kAndroidApi2ErrorRestartingPreview + 1;
  VideoCaptureError.kAndroidScreenCaptureFailedToStartCaptureMachine = VideoCaptureError.kAndroidScreenCaptureUnsupportedFormat + 1;
  VideoCaptureError.kAndroidScreenCaptureTheUserDeniedScreenCapture = VideoCaptureError.kAndroidScreenCaptureFailedToStartCaptureMachine + 1;
  VideoCaptureError.kAndroidScreenCaptureFailedToStartScreenCapture = VideoCaptureError.kAndroidScreenCaptureTheUserDeniedScreenCapture + 1;
  VideoCaptureError.kWinDirectShowCantGetCaptureFormatSettings = VideoCaptureError.kAndroidScreenCaptureFailedToStartScreenCapture + 1;
  VideoCaptureError.kWinDirectShowFailedToGetNumberOfCapabilities = VideoCaptureError.kWinDirectShowCantGetCaptureFormatSettings + 1;
  VideoCaptureError.kWinDirectShowFailedToGetCaptureDeviceCapabilities = VideoCaptureError.kWinDirectShowFailedToGetNumberOfCapabilities + 1;
  VideoCaptureError.kWinDirectShowFailedToSetCaptureDeviceOutputFormat = VideoCaptureError.kWinDirectShowFailedToGetCaptureDeviceCapabilities + 1;
  VideoCaptureError.kWinDirectShowFailedToConnectTheCaptureGraph = VideoCaptureError.kWinDirectShowFailedToSetCaptureDeviceOutputFormat + 1;
  VideoCaptureError.kWinDirectShowFailedToPauseTheCaptureDevice = VideoCaptureError.kWinDirectShowFailedToConnectTheCaptureGraph + 1;
  VideoCaptureError.kWinDirectShowFailedToStartTheCaptureDevice = VideoCaptureError.kWinDirectShowFailedToPauseTheCaptureDevice + 1;
  VideoCaptureError.kWinDirectShowFailedToStopTheCaptureGraph = VideoCaptureError.kWinDirectShowFailedToStartTheCaptureDevice + 1;
  VideoCaptureError.kWinMediaFoundationEngineIsNull = VideoCaptureError.kWinDirectShowFailedToStopTheCaptureGraph + 1;
  VideoCaptureError.kWinMediaFoundationEngineGetSourceFailed = VideoCaptureError.kWinMediaFoundationEngineIsNull + 1;
  VideoCaptureError.kWinMediaFoundationFillPhotoCapabilitiesFailed = VideoCaptureError.kWinMediaFoundationEngineGetSourceFailed + 1;
  VideoCaptureError.kWinMediaFoundationFillVideoCapabilitiesFailed = VideoCaptureError.kWinMediaFoundationFillPhotoCapabilitiesFailed + 1;
  VideoCaptureError.kWinMediaFoundationNoVideoCapabilityFound = VideoCaptureError.kWinMediaFoundationFillVideoCapabilitiesFailed + 1;
  VideoCaptureError.kWinMediaFoundationGetAvailableDeviceMediaTypeFailed = VideoCaptureError.kWinMediaFoundationNoVideoCapabilityFound + 1;
  VideoCaptureError.kWinMediaFoundationSetCurrentDeviceMediaTypeFailed = VideoCaptureError.kWinMediaFoundationGetAvailableDeviceMediaTypeFailed + 1;
  VideoCaptureError.kWinMediaFoundationEngineGetSinkFailed = VideoCaptureError.kWinMediaFoundationSetCurrentDeviceMediaTypeFailed + 1;
  VideoCaptureError.kWinMediaFoundationSinkQueryCapturePreviewInterfaceFailed = VideoCaptureError.kWinMediaFoundationEngineGetSinkFailed + 1;
  VideoCaptureError.kWinMediaFoundationSinkRemoveAllStreamsFailed = VideoCaptureError.kWinMediaFoundationSinkQueryCapturePreviewInterfaceFailed + 1;
  VideoCaptureError.kWinMediaFoundationCreateSinkVideoMediaTypeFailed = VideoCaptureError.kWinMediaFoundationSinkRemoveAllStreamsFailed + 1;
  VideoCaptureError.kWinMediaFoundationConvertToVideoSinkMediaTypeFailed = VideoCaptureError.kWinMediaFoundationCreateSinkVideoMediaTypeFailed + 1;
  VideoCaptureError.kWinMediaFoundationSinkAddStreamFailed = VideoCaptureError.kWinMediaFoundationConvertToVideoSinkMediaTypeFailed + 1;
  VideoCaptureError.kWinMediaFoundationSinkSetSampleCallbackFailed = VideoCaptureError.kWinMediaFoundationSinkAddStreamFailed + 1;
  VideoCaptureError.kWinMediaFoundationEngineStartPreviewFailed = VideoCaptureError.kWinMediaFoundationSinkSetSampleCallbackFailed + 1;
  VideoCaptureError.kWinMediaFoundationGetMediaEventStatusFailed = VideoCaptureError.kWinMediaFoundationEngineStartPreviewFailed + 1;
  VideoCaptureError.kMacSetCaptureDeviceFailed = VideoCaptureError.kWinMediaFoundationGetMediaEventStatusFailed + 1;
  VideoCaptureError.kMacCouldNotStartCaptureDevice = VideoCaptureError.kMacSetCaptureDeviceFailed + 1;
  VideoCaptureError.kMacReceivedFrameWithUnexpectedResolution = VideoCaptureError.kMacCouldNotStartCaptureDevice + 1;
  VideoCaptureError.kMacUpdateCaptureResolutionFailed = VideoCaptureError.kMacReceivedFrameWithUnexpectedResolution + 1;
  VideoCaptureError.kMacDeckLinkDeviceIdNotFoundInTheSystem = VideoCaptureError.kMacUpdateCaptureResolutionFailed + 1;
  VideoCaptureError.kMacDeckLinkErrorQueryingInputInterface = VideoCaptureError.kMacDeckLinkDeviceIdNotFoundInTheSystem + 1;
  VideoCaptureError.kMacDeckLinkErrorCreatingDisplayModeIterator = VideoCaptureError.kMacDeckLinkErrorQueryingInputInterface + 1;
  VideoCaptureError.kMacDeckLinkCouldNotFindADisplayMode = VideoCaptureError.kMacDeckLinkErrorCreatingDisplayModeIterator + 1;
  VideoCaptureError.kMacDeckLinkCouldNotSelectTheVideoFormatWeLike = VideoCaptureError.kMacDeckLinkCouldNotFindADisplayMode + 1;
  VideoCaptureError.kMacDeckLinkCouldNotStartCapturing = VideoCaptureError.kMacDeckLinkCouldNotSelectTheVideoFormatWeLike + 1;
  VideoCaptureError.kMacDeckLinkUnsupportedPixelFormat = VideoCaptureError.kMacDeckLinkCouldNotStartCapturing + 1;
  VideoCaptureError.kMacAvFoundationReceivedAVCaptureSessionRuntimeErrorNotification = VideoCaptureError.kMacDeckLinkUnsupportedPixelFormat + 1;
  VideoCaptureError.kAndroidApi2ErrorConfiguringCamera = VideoCaptureError.kMacAvFoundationReceivedAVCaptureSessionRuntimeErrorNotification + 1;
  VideoCaptureError.kCrosHalV3DeviceDelegateFailedToFlush = VideoCaptureError.kAndroidApi2ErrorConfiguringCamera + 1;
  VideoCaptureError.MIN_VALUE = 0,
  VideoCaptureError.MAX_VALUE = 114,

  VideoCaptureError.isKnownEnumValue = function(value) {
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
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
      return true;
    }
    return false;
  };

  VideoCaptureError.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var VideoCaptureFrameDropReason = {};
  VideoCaptureFrameDropReason.kNone = 0;
  VideoCaptureFrameDropReason.kDeviceClientFrameHasInvalidFormat = VideoCaptureFrameDropReason.kNone + 1;
  VideoCaptureFrameDropReason.kDeviceClientLibyuvConvertToI420Failed = VideoCaptureFrameDropReason.kDeviceClientFrameHasInvalidFormat + 1;
  VideoCaptureFrameDropReason.kV4L2BufferErrorFlagWasSet = VideoCaptureFrameDropReason.kDeviceClientLibyuvConvertToI420Failed + 1;
  VideoCaptureFrameDropReason.kV4L2InvalidNumberOfBytesInBuffer = VideoCaptureFrameDropReason.kV4L2BufferErrorFlagWasSet + 1;
  VideoCaptureFrameDropReason.kAndroidThrottling = VideoCaptureFrameDropReason.kV4L2InvalidNumberOfBytesInBuffer + 1;
  VideoCaptureFrameDropReason.kAndroidGetByteArrayElementsFailed = VideoCaptureFrameDropReason.kAndroidThrottling + 1;
  VideoCaptureFrameDropReason.kAndroidApi1UnexpectedDataLength = VideoCaptureFrameDropReason.kAndroidGetByteArrayElementsFailed + 1;
  VideoCaptureFrameDropReason.kAndroidApi2AcquiredImageIsNull = VideoCaptureFrameDropReason.kAndroidApi1UnexpectedDataLength + 1;
  VideoCaptureFrameDropReason.kWinDirectShowUnexpectedSampleLength = VideoCaptureFrameDropReason.kAndroidApi2AcquiredImageIsNull + 1;
  VideoCaptureFrameDropReason.kWinDirectShowFailedToGetMemoryPointerFromMediaSample = VideoCaptureFrameDropReason.kWinDirectShowUnexpectedSampleLength + 1;
  VideoCaptureFrameDropReason.kWinMediaFoundationReceivedSampleIsNull = VideoCaptureFrameDropReason.kWinDirectShowFailedToGetMemoryPointerFromMediaSample + 1;
  VideoCaptureFrameDropReason.kWinMediaFoundationLockingBufferDelieveredNullptr = VideoCaptureFrameDropReason.kWinMediaFoundationReceivedSampleIsNull + 1;
  VideoCaptureFrameDropReason.kWinMediaFoundationGetBufferByIndexReturnedNull = VideoCaptureFrameDropReason.kWinMediaFoundationLockingBufferDelieveredNullptr + 1;
  VideoCaptureFrameDropReason.kBufferPoolMaxBufferCountExceeded = VideoCaptureFrameDropReason.kWinMediaFoundationGetBufferByIndexReturnedNull + 1;
  VideoCaptureFrameDropReason.kBufferPoolBufferAllocationFailed = VideoCaptureFrameDropReason.kBufferPoolMaxBufferCountExceeded + 1;
  VideoCaptureFrameDropReason.kVideoCaptureImplNotInStartedState = VideoCaptureFrameDropReason.kBufferPoolBufferAllocationFailed + 1;
  VideoCaptureFrameDropReason.kVideoCaptureImplFailedToWrapDataAsMediaVideoFrame = VideoCaptureFrameDropReason.kVideoCaptureImplNotInStartedState + 1;
  VideoCaptureFrameDropReason.kVideoTrackAdapterHasNoResolutionAdapters = VideoCaptureFrameDropReason.kVideoCaptureImplFailedToWrapDataAsMediaVideoFrame + 1;
  VideoCaptureFrameDropReason.kResolutionAdapterFrameIsNotValid = VideoCaptureFrameDropReason.kVideoTrackAdapterHasNoResolutionAdapters + 1;
  VideoCaptureFrameDropReason.kResolutionAdapterWrappingFrameForCroppingFailed = VideoCaptureFrameDropReason.kResolutionAdapterFrameIsNotValid + 1;
  VideoCaptureFrameDropReason.kResolutionAdapterTimestampTooCloseToPrevious = VideoCaptureFrameDropReason.kResolutionAdapterWrappingFrameForCroppingFailed + 1;
  VideoCaptureFrameDropReason.kResolutionAdapterFrameRateIsHigherThanRequested = VideoCaptureFrameDropReason.kResolutionAdapterTimestampTooCloseToPrevious + 1;
  VideoCaptureFrameDropReason.kResolutionAdapterHasNoCallbacks = VideoCaptureFrameDropReason.kResolutionAdapterFrameRateIsHigherThanRequested + 1;
  VideoCaptureFrameDropReason.kVideoTrackFrameDelivererNotEnabledReplacingWithBlackFrame = VideoCaptureFrameDropReason.kResolutionAdapterHasNoCallbacks + 1;
  VideoCaptureFrameDropReason.kRendererSinkFrameDelivererIsNotStarted = VideoCaptureFrameDropReason.kVideoTrackFrameDelivererNotEnabledReplacingWithBlackFrame + 1;
  VideoCaptureFrameDropReason.MIN_VALUE = 0,
  VideoCaptureFrameDropReason.MAX_VALUE = 25,

  VideoCaptureFrameDropReason.isKnownEnumValue = function(value) {
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
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
      return true;
    }
    return false;
  };

  VideoCaptureFrameDropReason.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function VideoCaptureFormat(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureFormat.prototype.initDefaults_ = function() {
    this.frameSize = null;
    this.frameRate = 0;
    this.pixelFormat = 0;
  };
  VideoCaptureFormat.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureFormat.validate = function(messageValidator, offset) {
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


    // validate VideoCaptureFormat.frameSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate VideoCaptureFormat.pixelFormat
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, VideoCapturePixelFormat);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoCaptureFormat.encodedSize = codec.kStructHeaderSize + 16;

  VideoCaptureFormat.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureFormat();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameSize = decoder.decodeStructPointer(geometry$.Size);
    val.frameRate = decoder.decodeStruct(codec.Float);
    val.pixelFormat = decoder.decodeStruct(codec.Int32);
    return val;
  };

  VideoCaptureFormat.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureFormat.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Size, val.frameSize);
    encoder.encodeStruct(codec.Float, val.frameRate);
    encoder.encodeStruct(codec.Int32, val.pixelFormat);
  };
  function VideoCaptureParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureParams.prototype.initDefaults_ = function() {
    this.requestedFormat = null;
    this.bufferType = 0;
    this.resolutionChangePolicy = 0;
    this.powerLineFrequency = 0;
    this.enableFaceDetection = false;
  };
  VideoCaptureParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureParams.validate = function(messageValidator, offset) {
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


    // validate VideoCaptureParams.requestedFormat
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, VideoCaptureFormat, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoCaptureParams.bufferType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, VideoCaptureBufferType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoCaptureParams.resolutionChangePolicy
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, ResolutionChangePolicy);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoCaptureParams.powerLineFrequency
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, PowerLineFrequency);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VideoCaptureParams.encodedSize = codec.kStructHeaderSize + 24;

  VideoCaptureParams.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestedFormat = decoder.decodeStructPointer(VideoCaptureFormat);
    val.bufferType = decoder.decodeStruct(codec.Int32);
    val.resolutionChangePolicy = decoder.decodeStruct(codec.Int32);
    val.powerLineFrequency = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.enableFaceDetection = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoCaptureParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(VideoCaptureFormat, val.requestedFormat);
    encoder.encodeStruct(codec.Int32, val.bufferType);
    encoder.encodeStruct(codec.Int32, val.resolutionChangePolicy);
    encoder.encodeStruct(codec.Int32, val.powerLineFrequency);
    packed = 0;
    packed |= (val.enableFaceDetection & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PlaneStrides(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PlaneStrides.prototype.initDefaults_ = function() {
    this.strideByPlane = null;
  };
  PlaneStrides.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PlaneStrides.validate = function(messageValidator, offset) {
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


    // validate PlaneStrides.strideByPlane
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Uint32, false, [4], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PlaneStrides.encodedSize = codec.kStructHeaderSize + 8;

  PlaneStrides.decode = function(decoder) {
    var packed;
    var val = new PlaneStrides();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.strideByPlane = decoder.decodeArrayPointer(codec.Uint32);
    return val;
  };

  PlaneStrides.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PlaneStrides.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint32, val.strideByPlane);
  };
  function VideoFrameInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoFrameInfo.prototype.initDefaults_ = function() {
    this.timestamp = null;
    this.metadata = null;
    this.pixelFormat = 0;
    this.codedSize = null;
    this.visibleRect = null;
    this.colorSpace = null;
    this.strides = null;
  };
  VideoFrameInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoFrameInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 64}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrameInfo.timestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrameInfo.metadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, values$.DictionaryValue, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrameInfo.pixelFormat
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, VideoCapturePixelFormat);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrameInfo.codedSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrameInfo.visibleRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrameInfo.colorSpace
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, color_space$.ColorSpace, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrameInfo.strides
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, PlaneStrides, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoFrameInfo.encodedSize = codec.kStructHeaderSize + 56;

  VideoFrameInfo.decode = function(decoder) {
    var packed;
    var val = new VideoFrameInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.timestamp = decoder.decodeStructPointer(time$.TimeDelta);
    val.metadata = decoder.decodeStructPointer(values$.DictionaryValue);
    val.pixelFormat = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.codedSize = decoder.decodeStructPointer(geometry$.Size);
    val.visibleRect = decoder.decodeStructPointer(geometry$.Rect);
    val.colorSpace = decoder.decodeStructPointer(color_space$.ColorSpace);
    val.strides = decoder.decodeStructPointer(PlaneStrides);
    return val;
  };

  VideoFrameInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoFrameInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeDelta, val.timestamp);
    encoder.encodeStructPointer(values$.DictionaryValue, val.metadata);
    encoder.encodeStruct(codec.Int32, val.pixelFormat);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.Size, val.codedSize);
    encoder.encodeStructPointer(geometry$.Rect, val.visibleRect);
    encoder.encodeStructPointer(color_space$.ColorSpace, val.colorSpace);
    encoder.encodeStructPointer(PlaneStrides, val.strides);
  };
  function VideoCaptureDeviceDescriptor(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureDeviceDescriptor.prototype.initDefaults_ = function() {
    this.displayName = null;
    this.deviceId = null;
    this.modelId = null;
    this.facingMode = 0;
    this.captureApi = 0;
    this.transportType = 0;
  };
  VideoCaptureDeviceDescriptor.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureDeviceDescriptor.validate = function(messageValidator, offset) {
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


    // validate VideoCaptureDeviceDescriptor.displayName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoCaptureDeviceDescriptor.deviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoCaptureDeviceDescriptor.modelId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoCaptureDeviceDescriptor.facingMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, VideoFacingMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoCaptureDeviceDescriptor.captureApi
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 28, VideoCaptureApi);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoCaptureDeviceDescriptor.transportType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 32, VideoCaptureTransportType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoCaptureDeviceDescriptor.encodedSize = codec.kStructHeaderSize + 40;

  VideoCaptureDeviceDescriptor.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureDeviceDescriptor();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.displayName = decoder.decodeStruct(codec.String);
    val.deviceId = decoder.decodeStruct(codec.String);
    val.modelId = decoder.decodeStruct(codec.String);
    val.facingMode = decoder.decodeStruct(codec.Int32);
    val.captureApi = decoder.decodeStruct(codec.Int32);
    val.transportType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoCaptureDeviceDescriptor.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureDeviceDescriptor.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.displayName);
    encoder.encodeStruct(codec.String, val.deviceId);
    encoder.encodeStruct(codec.String, val.modelId);
    encoder.encodeStruct(codec.Int32, val.facingMode);
    encoder.encodeStruct(codec.Int32, val.captureApi);
    encoder.encodeStruct(codec.Int32, val.transportType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoCaptureDeviceInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoCaptureDeviceInfo.prototype.initDefaults_ = function() {
    this.descriptor = null;
    this.supportedFormats = null;
  };
  VideoCaptureDeviceInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoCaptureDeviceInfo.validate = function(messageValidator, offset) {
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


    // validate VideoCaptureDeviceInfo.descriptor
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, VideoCaptureDeviceDescriptor, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoCaptureDeviceInfo.supportedFormats
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(VideoCaptureFormat), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoCaptureDeviceInfo.encodedSize = codec.kStructHeaderSize + 16;

  VideoCaptureDeviceInfo.decode = function(decoder) {
    var packed;
    var val = new VideoCaptureDeviceInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.descriptor = decoder.decodeStructPointer(VideoCaptureDeviceDescriptor);
    val.supportedFormats = decoder.decodeArrayPointer(new codec.PointerTo(VideoCaptureFormat));
    return val;
  };

  VideoCaptureDeviceInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoCaptureDeviceInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(VideoCaptureDeviceDescriptor, val.descriptor);
    encoder.encodeArrayPointer(new codec.PointerTo(VideoCaptureFormat), val.supportedFormats);
  };
  function MailboxBufferHandleSet(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MailboxBufferHandleSet.prototype.initDefaults_ = function() {
    this.mailboxHolder = null;
  };
  MailboxBufferHandleSet.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MailboxBufferHandleSet.validate = function(messageValidator, offset) {
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


    // validate MailboxBufferHandleSet.mailboxHolder
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(mailbox_holder$.MailboxHolder), false, [4], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MailboxBufferHandleSet.encodedSize = codec.kStructHeaderSize + 8;

  MailboxBufferHandleSet.decode = function(decoder) {
    var packed;
    var val = new MailboxBufferHandleSet();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mailboxHolder = decoder.decodeArrayPointer(new codec.PointerTo(mailbox_holder$.MailboxHolder));
    return val;
  };

  MailboxBufferHandleSet.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MailboxBufferHandleSet.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(mailbox_holder$.MailboxHolder), val.mailboxHolder);
  };
  function SharedMemoryViaRawFileDescriptor(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedMemoryViaRawFileDescriptor.prototype.initDefaults_ = function() {
    this.fileDescriptorHandle = null;
    this.sharedMemorySizeInBytes = 0;
  };
  SharedMemoryViaRawFileDescriptor.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedMemoryViaRawFileDescriptor.validate = function(messageValidator, offset) {
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


    // validate SharedMemoryViaRawFileDescriptor.fileDescriptorHandle
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SharedMemoryViaRawFileDescriptor.encodedSize = codec.kStructHeaderSize + 8;

  SharedMemoryViaRawFileDescriptor.decode = function(decoder) {
    var packed;
    var val = new SharedMemoryViaRawFileDescriptor();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fileDescriptorHandle = decoder.decodeStruct(codec.Handle);
    val.sharedMemorySizeInBytes = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  SharedMemoryViaRawFileDescriptor.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedMemoryViaRawFileDescriptor.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.fileDescriptorHandle);
    encoder.encodeStruct(codec.Uint32, val.sharedMemorySizeInBytes);
  };

  function VideoBufferHandle(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  VideoBufferHandle.Tags = {
    sharedBufferHandle: 0,
    readOnlyShmemRegion: 1,
    sharedMemoryViaRawFileDescriptor: 2,
    mailboxHandles: 3,
  };

  VideoBufferHandle.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  VideoBufferHandle.prototype.initValue_ = function(value) {
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
        "sharedBufferHandle",
        "readOnlyShmemRegion",
        "sharedMemoryViaRawFileDescriptor",
        "mailboxHandles",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a VideoBufferHandle member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(VideoBufferHandle.prototype, "sharedBufferHandle", {
    get: function() {
      if (this.$tag != VideoBufferHandle.Tags.sharedBufferHandle) {
        throw new ReferenceError(
            "VideoBufferHandle.sharedBufferHandle is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = VideoBufferHandle.Tags.sharedBufferHandle;
      this.$data = value;
    }
  });
  Object.defineProperty(VideoBufferHandle.prototype, "readOnlyShmemRegion", {
    get: function() {
      if (this.$tag != VideoBufferHandle.Tags.readOnlyShmemRegion) {
        throw new ReferenceError(
            "VideoBufferHandle.readOnlyShmemRegion is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = VideoBufferHandle.Tags.readOnlyShmemRegion;
      this.$data = value;
    }
  });
  Object.defineProperty(VideoBufferHandle.prototype, "sharedMemoryViaRawFileDescriptor", {
    get: function() {
      if (this.$tag != VideoBufferHandle.Tags.sharedMemoryViaRawFileDescriptor) {
        throw new ReferenceError(
            "VideoBufferHandle.sharedMemoryViaRawFileDescriptor is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = VideoBufferHandle.Tags.sharedMemoryViaRawFileDescriptor;
      this.$data = value;
    }
  });
  Object.defineProperty(VideoBufferHandle.prototype, "mailboxHandles", {
    get: function() {
      if (this.$tag != VideoBufferHandle.Tags.mailboxHandles) {
        throw new ReferenceError(
            "VideoBufferHandle.mailboxHandles is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = VideoBufferHandle.Tags.mailboxHandles;
      this.$data = value;
    }
  });


    VideoBufferHandle.encode = function(encoder, val) {
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
        case VideoBufferHandle.Tags.sharedBufferHandle:
          encoder.encodeStruct(codec.Handle, val.sharedBufferHandle);
          break;
        case VideoBufferHandle.Tags.readOnlyShmemRegion:
          encoder.encodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion, val.readOnlyShmemRegion);
          break;
        case VideoBufferHandle.Tags.sharedMemoryViaRawFileDescriptor:
          encoder.encodeStructPointer(SharedMemoryViaRawFileDescriptor, val.sharedMemoryViaRawFileDescriptor);
          break;
        case VideoBufferHandle.Tags.mailboxHandles:
          encoder.encodeStructPointer(MailboxBufferHandleSet, val.mailboxHandles);
          break;
      }
      encoder.align();
    };


    VideoBufferHandle.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new VideoBufferHandle();
      var tag = decoder.readUint32();
      switch (tag) {
        case VideoBufferHandle.Tags.sharedBufferHandle:
          result.sharedBufferHandle = decoder.decodeStruct(codec.Handle);
          break;
        case VideoBufferHandle.Tags.readOnlyShmemRegion:
          result.readOnlyShmemRegion = decoder.decodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion);
          break;
        case VideoBufferHandle.Tags.sharedMemoryViaRawFileDescriptor:
          result.sharedMemoryViaRawFileDescriptor = decoder.decodeStructPointer(SharedMemoryViaRawFileDescriptor);
          break;
        case VideoBufferHandle.Tags.mailboxHandles:
          result.mailboxHandles = decoder.decodeStructPointer(MailboxBufferHandleSet);
          break;
      }
      decoder.align();

      return result;
    };


    VideoBufferHandle.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case VideoBufferHandle.Tags.sharedBufferHandle:
          

    // validate VideoBufferHandle.sharedBufferHandle
    err = messageValidator.validateHandle(data_offset, false)
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case VideoBufferHandle.Tags.readOnlyShmemRegion:
          

    // validate VideoBufferHandle.readOnlyShmemRegion
    err = messageValidator.validateStructPointer(data_offset, shared_memory$.ReadOnlySharedMemoryRegion, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case VideoBufferHandle.Tags.sharedMemoryViaRawFileDescriptor:
          

    // validate VideoBufferHandle.sharedMemoryViaRawFileDescriptor
    err = messageValidator.validateStructPointer(data_offset, SharedMemoryViaRawFileDescriptor, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case VideoBufferHandle.Tags.mailboxHandles:
          

    // validate VideoBufferHandle.mailboxHandles
    err = messageValidator.validateStructPointer(data_offset, MailboxBufferHandleSet, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  VideoBufferHandle.encodedSize = 16;
  exports.VideoCapturePixelFormat = VideoCapturePixelFormat;
  exports.ResolutionChangePolicy = ResolutionChangePolicy;
  exports.PowerLineFrequency = PowerLineFrequency;
  exports.VideoFacingMode = VideoFacingMode;
  exports.VideoCaptureApi = VideoCaptureApi;
  exports.VideoCaptureTransportType = VideoCaptureTransportType;
  exports.VideoCaptureBufferType = VideoCaptureBufferType;
  exports.VideoCaptureError = VideoCaptureError;
  exports.VideoCaptureFrameDropReason = VideoCaptureFrameDropReason;
  exports.VideoCaptureFormat = VideoCaptureFormat;
  exports.VideoCaptureParams = VideoCaptureParams;
  exports.PlaneStrides = PlaneStrides;
  exports.VideoFrameInfo = VideoFrameInfo;
  exports.VideoCaptureDeviceDescriptor = VideoCaptureDeviceDescriptor;
  exports.VideoCaptureDeviceInfo = VideoCaptureDeviceInfo;
  exports.MailboxBufferHandleSet = MailboxBufferHandleSet;
  exports.SharedMemoryViaRawFileDescriptor = SharedMemoryViaRawFileDescriptor;
  exports.VideoBufferHandle = VideoBufferHandle;
})();