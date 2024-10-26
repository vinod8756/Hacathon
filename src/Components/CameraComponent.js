import React, { useRef,} from "react";
import Webcam from "react-webcam";

const CameraComponent = () => {
  const webcamRef = useRef(null);



  return (
    <div>
      <h2>WebCam Footage</h2>
      <Webcam
      style={{borderRadius: '8px' , float: 'right'}}
        audio={false}
        ref={webcamRef}
        width={300}
      />
    </div>
  );
};

export default CameraComponent;
