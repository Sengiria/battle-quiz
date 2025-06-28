import type { Category } from "../../constants/categories"

export type CategorySelectorProps = {
  categories: (Category | 'Random')[]
  selected: Category[]
  onChange: (category: Category | 'Random') => void
}

