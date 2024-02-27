import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const src = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'build');
const test = resolve(__dirname, 'test');
const snapshots = resolve(__dirname, 'snapshots');

export default {
    plugins: [vue()],
    resolve: {
        alias: { '@': src, '@test': test }
    },
    build: {
        lib: {
            entry: `${ src }/index.ts`,
            name: 'LktFieldFileSelect',
            fileName: 'build',
            formats: ['es']
        },
        outDir,
        minify: true,
        rollupOptions: {
            external: [
                'vue',
                'lkt-field-file',
                'lkt-field-select',
                'lkt-ts-interfaces',
                'lkt-http-client',
                'lkt-field-text',
                'lkt-button',
                'lkt-modal',
                'lkt-modal-crud',
                'lkt-string-tools'
            ],
            output: {
                globals: {
                    vue: 'Vue',
                },
                sourcemapExcludeSources: true
            }
        }
    },
    test: {
        coverage: {
            reporter: [ 'text', 'lcov' ]
        },
        resolveSnapshotPath: (testPath, snapExtension) => {
            const path = testPath.split('/').splice(-2);
            return `${ snapshots }/${ path[0] }/${ path[1] }${ snapExtension }`;
        }
    }
};