import { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <div className="flex justify-center items-center">
      {props.isOpen && (
        <div className="modal-overlay">
          <div  className="modal-box max-w-screen-sm">
            {props.children}
          </div>
        </div>
      )}
    </div>
  );
}