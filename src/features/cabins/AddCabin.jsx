import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

const AddCabin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModal(!isOpenModal)}>
        {isOpenModal ? "Close the form" : "Add new cabin"}
      </Button>
      {isOpenModal && (
        <Modal onCloseModal={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default AddCabin;
