
// Fix: Added React import to resolve the 'Cannot find namespace React' error
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  summary: string;
  image: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}