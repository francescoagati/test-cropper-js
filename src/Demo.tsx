import React, { createRef } from "react";
import Cropper from "react-cropper";

import jQuery from "jquery";

import "cropperjs/dist/cropper.css";
import "./Demo.css";
import { Buttons } from "./Buttons";

const minAspectRatio = 0.5;
const maxAspectRatio = 1.5;

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

export default class Demo extends React.Component {
  cropperRef: any;
  ref: React.RefObject<unknown>;
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.ref = createRef();
  }

  onCropMove(e: { detail: { action: string } }) {
    const cropperRef = this.ref;

    const { width, height } = this.state;

    if (cropperRef) {
      const action: string = e.detail.action;

      console.log({ action });

      const imageElement: any = cropperRef?.current;
      const cropper: Cropper = imageElement?.cropper;

      if (cropper) {
        var cropBoxData = cropper.getCropBoxData();
        var aspectRatio = cropBoxData.width / cropBoxData.height;

        const curr_width = cropBoxData.width;
        const curr_height = cropBoxData.height;

        //console.log({ action, prop, value, width, height });

        let prop: string = null;
        let value: number = 0,
          valueH = 0,
          valueW = 0;

        if (action === "n" || action === "s") {
          prop = "height";
          if (aspectRatio > maxAspectRatio)
            value = cropBoxData.height * maxAspectRatio;

          if (aspectRatio < minAspectRatio)
            value = cropBoxData.height * minAspectRatio;
        }

        if (action === "w" || action === "e") {
          prop = "width";
          if (aspectRatio > maxAspectRatio)
            value = cropBoxData.width * maxAspectRatio;

          if (aspectRatio < minAspectRatio)
            value = cropBoxData.width * minAspectRatio;
        }

        if (
          action === "nw" ||
          action === "ne" ||
          action === "sw" ||
          action === "se"
        ) {
          prop = "wh";

          if (aspectRatio > maxAspectRatio) {
            valueW = cropBoxData.width * maxAspectRatio;
            valueH = cropBoxData.height * maxAspectRatio;
          }

          if (aspectRatio < minAspectRatio) {
            valueW = cropBoxData.width * minAspectRatio;
            valueH = cropBoxData.height * minAspectRatio;
          }

          console.log({ prop, valueW, valueH });
        }

        if (value !== 0 || valueW !== 0 || valueH !== 0) {
          jQuery(".cropper-line").css({
            backgroundColor: "red",
            opacity: 0.5
          });

          const props: any = {};
          //props[prop] = value;

          if (prop === "width") props.width = this.state.width;
          if (prop === "height") props.height = this.state.height;

          if (prop === "wh") {
            props.width = this.state.width;
            props.height = this.state.height;
          }

          cropper.setCropBoxData(props);
        } else {
          jQuery(".cropper-line").css({
            backgroundColor: "#39f",
            opacity: 0.1
          });

          this.setState({
            width: cropBoxData.width,
            height: cropBoxData.height,
            top: cropBoxData.top,
            left: cropBoxData.left
          });
        }
      }
    }
  }

  render_cropper() {
    const cropperRef = this.ref;

    const { width, height } = this.state;

    return (
      <div>
        <div style={{ width: "100%" }}>
          {JSON.stringify([width, height])}
          <Cropper
            ref={cropperRef}
            style={{ height: 400, width: "100%" }}
            initialAspectRatio={1}
            preview=".img-preview"
            src={defaultSrc}
            dragMode={"move"}
            viewMode={3}
            guides={true}
            minCropBoxHeight={50}
            minCropBoxWidth={50}
            background={false}
            responsive={true}
            autoCropArea={1}
            cropmove={this.onCropMove.bind(this)}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            onInitialized={(instance) => {
              console.log({ instance });

              this.setCropper(instance);

              var cropper = instance;
              var containerData = cropper.getContainerData();
              var cropBoxData = cropper.getCropBoxData();
              var aspectRatio = cropBoxData.width / cropBoxData.height;
              var newCropBoxWidth;

              if (
                aspectRatio < minAspectRatio ||
                aspectRatio > maxAspectRatio
              ) {
                newCropBoxWidth =
                  cropBoxData.height * ((minAspectRatio + maxAspectRatio) / 2);

                cropper.setCropBoxData({
                  left: (containerData.width - newCropBoxWidth) / 2,
                  width: newCropBoxWidth
                });
              }
            }}
          />
        </div>

        <div>
          <div className="box" style={{ width: "50%", float: "right" }}>
            <h1>Preview</h1>
            <div
              className="img-preview"
              style={{ width: "100%", float: "left", height: "300px" }}
            />
          </div>
          <div
            className="box"
            style={{ width: "50%", float: "right", height: "300px" }}
          >
            <h1>
              <span>Crop</span>
              <button style={{ float: "right" }} onClick={null}>
                Crop Image
              </button>
            </h1>
          </div>
        </div>
        <br style={{ clear: "both" }} />
      </div>
    );
  }
  setCropper(instance: Cropper) {
    this.cropper = instance;
  }

  render() {
    return this.render_cropper();
  }
}

// export const Demo: React.FC = () => {
//   const [image, setImage] = useState(defaultSrc);
//   const [cropData, setCropData] = useState("#");
//   const [cropper, setCropper] = useState<any>();

//   const [width, setWidth] = useState(0);
//   const [height, setHeight] = useState(0);

//   const cropperRef = useRef<HTMLImageElement>(null);

//   const onChange = (e: any) => {
//     e.preventDefault();
//     let files;
//     if (e.dataTransfer) {
//       files = e.dataTransfer.files;
//     } else if (e.target) {
//       files = e.target.files;
//     }
//     const reader = new FileReader();
//     reader.onload = () => {
//       setImage(reader.result as any);
//     };
//     reader.readAsDataURL(files[0]);
//   };

//   const getCropData = () => {
//     if (typeof cropper !== "undefined") {
//       setCropData(cropper.getCroppedCanvas().toDataURL());
//     }
//   };

//   const buttons = Buttons(cropperRef);

//   const onCropMove = useCallback((e: CustomEvent<any>): void => {
//     if (cropperRef) {
//       console.log(e.detail.action);

//       const action: string = e.detail.action;

//       const imageElement: any = cropperRef?.current;
//       const cropper: Cropper = imageElement?.cropper;

//       if (cropper) {
//         var cropBoxData = cropper.getCropBoxData();
//         var aspectRatio = cropBoxData.width / cropBoxData.height;

//         const curr_width = cropBoxData.width;
//         const curr_height = cropBoxData.height;

//         //console.log({ action, prop, value, width, height });

//         console.log({ width, height });

//         let prop: string = null;
//         let value: number = 0;

//         if (action === "n" || action === "s") {
//           prop = "height";
//           if (aspectRatio > maxAspectRatio)
//             value = cropBoxData.height * maxAspectRatio;

//           if (aspectRatio < minAspectRatio)
//             value = cropBoxData.height * minAspectRatio;
//         }

//         if (action === "w" || action === "e") {
//           prop = "width";
//           if (aspectRatio > maxAspectRatio)
//             value = cropBoxData.width * maxAspectRatio;

//           if (aspectRatio < minAspectRatio)
//             value = cropBoxData.width * minAspectRatio;
//         }

//         if (value !== 0) {
//           jQuery(".cropper-line").css({
//             backgroundColor: "red",
//             opacity: 0.5
//           });

//           const props: any = {};
//           //props[prop] = value;

//           if (prop === "width") props.width = width;

//           if (prop === "height") props.height = height;

//           cropper.setCropBoxData(props);
//         } else {
//           jQuery(".cropper-line").css({
//             backgroundColor: "#39f",
//             opacity: 0.1
//           });

//           setWidth((width) => cropBoxData.width);
//           setHeight((height) => cropBoxData.height);
//         }

//         /*
//         if (aspectRatio < minAspectRatio) {
//           //ugly experiment
//           jQuery(".cropper-line").css({
//             backgroundColor: "red",
//             opacity: 0.5
//           });

//           cropper.setCropBoxData({
//             width: cropBoxData.height * minAspectRatio
//           });
//         } else if (aspectRatio > maxAspectRatio) {
//           jQuery(".cropper-line").css({
//             backgroundColor: "red",
//             opacity: 0.5
//           });

//           cropper.setCropBoxData({
//             width: cropBoxData.height * maxAspectRatio
//           });
//         } else {
//           jQuery(".cropper-line").css({
//             backgroundColor: "#39f",
//             opacity: 0.1
//           });
//         } */
//       }
//     }
//   });

//   return (
//     <div>
//       <div style={{ width: "100%" }}>
//         <input type="file" onChange={onChange} />
//         <button>Use default img</button>
//         <br />
//         {JSON.stringify([width, height])}
//         <Cropper
//           ref={cropperRef}
//           style={{ height: 400, width: "100%" }}
//           initialAspectRatio={1}
//           preview=".img-preview"
//           src={image}
//           dragMode={"move"}
//           viewMode={2}
//           guides={true}
//           minCropBoxHeight={50}
//           minCropBoxWidth={50}
//           background={false}
//           responsive={true}
//           autoCropArea={1}
//           cropmove={onCropMove}
//           checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
//           onInitialized={(instance) => {
//             console.log({ instance });

//             setCropper(instance);

//             var cropper = instance;
//             var containerData = cropper.getContainerData();
//             var cropBoxData = cropper.getCropBoxData();
//             var aspectRatio = cropBoxData.width / cropBoxData.height;
//             var newCropBoxWidth;

//             if (aspectRatio < minAspectRatio || aspectRatio > maxAspectRatio) {
//               newCropBoxWidth =
//                 cropBoxData.height * ((minAspectRatio + maxAspectRatio) / 2);

//               cropper.setCropBoxData({
//                 left: (containerData.width - newCropBoxWidth) / 2,
//                 width: newCropBoxWidth
//               });
//             }
//           }}
//         />
//       </div>

//       <div>
//         <div className="box" style={{ width: "50%", float: "right" }}>
//           <h1>Preview</h1>
//           <div
//             className="img-preview"
//             style={{ width: "100%", float: "left", height: "300px" }}
//           />
//         </div>
//         <div
//           className="box"
//           style={{ width: "50%", float: "right", height: "300px" }}
//         >
//           <h1>
//             <span>Crop</span>
//             <button style={{ float: "right" }} onClick={getCropData}>
//               Crop Image
//             </button>
//           </h1>
//           <img style={{ width: "100%" }} src={cropData} alt="cropped" />
//         </div>
//       </div>
//       <br style={{ clear: "both" }} />
//     </div>
//   );
// };

//export default Demo;

//        <div className="col-md-12"> {buttons}</div>
