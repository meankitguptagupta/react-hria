import { RouterProvider } from "react-router-dom";
import { Suspense } from 'react';

import { router } from "./routes";

import ErrorBoundary from "./components/common/ErrorHandler";
import ScreenLoaderComponent from "./components/common/ScreenLoaderComponent";

function App() {
  return (
    <div className="container-fluid app">
      <ErrorBoundary fallbackComponent={<ScreenLoaderComponent />}>
        <Suspense fallback={<ScreenLoaderComponent />}>
          <RouterProvider router={router} fallbackElement={<ScreenLoaderComponent />} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
