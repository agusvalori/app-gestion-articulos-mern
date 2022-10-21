import { read, utils } from "xlsx";

const readExcel = (file, setFile) => {
  let rows = [];
  let reader = new FileReader();
  reader.readAsArrayBuffer(file);

  reader.onloadend = (event) => {
    var data = new Uint8Array(event.target.result);
    var workbook = read(data, { type: "array" });
    let hoja0 = workbook.Sheets[workbook.SheetNames[0]];
    setFile({
      rows: utils.sheet_to_row_object_array(hoja0),
      size: file.size,
      name: file.name,
    });
  };
};

export { readExcel };
