/*
 * CodePress regular expressions for PHP syntax highlighting
 */

// PHP
Language.syntax = [
	{ input : /(&lt;[^!\?]*?&gt;)/g, output : '<b>$1</b>' }, // all tags
	{ input : /(&lt;style.*?&gt;)(.*?)(&lt;\/style&gt;)/g, output : '<em>$1</em><em>$2</em><em>$3</em>' }, // style tags
	{ input : /(&lt;script.*?&gt;)(.*?)(&lt;\/script&gt;)/g, output : '<ins>$1</ins><ins>$2</ins><ins>$3</ins>' }, // script tags
	{ input : /\"(.*?)(\"|<br>|<\/P>)/g, output : '<s>"$1$2</s>' }, // strings double quote
	{ input : /\'(.*?)(\'|<br>|<\/P>)/g, output : '<s>\'$1$2</s>'}, // strings single quote
	{ input : /(&lt;\?)/g, output : '<strong>$1' }, // <?.*
	{ input : /(\?&gt;)/g, output : '$1</strong>' }, // .*?>
	{ input : /(&lt;\?php|&lt;\?=|&lt;\?|\?&gt;)/g, output : '<cite>$1</cite>' }, // php tags
	{ input : /(\$[\w\.]*)/g, output : '<a>$1</a>' }, // vars
	{ input : /\b(false|true|and|or|xor|__FILE__|exception|__LINE__|array|as|break|case|class|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|for|foreach|function|global|if|include|include_once|isset|list|new|print|require|require_once|return|static|switch|unset|use|while|__FUNCTION__|__CLASS__|__METHOD__|final|php_user_filter|interface|implements|extends|public|private|protected|abstract|clone|try|catch|throw|this)\b/g, output : '<u>$1</u>' }, // reserved words
	{ input : /([^:])\/\/(.*?)(<br|<\/P)/g, output : '$1<i>//$2</i>$3' }, // php comments //
	{ input : /([^:])#(.*?)(<br|<\/P)/g, output : '$1<i>#$2</i>$3' }, // php comments #
	{ input : /\/\*(.*?)\*\//g, output : '<i>/*$1*/</i>' }, // php comments /* */
	{ input : /(&lt;!--.*?--&gt.)/g, output : '<big>$1</big>' } // html comments
]

Language.snippets = [
	{ input : 'if', output : 'if($0){\n\t\n}' },
	{ input : 'ifelse', output : 'if($0){\n\t\n}\nelse{\n\t\n}' },
	{ input : 'else', output : '}\nelse {\n\t' },
	{ input : 'elseif', output : '}\nelseif($0) {\n\t' },
	{ input : 'do', output : 'do{\n\t$0\n}\nwhile();' },
	{ input : 'inc', output : 'include_once("$0");' },
	{ input : 'fun', output : 'function $0(){\n\t\n}' },	
	{ input : 'func', output : 'function $0(){\n\t\n}' },	
	{ input : 'while', output : 'while($0){\n\t\n}' },
	{ input : 'for', output : 'for($i=0,$i<$0,$i++){\n\t\n}' },
	{ input : 'fore', output : 'foreach($0 as ){\n\t\n}' },
	{ input : 'foreach', output : 'foreach($0 as ){\n\t\n}' },
	{ input : 'echo', output : 'echo \'$0\';' },
	{ input : 'switch', output : 'switch($0) {\n\tcase "": break;\n\tdefault: ;\n}' },
	{ input : 'case', output : 'case "$0" : break;' },
	{ input : 'ret0', output : 'return false;' },
	{ input : 'retf', output : 'return false;' },
	{ input : 'ret1', output : 'return true;' },
	{ input : 'rett', output : 'return true;' },
	{ input : 'ret', output : 'return $0;' },
	{ input : 'def', output : 'define(\'$0\',\'\');' },
	{ input : 'select', output : 'select $0 from  where ' },
	{ input : 'SELECT', output : 'SELECT $0 FROM  WHERE ' },
	{ input : 'insert', output : 'insert into $0 \n()\nvalues()' },
	{ input : 'INSERT', output : 'INSERT INTO $0 \n()\nVALUES()' },
	{ input : 'update', output : 'update $0 set = ' },
	{ input : 'UPDATE', output : 'UPDATE $0 SET = ' },
	{ input : 'delete', output : 'delete from $0 where ' },
	{ input : 'DELETE', output : 'DELETE FROM $0 WHERE ' },	
	{ input : 'def', output: 'define(\'$0\',);' },
	{ input : 'enum', output: 'function enum_select($table,$field) {\n\t$result=mysql_query("SHOW COLUMNS FROM `$table` LIKE \'$field\'");\n\tif(mysql_num_rows($result)>0){\n\t\t$row=mysql_fetch_row($result);\n\t\t$options=explode("','", preg_replace("/(enum|set)\(\'(.+?)\'\)/","\\2", $row[1]));\n\t\t$options2 = array();\n\t$i=0;\n\t\tforeach ($options as $value) {\n\t\t\t$options2[$i]=$value;\n\t\t$i++;\n\t}\n\t} else {\n\t$options=array();\n\t}\n\treturn $options2;\n} ' },
	{ input : 'extcombo', output: 'new Ext.form.ComboBox({\n\tstore: new Ext.data.Store({\n\tproxy: new Ext.data.HttpProxy({url: \'$0.php\'}),\n\treader:	new Ext.data.JsonReader({id: 1},\n\t\t[\n\t\t\t{name: \'id\'},\n\t\t\t{name: \'\'},\n\t\t])\n\t\t}),\n\tfieldLabel:\'\',\n\tdisplayField:\'\',\n\tvalueField:\'\',\n\thiddenName: \'\',\n\ttypeAhead: true,\n\ttriggerAction:  \'all\',\n\temptyText:\'Select...\',\n\tselectOnFocus:true\n});\n' },
	{ input : 'extconn', output: 'var c = new Ext.data.Connection;\n\tc.request({\n\t\tmethod: \'GET\', \n\t\turl: \'$0.php?\'+param,\n\t\tcallback: doResponse,\n\t\twaitMsg: \'Please wait ....\'\n\t\t});\n		};\n\n	doResponse = function (object, success, response){\n		if(success) {\n\t\tExt.Msg.alert(\'Success\',\'\');\n				}else{\t\t\t\n\t\t\tExt.Msg.alert(\'Error\',\'Failed! Please try again.\');\n\t\t}\n\t}' },
	{ input : 'extform', output: 'new Ext.FormPanel({\n\tlabelWidth: 75,\n	frame: true,\n	url: \'$0\',\n	title: \'\',\n	items: [\n	],\n\tbuttons: [{\n\t\t\ttext: \'\',\n						handler:function(){\n\t\t\t\t\t}\n\t\t\t\t}]\n\t\t});\n'},
	{ input : 'extformsubmit', output: '$0.form.submit({\n\\t\t\twaitMsg: \'Please wait whilesaving.......\',\n\t\t\tsuccess: function(){\n\t\t\tExt.Msg.alert(\'Information\',\'Successfully saved.\');\n\t\t\t},\n\t\t\tfailure: function(){\n\t\t\tExt.Msg.alert(\'Error\',\'Error while saving.\');\n\t\t\t}\n\t\t});\n'},
	{ input : 'echo', output: 'echo "<br />The value is ".\$$0;' },
	{ input : 'loop', output : 'for($i=0;$i<$num;$i++)\n{\n$=mysql_result($result,$i,\'\');\n' },		
	{ input : 'q', output : '$result = mysql_query("SELECT * FROM $") or die(mysql_error());\n'},
	{ input : 'po', output : '$$0=$POST[\'\'];' },		
	{ input : 'get', output : '$GET[\'\'];' },
	{ input : 'cook', output : '$COOKIE[\'\'];' },
	{ input : 'init', output : 'mysql_connect("localhost","root","");\n@mysql_select_db($) or die( "Unable to select database");' },
	{ input : 'rq', output: 'resources/query/$0'},
	{ input : 'ri', output: 'resources/includes/$0'},
	{ input : 'rc', output: 'resources/components/$0'},
	{ input : 'rs', output: 'resources/sitefiles/$0'},
	{ input : 'rc', output: 'resources/css/$0'},
	{ input : 'rj', output: 'resources/js/$0'},
	{ input : 'rimg', output: 'resources/images/$0'},
	{ input : 'n', output : '$num = mysql_num_rows(\$result);\n' },
	{ input : 'num', output : '$num = \$result->numRows();' },
	{ input : 'res', output : '$=mysql_result($result,$i,\'\');\n' },	
	{ input : 'script', output : '<script type="text/javascript" src="$0" ></script>' },
	{ input : 'scriptsrc', output : '<script type="text/javascript">\n\t$0\n</script>' },
	{ input : 'aref', output : '<a href="$0"></a>' },
	{ input : 'h1', output : '<h1>$0</h1>' },
	{ input : 'h2', output : '<h2>$0</h2>' },
	{ input : 'h3', output : '<h3>$0</h3>' },
	{ input : 'h4', output : '<h4>$0</h4>' },
	{ input : 'h5', output : '<h5>$0</h5>' },
	{ input : 'h6', output : '<h6>$0</h6>' },
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
	{ input : 'rndbox', output : '<div class="boxtop"><div><div class="tbg"></div></div></div><div class="boxrbg"><div class="boxlbg"><div class="boxwrap">\n$0\n</div></div></div><div class="boxbot"><div><div class="bbg"></div></div></div>'},
	{ input : 'rndcss', output : '.boxtop, .boxtop div {\n    height: 8px;\n    font-size: 1px;\n}\n.boxbot div,\n.boxbot{\n    height: 8px;\n    font-size: 1px;\n}\n.boxtop {\n    background: url(images/boxtright.gif) no-repeat top right;\n}\n.boxtop div {\n    background: url(images/boxtleft.gif) no-repeat top left;\n}\n.boxtop .tbg {\n    margin:0px 8px;\n    background: url(images/boxtbg.gif) repeat-x top right;\n}\n.boxbot .bbg {\n   \n margin:0 8px;\n    background: url(images/boxbbg.gif) repeat-x bottom;\n}\n.boxbot div {\n    background: url(images/boxbleft.gif) no-repeat bottom left;\n}\n.boxbot {\n    background: url(images/boxbright.gif) no-repeat bottom right;\n}\n\n.boxrbg {\n    background: url(images/boxrbg.gif) repeat-y top right;\n}\n.boxlbg {\n    background: url(images/boxlbg.gif) repeat-y top left;\n}\n.boxwrap {\n    margin:0pt 8px;\n    padding:5px 8px;\n    background: #F9F7ED;\n}\n'},
	{ input : 'div', output : '<div>\n\t$0\n</div>' },
	{ input : 'divid', output : '<div id="$0">\n\t\n</div>' },
	{ input : 'dl', output : '<dl>\n\t<dt>\n\t\t$0\n\t</dt>\n\t<dd></dd>\n</dl>' },
	{ input : 'fieldset', output : '<fieldset>\n\t$0\n</fieldset>' },
	{ input : 'form', output : '<form action="$0" method="" name="">\n\t\n</form>' },
	{ input : 'meta', output : '<meta name="$0" content="" />' },
	{ input : 'p', output : '<p>$0</p>' },	
	{ input : 'psmass', output : '\$main_smarty->assign(\'$0\',\$);' },
	{ input : 'pisgod', output : '\$canIhaveAccess = 0;\n    \$canIhaveAccess = \$canIhaveAccess + checklevel(\'god\');\n    if(\$canIhaveAccess == 1) {\n	$\n}'},
	{ input : 'purl', output : 'my_base_url.my_pligg_base'},
	{ input : 'span', output : '<span>$0</span>' },
	{ input : 'sset', output : 'sfContext::getInstance()->getRequest()->setParameter(\'$0\', $); ' },
	{ input : 'sget', output : '$sf_request->getParameter(\'$0\');' },
	{ input : 'table', output : '<table border="$0" cellspacing="" cellpadding="">\n\t<tr><th></th></tr>\n\t<tr><td></td></tr>\n</table>' },
	{ input : 'style', output : '<style type="text/css" media="screen">\n\t$0\n</style>' },
	{ input : '<?', output : 'php\n$0\n?>' }
]

Language.complete = [
	{ input : '\'', output : '\'$0\'' },
	{ input : '"', output : '"$0"' },
	{ input : '(', output : '\($0\)' },
	{ input : '[', output : '\[$0\]' },
	{ input : '{', output : '{\n\t$0\n}' }		
]

Language.shortcuts = [
	{ input : '[space]', output : '&nbsp;' },
	{ input : '[enter]', output : '<br />' } ,
	{ input : '[j]', output : 'testing' },
	{ input : '[7]', output : '&amp;' }
]