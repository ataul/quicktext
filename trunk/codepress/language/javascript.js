/*
 * CodePress regular expressions for JavaScript syntax highlighting
 */
 
// JavaScript
Language.syntax = [ 
	{ input : /\"(.*?)(\"|<br>|<\/P>)/g, output : '<s>"$1$2</s>' }, // strings double quote
	{ input : /\'(.*?)(\'|<br>|<\/P>)/g, output : '<s>\'$1$2</s>' }, // strings single quote
	{ input : /\b(break|continue|do|for|new|this|void|case|default|else|function|return|typeof|while|if|label|switch|var|with|catch|boolean|int|try|false|throws|null|true|goto)\b/g, output : '<b>$1</b>' }, // reserved words
	{ input : /\b(alert|isNaN|parent|Array|parseFloat|parseInt|blur|clearTimeout|prompt|prototype|close|confirm|length|Date|location|Math|document|element|name|self|elements|setTimeout|navigator|status|String|escape|Number|submit|eval|Object|event|onblur|focus|onerror|onfocus|onclick|top|onload|toString|onunload|unescape|open|valueOf|window|onmouseover)\b/g, output : '<u>$1</u>' }, // special words
	{ input : /([^:]|^)\/\/(.*?)(<br|<\/P)/g, output : '$1<i>//$2</i>$3' }, // comments //
	{ input : /\/\*(.*?)\*\//g, output : '<i>/*$1*/</i>' } // comments /* */
]

Language.snippets = [
	{ input : 'dw', output : 'document.write(\'$0\');' },
	{ input : 'getid', output : 'document.getElementById(\'$0\')' },
	{ input : 'fun', output : 'function $0(){\n\t\n}' },
	{ input : 'func', output : 'function $0(){\n\t\n}' },
	{ input : 'extcombo', output: 'new Ext.form.ComboBox({\n\tstore: new Ext.data.Store({\n\tproxy: new Ext.data.HttpProxy({url: \'$0.php\'}),\n\treader:	new Ext.data.JsonReader({id: 1},\n\t\t[\n\t\t\t{name: \'id\'},\n\t\t\t{name: \'\'},\n\t\t])\n\t\t}),\n\tfieldLabel:\'\',\n\tdisplayField:\'\',\n\tvalueField:\'\',\n\thiddenName: \'\',\n\ttypeAhead: true,\n\ttriggerAction:  \'all\',\n\temptyText:\'Select...\',\n\tselectOnFocus:true\n});\n' },
	{ input : 'extconn', output: 'var c = new Ext.data.Connection;\n\tc.request({\n\t\tmethod: \'GET\', \n\t\turl: \'$0.php?\'+param,\n\t\tcallback: doResponse,\n\t\twaitMsg: \'Please wait ....\'\n\t\t});\n		};\n\n	doResponse = function (object, success, response){\n		if(success) {\n\t\tExt.Msg.alert(\'Success\',\'\');\n				}else{\t\t\t\n\t\t\tExt.Msg.alert(\'Error\',\'Failed! Please try again.\');\n\t\t}\n\t}' },
	{ input : 'extform', output: 'new Ext.FormPanel({\n\tlabelWidth: 75,\n	frame: true,\n	url: \'$0\',\n	title: \'\',\n	items: [\n	],\n\tbuttons: [{\n\t\t\ttext: \'\',\n						handler:function(){\n\t\t\t\t\t}\n\t\t\t\t}]\n\t\t});\n'},
	{ input : 'extformsubmit', output: '$0.form.submit({\n\\t\t\twaitMsg: \'Please wait whilesaving.......\',\n\t\t\tsuccess: function(){\n\t\t\tExt.Msg.alert(\'Information\',\'Successfully saved.\');\n\t\t\t},\n\t\t\tfailure: function(){\n\t\t\tExt.Msg.alert(\'Error\',\'Error while saving.\');\n\t\t\t}\n\t\t});\n'},
	{ input : 'ce', output: 'var $0 = document.createElement(\'\');'},
	{ input : 'docid', output: 'document.getElementById(\'$0\');'}
]

Language.complete = [
	{ input : '\'',output : '\'$0\'' },
	{ input : '"', output : '"$0"' },
	{ input : '(', output : '\($0\)' },
	{ input : '[', output : '\[$0\]' },
	{ input : '{', output : '{\n\t$0\n}' }		
]

Language.shortcuts = []
