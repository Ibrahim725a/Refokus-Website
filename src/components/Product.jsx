// import React from "react";
// import Button from "./Button";

// function Product({val}) {
//   return (
//     <div className="w-full py-20 h-[23rem] text-white">
//       <div className="max-w-screen-xl mx-auto flex items-center justify-between">
//         <h1 className="text-6xl capitalize font-semibold">{val.title}</h1>
//         <div className="dets  w-1/3">
//             <p className="mb-10">{val.descirption}</p>
//             <div className="flex items-center gap-10">
//             {val.live && <Button />}
//             {val.case && <Button title='Case Study' />}
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product;

import React from "react";
import Button from "./Button";

const Product = ({ val, mover, count }) => {
  return (
    <div className="w-full py-20 h-[23rem] text-white">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto flex justify-between items-center"
      >
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button title="Live Preview" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
