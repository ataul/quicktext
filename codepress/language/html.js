/*
 * CodePress regular expressions for HTML syntax highlighting
 */

// HTML
Language.syntax = [
	{ input : /(&lt;[^!]*?&gt;)/g, output : '<b>$1</b>'	}, // all tags
	{ input : /(&lt;a .*?&gt;|&lt;\/a&gt;)/g, output : '<a>$1</a>' }, // links
	{ input : /(&lt;img .*?&gt;)/g, output : '<big>$1</big>' }, // images
	{ input : /(&lt;\/?(button|textarea|form|input|select|option|label).*?&gt;)/g, output : '<u>$1</u>' }, // forms
	{ input : /(&lt;style.*?&gt;)(.*?)(&lt;\/style&gt;)/g, output : '<em>$1</em><em>$2</em><em>$3</em>' }, // style tags
	{ input : /(&lt;script.*?&gt;)(.*?)(&lt;\/script&gt;)/g, output : '<strong>$1</strong><tt>$2</tt><strong>$3</strong>' }, // script tags
	{ input : /=(".*?")/g, output : '=<s>$1</s>' }, // atributes double quote
	{ input : /=('.*?')/g, output : '=<s>$1</s>' }, // atributes single quote
	{ input : /(&lt;!--.*?--&gt.)/g, output : '<ins>$1</ins>' }, // comments 
	{ input : /\b(alert|window|document|break|continue|do|for|new|this|void|case|default|else|function|return|typeof|while|if|label|switch|var|with|catch|boolean|int|try|false|throws|null|true|goto)\b/g, output : '<i>$1</i>' } // script reserved words 
]

Language.snippets = [
	{ input : 'aref', output : '<a href="$0"></a>' },
	{ input : 'h1', output : '<h1>$0</h1>' },
	{ input : 'h2', output : '<h2>$0</h2>' },
	{ input : 'h3', output : '<h3>$0</h3>' },
	{ input : 'h4', output : '<h4>$0</h4>' },
	{ input : 'h5', output : '<h5>$0</h5>' },
	{ input : 'h6', output : '<h6>$0</h6>' },
	{ input : 'rq', output: 'resources/query/$0'},
	{ input : 'ri', output: 'resources/includes/$0'},
	{ input : 'rc', output: 'resources/components/$0'},
	{ input : 'rs', output: 'resources/sitefiles/$0'},
	{ input : 'rc', output: 'resources/css/$0'},
	{ input : 'rj', output: 'resources/js/$0'},
	{ input : 'rimg', output: 'resources/images/$0'},
	{ input : 'html', output : '<html>\n\t$0\n</html>' },
	{ input : 'head', output : '<head>\n\t<meta http-equiv="content-type" content="text/html; charset=utf-8" />\n\t<title>$0</title>\n\t\n</head>' },
	{ input : 'img', output : '<img src="$0" alt="" />' },
	{ input : 'input', output : '<input name="$0" id="" type="" value="" />' },
	{ input : 'label', output : '<label for="$0"></label>' },
	{ input : 'legend', output : '<legend>\n\t$0\n</legend>' },
	{ input : 'link', output : '<link rel="stylesheet" href="$0" type="text/css" media="screen" charset="utf-8" />' },		
	{ input : 'base', output : '<base href="$0" />' }, 
	{ input : 'body', output : '<body>\n\t$0\n</body>' }, 
	{ input : 'css', output : '<link rel="stylesheet" href="$0" type="text/css" media="screen" charset="utf-8" />' },
	{ input : 'div', output : '<div>\n\t$0\n</div>' },
	{ input : 'divid', output : '<div id="$0">\n\t\n</div>' },
	{ input : 'dl', output : '<dl>\n\t<dt>\n\t\t$0\n\t</dt>\n\t<dd></dd>\n</dl>' },
	{ input : 'fieldset', output : '<fieldset>\n\t$0\n</fieldset>' },
	{ input : 'form', output : '<form action="$0" method="" name="">\n\t\n</form>' },
	{ input : 'meta', output : '<meta name="$0" content="" />' },
	{ input : 'p', output : '<p>$0</p>' },
	{ input : 'script', output : '<script type="text/javascript" language="javascript" charset="utf-8">\n\t$0\t\n</script>' },
	{ input : 'scriptsrc', output : '<script src="$0" type="text/javascript" language="javascript" charset="utf-8"></script>' },
	{ input : 'extcombo', output: 'new Ext.form.ComboBox({\n\tstore: new Ext.data.Store({\n\tproxy: new Ext.data.HttpProxy({url: \'$0.php\'}),\n\treader:	new Ext.data.JsonReader({id: 1},\n\t\t[\n\t\t\t{name: \'id\'},\n\t\t\t{name: \'\'},\n\t\t])\n\t\t}),\n\tfieldLabel:\'\',\n\tdisplayField:\'\',\n\tvalueField:\'\',\n\thiddenName: \'\',\n\ttypeAhead: true,\n\ttriggerAction:  \'all\',\n\temptyText:\'Select...\',\n\tselectOnFocus:true\n});\n' },	
	{ input : 'extconn', output: 'var c = new Ext.data.Connection;\n\tc.request({\n\t\tmethod: \'GET\', \n\t\turl: \'$0.php?\'+param,\n\t\tcallback: doResponse,\n\t\twaitMsg: \'Please wait ....\'\n\t\t});\n		};\n\n	doResponse = function (object, success, response){\n		if(success) {\n\t\tExt.Msg.alert(\'Success\',\'\');\n				}else{\t\t\t\n\t\t\tExt.Msg.alert(\'Error\',\'Failed! Please try again.\');\n\t\t}\n\t}' },
	{ input : 'rndbox', output : '<div class="boxtop"><div><div class="tbg"></div></div></div><div class="boxrbg"><div class="boxlbg"><div class="boxwrap">\n$0\n</div></div></div><div class="boxbot"><div><div class="bbg"></div></div></div>'},
	{ input : 'rndcss', output : '.boxtop, .boxtop div {\n    height: 8px;\n    font-size: 1px;\n}\n.boxbot div,\n.boxbot{\n    height: 8px;\n    font-size: 1px;\n}\n.boxtop {\n    background: url(images/boxtright.gif) no-repeat top right;\n}\n.boxtop div {\n    background: url(images/boxtleft.gif) no-repeat top left;\n}\n.boxtop .tbg {\n    margin:0px 8px;\n    background: url(images/boxtbg.gif) repeat-x top right;\n}\n.boxbot .bbg {\n   \n margin:0 8px;\n    background: url(images/boxbbg.gif) repeat-x bottom;\n}\n.boxbot div {\n    background: url(images/boxbleft.gif) no-repeat bottom left;\n}\n.boxbot {\n    background: url(images/boxbright.gif) no-repeat bottom right;\n}\n\n.boxrbg {\n    background: url(images/boxrbg.gif) repeat-y top right;\n}\n.boxlbg {\n    background: url(images/boxlbg.gif) repeat-y top left;\n}\n.boxwrap {\n    margin:0pt 8px;\n    padding:5px 8px;\n    background: #F9F7ED;\n}\n'},
	{ input : 'span', output : '<span>$0</span>' },
	{ input : 'table', output : '<table border="$0" cellspacing="" cellpadding="">\n\t<tr><th></th></tr>\n\t<tr><td></td></tr>\n</table>' },
	{ input : 'style', output : '<style type="text/css" media="screen">\n\t$0\n</style>' }
]
	
Language.complete = [
	{ input : '\'',output : '\'$0\'' },
	{ input : '"', output : '"$0"' },
	{ input : '(', output : '\($0\)' },
	{ input : '[', output : '\[$0\]' },
	{ input : '{', output : '{\n\t$0\n}' }		
]

Language.shortcuts = []
