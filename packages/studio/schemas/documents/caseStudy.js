import Tabs from "sanity-plugin-tabs"

export default {
  name: 'caseStudy',
  title: 'Case study',
  type: 'document',
  inputComponent: Tabs,
  fieldsets: [
    {
      name: 'metadata',
      title: 'Metadata',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'content',
      title: 'Content',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      fieldset: 'metadata'
    },
    {
      name: 'url',
      title: 'Site Url',
      type: 'url',
      fieldset: 'metadata'
    },
    {
      name: 'year',
      title: 'Project Year',
      type: 'string',
      fieldset: 'metadata',
      options: {
        list: [
          { title: '2020', value: '2020'},
          { title: '2021', value: '2021'},
          { title: '2022', value: '2022'},
          { title: '2023', value: '2023'},
          { title: '2024', value: '2024'},
          { title: '2025', value: '2025'},
          { title: '2026', value: '2026'},
          { title: '2027', value: '2027'},
          { title: '2028', value: '2028'},
          { title: '2029', value: '2029'},
          { title: '2030', value: '2030'},
        ]
      }
    },
    {
      name: 'type',
      title: 'Project Type',
      type: 'string',
      fieldset: 'metadata',
      options: {
        list: [
          { title: 'brand identity', value: 'brand identity'},
          { title: 'design', value: 'design'},
          { title: 'development', value: 'development'},
          { title: 'design + development', value: 'design + development' },
          { title: 'brand identity, design + development', value: 'brand identity, design + development' }
        ]
      }
    },
    {
      name: 'background',
      title: 'Project Background',
      type: 'portableText',
      fieldset: 'content',
    },
    {
      name: 'design',
      title: 'Design Reflection',
      type: 'portableText',
      fieldset: 'content',
    },
    {
      name: 'tech',
      title: 'Project Technology',
      type: 'portableText',
      fieldset: 'content',
    },
    {
      name: 'postmortem',
      title: 'Post-mortem',
      type: 'portableText',
      fieldset: 'content',
    },
  ],
}