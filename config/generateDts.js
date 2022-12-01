const fs = require('fs');
const { resolve } = require('path');

function main() {
    const data = fs.readFileSync(resolve(process.cwd(), 'src/declaration.ts')).toString();
    fs.writeFileSync(resolve(process.cwd(), 'dist/index.d.ts'), data);
}

main();