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
      maxImageFileSize: 2000000,
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
      <button id="upload_widget">
        Choose File
      </button>
    );
  }
}

export default CloudinaryUploadWidget;






// const cloudName = "dedcgmjbe"; // replace with your own cloud name
// const uploadPreset = "FEC-img-upload"; // replace with your own upload preset

// // https://cloudinary.com/documentation/upload_widget_reference

// const myWidget = cloudinary.createUploadWidget(
//   {
//     cloudName: cloudName,
//     uploadPreset: uploadPreset,
//     cropping: false,
//     multiple: true,
//     defaultSource: "local",
//     clientAllowedFormats: ["images"], //restrict uploading to image files only
//     maxImageFileSize: 2000000,  //restrict file size to less than 2MB
//     maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
//     styles: {
//         palette: {
//           window: "#FFFFFF",
//           windowBorder: "#000000",
//           tabIcon: "#FF0000",
//           menuIcons: "#464646",
//           textDark: "#000000",
//           textLight: "#FFFFFF",
//           link: "#000000",
//           action: "#FF0000",
//           inactiveTabIcon: "#000000",
//           error: "#B70C00",
//           inProgress: "#585858",
//           complete: "#20B832",
//           sourceBg: "#F3F3F3"
//         },
//         fonts: {
//             default: null,
//             "'Poppins', sans-serif": {
//                 url: "https://fonts.googleapis.com/css?family=Poppins",
//                 active: true
//             }
//         }
//     }
//   },
//   (error, result) => {
//     if (!error && result && result.event === "success") {
//       console.log("Done! Here is the image info: ", result.info);
//       document
//         .getElementById("uploadedimage")
//         .setAttribute("src", result.info.secure_url);
//     }
//   }
// );

// document.getElementById("upload_widget").addEventListener(
//   "click",
//   function () {
//     myWidget.open();
//   },
//   false
// );



    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme