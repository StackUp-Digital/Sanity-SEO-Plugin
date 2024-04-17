/**
 * Let's create a fieldset that we can use to generate an SEO object
 * It will be made up of custom components that deliver a visual
 * scoring system, based on input.
 */

import {defineField, defineType} from 'sanity'

import {SeoDescriptionInput} from '../components/SeoDescriptionInput'
import {SeoPreview} from '../components/SeoPreview'
import {SeoTitleInput} from '../components/SeoTitleInput'

export default defineType({
  title: 'SEO & Social',
  description: "Let's improve the page SEO & Social Media presence",
  type: 'object',
  name: 'suSeo',
  options: {
    collapsed: false,
    collapsible: true,
  },
  validation: (Rule) =>
    Rule.custom((fields) => {
      const title = fields?.seoTitle as string

      if (!title) {
        return 'Please provide a title for SEO & social sharing'
      }

      if (title.length < 15) {
        return 'Your title for SEO & social sharing is too short. Aim for at least 15 characters'
      }

      return true
    }),
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'Title for SEO & social sharing',
      description:
        'Make it as enciting as possible to convert users in social feeds and Google searches. Ideally between 15 and 70 characters',
      type: 'string',
      components: {
        input: SeoTitleInput,
      },
    }),

    defineField({
      name: 'seoDescription',
      title: 'Short paragraph for SEO & social sharing (meta description)',
      description:
        "⚡️ Optional but highly encouraged as it'll help you convert more visitors from Google & social media. Ideally between 70 and 160 characters.",
      type: 'string',
      components: {
        input: SeoDescriptionInput,
      },
    }),

    defineField({
      name: 'seoImage',
      title: 'Image for SEO & social sharing',
      description: 'This image will be used when sharing the page on social media',
      type: 'image',
    }),

    defineField({
      name: 'seoKeywords',
      title: 'Keywords for SEO',
      description: 'Add keywords that are relevant to the page content',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'seoPreview',
      type: 'string', // Is there a way to do this without defining a type?
      components: {
        input: SeoPreview,
      },
    }),
  ],
})
