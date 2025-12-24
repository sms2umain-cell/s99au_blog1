// SEO 工具函数

/**
 * 添加 Schema.org JSON-LD 到页面
 */
export function addSchemaOrg(schema: object) {
  // 移除已存在的 schema
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // 添加新的 schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * 更新页面 meta 标签
 */
export function updateMetaTags(tags: {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}) {
  if (tags.title) {
    document.title = tags.title;
  }

  if (tags.description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', tags.description);
    }
  }

  if (tags.keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', tags.keywords);
    }
  }

  if (tags.canonical) {
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = tags.canonical;
  }

  if (tags.ogTitle) {
    let metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (!metaOgTitle) {
      metaOgTitle = document.createElement('meta');
      metaOgTitle.setAttribute('property', 'og:title');
      document.head.appendChild(metaOgTitle);
    }
    metaOgTitle.setAttribute('content', tags.ogTitle);
  }

  if (tags.ogDescription) {
    let metaOgDescription = document.querySelector('meta[property="og:description"]');
    if (!metaOgDescription) {
      metaOgDescription = document.createElement('meta');
      metaOgDescription.setAttribute('property', 'og:description');
      document.head.appendChild(metaOgDescription);
    }
    metaOgDescription.setAttribute('content', tags.ogDescription);
  }

  if (tags.ogUrl) {
    let metaOgUrl = document.querySelector('meta[property="og:url"]');
    if (!metaOgUrl) {
      metaOgUrl = document.createElement('meta');
      metaOgUrl.setAttribute('property', 'og:url');
      document.head.appendChild(metaOgUrl);
    }
    metaOgUrl.setAttribute('content', tags.ogUrl);
  }

  if (tags.twitterTitle) {
    let metaTwitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!metaTwitterTitle) {
      metaTwitterTitle = document.createElement('meta');
      metaTwitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(metaTwitterTitle);
    }
    metaTwitterTitle.setAttribute('content', tags.twitterTitle);
  }

  if (tags.twitterDescription) {
    let metaTwitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!metaTwitterDescription) {
      metaTwitterDescription = document.createElement('meta');
      metaTwitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(metaTwitterDescription);
    }
    metaTwitterDescription.setAttribute('content', tags.twitterDescription);
  }
}

/**
 * 获取网站基础 URL
 */
export function getSiteUrl(): string {
  return (typeof VITE_SITE_URL !== 'undefined' ? VITE_SITE_URL : 'https://s99au.com');
}
