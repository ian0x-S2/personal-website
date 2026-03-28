"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 8×8 Bayer ordered dithering matrix (threshold map).
 * Values 0–63, normalised to 0–255 in the algorithm.
 */
const BAYER_8x8 = [
  [  0, 32,  8, 40,  2, 34, 10, 42],
  [ 48, 16, 56, 24, 50, 18, 58, 26],
  [ 12, 44,  4, 36, 14, 46,  6, 38],
  [ 60, 28, 52, 20, 62, 30, 54, 22],
  [  3, 35, 11, 43,  1, 33,  9, 41],
  [ 51, 19, 59, 27, 49, 17, 57, 25],
  [ 15, 47,  7, 39, 13, 45,  5, 37],
  [ 63, 31, 55, 23, 61, 29, 53, 21],
];

// Paper (#F4F1EA) and Ink (#1C1C1A) in 8-bit RGB
const PAPER = [244, 241, 234] as const;
const INK   = [ 28,  28,  26] as const;

interface DitherImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Hover to gradually reveal the original photo. Default: true */
  revealOnHover?: boolean;
}

export function DitherImage({
  src,
  alt,
  width,
  height,
  className = "",
  revealOnHover = true,
}: DitherImageProps) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded,  setIsLoaded]  = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      canvas.width  = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      const imageData = ctx.getImageData(0, 0, width, height);
      const { data }  = imageData;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const i = (y * width + x) * 4;
          // Perceptual luminance
          const gray =
            0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
          // Threshold from Bayer matrix, scaled to [0, 255]
          const threshold = (BAYER_8x8[y % 8][x % 8] / 64) * 255;
          const [r, g, b] = gray > threshold ? PAPER : INK;
          data[i]     = r;
          data[i + 1] = g;
          data[i + 2] = b;
          // alpha unchanged
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setIsLoaded(true);
    };

    img.src = src;
  }, [src, width, height]);

  return (
    <div
      className={`relative overflow-hidden ${revealOnHover ? "cursor-crosshair" : ""} ${className}`}
      style={{ width, height }}
      onMouseEnter={() => revealOnHover && setIsHovered(true)}
      onMouseLeave={() => revealOnHover && setIsHovered(false)}
    >
      {/* Placeholder while processing */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-secondary dither-dots"
          style={{ width, height }}
        />
      )}

      {/* Dithered canvas */}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          display: "block",
          imageRendering: "pixelated",
          opacity: isHovered && revealOnHover ? 0 : isLoaded ? 1 : 0,
          transition: "opacity 0.9s ease",
        }}
      />

      {/* Original photo — fades in on hover */}
      {revealOnHover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{
            position: "absolute",
            inset: 0,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.9s ease",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
    </div>
  );
}
