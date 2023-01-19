import React from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { IIconProps, PrimaryButton } from '@fluentui/react';
import { ActionButton, DefaultButton, IconButton } from '@fluentui/react/lib/Button';
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
        <ActionButton  
        onClick={(e) => exportToCSV(csvData,fileName)}
        style={{background:"white",fontSize: "17px" , marginLeft : "10px"}}
        iconProps={ExcelDocument} aria-label="ExcelDocument"
        className='Excel'
        text='Export'
        styles={{
            icon: {color: '#217346', fontSize: 25},
        }}
        ></ActionButton>
    )
}


