/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    swcMinify: true,
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        runtimeCaching
    },
});
