import { projects, authors } from '$lib/data';

export async function GET() {
    const pages = [
        '',
        'projects',
        'about',
        'help',
        'join'
    ];

    const body = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/mobile/mobile/1.0"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
    <!-- Static Pages -->
    ${pages.map(page => `
    <url>
        <loc>https://humanhack.org/${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
    `).join('')}

    <!-- Projects -->
    ${projects.map(project => `
    <url>
        <loc>https://humanhack.org/projects/${project.slug}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    `).join('')}

    <!-- Authors -->
    ${authors.map(author => `
    <url>
        <loc>https://humanhack.org/authors/${author.id}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>
    `).join('')}
</urlset>`.trim();

    return new Response(body, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
