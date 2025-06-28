import { render, screen, fireEvent } from '@testing-library/react'
import GameEndScreen from '../components/EndScreen/EndScreen'

describe('VictoryScreen', () => {
  it('shows victory message', () => {
    render(<GameEndScreen type="win" onRestart={() => {}} />)
    expect(screen.getByText(/conquered the realm/i)).toBeInTheDocument()
  })

  it('shows defeat message', () => {
    render(<GameEndScreen type="gameOver" onRestart={() => {}} />)
    expect(screen.getByText(/fallen in battle/i)).toBeInTheDocument()
  })

  it('calls onRestart when button clicked', () => {
    const mockRestart = vi.fn()
    render(<GameEndScreen type="win" onRestart={mockRestart} />)
    fireEvent.click(screen.getByRole('button', { name: /play again/i }))
    expect(mockRestart).toHaveBeenCalled()
  })
})
