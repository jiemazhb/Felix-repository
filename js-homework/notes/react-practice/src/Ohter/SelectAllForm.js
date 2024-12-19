import React, { useState } from "react";

export default function SelectAllForm() {

  const [selectedItems, setSelectedItems] = useState({
    all: false,
    item1: false,
    item2: false,
    item3: false,
  });


  const handleLinkClick = (e, key) => {
    e.preventDefault(); 
    toggleCheckbox(key);
  };


  const toggleCheckbox = (key) => {      

    setSelectedItems((prev) => {
      const newState = { ...prev, [key]: !prev[key] };
      
      if (key === "all") {    
        const allSelected = !prev.all;
        return {
          all: allSelected,
          item1: allSelected,
          item2: allSelected,
          item3: allSelected,
        };
      } else {
        const allChecked = newState.item1 && newState.item2 && newState.item3;

        newState.all = allChecked;

        return newState;
      }
    });

  };

  return (
    <div>
      
      <ul style={{ listStyle: "none"}}>

        <li>
          <input type="checkbox" checked={selectedItems.all} onChange={() => toggleCheckbox("all")}/>
          <a href="#" onClick={(e) => handleLinkClick(e, "all")}>
            Select All
          </a>
        </li>


        <li>
          <input type="checkbox" checked={selectedItems.item1} onChange={() => toggleCheckbox("item1")}/>
          <a href="#" onClick={(e) => handleLinkClick(e, "item1")}>
            item1
          </a>
        </li>

        <li>
          <input type="checkbox" checked={selectedItems.item2} onChange={() => toggleCheckbox("item2")}/>
          <a href="#" onClick={(e) => handleLinkClick(e, "item2")}>
            item2
          </a>
        </li>

        <li>
          <input type="checkbox" checked={selectedItems.item3} onChange={() => toggleCheckbox("item3")}/>
          <a href="#" onClick={(e) => handleLinkClick(e, "item3")}>
            item3
          </a>
        </li>
      </ul>
    </div>
  );
}



// import { Checkbox } from "@mui/material";
// import React, { useState } from "react";

// export default function SelectAllForm() {
//   const [selectedItems, setSelectedItems] = useState({
//     all: false,
//     item1: false,
//     item2: false,
//     item3: false,
//   });

//   // 处理全选/取消全选
//   const handleSelectAll = () => {
//     const newState = !selectedItems.all;
//     setSelectedItems({
//       all: newState,
//       item1: newState,
//       item2: newState,
//       item3: newState,
//     });
//   };

//   // 处理单个复选框的变化
//   const handleCheckboxChange = (key) => {
//     setSelectedItems((prev) => {
//       const newState = { ...prev, [key]: !prev[key] };

//       // 检查所有子项是否都被选中
//       const allChecked =
//         newState.item1 && newState.item2 && newState.item3;

//       // 如果全部选中，则 Select All 也选中，否则取消 Select All
//       newState.all = allChecked;

//       return newState;
//     });
//   };

//   return (
//     <div>
//       <h1>All the selected Items</h1>
//       <ul style={{ listStyle: "none" }}>

//         <li>
//           <Checkbox checked={selectedItems.all} onChange={handleSelectAll} />
//           <span style={{ cursor: "pointer" }} onClick={handleSelectAll}>
//             Select All
//           </span>
//         </li>


//         <li>
//           <Checkbox checked={selectedItems.item1} onChange={() => handleCheckboxChange("item1")}/>
//           <span style={{ cursor: "pointer" }} onClick={() => handleCheckboxChange("item1")} >
//             item1
//           </span>
//         </li>

//         <li>
//           <Checkbox
//             checked={selectedItems.item2}
//             onChange={() => handleCheckboxChange("item2")}
//           />
//           <span
//             style={{ cursor: "pointer" }}
//             onClick={() => handleCheckboxChange("item2")}
//           >
//             item2
//           </span>
//         </li>
//         <li>
//           <Checkbox
//             checked={selectedItems.item3}
//             onChange={() => handleCheckboxChange("item3")}
//           />
//           <span
//             style={{ cursor: "pointer" }}
//             onClick={() => handleCheckboxChange("item3")}
//           >
//             item3
//           </span>
//         </li>
//       </ul>
//     </div>
//   );
// }
