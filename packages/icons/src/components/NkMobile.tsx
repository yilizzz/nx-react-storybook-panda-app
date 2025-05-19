import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkMobile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="mobile"><path id="Vector" d="M16.2857 3H7.71429C6.76751 3 6 3.80589 6 4.8V19.2C6 20.1941 6.76751 21 7.71429 21H16.2857C17.2325 21 18 20.1941 18 19.2V4.8C18 3.80589 17.2325 3 16.2857 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M10.5 6H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkMobile);
export default ForwardRef;