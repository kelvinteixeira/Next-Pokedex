import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const PokeModal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className=" fixed inset-0 flex items-center justify-center z-50 bg-gray-300 bg-opacity-60 ">
      <div className="modal-overlay " onClick={onClose} />
      <div>
        <div className="mobile-pokemodal-content  modal-content glass-effect rounded-3xl p-4 shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
};
