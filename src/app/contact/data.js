import { createUID } from '@/utils/index';

export const CONTACT_INFORMATION = [
  {
    id: createUID(),
    method: 'Email',
    contact: 'info@company.com',
  },
  {
    id: createUID(),
    method: 'Phone',
    contact: '+1-555-123-4567',
  },
  {
    id: createUID(),
    method: 'Telegram',
    contact: '@company_telegram',
  },
  {
    id: createUID(),
    method: 'WhatsApp',
    contact: '+1-555-999-8888',
  },
  {
    id: createUID(),
    method: 'Skype',
    contact: 'company_skype_id',
  },
  {
    id: createUID(),
    method: 'Discord',
    contact: 'company_discord',
  },
  {
    id: createUID(),
    method: 'Address',
    contact: '123 Main Street, City, Country',
  },
  {
    id: createUID(),
    method: 'Customer Support',
    contact: 'support@company.com',
  },
  {
    id: createUID(),
    method: 'Business Inquiries',
    contact: 'inquiries@company.com',
  },
  {
    id: createUID(),
    method: '24/7 Emergency Contact',
    contact: '+1-555-987-6543',
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
