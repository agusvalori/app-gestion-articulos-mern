import { read, utils } from "xlsx";

const readExcel = (file) => {
  let rows=[];
  let reader = new FileReader();
  reader.readAsArrayBuffer(file);

  let result = (reader.onloadend = (event) => {    
    var data = new Uint8Array(event.target.result);
    var workbook = read(data, { type: "array" });
    let hoja0 = workbook.Sheets[workbook.SheetNames[0]];
    rows.push(utils.sheet_to_row_object_array(hoja0));
  });  

  return rows;
};

export { readExcel };
