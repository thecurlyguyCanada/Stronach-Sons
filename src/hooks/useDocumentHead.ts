import { useEffect } from 'react';

interface DocumentHeadOptions {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
}

const BASE_URL = 'https://stronachandsons.ca';
const SITE_NAME = 'Stronach and Sons 2020';

export function useDocumentHead({ title, description, canonical, ogTitle, ogDescription }: DocumentHeadOptions) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (el) {
        el.setAttribute('content', content);
      } else {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        el.setAttribute('content', content);
        document.head.appendChild(el);
      }
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', ogTitle || fullTitle);
    setMeta('property', 'og:description', ogDescription || description);
    setMeta('property', 'og:url', canonical ? `${BASE_URL}${canonical}` : BASE_URL);
    setMeta('name', 'twitter:title', ogTitle || fullTitle);
    setMeta('name', 'twitter:description', ogDescription || description);
    setMeta('name', 'twitter:url', canonical ? `${BASE_URL}${canonical}` : BASE_URL);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (link) {
      link.href = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
    }
  }, [title, description, canonical, ogTitle, ogDescription]);
}
