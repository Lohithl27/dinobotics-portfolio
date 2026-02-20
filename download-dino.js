const https = require('https');
const fs = require('fs');

const query = 't-rex transparent png filetype:png';
const options = {
    hostname: 'duckduckgo.com',
    port: 443,
    path: '/?q=' + encodeURIComponent(query) + '&t=h_&iar=images&iax=images&ia=images',
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
};

https.get(options, (res) => {
    let html = '';
    res.on('data', chunk => html += chunk);
    res.on('end', () => {
        const vqdMatch = html.match(/vqd=([\'\"]?)([a-zA-Z0-9\-]+)\1/);
        if (!vqdMatch) return console.log('No vqd');
        const vqd = vqdMatch[2];

        const apiPath = '/i.js?l=wt-wt&o=json&q=' + encodeURIComponent(query) + '&vqd=' + vqd + '&f=,,,&p=1';
        https.get('https://duckduckgo.com' + apiPath, { headers: options.headers }, (res2) => {
            let json = '';
            res2.on('data', c => json += c);
            res2.on('end', () => {
                const results = JSON.parse(json);
                if (results.results && results.results.length > 0) {
                    const imgUrl = results.results[0].image;
                    console.log('Found:', imgUrl);
                    https.get(imgUrl, { headers: options.headers }, (res3) => {
                        const file = fs.createWriteStream('public/trex.png');
                        res3.pipe(file);
                        file.on('finish', () => console.log('Saved!'));
                    });
                }
            });
        });
    });
});
