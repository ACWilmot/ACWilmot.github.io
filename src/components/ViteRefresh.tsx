
import React, { useEffect } from 'react';

/**
 * This is a utility component to help with Vite module invalidation issues.
 * It doesn't render anything and is only used to force proper module refreshes.
 */
const ViteRefresh: React.FC = () => {
  useEffect(() => {
    // This empty effect just ensures the component is properly processed by Vite
    return () => {
      // Clean up function
    };
  }, []);

  return null;
};

export default ViteRefresh;
