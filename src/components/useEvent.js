import { useEffect } from 'react';


//from https://atomizedobjects.com/blog/react/add-event-listener-react-hooks/

export default function useEvent(event, handler, passive=false) {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, handler, passive);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  });
}