import Modal from "react-modal";
import "./Modal.css";

const ModalR = ({ isOpen, closeModal, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            overlayClassName={"backdrop"}
            className={"modalContent"}
            closeTimeoutMS={700}
            onRequestClose={closeModal}
            ariaHideApp={false}
        >
            {children}
        </Modal>
    );
};

export default ModalR;
