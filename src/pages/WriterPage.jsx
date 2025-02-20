/* eslint-disable no-unused-vars */
import React from "react";

const WritePage = () => {
  // const [referenceURLs, setReferenceURLs] = useState([""]);
  
  // const addUrlInput = () => {
  //   setReferenceURLs([...referenceURLs, ""]);
  // };
  
  // const handleInputChange = (index, value) => {
  //   const updatedURLs = [...referenceURLs];
  //   updatedURLs[index] = value;
  //   setReferenceURLs(updatedURLs);
  // };
  
  return (
    <div className="w-full h-screen">

      <h1>Become a writer</h1>
    </div>
  );
    // <div className="mainDiv mt-32 h-screen w-auto flex justify-start ml-10 items-center">
    //   <form
    //     action="/write"
    //     method="post"
    //     className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    //   >
    //     <div className="mb-4">
    //       <label
    //         htmlFor="penname"
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //       >
    //         Pen Name:
    //       </label>
    //       <input
    //         type="text"
    //         id="penname"
    //         name="penname"
    //         className="shadow border border-gray-500 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //       />
    //     </div>

    //     <div className="mb-4">
    //       <label
    //         htmlFor="language"
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //       >
    //         Language Options:
    //       </label>
    //       <div className="grid grid-cols-3">
    //         {["Urdu", "Punjabi", "Saraiki", "Sindhi", "Pushto", "Shina", "Balti"].map(
    //           (lang) => (
    //             <div className="flex" key={lang}>
    //               <input
    //                 type="checkbox"
    //                 id={lang}
    //                 name="language"
    //                 value={lang.toLowerCase()}
    //                 className="mr-2"
    //               />
    //               <label htmlFor={lang} className="text-sm">
    //                 {lang}
    //               </label>
    //             </div>
    //           )
    //         )}
    //       </div>
    //     </div>

    //     <div className="mb-4">
    //       <label
    //         htmlFor="writing"
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //       >
    //         Writing Options:
    //       </label>
    //       <div className="grid grid-cols-3">
    //         {[
    //           "Novel",
    //           "Horror Story",
    //           "Science Fiction",
    //           "Poetry",
    //           "Documentary",
    //           "Historical Fiction",
    //           "Non-Fiction",
    //         ].map((option) => (
    //           <div className="flex" key={option}>
    //             <input
    //               type="checkbox"
    //               id={option}
    //               name="writing"
    //               value={option.toLowerCase().replace(/\s+/g, "-")}
    //               className="mr-2"
    //             />
    //             <label htmlFor={option} className="text-sm">
    //               {option}
    //             </label>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="mb-4">
    //       <label
    //         htmlFor="phone"
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //       >
    //         Phone Number:
    //       </label>
    //       <input
    //         type="number"
    //         id="phone"
    //         name="phone"
    //         pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
    //         className="shadow border border-gray-500 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //       />
    //     </div>

    //     <div className="mb-4">
    //       <label
    //         htmlFor="description"
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //       >
    //         Description:
    //       </label>
    //       <textarea
    //         id="description"
    //         name="description"
    //         rows="4"
    //         className="shadow-xl border border-gray-500 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //       />
    //     </div>

    //     <div className="mb-4">
    //       <label
    //         htmlFor="reference"
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //       >
    //         Reference URL:
    //       </label>
    //       <div id="urlInputs" className="flex flex-col items-start">
    //         {referenceURLs.map((url, index) => (
    //           <input
    //             key={index}
    //             type="url"
    //             name="reference"
    //             value={url}
    //             onChange={(e) => handleInputChange(index, e.target.value)}
    //             className="referenceInput shadow border border-gray-500 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
    //           />
    //         ))}
    //       </div>
    //       <button
    //         type="button"
    //         onClick={addUrlInput}
    //         className="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-sm focus:outline-none focus:shadow-outline"
    //       >
    //         +
    //       </button>
    //     </div>

    //     <div className="flex items-center justify-between">
    //       <button
    //         type="submit"
    //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //       >
    //         Save
    //       </button>
    //     </div>
    //   </form>
    // </div>
};

export default WritePage;
