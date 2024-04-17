/**
 * Custom Title Input for SEO
 */

import {Badge, Inline, Stack, TextInput} from '@sanity/ui'
import {ChangeEvent, ReactElement, useCallback} from 'react'
import {set, StringInputProps, StringSchemaType, unset} from 'sanity'

export function SeoTitleInput({
  elementProps,
  onChange,
  value = '',
}: StringInputProps<StringSchemaType>): ReactElement {
  // The change handler for the text input, sending data
  // to the content lake.
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
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
          tone={value?.length >= 15 && value?.length <= 70 ? 'positive' : 'critical'}
        >
          {value?.length || 0} / 70
        </Badge>
      </Inline>
      <TextInput {...elementProps} onChange={handleChange} value={value} />
    </Stack>
  )
}
