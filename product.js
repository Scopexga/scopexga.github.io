// Products Data - Easy to update prices and add new products

const PRODUCTS = {
    // Free Fire Products
    "Free Fire": [
        {
            id: "ff-1",
            name: "110 Diamonds",
            price: 100,
            oldPrice: 110,
            discount: "9% OFF",
            perUnit: "D0.91 per diamond",
            features: ["Instant delivery", "No login required", "24/7 support"],
            popular: false
        },
        {
            id: "ff-2",
            name: "231 Diamonds",
            price: 200,
            oldPrice: 210,
            discount: "5% OFF",
            perUnit: "D0.87 per diamond",
            features: ["Best value", "Instant delivery", "Extra bonus"],
            popular: false
        },
        {
            id: "ff-3",
            name: "341 Diamonds",
            price: 304,
            oldPrice: 338,
            discount: "10% OFF",
            perUnit: "D0.89 per diamond",
            features: ["Popular choice", "Fast delivery", "Reliable service"],
            popular: false
        },
        {
            id: "ff-4",
            name: "581 Diamonds",
            price: 504,
            oldPrice: 593,
            discount: "15% OFF",
            perUnit: "D0.87 per diamond",
            features: ["Great value", "Instant delivery", "Premium support"],
            popular: false
        },
        {
            id: "ff-5",
            name: "1,188 Diamonds",
            price: 931,
            oldPrice: 1164,
            discount: "20% OFF",
            perUnit: "D0.78 per diamond",
            features: ["Most popular", "Extra bonus", "Priority support"],
            popular: true
        },
        {
            id: "ff-6",
            name: "2,420 Diamonds",
            price: 1805,
            oldPrice: 2410,
            discount: "25% OFF",
            perUnit: "D0.75 per diamond",
            features: ["Best deal", "Maximum value", "VIP support"],
            popular: false
        },
        {
            id: "ff-7",
            name: "Monthly Membership",
            price: 903,
            features: ["30 days premium", "Daily rewards", "Exclusive perks"],
            popular: false
        },
        {
            id: "ff-8",
            name: "Weekly Membership",
            price: 276,
            features: ["7 days access", "Special rewards", "Flexible plan"],
            popular: false
        },
        {
            id: "ff-9",
            name: "Booyah Pass",
            price: 285,
            features: ["Exclusive items", "Battle rewards", "Limited time"],
            popular: false
        },
        {
            id: "ff-10",
            name: "Level Up Pass",
            price: 451,
            features: ["Level boost", "Exclusive rewards", "Faster progress"],
            popular: false
        },
        {
            id: "ff-11",
            name: "Evo Pass (1 Month)",
            price: 546,
            features: ["Evolution items", "Monthly rewards", "Special perks"],
            popular: false
        }
    ],

    // PUBG Products
    "PUBG": [
        {
            id: "pubg-1",
            name: "60 UC",
            price: 90,
            perUnit: "D1.5 per UC",
            features: ["Instant delivery", "Global server", "24/7 support"],
            popular: false
        },
        {
            id: "pubg-2",
            name: "325 UC (300+25)",
            price: 392,
            oldPrice: 425,
            discount: "8% OFF",
            perUnit: "D1.21 per UC",
            features: ["Best value", "Extra bonus", "Fast delivery"],
            popular: false
        },
        {
            id: "pubg-3",
            name: "660 UC (600+60)",
            price: 776,
            oldPrice: 860,
            discount: "10% OFF",
            perUnit: "D1.18 per UC",
            features: ["Great deal", "Extra UC bonus", "Priority service"],
            popular: false
        },
        {
            id: "pubg-4",
            name: "1,800 UC (1500+300)",
            price: 1864,
            oldPrice: 2275,
            discount: "18% OFF",
            perUnit: "D1.04 per UC",
            features: ["Premium pack", "Massive bonus", "VIP support"],
            popular: true
        },
        {
            id: "pubg-5",
            name: "3,850 UC (3000+850)",
            price: 3620,
            oldPrice: 4638,
            discount: "22% OFF",
            perUnit: "D0.94 per UC",
            features: ["Ultimate pack", "Maximum bonus", "Instant delivery"],
            popular: false
        }
    ],

    // Blood Strike Products
    "Blood Strike": [
        {
            id: "bs-1",
            name: "105 Gold (100+5)",
            price: 85,
            perUnit: "D0.81 per gold",
            features: ["Instant delivery", "No login required", "24/7 support"],
            popular: false
        },
        {
            id: "bs-2",
            name: "320 Gold (300+20)",
            price: 225,
            perUnit: "D0.70 per gold",
            features: ["Basic pack", "Quick delivery", "Reliable service"],
            popular: false
        },
        {
            id: "bs-3",
            name: "540 Gold (500+40)",
            price: 367,
            oldPrice: 407,
            discount: "10% OFF",
            perUnit: "D0.68 per gold",
            features: ["Popular choice", "Extra bonus", "Fast delivery"],
            popular: false
        },
        {
            id: "bs-4",
            name: "1,100 Gold (1000+100)",
            price: 750,
            oldPrice: 833,
            discount: "10% OFF",
            perUnit: "D0.68 per gold",
            features: ["Great value", "Bonus gold", "Premium support"],
            popular: false
        },
        {
            id: "bs-5",
            name: "2,260 Gold (2000+260)",
            price: 1450,
            oldPrice: 1611,
            discount: "10% OFF",
            perUnit: "D0.64 per gold",
            features: ["Special offer", "Extra bonus", "Quick delivery"],
            popular: false
        },
        {
            id: "bs-6",
            name: "5,800 Gold (5000+800)",
            price: 3500,
            oldPrice: 4260,
            discount: "18% OFF",
            perUnit: "D0.60 per gold",
            features: ["Best seller", "Massive bonus", "Priority service"],
            popular: true
        },
        {
            id: "bs-7",
            name: "51 Gold (50+1)",
            price: 36,
            oldPrice: 40,
            discount: "10% OFF",
            perUnit: "D0.71 per gold",
            features: ["Small pack", "Quick delivery", "Instant support"],
            popular: false
        },
        {
            id: "bs-8",
            name: "Strike Pass Elite",
            price: 350,
            features: ["Elite Pass Access", "Premium rewards", "VIP support"],
            popular: false
        },
        {
            id: "bs-9",
            name: "Strike Pass Premium",
            price: 750,
            features: ["Premium Pass Access", "Exclusive rewards", "VIP support"],
            popular: true
        }
    ],

    // Roblox Products
    "Roblox": [
        {
            id: "rbx-1",
            name: "80 Robux",
            price: 210,
            perUnit: "D2.63 per Robux",
            features: ["Instant delivery", "Premium membership", "24/7 support"],
            popular: false
        },
        {
            id: "rbx-2",
            name: "500 Robux",
            price: 500,
            oldPrice: 525,
            discount: "5% OFF",
            perUnit: "D1.00 per Robux",
            features: ["Best value", "Fast delivery", "Reliable service"],
            popular: false
        },
        {
            id: "rbx-3",
            name: "1,000 Robux",
            price: 980,
            oldPrice: 1089,
            discount: "10% OFF",
            perUnit: "D0.98 per Robux",
            features: ["Popular choice", "Premium support", "Quick delivery"],
            popular: false
        },
        {
            id: "rbx-4",
            name: "2,000 Robux",
            price: 1800,
            oldPrice: 2000,
            discount: "10% OFF",
            perUnit: "D0.90 per Robux",
            features: ["Great deal", "Extra bonus", "Priority service"],
            popular: false
        },
        {
            id: "rbx-5",
            name: "5,250 Robux",
            price: 4300,
            oldPrice: 4789,
            discount: "10% OFF",
            perUnit: "D0.82 per Robux",
            features: ["Premium pack", "Massive value", "VIP support"],
            popular: false
        },
        {
            id: "rbx-6",
            name: "11,000 Robux",
            price: 8350,
            oldPrice: 11128,
            discount: "25% OFF",
            perUnit: "D0.76 per Robux",
            features: ["Best value", "Premium membership", "24/7 support"],
            popular: true
        }
    ],

    // Apple Gift Cards
    "Apple Gift Card": [
        {
            id: "apple-1",
            name: "$2 Apple Gift Card",
            price: 210,
            perUnit: "D105 per $1",
            features: ["US Apple Store", "In App Purchase", "Setup guide"],
            popular: false
        },
        {
            id: "apple-2",
            name: "$5 Apple Gift Card",
            price: 500,
            perUnit: "D100 per $1",
            features: ["US Apple Store", "In App Purchase", "Setup guide"],
            popular: false
        },
        {
            id: "apple-3",
            name: "$10 Apple Gift Card",
            price: 950,
            oldPrice: 1056,
            discount: "10% OFF",
            perUnit: "D95 per $1",
            features: ["US Apple Store", "In App Purchase", "Setup guide"],
            popular: false
        },
        {
            id: "apple-4",
            name: "$20 Apple Gift Card",
            price: 1800,
            oldPrice: 2000,
            discount: "10% OFF",
            perUnit: "D90 per $1",
            features: ["US Apple Store", "In App Purchase", "Setup guide"],
            popular: false
        },
        {
            id: "apple-5",
            name: "$25 Apple Gift Card",
            price: 2250,
            oldPrice: 2500,
            discount: "10% OFF",
            perUnit: "D90 per $1",
            features: ["US Apple Store", "In App Purchase", "Setup guide"],
            popular: false
        },
        {
            id: "apple-6",
            name: "$50 Apple Gift Card",
            price: 4300,
            oldPrice: 4789,
            discount: "10% OFF",
            perUnit: "D86 per $1",
            features: ["US Apple Store", "In App Purchase", "Setup guide"],
            popular: false
        },
        {
            id: "apple-7",
            name: "$100 Apple Gift Card",
            price: 8350,
            oldPrice: 10000,
            discount: "17% OFF",
            perUnit: "D83.5 per $1",
            features: ["Best value", "US Apple Store", "In App Purchase"],
            popular: true
        }
    ]
};

// Helper function to get all products
function getAllProducts() {
    const allProducts = [];
    for (const category in PRODUCTS) {
        PRODUCTS[category].forEach(product => {
            product.category = category;
            allProducts.push(product);
        });
    }
    return allProducts;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRODUCTS, getAllProducts };
}