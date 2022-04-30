// import React from "react";
// import PlacesAutocomplete from "react-places-autocomplete";
// import scriptLoader from "react-async-script-loader";

// function AddressAutoComplete({ isScriptLoaded, isScriptLoadSucceed }) {
//   const [address, setAddress] = React.useState("");

//   const handleChange = (value) => {
//     setAddress(value);
//   };

//   const handleSelect = (value) => {
//     setAddress(value);
//   };

//   if (isScriptLoaded && isScriptLoadSucceed) {
//     return (
//       <div>
//         ß
//         <PlacesAutocomplete
//           value={address}
//           onChange={handleChange}
//           onSelect={handleSelect}
//         >
//           {({
//             getInputProps,
//             suggestions,
//             getSuggestionItemProps,
//             loading,
//           }) => (
//             <div>
//               <input
//                 {...getInputProps({
//                   placeholder: "*回忆发生的具体地点",
//                 })}
//               />
//               <div>
//                 {loading && <div>Loading...</div>}
//                 {suggestions.map((suggestion) => {
//                   const style = suggestion.active
//                     ? { backgroundColor: "#a83232", cursor: "pointer" }
//                     : { backgroundColor: "#ffffff", cursor: "pointer" };

//                   return (
//                     <div {...getSuggestionItemProps(suggestion, { style })}>
//                       {suggestion.description}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </PlacesAutocomplete>
//       </div>
//     );
//   } else {
//     return <div></div>;
//   }
// }

// export default AddressAutoComplete;
