/**
 * Custom Title Input for SEO
 */

import {useCallback} from 'react'
import {set, unset, StringInputProps, StringSchemaType} from 'sanity'
import {Badge, Inline, Stack, Text, TextArea, TextInput} from '@sanity/ui'

export function SeoDescriptionInput({
  elementProps,
  onChange,
  value = '',
}: StringInputProps<StringSchemaType>) {
  // Change handler for the text input, sending data
  // to the content lake.
  // @TODO: Update the event type
  const handleChange = useCallback(
    (event: any) => {
      const nextValue = event.currentTarget.value
      onChange(nextValue ? set(nextValue) : unset())
    },
    [onChange],
  )

  return (
    <Stack space={2}>
      <Inline>
        <Badge
          paddingX={2}
          paddingY={2}
          radius={0}
          tone={
            value?.length > 160
              ? 'critical'
              : value?.length < 70 || value?.length >= 150
                ? 'caution'
                : 'positive'
          }
        >
          {value?.length || 0} / 160
        </Badge>
      </Inline>
      <TextArea {...elementProps} onChange={handleChange} value={value} />
    </Stack>
  )
}
