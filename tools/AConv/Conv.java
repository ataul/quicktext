/**
 * @author Ataul
 * @first_created September 3, 2008
 * @last_updated September 24, 2008
 */

package AConv;
 
import AConv.io.*; 
import java.io.*;
import java.util.*;

public class Conv {

	String Abbreviation[];
	String Code[];
	String b;
	String version;
	FileOp file;
	
	public Conv(){
		b = new String();
		version = "0.2";
		this.file = new FileOp();
	}
	
	public void toCodePress(String FileName){
		file.OpenFile(FileName);
		for(int i=0;i<Abbreviation.length;i++){
			b = "{ input : '";
			b+=Abbreviation[i];
			b+="', output : '";
			b+=Code[i];
			b+="' },";
			file.writeFile(b);
		}
		file.CloseFile();
	}
	
	public void toNPP(String FileName){
		file.OpenFile(FileName);
		for(int i=0;i<Abbreviation.length;i++){
			b=Abbreviation[i];
			b+="=";
			b+=Code[i];			
			file.writeFile(b);
		}
		file.CloseFile();	
	}
	
	public void toNetBeans(String FileName){
		file.OpenFile(FileName);
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
		file.CloseFile();
	}
	public void getDataConsole()
	{
		System.out.println("/*****************************************************/");
		System.out.println("/*                 AConv                   */");
		System.out.println("/*                 Version"+version+"                 */");
		System.out.println("/*             Created by: Atul               */");
		System.out.println("/*****************************************************/");
		try{
			BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
			String input=new String();		
			Vector v=new Vector();
			do
			{
				input=in.readLine();
				v.addElement(input);			
			}
			while(!input.equals(""));
			
			String[] arr=new String[v.size()-1];
			String[] arr2=new String[v.size()-1];
			for(int i=0;i<v.size()-1;i++)
			{
				String mixed = (String) v.elementAt(i);
				String[] mixedArray = mixed.split("|");
				arr[i]=mixedArray[0];
				arr2[i] = mixedArray[1];
			}
			Abbreviation=arr;
			Code = arr2;
			toNPP("QuickText.ini");
			toCodePress("php.js");
			toNetBeans("a.xml");
			
		}catch(Exception e){
			System.out.println(e);
		}
	}
	public static void main(String args[]){
		Conv a = new Conv();
		a.getDataConsole();
	}
	
};
