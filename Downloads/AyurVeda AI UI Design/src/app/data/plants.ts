export interface PlantData {
  id: string;
  name: string;
  scientificName: string;
  sanskritName: string;
  quickBenefit: string;
  category: string;
  imageUrl: string;
  heroImageUrl: string;
  
  // Ayurvedic Properties
  rasa: string; // Taste
  virya: string; // Potency
  vipaka: string; // Post-digestive effect
  
  // Detailed Information
  overview: string;
  advantages: string[];
  precautions: string[];
  
  // Preparation/Usage
  preparations: {
    method: string;
    steps: string[];
  }[];
  
  // Botanical Info
  habitat: string;
  physicalCharacteristics: string;
}

export const plantsData: PlantData[] = [
  {
    id: "tulsi",
    name: "Tulsi",
    scientificName: "Ocimum sanctum",
    sanskritName: "Surasa",
    quickBenefit: "Boosts Immunity",
    category: "Aromatic",
    imageUrl: "https://images.unsplash.com/photo-1754493930441-2550a605e805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    heroImageUrl: "https://images.unsplash.com/photo-1754493930441-2550a605e805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
    rasa: "Pungent, Bitter",
    virya: "Hot",
    vipaka: "Pungent",
    overview: "Tulsi, also known as Holy Basil, is revered in Ayurveda as the 'Queen of Herbs.' It has been used for thousands of years to support respiratory health, reduce stress, and boost immunity. This sacred plant is known for its adaptogenic properties that help the body cope with various stressors.",
    advantages: [
      "Enhances immune system function",
      "Reduces respiratory congestion and cough",
      "Helps manage stress and anxiety",
      "Supports healthy blood sugar levels",
      "Acts as a natural antioxidant",
      "Promotes healthy skin and wound healing"
    ],
    precautions: [
      "May lower blood sugar levels - monitor if diabetic",
      "Avoid during pregnancy without consultation",
      "May interact with blood-thinning medications",
      "Not recommended for those undergoing fertility treatment"
    ],
    preparations: [
      {
        method: "Tulsi Tea",
        steps: [
          "Take 10-15 fresh tulsi leaves or 1 teaspoon dried leaves",
          "Boil 1 cup of water",
          "Add tulsi leaves to boiling water",
          "Simmer for 5-7 minutes",
          "Strain and add honey if desired",
          "Drink warm, 1-2 times daily"
        ]
      },
      {
        method: "Tulsi Powder",
        steps: [
          "Take 1/4 to 1/2 teaspoon of dried tulsi powder",
          "Mix with warm water or honey",
          "Consume on an empty stomach in the morning",
          "Or mix into smoothies and juices"
        ]
      }
    ],
    habitat: "Native to the Indian subcontinent, thrives in warm, tropical climates. Grows well in well-drained soil with full to partial sunlight.",
    physicalCharacteristics: "An aromatic perennial herb growing 30-60 cm tall with purple or green leaves. Has square stems and small purple or white flowers arranged in spikes."
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    sanskritName: "Ashwagandha",
    quickBenefit: "Reduces Stress & Anxiety",
    category: "Adaptogen",
    imageUrl: "https://images.unsplash.com/photo-1658315216920-c8da89ffa140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    heroImageUrl: "https://images.unsplash.com/photo-1658315216920-c8da89ffa140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
    rasa: "Bitter, Astringent, Sweet",
    virya: "Hot",
    vipaka: "Sweet",
    overview: "Ashwagandha is one of the most powerful herbs in Ayurvedic healing. Known as 'Indian Ginseng,' it's classified as a Rasayana (rejuvenative) and is particularly valued for its ability to restore vitality, reduce stress, and enhance overall well-being. The name translates to 'smell of horse,' referring to its unique smell and the vigor it provides.",
    advantages: [
      "Reduces cortisol levels and manages stress",
      "Enhances stamina and physical performance",
      "Improves memory and cognitive function",
      "Supports thyroid function",
      "Promotes restful sleep",
      "Boosts testosterone and male fertility",
      "Strengthens immune system"
    ],
    precautions: [
      "Avoid during pregnancy and breastfeeding",
      "May interact with thyroid medications",
      "Can increase drowsiness - avoid with sedatives",
      "Not suitable for autoimmune conditions without medical advice",
      "May lower blood pressure excessively"
    ],
    preparations: [
      {
        method: "Ashwagandha Milk (Moon Milk)",
        steps: [
          "Warm 1 cup of milk (dairy or plant-based)",
          "Add 1/2 teaspoon ashwagandha powder",
          "Mix in 1/4 teaspoon cinnamon powder",
          "Add honey or maple syrup to taste",
          "Stir well and simmer for 2-3 minutes",
          "Drink before bedtime for better sleep"
        ]
      },
      {
        method: "Ashwagandha Capsules",
        steps: [
          "Take 300-500mg standardized extract",
          "Consume with water after meals",
          "Take twice daily, morning and evening",
          "Continue for at least 8 weeks for optimal results"
        ]
      }
    ],
    habitat: "Found in dry regions of India, Middle East, and parts of Africa. Prefers dry, sandy soil and requires minimal water once established.",
    physicalCharacteristics: "A small woody shrub growing up to 1.5 meters tall. Has oval leaves, yellow flowers, and orange-red berries. The roots are the primary medicinal part, thick and fleshy with a distinctive odor."
  },
  {
    id: "neem",
    name: "Neem",
    scientificName: "Azadirachta indica",
    sanskritName: "Nimba",
    quickBenefit: "Purifies Blood & Skin",
    category: "Purifier",
    imageUrl: "https://images.unsplash.com/photo-1687945906634-25c66199d941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    heroImageUrl: "https://images.unsplash.com/photo-1687945906634-25c66199d941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
    rasa: "Bitter, Astringent",
    virya: "Cold",
    vipaka: "Pungent",
    overview: "Neem is called the 'Village Pharmacy' in India due to its wide-ranging medicinal properties. Every part of the neem tree - leaves, bark, seeds, and flowers - has therapeutic value. It's particularly renowned for its antibacterial, antifungal, and blood-purifying properties.",
    advantages: [
      "Purifies blood and detoxifies the body",
      "Treats various skin conditions (acne, eczema, psoriasis)",
      "Powerful antibacterial and antifungal agent",
      "Supports oral health and prevents dental diseases",
      "Helps manage diabetes by regulating blood sugar",
      "Boosts immune system function",
      "Natural insect repellent"
    ],
    precautions: [
      "Not safe during pregnancy - may cause miscarriage",
      "Avoid in children under 5 years",
      "May lower blood sugar excessively",
      "Can reduce fertility - avoid if trying to conceive",
      "May interact with immunosuppressant medications"
    ],
    preparations: [
      {
        method: "Neem Leaf Tea",
        steps: [
          "Take 10-12 fresh neem leaves or 1 teaspoon dried powder",
          "Boil 2 cups of water",
          "Add neem leaves to boiling water",
          "Simmer for 5 minutes",
          "Strain and cool slightly",
          "Drink on empty stomach in the morning"
        ]
      },
      {
        method: "Neem Paste for Skin",
        steps: [
          "Grind fresh neem leaves with a little water",
          "Make a smooth paste",
          "Apply to affected skin areas",
          "Leave for 15-20 minutes",
          "Rinse with lukewarm water",
          "Use 2-3 times weekly for skin conditions"
        ]
      }
    ],
    habitat: "Native to the Indian subcontinent and widely cultivated in tropical and semi-tropical regions. Thrives in hot, dry climates and poor soil conditions.",
    physicalCharacteristics: "A large evergreen tree growing up to 20 meters tall. Has compound leaves with serrated leaflets, white fragrant flowers, and olive-like drupes that turn yellow when ripe."
  },
  {
    id: "turmeric",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    sanskritName: "Haridra",
    quickBenefit: "Anti-Inflammatory Powerhouse",
    category: "Spice",
    imageUrl: "https://images.unsplash.com/photo-1768729341217-0e11cb959252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    heroImageUrl: "https://images.unsplash.com/photo-1768729341217-0e11cb959252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
    rasa: "Bitter, Pungent",
    virya: "Hot",
    vipaka: "Pungent",
    overview: "Turmeric is a golden spice that has been used in Ayurvedic medicine for over 4,000 years. Its active compound, curcumin, is responsible for its powerful anti-inflammatory and antioxidant properties. Turmeric is considered a complete healer in Ayurveda, beneficial for all doshas.",
    advantages: [
      "Powerful natural anti-inflammatory",
      "Strong antioxidant properties",
      "Supports joint health and reduces arthritis pain",
      "Aids digestion and liver function",
      "Promotes wound healing and skin health",
      "May help prevent and treat cancer",
      "Supports brain health and may prevent Alzheimer's",
      "Natural blood purifier"
    ],
    precautions: [
      "May increase bleeding risk - avoid with blood thinners",
      "Can worsen gallbladder problems",
      "May interfere with iron absorption in high doses",
      "Avoid in bile duct obstruction",
      "May interact with diabetes medications"
    ],
    preparations: [
      {
        method: "Golden Milk (Haldi Doodh)",
        steps: [
          "Heat 1 cup of milk",
          "Add 1/2 teaspoon turmeric powder",
          "Add a pinch of black pepper (enhances absorption)",
          "Add 1/4 teaspoon cinnamon",
          "Sweeten with honey",
          "Simmer for 3-4 minutes, stirring constantly",
          "Drink warm before bedtime"
        ]
      },
      {
        method: "Turmeric Paste",
        steps: [
          "Mix 1 teaspoon turmeric powder with water",
          "Create a thick paste",
          "Apply to minor cuts, burns, or skin irritations",
          "Leave for 15 minutes",
          "Rinse with warm water",
          "Use daily for skin brightening"
        ]
      }
    ],
    habitat: "Native to South and Southeast Asia, particularly India. Requires temperatures between 20-30°C and considerable annual rainfall to thrive.",
    physicalCharacteristics: "A perennial herbaceous plant reaching up to 1 meter tall. Has large oblong leaves and yellow flowers. The rhizome (underground stem) is the part used, deep orange-yellow inside with a tough brown skin."
  },
  {
    id: "amla",
    name: "Amla",
    scientificName: "Phyllanthus emblica",
    sanskritName: "Amalaki",
    quickBenefit: "Vitamin C Powerhouse",
    category: "Fruit",
    imageUrl: "https://images.unsplash.com/photo-1694975350184-732334941a0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    heroImageUrl: "https://images.unsplash.com/photo-1694975350184-732334941a0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
    rasa: "Sour, Sweet, Bitter, Pungent, Astringent",
    virya: "Cold",
    vipaka: "Sweet",
    overview: "Amla, or Indian Gooseberry, is considered one of the most important herbs in Ayurveda. It's unique in containing five of the six tastes (all except salty), making it a powerful rejuvenative. Amla is exceptionally rich in Vitamin C and antioxidants, supporting overall health and longevity.",
    advantages: [
      "Extremely high in Vitamin C and antioxidants",
      "Strengthens immune system significantly",
      "Promotes healthy, lustrous hair growth",
      "Improves digestion and metabolism",
      "Supports eye health and vision",
      "Enhances skin complexion and reduces aging",
      "Regulates blood sugar levels",
      "Supports heart health and reduces cholesterol"
    ],
    precautions: [
      "May lower blood sugar - monitor if diabetic",
      "Can increase bleeding risk in high doses",
      "May worsen cold symptoms due to cooling nature",
      "Avoid with active ulcers (too acidic)",
      "May interact with anticoagulant medications"
    ],
    preparations: [
      {
        method: "Amla Juice",
        steps: [
          "Take 2-3 fresh amla fruits",
          "Deseed and chop them",
          "Blend with 1 cup water",
          "Strain to remove pulp",
          "Add honey to taste",
          "Drink fresh in the morning on empty stomach",
          "Or use 2 tablespoons concentrated amla juice with water"
        ]
      },
      {
        method: "Amla Candy/Murabba",
        steps: [
          "Consume 1-2 pieces of amla murabba (preserved amla)",
          "Eat after meals as a digestive aid",
          "Or take 1 teaspoon amla powder",
          "Mix with honey",
          "Consume twice daily"
        ]
      }
    ],
    habitat: "Native to India and found throughout tropical and subtropical regions of Asia. Grows in diverse climates from sea level to 1800 meters elevation.",
    physicalCharacteristics: "A medium-sized deciduous tree growing 8-18 meters tall. Has feathery compound leaves, greenish-yellow flowers, and round, pale green to yellow fruits with a hard seed inside. The fruit is extremely sour and astringent when fresh."
  },
  {
    id: "brahmi",
    name: "Brahmi",
    scientificName: "Bacopa monnieri",
    sanskritName: "Brahmi",
    quickBenefit: "Enhances Memory & Focus",
    category: "Nootropic",
    imageUrl: "https://images.unsplash.com/photo-1603050979049-fd4ef4f9014d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    heroImageUrl: "https://images.unsplash.com/photo-1603050979049-fd4ef4f9014d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
    rasa: "Bitter, Sweet",
    virya: "Cold",
    vipaka: "Sweet",
    overview: "Brahmi is named after Brahma, the Hindu god of creation, reflecting its role in enhancing cognitive function and consciousness. This herb is one of the most important Medhya Rasayanas (brain tonics) in Ayurveda, used to improve memory, learning, and concentration.",
    advantages: [
      "Significantly improves memory and learning",
      "Enhances concentration and mental clarity",
      "Reduces anxiety and stress",
      "Supports healthy brain aging",
      "Improves cognitive processing speed",
      "Acts as a neuroprotective agent",
      "Helps with ADHD symptoms",
      "Supports healthy sleep patterns"
    ],
    precautions: [
      "May cause digestive upset in some individuals",
      "Can increase thyroid hormone levels",
      "May interact with sedative medications",
      "Avoid with bradycardia (slow heart rate)",
      "Not recommended during pregnancy without supervision"
    ],
    preparations: [
      {
        method: "Brahmi Tea",
        steps: [
          "Take 1 teaspoon dried brahmi leaves or powder",
          "Add to 1 cup boiling water",
          "Steep for 10 minutes",
          "Strain and add honey if desired",
          "Drink twice daily, morning and evening"
        ]
      },
      {
        method: "Brahmi Ghee",
        steps: [
          "Take 1/4 teaspoon brahmi powder",
          "Mix with 1 teaspoon warm ghee (clarified butter)",
          "Consume on empty stomach in the morning",
          "Or spread on toast",
          "Use daily for best cognitive benefits"
        ]
      }
    ],
    habitat: "Found in wetlands throughout India and other tropical regions. Grows in marshy areas, along streams, and in rice paddies. Prefers warm, humid conditions.",
    physicalCharacteristics: "A creeping perennial herb with small, succulent leaves arranged oppositely on the stem. Has small white or light purple flowers with four to five petals. Grows close to the ground, forming dense mats in wet areas."
  }
];
