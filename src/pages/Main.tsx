import { useEffect, useState } from "react";
import type { Post } from "../type";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";


export default function Main() {
    const [data, setData] = useState<Post[]>([]);

     const columns: GridColDef[] = [
        {field: 'id', headerName: '게시판 번호', width: 200},
        {field: 'postName', headerName: '게시물 제목', width: 200},
        {field: 'name', headerName: '작성자', width: 200},
        {field: 'date', headerName: '날짜', width: 200},
        
     ]

     const loadPostData = () => {

     }
        
    useEffect(()=> {
        loadPostData();
    }, []) ;

    const topButtonStyle = {
        color: 'white', mx: 4
    };

    return(
        <>
            <DataGrid
                rows={data} //한 행마다 뿌려줄 배열 
                columns={columns}
                getRowId={row => row.id} //열 하나 가지고 와서 그 열의 아이디 반환
                disableRowSelectionOnClick={true}
            />
       
    
        </>
    )
     
}