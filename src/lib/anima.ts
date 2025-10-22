import { AnimaSDK } from '@animaapp/anima-sdk';

// Anima SDK configuration
const ANIMA_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6IjY4YzczODA1ZmRjYzJhODkwMGRiYzI4NyIsImRlZmF1bHRUZWFtSWQiOiI2OGM3MzgwNmZkY2MyYTg5MDBkYmMyOGEiLCJpYXQiOjE3NTc4ODY2MDIsImV4cCI6MTc4OTQyMjYwMiwibmJmIjoxNzU3ODg2NjAyfQ.kNz1SOq2TkKau7ZdzbABxrdgpYexZcicniUu8j1Cv_A';

// Initialize Anima SDK
export const animaSDK = new AnimaSDK({
  apiKey: ANIMA_API_KEY,
});

// Interface for Anima design data
export interface AnimaDesign {
  id: string;
  name: string;
  url: string;
  components: any[];
  styles: any;
}

// Function to generate React code from Anima design
export async function generateReactCodeFromDesign(designUrl: string): Promise<string> {
  try {
    console.log('🎨 Anima SDK: Generating React code from design...');
    
    // Use Anima SDK to analyze the design
    const design = await animaSDK.analyzeDesign(designUrl);
    
    // Generate React components
    const reactCode = await animaSDK.generateReactCode({
      designUrl,
      framework: 'react',
      styling: 'tailwind',
      typescript: true,
    });
    
    console.log('✅ Anima SDK: React code generated successfully');
    return reactCode;
  } catch (error) {
    console.error('❌ Anima SDK Error:', error);
    throw error;
  }
}

// Function to demonstrate Anima SDK integration
export async function demonstrateAnimaIntegration() {
  try {
    console.log('🚀 Anima SDK: Starting integration demonstration...');
    
    // Example: Analyze a design URL (this would be a real Figma/design URL in practice)
    const exampleDesignUrl = 'https://www.animaapp.com/blog';
    
    // Generate React code from design
    const reactCode = await generateReactCodeFromDesign(exampleDesignUrl);
    
    console.log('📝 Anima SDK: Generated React code:', reactCode);
    
    return {
      success: true,
      reactCode,
      message: 'Anima SDK integration successful'
    };
  } catch (error) {
    console.error('❌ Anima SDK Integration Error:', error);
    return {
      success: false,
      error: error.message,
      message: 'Anima SDK integration failed'
    };
  }
}

// Export the SDK instance for direct use
export default animaSDK;
