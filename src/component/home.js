import { Image } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import logo from "../image/UploadCommander.svg";
import upload from "../image/Upload.svg";
import MyContext from "../myContext";


function Home(props) {
  const [images, setImages] = useState(null);
  const navigate = useNavigate();

  const onFileChange = (event) => {
    setImages(URL.createObjectURL(event.target.files[0]));
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/afterimage");
    console.log("clicked..", images);
  };

  return (<>
      <MyContext.Provider value={images}>
      <div>
        <Image
          src={logo}
          style={{
            position: "absolute",
            width: "310px",
            height: "46px",
            left: "120px",
            top: "52px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "583px",
            height: "150px",
            left: "120px",
            top: "180px",
          }}
        >
          <h1
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "50px",
              color: "#130F26",
            }}
          >
            Generate AI Heatmaps <br /> from your images
          </h1>
          <h5
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "26px",
              color: "#130F26",
            }}
          >
            Want to know what your image viewer care <br /> about the most
            before they actually see it?
            <br />
            AI Heatmap will tell you.
          </h5>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 200,
          top: 150,
          height: "330px",
          width: "330px",
          backgroundColor: "#130F26",
          opacity: 0.1,
          borderRadius: "20px",
        }}
      ></div>
      <div>
        <label htmlFor="file-input">
          <Image
            src={upload}
            style={{ position: "absolute", left: "69%", top: "43%" }}
          />
        </label>
        <input
          id="file-input"
          type="file"
          onChange={onFileChange}
          style={{ display: "none" }}
        />
      </div>
      <div>
        <button
          onClick={handleClick}
          style={{
            position: "absolute",
            width: "335px",
            height: "58px",
            left: "775px",
            top: "512px",
            border: "none",
            background: "#130F26",
            borderRadius: "20px",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px 26px",

            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "26px",
            color: "#F8F5FF",
          }}
        >
          Upload Image
        </button>

        <h6
          style={{
            position: "absolute",
            width: "381px",
            height: "24px",
            left: "750px",
            top: "550px",
            textAlign: "center",

            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "16px",
            color: "#130F26",
          }}
        >
          or <br /> simply drag & drop an image file to this window
        </h6>
      </div>
     </MyContext.Provider> 
     </>
  );
}

export default Home;
