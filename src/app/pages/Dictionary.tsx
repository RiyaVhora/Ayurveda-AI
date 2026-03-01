import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import { plantsData } from "../data/plants";

export function Dictionary() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredPlants = plantsData.filter(
    (plant) =>
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.quickBenefit.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl mb-2 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
          Medicinal Dictionary
        </h2>
        <p className="text-muted-foreground">
          Explore traditional Ayurvedic medicinal plants and their uses
        </p>
      </div>

      {/* Search Bar with Glassmorphism Effect */}
      <div className="relative mb-8">
        <div 
          className="relative overflow-hidden rounded-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(6, 95, 70, 0.2)',
            boxShadow: '0 8px 32px rgba(6, 95, 70, 0.1)'
          }}
        >
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
          <input
            type="text"
            placeholder="Search herbs, trees, or ailments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-5 py-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-2xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          />
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground mb-4">
        {filteredPlants.length} plant{filteredPlants.length !== 1 ? "s" : ""} found
      </p>

      {/* Plant Cards List */}
      <div className="space-y-3">
        {filteredPlants.map((plant) => (
          <button
            key={plant.id}
            onClick={() => navigate(`/plant/${plant.id}`)}
            className="w-full bg-card border border-border rounded-2xl p-4 hover:shadow-lg transition-all duration-300 hover:border-primary/40 group"
          >
            <div className="flex items-center gap-4">
              {/* Circular Thumbnail */}
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                <img
                  src={plant.imageUrl}
                  alt={plant.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Plant Info */}
              <div className="flex-1 text-left">
                <h3 
                  className="text-lg mb-0.5"
                  style={{ 
                    fontFamily: 'var(--font-serif)',
                    color: '#065f46',
                    fontWeight: 600
                  }}
                >
                  {plant.name}
                </h3>
                <p 
                  className="text-sm text-muted-foreground italic mb-1"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {plant.scientificName}
                </p>
                <p className="text-sm text-foreground">
                  {plant.quickBenefit}
                </p>
              </div>

              {/* Arrow Icon */}
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        ))}
      </div>

      {/* No Results */}
      {filteredPlants.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
            <Search className="w-10 h-10 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">
            No plants found matching your search
          </p>
        </div>
      )}
    </div>
  );
}
