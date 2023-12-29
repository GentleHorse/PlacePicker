import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} id="modal" className="min-w-[30rem] p-0 z-[2] bg-[#d5c7bc] rounded-lg shadow-custom-black-2">{children}</dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
