import styled from "styled-components";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Search from "../../lib/image/car_search.jpg";
import Recommend from "../../lib/image/car_recommend.jpg";
import Recall from "../../lib/image/car_recall.jpg";
import Info from "../../lib/image/car_info.jpg";
import Community from "../../lib/image/car_community.jpg";

// 실행 안될 시 npm install react-responsive-carousel 

const View = styled.div`
    width: 1300px;
    height: 590px;
    margin: 30px auto;
    overflow: hidden;
    .div {
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        position: relative;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .div2 {
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        position: relative;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background: #01D9B4;
    }
    .div3 {
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        position: relative;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background: #C8E8F5;
    }
    .carousel .slide img {
        object-fit: contain;
        width: 890px;
        height: 550px;
        margin: 0;
        margin-left: 400px;
        cursor: pointer;
    }
    .carousel .control-dots .dot {
        background-color: gray;
    }
    .carousel .control-dots .dot.selected {
        background-color: black;
    }
    .carousel .carousel-status {  // 1 of 5 <p> 태그 안보이게 하기
        display : none;
    }
    .carousel .control-arrow.control-prev {
        display : none;
    }
    .carousel .control-arrow.control-next {
        display : none;
    }
`

const Text1 = styled.div`
    user-select: none;
    position: absolute;
    top: 20%;
    width: 300px;
    transform: translateY(-50%);
    left: 89px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: #004D40;
    font-weight: bold;
    font-size: 30px;
`
const Text2 = styled.div`
    user-select: none;
    position: absolute;
    top: 20%;
    width: 330px;
    transform: translateY(-50%);
    left: 74px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: black;
    font-weight: bold;
    font-size: 30px;
`
const Text3 = styled.div`
    user-select: none;
    position: absolute;
    top: 20%;
    width: 320px;
    transform: translateY(-50%);
    left: 80px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: black;
    font-weight: bold;
    font-size: 30px;
`
const Text4 = styled.div`
    user-select: none;
    position: absolute;
    top: 20%;
    width: 300px;
    transform: translateY(-50%);
    left: 90px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: black;
    font-weight: bold;
    font-size: 30px;
`
const Text5 = styled.div`
    position: absolute;
    top: 20%;
    width: 400px;
    transform: translateY(-50%);
    left: 42px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: black;
    font-weight: bold;
    font-size: 30px;
`
const Button = styled.div`
    position: absolute;
    top: 90%;
    width: 200px;
    transform: translateY(-50%);
    left: 140px;
    z-index: 10;
    border-radius: 20px;
    color: white;
    background: green;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

const MainView = () => {
    return(
        <View>
            <Carousel showThumbs={false} autoPlay infiniteLoop interval={3500}>
            <div className="div2">
                <a href="http://localhost:3000/carsearch"> 
                    <img src={Search} alt="Search" />
                    <Text1>차량 검색 서비스</Text1>
                    <Button>자세히 살펴보기</Button>
                </a>
            </div>
            <div className="div">
                <img src={Recommend} alt="Recommend" />
                <Text2>차량 추천 서비스</Text2>
                <Button>자세히 살펴보기</Button>
            </div>
            <div className="div3"> 
                <img src={Recall} alt="Recall" />
                <Text3>리콜 정보 서비스</Text3>
                <Button>자세히 살펴보기</Button>
            </div>
            <div className="div">
                <a href="http://localhost:3000/Information"> 
                    <img src={Info} alt="Info" />
                    <Text4>자동차 정보 서비스</Text4>
                    <Button>자세히 살펴보기</Button>
                </a>
            </div>
            <div className="div">
                <a href="http://localhost:3000/board/view/*">
                    <img src={Community} alt="Community" />
                    <Text5>커뮤니티 게시판</Text5>
                    <Button>자세히 살펴보기</Button>
                </a>
            </div>
            </Carousel>
        </View>
    )
}

export default MainView;