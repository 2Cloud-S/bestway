export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    },
    {
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'string',
      description: 'Hex color code (e.g., #0ea5e9)',
    },
    {
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'string',
      description: 'Hex color code (e.g., #f97316)',
    },
  ],
}
