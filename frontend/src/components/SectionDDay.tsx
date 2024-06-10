import { forwardRef, useImperativeHandle } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const DDay = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    moveCalendar: () => {
      window.scrollTo(0, 1700)
    }
  }))

  return (
    <>
      <section
        id="editor-section-calendar"
        className="base-section relative bgbase select-none large MapoFlowerIsland style4 !pb-8 text-black mx-auto"
        style={{ transform: "scale(1)", zIndex: 7 }}
      >
        <div
          data-aos="fade-up"
          className="section-calendar-area-1 cal-text-1 pb-8 text-base text-center font-semibold tracking-widest-2 aos-init aos-animate"
        >
          6월
        </div>
        <Calendar
          calendarType={"gregory"}
          showNavigation={false}
          value={new Date('2024-06-29')}
          formatDay={(locale, date) => date.toLocaleString('en', { day: 'numeric' })}
          showNeighboringMonth={false}
          data-aos="fade-up"
        ></Calendar>
      </section>
    </>
  )
})

export default DDay