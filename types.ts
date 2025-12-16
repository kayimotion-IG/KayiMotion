import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  client: string;
  result: string;
  stat: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  technologies: string[];
  projectUrl?: string;
}

export interface AIConceptResponse {
  title: string;
  logline: string;
  visualStyle: string;
  keyScenes: string[];
  audioMood: string;
}