/**
 * @author Ataul
 * @first_created September 3, 2008
 * @last_updated September 3, 2008
 */

package AConv;
 
import io.*; 
public class Conv {

	String Abbreviation[];
	String Code[];
	String b;
	
	public Conv(){
		b = new String();
	}
	
	public void toCodePress(){
		for(int i=0;i<Abbreviation.length;i++){
			b = "{ input : '";
			b+=Abbreviation[i];
			b+="', output : '";
			b+=Code[i];
			b+="' },";
			file.writeFile(b);
		}
		
	}
	
	public void toNPP(){
		for(int i=0;i<Abbreviation.length;i++){
			b=Abbreviation[i];
			b+="=";
			b+=Code[i];			
			file.writeFile(b);
		}		
	}
	
	public void toNetBeans(){
		for(int i=0;i<Abbreviation.length;i++){
			b = "<codetemplate abbreviation=\"";
			b+=Abbreviation[i];
			b+="\" xml:space=\"preserve\">";
			file.writeFile(b);
			b="	<code>";
			b+=Code[i];
			b+="</code>";
			file.writeFile(b);
			b="</codetemplate>";
			file.writeFile(b);
		}
		
	}
	
	public static void main(String args[]){
	
	}
	
};
