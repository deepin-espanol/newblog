function redirectPageIfNeeded(canonicalURL) {
  // Extract protocol and host from canonical URL
  var regexp = new RegExp("(https?:)//([^/]+)");
  var matches = regexp.exec(canonicalURL);
  var canonicalProto = matches[1];
  var canonicalHost = matches[2];

  // Current browser URL
  var href = location.href;

  // Track whether we need to redirect the browser
  var hrefRedirect = false;

  // Perform protocol redirect?
  if (location.protocol.toLowerCase() !== canonicalProto) {
  href =
    canonicalProto + // new protocol
    href.substring(location.protocol.length); // host + path
  hrefRedirect = true;
  }

  // Perform hostname redirect?
  if (location.host.toLowerCase() !== canonicalHost) {
  var pos = href.indexOf(location.host);
  href =
    href.substring(0, pos) + // protocol
    canonicalHost + // new host
    href.substring(pos + location.host.length); // path
  hrefRedirect = true;
  document.getElementsByTagName('http-equiv')["refresh"].content = "1; url={{ site.official_url }}{{ page.url }}";
  }

  // Perform protocol and/or host redirect as required
  if (hrefRedirect) {
  location.href = href;
  }
  }
  // Invoke
  redirectPageIfNeeded("{{ site.official_url }}");
