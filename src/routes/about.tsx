import { createFileRoute } from '@tanstack/react-router'
import PageContainer from '../components/PageContainer'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PageContainer>Hello "/about"!</PageContainer>
}
