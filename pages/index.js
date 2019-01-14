import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import icon from "../static/images/icon.svg";

class Home extends React.Component {
  
  constructor(props) {
    super(props);

    // this.isRecording = false;
    // this.blob = null;
    // this.recorder = null;

    // this.startRecording = this.startRecording.bind(this);
    // this.stopRecording = this.stopRecording.bind(this);
    // this.download = this.download.bind(this);
  }

  // componentWillUnmount() {
  //   // Close context on unmount
  //   this.audioContext.close();
  // }

  // componentDidMount() {
  //   let audioContext = new (window.AudioContext || window.webkitAudioContext)();

  //   this.recorder = new Recorder(audioContext, {
  //       onAnalysed: data => console.log(data),
  //     });
  // }
  
  // startRecording() {
  //   navigator.mediaDevices.getUserMedia({audio: true})
  //     .then(stream => this.recorder.init(stream))
  //     .catch(err => console.log('Uh oh... unable to get stream...', err));

  //   this.recorder.start()
  //     .then(() => this.isRecording = true);
  // }
  
  // stopRecording() {
  //   this.recorder.stop()
  //     .then(blob => {
  //       this.blob = blob;
  //       this.isRecording = false;
  //     });
  // }
  
  // download() {
  //   console.log(this.blob.blob);
  //   Recorder.forceDownload(this.blob.blob, 'my-audio-file'); // downloads a .wav file
  // }

  render() {
    return (
      <React.Fragment>
        <Head />
        <div className="center">
            <img className="icon" src={icon} />
            <span>Hi, I'm Oswald.</span>
            {/* <a src="#" className="link" onClick={this.startRecording}>Start Recording</a>
            <a src="#" className="link" onClick={this.stopRecording}>Stop Recording</a>
            <a src="#" className="link" onClick={this.download}>Download</a>
            <p>{this.isRecording.toString()}</p> */}
        </div>
        <style jsx>{`
            @import url("https://use.typekit.net/eud4dzk.css");

            html, body {
                height: 100% !important;
                overflow: hidden !important;
            }

            .link {
              display: block;
              font-family: "Paralucent", sans-serif !important;
            }

            .icon {
                display: block;
                margin: auto;
                padding-bottom: 1em;
            }

            .center {
                width: 100%;
                text-align: center;
                margin-top: 15%;
            }

            .center span {
                font-family: "Paralucent", sans-serif !important;
                font-size: 2rem;
                font-weight: bold;
            }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Home;
