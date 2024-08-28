import Modal from "react-modal";
import s from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: { backgroundColor: "rgba(0,0,0, 0.7) " },
};

Modal.setAppElement("#root");

export default function ImageModal({ modalIsOpen, closeModal, src, alt }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      className={s.ImageModal}
    >
      <img src={src} alt={alt} />
    </Modal>
  );
}
