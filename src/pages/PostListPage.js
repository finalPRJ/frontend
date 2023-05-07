import HeaderContainer from "../containers/common/HeaderContainer";
import ReactWordcloud from 'react-wordcloud';

const word = [
    {
      text: 'Test1',
      value: 64,
    },
    {
      text: 'Test2',
      value: 11,
    },
    {
      text: 'Test3',
      value: 100,
    },
    {
      text: 'Test4',
      value: 85,
    },
    {
        text: 'Test5',
        value: 44,
      },
      {
        text: 'Test6',
        value: 50,
      },
      {
        text: 'Test7',
        value: 90,
      },
      {
        text: 'Test8',
        value: 88,
      },
      {
        text: 'Test9',
        value: 90,
      },
      {
        text: 'Test4',
        value: 130,
      },
  ]
   
  function SimpleWordcloud() {
    return <ReactWordcloud words={words} /> // word 반환
  }

  const callbacks = {
    getWordColor: word => word.value > 50 ? "blue" : "red", // 단어 개체를 사용하여 단어 색상 설정
    onWordClick: console.log, // 클릭 시 단어 및 마우스 이벤트
    onWordMouseOver: console.log, // 마우스 아웃 시 단어 및 마우스 이벤트
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`, // 단어 설명 설정
  }
  const options = {
    rotations: 2, // 회전
    rotationAngles: [-90, 0], // 회전 각도
  };

  const size = [600, 400]; // 크기

  const words = [...word]
   
  function MyWordcloud() {
    return (
      <ReactWordcloud
        callbacks={callbacks}
        options={options}
        size={size}
        words={words}
      />
    );
  }
  
const PostListPage = () => {
    return (
        <div>
            <HeaderContainer/>
            {/* <SearchBox/> */}
            <MyWordcloud/>
        </div>
    )
}

export default PostListPage;