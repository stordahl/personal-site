export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61ec50f80c553c742b814244',
                  title: 'Personal Site',
                  name: 'stordahl-web',
                  apiId: '9defc648-31a6-4d88-b797-9032ca0d6d35',
                  url: 'https://stordahl.dev'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stordahl/personal-site',
            category: 'Code'
          },
          {title: 'Frontend', value: '', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
