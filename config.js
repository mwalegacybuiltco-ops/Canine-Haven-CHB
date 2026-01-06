// config.js
// Paste your Beacons / website pages and Google Forms here.
window.CHB_CONFIG = {
  affiliate: {
    pin: "1234",          // change this
    commissionRate: 0.15  // used only for estimates
  },

  // PUBLIC (customers can see these)
  publicPages: {
    becomeAffiliate: "https://forms.gle/PASTE_BECOME_AFFILIATE",
    support: "https://forms.gle/PASTE_SUPPORT",
    shippingReturns: "https://beacons.ai/PASTE_SHIPPING_RETURNS",
    faqs: "https://beacons.ai/PASTE_FAQS",
    contact: "https://beacons.ai/PASTE_CONTACT"
  },

  // MENU LINKS (these are “website pages” you said you’ll add)
  menuLinks: {
    shop: {
      apparel: "https://beacons.ai/PASTE_APPAREL_PAGE",
      walkEssentials: "https://beacons.ai/PASTE_WALK_PAGE",
      accessories: "https://beacons.ai/PASTE_ACCESSORIES_PAGE",
      bundles: "https://beacons.ai/PASTE_BUNDLES_PAGE",
      petParentMerch: "https://beacons.ai/PASTE_PET_PARENT_MERCH_PAGE"
    },
    about: {
      ourStory: "https://beacons.ai/PASTE_OUR_STORY",
      community: "https://instagram.com/PASTE_INSTAGRAM"
    },
    workWithUs: {
      shareEarn: "https://beacons.ai/PASTE_SHARE_EARN"
    }
  },

  // AFFILIATE BACK OFFICE (hidden unless unlocked)
  affiliateBackOffice: {
    yourLinkInfo: "https://beacons.ai/PASTE_AFFILIATE_YOUR_LINK_INFO",
    startHere: "https://beacons.ai/PASTE_START_HERE",
    training: "https://beacons.ai/PASTE_TRAINING",
    fourCorners: "https://beacons.ai/PASTE_FOUR_CORNERS",
    teamBuilder: "https://forms.gle/PASTE_TEAM_BUILDER",
    payouts: "https://forms.gle/PASTE_PAYOUTS",
    stats: "https://docs.google.com/spreadsheets/d/PASTE_STATS_SHEET"
  }
};
