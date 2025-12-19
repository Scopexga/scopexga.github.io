// Configuration file - Easy to update business information

const CONFIG = {
    // Business Information
    businessName: "ANONY STORE",
    businessEmail: "anonytopup.store@gmail.com",
    businessPhone: "+220 678 7259",
    businessWhatsApp: "2206787259",
    businessAddress: "Gambia, West Africa",
    
    // WhatsApp Verification Settings
    whatsappVerification: {
        enabled: true,
        phoneNumber: "2206787259",
        messageTemplate: "ANONY STORE: Hi {customerName}, to confirm order #{orderId}, reply with code {otp}. If this isn't you, reply NO."
    },
    
    // Payment Methods
    paymentMethods: [
        { id: "wave", name: "wave", icon: "fas fa-wave-square" },
        { id: "aps", name: "APS Wallet", icon: "fas fa-wallet" },
        { id: "comcach", name: "Comcach", icon: "fas fa-mobile-alt" }
    ],
    
    // Trust Features
    trustFeatures: [
        { icon: "fas fa-shield-alt", text: "100% Secure & Safe" },
        { icon: "fas fa-bolt", text: "Instant Delivery" },
        { icon: "fas fa-headset", text: "24/7 Support" },
        { icon: "fas fa-medal", text: "Best Prices" }
    ],
    
    // Delivery Information
    deliveryInfo: {
        averageTime: "5-15 minutes",
        instantDelivery: true,
        supportHours: "24/7"
    },
    
    // Social Links
    socialLinks: {
        whatsapp: "https://wa.me/2206787259",
        email: "mailto:anonytopup.store@gmail.com"
    },
    
    // WhatsApp Groups
    whatsappGroups: [
        {
            name: "Free Fire Group",
            link: "https://chat.whatsapp.com/DFecMvt2qZwENXvF8MZxM0",
            icon: "fas fa-fire",
            description: "Free Fire community for tips and diamond deals"
        },
        {
            name: "Roblox Group",
            link: "https://chat.whatsapp.com/JwKjY3DJH0RFWGwKC2Cjte",
            icon: "fas fa-cube",
            description: "Connect with Roblox players"
        },
        {
            name: "Blood Strike Group",
            link: "https://chat.whatsapp.com/L13nMADXCjh9epO5C32pmA",
            icon: "fas fa-skull-crossbones",
            description: "Blood Strike community for exclusive offers"
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}