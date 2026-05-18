import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import InspireXCaseStudy from '@/pages/case-studies/InspireXCaseStudy';

import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Case Studies */}
        <Route
          path="/projects/inspirex"
          element={<InspireXCaseStudy />}
        />

      </Routes>

      <Toaster />
    </BrowserRouter>
  );
}

export default App;