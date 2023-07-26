let hour = new Date().getHours();
if (hour < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
<script>
let hour = new Date().getHours();
let greeting;
  if (hour < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
document.getElementById("demo").innerHTML = greeting;
</script>
var stateData = {
	usa: {
		name: 'United States of America',
		abbr: 'USA',
		capitol: 'Washington, District of Columbia',
		pop: '320,843,000',
		statehood: '1776',
		mammal: 'N/A',
		bird: 'Bald Eagle',
		tree: 'The Mighty Oak',
		flower: 'Rose',
		nickname: 'N/A'
	},
	al: {
		name: 'Alabama',
		abbr: 'AL',
		capitol: 'Montgomery',
		pop: '4,849,377',
		statehood: '1819',
		mammal: 'Black Bear',
		bird: 'Yellowhammer',
		tree: 'Southern Longleaf Pine',
		flower: 'Camellia',
		nickname: 'Yellowhammer State'
	},
	ak: {
		name: 'Alaska',
		abbr: 'AK',
		capitol: 'Juneau',
		pop: '735,132',
		statehood: '1959',
		mammal: 'Bowhead Whale',
		bird: 'Willow Ptarmigan',
		tree: 'Sitka Spruce',
		flower: 'Wild Forget-Me-Not',
		nickname: 'The Last Frontier'
	},
	az: {
		name: 'Arizona',
		abbr: 'AZ',
		capitol: 'Phoenix',
		pop: '6,626,624',
		statehood: '1912',
		mammal: 'Ringtail',
		bird: 'Cactus Wren',
		tree: 'Palo Verde',
		flower: 'Saguaro Cactus Blossom',
		nickname: 'The Grand Canyon State'
	},
	ar: {
		name: 'Arkansas',
		abbr: 'AR',
		capitol: 'Little Rock',
		pop: '2,959,373',
		statehood: '1836',
		mammal: 'White-Tailed Deer',
		bird: 'Mockingbird',
		tree: 'Pine',
		flower: 'Apple Blossom',
		nickname: 'The Natural State'
	},
	ca: {
		name: 'California',
		abbr: 'CA',
		capitol: 'Sacramento',
		pop: '38,332,521',
		statehood: '1850',
		mammal: 'California Grizzly Bear',
		bird: 'California Quail',
		tree: 'California Redwood',
		flower: 'Poppy',
		nickname: 'Golden State'
	},
	co: {
		name: 'Colorado',
		abbr: 'CO',
		capitol: 'Denver',
		pop: '5,268,367',
		statehood: '1876',
		mammal: 'Rocky Mountain Bighorn Sheep',
		bird: 'Lark Bunting',
		tree: 'Colorado Blue Spruce',
		flower: 'Rocky Mountain Columbine',
		nickname: 'Centennial State'
	},
	ct: {
		name: 'Connecticut',
		abbr: 'CT',
		capitol: 'Hartford',
		pop: '3,596,080',
		statehood: '1788',
		mammal: 'Sperm Whale',
		bird: 'American Robin',
		tree: 'Charter Oak',
		flower: 'Mountain Laurel',
		nickname: 'Constitution State'
	},
	de: {
		name: 'Delaware',
		abbr: 'DE',
		capitol: 'Dover',
		pop: '925,749',
		statehood: '1787',
		mammal: 'Grey Fox',
		bird: 'Blue Hen',
		tree: 'American Holly',
		flower: 'Peach Blossom',
		nickname: 'The First State'
	},
	fl: {
		name: 'Florida',
		abbr: 'FL',
		capitol: 'Tallahassee',
		pop: '19,552,860',
		statehood: '1845',
		mammal: 'Florida Panther',
		bird: 'Northern Mockingbird',
		tree: 'Sabal Palm',
		flower: 'Orange Blossom',
		nickname: 'Sunshine State'
	},
	ga: {
		name: 'Georgia',
		abbr: 'GA',
		capitol: 'Atlanta',
		pop: '9,992,167',
		statehood: '1788',
		mammal: 'Right Whale',
		bird: 'Brown Thrasher',
		tree: 'Live Oak',
		flower: 'Cherokee Rose',
		nickname: 'Peach State'
	},
	hi: {
		name: 'Hawaii',
		abbr: 'HI',
		capitol: 'Atlanta',
		pop: '1,404,054',
		statehood: '1959',
		mammal: 'Monk Seal',
		bird: 'Nene',
		tree: 'Kukui',
		flower: 'Hibiscus',
		nickname: 'Aloha State'
	},
	id: {
		name: 'Idaho',
		abbr: 'ID',
		capitol: 'Boise',
		pop: '1,612,136',
		statehood: '1890',
		mammal: 'Appaloosa Horse',
		bird: 'Mountain Bluebird',
		tree: 'Western White Pine',
		flower: 'Syringa',
		nickname: 'Gem State'
	},
	il: {
		name: 'Illinois',
		abbr: 'IL',
		capitol: 'Springfield',
		pop: '12,882,135',
		statehood: '1818',
		mammal: 'White-tailed Deer',
		bird: 'Cardinal',
		tree: 'White Oak',
		flower: 'Violet',
		nickname: 'Prairie State'
	},
	il: {
		name: 'Illinois',
		abbr: 'IL',
		capitol: 'Springfield',
		pop: '12,882,135',
		statehood: '1818',
		mammal: 'White-Tailed Deer',
		bird: 'Cardinal',
		tree: 'White Oak',
		flower: 'Violet',
		nickname: 'Prairie State'
	},
	'in': {
		name: 'Indiana',
		abbr: 'IN',
		capitol: 'Indianapolis',
		pop: '6,570,902',
		statehood: '1816',
		mammal: 'N/A',
		bird: 'Cardinal',
		tree: 'Tulip Tree',
		flower: 'Peony',
		nickname: 'Hoosier State'
	},
	ia: {
		name: 'Iowa',
		abbr: 'IA',
		capitol: 'Des Moines',
		pop: '3,090,416',
		statehood: '1846',
		mammal: 'N/A',
		bird: 'Eastern Goldfinch',
		tree: 'Oak',
		flower: 'Wild Rose',
		nickname: 'Hawkeye State'
	},
	ks: {
		name: 'Kansas',
		abbr: 'KS',
		capitol: 'Topeka',
		pop: '3,090,416',
		statehood: '1861',
		mammal: 'American Buffalo',
		bird: 'Western Meadowlark',
		tree: 'Cottonwood Tree',
		flower: 'Wild Native Sunflower',
		nickname: 'Sunflower State'
	},
	ky: {
		name: 'Kentucky',
		abbr: 'KY',
		capitol: 'Frankfort',
		pop: '4,395,295',
		statehood: '1792',
		mammal: 'Gray Squirrel',
		bird: 'Cardinal',
		tree: 'Tulip Poplar',
		flower: 'Goldenrod',
		nickname: 'Bluegrass State'
	},
	la: {
		name: 'Louisiana',
		abbr: 'LA',
		capitol: 'Baton Rouge',
		pop: '4,625,470',
		statehood: '1812',
		mammal: 'Black Bear',
		bird: 'Brown Pelican',
		tree: 'Bald Cypress',
		flower: 'Magnolia',
		nickname: 'Pelican State'
	},
	me: {
		name: 'Maine',
		abbr: 'ME',
		capitol: 'Augusta',
		pop: '4,625,470',
		statehood: '1820',
		mammal: 'Moose',
		bird: 'Chickadee',
		tree: 'Eastern White Pine',
		flower: 'White Pine Cone and Tassle',
		nickname: 'Pine Tree State'
	},
	md: {
		name: 'Maryland',
		abbr: 'MD',
		capitol: 'Annapolis',
		pop: '4,625,470',
		statehood: '1788',
		mammal: 'Thoroughbred Horse',
		bird: 'Baltimore Oriole',
		tree: 'White Oak',
		flower: 'Black-Eyed Susan',
		nickname: 'Old Line State'
	},
	ma: {
		name: 'Massachusetts',
		abbr: 'MA',
		capitol: 'Boston',
		pop: '6,692,824',
		statehood: '1788',
		mammal: 'Right Whale',
		bird: 'Black-Capped Chickadee',
		tree: 'American Elm',
		flower: 'Mayflower',
		nickname: 'Bay State'
	},
	mi: {
		name: 'Michigan',
		abbr: 'MI',
		capitol: 'Lansing',
		pop: '9,895,622',
		statehood: '1837',
		mammal: 'White-Tailed Deer',
		bird: 'Robin',
		tree: 'White Pine',
		flower: 'Apple Blossom',
		nickname: 'Wolverine State/Great Lake State'
	},
	mn: {
		name: 'Minnesota',
		abbr: 'MN',
		capitol: 'Saint Paul',
		pop: '5,420,380',
		statehood: '1858',
		mammal: 'N/A',
		bird: 'Loon',
		tree: 'Norway Pine',
		flower: 'Lady Slipper',
		nickname: 'North Star State/Land of 10,000 Lakes'
	},
	ms: {
		name: 'Mississippi',
		abbr: 'MS',
		capitol: 'Jackson',
		pop: '2,991,207',
		statehood: '1817',
		mammal: 'Bottlenosed Dolphin',
		bird: 'Mockingbird',
		tree: 'Magnolia',
		flower: 'Magnolia',
		nickname: 'Magnolia State'
	},
	mo: {
		name: 'Missouri',
		abbr: 'MO',
		capitol: 'Jefferson City',
		pop: '6,044,171',
		statehood: '1821',
		mammal: 'Missouri Mule',
		bird: 'Bluebird',
		tree: 'Flowering Dogwood',
		flower: 'White Hawthorn Blossom',
		nickname: 'Show Me State'
	},
	mt: {
		name: 'Montana',
		abbr: 'MT',
		capitol: 'Helena',
		pop: '1,015,165',
		statehood: '1889',
		mammal: 'Grizzly Bear',
		bird: 'Western Meadowlark',
		tree: 'Ponderosa Pine',
		flower: 'Bitterroot',
		nickname: 'Treasure State'
	},
	ne: {
		name: 'Nebraska',
		abbr: 'NE',
		capitol: 'Lincoln',
		pop: '1,868,516',
		statehood: '1867',
		mammal: 'White-Tailed Deer',
		bird: 'Western Meadowlark',
		tree: 'Cottonwood',
		flower: 'Goldenrod',
		nickname: 'Cornhusker State'
	},
	nv: {
		name: 'Nevada',
		abbr: 'NV',
		capitol: 'Carson City',
		pop: '2,790,136',
		statehood: '1864',
		mammal: 'Desert Bighorn Sheep',
		bird: 'Mountain Bluebird',
		tree: 'Single-Leaf Piñon',
		flower: 'Sagebrush',
		nickname: 'The Silver State'
	},
	nh: {
		name: 'New Hampshire',
		abbr: 'NH',
		capitol: 'Concord',
		pop: '1,323,459',
		statehood: '1788',
		mammal: 'White-Tailed Deer',
		bird: 'Purple Finch',
		tree: 'White Birch',
		flower: 'Purple Lilac',
		nickname: 'Granite State'
	},
	nj: {
		name: 'New Jersey',
		abbr: 'NJ',
		capitol: 'Trenton',
		pop: '1,323,459',
		statehood: '1787',
		mammal: 'Horse',
		bird: 'Eastern Goldfinch',
		tree: 'Red Oak',
		flower: 'Common Violet',
		nickname: 'Garden State'
	},
	nm: {
		name: 'New Mexico',
		abbr: 'NM',
		capitol: 'Santa Fe',
		pop: '1,323,459',
		statehood: '1912',
		mammal: 'American Black Bear',
		bird: 'Greater Roadrunner',
		tree: 'Piñon Pine',
		flower: 'Soaptree Yucca',
		nickname: 'Land of Enchantment'
	},
	ny: {
		name: 'New York',
		abbr: 'NY',
		capitol: 'Albany',
		pop: '19,651,127',
		statehood: '1788',
		mammal: 'Beaver',
		bird: 'Bluebird',
		tree: 'Sugar Maple',
		flower: 'Rose',
		nickname: 'Empire State'
	},
	nc: {
		name: 'North Carolina',
		abbr: 'NC',
		capitol: 'Raleigh',
		pop: '9,848,060',
		statehood: '1789',
		mammal: 'Gray Squirrel',
		bird: 'Cardinal',
		tree: 'Pine',
		flower: 'Dogwood',
		nickname: 'Old North State/Tar Heel State'
	},
	nd: {
		name: 'North Dakota',
		abbr: 'ND',
		capitol: 'Bismarck',
		pop: '723,393',
		statehood: '1889',
		mammal: 'Nokota Horse',
		bird: 'Western Meadowlark',
		tree: 'American Elm',
		flower: 'Wild Prairie Rose',
		nickname: 'Peace Garden State/Flickertail State/Roughrider State'
	},
	oh: {
		name: 'Ohio',
		abbr: 'OH',
		capitol: 'Columbus',
		pop: '11,570,808',
		statehood: '1803',
		mammal: 'White-Tailed Deer',
		bird: 'Cardinal',
		tree: 'Ohio Buckeye',
		flower: 'Red Carnation',
		nickname: 'Buckeye State'
	},
	ok: {
		name: 'Oklahoma',
		abbr: 'OK',
		capitol: 'Oklahoma City',
		pop: '3,850,568',
		statehood: '1907',
		mammal: 'Raccoon',
		bird: 'Scissor-Tailed Flycatcher',
		tree: 'Redbud',
		flower: 'Red Carnation',
		nickname: 'Sooner State'
	},
	or: {
		name: 'Oregon',
		abbr: 'OR',
		capitol: 'Salem',
		pop: '3,930,065',
		statehood: '1859',
		mammal: 'American Beaver',
		bird: 'Western Meadowlark',
		tree: 'Douglas-Fir',
		flower: 'Oregon Grape',
		nickname: 'Beaver State'
	},
	pa: {
		name: 'Pennsylvania',
		abbr: 'PA',
		capitol: 'Harrisburg',
		pop: '12,773,801',
		statehood: '1787',
		mammal: 'White-Tailed Deer',
		bird: 'Ruffed Grouse',
		tree: 'Hemlock',
		flower: 'Mountain Laurel',
		nickname: 'Keystone State'
	},
	ri: {
		name: 'Rhode Island',
		abbr: 'RI',
		capitol: 'Providence',
		pop: '1,051,511',
		statehood: '1790',
		mammal: 'N/A',
		bird: 'Rhode Island Hen',
		tree: 'Red Maple',
		flower: 'Violet',
		nickname: 'The Ocean State'
	},
	sc: {
		name: 'South Carolina',
		abbr: 'SC',
		capitol: 'Columbia',
		pop: '4,774,839',
		statehood: '1788',
		mammal: 'White-Tailed Deer',
		bird: 'Carolina Wren',
		tree: 'Sabal Palmetto',
		flower: 'Yellow Jessamine',
		nickname: 'Palmetto State'
	},
	sd: {
		name: 'South Dakota',
		abbr: 'SD',
		capitol: 'Pierre',
		pop: '844,877',
		statehood: '1889',
		mammal: 'Coyote',
		bird: 'Chinese Ring-Necked Pheasant',
		tree: 'Black Hills Spruce',
		flower: 'Pasque',
		nickname: 'Mount Rushmore State'
	},
	tn: {
		name: 'Tennessee',
		abbr: 'TN',
		capitol: 'Nashville',
		pop: '6,495,978',
		statehood: '1796',
		mammal: 'Raccoon',
		bird: 'Mockingbird',
		tree: 'Tulip Poplar',
		flower: 'Iris',
		nickname: 'Volunteer State'
	},
	tx: {
		name: 'Texas',
		abbr: 'TX',
		capitol: 'Austin',
		pop: '26,448,193',
		statehood: '1845',
		mammal: 'Longhorn',
		bird: 'Mockingbird',
		tree: 'Pecan',
		flower: 'Bluebonnet',
		nickname: 'Lone Star State'
	},
	ut: {
		name: 'Utah',
		abbr: 'UT',
		capitol: 'Salt Lake City',
		pop: '2,900,872',
		statehood: '1896',
		mammal: 'Rock-Mountain Elk',
		bird: 'California Gull',
		tree: 'Blue Spruce',
		flower: 'Sego Lily',
		nickname: 'The Beehive State'
	},
	vt: {
		name: 'Vermont',
		abbr: 'VT',
		capitol: 'Montpelier',
		pop: '626,630',
		statehood: '1791',
		mammal: 'Morgan Horse',
		bird: 'Hermit Thrush',
		tree: 'Sugar Maple',
		flower: 'Red Clover',
		nickname: 'Green Mountain State'
	},
	va: {
		name: 'Virginia',
		abbr: 'VA',
		capitol: 'Richmond',
		pop: '8,260,405',
		statehood: '1788',
		mammal: 'Virginia Big-Eared Bat',
		bird: 'Cardinal',
		tree: 'Flowering Dogwood',
		flower: 'Flowering Dogwood',
		nickname: 'Old Dominion State'
	},
	wa: {
		name: 'Washington',
		abbr: 'WA',
		capitol: 'Olympia',
		pop: '6,971,406',
		statehood: '1889',
		mammal: 'Olympic Marmot',
		bird: 'Willow Goldfinch',
		tree: 'Western Hemlock',
		flower: 'Rhododendron',
		nickname: 'The Evergreen State'
	},
	dc: {
		name: 'Washington, District of Columbia',
		abbr: 'DC',
		capitol: 'N/A',
		pop: '658,893',
		statehood: 'N/A',
		mammal: 'N/A',
		bird: 'Wood Thrush',
		tree: 'Scarlet Oak',
		flower: 'American Beauty Rose',
		nickname: 'Federal City'
	},
	wv: {
		name: 'West Virginia',
		abbr: 'WV',
		capitol: 'Charleston',
		pop: '1,854,304',
		statehood: '1863',
		mammal: 'Black Bear',
		bird: 'Cardinal',
		tree: 'Sugar Maple',
		flower: 'Rhododendron',
		nickname: 'Mountain State'
	},
	wi: {
		name: 'Wisconsin',
		abbr: 'WI',
		capitol: 'Madison',
		pop: '5,742,713',
		statehood: '1848',
		mammal: 'Badger',
		bird: 'Robin',
		tree: 'Sugar Maple',
		flower: 'Wood Violet',
		nickname: 'Badger State'
	},
	wy: {
		name: 'Wyoming',
		abbr: 'WY',
		capitol: 'Cheyenne',
		pop: '582,658',
		statehood: '1890',
		mammal: 'American Buffalo',
		bird: 'Western Meadlowlark',
		tree: 'Plains Cottonwood',
		flower: 'Indian Paintbrush',
		nickname: 'Equality State'
	}
};

var arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3 ];
 
var filtered = arr.filter(function(x) {
     return x !== undefined;
});
 
console.log(filtered);