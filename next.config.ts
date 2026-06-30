import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática: genera /out con HTML+assets, ideal para Firebase Hosting.
  output: "export",
  images: {
    // El optimizador de imágenes no está disponible en export estático.
    unoptimized: true,
  },
};

export default nextConfig;
