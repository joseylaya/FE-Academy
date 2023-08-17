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
            placeholder="full name"
            prefix={<AiOutlineUser />}
            value={editedRow.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <br />
          <br />
          <Input
            size="large"
            placeholder="email" 
            prefix={<AiOutlineQq />}
            value={editedRow.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <br />
          <br />
          <Input
            size="large"
            placeholder="profile image url"
            prefix={<AiOutlineDeploymentUnit />}
            value={editedRow.profile_image_url}
            onChange={(e) => handleInputChange('profile_image_url', e.target.value)}
          />
          <br />
          <br />
          <Input
            size="large"
            placeholder="cover image url"
            prefix={<AiOutlineDeploymentUnit />}
            value={editedRow.cover_photo_url}
            onChange={(e) => handleInputChange('cover_photo_url', e.target.value)}
          />
          <br />
          <br />
          <Input
            size="large"
            placeholder="About me"
            prefix={<AiOutlineGoogle />}
            value={editedRow.about_me}
            onChange={(e) => handleInputChange('about_me', e.target.value)}
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
