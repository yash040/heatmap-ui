import { Image } from "react-bootstrap";
import logo from "../image/UploadCommander.svg";
import MyContext from "../myContext";

function AfterImage() {
  return (
    <>
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
      </div>

      <MyContext.Consumer> 
        {(img_url) => (
          <Image
            src={img_url}
            style={{
              position: "absolute",
              width: "420px",
              height: "420px",
              left: "200px",
              top: "130px",
              borderRadius: "20px",
            }}
          />
        )}
      </MyContext.Consumer>
      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          left: "700px",
          top: "130px",
          backgroundColor: "#130F26",
          opacity: 0.1,
          borderRadius: "20px",
        }}
      ></div>
      <h6
        style={{
          position: "absolute",
          top: 280,
          right: 260,
          width: "260px",
          height: "72px",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
          color: "#130F26",
          textAlign: "center",
          opacity: 0.5,
        }}
      >
        Your Heatmap results
        <br />
        are shown here
      </h6>
      <div>
        <button
          style={{
            position: "absolute",
            width: "335px",
            height: "58px",
            left: "500px",
            top: "575px",
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
          Generate heatmap
        </button>
      </div>
    </>
  );
}

export default AfterImage;
