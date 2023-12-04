import React from 'react';
import { useModal } from '../context/Modal';

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  buttonColor, // optional: color of the button that opens the modal
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (typeof onButtonClick === 'function') onButtonClick();
    if (typeof onModalClose === 'function') setOnModalClose(onModalClose);
    setModalContent(modalComponent);
  };

  return (
    <button onClick={onClick} className={`bg-${buttonColor} text-white px-2 py-1 rounded-sm m-1 hover:bg-${buttonColor}Light`}>
      {buttonText}
    </button>
  );
}

export default OpenModalButton;
