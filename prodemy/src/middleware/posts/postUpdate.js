import { Modal, Input, Select } from 'antd';
import { AiOutlineUser, AiOutlineGoogle, AiOutlineDeploymentUnit, AiOutlineSafety, AiOutlineQq } from 'react-icons/ai';


const EditUserModal = ({ isModalOpen, closeModal, handleUpdate, editedRow, setEditedRow, options, optionInterest, optionRole }) => {
  const handleInputChange = (field, value) => {
    setEditedRow((prevRow) => ({ ...prevRow, [field]: value }));
  };

  return (
    <>
    <Modal
      open={isModalOpen}
      onCancel={closeModal}
      onOk={handleUpdate}
      destroyOnClose
      title="Update User"
      okText="Save"
    >
      {editedRow && (
        <div>
          <Input
            size="large"
            prefix={<AiOutlineUser />}
            value={editedRow.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <br />
          <br />
          <Input
            size="large"
            prefix={<AiOutlineQq />}
            value={editedRow.province}
            onChange={(e) => handleInputChange('province', e.target.value)}
          />
          <br />
          <br />
          <Input
            size="large"
            prefix={<AiOutlineDeploymentUnit />}
            value={editedRow.region}
            onChange={(e) => handleInputChange('region', e.target.value)}
          />
          <br />
          <br />
          <Input
            size="large"
            prefix={<AiOutlineDeploymentUnit />}
            value={editedRow.latitude}
            onChange={(e) => handleInputChange('latitude', e.target.value)}
          />
          <br />
          <br />
          <Input
            size="large"
            placeholder="About me"
            prefix={<AiOutlineGoogle />}
            value={editedRow.longtitude}
            onChange={(e) => handleInputChange('longtitude', e.target.value)}
          />
          <br />
          <br />
          <Input
            size="large"
            prefix={<AiOutlineGoogle />}
            value={editedRow.featured}
            onChange={(e) => handleInputChange('featured', e.target.value)}
          />
          <br />
          <br />
         
        </div>
      )}
    </Modal>
    </>
  );
};

export default EditUserModal;
