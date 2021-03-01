import React from "react";
import { Cropper } from "react-cropper";

export function Buttons(cropperRef: any) {
  let cropper: Cropper = null;

  if (cropperRef) {
    const imageElement: any = cropperRef?.current;
    cropper = imageElement?.cropper;
  }

  return (
    <div className="row" id="actions">
      <div className="col-md-9 docs-buttons">
        {/*  <div className="btn-group">
          <button
            onClick={() => cropper.setDragMode("move")}
            type="button"
            className="btn btn-primary"
            data-method="setDragMode"
            data-option="move"
            title="Move"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title='cropper.setDragMode("move")'
            >
              <span className="fa fa-arrows-alt" />
            </span>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-method="setDragMode"
            data-option="crop"
            title="Crop"
          >
            <span
              onClick={() => cropper.setDragMode("crop")}
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title='cropper.setDragMode("crop")'
            >
              <span className="fa fa-crop-alt" />
            </span>
          </button>
        </div> */}
        <div className="btn-group">
          <button
            onClick={() => cropper.zoom(0.1)}
            type="button"
            className="btn btn-primary"
            data-method="zoom"
            data-option="0.1"
            title="Zoom In"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.zoom(0.1)"
            >
              <span className="fa fa-search-plus" />
            </span>
          </button>
          <button
            onClick={() => cropper.zoom(-0.1)}
            type="button"
            className="btn btn-primary"
            data-method="zoom"
            data-option="-0.1"
            title="Zoom Out"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.zoom(-0.1)"
            >
              <span className="fa fa-search-minus" />
            </span>
          </button>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            data-method="move"
            data-option={-10}
            data-second-option={0}
            title="Move Left"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.move(-10, 0)"
            >
              <span className="fa fa-arrow-left" />
            </span>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-method="move"
            data-option={10}
            data-second-option={0}
            title="Move Right"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.move(10, 0)"
            >
              <span className="fa fa-arrow-right" />
            </span>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-method="move"
            data-option={0}
            data-second-option={-10}
            title="Move Up"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.move(0, -10)"
            >
              <span className="fa fa-arrow-up" />
            </span>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-method="move"
            data-option={0}
            data-second-option={10}
            title="Move Down"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.move(0, 10)"
            >
              <span className="fa fa-arrow-down" />
            </span>
          </button>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            data-method="rotate"
            data-option={-45}
            title="Rotate Left"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.rotate(-45)"
            >
              <span className="fa fa-undo-alt" />
            </span>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-method="rotate"
            data-option={45}
            title="Rotate Right"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.rotate(45)"
            >
              <span className="fa fa-redo-alt" />
            </span>
          </button>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            data-method="scaleX"
            data-option={-1}
            title="Flip Horizontal"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.scaleX(-1)"
            >
              <span className="fa fa-arrows-alt-h" />
            </span>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-method="scaleY"
            data-option={-1}
            title="Flip Vertical"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.scaleY(-1)"
            >
              <span className="fa fa-arrows-alt-v" />
            </span>
          </button>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            data-method="crop"
            title="Crop"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.crop()"
            >
              <span className="fa fa-check" />
            </span>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-method="clear"
            title="Clear"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.clear()"
            >
              <span className="fa fa-times" />
            </span>
          </button>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            data-method="disable"
            title="Disable"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.disable()"
            >
              <span className="fa fa-lock" />
            </span>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-method="enable"
            title="Enable"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.enable()"
            >
              <span className="fa fa-unlock" />
            </span>
          </button>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            data-method="reset"
            title="Reset"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.reset()"
            >
              <span className="fa fa-sync-alt" />
            </span>
          </button>
          <label
            className="btn btn-primary btn-upload"
            htmlFor="inputImage"
            title="Upload image file"
          >
            <input
              type="file"
              className="sr-only"
              id="inputImage"
              name="file"
              accept="image/*"
            />
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="Import image with Blob URLs"
            >
              <span className="fa fa-upload" />
            </span>
          </label>
          <button
            type="button"
            className="btn btn-primary"
            data-method="destroy"
            title="Destroy"
          >
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="cropper.destroy()"
            >
              <span className="fa fa-power-off" />
            </span>
          </button>
        </div>
      </div>

      <div className="col-md-3 docs-toggles">
        <div className="btn-group d-flex flex-nowrap" data-toggle="buttons">
          <label className="btn btn-primary">
            <input
              onClick={() => cropper.setAspectRatio(16 / 9)}
              type="radio"
              className="sr-only"
              id="aspectRatio1"
              name="aspectRatio"
              defaultValue="1.7777777777777777"
            />
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="aspectRatio: 16 / 9"
            >
              16: 9
            </span>
          </label>
          <label className="btn btn-primary">
            <input
              onClick={() => cropper.setAspectRatio(4 / 3)}
              type="radio"
              className="sr-only"
              id="aspectRatio2"
              name="aspectRatio"
              defaultValue="1.3333333333333333"
            />
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="aspectRatio: 4 / 3"
            >
              4: 3
            </span>
          </label>
          <label className="btn btn-primary">
            <input
              onClick={() => cropper.setAspectRatio(1 / 1)}
              type="radio"
              className="sr-only"
              id="aspectRatio3"
              name="aspectRatio"
              defaultValue={1}
            />
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="aspectRatio: 1 / 1"
            >
              1: 1
            </span>
          </label>
          <label className="btn btn-primary">
            <input
              onClick={() => cropper.setAspectRatio(2 / 3)}
              type="radio"
              className="sr-only"
              id="aspectRatio4"
              name="aspectRatio"
              defaultValue="0.6666666666666666"
            />
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="aspectRatio: 2 / 3"
            >
              2: 3
            </span>
          </label>
          <label className="btn btn-primary active">
            <input
              onClick={() => cropper.setAspectRatio(1)}
              type="radio"
              className="sr-only"
              id="aspectRatio5"
              name="aspectRatio"
              defaultValue="NaN"
            />
            <span
              className="docs-tooltip"
              data-toggle="tooltip"
              title
              data-original-title="aspectRatio: NaN"
            >
              Free
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
