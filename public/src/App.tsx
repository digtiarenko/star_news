import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import CssBaseline from '@mui/material/CssBaseline';

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
