import { render, screen, fireEvent } from '@testing-library/react'
import CategorySelector from '../components/CategorySelector/CategorySelector'
import { CATEGORY_GEOGRAPHY, CATEGORY_HISTORY, type Category } from '../constants/categories'
import { vi } from 'vitest'

const mockCategories = [CATEGORY_HISTORY, CATEGORY_GEOGRAPHY] as Category[];

describe('CategorySelector', () => {
  it('renders category buttons', () => {
    render(<CategorySelector selected={[]} categories={mockCategories} onChange={() => {}} />)

    mockCategories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument()
    })
  })

  it('calls onChange when category is clicked', () => {
    const mockChange = vi.fn()
    render(<CategorySelector selected={[]} categories={mockCategories} onChange={mockChange} />)

    fireEvent.click(screen.getByText(CATEGORY_HISTORY))
    expect(mockChange).toHaveBeenCalledWith(CATEGORY_HISTORY)
  })
})
