import { useState } from 'react';
import Modal from 'react-modal';

// Bind the modal to your app element
Modal.setAppElement('#root');

const DynamicContentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('Hello, this is dynamic content!');

  const updateContent = () => {
    setContent('New dynamic content after clicking the button!');
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} contentLabel="Dynamic Content Modal">
        <h2>Dynamic Content</h2>
        <p>{content}</p>
        <button onClick={updateContent}>Update Content</button>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default DynamicContentModal;
