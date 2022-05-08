import { Header } from '../header/Header'
import { PageProps } from './types'

export function PageTemplate({ ...props }: PageProps) {
  return (
    <>
      <Header />
      <main>
        <div>{props.children}</div>
      </main>
      Footer
    </>
  )
}
