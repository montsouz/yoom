class PeerBuilder {
  constructor({ peerConfig }) {
    this.peerConfig = peerConfig;

    const defaultFuntionValue = () => {};
    this.onError = defaultFuntionValue;
  }

  setOnError(fn) {
    this.onError = fn;
    return this;
  }

  setOnCallReceived(fn) {}

  setOnConnectionOpened(fn) {}

  build() {
    const peer = new Peer(...this.peerConfig);

    peer.on("error");
    peer.on("call");

    return new Promise((resolve) =>
      peer.on("open", (id) => {
        return resolve(id);
      })
    );
  }
}
