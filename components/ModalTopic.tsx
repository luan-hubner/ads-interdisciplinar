import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '1px',
    backgroundColor: 'var(--light-background-default)',
    borderColor: 'var(--contrast-color)',
    maxWidth: 500,
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.7)',
  },
}

interface ModalProps {
  isOpen: boolean
  handleOpen: () => void
}

export default function ModalTopic({ isOpen, handleOpen }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={handleOpen} style={customStyles} contentLabel="Example Modal">
      <div className="header">
        <h1>WEB DEVELOPMENT</h1>

        <h1 onClick={() => handleOpen()}>&#10006;</h1>
      </div>

      <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original
        form, accompanied by English versions from the 1914 translation by H. Rackham.
      </p>

      <button></button>
    </Modal>
  )
}
