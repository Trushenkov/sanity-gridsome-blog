export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '629f0091fcb0b53d61cee9e7',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-e9ddwh7p',
                  apiId: '9510d7a2-f3b9-442c-bdc6-d1cf554fc939'
                },
                {
                  buildHookId: '629f0091234ff63c1e71827c',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-6iuccx8b',
                  apiId: '776f802f-74e4-4f8d-9939-88ed9b8743ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Trushenkov/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-6iuccx8b.netlify.app', category: 'apps'}
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
