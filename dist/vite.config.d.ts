declare namespace _default {
    const plugins: import("vite").Plugin[];
    namespace resolve {
        const alias: {
            '@': string;
            '@test': string;
        };
    }
    namespace build {
        namespace lib {
            const entry: string;
            const name: string;
            function fileName(format: any): string;
        }
        const minify: boolean;
        namespace rollupOptions {
            const external: string[];
            namespace output {
                namespace globals {
                    const vue: string;
                }
                const sourcemapExcludeSources: boolean;
            }
        }
    }
    namespace test {
        namespace coverage {
            const reporter: string[];
        }
        function resolveSnapshotPath(testPath: any, snapExtension: any): string;
    }
}
export default _default;
