import React, { useState } from "react";

export function SinFoto({ src, alt, fallback }) {
  const [imgSrc, setImgSrc] = useState(src);
  const handleError = () => {
    setImgSrc(fallback);
  };
  return <img src={imgSrc} alt={alt} onError={handleError} />;
}