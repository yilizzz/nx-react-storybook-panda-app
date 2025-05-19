import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkTablet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="tablet"><path id="Vector" d="M17.7143 3H6.28571C5.02335 3 4 3.80589 4 4.8V19.2C4 20.1941 5.02335 21 6.28571 21H17.7143C18.9767 21 20 20.1941 20 19.2V4.8C20 3.80589 18.9767 3 17.7143 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M10.5 6H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkTablet);
export default ForwardRef;