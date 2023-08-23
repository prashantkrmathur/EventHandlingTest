import { Space } from "antd/lib";
import { Button } from "antd/lib";
import React from "react";
import { useReactMediaRecorder } from "react-media-recorder-2";

function App() {

    const {
        status: screenStatus,
        startRecording: startScreenRecording,
        stopRecording: stopScreenRecording,
        mediaBlobUrl: screenMediaBlobUrl
    } = useReactMediaRecorder({
        video: true,
        screen: true,
        mediaType: "video/mp4",
    });

    const {
        status: webcamStatus,
        startRecording: startWebcamRecording,
        stopRecording: stopWebcamRecording,
        mediaBlobUrl: webcamMediaBlobUrl,
    } = useReactMediaRecorder({
        video: true,
        audio: true,
        mediaType: "video/mp4",
    });

    return (
        <div>
            <h1>Screen Recorder</h1>
            <div>
                <h3 style={{ color: "#212026" }} htmlFor="screen-recorder">
                    Screen Recording:
                    {screenStatus === "recording" ? (
                        <Space wrap >
                            <Button style={{ marginLeft: "2em" }} onClick={stopScreenRecording} danger type="primary" >Stop Recording</Button>
                        </Space >
                    ) : (
                        <Button style={{ marginLeft: "2em" }} onClick={startScreenRecording} primary="true" type="primary">Start Recording</Button>
                    )}
                    {screenStatus === "stopped" && screenMediaBlobUrl && (
                        <video style={{margin:"4em"}} width="80%" src={screenMediaBlobUrl} controls />
                    )}
                </h3>
            </div>
            <div>
                <h3 style={{ color: "#212026" }} htmlFor="webcam-recorder">
                    Webcam Recording:
                    {webcamStatus === "recording" ? (
                        <Button style={{ marginLeft: "2em" }} danger type="primary" onClick={stopWebcamRecording}>Stop Recording</Button>
                    ) : (
                        <Button style={{ marginLeft: "2em" }} primary="true" type="primary" onClick={startWebcamRecording}>Start Recording</Button>
                    )}
                    {webcamStatus === "stopped" && webcamMediaBlobUrl && (
                        <video style={{ margin: "4em" }}  width="40%" src={webcamMediaBlobUrl} controls />
                    )}
                </h3>
            </div>
        </div>
    );
}
export default App;