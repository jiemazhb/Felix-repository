const fs = require('fs');
const path = require('path');
const os = require('os');

// 创建一个文件并写入内容
fs.writeFileSync('example.txt', 'This is a test file.');
console.log('File written successfully.');

// 读取文件内容
const data = fs.readFileSync('example.txt', 'utf-8');
console.log('File content:', data);

// 打印当前路径和文件名
console.log('Current directory:', __dirname);
console.log('Current file:', __filename);

// 打印操作系统信息
console.log('Operating System:', os.platform());
console.log('CPU Info:', os.cpus());
