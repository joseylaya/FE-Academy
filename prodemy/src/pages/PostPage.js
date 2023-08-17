import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Typography, Stack, Card,  IconButton, Popover, MenuItem, Chip } from '@mui/material';
import {Input, notification } from 'antd';
import { AiOutlineSearch} from "react-icons/ai";

import "../styles/datatable.css"

import Iconify from '../components/iconify';

import UpdateUser from '../middleware/posts/postUpdate';
import AddUser , { LoaderTable } from '../middleware/posts/postAdd';


export default function DataTable() {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [menuRowId, setMenuRowId] = useState('');
  const [open, setOpen] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editedRow, setEditedRow] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/fetchPosts');
      const data = await response.json();
      const transformedData = data.map((row, index) => ({ ...row, id : index + 1}));
        setRows(transformedData)
        setFilteredRows(transformedData);
        setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };


  const handleSearch = (event) => {
    const keyword = event.target.value;
    const filteredData = rows.filter(
      (row) =>
        row.name.toLowerCase().includes(keyword.toLowerCase()) ||
        row.province.toLowerCase().includes(keyword.toLowerCase()) ||
        row.region.toLowerCase().includes(keyword.toLowerCase())||
        row.created_at.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredRows(filteredData);

    const filterName = event.target.value;
    setFilterName(filterName);
  };

  const handleOpenMenu = (event, id) => {
    setOpen(event.currentTarget);
    setMenuRowId(id);
    const rowToEdit = filteredRows.find((row) => row.Id === id);
    setEditedRow(rowToEdit);
    // setIsEditModalOpen(true);
  };
  const handleOpenModal = () => {
    setIsEditModalOpen(true);
    setOpen(null);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleUpdate = async () => {
    try {
      // Make a PUT request to your backend API with the updated row data
      await fetch(`http://localhost:3001/updateUser/${editedRow.Id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedRow),
      });

      // Update the row data in the filteredRows state
      const updatedRows = filteredRows.map((row) =>
        row.Id === editedRow.Id ? editedRow : row
      );
      
      setFilteredRows(updatedRows);
      successInfo()
      // Close the edit modal
      handleCloseEditModal();
      
    } catch (error) {
      console.error(error);
    }
  };


  const successInfo = () => {
    notification.success({
      message: 'Updated succesfully',
      description: 'The action cannot be undo.',
      style: {
        marginTop: 90, // Set the z-index to make the notification appear upfront
      },
    });
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const deleteRow = async (id) => {
    // console.log(id)
    try {
      // Make a DELETE request to your backend API with the ID of the row to be deleted
      await fetch(`http://localhost:3001/deleteUser/${id}`, {
        method: 'DELETE',
      });
      // Filter out the row with the given ID
      const updatedRows = filteredRows.filter((row) => row.Id !== id);

      setFilteredRows(updatedRows);
      handleCloseMenu()
    } catch (error) {
      console.error(error);
    }
  };

  const options = [
    { value: 1, label: 'Active' },
    { value: 0, label: 'Inactive' },
  ];

  const optionRole = [
    { value: 1, label: 'Administrator' },
    { value: 0, label: 'Student' },
  ];

  const optionInterest = [
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Sales', label: 'Sales' },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const columns = [
    
    {field: 'id', headerName: 'ID', width: 20},
    {
      field: 'content',
      headerName: 'Content',
      width: 150,
      renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <Avatar>{params.row.name.charAt(0)}</Avatar> */}
          <span style={{ marginLeft: '8px' ,fontWeight: '600'}}>{params.row.content}</span>
        </div>
      ),
    },
    { field: 'town_id', headerName: 'Parent Town', width: 150 },
    { field: 'user_ref', headerName: 'Author', width: 150 },
    { field: 'image_urls', headerName: 'Images', width: 250 },
    { field: 'user_id', headerName: 'User Id', width: 150 },
    {
        field: 'created_at',
        headerName: 'Date Created',
        width: 130,
        renderCell: (params) => (
          <div>
            {formatDate(params.row.created_at)}
          </div>
        ),
      },
    {
      field: 'actions',
      headerName: '',
      width: 30,
      renderCell: (params) => (
        <>
      <IconButton size="large" color="inherit"  onClick={(event) => handleOpenMenu(event, params.row.Id)}>
        <Iconify icon={'eva:more-vertical-fill'} />
      </IconButton>
        </>
        ),
    },
  ];
  

  return (
    <>
     <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
          User
        </Typography>
        <AddUser rows={filteredRows} setRows={setFilteredRows} />
      </Stack>
      <Card>
        <div style={{ padding: 30 }}>
          <Input
            style={{ width: '20%' }}
            size="large"
            placeholder="Search User..."
            prefix={<AiOutlineSearch />}
            onChange={handleSearch}
          />
        </div>
        {isLoading ? (
            <LoaderTable />
        ) : filteredRows.length === 0 ? (
          <Typography variant="body2" align="center">
            <h1 style={{ paddingBottom: 50 }}>Not found</h1>
            <h4 style={{ paddingBottom: 100, fontWeight: 'normal' }}>
              No results found for&nbsp;
              <strong>&quot;{filterName}&quot;</strong>.
              <br /> Try checking for typos or using complete words.
            </h4>
          </Typography>
        ) : (
          <DataGrid
            rows={filteredRows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        )}
      </Card>
          {/* Edit Modal */}
      <UpdateUser
          isModalOpen={isEditModalOpen}
          closeModal={handleCloseEditModal}
          handleUpdate={handleUpdate}
          editedRow={editedRow}
          setEditedRow={setEditedRow}
          options={options}
          optionInterest={optionInterest}
          optionRole={optionRole}
        />
    </Container>

    <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem onClick={() => handleOpenModal()}>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem sx={{ color: 'error.main' }} onClick={() => deleteRow(menuRowId)}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

