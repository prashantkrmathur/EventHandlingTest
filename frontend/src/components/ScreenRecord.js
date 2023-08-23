import { Checkbox } from "antd";
import { Space } from "antd/lib";
import { Button } from "antd/lib";
import React, { useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder-2";

function App() {
    const [pipActive, setPipActive] = useState(false);
    const webcamRef = useRef(null);
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

    const togglePip = () => {
        setPipActive(!pipActive);
    };

    const saveScreenRecordingToLocalStorage = () => {
        const file = new File([screenMediaBlobUrl], "screen-recording.mp4", {
            type: "video/mp4",
        });

        localStorage.setItem("screen-recording", JSON.stringify(file));
    };

    const saveWebcamRecordingToLocalStorage = () => {
        const file = new File([webcamMediaBlobUrl], "webcam-recording.mp4", {
            type: "video/mp4",
        });

        localStorage.setItem("webcam-recording", JSON.stringify(file));
    };

    const handleScreenRecording = () => {
        saveScreenRecordingToLocalStorage();
        stopScreenRecording();
    }

    const handleWebCamRecording = () => {
        saveWebcamRecordingToLocalStorage();
        stopWebcamRecording();
    }

    return (
        <div>
            <h1>Screen Recorder</h1>
            <div>
                <h3 style={{ color: "#212026" }} >
                    Screen Recording:
                    {screenStatus === "recording" ? (
                        <Space wrap >
                            <Button style={{ marginLeft: "2em" }} onClick={handleScreenRecording} danger type="primary" >Stop Recording</Button>
                        </Space >
                    ) : (
                        <Button style={{ marginLeft: "2em" }} onClick={startScreenRecording} primary="true" type="primary">Start Recording</Button>
                    )}
                    {screenStatus === "stopped" && screenMediaBlobUrl && (
                        <video style={{ margin: "4em" }} width="80%" src={screenMediaBlobUrl} controls />
                    )}
                </h3>
            </div>
            <div>
                <h3 style={{ color: "#212026" }}>
                    Webcam Recording:
                    {webcamStatus === "recording" ? (
                        <Button style={{ marginLeft: "2em" }} danger type="primary" onClick={handleWebCamRecording}>Stop Recording</Button>
                    ) : (
                        <Button style={{ marginLeft: "2em" }} primary="true" type="primary" onClick={startWebcamRecording}>Start Recording</Button>
                    )}
                    {webcamStatus === "stopped" && webcamMediaBlobUrl && (
                        <video style={{ margin: "4em" }} width="40%" src={webcamMediaBlobUrl} controls />
                    )}
                </h3>
            </div>
            <div>
                <h3 style={{ color: "#212026" }}>
                    PiP Mode:
                    <Checkbox style={{ marginLeft: "2em" }} type="checkbox" checked={pipActive} onChange={togglePip} />
                </h3>
            </div>
            {pipActive && (
                <div style={{ position: "fixed", bottom: 20, right: 20 }}>
                    <video
                        ref={webcamRef}
                        autoPlay
                        muted
                        style={{ width: 200, height: 150 }}
                    />
                </div>
            )}
        </div>
    )
}
export default App;