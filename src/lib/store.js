import { writable } from 'svelte/store'

export const categoryStore = writable('')
export const searchStore = writable('')

export const peopleFilter = writable([])
export const roleFilter = writable([])

export const filterName = async () => {}

export const filterRole = async () => {}
