import {Box, Card, Code, Flex, Text} from '@sanity/ui'
import {ReactElement, useState} from 'react'
import {useFormValue} from 'sanity'

export function SeoPreview(): ReactElement {
  const [view, setView] = useState<'code' | 'preview' | 'social'>('code')
  const titleValue = useFormValue(['seo', 'seoTitle']) || "Don't forget your title!"

  const descriptionValue =
    useFormValue(['seo', 'seoDescription']) ||
    "Don't forget your description, these are really important!"

  const keywordsValue = useFormValue(['seo', 'seoKeywords'])

  const codeString = `
  <title>${titleValue || ''}</title>
  <meta name="description" content="${descriptionValue || ''}">
  <meta name="keywords" content="${keywordsValue || ''}">
  `

  return (
    <>
      <Flex align="center" paddingBottom={4} gap={2}>
        <Text
          size={1}
          weight="medium"
          role="button"
          onClick={() => setView('code')}
          color={view === 'code' ? '#556bfc' : '#cecece'}
          style={
            view === 'code' ? {textDecoration: 'underline', textUnderlineOffset: 4} : undefined
          }
        >
          Code
        </Text>

        <Text
          role="button"
          onClick={() => setView('preview')}
          size={1}
          weight="medium"
          color={view === 'preview' ? '#556bfc' : '#cecece'}
          style={
            view === 'preview' ? {textDecoration: 'underline', textUnderlineOffset: 4} : undefined
          }
        >
          Result Card
        </Text>
      </Flex>

      {view === 'code' && (
        <Card shadow={1} tone="primary" radius={2}>
          <Code language="html" size={1} style={{overflow: 'scroll'}}>
            {codeString}
          </Code>
        </Card>
      )}

      {view === 'preview' && (
        <Card shadow={1} radius={2} padding={4}>
          <Flex gap={3} style={{width: '100%', marginBottom: 24}}>
            <div style={{width: '33%', background: '#a8a4a4', height: 10, borderRadius: 6}} />
            <div style={{width: 100, background: '#cecece', height: 10, borderRadius: 6}} />
            <div style={{width: 100, background: '#cecece', height: 10, borderRadius: 6}} />
          </Flex>

          <Box style={{marginBottom: 20}}>
            <Text size={4} weight="semibold" style={{color: '#556bfc'}}>
              {titleValue as string}
            </Text>
          </Box>

          <Text size={2}>{descriptionValue as string}</Text>

          <Flex gap={3} style={{width: '100%', marginTop: 24}}>
            <div style={{width: 150, background: '#bbd9ff', height: 10, borderRadius: 6}} />
            <div style={{width: 150, background: '#bbd9ff', height: 10, borderRadius: 6}} />
            <div style={{width: 150, background: '#bbd9ff', height: 10, borderRadius: 6}} />
          </Flex>
        </Card>
      )}
    </>
  )
}
