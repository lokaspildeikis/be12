import React from 'react';
import { Trophy, Gauge, Bed, Settings, Car, ShieldCheck } from 'lucide-react';
import { NavItem, ServiceItem, NewsItem, Partner } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Pradžia', href: '#' },
  { label: 'Apie Mus', href: '#about' },
  { label: 'Mūsų Bolidai', href: '#cars' },
  { label: 'Paslaugos', href: '#services' },
  { label: 'Naujienos', href: '#news' },
  { label: 'Kontaktai', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Porsche & BMW Nuoma',
    description: 'Profesionaliai paruošti Porsche Cayman 718 GT4 Clubsport ir BMW E46 Compact (B lyga) bolidai jūsų startams čempionatuose.',
    icon: <Car className="w-8 h-8 text-[#ccff00]" />,
  },
  {
    title: 'Pilnas Aptarnavimas',
    description: 'Aukščiausios kvalifikacijos mechanikai, telemetrijos analizė ir inžinerinis palaikymas viso savaitgalio metu.',
    icon: <Settings className="w-8 h-8 text-[#ccff00]" />,
  },
  {
    title: 'Apgyvendinimas ir Logistika',
    description: '„Viskas įskaičiuota“ patirtis: nuo bolido transportavimo iki komfortabilaus apgyvendinimo šalia trasos.',
    icon: <Bed className="w-8 h-8 text-[#ccff00]" />,
  },
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    date: '2024-05-15',
    title: 'Naujas Porsche Cayman 718 GT4 Clubsport mūsų parke',
    summary: 'Komandos arsenalą papildė naujausias bolidas, paruoštas 2024 m. sezonui.',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    date: '2024-05-10',
    title: 'BMW E46 Compact paruošimas B lygai',
    summary: 'Mūsų kompaktiškas, bet itin greitas BMW E46 Compact yra paruoštas B lygos varžyboms.',
    image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    date: '2024-05-02',
    title: 'VIP Serviso paketai 2024 m. sezonui',
    summary: 'Pristatome atnaujintus „Arrive & Drive“ paketus verslui ir profesionalams.',
    image: 'https://images.unsplash.com/photo-1562141989-c5c79ac8f576?auto=format&fit=crop&q=80&w=800',
  },
];

export const PARTNERS: Partner[] = [
  { name: 'Porsche Motorsport', logo: 'https://picsum.photos/seed/porsche/200/100' },
  { name: 'BMW Motorsport', logo: 'https://picsum.photos/seed/bmw/200/100' },
  { name: 'Motul', logo: 'https://picsum.photos/seed/motul/200/100' },
  { name: 'Michelin', logo: 'https://picsum.photos/seed/michelin/200/100' },
];