import { useState } from "react";
import { Camera, Upload, Image as ImageIcon } from "lucide-react";

export function AIPlantIdentification() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl mb-2 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
          AI Plant Identification
        </h2>
        <p className="text-muted-foreground">
          Upload a photo to identify medicinal plants using AI
        </p>
      </div>

      {/* Upload Area */}
      <div className="bg-card border-2 border-dashed border-border rounded-lg p-12">
        <div className="flex flex-col items-center justify-center gap-6">
          {selectedImage ? (
            <div className="w-full max-w-md">
              <img
                src={selectedImage}
                alt="Selected plant"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="w-full py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Upload Different Image
              </button>
            </div>
          ) : (
            <>
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                <Camera className="w-10 h-10 text-muted-foreground" />
              </div>
              <div className="text-center">
                <h3 className="text-lg mb-2 text-card-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                  Upload Plant Image
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Take a photo or select from your device
                </p>
              </div>
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  <Upload className="w-5 h-5" />
                  <span>Choose Image</span>
                </div>
              </label>
            </>
          )}
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <ImageIcon className="w-8 h-8 mx-auto mb-2 text-primary" />
          <h4 className="mb-1 text-card-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
            High Quality
          </h4>
          <p className="text-sm text-muted-foreground">
            Upload clear photos for best results
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <Camera className="w-8 h-8 mx-auto mb-2 text-primary" />
          <h4 className="mb-1 text-card-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
            Multiple Angles
          </h4>
          <p className="text-sm text-muted-foreground">
            Capture leaves, flowers, and stems
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <Upload className="w-8 h-8 mx-auto mb-2 text-primary" />
          <h4 className="mb-1 text-card-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
            Instant Results
          </h4>
          <p className="text-sm text-muted-foreground">
            Get AI-powered identification
          </p>
        </div>
      </div>

      {/* Note */}
      <div className="mt-8 bg-muted border border-border rounded-lg p-4">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Note:</strong> This AI identification feature is currently a placeholder. 
          In a production environment, this would integrate with a plant identification API or ML model.
        </p>
      </div>
    </div>
  );
}