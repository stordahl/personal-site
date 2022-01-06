export default {
  name: 'openSource',
  title: 'Open Source Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
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
      name: 'url',
      title: 'Url',
      type: 'url',
    },
  ],
}