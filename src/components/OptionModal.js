import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <div>
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      onRequestClose={props.resetSelectedOption}
    >
      <h3>Selected Option</h3>
      <p>{props.selectedOption}</p>
      <button onClick={props.resetSelectedOption}>Okay</button>
    </Modal>
  </div>
);

export default OptionModal;
