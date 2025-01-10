import React, { useEffect, useState } from "react";
import "./demo-preview.scss";
import { useLocation } from "react-router-dom";

const DemoPreview = (props: any) => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const [URL, setURL] = useState(path[path.length - 1]);

  useEffect(() => {
    const path = window.location.hash.substring(2).split("/");
    setURL(`/nutui/biz/demo.html#/${path[path.length - 1]}`);
  }, [location]);

  return (
    <div className={`doc-demo-preview ${props.className}`}>
      <iframe src={URL} name="demos"></iframe>
    </div>
  );
};

export default DemoPreview;
