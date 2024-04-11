// 拷贝文件
import {resolve} from 'path'
import fs from 'fs'

let htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>js-func-tools</title>
</head>
<body>
<div id="example"></div>
</body>
</html>
`;

const copyFile = (url) => {
    fs.readdir(url, (err, data) => {
        if (data && data.length) {
            console.log(data);
            const arrCss = [];
            const arrJs = [];
            data.forEach(item => {
                if (item.endsWith('.css')) arrCss.push(`<link rel="stylesheet" href="./${item}">`);
                else if (item.endsWith('.js')) arrJs.push(`<script type="text/javascript" src="./${item}"></script>`);
            });
            htmlTemplate = htmlTemplate
                .replace('</head>', `${arrCss.join('')}</head>`)
                .replace('</body>', `${arrJs.join('')}</body>`)
                .replaceAll('\n', '')
                .replaceAll('    ', '');

            fs.writeFile(resolve(__dirname, `${url}/index.html`), htmlTemplate, err => {
                if (err) {
                    console.log(`${url}html写入出现错误 ${err.toString()}`);
                } else {
                    console.log(`${url}html完成!`);
                }
            });
        }
    });
};
const catalogs = ['../prod'];
catalogs.forEach(catalog => {
    copyFile(resolve(__dirname, catalog));
});
