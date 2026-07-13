export type TreeItemId = number | string

export interface TreeItem {
  id: TreeItemId
  parent: TreeItemId | null
  label: string
}

export const items: TreeItem[] = [
  { id: 1, parent: null, label: 'Айтем 1' },
  { id: '91064cee', parent: 1, label: 'Айтем 2' },
  { id: 3, parent: 1, label: 'Айтем 3' },
  { id: 4, parent: '91064cee', label: 'Айтем 4' },
  { id: 5, parent: '91064cee', label: 'Айтем 5' },
  { id: 6, parent: '91064cee', label: 'Айтем 6' },
  { id: 7, parent: 4, label: 'Айтем 7' },
  { id: 8, parent: 4, label: 'Айтем 8' },
]

export class TreeStore {
  items: TreeItem[]

  constructor(items: TreeItem[]) {
    this.items = items
  }

  getAll(): TreeItem[] {
    return this.items
  }

  getItem(id: TreeItemId): TreeItem | null {
    return this.items.find((item) => item.id === id) ?? null
  }

  getChildren(id: TreeItemId): TreeItem[] {
    return this.items.filter((item) => item.parent === id)
  }

  getAllChildren(id: TreeItemId): TreeItem[] {
    const result: TreeItem[] = []

    const stack: TreeItem[] = [...this.getChildren(id)]

    while (stack.length > 0) {
      const child = stack.pop()
      if (child) {
        result.push(child)
        stack.push(...this.getChildren(child.id))
      }
    }

    return result
  }
}
