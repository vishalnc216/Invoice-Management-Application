import { useState, useEffect } from "react";

export const useOnMount = (cb) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (mounted) return;
    cb && cb();
    setMounted(true);
  }, []);
};
