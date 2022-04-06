import { PortableText } from '@portabletext/react'

export default function RichTextContent({ data }) {
  return <PortableText value={data || []} />
}
