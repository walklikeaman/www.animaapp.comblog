import React, { useState, useEffect } from 'react';
import { demonstrateAnimaIntegration } from '../lib/anima';

interface AnimaIntegrationProps {
  className?: string;
}

const AnimaIntegration: React.FC<AnimaIntegrationProps> = ({ className = '' }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnimaDemo = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await demonstrateAnimaIntegration();
      setResult(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`p-6 bg-gray-50 rounded-lg border ${className}`}>
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        🎨 Anima SDK Integration Demo
      </h3>
      
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This demonstrates the Anima SDK integration for design-to-code automation.
          The SDK can analyze designs and generate React components automatically.
        </p>
        
        <button
          onClick={handleAnimaDemo}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? '🔄 Processing...' : '🚀 Run Anima SDK Demo'}
        </button>
        
        {result && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <h4 className="font-medium text-green-800 mb-2">✅ Anima SDK Result:</h4>
            <pre className="text-xs text-green-700 bg-green-100 p-2 rounded overflow-x-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
        
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <h4 className="font-medium text-red-800 mb-2">❌ Error:</h4>
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}
        
        <div className="text-xs text-gray-500 mt-4">
          <p><strong>Anima SDK Features:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Design analysis and component extraction</li>
            <li>Automatic React code generation</li>
            <li>Tailwind CSS integration</li>
            <li>TypeScript support</li>
            <li>Design system consistency</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnimaIntegration;
