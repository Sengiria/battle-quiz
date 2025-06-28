import { render } from '@testing-library/react'
import Army from '../components/Army/Army'

describe('Army component', () => {
  it('renders correct army image based on health', () => {
    const { container } = render(<Army health={3} maxHealth={5} />)
    const img = container.querySelector('img')
    expect(img?.getAttribute('src')).toMatch(/army_3\.png/)
  })
})
