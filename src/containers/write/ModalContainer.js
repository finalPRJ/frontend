import { useState } from "react"
import Modal from "../../components/common/Modal";
import { useDispatch } from "react-redux";
import { checkOption } from "../../modules/write";

const ModalContainer = () => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const handleOptionCheck = (category, option) => {
        dispatch(checkOption({category,option}));
    }

    return (
        <div>
            <button onClick={openModal}>추가 옵션</button>
            
            <Modal 
                isOpen={modalOpen} 
                onClose={closeModal}
                handleOptionCheck = {handleOptionCheck}
            />
        </div>
    )
}

export default ModalContainer;