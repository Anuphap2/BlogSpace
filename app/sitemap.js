export default async function sitemap() {
  const baseUrl = 'https://blogspace-five.vercel.app';

  const routes = ['', '/blogs', '/about', '/write'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}


