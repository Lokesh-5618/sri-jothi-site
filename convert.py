import re
import sys

def html_to_jsx(html):
    # class to className
    html = re.sub(r'\bclass=', 'className=', html)
    # for to htmlFor
    html = re.sub(r'\bfor=', 'htmlFor=', html)
    # self closing tags
    html = re.sub(r'<(img|hr|br|input|source|meta|link)([^>]*?)(?<!/)>', r'<\1\2 />', html)
    # style="margin-top:30px" to style={{marginTop: '30px'}}
    def style_repl(match):
        style_str = match.group(1)
        # simplistic conversion
        rules = style_str.split(';')
        jsx_rules = []
        for r in rules:
            r = r.strip()
            if not r: continue
            k, v = r.split(':', 1)
            k = k.strip()
            v = v.strip()
            # to camelCase
            k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
            jsx_rules.append(f"'{k}': '{v}'")
        return f"style={{{{ {', '.join(jsx_rules)} }}}}"
    html = re.sub(r'style="([^"]*)"', style_repl, html)
    
    # <!-- comments --> to {/* comments */}
    html = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', html, flags=re.DOTALL)
    
    return html

file_in = sys.argv[1]
with open(file_in, 'r') as f:
    html = f.read()

# Extract main tag content
main_match = re.search(r'<main[^>]*>(.*?)</main>', html, re.DOTALL)
if main_match:
    content = main_match.group(1)
else:
    content = html

jsx = html_to_jsx(content)

with open(sys.argv[2], 'w') as f:
    f.write(jsx)

