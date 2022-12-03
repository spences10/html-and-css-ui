/** @type {import('./$types').RequestHandler} */
export function GET() {
	return new Response(JSON.stringify(data, null, 2))
}

const data = [
	{
		name: 'Lelah Nichols',
		img: `https://joeschmoe.io/api/v1/jess`,
		location: 'Troy, MI',
		tags: [`clothes`, `stem`],
		roles: [`new users`],
	},
	{
		name: 'Jesus Weiss',
		img: `https://joeschmoe.io/api/v1/jack`,
		location: 'Fort Worth, TX',
		tags: [`headset`, `gadget`, `speed`, `winter`],
		roles: [`new users`],
	},
	{
		name: 'Annie Rice',
		img: `https://joeschmoe.io/api/v1/jenni`,
		location: 'Austin, TX',
		tags: [`road`, `mountain`, `trip`, `earth`, `nature`],
		roles: [`new users`],
	},
	{
		name: 'Robert Brower',
		img: `https://joeschmoe.io/api/v1/jed`,
		location: 'Cincinnati, OH',
		tags: [`maintenance`, `gears`, `farmers`, `repair`],
		roles: [`new users`],
	},
	{
		name: 'Amy Campbell',
		img: `https://joeschmoe.io/api/v1/jazebelle`,
		location: 'Warrior, AL',
		tags: [`music`, `discs`],
		roles: [`new users`],
	},
	{
		name: 'Anthony S. Morin',
		img: `https://joeschmoe.io/api/v1/jana`,
		location: 'Lyndhurst, NJ',
		tags: [`vintage`, `electric`],
		roles: [`new users`],
	},
]
