#!/bin/bash
# One-shot script: init git, commit, push to GitHub.
# Repo sudah dibuat di github.com/ardikemara/yosihutamakarya-website
# Run script ini sekali aja dari Terminal Mac.

set -e
cd "$(dirname "$0")"

echo "===== Cleanup any broken .git ====="
rm -rf .git

echo "===== Setup git ====="
git init -b main 2>/dev/null || true
git config user.email "ardi.kemara1@gmail.com"
git config user.name "Ardi Kemara"

echo "===== Add files ====="
git add -A
git status --short

echo "===== Commit ====="
git commit -m "Initial commit: YK Chemical Construction website prototype" || echo "(commit might already exist)"

echo "===== Set remote ====="
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/ardikemara/yosihutamakarya-website.git

echo "===== Push (browser/keychain akan minta auth pertama kali) ====="
git push -u origin main

echo ""
echo "✓ Done! Repo sudah ke-push ke:"
echo "  https://github.com/ardikemara/yosihutamakarya-website"
echo ""
echo "Next: balik ke browser, refresh https://vercel.com/new"
echo "Cari 'yosihutamakarya-website' di list 'Import Git Repository' lalu klik Import."
