const fs = require('fs');

const initialCount = 50000;
const filePath = 'counter.txt';

let currentCount;

try {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  currentCount = parseInt(fileContent, 10);
  if (isNaN(currentCount)) {
    currentCount = 0;
  }
} catch (error) {
  currentCount = 0;
}

currentCount += 1;

fs.writeFileSync(filePath, currentCount.toString());

console.log(`Visitor count updated to: ${currentCount + initialCount}`);
