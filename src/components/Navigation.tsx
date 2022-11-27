import { useState, useEffect } from "react"
import Nav from "react-bootstrap/Nav"
import { Outlet } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
  // Detect if the device in use is a mobile phone.
  const [mobile, setMobile] = useState(false);
  const [pxRatio, setPxRatio] = useState(414);
  
  
  useEffect(() => {
    
    const mediaWatcher = window.matchMedia(`(max-width: ${pxRatio}px)`)
    
    setMobile(mediaWatcher.matches)
    
    function screenWidthUpdate(event: MediaQueryListEvent) {
      const pr = window.devicePixelRatio;
      const width = Math.floor(414 / pr) 
      setPxRatio(width)
      setMobile(event.matches);
    }
    
    // Keep tracks of the window size
    mediaWatcher.addEventListener("change", screenWidthUpdate);
    
    // Unmount the event listener
    return function cleanup() {
      mediaWatcher.removeEventListener("change", screenWidthUpdate);
    };
  }, [setMobile])
  console.log(mobile, pxRatio)



  return (
    <>
      <Nav className={mobile ? "justify-content-center nav-mobile" : "justify-content-center nav"} activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Outlet />
    </>
  );
}

export default Navigation;
