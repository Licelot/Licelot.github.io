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
    description: 'Técnica en Desarrollo de Software con experiencia en el diseño y desarrollo de soluciones digitales accesibles, eficientes y centradas en las personas. He colaborado en proyectos públicos que impactan positivamente en áreas como salud y transporte.',
    image: {
        src: '/licelot.jpg',
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
        text: `Soy desarrolladora de software enfocada en crear experiencias digitales accesibles, intuitivas y con propósito. He participado en iniciativas del sector público que buscan mejorar servicios esenciales como el transporte y la salud. Me apasiona convertir ideas en soluciones reales que impacten positivamente la vida de las personas.`,
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
        title: '¿Te gustaría mantenerte al tanto?',
        text: 'Suscríbete para recibir noticias sobre mis proyectos, colaboraciones y reflexiones sobre desarrollo web.',
        formUrl: '#'
    },
    postsPerPage: 6,
    projectsPerPage: 6
};

export default siteConfig;
