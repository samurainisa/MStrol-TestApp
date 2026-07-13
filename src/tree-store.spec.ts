import { describe, it, expect, beforeEach } from 'vitest'
import { TreeStore, items, type TreeItem } from '@/tree-store'

describe('TreeStore', () => {
  let store: TreeStore

  beforeEach(() => {
    store = new TreeStore(items)
  })

  describe('getAll', () => {
    it('возвращает все элементы', () => {
      expect(store.getAll()).toEqual(items)
      expect(store.getAll()).toHaveLength(8)
    })
  })

  describe('getItem', () => {
    it('находит элемент по числовому id', () => {
      expect(store.getItem(1)).toEqual({
        id: 1,
        parent: null,
        label: 'Айтем 1',
      })
    })

    it('находит элемент по строковому id', () => {
      expect(store.getItem('91064cee')).toEqual({
        id: '91064cee',
        parent: 1,
        label: 'Айтем 2',
      })
    })

    it('возвращает null, если элемента нет', () => {
      expect(store.getItem(999)).toBeNull()
    })
  })

  describe('getChildren', () => {
    it('возвращает прямых детей', () => {
      const children = store.getChildren(1)

      expect(children).toEqual([
        { id: '91064cee', parent: 1, label: 'Айтем 2' },
        { id: 3, parent: 1, label: 'Айтем 3' },
      ])
    })

    it('возвращает детей у узла со строковым id', () => {
      const children = store.getChildren('91064cee')

      expect(children.map((item: TreeItem) => item.id)).toEqual([4, 5, 6])
    })

    it('возвращает пустой массив, если детей нет', () => {
      expect(store.getChildren(7)).toEqual([])
    })
  })

  describe('getAllChildren', () => {
    it('возвращает всех детей (рекурсия)', () =>{
      
    })
  })
})
