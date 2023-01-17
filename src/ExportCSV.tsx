import React from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { IIconProps, PrimaryButton } from '@fluentui/react';
import { DefaultButton, IconButton } from '@fluentui/react/lib/Button';
const ExcelDocument: IIconProps = { iconName: 'ExcelDocument' };
interface IExportCSVprops{
    csvData : any
    fileName : string
}
export const ExportCSV : React.FunctionComponent<IExportCSVprops> = ({csvData  , fileName }) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const exportToCSV = (csvData: unknown[], fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {type: fileType});
    FileSaver.saveAs(data, fileName + fileExtension);
    }
    return (
        <DefaultButton  
        onClick={(e) => exportToCSV(csvData,fileName)}
        style={{background:"white", color:"green", fontSize: "14px" , display : "flow-root" , border : "2px solid green" , width : "35px" , height : "35px"}}
        iconProps={ExcelDocument} aria-label="ExcelDocument"
        className='Excel'
        >Export</DefaultButton>
    )
}


