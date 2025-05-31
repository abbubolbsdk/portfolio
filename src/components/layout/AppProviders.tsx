"use client";

import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-16 w-16 animate-spin text-primary" />
          <p className="text-lg font-medium text-primary font-headline">Saif Khan</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AppProviders;
