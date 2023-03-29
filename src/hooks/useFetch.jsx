import { useState, useEffect, useCallback } from "react";

export const useFetch = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const peticion = useCallback(async () => {
    const key = "client_id=TUfgSlgPvaQRLjQMu4DEpUVB-2_lsvaoirHa6dTqFbg";

    let path = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
      path = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&per_page=50&${key}`;
    }
    setLoading(true);

    const res = await fetch(path);

    const data = await res.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
    setLoading(false);
  }, [input]);

  useEffect(() => {
    setTimeout(() => {
      peticion();
    }, 1500);
  }, [input]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);
  };

  return [images, loading, handleSubmit];
};
