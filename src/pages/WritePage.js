import Responsive from '../components/common/Responsive';
import HeaderContainer from '../containers/common/HeaderContainer';
import EditorContainer from '../containers/write/EditorContainer';
import ModalContainer from '../containers/write/ModalContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

const WritePage = () => {
  return (
    <div>
      <HeaderContainer/>
      <Responsive>
        <EditorContainer/>
        <ModalContainer />
        <WriteActionButtonsContainer/>
      </Responsive>
    </div>
  );
};

export default WritePage;