var WMediaStream = null;
var WMediaStreamTrack = null;
var WRTCDataChannel = null;
var WRTCDataChannelEvent = null;
// var WRTCDtlsTransport = null;
var WRTCIceCandidate = null;
var WRTCIceTransport = null;
var WRTCPeerConnection = null;
var WRTCPeerConnectionIceEvent = null;
var WRTCRtpReceiver = null;
var WRTCRtpSender = null;
var WRTCRtpTransceiver = null;
var WRTCSctpTransport = null;
var WRTCSessionDescription = null;
// var WgetUserMedia = null;
// var WmediaDevices = null;

if (typeof RTCPeerConnection !== "undefined") {
  WMediaStream = MediaStream;
  WMediaStreamTrack = MediaStreamTrack;
  WRTCDataChannel = RTCDataChannel;
  WRTCDataChannelEvent = RTCDataChannelEvent;
  // WRTCDtlsTransport = RTCDtlsTransport;
  WRTCIceCandidate = RTCIceCandidate;
  WRTCIceTransport = RTCIceTransport;
  WRTCPeerConnection = RTCPeerConnection;
  WRTCPeerConnectionIceEvent = RTCPeerConnectionIceEvent;
  WRTCRtpReceiver = RTCRtpReceiver;
  WRTCRtpSender = RTCRtpSender;
  WRTCRtpTransceiver = RTCRtpTransceiver;
  WRTCSctpTransport = RTCSctpTransport;
  WRTCSessionDescription = RTCSessionDescription;
} else if (typeof global !== "undefined") {
  WMediaStream = global.MediaStream;
  WMediaStreamTrack = global.MediaStreamTrack;
  WRTCDataChannel = global.RTCDataChannel;
  WRTCDataChannelEvent = global.RTCDataChannelEvent;
  // WRTCDtlsTransport = global.RTCDtlsTransport;
  WRTCIceCandidate = global.RTCIceCandidate;
  WRTCIceTransport = global.RTCIceTransport;
  WRTCPeerConnection = global.RTCPeerConnection;
  WRTCPeerConnectionIceEvent = global.RTCPeerConnectionIceEvent;
  WRTCRtpReceiver = global.RTCRtpReceiver;
  WRTCRtpSender = global.RTCRtpSender;
  WRTCRtpTransceiver = global.RTCRtpTransceiver;
  WRTCSctpTransport = global.RTCSctpTransport;
  WRTCSessionDescription = global.RTCSessionDescription;
} else if (typeof window !== "undefined") {
  WMediaStream = window.MediaStream;
  WMediaStreamTrack = window.MediaStreamTrack;
  WRTCDataChannel = window.RTCDataChannel;
  WRTCDataChannelEvent = window.RTCDataChannelEvent;
  // WRTCDtlsTransport = window.RTCDtlsTransport;
  WRTCIceCandidate = window.RTCIceCandidate;
  WRTCIceTransport = window.RTCIceTransport;
  WRTCPeerConnection = window.RTCPeerConnection;
  WRTCPeerConnectionIceEvent = window.RTCPeerConnectionIceEvent;
  WRTCRtpReceiver = window.RTCRtpReceiver;
  WRTCRtpSender = window.RTCRtpSender;
  WRTCRtpTransceiver = window.RTCRtpTransceiver;
  WRTCSctpTransport = window.RTCSctpTransport;
  WRTCSessionDescription = window.RTCSessionDescription;
} else if (typeof self !== "undefined") {
  WMediaStream = self.MediaStream;
  WMediaStreamTrack = self.MediaStreamTrack;
  WRTCDataChannel = self.RTCDataChannel;
  WRTCDataChannelEvent = self.RTCDataChannelEvent;
  // WRTCDtlsTransport = self.RTCDtlsTransport;
  WRTCIceCandidate = self.RTCIceCandidate;
  WRTCIceTransport = self.RTCIceTransport;
  WRTCPeerConnection = self.RTCPeerConnection;
  WRTCPeerConnectionIceEvent = self.RTCPeerConnectionIceEvent;
  WRTCRtpReceiver = self.RTCRtpReceiver;
  WRTCRtpSender = self.RTCRtpSender;
  WRTCRtpTransceiver = self.RTCRtpTransceiver;
  WRTCSctpTransport = self.RTCSctpTransport;
  WRTCSessionDescription = self.RTCSessionDescription;
}

export {
  WMediaStream as MediaStream,
  WMediaStreamTrack as MediaStreamTrack,
  WRTCDataChannel as RTCDataChannel,
  WRTCDataChannelEvent as RTCDataChannelEvent,
  // WRTCDtlsTransport as RTCDtlsTransport,
  WRTCIceCandidate as RTCIceCandidate,
  WRTCIceTransport as RTCIceTransport,
  WRTCPeerConnection as RTCPeerConnection,
  WRTCPeerConnectionIceEvent as RTCPeerConnectionIceEvent,
  WRTCRtpReceiver as RTCRtpReceiver,
  WRTCRtpSender as RTCRtpSender,
  WRTCRtpTransceiver as RTCRtpTransceiver,
  WRTCSctpTransport as RTCSctpTransport,
  WRTCSessionDescription as RTCSessionDescription,
  WgetUserMedia as getUserMedia,
  WmediaDevices as mediaDevices,
};
