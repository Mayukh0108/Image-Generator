import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
        setIsLoading(false);
        return;
      }
    }
    setIsLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="relative">
        <img
          src={image}
          alt="Generated"
          className="max-w-sm rounded-lg shadow-lg border border-gray-200"
        />
        {isLoading && (
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 animate-progress" />
          </div>
        )}
      </div>
      {isLoading && (
        <p className="mt-4 text-gray-600 font-medium">Generating your image...</p>
      )}

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-white shadow-sm border border-gray-200 text-sm p-1 mt-10 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Enter your idea"
            className="flex-1 bg-transparent outline-none ml-6 placeholder-gray-400 text-gray-700"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 sm:px-16 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-4 flex-wrap justify-center text-sm mt-10">
          <button
            onClick={() => setIsImageLoaded(false)}
            className="bg-transparent border border-gray-300 text-gray-700 px-8 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-all duration-300"
          >
            Generate Another
          </button>
          <a
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-3 rounded-full cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            download
            href={image}
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;