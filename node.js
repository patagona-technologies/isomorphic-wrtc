"use strict";

import wrtc from "wrtc";

const MediaStream = wrtc.MediaStream;
const MediaStreamTrack = wrtc.MediaStreamTrack;
const RTCDataChannel = wrtc.RTCDataChannel;
const RTCDataChannelEvent = wrtc.RTCDataChannelEvent;
// const RTCDtlsTransport = wrtc.RTCDtlsTransport;
const RTCIceCandidate = wrtc.RTCIceCandidate;
const RTCIceTransport = wrtc.RTCIceTransport;
const RTCPeerConnection = wrtc.RTCPeerConnection;
const RTCPeerConnectionIceEvent = wrtc.RTCPeerConnectionIceEvent;
const RTCRtpReceiver = wrtc.RTCRtpReceiver;
const RTCRtpSender = wrtc.RTCRtpSender;
const RTCRtpTransceiver = wrtc.RTCRtpTransceiver;
const RTCSctpTransport = wrtc.RTCSctpTransport;
const RTCSessionDescription = wrtc.RTCSessionDescription;

export {
  RTCSessionDescription,
  RTCSctpTransport,
  RTCRtpTransceiver,
  RTCRtpSender,
  RTCRtpReceiver,
  RTCPeerConnectionIceEvent,
  RTCPeerConnection,
  RTCIceTransport,
  RTCIceCandidate,
  RTCDtlsTransport,
  RTCDataChannelEvent,
  RTCDataChannel,
  MediaStreamTrack,
  MediaStream,
};
