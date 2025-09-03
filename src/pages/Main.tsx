
import { useState } from "react";
import type { Post } from "../type";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";

export default function Main() {
    const [data, setData] = useState<Post[]>([]);

    const columns: GridColDef[] = [
        {field: 'name', headerName: '이름'}
    ]
        

    return(
        <>
            <DataGrid 
                rows={data}
                columns={columns}
                showToolbar
            />
        
        </>
    )
     
}