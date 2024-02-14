declare const wrtc: {
  RTCSessionDescription: RTCSessionDescription;
  RTCRtpTransceiver: RTCRtpTransceiver;
  RTCRtpSender: RTCRtpSender;
  RTCRtpReceiver: RTCRtpReceiver;
  RTCPeerConnectionIceEvent: RTCPeerConnectionIceEvent;
  RTCPeerConnection: RTCPeerConnection;
  RTCIceCandidate: RTCIceCandidate;
  RTCDataChannelEvent: RTCDataChannelEvent;
  RTCDataChannel: RTCDataChannel;
  MediaStreamTrack: MediaStreamTrack;
  MediaStream: MediaStream;
};

export type WRTC = typeof wrtc;
export default wrtc;
