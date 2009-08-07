/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package AConv.io;

import java.io.*;

/**
 *
 * @author Ataul
 * @version 2.0
 * @first_created May 13, 2008
 * @last_modified May 13, 2008
 */
public class AFile {
        private FileOutputStream fout;	

	public void OpenFile(String FileName)
	{	
		try{
			fout = new FileOutputStream (FileName,true);					
		}
		catch(Exception e)
		{
		
		}				
	}
	
	public void writeFile(String data)
	{		
		new PrintStream(fout).println(data);		
	}
	
	public void CloseFile(){
		try{
			fout.close();			
		}
		catch(Exception e)
		{
		
		}		
	}


}
