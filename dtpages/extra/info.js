const menu=`<li><a class="tocitem" href="$docs/zh/index.html">中文文档</a><ul><li><a class="tocitem" href="$docs/zh/usage.html">使用方式</a></li><li><a class="tocitem" href="$docs/zh/guidelines.html">规范</a></li><li><a class="tocitem" href="$docs/zh/notice.html">注意事项</a></li><li><a class="tocitem" href="$docs/zh/settings.html">设置</a></li><li><a class="tocitem" href="$docs/zh/extension.html">扩展</a></li></ul><li><li><a class="tocitem" href="$docs/en/index.html">English Docs</a><ul><li><a class="tocitem" href="$docs/en/usage.html">Usage</a></li><li><a class="tocitem" href="$docs/en/guidelines.html">Guidelines</a></li><li><a class="tocitem" href="$docs/en/notice.html">Notice</a></li><li><a class="tocitem" href="$docs/en/settings.html">Settings</a></li><li><a class="tocitem" href="$docs/en/extension.html">Extension</a></li></ul><li>`
const buildmessage=`built at 2022/7/14 14:10:30`
const page_foot=`Powered by <a href='https://github.com/JuliaRoadmap/DoctreePages.jl'>DoctreePages.jl</a> and its dependencies.`
const tar_css=`css`
const configpaths=        {'headroom': 'https://cdnjs.cloudflare.com/ajax/libs/headroom/0.10.3/headroom.min',
		'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min',
		'headroom-jquery': 'https://cdnjs.cloudflare.com/ajax/libs/headroom/0.10.3/jQuery.headroom.min',
		'katex': 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min',
		'highlight': 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min',
        'hljs-julia': 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/languages/julia.min',
		'hljs-julia-repl': 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/languages/julia-repl.min',
        'hljs-line-numbers': 'https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min'}
        
const configshim=        {"hljs-julia-repl": { "deps": ["highlight"] },
		"hljs-julia": {"deps": ["highlight"]},
        "hljs-line-numbers": { "deps": ["highlight"]},
		"headroom-jquery": { "deps": [ "jquery", "headroom" ]}}
        
const hljs_languages=['julia', 'julia-repl']
const main_requirement=['jquery', 'highlight', 'hljs-julia', 'hljs-julia-repl', 'hljs-line-numbers']
