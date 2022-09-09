import React, { Component } from "react";

class CloudinaryUploadWidget extends Component {
  constructor(props) {
    super(props);
    this.uploadedPhotoURLs = []
    this.uploadedPhotoThumbnailURLs = []
  }
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: "dedcgmjbe",
      uploadPreset: "FEC-img-upload",
      cropping: false,
      multiple: true,
      maxFiles: 5,
      defaultSource: "local",
      sources: [
        "local",
        "camera",
        "unsplash"
      ],
      clientAllowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp'],
      maxImageFileSize: 3000000,
      maxImageWidth: 2000,
      styles: {
        palette: {
          window: "#FFFFFF",
          windowBorder: "#000000",
          tabIcon: "#FF0000",
          menuIcons: "#464646",
          textDark: "#000000",
          textLight: "#FFFFFF",
          link: "#000000",
          action: "#FF0000",
          inactiveTabIcon: "#000000",
          error: "#B70C00",
          inProgress: "#585858",
          complete: "#20B832",
          sourceBg: "#F3F3F3"
        },
        fonts: {
          default: null,
          "'Poppins', sans-serif": {
            url: "https://fonts.googleapis.com/css?family=Poppins",
            active: true
          }
        }
      }
    },
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.uploadedPhotoURLs.push(result.info.url)
          this.uploadedPhotoThumbnailURLs.push(result.info.thumbnail_url)
          this.props.handlePhotoUploadResponse(this.uploadedPhotoURLs, this.uploadedPhotoThumbnailURLs)
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }


  render() {
    return (
      <button className='ratings-reviews-btn upload-photos' id="upload_widget">
        Upload Photos
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
