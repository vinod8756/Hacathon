import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuizButton = () => {
  const [showModal, setShowModal] = useState(false);

  // Toggle modal visibility
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* Button to open modal */}
      <Button variant="primary" onClick={handleShow} className="mx-2">
        Quiz
      </Button>

      {/* Modal with iframe */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/prBraYeShh6VUxu5zp73W"
            width="100%"
            height="500"
            style={{ border: 'none' }}
            title="Quiz Chatbot"
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default QuizButton;
