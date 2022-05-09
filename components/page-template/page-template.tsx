import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { PageProps } from './types'

export function PageTemplate({ ...props }: PageProps) {
  return (
    <div style={{ margin: 'auto' }}>
      <Header />
      <main>
        <div>{props.children}</div>
      </main>
      <Footer />
    </div>
  )
}
