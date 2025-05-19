import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkFrame = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="frame"><path id="Vector" d="M21 6.6H3M21 17.4H3M6.6 3V21M17.4 3V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkFrame);
export default ForwardRef;