import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import InspireXCaseStudy from '@/pages/case-studies/InspireXCaseStudy';
import SaaScopeCaseStudy from '@/pages/case-studies/SaaScopeCaseStudy';
import AIUsagePolicyCaseStudy from '@/pages/case-studies/AIUsagePolicyCaseStudy';
import RealEstateCaseStudy from '@/pages/case-studies/RealEstateCaseStudy';

import { Toaster } from '@/components/ui/toaster';

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>

        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Case Studies */}

        {/* InspireX Case Study */}
        <Route
          path="/projects/inspirex"
          element={<InspireXCaseStudy />}
        />

        {/* saaScope API Case Study */}
        <Route
          path="/projects/saascope-api"
          element={<SaaScopeCaseStudy />}
        />

        {/* AI Usage Policy Generator Case Study */}
        <Route
          path="/projects/ai-usage-policy-generator"
          element={<AIUsagePolicyCaseStudy />}
        />

        {/* Real Estate Business Website Case Study */}
        <Route
          path="/projects/real-estate-business-website"
          element={<RealEstateCaseStudy />}
        />

      </Routes>

      <Toaster />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
