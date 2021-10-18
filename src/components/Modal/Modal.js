import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ContactForm from '../ContactForm';
import s from './Modal.module.css';
const MyVerticallyCenteredModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={s.header} closeButton>
        <Modal.Title className={s.title}>Add new contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm {...props} />
      </Modal.Body>
    </Modal>
  );
};
const ModalSAddContact = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="success" onClick={() => setModalShow(true)}>
        ADD CONTACT
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
export default ModalSAddContact;
