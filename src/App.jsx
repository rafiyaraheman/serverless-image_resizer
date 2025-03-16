// import Upload from "./Upload";

// export default function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <Upload />
//     </div>
//   );
// }
import React from "react";
import Upload from "./Upload";
import "./index.css"; // Import your custom CSS

export default function App() {
  return (
    <div>
      <nav>
        <img src="/1.png" alt="Logo" />
        <span>IMAGE RESIZER</span>
      </nav>
      <Upload />
    </div>
  );
}




