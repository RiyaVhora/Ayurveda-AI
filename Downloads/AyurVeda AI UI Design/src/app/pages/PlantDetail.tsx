import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Bookmark, CheckCircle, AlertTriangle } from "lucide-react";
import { plantsData } from "../data/plants";

export function PlantDetail() {
  const { plantId } = useParams();
  const navigate = useNavigate();
  
  const plant = plantsData.find((p) => p.id === plantId);

  if (!plant) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Plant Not Found
        </h2>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
        >
          Return to Dictionary
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pb-12">
      {/* Hero Header with Image */}
      <div className="relative -mt-6 -mx-4 mb-8">
        <div className="relative h-80 overflow-hidden">
          <img
            src={plant.heroImageUrl}
            alt={plant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
          
          {/* Back Button and Bookmark */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
              aria-label="Bookmark"
            >
              <Bookmark className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>

      {/* Identity Section */}
      <div className="mb-8">
        <h1 
          className="text-4xl mb-2 text-primary"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {plant.name}
        </h1>
        <p className="text-lg text-muted-foreground italic mb-1">
          {plant.scientificName}
        </p>
        <p className="text-base text-muted-foreground">
          Sanskrit: <span className="font-medium text-foreground">{plant.sanskritName}</span>
        </p>
      </div>

      {/* Ayurvedic Properties - Pill-shaped Chips */}
      <div className="mb-8">
        <h3 
          className="text-xl mb-4 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Ayurvedic Properties
        </h3>
        <div className="flex flex-wrap gap-3">
          <div className="px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm">
              <strong className="text-primary">Rasa:</strong>{" "}
              <span className="text-foreground">{plant.rasa}</span>
            </span>
          </div>
          <div className="px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm">
              <strong className="text-primary">Virya:</strong>{" "}
              <span className="text-foreground">{plant.virya}</span>
            </span>
          </div>
          <div className="px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm">
              <strong className="text-primary">Vipaka:</strong>{" "}
              <span className="text-foreground">{plant.vipaka}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mb-8 bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h3 
          className="text-xl mb-3 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Overview
        </h3>
        <p className="text-foreground leading-relaxed">
          {plant.overview}
        </p>
      </div>

      {/* Key Advantages */}
      <div className="mb-8 bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h3 
          className="text-xl mb-4 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Key Advantages
        </h3>
        <ul className="space-y-3">
          {plant.advantages.map((advantage, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{advantage}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Precautions */}
      <div className="mb-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 shadow-sm">
        <h3 
          className="text-xl mb-4 text-amber-900"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Precautions & Contraindications
        </h3>
        <ul className="space-y-3">
          {plant.precautions.map((precaution, index) => (
            <li key={index} className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span className="text-amber-900">{precaution}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* How to Use - Preparation Methods */}
      <div className="mb-8 bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h3 
          className="text-xl mb-4 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          How to Use (Preparation)
        </h3>
        <div className="space-y-6">
          {plant.preparations.map((prep, index) => (
            <div key={index}>
              <h4 className="text-lg mb-3 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
                {prep.method}
              </h4>
              <ol className="space-y-2">
                {prep.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                      {stepIndex + 1}
                    </span>
                    <span className="text-foreground pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      {/* Botanical Data */}
      <div className="bg-muted/50 border border-border rounded-2xl p-6 shadow-sm">
        <h3 
          className="text-xl mb-4 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Botanical Data
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-base mb-2 text-primary" style={{ fontWeight: 600 }}>
              Habitat
            </h4>
            <p className="text-foreground">
              {plant.habitat}
            </p>
          </div>
          
          <div>
            <h4 className="text-base mb-2 text-primary" style={{ fontWeight: 600 }}>
              Physical Characteristics
            </h4>
            <p className="text-foreground">
              {plant.physicalCharacteristics}
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 bg-card border border-border rounded-xl p-4">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Disclaimer:</strong> This information is for educational purposes only. 
          Always consult with a qualified Ayurvedic practitioner or healthcare provider before starting any herbal treatment, 
          especially if you are pregnant, nursing, taking medications, or have a medical condition.
        </p>
      </div>
    </div>
  );
}
