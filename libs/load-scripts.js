const scripts = [
  {
    name: 'jQuery',
    sources: [
      'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js',
      'libs/jquery-3.7.1.min.js'
    ]
  },
  {
    name: 'Swiper',
    sources: [
      'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
      'libs/swiper-bundle.min.js'
    ]
  },
  {
    name: 'App',
    sources: [
      'libs/portfolio_b.js'
    ]
  }
];

function loadScriptSources(sources, callback, index = 0) {
  if (index >= sources.length) {
    console.error('All sources failed.');
    return;
  }

  const script = document.createElement('script');
  script.src = sources[index];

  script.onload = callback;

  script.onerror = () => {
    loadScriptSources(sources, callback, index + 1);
  };

  document.body.appendChild(script);
}

function loadScriptsSequentially(index = 0) {
  if (index >= scripts.length) return;

  const current = scripts[index];

  loadScriptSources(current.sources, () => {
    console.log(current.name + ' loaded');
    loadScriptsSequentially(index + 1);
  });
}

loadScriptsSequentially();