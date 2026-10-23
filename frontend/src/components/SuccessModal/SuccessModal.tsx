import { Button, Modal } from "react-bootstrap";
import "./SuccessModal.css";

interface SuccessModalProps {
  show: boolean;
  onClose: () => void;
}

export function SuccessModal({
  show,
  onClose,
}: SuccessModalProps) {
  return (
    <Modal
      show={show}
      centered
      backdrop="static"
      keyboard={false}
      onHide={onClose}
    >
      <Modal.Body className="text-center px-5 py-4">
        <div className="success-animation">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark-circle-bg"
              cx="26"
              cy="26"
              r="25"
            />

            <circle
              className="checkmark-circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />

            <path
              className="checkmark-check"
              fill="none"
              d="M14 27l7 7 17-17"
            />
          </svg>
          <span className="particle p1"></span>
        <span className="particle p2"></span>
        <span className="particle p3"></span>
        <span className="particle p4"></span>
        <span className="particle p5"></span>
        <span className="particle p6"></span>
        <span className="particle p7"></span>
        <span className="particle p8"></span>
        </div>

        <h2 className="fw-bold mt-4 mb-2">
          Cadastro realizado!
        </h2>

        <p className="text-muted mb-4">
          Sua conta foi criada com sucesso.
        </p>

        <Button
          variant="primary"
          className="success-btn px-5"
          onClick={onClose}
        >
          OK
        </Button>
      </Modal.Body>
    </Modal>
  );
}