import { render, screen, fireEvent } from '@testing-library/react'
import { DIFFICULTY_EASY } from '../constants/difficulties'
import { CATEGORY_GEOGRAPHY } from '../constants/categories'
import Game from '../components/Game/Game'

describe('Game Flow', () => {
  it('starts with difficulty selection', () => {
    render(<Game isTest={true} />)
    expect(screen.getByText(/select difficulty/i)).toBeInTheDocument()
  })

  it('proceeds to category selection after difficulty selected', async () => {
    render(<Game isTest={true} />)

    fireEvent.click(screen.getByText(DIFFICULTY_EASY))
    fireEvent.click(screen.getByText(/continue/i))

    expect(await screen.findByText(/select categories/i)).toBeInTheDocument()
  })

  it('starts the game after category selection and clicking continue', async () => {
    render(<Game isTest={true} />)

    fireEvent.click(screen.getByText(DIFFICULTY_EASY))
    fireEvent.click(screen.getByText(/continue/i))

    await screen.findByText(/select categories/i)

    fireEvent.click(screen.getByText(CATEGORY_GEOGRAPHY))
    fireEvent.click(screen.getByText(/start game/i))

    expect(await screen.findByText(/question/i)).toBeInTheDocument()
  })
})
