import { useCountdown } from './CountDate'
import ShowCountDown from './CountDown'

const DDayComponent = () => {
  const [days, hours, minutes, seconds] = useCountdown(new Date('2024-06-29 11:00:00'))

  return (
    <>
      <section
        id="editor-section-dday"
        className="base-section relative bgbase select-none large MapoFlowerIsland style4 !pt-2 text-black"
        style={{ paddingTop: "4rem", paddingBottom: "4rem", transform: "scale(1)", zIndex: 8 }}
        data-aos="fade-up"
      >
        <ShowCountDown
          days={Number(days)}
          hours={Number(hours)}
          minutes={Number(minutes)}
          seconds={Number(seconds)}
        />
        <div data-aos="fade-up" className="ddaysize flex flex-col items-center justify-center text-center break-all whitespace-pre-wrap aos-init aos-animate">
          <p>대겸 <span style={{ color: "#d08c95" }}>♥</span> 세희의 결혼식이 <span style={{ color: "#d08c95", fontFamily: "KBIZHanmaumMyungjoBold" }}>{ days }</span>일 남았습니다.</p>
        </div>
      </section>
    </>
  )
}

export default DDayComponent