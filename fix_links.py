import re
import sys

with open(sys.argv[1], 'r') as f:
    content = f.read()

def replace_a(match):
    attrs = match.group(1)
    href_match = re.search(r'href="([^"]+)"', attrs)
    if not href_match:
        return match.group(0)
    href = href_match.group(1)
    
    if href.endswith('.html'):
        to = '/' if href == 'index.html' else '/' + href[:-5]
        attrs = attrs.replace(f'href="{href}"', f'to="{to}"')
        return f"<Link {attrs}>"
    elif href.startswith('#'):
        # For hash links within page, just use a normal anchor
        return match.group(0)
    return match.group(0)

# We need to selectively replace </a> to </Link> if it was matched.
# It's easier to just replace all <a><a/> with <Link><Link/> if it has an href ending in .html
new_content = ""
for line in content.splitlines():
    if '.html"' in line:
        line = re.sub(r'<a ([^>]+)>', replace_a, line)
        line = line.replace('</a>', '</Link>')
    new_content += line + "\n"

with open(sys.argv[1], 'w') as f:
    f.write(new_content)

