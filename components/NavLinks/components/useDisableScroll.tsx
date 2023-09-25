import { useEffect } from 'react';

export function useDisableScroll(open: boolean): void {
  // Schakelt scrollen uit wanneer het mobiele menu wordt geopend
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [open]);
}