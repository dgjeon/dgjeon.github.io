import { useEffect, useState } from 'react'
import styled from 'styled-components'

import VideoPlayer from './VideoPlayer'

// import videoIcon from '../assets/seahee/video-icon.png'
import nLogo from '../assets/seahee/n-logo.png'
import nameImg from '../assets/seahee/name-img.png'
import ageImg from '../assets/seahee/age-img.png'
import hdImg from '../assets/seahee/hd-img.png'
import playBtn from '../assets/seahee/play-btn.png'
import pauseBtn from '../assets/seahee/pause-btn.png'
import infoBtn from '../assets/seahee/info-icon.png'

interface SectionNetflixType {
  moveCalendar: (obj: object) => void;
}

const SectionNetflix = (props: SectionNetflixType) => {
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const setReady = () => {
    setPlaying(true)
  }
  
  const unmute = () => {
    setMuted(false)
  }
  
  useEffect(() => {
    if (playing) {
      unmute();
    }
  })

  return (
    <>
      <NetflixMain id="main" className="w-full flex flex-col text-white bg-black justify-center items-center">
        <div className="netflix text-black w-full">
            <VideoPlayer
              playing={playing}
              muted={muted}
              setPlaying={setPlaying}
              setReady={setReady}
            ></VideoPlayer>
          <div className="container">
            <div className="title">
              <div className="logo">
                <img src={nLogo} alt="넷플릭스로고" />시리즈
              </div>
              <div className="name">
                <img src={nameImg} alt="영화제목"/>
              </div>
              <div className="info">
                2024.06.29 예정
                <img src={ageImg} alt="연령" />
                에피소드 1개
                <img src={hdImg} alt="화질" />
              </div>
              <div className="ranking">
                <div className="rank">
                  <span>TOP</span>
                  <p>10</p>
                </div>
                개봉 기대작 순위 1위
              </div>
            </div>

            <div className="btn-box">
              <button className="play-btn" onClick={() => setPlaying(!playing)}>
                { playing && <div className="flex flex-1 justify-center items-center gap-[15px] text-black"><img src={pauseBtn} alt="" /><span className="!text-black">일시정지</span></div>}
                { !playing && <div className="flex flex-1 justify-center items-center gap-[15px] text-black"><img src={playBtn} alt="" /><span className="!text-black">재생</span></div>}
              </button>
              <button onClick={unmute} style={{ display: 'none' }}>음소거 해제</button>
              <button className="info-btn" onClick={props.moveCalendar}>
                <img src={infoBtn} alt="" />예식정보
              </button>
            </div>

            <div className="text-box">
              <div className="box pb-6">
                <p>
                  저희 두 사람이 소중한 분들을 모시고<br />
                  사랑의 결실을 이루려 합니다.<br />
                  <br />
                  오로지 믿음과 사랑만을 약속하는<br />
                  귀한 날에 저희의 하나됨을 <br />
                  <br />
                  지켜보아 주시고 격려해 주시면<br />
                  더없는 기쁨으로 간직하겠습니다.
                </p>
              </div>
              <div className="box">
                <span>출연</span>
              </div>
              <div className="box">
                <div className="sub">
                  <h2>전태선 · 장영옥<p>의</p></h2>
                  <h3>아들</h3>
                  <h2>대겸</h2>
                </div>
                <div className="sub">
                  <h2>김동배 · 갈경희<p>의</p></h2>
                  <h3>딸</h3>
                  <h2>세희</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NetflixMain>
    </>
  )
}


const NetflixMain = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  * {
    font-family: 'SUIT';
  }
  
  .netflix {
    display: flex;
    flex-direction: column;
  }
  .netflix * {
    color: #fff;
  }
  .netflix .video-box {
    min-height: 280px;
    position: relative;
  }
  .netflix .video-box button.video-play-btn {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .netflix .video-box button.video-play-btn img {
    width: 48px;
    height: 48px;
    max-width: unset;
  }
  .netflix .container {
    width: 100%;
    height: auto;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .netflix .container .title {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0 20px;
  }
  .netflix .container .title > div {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
  }
  .netflix .container .title .logo {
    font-size: 0.875rem;
    display: flex;
    gap: 5px;
  }
  .netflix .container .title .info {
    font-weight: 500;
    gap: 10px;
    font-size: 16px;
  }
  .netflix .container .title .ranking {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'SUITBold';
    gap: 10px;
  }
  .netflix .container .title .ranking .rank {
    line-height: 10px;
    padding: 4px 5px;
    background: #CF2626;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'SUITBold';
  }
  .netflix .container .title .ranking .rank span {
    font-size: 0.563rem;
    font-weight: 400;
    font-family: 'SUITBold';
  }
  .netflix .container .title .ranking .rank p {
    font-size: 0.813rem;
    font-weight: 800;
    font-family: 'SUITBold';
  }
  .netflix .container .btn-box {
    width: 100%;
    height: auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .netflix .container .btn-box button {
    width: 100%;
    height: auto;
    padding: 10px 0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .netflix .container .btn-box .play-btn {
    background: #fff;
    color: #222;
  }
  .netflix .container .btn-box .info-btn {
    background: #707070;
  }
  .netflix .container .text-box {
    width: 100%;
    height: auto;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .netflix .container .text-box .box {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .netflix .container .text-box .box p {
    font-family: 'KimjungchulMyungjo';
    font-size: 15px;
  }
  .netflix .container .text-box .box span {
    font-size: 0.875rem;
    font-weight: 600;
    position: relative;
  }
  .netflix .container .text-box .box span::before, .netflix .container .text-box .box span::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 80px;
    height: 1px;
    background: #595959;
  }
  .netflix .container .text-box .box span::before {
    right: 50px;
  }
  .netflix .container .text-box .box span::after {
    left: 50px;
  }
  .netflix .container .text-box .box .sub {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 200px;
  }
  .netflix .container .text-box .box .sub h2 {
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    font-family: 'SUITBold';
  }
  .netflix .container .text-box .box .sub h2 p {
    font-weight: 400;
    font-family: 'SUIT';
    line-height: 24px;
  }
  .netflix .container .text-box .box .sub h3 {
    font-size: 1rem;
    font-weight: 400;
  }
`

export default SectionNetflix
