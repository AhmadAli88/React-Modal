import { useState } from 'react';
import ModalComponent from './components/ModalComponent';
import './App.css';
import FormModal from './components/FormModal';
import DynamicContentModal from './components/DynamicContentModal';
import CustomStyledModal from './components/Customization Options';

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track modal visibility
  const [isOpenForm, setIsOpenForm] = useState(false);
  const[isStyledModalOpen, setIsStyledModalOpen] = useState(false);


  // Function to open the modal
  const openModal = () => setIsOpen(true);

  // Function to close the modal
  const closeModal = () => setIsOpen(false);

  // Function to open the modal
  const openFormModal = () => setIsOpenForm(true);

  // Function to close the modal
  const closeFormModal = () => setIsOpenForm(false);

 

  // Function to open the modal
  const openStyledModal = () => setIsStyledModalOpen(true);

  // Function to close the modal
  const closeStyledModal = () => setIsStyledModalOpen(false);
  return (
    <div>
      <div>
        <h1>React Modal Example</h1>
        <button onClick={openModal}>Open Modal</button>

        <ModalComponent isOpen={isOpen} closeModal={closeModal} />
      </div>
      <div>
        <h1>React Form Modal Example</h1>
        <button onClick={openFormModal}>Open Form Modal</button>

        {/* Call the ModalComponent and pass necessary props */}
        <FormModal isOpen={isOpenForm} closeModal={closeFormModal} />
      </div>
      <div>
        <DynamicContentModal />
      </div>

      <h1 style={{ textAlign: 'center' }}>React Modal Customization Example</h1>
      <div style={{ textAlign: 'center' }}>
        {/* Button to trigger the opening of the modal */}
        <button
          onClick={openStyledModal}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s',
          }}
        >
          Open Modal
        </button>
      </div>

      <div>
        <CustomStyledModal isStyledModalOpen={isStyledModalOpen} closeStyledModal={closeStyledModal} />
      </div>
    </div>
  );
};

export default App;
