import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkPaint = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="paint"><path id="Vector" d="M16.5 5.5H17.5C18.6046 5.5 19.5 5.89543 19.5 7V9C19.5 10.1046 18.6046 11 17.5 11H10.5C9.94772 11 9.5 11.4477 9.5 12V20C9.5 20.5523 9.94772 21 10.5 21H11.5M16.5 5.5V4C16.5 3.44772 16.0523 3 15.5 3H5.5C4.94772 3 4.5 3.44772 4.5 4V7C4.5 7.55228 4.94772 8 5.5 8H15.5C16.0523 8 16.5 7.55228 16.5 7V5.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkPaint);
export default ForwardRef;