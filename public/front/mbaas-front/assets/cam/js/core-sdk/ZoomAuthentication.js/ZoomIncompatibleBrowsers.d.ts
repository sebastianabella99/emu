/**
 * Special enum created to special case browsers with known ZoOm incompatibility.
 * Currently only includes an iOS Safari release that contained a bug making it incompatible with Web Assembly.
*/
export declare enum KnownIncompatibleBrowsers {
    noKnownBrowserIssues = "",
    iosIncompatibleSafari11Version = "Safari on iOS contains a known Web Assembly incompatibility issue.  Please upgrade your version of Safari to use ZoOm."
}
