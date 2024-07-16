function detectMobile() {
    const userAgent = navigator.userAgent.toLowerCase();
    const agents = [
        'android',
        'webos',
        'iphone',
        'ipad',
        'ipod',
        'blackberry',
        'windows phone',
    ]
    return agents.some(agent => userAgent.includes(agent));
}