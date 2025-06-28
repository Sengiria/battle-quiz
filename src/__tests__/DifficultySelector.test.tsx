import { render, screen, fireEvent } from '@testing-library/react'
import DifficultySelector from '../components/DifficultySelector/DifficultySelector'

describe('DifficultySelector', () => {
  const noop = () => {}

  it('renders all difficulty buttons', () => {
    render(<DifficultySelector selected="Easy" onSelect={noop} onContinue={noop} />)

    expect(screen.getByText('Easy')).toBeInTheDocument()
    expect(screen.getByText('Medium')).toBeInTheDocument()
    expect(screen.getByText('Hard')).toBeInTheDocument()
    expect(screen.getByText('Hardcore')).toBeInTheDocument()
  })

  it('calls onSelect when a difficulty is clicked', () => {
    const mockSelect = vi.fn()
    render(<DifficultySelector selected="Easy" onSelect={mockSelect} onContinue={noop} />)

    fireEvent.click(screen.getByText('Hardcore'))
    expect(mockSelect).toHaveBeenCalledWith('Hardcore')
  })

  it('calls onContinue when Continue is clicked', () => {
    const mockContinue = vi.fn()
    render(<DifficultySelector selected="Medium" onSelect={noop} onContinue={mockContinue} />)

    fireEvent.click(screen.getByText('Continue'))
    expect(mockContinue).toHaveBeenCalled()
  })

  it('disables Continue button if no difficulty selected', () => {
    render(<DifficultySelector selected={null} onSelect={noop} onContinue={noop} />)

    const continueButton = screen.getByText('Continue') as HTMLButtonElement
    expect(continueButton).toBeDisabled()
  })
})
