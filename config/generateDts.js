import {resolve} from 'path'
import fs from 'fs'

function main() {
    const data = fs.readFileSync(resolve(process.cwd(), 'src/declaration.ts')).toString();
    fs.writeFileSync(resolve(process.cwd(), 'dist/index.d.ts'), data);
}

main();
