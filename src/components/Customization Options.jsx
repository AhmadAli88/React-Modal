import PropTypes from 'prop-types';
import Modal from 'react-modal';

// Make sure to bind the modal to your app element for accessibility purposes
Modal.setAppElement('#root');

const CustomStyledModal = ({ isStyledModalOpen, closeStyledModal }) => {
  return (
    <Modal
      isOpen={isStyledModalOpen} // Corrected prop name
      //   isStyledModalOpen={isStyledModalOpen}   // React Modal uses the isOpen prop to determine whether the modal should be open or closed. Need to update in child component
      onRequestClose={closeStyledModal}
      style={{
        content: {
          backgroundColor: '#f4f4f4', // Light gray background for the modal
          padding: '40px', // More padding around the modal content
          borderRadius: '8px', // Rounded corners
          width: '400px', // Set fixed width for the modal
          height: 'auto', // Height adjusts based on content
          margin: 'auto', // Center the modal horizontally and vertically
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow for the modal
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay behind the modal
          zIndex: 10, // Ensure the overlay is on top of other content
        },
      }}
    >
      <h2 style={{ color: '#333', fontSize: '24px', textAlign: 'center' }}>
        Styled Modal
      </h2>
      <p style={{ fontSize: '16px', color: '#555', textAlign: 'center' }}>
        This is a modal with customized styles. You can further customize its
        content, buttons, and layout.
      </p>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={closeStyledModal}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff', // Blue background for the button
            color: '#fff', // White text color
            border: 'none',
            borderRadius: '5px', // Rounded corners for the button
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s', // Smooth transition for background color
          }}
        >
          Close Modal
        </button>
      </div>
    </Modal>
  );
};
CustomStyledModal.propTypes = {
  isStyledModalOpen: PropTypes.bool.isRequired,
  closeStyledModal: PropTypes.func.isRequired,
};

export default CustomStyledModal;
