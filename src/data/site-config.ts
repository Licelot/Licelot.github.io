export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://licelot.github.io',
    title: 'Portafolio de Licelot Oviedo',
    subtitle: 'Desarrolladora de Software',
    description: 'Soy Técnica en Desarrollo de Software con experiencia en desarrollo web institucional, soluciones digitales y colaboración en proyectos públicos. Me apasiona crear experiencias accesibles y eficientes para los usuarios.',
    image: {
        src: '/licelot-hero.jpg',
        alt: 'Licelot Oviedo'
    },
    headerNavLinks: [
        { text: 'Inicio', href: '/' },
        { text: 'Proyectos', href: '/projects' },
        { text: 'Sobre mí', href: '/about' },
        { text: 'Contacto', href: '/contact' }
    ],
    footerNavLinks: [
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/licelot-o-47263a246/' },
        { text: 'GitHub', href: 'https://github.com/Licelot' },
        { text: 'Política de privacidad', href: '/privacy' }
    ],
    socialLinks: [
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/licelot-o-47263a246/' },
        { text: 'GitHub', href: 'https://github.com/Licelot' }
    ],
    hero: {
        title: 'Hola, soy Licelot 👩‍💻',
        text: `Desarrolladora de Software con enfoque en accesibilidad, eficiencia y soluciones digitales que marcan la diferencia. He trabajado en proyectos del sector público, desarrollando plataformas web institucionales y herramientas de mejora para el transporte y la salud. Me apasiona transformar ideas en interfaces útiles y amigables.`,
        image: {
            src: '/licelot-hero.jpg',
            alt: 'Licelot trabajando en su escritorio'
        },
        actions: [
            {
                text: 'Contáctame',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: '¿Quieres mantenerte en contacto?',
        text: 'Suscríbete para recibir novedades sobre mis proyectos y colaboraciones.',
        formUrl: '#'
    },
    postsPerPage: 6,
    projectsPerPage: 6
};
export default siteConfig;
