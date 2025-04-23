require('./keep_alive'); // Keep-alive serverni ishga tushirish
const { spawn } = require('child_process');


function startBot(script, config, username, password) {
    const botProcess = spawn('node', [script, config, 'hypixel.uz', '25565', username, password]);

    botProcess.stdout.on('data', (data) => {
        console.log(`[${username}] ${data}`);
    });

    botProcess.stderr.on('data', (data) => {
        console.error(`[${username} ERROR] ${data}`);
    });

    botProcess.on('exit', (code) => {
        console.log(`[${username}] exited with code ${code}`);
    });
}

// Emerald block yasovchi bot
startBot('nezer1.js', 'nezer1.json', 'FORTUNE_10', 'fort54321');

// Netherite ingot yasovchi bot
startBot('nezer2.js', 'nezer2.json', 'FORTUNE_09', 'fort54321');
