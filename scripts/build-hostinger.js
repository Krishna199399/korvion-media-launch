import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import AdmZip from "adm-zip";

console.log("🚀 Building Next.js static export for Hostinger...");
execSync("npx next build", { stdio: "inherit" });

console.log("📦 Packaging Linux POSIX-compliant hostinger-deploy.zip...");
const zip = new AdmZip();

function addDir(dirPath, zipPath = "") {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dirPath, item.name);
    const targetZipPath = zipPath ? zipPath + "/" + item.name : item.name;
    if (item.isDirectory()) {
      addDir(fullPath, targetZipPath);
    } else {
      const content = fs.readFileSync(fullPath);
      zip.addFile(targetZipPath, content);
    }
  }
}

addDir("out");
zip.writeZip("hostinger-deploy.zip");
console.log("✨ Success! Created hostinger-deploy.zip in your project root.");
