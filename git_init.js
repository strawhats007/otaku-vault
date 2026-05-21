const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Install isomorphic-git locally if not present
try {
    require.resolve('isomorphic-git');
} catch (e) {
    console.log("Installing isomorphic-git for programmatic git operations...");
    execSync('npm install isomorphic-git --no-save', { stdio: 'inherit' });
}

const git = require('isomorphic-git');

// Helper to recursively walk a directory and list relative filepaths
function walkDir(dir, baseDir = dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        const relativePath = path.relative(baseDir, fullPath);

        // Ignore standard git files, node_modules, and typical IDE configs
        if (file === '.git' || file === 'node_modules' || file === '.vscode' || file === '.idea') {
            return;
        }

        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(fullPath, baseDir));
        } else {
            results.push(relativePath);
        }
    });
    return results;
}

async function run() {
    const dir = __dirname;
    console.log(`Initializing Git repository in: ${dir}`);

    // 1. Git Init
    await git.init({ fs, dir });
    console.log("Git repository initialized successfully!");

    // 2. Walk directory and add all files
    const files = walkDir(dir);
    console.log(`Found ${files.length} files to add.`);

    for (const filepath of files) {
        await git.add({ fs, dir, filepath });
        console.log(`Added: ${filepath}`);
    }

    // 3. Commit
    const sha = await git.commit({
        fs,
        dir,
        author: {
            name: 'mahmudulahsan2005',
            email: 'mahmudulahsan2005@gmail.com'
        },
        message: 'Initial commit - OtakuVault E-commerce Website'
    });

    console.log(`Initial commit created successfully! Hash: ${sha}`);
}

run().catch(console.error);
