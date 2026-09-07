import re
import glob

with open('src/index.css', 'w') as out:
    with open('legacy_site/styles.css', 'r') as f:
        out.write(f.read() + '\n')
    
    for file in glob.glob('legacy_site/*.html'):
        with open(file, 'r') as f:
            html = f.read()
            match = re.search(r'<style>(.*?)</style>', html, re.DOTALL)
            if match:
                out.write(f'\n/* Styles from {file} */\n')
                out.write(match.group(1))
                out.write('\n')
