import { createUID } from '@/utils/index';

export const CONTACT_INFORMATION = [
  {
    id: createUID(),
    method: 'Email',
    contact: 'info@company.com',
    href: 'mailto:info@company.com',
    target: '_self',
    label: 'Send us a letter to this email address',
  },
  {
    id: createUID(),
    method: 'Phone',
    contact: '+1-555-123-4567',
    href: 'tel:+1-555-123-4567',
    target: '_self',
    label: 'Call us at this phone number',
  },
  {
    id: createUID(),
    method: 'Telegram',
    contact: 'company_telegram',
    href: 'https://t.me/company_telegram',
    target: '_blank',
    label: 'Contact us via Telegram',
  },
  {
    id: createUID(),
    method: 'WhatsApp',
    contact: '+1-555-999-8888',
    href: 'https://wa.me/+1-555-999-888',
    target: '_blank',
    label: 'Contact us via WhatsApp',
  },
  {
    id: createUID(),
    method: 'Skype',
    contact: 'company_skype_id',
    href: 'skype:company_skype_id?userinfo',
    target: '_self',
    label: 'Contact us via Skype',
  },
  {
    id: createUID(),
    method: 'Discord',
    contact: 'company_discord',
    href: 'https://discord.com/',
    target: '_blank',
    label: 'Contact us via Discord',
  },
  {
    id: createUID(),
    method: 'Address',
    contact: '123 Main Street, City, Country',
    href: 'https://www.google.com/maps',
    target: '_blank',
    label: 'Check out our location',
  },
  {
    id: createUID(),
    method: 'Customer Support',
    contact: 'support@company.com',
    href: 'mailto:support@company.com',
    target: '_self',
    label: 'Send us a letter to this email address',
  },
  {
    id: createUID(),
    method: 'Business Inquiries',
    contact: 'inquiries@company.com',
    href: 'mailto:inquiries@company.com',
    target: '_self',
    label: 'Send us a letter to this email address',
  },
  {
    id: createUID(),
    method: '24/7 Emergency Contact',
    contact: '+1-555-987-6543',
    href: 'tel:+1-555-987-6543',
    target: '_self',
    label: 'Call us at this phone number',
  },
];

export const CONTACT_OTHER_WAYS = [
  {
    id: createUID(),
    method: 'Social Media Direct Messaging',
  },
  {
    id: createUID(),
    method: 'Live Chat Support on our website',
  },
  {
    id: createUID(),
    method: 'Visit our office during business hours',
  },
];
