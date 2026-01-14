import React from 'react';
import { AlertTriangle, Lock } from 'lucide-react';

export const EnvError: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-md">
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-neutral-900/80 border border-red-500/20 shadow-2xl flex flex-col items-center p-10 text-center glass">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0" />
        
        <div className="mb-8 p-5 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-500">
          <Lock className="w-12 h-12" />
        </div>

        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-black tracking-tight leading-tight text-white uppercase">
            Acceso Restringido
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Falta la configuración de la <span className="text-red-400 font-bold italic">API Key</span> en el archivo <code className="bg-white/5 px-2 py-1 rounded">.env</code>
          </p>
        </div>

      </div>
    </div>
  );
};
