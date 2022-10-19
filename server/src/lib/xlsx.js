import { read, utils } from "xlsx";

const readExcel = (file) => {
  console.log("ReadExcel");
  var result = [];
  let reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = (event) => {
    var data = new Uint8Array(event.target.result);
    var workbook = read(data, { type: "array" });
    workbook.SheetNames.forEach((sheetName) => {
      var XL_row_object = utils.sheet_to_row_object_array(
        workbook.Sheets[sheetName]
      );      
      result.push(XL_row_object);
    });
  };
  return result;
};

export { readExcel };
