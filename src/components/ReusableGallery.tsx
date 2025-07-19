import { useEffect, useRef } from "react";
import ReusableOverlayTextForGallery from "./ReusableOverlayTextForGallery";

type GallerySection = {
  video: string;
  image: string;
  title: string;
  description: string;
};

type ReusableGalleryProps = {
  sections: GallerySection[];
};

const ReusableGallery = ({ sections }: ReusableGalleryProps) => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    videoRefs.current.forEach((videoEl, idx) => {
      if (!videoEl) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoEl.play().catch(() => {}); // start play
            } else {
              videoEl.pause(); // pause when out of view
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(videoEl);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 bg-white">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className="flex flex-col lg:flex-row gap-6 w-full bg-white px-6 lg:px-68 md:px-32"
        >
          {/* Video Section */}
          <div className="relative w-full lg:w-1/4 rounded-xl overflow-hidden h-[200px] lg:h-[700px]">
            <video
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              preload="none"
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/images/lazy_loader.png"
            >
              <source src={section.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Image Section with Overlay */}
          <div className="relative w-full rounded-xl overflow-hidden h-[700px]">
            <img
              src={section.image}
              alt={`Gallery ${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <ReusableOverlayTextForGallery
              title={section.title}
              description={section.description}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReusableGallery;
