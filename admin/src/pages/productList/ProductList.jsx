import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls';

export default function ProductList() {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  // console.log('movies: ', movies);

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: 'genre',
      headerName: 'Genre',
      width: 120,
      editable: true,
    },
    {
      field: 'year',
      headerName: 'Genre',
      width: 120,
      editable: true,
    },
    {
      field: 'limit',
      headerName: 'Genre',
      width: 120,
      editable: true,
    },
    {
      field: 'isSeries',
      headerName: 'Genre',
      width: 120,
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
            <Link
              to={'/product/' + params.row._id}
              state={{ movie: params.row }}
            >
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
        rows={movies}
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
