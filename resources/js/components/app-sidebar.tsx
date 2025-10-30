import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Star, ListTree, Briefcase, User, Home, Zap } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
        icon: LayoutGrid,
    },
    {
        title: 'Home Data',
        href: '#',
        icon: Home,
        items: [
            {
                title: 'Hero Section',
                href: route('dashboard.hero-sections.edit'),
                icon: User,
            },
            {
                title: 'About Section',
                href: route('dashboard.about-sections.edit'),
                icon: BookOpen,
            },
            {
                title: 'Fields Section',
                href: route('dashboard.fields-sections.index'),
                icon: Zap,
            },
        ],
    },
    {
        title: 'Skills',
        href: route('dashboard.skills.index'),
        icon: Star,
    },
    {
        title: 'Categories',
        href: route('dashboard.categories.index'),
        icon: ListTree,
    },
    {
        title: 'Projects',
        href: route('dashboard.projects.index'),
        icon: Briefcase,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={route('dashboard')} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
