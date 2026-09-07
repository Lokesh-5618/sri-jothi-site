import re
import sys
import os

def html_to_jsx(html):
    html = re.sub(r'\bclass=', 'className=', html)
    html = re.sub(r'\bfor=', 'htmlFor=', html)
    html = re.sub(r'<(img|hr|br|input|source|meta|link)([^>]*?)(?<!/)>', r'<\1\2 />', html)
    def style_repl(match):
        style_str = match.group(1)
        rules = style_str.split(';')
        jsx_rules = []
        for r in rules:
            r = r.strip()
            if not r: continue
            if ':' not in r: continue
            k, v = r.split(':', 1)
            k = k.strip()
            v = v.strip()
            k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
            jsx_rules.append(f"'{k}': '{v}'")
        return f"style={{{{ {', '.join(jsx_rules)} }}}}"
    html = re.sub(r'style="([^"]*)"', style_repl, html)
    html = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', html, flags=re.DOTALL)
    
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
            return match.group(0)
        return match.group(0)

    new_content = ""
    for line in html.splitlines():
        if '.html"' in line:
            line = re.sub(r'<a ([^>]+)>', replace_a, line)
            line = line.replace('</a>', '</Link>')
        new_content += line + "\n"

    return new_content

pages = ['about', 'products', 'customization', 'certifications', 'contact']

for p in pages:
    file_in = f"legacy_site/{p}.html"
    if not os.path.exists(file_in): continue
    
    with open(file_in, 'r') as f:
        html = f.read()

    main_match = re.search(r'<main[^>]*>(.*?)</main>', html, re.DOTALL)
    content = main_match.group(1) if main_match else html
    jsx = html_to_jsx(content)
    
    component_name = p.capitalize()
    
    out = f"""import React from 'react';
import {{ Link }} from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

export default function {component_name}() {{
  useScrollReveal();

  return (
    <>
{jsx}
    </>
  );
}}
"""
    with open(f"src/pages/{component_name}.jsx", 'w') as f:
        f.write(out)

