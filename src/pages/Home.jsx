import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const RANGE_PRODUCTS = [
  { title: <>Grains<br />&amp; Staples</>, desc: 'Rice, wheat, sugar and everyday staples for wholesale and retail supply.' },
  { title: <>Spices<br />&amp; Masalas</>, desc: 'Whole spices and blends.' },
  { title: <>Oils &amp;<br />Coconut</>, desc: 'Bulk and retail-ready formats.' },
  { title: <>Snacks<br />&amp; FMCG</>, desc: 'Demand-led products for your market.' },
];

const MARKETS = [
  { name: 'United Kingdom', flagCode: 'GB', flagFile: 'gb.jpg', flagUrl: 'https://flagcdn.com/w160/gb.jpg', status: 'Established', ports: 'Felixstowe · Southampton · London Gateway' },
  { name: 'Gulf', flagCode: 'AE', flagFile: 'ae.jpg', flagUrl: 'https://flagcdn.com/w160/ae.jpg', status: 'Established', ports: 'Jebel Ali · Sohar · Hamad' },
  { name: 'United States', flagCode: 'US', flagFile: 'us.jpg', flagUrl: 'https://flagcdn.com/w160/us.jpg', status: 'Priority', ports: 'Los Angeles · New York · Savannah' },
  { name: 'Canada', flagCode: 'CA', flagFile: 'ca.jpg', flagUrl: 'https://flagcdn.com/w160/ca.jpg', status: 'Expansion', ports: 'Vancouver · Montreal · Halifax' },
  { name: 'Australia', flagCode: 'AU', flagFile: 'au.jpg', flagUrl: 'https://flagcdn.com/w160/au.jpg', status: 'Expansion', ports: 'Sydney · Melbourne · Brisbane' },
];

const LOOPED_RANGE_PRODUCTS = [...RANGE_PRODUCTS, ...RANGE_PRODUCTS];

const HERO_SLIDES = [
  { label: 'Image 1' },
  { label: 'Image 2' },
  { label: 'Image 3' },
  { label: 'Image 4' },
];

const MARQUEE_ITEMS = [
  'RICE', 'FRUITS', 'SPICES', 'MASALAS', 'DAL', 'FLOUR',
  'KITCHEN ESSENTIALS', 'COCONUT', 'DAIRY', 'SNACKS', 'FMCG',
];
const LOOPED_MARQUEE = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

const CAPS = [
  {
    num: '01',
    title: 'Source',
    short: 'Find the right Indian products and trusted suppliers for your requirement.',
    icon: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></>,
    more: 'We shortlist verified suppliers in Dindigul and across India, compare samples and pricing, and match you with the right producers for your volumes and quality standards.',
    link: '/products',
    linkLabel: 'Explore our products',
  },
  {
    num: '02',
    title: 'Customize',
    short: 'Private label, pack size and market-specific product preparation.',
    icon: <path d="M12 3v18M3 12h18M7.5 7.5l9 9M16.5 7.5l-9 9" />,
    more: 'Put your brand on the product. We handle label design inputs, pack sizes, and formulation tweaks so the product fits your destination market.',
    link: '/customization',
    linkLabel: 'How customization works',
  },
  {
    num: '03',
    title: 'Prepare',
    short: 'Quality checks, documentation, packaging and destination compliance.',
    icon: <><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></>,
    more: 'Every batch goes through quality checks, export-grade packaging and the paperwork your destination requires, so shipments clear without surprises.',
    link: '/certifications',
    linkLabel: 'View certifications',
  },
  {
    num: '04',
    title: 'Export',
    short: 'Coordinated handover to logistics and shipment tracking to your market.',
    icon: <path d="M5 12h14M12 5l7 7-7 7" />,
    more: 'We coordinate freight, port handover and tracking, and keep you updated until your goods arrive in the UK, Gulf, US, Canada or Australia.',
    link: '/contact',
    linkLabel: 'Start an enquiry',
  },
];

const REVIEWS = [
  { name: 'Buyer Name', role: 'Distributor · United Kingdom', text: 'Placeholder review. Replace with a real customer testimonial about quality and reliability.' },
  { name: 'Buyer Name', role: 'Wholesaler · UAE', text: 'Placeholder review. Replace with a real customer testimonial about communication and shipping.' },
  { name: 'Buyer Name', role: 'Retail Chain · Canada', text: 'Placeholder review. Replace with a real customer testimonial about private label support.' },
  { name: 'Buyer Name', role: 'Importer · Australia', text: 'Placeholder review. Replace with a real customer testimonial about documentation and compliance.' },
  { name: 'Buyer Name', role: 'Brand Owner · United States', text: 'Placeholder review. Replace with a real customer testimonial about sourcing quality.' },
];
const LOOPED_REVIEWS = [...REVIEWS, ...REVIEWS];

const VALUE_POINTS = [
  { title: 'Trusted suppliers', text: 'Verified producers in Dindigul and across India, checked before we work with them.' },
  { title: 'Private label ready', text: 'Your brand, pack size and specs, handled from one place.' },
  { title: 'Export-grade quality', text: 'Quality checks, packaging and documentation on every shipment.' },
  { title: 'One point of contact', text: 'From first brief to final delivery, one team keeps you updated.' },
];

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const jpath = document.getElementById('jpath');
