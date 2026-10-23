export type App = {
  slug: string;
  name: string;
  category: 'Games' | 'Everyday' | 'Companions';
  tagline: string;
  description: string;
  icon: string;
  color: string;
  stores: { ios?: string; android?: string };
  features: string[];
  privacy?: string;
  terms?: string;
};

export const apps: App[] = [
  {
    slug: 'daily-llama', name: 'Daily Llama', category: 'Companions',
    tagline: 'A little more Fortnite. Wherever you are.',
    description: 'The item shop, cosmetics, player stats, and latest news. Keep your Fortnite world close, even when you’re away from the game.',
    icon: '/images/daily-llama-icon.png', color: '#ccecf5',
    stores: { ios: 'https://apps.apple.com/us/app/daily-llama/id1445977851', android: 'https://play.google.com/store/apps/details?id=com.chrishouston.dailyllama.android' },
    features: ['Explore the live item shop', 'Browse the cosmetic library', 'Check player stats', 'Follow news and videos', 'Find your next drop with the map and drop wheel'],
    privacy: '/daily-llama-privacy-policy.html', terms: '/daily-llama-terms-of-service.html',
  },
  {
    slug: 'unblock-me-colors', name: 'Unblock Me Colors', category: 'Games',
    tagline: 'Make room for a little brain time.',
    description: 'A colorful sliding-block puzzle. Move the pieces, clear a path, and find your way out, one satisfying solve at a time.',
    icon: '/images/unblockmecolors.png', color: '#f3e4be',
    stores: { ios: 'https://apps.apple.com/us/app/unblock-me-colors/id6762630544', android: 'https://play.google.com/store/apps/details?id=com.chrishouston.unblockmecolors' },
    features: ['Slide blocks to clear a path', 'Work through hand-curated puzzles', 'Build up to tougher challenges'],
    privacy: '/unblock-me-colors-privacy-policy.html', terms: '/unblock-me-colors-terms-of-service.html',
  },
  {
    slug: 'gel-glide', name: 'Gel Glide', category: 'Games',
    tagline: 'One swipe. So many possibilities.',
    description: 'Swipe your gel block toward the star. It keeps sliding until something stops it, so a little planning goes a long way.',
    icon: '/images/gel_glide.png', color: '#f5dfe5',
    stores: { ios: 'https://apps.apple.com/us/app/gel-glide/id6762057714', android: 'https://play.google.com/store/apps/details?id=com.chrishouston.gelglide' },
    features: ['Explore colorful puzzle worlds', 'Try a new daily puzzle', 'Find a route with fewer moves'], privacy: '/gel-glide-privacy-policy.html',
  },
  {
    slug: 'idle-harvest', name: 'Idle Harvest', category: 'Games',
    tagline: 'Small seeds. Big possibilities.',
    description: 'Start with a carrot patch and grow a farming empire. Automate your harvests, unlock upgrades, and let your farm keep growing.',
    icon: '/images/idle-harvest.png', color: '#dfe8c9',
    stores: { ios: 'https://apps.apple.com/us/app/idle-harvest-farm-empire/id6760675821', android: 'https://play.google.com/store/apps/details?id=com.chrishouston.idleharvest' },
    features: ['Build and automate your farm', 'Unlock producers and upgrades', 'Keep growing with offline earnings'], privacy: '/idle-harvest-privacy-policy.html', terms: '/idle-harvest-terms-of-service.html',
  },
  {
    slug: 'idle-hobo', name: 'Idle Hobo', category: 'Games',
    tagline: 'Build your own street legend.',
    description: 'Start with a cardboard box and work your way up in an idle RPG. Take on jobs, collect and upgrade gear, and battle tougher bosses as your street legend grows.',
    icon: '/images/idle-hobo.png', color: '#d9eaf5',
    stores: { ios: 'https://apps.apple.com/us/app/idle-hobo-street-legend/id6778127503', android: 'https://play.google.com/store/apps/details?id=com.chrishouston.idlehobo' },
    features: ['Earn cash from idle jobs', 'Collect and upgrade your gear', 'Take on turn-based boss battles'],
    privacy: '/idle-hobo-privacy-policy.html', terms: '/idle-hobo-terms-of-service.html',
  },
  {
    slug: 'grade-pal', name: 'Grade Pal', category: 'Everyday',
    tagline: 'Know where you stand.',
    description: 'Keep track of your courses and grades, and explore how a future test or project could affect your results.',
    icon: '/images/grade-pal-icon-v2.png', color: '#f1e1de',
    stores: { ios: 'https://apps.apple.com/us/app/grade-pal-1-grade-tracker/id1442410668' },
    features: ['Track grades by course', 'Calculate possible future grades', 'Keep a clear course overview'],
  },
  {
    slug: 'elementals-alchemy', name: 'Elementals Alchemy', category: 'Games',
    tagline: 'A curious little world of combinations.',
    description: 'Start with the basics. Combine elements, discover something new, and see how far your curiosity takes you.',
    icon: '/images/Elementals.png', color: '#e7dff1',
    stores: { ios: 'https://apps.apple.com/us/app/elementals-alchemy/id6478245563', android: 'https://play.google.com/store/apps/details?id=com.chrishouston.elementalsalchemy.android' },
    features: ['Combine elements to make discoveries', 'Explore more than 100 elements', 'Build a collection across categories'], privacy: '/elementals-alchemy-privacy-policy.html',
  },
  {
    slug: 'stack-em', name: 'Stack Em', category: 'Games',
    tagline: 'Just one more block.',
    description: 'Position your block, let it drop, and build your tallest tower. Perfect placements make all the difference.',
    icon: '/images/stack-em.png', color: '#e2e1f4',
    stores: { ios: 'https://apps.apple.com/us/app/stack-em-tower/id6761726968', android: 'https://play.google.com/store/apps/details?id=com.chrishouston.stackem' },
    features: ['Drag to position each block', 'Aim for perfect placements', 'Beat your own high score'], privacy: '/stack-em-privacy-policy.html',
  },
  {
    slug: 'woof', name: 'Woof', category: 'Companions',
    tagline: 'For the love of dogs.',
    description: 'A community for dog people. Share your furry friends, follow other owners, and discover dogs you love.',
    icon: '/images/woof-icon.png', color: '#f0dcc9',
    stores: { android: 'https://play.google.com/store/apps/details?id=com.chrishouston.woof' },
    features: ['Follow friends and their dogs', 'Explore by dog type', 'Give awards to favorite posts'], privacy: '/woof-privacy-policy.html', terms: '/woof-terms-of-service.html',
  },
  {
    slug: 'north-pole', name: 'North Pole', category: 'Everyday',
    tagline: 'A little Christmas spirit.',
    description: 'Keep Christmas gift planning in one place, from ideas and hiding spots to budgets for everyone on your list.',
    icon: '/images/north-pole-icon.png', color: '#dce7df',
    stores: { android: 'https://play.google.com/store/apps/details?id=com.chrishouston.northpole' },
    features: ['Set a gift budget for each person', 'Save gift ideas, links, and hiding spots', 'Protect your plans with a passcode'], privacy: '/north-pole-privacy-policy.html',
  },
  {
    slug: 'jokes', name: 'Jokes!', category: 'Everyday',
    tagline: 'Make room for a laugh.',
    description: 'Dad jokes, riddles, and plenty of reasons to smile. Find a favorite, save it for later, and share a laugh.',
    icon: '/images/jokes.png', color: '#f4e7bc',
    stores: { android: 'https://play.google.com/store/apps/details?id=com.chrishouston.jokes' },
    features: ['Explore different joke categories', 'Save favorites and share a laugh', 'Submit your own jokes'], privacy: '/jokes-privacy-policy.html',
  },
  {
    slug: '52-card-workout', name: '52 Card Workout', category: 'Everyday',
    tagline: 'Shuffle up your routine.',
    description: 'Let a deck of cards set the pace. Match exercises to suits and use each card’s value to choose your reps.',
    icon: '/images/52cardworkout.png', color: '#e0e6eb',
    stores: { android: 'https://play.google.com/store/apps/details?id=com.chrishouston.cardworkout' },
    features: ['Create and save your workouts', 'Add custom exercises', 'Look back through your workout history'], privacy: '/52-card-workout-privacy-policy.html',
  },
  {
    slug: 'i-dont-care', name: 'I Don’t Care', category: 'Everyday',
    tagline: 'Dinner decisions, sorted.',
    description: 'Search for the food you’re craving, build your restaurant wheel, and give it a spin. Let the wheel settle where to eat.',
    icon: '/images/idc.png', color: '#f5dfce',
    stores: { ios: 'https://apps.apple.com/us/app/i-dont-care-restaurant-wheel/id1493874407' },
    features: ['Search nearby restaurants', 'Fine-tune your list', 'Spin the wheel to pick a place'], privacy: '/i-dont-care-privacy-policy.html', terms: '/i-dont-care-terms-of-service.html',
  },
];

export const dailyLlama = apps[0];
export const featuredApps = ['unblock-me-colors', 'idle-harvest', 'i-dont-care'].map(slug => apps.find(app => app.slug === slug)!);

export const llamaScreens = [
  { id: 'item-shop', label: 'The item shop', text: 'See what’s in store.', alt: 'Daily Llama item shop preview showing Fortnite cosmetics and prices.' },
  { id: 'cosmetics', label: 'Cosmetic library', text: 'Find your next favorite.', alt: 'Daily Llama cosmetic library preview showing a collection of Fortnite outfits.' },
  { id: 'player-stats', label: 'Player stats', text: 'Keep an eye on your game.', alt: 'Daily Llama player statistics preview.' },
  { id: 'map', label: 'The map', text: 'Pick your next landing spot.', alt: 'Daily Llama map preview showing island locations.' },
];
