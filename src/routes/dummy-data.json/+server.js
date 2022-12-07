/** @type {import('./$types').RequestHandler} */
export function GET() {
	return new Response(JSON.stringify(data, null, 2))
}

const data = [
	{
		name: 'Lelah Nichols',
		img: `https://avatars.dicebear.com/api/adventurer/jess.svg`,
		location: 'Troy, MI',
		tags: [`clothes`, `stem`],
		roles: [`new users`],
	},
	{
		name: 'Jesus Weiss',
		img: `https://avatars.dicebear.com/api/adventurer/jack.svg`,
		location: 'Fort Worth, TX',
		tags: [`headset`, `gadget`, `speed`, `winter`],
		roles: [`new users`],
	},
	{
		name: 'Annie Rice',
		img: `https://avatars.dicebear.com/api/adventurer/jenni.svg`,
		location: 'Austin, TX',
		tags: [`road`, `mountain`, `trip`, `earth`, `nature`],
		roles: [`new users`],
	},
	{
		name: 'Robert Brower',
		img: `https://avatars.dicebear.com/api/adventurer/jed.svg`,
		location: 'Cincinnati, OH',
		tags: [`maintenance`, `gears`, `farmers`, `repair`],
		roles: [`new users`],
	},
	{
		name: 'Amy Campbell',
		img: `https://avatars.dicebear.com/api/adventurer/jazebelle.svg`,
		location: 'Warrior, AL',
		tags: [`music`, `discs`],
		roles: [`new users`],
	},
	{
		name: 'Anthony S. Morin',
		img: `https://avatars.dicebear.com/api/adventurer/jana.svg`,
		location: 'Lyndhurst, NJ',
		tags: [`vintage`, `electric`],
		roles: [`new users`],
	},
]
