import Recorder from 'react-recorder'

const onStop = (blob) => {
    console.log(blob);
} 

export default AudioRecorder = () => <Recorder onStop={onStop}/>