WebView web = (WebView)findViewById(R.id.webby);
//For avoiding a weird error message
web.setLayerType(View.LAYER_TYPE_SOFTWARE, null);

String webContent = "<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><link rel=\"stylesheet\" href=\"stylesheet.css\"></head>"
                            + "<body><img src='image.png' width=\"100px\"><div class=\"running\">I am a text rendered with INDIGO</div></body></html>";
String internalFilePath = "file://" + getFilesDir().getAbsolutePath() + "/";
web.loadDataWithBaseURL(internalFilePath, webContent, "text/html", "UTF-8", "");