import React, { useEffect } from 'react';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  title?: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] bg-[#080505] rounded-2xl border border-red-500/40 p-3 sm:p-4 shadow-[0_0_50px_rgba(224,58,46,0.4)] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center font-bold text-sm shadow-lg transition-transform hover:scale-110 cursor-pointer z-20"
          aria-label="Close Lightbox"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative overflow-hidden rounded-xl bg-black max-h-[75vh] flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title || 'Screenshot Proof'}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Title */}
        {title && (
          <div className="mt-3 text-center">
            <span className="font-['Special_Elite',monospace] text-sm text-[#e9f0ec]">
              {title}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
