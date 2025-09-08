import { useEffect, useState } from "react";
import type { Post } from "../type";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { selectPost } from "../api/postApi";
import { useNavigate } from "react-router-dom";

export default function FreeBoard() {
  const [data, setData] = useState<Post[]>([]);
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    { field: "id", headerName: "게시판 번호", width: 200 },
    { field: "postName", headerName: "게시물 제목", width: 200 },
    { field: "nickname", headerName: "작성자", width: 200 },
    { field: "date", headerName: "날짜", width: 200 },
    // {field: 'view', headerName: '조회수', width: 200},
  ];

  const loadPostData = () => {
    selectPost()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadPostData();
  }, []);

  const handleRowClick = (params: any) => {
    const postId = params.row.id;
    navigate(`/post/${postId}`);
  };

  return (
    <>
      <DataGrid
        rows={data} //한 행마다 뿌려줄 배열
        columns={columns}
        getRowId={(row) => row.id} //열 하나 가지고 와서 그 열의 아이디 반환
        disableRowSelectionOnClick={true}
        showToolbar
        onRowClick={handleRowClick}
      />
    </>
  );
}
