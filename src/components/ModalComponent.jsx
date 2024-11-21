
import PropTypes from 'prop-types';
import Modal from 'react-modal';

// Make sure to bind the modal to your app element for accessibility purposes
Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, closeModal }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={closeModal} 
      contentLabel="Example Modal"
      className="modal"  // Optional class for custom styling
      overlayClassName="overlay"  // Optional class for overlay styling
    >
      <h2>Modal Heading</h2>
      <p>This is a simple modal in React!</p>
      <button onClick={closeModal}  className='error-class'>Close Modal</button>
    </Modal>
  );
};

ModalComponent.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
}
export default ModalComponent;
