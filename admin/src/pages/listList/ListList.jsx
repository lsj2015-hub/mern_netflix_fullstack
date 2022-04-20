import './listList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ListContext } from '../../context/listContext/ListContext';
import { getLists, deleteList } from '../../context/listContext/apiCalls';

export default function ListList() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  // console.log('movies: ', movies);

  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    {
      field: 'title',
      headerName: 'Title',
      width: 250,
      editable: true,
    },
    {
      field: 'genre',
      headerName: 'Genre',
      width: 150,
      editable: true,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 150,
      editable: true,
    },
    {
      field: 'actions',
      headerName: 'Action',
      width: 150,
      editable: true,
      renderCell: (params) => {
        // console.log('params: ', params);
        return (
          <>
            <Link to={'/list/' + params.row._id} state={{ list: params.row }}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={lists}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r._id}
      />
    </div>
  );
}
