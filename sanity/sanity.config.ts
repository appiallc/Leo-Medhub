import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import type {SchemaTypeDefinition} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './env'
import {schemaTypes} from './schemas'
import {structure} from './structure'

export default defineConfig({
  basePath: '/',
  projectId,
  dataset,
  schema: {
    types: schemaTypes as SchemaTypeDefinition[],
  },
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
