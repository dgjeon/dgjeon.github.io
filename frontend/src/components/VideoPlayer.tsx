import ReactPlayer from 'react-player'
import styled from 'styled-components'

import video from '../assets/bgm/video.mp4'

interface VideoPlayerType {
  playing: boolean
  setPlaying: (isPlay: boolean) => void
  setReady: () => void
}

const VideoPlayer = (props: VideoPlayerType) => {
  const onEnded = () => {
    props.setPlaying(true)
  }

  const handleReady = () => {
    props.setReady();
  }

  return (
    <>
      <VideoPlayerWrap>
        <ReactPlayer
          className='player' // 클래스 이름 지정하여 스타일 적용
          url={video}
          playing={props.playing} // 재생 상태, true = 재생중 / false = 일시 정지
          controls={true} // 유튜브 재생 컨트롤바 노출 여부
          onEnded={onEnded} // 현재 재생 중인 영상 종료 시 호출
          onReady={handleReady}
          style={{ width: "100%", height: "auto" }}
          muted={true}
          loop={true}
	  config={{
	    file: {
	      attributes: { playsInline: true }
	    }
	  }}
        />
      </VideoPlayerWrap>
    </>
  )
}

const VideoPlayerWrap = styled.div`
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 233px !important;
  z-index: 2;

  .player {
    position: absolute;
    top: 0%;
    left: 0px;
    width: 100% !important;
    height: 100% !important;
    border-radius: 10px;
    overflow: hidden;
  }
`

export default VideoPlayer
