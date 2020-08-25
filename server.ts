import { WebView } from "https://deno.land/x/webview/mod.ts";
import {html} from './public/index.ts'


await new WebView({
  title: "Page",
  url: `data:text/html,${encodeURIComponent(html)}`,
  height: 600,
  resizable: true,
  debug: true,
  frameless: false,
}).run();