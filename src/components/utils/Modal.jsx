import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      id="modal"
      className="min-w-[30rem] p-0 z-[2] bg-[#ffffff30] backdrop-blur-md rounded-lg shadow-custom-black-2"
      onClose={onClose}
    >
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
