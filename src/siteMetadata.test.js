import { SITE_METADATA } from './siteMetadata';

describe('site metadata', () => {
  it('uses the canonical HTTPS production URL', () => {
    expect(SITE_METADATA.siteUrl).toBe('https://michaelcclayton.com');
  });
});
