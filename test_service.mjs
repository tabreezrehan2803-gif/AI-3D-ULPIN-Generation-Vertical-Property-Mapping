import { analyzePropertyImageWithAI } from './src/services/geminiVisionService';

// Test with a sample base64 image
const testBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAPUlEQVR42u3PMQEAAAgEIDd/0m/hBAU0mF4BAAAAAAAAAAAAAAAAwD8Pj8cDAAAAAAAAAAAAAAD40QB3gAADWk0o2QAAAABJRU5ErkJggg==';

try {
  const result = await analyzePropertyImageWithAI(testBase64);
  console.log('Floors:', result.building.floorsAboveGround);
  console.log('Type:', result.analysis.propertyType);
  console.log('Success!');
} catch (e) {
  console.error('Failed with error:', e);
}
