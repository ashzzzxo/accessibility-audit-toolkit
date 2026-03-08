const targetUrl = process.env.TARGET_URL || 'https://example.com';

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: [targetUrl]
    },
    assert: {
      assertions: {
        'categories:accessibility': ['warn', { minScore: 0.9 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};