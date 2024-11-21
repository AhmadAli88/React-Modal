import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'react-modal';

// Make sure to bind the modal to your app element for accessibility purposes
Modal.setAppElement('#root');

const FormModal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted! Name: ${formData.name}, Email: ${formData.email}`);
    closeModal(); // Close the modal after submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='Form Modal'
      className='modal' // Optional class for custom styling
      overlayClassName='overlay' // Optional class for overlay styling
    >
      <h2>Form Modal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type='submit' className='success-class'>Submit</button>
      </form>
      <button onClick={closeModal} className='error-class'>Close Modal</button>
    </Modal>
  );
};
FormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default FormModal;
