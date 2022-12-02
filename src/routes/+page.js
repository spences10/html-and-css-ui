/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
	const res = await fetch('dummy-data.json')
	if (res.ok) {
		const people = await res.json()
		return {
			people,
		}
	}
}
