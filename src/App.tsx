import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorBoundary/ErrorFallback';

const HomePage = lazy(
  () => import('./pages/home/HomePage' /*webpackChunkName: "HomePage"*/),
);
const ArticlePage = lazy(
  () =>
    import('./pages/article/ArticlePage' /*webpackChunkName: "ArticlePage"*/),
);
const Page404 = lazy(
  () => import('./pages/404/Page404' /*webpackChunkName: "Page404"*/),
);

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default App;
