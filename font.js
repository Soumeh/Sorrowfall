View rootView = inflater.inflate(R.layout.fragment1, container, false);
mWebView = (WebView) rootView.findViewById(R.id.enter_text);

//Font must be placed in assets/fonts folder
String text = "<html><style type='text/css'>@font-face { font-family: Minecraftia; src: url('fonts/Minecraftia.ttf'); } body p {font-family: Minecraftia;}</style>" 
+ "<body >" + "<p align=\"justify\" style=\"font-size: 22px; font-family: Minecraftia;\">" + getString(R.string.enter_text) + "</p> "+ "</body></html>";
mWebView.loadDataWithBaseURL("file:///android_asset/",text,"text/html","utf-8",null);
return rootView;