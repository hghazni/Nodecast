'use strict';

const babel = {
    presets: [
        [
            '@babel/env',
            {
                targets: {
                    node: '10.16.0',
                },
            },
        ],
        '@babel/typescript',
    ],
};

module.exports = babel;