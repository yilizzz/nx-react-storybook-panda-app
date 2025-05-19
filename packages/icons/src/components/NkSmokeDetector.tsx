import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkSmokeDetector = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="smoke-detector"><path id="Vector" d="M16.56 12.0473C19.2267 15.3609 13.8933 16.6864 16.56 20M12 12.0473C14.6667 15.3609 9.33333 16.6864 12 20M7.44 12.0473C10.1067 15.3609 4.77333 16.6864 7.44 20M18 4H6M16.6667 4C16.6667 6.77116 14.996 9.30177 12 9.30177C9.00399 9.30177 7.33333 6.77116 7.33333 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkSmokeDetector);
export default ForwardRef;