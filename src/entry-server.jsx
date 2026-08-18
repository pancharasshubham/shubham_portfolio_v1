import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router';
import { AppRoutes } from './App';

export function render(url) {
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  return {
    appHtml,
    head: [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
    ].join(''),
  };
}
