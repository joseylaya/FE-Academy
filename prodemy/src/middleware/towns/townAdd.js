import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Input, Select, notification } from 'antd';
import { Button, TableContainer, Table, TableBody, TableRow, TableCell, Box, Skeleton} from '@mui/material';
import { AiOutlineUser, AiOutlineGoogle, AiOutlineDeploymentUnit, AiOutlineSafety, AiOutlineQq } from "react-icons/ai";
import Iconify from '../../components/iconify';
 
const AddUser = ({ rows, setRows }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [codename, setCodename] = useState('');
  const [teamname, setTeamname] = useState('');
  const [interest, setInterest] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
  
  const submitNewUser = () => {
    axios
      .post('http://localhost:3001/insert', {
        Name: name,
        Usercodename: codename,
        Userteamname: teamname,
        Userinterest: interest,
        Useremail: email,
        Userpassword: password,
        Userstatus: status,
        Userrole: role,
      })
      .then((response) => {
        console.log(response);
        const newUser = {
          id: response.data.insertId,
          name,
          codename,
          teamname,
          interest,
          email,
          password,
          status,
          role,
        };

        setRows([...rows, newUser]);
        setIsModalOpen(false);

        // Display success notification
        notification.success({
          message: 'User Added',
          description: 'The user has been successfully added.',
        });
      })


      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  };


  return (
    <div>
      <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={showModal}>
        New User
      </Button>

      <Modal title="Create User" visible={isModalOpen} onOk={submitNewUser} onCancel={handleCancel}>
        <Input size="large" placeholder="Full name" prefix={<AiOutlineUser />} onChange={(event) => setName(event.target.value)} />
        <br /><br />
        <Input size="large" placeholder="Code name" prefix={<AiOutlineQq />} onChange={(event) => setCodename(event.target.value)} />
        <br /><br />
        <Input size="large" placeholder="Team" prefix={<AiOutlineDeploymentUnit />} onChange={(event) => setTeamname(event.target.value)} />
        <br /><br />
        <Input size="large" placeholder="Email" prefix={<AiOutlineGoogle />} onChange={(event) => setEmail(event.target.value)} />
        <br /><br />
        <Input.Password
          prefix={<AiOutlineSafety />}
          placeholder="Input password"
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br /><br />
        <Select placeholder="Select Interest" prefix={<AiOutlineSafety />} options={optionInterest} value={interest} onChange={setInterest} />
        {' '}
        <Select placeholder="Select Status" prefix={<AiOutlineSafety />} options={options} value={status} onChange={setStatus} />
        {' '}
        <Select placeholder="Select Role" prefix={<AiOutlineSafety />} options={optionRole} value={role} onChange={setRole} />
      </Modal>
    </div>
  );
};

export const LoaderTable = () => (
  <TableContainer>
    <Table>
      <TableBody>
        {[1, 2, 3, 4, 5].map((rowIndex) => (
          <TableRow key={rowIndex}>
            {[1, 2, 3, 4, 5].map((colIndex) => (
              <TableCell key={colIndex}>
                <Box style={{ marginBottom: '3px', padding: '20px' }}>
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height={15}
                    sx={{
                      backgroundColor: ['#A9A9A9', '#F5F5F5'],
                      borderRadius: '30px',
                    }}
                  />
                </Box>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default AddUser;
