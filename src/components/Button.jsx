import React from "react";

function Button({ styles }) {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      {/* <a href="https://devfolio.co/discover"> */}
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Register Now
      </button>
      {/* <div
        className="apply-button"
        data-hackathon-slug="YOUR-HACKATHON-SLUG"
        data-button-theme="light"
        style="height: 44px; width: 312px"
      ></div> */}
    </div>
  );
}

export default Button;
