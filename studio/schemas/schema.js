// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import caseStudy from './documents/caseStudy'
import category from './documents/category'
import post from './documents/post'
import openSource from './documents/openSource'
// Object types
import portableText from './objects/portableText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'blog',
  types: schemaTypes.concat([
    post,
    category,
    portableText,
    caseStudy,
    openSource,
  ])
})
