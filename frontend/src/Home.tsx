import { useEffect, useRef } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"

import GlobalStyle from './styles/GlobalStyles'
import Notice from './components/SectionNotice'
import Netflix from './components/SectionNetflix'
import Picture from './components/SectionPicture'
import Portrait from './components/SectionPortrait'
import Family from './components/SectionFamily'
import DDay from './components/SectionDDay'
import DDayComponent from './components/SectionDDayComponent'
import Gallery from './components/SectionGallery'
import Map from './components/SectionMap'
import Way from './components/SectionWay'
import Attend from './components/SectionAttend'
import Flower from './components/SectionFlower'
import Account from './components/SectionAccount'
import Copyright from './components/SectionCopyright'

import Toast from './components/Toast'

function Home() {
  const attendComponentRef = useRef<any>(null)
  const ddayComponentRef = useRef<any>(null)
  // const music = new Sound(BGM, Sound.MAIN_BUNDLE, (error: any) => {
  //   if(error){
  //     console.log('Error loading sound: ' + error);
  //     return;
  //   }
  // });

  useEffect(() => {
    AOS.init();

    // music.stop(() => {
    //   music.play();
    // });
    
    // music.play();
  }, [])

  const openAttendForm = () => {
    attendComponentRef.current.openAttendForm();
  }

  const moveCalendar = () => {
    ddayComponentRef.current.moveCalendar();
  }

  return (
    <>
      <div className="bg-white">
        <div className="flex justify-center mx-auto">
          <div className="w-full max-w-fit">
            <div className="w-full h-full break-all">
              <div className="flex flex-col w-full h-full" style={{ backgroundColor: "#fff" }}>
                <GlobalStyle />
                <Notice openAttendForm={openAttendForm}/>
                <Netflix moveCalendar={moveCalendar}/>    
                <Picture />
                <Family />
                <Portrait />
                <DDay ref={ddayComponentRef} />
                <DDayComponent />
                <Gallery />
                <Map />
                <Way />
                <Attend ref={attendComponentRef}/>
                <Flower />
                <Account />
                <Toast />
                <Copyright />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
