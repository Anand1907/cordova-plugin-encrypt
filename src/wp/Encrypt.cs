/*  
	MIT License
*/

using System;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using Microsoft.Phone.Info;
using System.IO.IsolatedStorage;
using System.Windows.Resources;
using System.IO;
using System.Diagnostics;

namespace WPCordovaClassLib.Cordova.Commands
{
    public class Encrypt : BaseCommand
    {
        public void getKeyDetails(string notused)
        {

            string res = String.Format("\"getKey\":\"{0}\"",
                                        this.platform);

            res = "{" + res + "}";
            //Debug.WriteLine("Result::" + res);
            DispatchCommandResult(new PluginResult(PluginResult.Status.OK, res));
        }
        
        public string platform
        {
            get
            {
                return Environment.OSVersion.Platform.ToString();
            }
        }

    }
}
