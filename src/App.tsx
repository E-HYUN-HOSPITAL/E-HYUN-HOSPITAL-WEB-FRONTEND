import './App.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { trackPageView } from './lib/track';
import { MobileBottomBar } from './components/common/mobileBottomBar/MobileBottomBar';

// count in-app navigation as page views
let lastPath = window.location.pathname;
router.subscribe((state) => {
  const path = state.location.pathname;
  if (path !== lastPath) {
    lastPath = path;
    trackPageView();
  }
});

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <MobileBottomBar />
    </>
  );
}

export default App;
